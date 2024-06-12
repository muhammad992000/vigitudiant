'use client';
import { useEffect, useState } from 'react';
import styles from '../dashboard/page.module.scss';
export default function Dashboard() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [toUpdateTask, setToUpdateTask] = useState({});
  const [task, setTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const [error, setError] = useState('');
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  const addTask = e => {
    if (task.trim() !== '' && !isTaskExist(tasks, task)) {
      setTasks([
        ...tasks,
        {
          id: task,
          desc: task,
          completed: false,
        },
      ]);
      // localStorage.setItem('todos', JSON.stringify(tasks));
      setTask('');
    } else {
      setError(
        task.trim() == ''
          ? 'you can not add an empty task'
          : 'this task already exists'
      );
    }
  };
  const isTaskExist = (tasks, task) => {
    return tasks.find(sindleTask => sindleTask.desc === task) ? true : false;
  };
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
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
    } else {
      setError(
        updateTask.trim() == ''
          ? 'you can not add an empty task'
          : 'this task already exists'
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
  };
  //localStorage.setItem('todos', JSON.stringify(tasks));
  console.log(tasks);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className={`${styles.Dashboard} container `}>
      <div className="row d-flex  justify-content-center ">
        <div className={`${styles.todo} col-md-6  `}>
          <div
            className={`${
              isUpdateFormOpen ? styles.showedForm : styles.hiddenForm
            }  `}>
            {' '}
            <input
              onFocus={() => {
                setError('');
              }}
              value={updateTask}
              type="text"
              placeholder="enter a task"
              id="task"
              onChange={e => {
                setUpdateTask(e.target.value);
              }}></input>
            <button
              onClick={e => {
                updateTheTask(e);
              }}>
              update
            </button>
          </div>{' '}
          <div className={`${styles.first}`}>
            {' '}
            <input
              onFocus={() => {
                setError('');
              }}
              value={task}
              type="text"
              placeholder="enter a task"
              id="task"
              onChange={e => {
                setTask(e.target.value);
              }}></input>
            <button
              onClick={e => {
                addTask(e);
              }}>
              add
            </button>
          </div>
          <p className={styles.error}>{error}</p>
          <div className="displ" style={{ display: 'none' }}>
            {' '}
            <input
              onFocus={() => {
                setError('');
              }}
              value={updateTask.desc}
              type="text"
              placeholder="enter a task"
              id="update-task"
              onChange={e => {
                setUpdateTask({ id: updateTask.id, desc: e.target.value });
              }}></input>
            <button onClick={e => {}}>add</button>
            <p>{error}</p>
          </div>
          <ul>
            {tasks.map(task => (
              <li>
                <div
                  className={`${styles.textContainer}  ${
                    task.completed ? styles.completed : ''
                  } `}
                  onClick={() => {
                    toggleCompleted(task.id);
                  }}>
                  {' '}
                  <p>{task.desc}</p>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => {
                      setIsUpdateFormOpen(!isUpdateFormOpen);
                      setToUpdateTask(task);
                      setUpdateTask(task.desc);
                    }}>
                    update
                  </button>
                  <button
                    onClick={() => {
                      deleteTask(task.id);
                    }}>
                    delete
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
