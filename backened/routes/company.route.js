import express from "express";
const router = express.Router();
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controlllers/company.controller.js";

router.route("/register").post(registerCompany);

router.route("/get").get(getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;