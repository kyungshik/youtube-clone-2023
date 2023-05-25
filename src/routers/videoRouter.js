import express from "express";
import {watch, getEdit, postEdit, getUpload, postUpload, deleteVideo} from "../controllers/videoController";
import {protectedMiddleware, publicOnlyMiddleware} from "../middlewares";

const videoRouter = express.Router();

videoRouter
    .get("/:id([0-9a-f]{24})", watch);
videoRouter
    .route("/:id([0-9a-f]{24})/edit")
    .all(protectedMiddleware)
    .get(getEdit)
    .post(postEdit);
videoRouter
    .route("/:id([0-9a-f]{24})/delete")
    .all(protectedMiddleware)
    .get(deleteVideo)
    .post(postEdit);
videoRouter
    .route("/upload")
    .all(protectedMiddleware)
    .get(getUpload)
    .post(postUpload);


export default videoRouter;