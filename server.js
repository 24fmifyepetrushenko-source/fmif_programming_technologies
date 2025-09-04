const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const data = {
        message: `This is hello message for programming technology subject in FMIF. I going to add here gitHub actions that will create me Docker container for each push to "main" branch on github!`,
        your_Time: new Date().toLocaleTimeString(),
        your_Dime: new Date().toLocaleDateString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
