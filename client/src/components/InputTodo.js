import React, { Fragment, useState } from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${process.env.REACT_APP_URL}/todos`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <Fragment>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' placeholder='Enter new tasks here' value={ description } onChange={e => setDescription(e.target.value)}/>
                <button className='btn btn-success ml-2'>Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
