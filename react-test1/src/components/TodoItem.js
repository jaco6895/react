import React from 'react';
import {MdDone, MdDelete} from 'react-icons/md';
import {AiTwotoneCheckCircle} from "react-icons/all";

function TodoItem ({id, done, text}){
        return (
            <div className="todoItem">
                <AiTwotoneCheckCircle done={done}>{done && <MdDone />}</AiTwotoneCheckCircle>

            </div>
        );
}