"use strict";

import express from "express";
import { welcome } from "../controllers/main.controller.js";

const router = express.Router();

// Main router.
router.get("/", welcome);

export { router };