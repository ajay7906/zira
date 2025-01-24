const db = require('../config/database');

class TaskModel {
  static async createTask(content, column = 'pending') {
    const [result] = await db.execute(
      'INSERT INTO tasks (content, current_column) VALUES (?, ?)', 
      [content, column]
    );
    return result.insertId;
  }

  static async getAllTasks() {
    const [tasks] = await db.execute(`
      SELECT id, content, current_column 
      FROM tasks 
      ORDER BY created_at
    `);
    
    // Group tasks by column
    const groupedTasks = tasks.reduce((acc, task) => {
      if (!acc[task.current_column]) {
        acc[task.current_column] = [];
      }
      acc[task.current_column].push({
        id: task.id.toString(),
        content: task.content
      });
      return acc;
    }, {
      pending: [],
      incomplete: [],
      inProgress: [],
      completed: []
    });

    return groupedTasks;
  }

  static async updateTaskColumn(taskId, newColumn) {
    await db.execute(
      'UPDATE tasks SET current_column = ? WHERE id = ?', 
      [newColumn, taskId]
    );
  }

  static async deleteTask(taskId) {
    await db.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
  }
}

module.exports = TaskModel;