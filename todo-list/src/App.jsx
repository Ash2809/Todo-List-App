import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    if (todo.length > 3) {
      if (editId !== null) {
        const index = todos.findIndex((t) => t.id === editId);
        if (index !== -1) {
          const updatedTodos = [...todos];
          updatedTodos[index] = { id: editId, text: todo };
          setTodos(updatedTodos);
          setEditId(null);
        }
      } else {
        setTodos([...todos, { id: Date.now(), text: todo }]);
      }
      setTodo('');
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        updatedTodos.push(todos[i]);
      }
    }
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        setTodo(todos[i].text);
        setEditId(id);
        break;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-red-100 min-h-[80vh] md:w-[35%]">
        <h1 className="font-bold text-center text-2xl">TaskMan - Manage your todos at one place</h1>

        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{editId ? 'Edit Todo' : 'Add a Todo'}</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1"
              placeholder="Enter a task..."
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-red-600 mx-2 rounded-full p-4 py-2 text-sm font-bold text-white"
            >
              {editId ? 'Update' : 'Save'}
            </button>
          </div>
        </div>

        <div className="todos">
          <h2 className="text-2xl font-bold">Your Todos</h2>
          <ul className="list-disc ml-5">
            {todos.length === 0 ? <p className="text-gray-500">No tasks added.</p> : null}
            {todos.map((item) => (
              <li key={item.id} className="text-lg flex justify-between items-center my-2">
                <span>{item.text}</span>
                <div>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
