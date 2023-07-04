import React, { useState } from 'react';
import uuid from 'react-uuid';

//props {}로 묶어 줘야 읽힘 !!
export const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: uuid(),
            title: title,
            contents: contents,
            isDone: false,
          };
          // console.log('hhhh1111');
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
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
