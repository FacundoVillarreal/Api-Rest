import { Router } from 'express';
const router = Router();

import { createProyect, deleteProject, getOneProject, getProjects, updateProject } from '../controllers/project.controller';

// /api/projects
router.get('/', getProjects);
router.get('/:id', getOneProject);

router.post('/', createProyect);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);


export default router;