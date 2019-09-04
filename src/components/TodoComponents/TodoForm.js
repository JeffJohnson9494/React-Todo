import React from 'react';

const TodoForm=props=>{
    return(
        <form>
            <input placeholder="Add a Todo?"
                   onChange={props.handlerInputTodo}value={props.value}/>
            <div className="Button">
                <button onClick={props.handlerSubmitTodo}>Add it</button>
                <button onClick={props.clearTodoHandler}>Clear</button>
            </div>
                
        </form>
    )
}
export default TodoForm;