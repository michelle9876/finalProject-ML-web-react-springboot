
import React from 'react';

function TOC(props) {
  const lists = props.data.map(item => {
    return (
      <button key={item.id} onClick={() => props.onClick(item)}>
        {item.title}
      </button>
    );
  });
  return (
    <nav>
      {lists}
    </nav>
  );
}

export default TOC;

