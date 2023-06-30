import React, { useState } from 'react';
import uuid from 'react-uuid';

export const Input = (todos, setTodos) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.prevenDefault();
          const newTodo = {
            id: uuid(),
            title: title,
            contents: contents,
            isDone: false,
          };

          setTodos(...todos, newTodo);
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(e) => {
            setContents([e.target.value]);
          }}
        />
        <button type="submit"> 추가하기 </button>
      </form>
    </div>
  );
};
