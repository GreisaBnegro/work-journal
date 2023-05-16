const http = require("http");
const app = require("./app");

const port = 3010;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});