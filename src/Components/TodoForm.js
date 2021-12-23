import React, { useState, useEffect, useRef } from 'react'




function TodoForm( props ) {
    const [input, setInput] = useState('')  //declaring state- understood

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])




    const handleChange = (e) => {   //passing event (e) as parameter to setInput field to the value of whatever is typed
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {   //handles form button pressing
        e.preventDefault()          //prevents page reloading?

        props.onSubmit({            //need to understand generic/built in props.. better than I do now. 
              id: Math.floor(Math.random() * 10000),   //Basically this function says:  On form submit, give these properties to the inputted text.
            text: input
        })
        
        setInput('')
    }




    return (
        <form className='todo-form' >

            <input type        = "text"
                   placeholder = 'This is placeholder'
                   value       = {input}
                   name        = 'text'
                   className   = 'todo-input'
                   onChange    = {handleChange}
                   ref         = {inputRef}
            />
                    
            <button className = 'todo-button'
                    onSubmit  = {handleSubmit}>Add todo</button>

        </form>
    )
}

export default TodoForm
