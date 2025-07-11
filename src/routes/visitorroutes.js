import  express from "express";
import {visiter, getallvisitor } from "../Controllers/visitorcontrolllers.js";
const router=express.Router()
router.get('/track',visiter)
router.get('/visitor',getallvisitor)

export default router