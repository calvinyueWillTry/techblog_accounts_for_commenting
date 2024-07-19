module.exports = { //export to the dashboard and home handlebars files
  formatDate: (date) => { //function takes a date parameter as input
//calls the toLocaleString() method on date, 
    return date.toLocaleString();//stringnifies the date using the system's default locale and formatting options
  },// Formats date as MM/DD/YYYY
};
// module.exports = {

//   formatDate: (dated) => {
//     // Format date as MM/DD/YYYY (TODO)
//     const time = new Date(dated);
//     const month = time.getMonth()+1;
//     const day = time.getDate();
//     const year = time.getFullYear();
//     const hour = time.getHours();
//     const minutes = time.getMinutes()
//     return `${month}/${day}/${year} ${hour}:${minutes}`;
//     //return dated.toLocaleDateString();
//   },
// };
