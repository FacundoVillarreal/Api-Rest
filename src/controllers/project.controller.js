import Project from '../models/Projects';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error)
    }
}

export const getOneProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json(project);
    } catch (error) {
        console.log(error)
    }
}

export const createProyect = async (req, res) => {
    const { name, priority, description, deliverydate } = req.body;
    try {
        //para guardar los datos en la BD debo traer el modelo
        const newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });

        if (newProject) {
            return res.json({
                message: "Project created succesfully",
                data: newProject
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Project error created",
            data: {}
        })
    }
};

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {

        const deletedRowCount = await Project.destroy({
            where: {
                id
            }
        })

        res.json({
            message: "Deleted sucessfully",
            count: deletedRowCount
        })

    } catch (error) {
        console.log(error)
    }
}

export const updateProject = async (req, res) => {
    const { name, priority, description, deliverydate } = req.body;
    const { id } = req.params;
    try {
        const response = await Project.update({
            name,
            priority,
            description,
            deliverydate
        },
            {
                where: { id }
            })
        res.status(200).json({
            message: "Update Project Sucessfully",
            count: response.length  
        });
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

