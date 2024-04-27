import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;



dotenv.config();


app.use(cookieParser());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)


// app.get("/", (req, res)=> {
//     res.send("hello world!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT,() =>{
	connectToMongoDB();
 console.log(`server is Running on port ${PORT}`)
});


// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";

// const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

// dotenv.config();

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// // app.get("*", (req, res) => {
// // 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// // });

// server.listen(PORT, () => {
// 	connectToMongoDB();
// 	console.log(`Server Running on port ${PORT}`);
// });







// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server} from "./socket/socket.js";


// const PORT = process.env.PORT || 5000;



// dotenv.config();


// app.use(cookieParser());
// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)


// // app.get("/", (req, res)=> {
// //     res.send("hello world!!");
// // });

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// server.listen(PORT,() =>{
// 	connectToMongoDB();
//  console.log(`server is Running on port ${PORT}`)
// });






















































