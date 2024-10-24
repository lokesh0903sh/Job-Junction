import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
dotenv.config({});

const app = express();
const PORT = process.env.PORT;

const _dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:"https://job-junction-tau.vercel.app",
    credentials:true
}

app.use(cors(corsOptions));

app.use("/user", userRoute);
app.use("/company", companyRoute);
app.use("/job", jobRoute);
app.use("/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
});

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is listening at Port ${PORT}`);
});

