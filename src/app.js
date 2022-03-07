import express, {json} from "express";
import morgan from "morgan";
import proyectRoutes from "./routes/project.routes";
import taskRoutes from './routes/tasks.routes';
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json()); 


//routes proyect
app.use('/api/projects', proyectRoutes);
app.use('/api/tasks', taskRoutes);




export default app;