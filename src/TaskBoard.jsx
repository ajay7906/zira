// import React, { useState } from 'react';

// const TaskBoard = () => {
//   const [tasks, setTasks] = useState({
//     pending: [
//       { id: 'task1', content: 'Design new feature' },
//       { id: 'task2', content: 'Update documentation' }
//     ],
//     incomplete: [
//       { id: 'task3', content: 'Implement backend API' }
//     ],
//     inProgress: [],
//     completed: []
//   });

//   const [newTask, setNewTask] = useState('');
//   const [draggedTask, setDraggedTask] = useState(null);

//   const handleCreateTask = () => {
//     if (newTask.trim() === '') return;

//     const newTaskObject = {
//       id: `task-${Date.now()}`,
//       content: newTask.trim()
//     };

//     setTasks(prev => ({
//       ...prev,
//       pending: [...prev.pending, newTaskObject]
//     }));

//     setNewTask('');
//   };

//   const handleDragStart = (e, task, sourceColumn) => {
//     setDraggedTask({ task, sourceColumn });
//     e.dataTransfer.setData('text/plain', '');
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, targetColumn) => {
//     e.preventDefault();
    
//     if (!draggedTask) return;

//     const newTasks = { ...tasks };

//     const sourceColumnTasks = newTasks[draggedTask.sourceColumn].filter(
//       t => t.id !== draggedTask.task.id
//     );
//     newTasks[draggedTask.sourceColumn] = sourceColumnTasks;

//     newTasks[targetColumn].push(draggedTask.task);

//     setTasks(newTasks);
//     setDraggedTask(null);
//   };

//   return (
//     <div className="p-4 bg-gray-100">
//       <div className="mb-4 flex">
//         <input 
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter new task"
//           className="flex-grow p-2 rounded mr-2"
//         />
//         <button 
//           onClick={handleCreateTask}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Add Task
//         </button>
//       </div>

//       <div className="flex space-x-4">
//         {Object.entries(tasks).map(([columnId, columnTasks]) => (
//           <div 
//             key={columnId}
//             className="w-64 bg-white rounded-lg shadow-md p-3"
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, columnId)}
//           >
//             <h2 className="text-lg font-bold mb-2 capitalize">
//               {columnId.replace(/([A-Z])/g, ' $1')}
//             </h2>
//             {columnTasks.map((task) => (
//               <div 
//                 key={task.id}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, task, columnId)}
//                 className="bg-blue-100 p-2 rounded mb-2 cursor-move"
//               >
//                 {task.content}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;
























































import React, { useState } from 'react';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    pending: [
      { id: 'task1', content: 'Design new feature' },
      { id: 'task2', content: 'Update documentation' }
    ],
    incomplete: [
      { id: 'task3', content: 'Implement backend API' }
    ],
    inProgress: [],
    completed: []
  });

  const [newTask, setNewTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleCreateTask = (e) => {
    e.preventDefault(); // Prevent form submission

    if (newTask.trim() === '') {
      // Optionally, add validation or error handling
      return;
    }

    const newTaskObject = {
      id: `task-${Date.now()}`,
      content: newTask.trim()
    };

    // Add new task to pending column
    setTasks(prev => ({
      ...prev,
      pending: [...prev.pending, newTaskObject]
    }));

    // Reset form
    setNewTask('');
    setIsAddingTask(false);
  };

  const handleDragStart = (e, task, sourceColumn) => {
    setDraggedTask({ task, sourceColumn });
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    
    if (!draggedTask) return;

    const newTasks = { ...tasks };

    const sourceColumnTasks = newTasks[draggedTask.sourceColumn].filter(
      t => t.id !== draggedTask.task.id
    );
    newTasks[draggedTask.sourceColumn] = sourceColumnTasks;

    newTasks[targetColumn].push(draggedTask.task);

    setTasks(newTasks);
    setDraggedTask(null);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Board</h1>
        
        {!isAddingTask ? (
          <button 
            onClick={() => setIsAddingTask(true)}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Create New Task
          </button>
        ) : (
          <form onSubmit={handleCreateTask} className="flex space-x-2">
            <input 
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task description"
              className="flex-grow p-2 rounded border"
              autoFocus
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Task
            </button>
            <button 
              type="button"
              onClick={() => setIsAddingTask(false)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="flex space-x-4">
        {Object.entries(tasks).map(([columnId, columnTasks]) => (
          <div 
            key={columnId}
            className="w-64 bg-white rounded-lg shadow-md p-3"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnId)}
          >
            <h2 className="text-lg font-bold mb-2 capitalize">
              {columnId.replace(/([A-Z])/g, ' $1')}
            </h2>
            {columnTasks.map((task) => (
              <div 
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task, columnId)}
                className="bg-blue-100 p-2 rounded mb-2 cursor-move hover:bg-blue-200 transition-colors"
              >
                {task.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;