import Task from "../models/Tasks";

export const getAllTasks = async (req, res) => {
    try {
        const response = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id', 'ASC']
            ]
        });
        res.json(response)
    } catch (error) {
        console.log(error);
    }
};

export const getOneTaks = async (req, res) => {

    const { id } = req.params;
    console.log(id)
    try {
        const response = await Task.findOne({
            where: {
                id
            },
            attributes: ['id', 'name', 'done', 'projectid']
        })
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const createTask = async (req, res) => {
    const { name, done, projectid } = req.body;

    try {
        const response = await Task.create({
            name,
            done,
            projectid
        }, { fields: ["name", "done", "projectid"] });

        res.status(200).json({
            message: 'Task crated sucessfully',
            data: { name, done, projectid }
        })
    } catch (error) {
        console.log(error)
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, done, projectid } = req.body;
    try {
        const response = await Task.update({
            name,
            done,
            projectid
        }, { where: { id } });

        res.json({
            message: "Update sucessfully",
            data: response
        });
    } catch (error) {
        console.log(error)
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Task.destroy({
            where: { id }
        })
        res.status(200).json({
            messgae: "Deleted sucessfully",
            count: response.length
        })
    } catch (error) {
        console.log(error);
    }
}

export const getTaskByProject = async (req, res, next) => {
    const { projectid } = req.params;
    try {
        const response = await Task.findAll({
            attributes: ["id", "name", "done", "projectid"],
            where: { projectid : projectid }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
        res.json({
            message: "error search"
        })
    }
} 