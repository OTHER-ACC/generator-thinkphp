'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var php = process.argv.splice(3);

module.exports = generators.Base.extend({


  initializing: function () {
    this.log(chalk.green.bold('PHP test Server is running!'));

  },

  end: function () {
    this.spawnCommand(php == null ? 'php' : php, ['-S', '127.0.0.1:3000']);
  
  }

});
