// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Specify the port number
const port = 3000;
// 4. Define a route for GET request
app.get('/comments', (req, res) => {
    // 5. Send a response to the client
    res.send('GET request to the comments page');
});
// 6. Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// 7. Test the server
// http://localhost:3000/comments
// Output: GET request to the comments page
// http://localhost:3000/
// Output: Cannot GET /