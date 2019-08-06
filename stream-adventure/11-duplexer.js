// https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
// https://www.npmjs.com/package/duplexer2

var spawn = require("child_process").spawn;
var duplexer2 = require("duplexer2");

module.exports = function(cmd, args) {
  const subprocess = spawn(cmd, args);
  return duplexer2(subprocess.stdin, subprocess.stdout);
};

// Official solution
/*
var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};
*/
