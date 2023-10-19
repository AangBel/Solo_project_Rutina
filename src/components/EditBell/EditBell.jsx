import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import axios from 'axios';
import './EditBell.css';

const EditBell = () => {
    const [bellName, setBellName] = useState('');
    const [bellTime, setBellTime] = useState('');
    const { id } = useParams();
    const history = useHistory();

    // useEffect(() => {
    //     axios.get(`/api/bells/${id}`)
    //         .then(response => {
    //             setBellName(response.data.name);
    //             setBellTime(response.data.time);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [id]);

    const handleNameChange = (event) => {
        setBellName(event.target.value);
    };

    const handleTimeChange = (event) => {
        setBellTime(event.target.value);
    };

    const selectedBellId = useSelector((store) => store.selectedBellId);
    console.log("this is selected bell id store:", selectedBellId);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/bells/${selectedBellId}`, { name: bellName, time: bellTime })
            .then(response => {
                history.push('/Bells');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='edit-bell-container'>
            <h2>Edit Bell</h2>
            <form onSubmit={handleSubmit} className='edit-bell-form'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={bellName} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" value={bellTime} onChange={handleTimeChange} />
                </div>
                <button type="submit" className="saveEditBellBtn">Save</button>
            </form>
        </div>
    );
};

export default EditBell;
