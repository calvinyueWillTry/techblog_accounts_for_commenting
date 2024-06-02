const date = require('date-and-time');
module.exports = {//mongodb-macos-x86_64-7.0.11.tgz

  formatDate: (dated) => {
    // Format date as MM/DD/YYYY (TODO)
    const time = new Date(dated);
    const month = time.getMonth();
    const day = time.getDate();
    const year = time.getFullYear();
    return `${month}/${day}/${year}`;
    //return dated.toLocaleDateString();
  },
};
