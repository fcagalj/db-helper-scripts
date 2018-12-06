const execa      = require('execa');
const async      = require('async');
const options    = require('./../default-options.json');


function _getCommand() {
  return 'mongodump';
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

function mongoexport(opt) {
  return execa(_getCommand(), _getArguments(opt))
    .then(result => {


      return result;
    }).catch(err => {
      console.log('Error mongoexport: ', err);
    });
}

//mongoexport command should be in path variable
//all options for mongoexport command can be used

mongoexport(options.import)
  .then(result => {
    console.log('Export result: ', result);
  })
  .catch(err => {
    console.log('Error exporting: ', err);
  });


