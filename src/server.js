import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res, next) => {
    console.log("I will respond");
    return res.send("Have a good time :)");
}
const handleProtected = (req, res) => {
    return res.send("Welcome to the privage lounge");
}
const handleLogin = (req, res) => {
    return res.send("login");
}

app.use(logger);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => 
    console.log(`✅ Server Listening on port http://localhost:${PORT} ✨`);

app.listen(PORT, handleListening);

