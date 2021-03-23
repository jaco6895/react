import React,{useState , useCallBack} from "react";
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
    const [value,setValue] = useState('');
    const onChange = useCallBack (e => {
        setValue(e.target.value);
    },[]);
    const onSubmit = useCallBack( e =>{
        onInsert(value);
        setValue('');
        //submit 이벤트는 브라우저에서 새로고침을 발생 이를 방지하기위해 함수 호출
    });
    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요."/>
            <button className="btn" type="submit">
                <MdAdd/>
            </button>
        </form>
    );
}
export default TodoInsert;