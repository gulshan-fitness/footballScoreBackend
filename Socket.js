
const socket_io = require("socket.io");


let io;


const initSocket = (server) => {
    
    
    io = socket_io(server, {
        cors: {
            origin: "*",
        },
    });


    io.on("connection", (socket) => {

        console.log("new user connected");

        console.log(`Number of clients connected: ${io.engine.clientsCount}`);






        

        socket.on("disconnect", () => {


           


            console.log("user disconnected");
            console.log(`Number of clients connected: ${io.engine.clientsCount}`);

        });
    });
};

const getIO = () => {


    if (!io) {
        throw new Error("Socket.io not initialized");
    }
    return io;
};

module.exports = { initSocket, getIO };
