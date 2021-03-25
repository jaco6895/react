import React from "react";
import cn from 'classnames';
import {
    MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline
} from "react-icons/md";

const TodoListItem = ({todo,onRemove,onToggle}) =>{
    const {id , text , checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox',{ checked })} onClick={function(){onToggle(id)}}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={function(){onRemove(id)}}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default React.memo(TodoListItem);