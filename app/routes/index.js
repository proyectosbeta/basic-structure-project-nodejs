"use strict";

import express from "express";
import { router as mainRouter } from "./main.js";

const router = express.Router();

// Main router.
router.use(mainRouter);

export { router };