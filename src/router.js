import { Router } from "express";
import TimeController from "./app/controllers/TimeController.js";

const router = Router();

router.get("/times", TimeController.index);
router.get("/times/busca", TimeController.searchByName);
router.get("/times/:id", TimeController.show);
router.post("/times", TimeController.store);
router.put("/times/:id", TimeController.update);
router.delete("/times/:id", TimeController.delete);

export default router;