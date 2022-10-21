import React, { useState } from 'react';
import useList from './useList';

function App() {
  const [list, item, setItem, addUser, delUser] = useList();
  return (
    <div className="App">
      <input type="text" value={item} onChange={e => setItem(e.target.value)}></input>
      <button onClick={() => addUser()}>Add</button>
      <button onClick={() => delUser()} >Delete</button>
      <ul>
        {list.map((e, index) =>
          <li key={index}>{e}</li>
        )}
      </ul>

    </div>
  );
}

export default App;
