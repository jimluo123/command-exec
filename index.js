// const { exec } = require("child_process");

// exec("./client", (error, stdout, stderr) => console.log(stdout));
// const os = require("os");

// console.log(os.networkInterfaces());

//引入net模块
const net = require("net");
//创建TCP服务器
const server = net.createServer(function (socket) {
  //监听data事件
  socket.on("data", function (data) {
    //打印数据
    console.log("接收到数据：" + data.toString());
  });
});
//设置监听端口
server.listen(8001, function () {
  console.log("服务正在监听中。。。");
});
