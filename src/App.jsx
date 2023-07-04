import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: '리액트 공부하기',
      contents: '주특기 1주차 ',
      isDone: false,
    },
    {
      id: uuid(),
      title: '기초를 다지자',
      contents: '암기 말고 이해',
      isDone: true,
    },
  ]);

  // const todoList = todos.filter(function(todo){
  //   return todo.isDone === false;
  // }); //할일목록

  // const doneList; todos.filter(function(todo){
  //   return todo.isDone === true;
  // }); // 완료목록

  return (
    // <Layout>
    <div>
      <header
        style={{
          backgroundColor: 'white',
          padding: '20px',
        }}
      >
        My Todo List
      </header>
      <main
        style={{
          backgroundColor: 'pink',
          padding: '20px',
        }}
      >
        <Input todos={todos} setTodos={setTodos} />

        <div>
          <h1>list영역</h1>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>

      {/* <container
        style={{
          backgroundColor: 'pink',
          padding: '20px',
        }}
      >
        네모
      </container> */}

      {/* <TodoList todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} /> */}
    </div>
    //   </Layout>
  );
}

export default App;
