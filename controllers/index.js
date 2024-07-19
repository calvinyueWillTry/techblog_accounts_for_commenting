const router = require('express').Router();
//puts the files into variables 
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboardRoutes');
//allows the express Router to utilize these files with the following assigned names
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);//redirected to login if not logged in first
//line exports the router object so that it can be used in other parts of the application
module.exports = router;
