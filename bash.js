const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "ls") {
    ls();
  } else if (cmd === "pwd") {
    pwd(cmd);
  } else if (cmd === "cat") {
    cat(fileName);
  }
});
