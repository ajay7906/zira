const TaskModel = require('../modals/taskModal');

exports.createTask = async (req, res) => {
  try {
    const { content } = req.body;
    const taskId = await TaskModel.createTask(content);
    res.status(201).json({ id: taskId, content });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
};

exports.moveTask = async (req, res) => {
  try {
    const { taskId, newColumn } = req.body;
    await TaskModel.updateTaskColumn(taskId, newColumn);
    res.json({ message: 'Task moved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error moving task', error: error.message });
  }
};