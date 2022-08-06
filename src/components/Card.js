import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className = "card-wrapper">  
            <div className = "task-holder">
                <p className = "pl-2 ">Name: {taskObj.Name}</p>
                <p className = "pl-2" >Project Name :{taskObj.Projectname}</p>
                <p className = "pl-2  ">Mobile Number: {taskObj.mobilenumber}</p>
                <p className = "pl-2 ">E-Mail:{taskObj.Email}</p>
                <p className = "pl-2 ">Project Name : {taskObj.Projectname}</p>
                <p className = "pl-2 ">Start Date: {taskObj.startdate}</p>
                <p className = "pl-2 ">End Date: {taskObj.enddate}</p>
                <p className = "pl-2 ">Description:{taskObj.Description}</p>
                <p className = "pl-2 ">Project Status : {taskObj.Status}</p>
                <div style={{"position": "absolute", "right" : "30px", "bottom" : "30px"}}>
                    <i className = "far fa-edit " style={{"cursor" : "pointer", "margin-right":"20px"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;