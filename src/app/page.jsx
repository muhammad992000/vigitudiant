'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Dashboard() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [toUpdateTask, setToUpdateTask] = useState({});
  const [task, setTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const [error, setError] = useState('');
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  const addTask = () => {
    if (task.trim() !== '' && !isTaskExist(tasks, task)) {
      const newTasks = [
        ...tasks,
        {
          id: new Date().toISOString(),
          desc: task,
          completed: false,
        },
      ];
      setTasks(newTasks);
      setTask('');
      localStorage.setItem('todos', JSON.stringify(newTasks));
    } else {
      setError(
        task.trim() === ''
          ? 'You cannot add an empty task'
          : 'This task already exists'
      );
    }
  };

  const isTaskExist = tasks => {
    return tasks.some(singleTask => singleTask.desc === task);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('todos', JSON.stringify(updatedTasks));
  };

  const updateTheTask = () => {
    if (updateTask.trim() !== '' && !isTaskExist(tasks, updateTask)) {
      const updatedTasks = tasks.map(singleTask =>
        singleTask.id === toUpdateTask.id
          ? { ...singleTask, desc: updateTask }
          : singleTask
      );
      setTasks(updatedTasks);
      setIsUpdateFormOpen(false);
      setUpdateTask('');
      localStorage.setItem('todos', JSON.stringify(updatedTasks));
    } else {
      setError(
        updateTask.trim() === ''
          ? 'You cannot add an empty task'
          : 'This task already exists'
      );
    }
  };

  const toggleCompleted = id => {
    const updatedTasks = tasks.map(singleTask =>
      singleTask.id === id
        ? { ...singleTask, completed: !singleTask.completed }
        : singleTask
    );
    setTasks(updatedTasks);
    localStorage.setItem('todos', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={`${styles.Dashboard} container`}>
      <div className="row d-flex justify-content-center">
        <div className={`${styles.todo} col-md-6`}>
          {isUpdateFormOpen && (
            <div className={styles['modal-overlay']}>
              <div className={styles['modal-content']}>
                <input
                  className={styles['update-input']}
                  onFocus={() => setError('')}
                  value={updateTask}
                  type="text"
                  placeholder="Enter a task"
                  onChange={e => setUpdateTask(e.target.value)}
                />
                <button
                  className={styles['update-button']}
                  onClick={updateTheTask}>
                  Update
                </button>
              </div>
            </div>
          )}
          <div className={styles.first}>
            <input
              className={styles['task-input']}
              onFocus={() => setError('')}
              value={task}
              type="text"
              placeholder="Enter a task"
              onChange={e => setTask(e.target.value)}
            />
            <button className={styles['add-button']} onClick={addTask}>
              Add
            </button>
          </div>
          <p className={styles.error}>{error}</p>
          <ul className={styles['task-list']}>
            {tasks.map(task => (
              <li className={styles['task-item']} key={task.id}>
                <div
                  className={`${styles['text-container']} ${
                    task.completed ? styles.completed : ''
                  }`}
                  onClick={() => toggleCompleted(task.id)}>
                  <p className={styles['task-desc']}>{task.desc}</p>
                </div>
                <div className={styles['button-container']}>
                  <button
                    className={styles['update-button']}
                    onClick={() => {
                      setIsUpdateFormOpen(!isUpdateFormOpen);
                      setToUpdateTask(task);
                      setUpdateTask(task.desc);
                    }}>
                    Update
                  </button>
                  <button
                    className={styles['delete-button']}
                    onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
