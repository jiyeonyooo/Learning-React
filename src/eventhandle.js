import { Component } from 'react';
import { useState } from 'react';

function EventHandle() {
    const [message, setMessage] = useState('');
    return (
        <div>
            <h1>이벤트연습</h1>
            <input type="text" name="message" placeholder='input anything'
                onChange={
                    (e) => {
                        console.log(e.target.value);
                        setMessage(e.target.value);
                    }
                }></input>
            <div>{message}</div>
        </div>
    );
};

export default EventHandle;