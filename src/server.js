import express from "express";

const PORT = 4000;

const app = express();

//request : asking, sending something to server
// const handleHome = () => console.log("Somebody is trying to go home");
// app.get("/", handleHome);
app.get("/", () => console.log("Somebody is trying to go home"));

//서비를 외부에 개방
const handleListening = () => 
    console.log(`✅ Server Listening on port http://localhost:${PORT} ✨`);

app.listen(PORT, handleListening);

