const express = require('express');
const taskController = require('../controllers/taskControllers');

const router = express.Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/move', taskController.moveTask);

module.exports = router;