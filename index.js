const { exec } = require("child_process");

exec("./client", (error, stdout, stderr) => console.log(stdout));
