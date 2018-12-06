const execa      = require('execa');
const async      = require('async');
const options    = require('./../default-options.json');


function _getCommand() {
  return 'mongorestore';
}

function _getArguments(opt) {
  var _a = [];
  for (var key in opt) {
    if (opt.hasOwnProperty(key)) {
      _a.push('--' + key);
      if(opt[key]){
        _a.push(opt[key]);
      }
    }
  }
  return _a;
}

function mongoDump(opt) {
  return execa(_getCommand(), _getArguments(opt))
    .then(result => {


      return result;
    }).catch(err => {
      console.log('Error mongoDump: ', err);
    });
}

//mongodump command should be in path variable
//all options for mongodump command can be used

mongoDump(options.import)
  .then(result => {
    console.log('Result: ', result);
  })
  .catch(err => {
    console.log('Error exporting: ', err);
  });


