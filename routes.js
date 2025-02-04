import express from "express";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";


export const router = express.Router();

// Accounts
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);
router.get("/profile", accountsController.profile);
router.post("/profile/update/:_id", accountsController.update);


// Home Page
router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);

router.get("/station/:id", stationController.index);

router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.post("/station/:id/addreading", stationController.addReading);
router.get("/station/:stationid/deletereading/:readingid", stationController.deleteReading);