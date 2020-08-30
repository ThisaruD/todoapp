import React from 'react'
import './Todolist.css'

const Todolist = ({ todolist, deleteTodo }) => {

    const myworklist = todolist.map(dil => {
        return (

            <div className="collection-item" key={dil.id}>
                <span onClick={() => { deleteTodo(dil.id) }}> {dil.Action}</span>
            </div>
        )
    })


    return (



        <div className="collection">


            {myworklist}


        </div>
    )
}




export default Todolist;
