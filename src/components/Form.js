import React from 'react';

const Form = ({setinputtext ,todos, setstatus,settodos,inputtext})=>{
    const inputtexthandler = (e) =>{
        setinputtext(e.target.value);
    };
    const submithandler = (e) =>{
        e.preventDefault();
        settodos([
            ...todos, {text: inputtext,completed:false,id:Math.random()*1000}
        ]);
        setinputtext("");
    };
    const statushadnler = (e) =>{
        setstatus(e.target.value);
    };
    return(
        <form>
            <input type="text" value={inputtext} className= "todo-input" onChange={inputtexthandler}/>
            <button onClick={submithandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statushadnler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
} 

export default Form;