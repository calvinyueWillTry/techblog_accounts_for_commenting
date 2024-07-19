const router = require('express').Router();//router in an Express application that 
const { Post } = require('../../models/');//from the models folder
const { apiGuard } = require('../../utils/authGuard'); //from authGuard.js
//Creates a new post in the database
router.post('/', apiGuard, async (req, res) => {
  const body = req.body; //uses the data from the request body
//Sends back the newly created post in JSON format if successful
  try {
    const newPost = await Post.create({ ...body, userId: req.session.user_id });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
}); //or an error response with status code 500 if there's a problem
//Updates an existing post in the database
router.put('/:id', apiGuard, async (req, res) => {
  try { //uses the data from the request body to update the post
    const [affectedRows] = await Post.update(req.body, { 
      where: {
        id: req.params.id,
      }, //based on the id parameter in the request URL
    });
//needs to be at leaset one post present
    if (affectedRows > 0) { 
      res.status(200).end();
    } else { //Sends a status code 200 if the post was successfully updated
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//Deletes a post from the database
router.delete('/:id', apiGuard, async (req, res) => {
  try { //based on the id parameter in the request URL
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//export these via router
module.exports = router;
