const cores = require('os').cpus().length;
const cluster = require('cluster');
const app = require("express")();

if(cluster.isMaster){
    for(let i = 0; i< cores; i++){
        cluster.fork();
    }

    cluster.on("exit",worker => {
        console.log(`WORKER @ ${worker.process.pid} DIED!`);
        cluster.fork();
    })
}
else{
    app.use("*",() => cluster.worker.kill())
    require("./app");
} 