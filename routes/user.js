import express from "express";
import {varifyToken} from "../middlewares/auth.js";
import { addRemoveFriend, getFriends, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", varifyToken, getUser);
router.get("/:id/friends", varifyToken, getFriends);
router.patch("/:id/:friendId", varifyToken, addRemoveFriend);

export default router;