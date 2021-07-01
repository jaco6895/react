import React from 'react';

function TodoTemplate ({children}){
    return (
        <div className="todoListWrapper">{children}</div>
    );
}

export default TodoTemplate;