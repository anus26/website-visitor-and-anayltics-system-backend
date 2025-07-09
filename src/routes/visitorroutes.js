import  express from "express";
import visiter from "../Controllers/visitorcontrolllers.js";
const router=express.Router()
router.get('/track',visiter)

export default router