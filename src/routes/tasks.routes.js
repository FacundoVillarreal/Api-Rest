import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getOneTaks, getTaskByProject, updateTask } from "../controllers/task.controller";
const router = Router();

// /api/tasks
router.get('/', getAllTasks);
router.get('/:id', getOneTaks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

// api/task/project/:projectId
router.get('/project/:projectid', getTaskByProject);
export default router;