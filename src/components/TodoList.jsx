import React from 'react';

export const TodoList = ({ todos, setTodos, listIsDone }) => {
  return (
    <>
      <div>
        <h2>{listIsDone ? '완료목록' : '할 일 목록'}Done</h2>
        {todos
          .filter(function (todo) {
            return todo.isDone === listIsDone;
          })
          .map(function (todo) {
            return (
              <div
                key={todo.id}
                style={{
                  border: '4px solid green',
                  magin: '10px',
                  padding: '10px',
                  paddingBottom: '20px',
                }}
              >
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <p> 완료여부 : {todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deletedTodos = todos.filter((item) => {
                      return item.id !== todo.id;
                    });

                    setTodos(deletedTodos);
                  }}
                >
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    const newTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });

                    setTodos(newTodos);
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};
