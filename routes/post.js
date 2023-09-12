import express from "express";
import { varifyToken } from "../middlewares/auth.js";
import {addComments, getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";


const router = express.Router();


router.get("/", varifyToken, getFeedPosts);
router.get("/:userId/posts", varifyToken, getUserPosts);
router.patch("/:id/like",varifyToken,likePost);

router.patch("/:postId/add/comments",varifyToken,addComments);

export default router; 