import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';
const HomepageForm = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const submitButton = (e) => {
        e.preventDefault();
        if (name === "") {
            setError(true)
            return
        }
        dispatch(addUser(name));
        history.push('/boards')
    }
    return (
        <form style={styles.container}>
            <p style={styles.title}>
                Welcome to Trello Custom App<br /><br />
                Please enter your name
            </p>
            <input
                type="text"
                name="first_name"
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
                style={styles.textField}
            />
            {error && <div style={{ color: 'red', marginTop: '10px' }}>First name is required field!!!</div>}
            <br />
            <button
                onClick={submitButton}
                style={styles.button}>
                Go to boards
            </button>
        </form >
    )
}
const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Helvetica'
    },
    textField: {
        textAlign: 'center',
        color: 'green',
        height: '40px',
        fontSize: '22px'
    },
    button: {
        marginTop: '10px',
        height: '40px',
        fontSize: '18px'
    },
    title: {
        fontSize: '18px',
    }
}
export default HomepageForm;