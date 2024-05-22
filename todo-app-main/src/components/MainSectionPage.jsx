import axios from 'axios';
import { useEffect, useState } from "react";
import TodoInput from "./mainsection/TodoInput";
import styles from './MainSectionPage.module.css';
import Sidebar from './mainsection/SideBar';
import { FaEdit } from "react-icons/fa";

function MainSectionPage() {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleButtonClick = async (id, status) => {
    const updatedStatus = !status;
    try {
      await updateTodo(id, { status: updatedStatus });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, status: updatedStatus } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getTodos();
  }, []);

  const addTodo = async(obj) => {
    let data = await axios.post("http://localhost:4000/todos/addtodo", obj);
    let newData = await axios("http://localhost:4000/todos");
    setTodos(newData.data);
  };

  const updateTodo = async (id, updatedData) => {
    let data = await axios.patch(`http://localhost:4000/todos/${id}`, updatedData);
    console.log(data.data.message);
    let newData = await axios("http://localhost:4000/todos");
    setTodos(newData.data);
  };

  const setDelete = async (id) => {
    let data = await axios.delete(`http://localhost:4000/todos/${id}`);
    console.log(data.data.message);
    let newData = await axios("http://localhost:4000/todos");
    setTodos(newData.data);
  };

  const handleEditClick = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const handleEditChange = (event) => {
    setEditingText(event.target.value);
  };

  const handleEditSubmit = async (id) => {
    try {
      await updateTodo(id, { title: editingText });
      setEditingId(null);
      setEditingText('');
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      <div className={styles.allItem}>
        <Sidebar />
        <div className={styles.app}>
          <TodoInput addTodo={addTodo} />
          <div className={styles.db_elem}>
            {todos.map(({ title, status, _id }) => (
              <div key={_id} className={styles.al}>
                <div className={styles.collective}>
                  {editingId === _id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={handleEditChange}
                      onBlur={() => handleEditSubmit(_id)}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          handleEditSubmit(_id);
                        }
                      }}
                    />
                  ) : (
                    <h1>{title}</h1>
                  )}
                  <button
                    className={`${styles.completed} ${status ? styles.blue : ""}`}
                    onClick={() => handleButtonClick(_id, status)}
                    style={{ backgroundColor: status ? "blue" : "white" }}
                  ></button>
                  <div className={styles.buttonContainer}>
                    <button className={styles.del} onClick={() => setDelete(_id)}>
                      Delete 
                    </button>
                    <button className={styles.edit} onClick={() => handleEditClick(_id, title)}>
                      Edit <FaEdit className={styles.editIcon} /> 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSectionPage;
