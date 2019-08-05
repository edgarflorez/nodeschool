const crypto = require("crypto");
const tar = require("tar");
const zlib = require("zlib");
const concat = require("concat-stream");

const parserTarFiles = new tar.Parse();
parserTarFiles.on("entry", function(e) {
  if (e.type !== "File") return e.resume();

  var h = crypto.createHash("md5", { encoding: "hex" });
  e.pipe(h).pipe(
    concat(function(hash) {
      console.log(hash + " " + e.path);
    })
  );
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  // .pipe(process.stdout);
  .pipe(parserTarFiles);
