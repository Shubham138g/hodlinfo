import express from "express";

import { getuser } from "../controller/DataController.js";

const route = express.Router();

route.get("/all" ,getuser );

export default route;