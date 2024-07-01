# tech-blog
#Video Walkthrough
https://drive.google.com/file/d/1nyhZKwz4zx1-UxyIykv17RqcZgwQLBmu/view

#Overview
In summary for how this operates, the server.js page imports the folders and files and the npm installs that can be utilized, including express, sequelize and access restrictions.
In the controllers folder, the routes start with the index.js page at the top level of the folder, to direct to the correct page. 
<img width="1092" alt="Screen Shot 2024-06-07 at 12 24 37 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/b00aac7a-2fc9-4dc6-9c44-d0a193f0c7be">
In the controllers folder, there are the routes files that define what CRUD routes are being set, the names of those routes in the url, then how they operate.
<img width="1080" alt="Screen Shot 2024-06-07 at 12 26 13 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/9c6ab2fc-01d9-484c-a402-ffdc9094e0b2">
HomeRoutes.js, it is all get, because the homepage is where one selects where they want to navigate, for login, dashboard, signup or post (only if already logged in).
<img width="1070" alt="Screen Shot 2024-06-07 at 12 28 19 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/790274c6-5815-441e-9e53-65d725eaf349">
For DashboardRoutes, if the user if not logged in yet, it first gets that page from whichever other page the user is on at the moment. One can select a comment by clicking on a current posting (url adds "/new"), then renders only that selected  comment, one can elect to click the "Edit" button, and render the "/edit/:id" page for editing, which redirects to the api folder within.
In the api folder, the index.js file there directs on to the name of the routes, and which file to go to from there. 
<img width="986" alt="Screen Shot 2024-06-07 at 12 36 36 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/66c11cf5-62b2-4ab6-accf-3d680f25ba82">
commentRoutes allows one to post a new comment, creating a req.body for the title and comment through the Comment model (destructured on the file page), and then rendered in json format. 
<img width="1059" alt="Screen Shot 2024-06-07 at 12 38 57 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/38b28eee-32f2-4675-9027-dea9b6f8bd8d">
postRoutes.js allows one to take a selected post, and either PUT or DELETE, and then post it. 
<img width="1068" alt="Screen Shot 2024-06-07 at 12 40 50 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/c2889cf3-7977-411d-9adb-07da985b4ce6">
<img width="1040" alt="Screen Shot 2024-06-07 at 12 41 14 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/f4733c9d-383e-477a-b987-8bfc98588e3a">
userRoutes.js allows one to login and logout. 
<img width="889" alt="Screen Shot 2024-06-07 at 12 42 32 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/c63865f6-4181-4cea-a7cf-eee46c5c0202">
Connection.js allows one authorization, and enables access to the SQL database that is saving this data.
All of these are importing from the Models folder, which exports to the controllers folder, but renders components from the handlebars pages.
<img width="978" alt="Screen Shot 2024-06-07 at 12 45 59 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/aaa1c02e-49a0-47b8-b25f-12f84645ca5d">
Comments model, when the button is clicked to POST, turns the title and body inputted into objects, then fetches them to POST, and then json stringify them. 
editPost.js, there are 2 buttons to "Edit" or "Delete". "Edit" directs to the PUT function, "Delete" to the DELETE function.
login.js checks for matching credentials (username and password). It also utilizes the Utils folder for redirecting pages. If it matches, then enables access to the dashboard. If not, then the route is directed to alert the user and try again in the controllers folder. logout.js is simply click the logout button, and destroy the session.
newPost.js enables one to create a new post entirely by clicking the button, which renders the blank template for a new post. 
Each model generally follows the same format.
When rendered to handlebars, I was having trouble getting the handlebars pages to work, so I created new handlebars pages, then copied and pasted the templates to the new pages. 
<img width="956" alt="Screen Shot 2024-06-07 at 12 58 05 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/65c491fe-9d10-4b24-913a-c173541fca9d">
The main.handlebars ensures that every page has the same CSS, and each page renders the features and formats to not only keep everything in place.
<img width="922" alt="Screen Shot 2024-06-07 at 1 03 34 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/b0190b37-65ad-4438-b1c8-072ffbd42aa1">
Each handlebars page has {{a name of an exported object}} to allow for the rendering of specific information from the controllers folder. For example, the dashboard.handlebars page requires the href sourcing of the {{id}} of the user, 
comments.handlebars enable the same format to have the {{{body}}} for rendering inputs, followed by the {{user.username}}, {{createdAt}} for the title and text. followed by the {{title}} and {{formatDate createdAt}} sections for posting comments. Note that the {{formatDate}} is from the Utils folder, to render the time and date that it was posted. 
The following handlebars pages have no input, and only for format: editPost, Posting, register, signin and signup. 
