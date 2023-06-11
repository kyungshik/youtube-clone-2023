import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 4000;
// console.log(process.cwd());

const handleListening = () => 
    console.log(`✅ Server Listening on http://localhost:${PORT} ✨`);

app.listen(PORT, handleListening);