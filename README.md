# tech-blog
In summary for how this operates, the server.js page imports the folders and files and the npm installs that can be utilized, including express, sequelize and access restrictions.
In the controllers folder, the routes start with the index.js page at the top level of the folder, to direct to the correct page. 
<img width="1092" alt="Screen Shot 2024-06-07 at 12 24 37 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/b00aac7a-2fc9-4dc6-9c44-d0a193f0c7be">
In the controllers folder, there are the routes files that define what CRUD routes are being set, the names of those routes in the url, then how they operate.
<img width="1080" alt="Screen Shot 2024-06-07 at 12 26 13 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/9c6ab2fc-01d9-484c-a402-ffdc9094e0b2">
HomeRoutes.js, it is all get, because the homepage is where one selects where they want to navigate, for login, dashboard, signup or post (only if already logged in).
<img width="1070" alt="Screen Shot 2024-06-07 at 12 28 19 PM" src="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting/assets/158237430/790274c6-5815-441e-9e53-65d725eaf349">
For DashboardRoutes, if the user if not logged in yet, it first gets that page from whichever other page the user is on at the moment. One can select a comment by clicking on a current posting (url adds "/new"), then renders only that selected  comment, one can elect to click the "Edit" button, and render the "/edit/:id" page for editing, which redirects to the api folder within.
