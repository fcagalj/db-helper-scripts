const execa = require('execa');
const async = require('async');

function _getCommand() {
  return 'mongodump';
}

function _getArguments(opt) {
  var _a = [];
  for (var key in opt) {
    if (opt.hasOwnProperty(key)) {
      _a.push('--' + key);
      _a.push(opt[key]);
    }
  }
  return _a;
}

function mongoexport(opt) {
  return execa(_getCommand(), _getArguments(opt))
    .then(result => {


      return result;
      // return result.stdout || 'Success!';
    }).catch(err => {
      console.log('Error mongoexport: ', err);
    });
}

var opt = {
  host: '127.0.0.1:27017', //<hostname><:port>  Default: localhost:27017
  db: 'bb_editing',
  // out: '-'
  // collection: 'user',
  // fields: 'user,email,contact',
  // out: 'users.csv',
  // type: 'csv'
};
//mongoexport command should be in path variable
//all options for mongoexport command can be used

mongoexport(opt)
  .then(result => {
    console.log('Export result: ', result);
  })
  .catch(err => {
    console.log('Error exporting: ', err);
  });


