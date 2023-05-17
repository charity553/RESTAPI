// create our express services
const express = require("express");
// importing the student routes
const studentRoutes = require("./src/student/routes");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3000;


/*app.get("/", (req,res) => {
    res.send("Hello world!");
});
*/
app.use("/api/v1/students", studentRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
