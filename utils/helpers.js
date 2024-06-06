module.exports = {
  formatDate: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleString();
  },
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
