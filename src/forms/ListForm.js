import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { createList } from '../actions';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
const ListForm = ({ boardID }) => {
    const [formOpen, setFormOpen] = useState(false)
    const [error, setError] = useState(false)
    const [listName, setListName] = useState('')
    const dispatch = useDispatch();
    const AddNewList = (e) => {
        e.preventDefault()
        if (listName === "") {
            setError(true)
            return
        }
        dispatch(createList(boardID, listName))
        setListName("")
        setFormOpen(false)
    }
    const openForm = (e) => {
        e.preventDefault()
        setFormOpen(true)
    }
    const closeForm = (e) => {
        e.preventDefault()
        setFormOpen(false)
    }
    const renderForm = () => {
        return (
            <div style={styles.container}>
                <input
                    style={styles.textField}
                    placeholder="Enter list title..."
                    value={listName}
                    onChange={(e) => setListName(e.target.value)} />
                {error && <div style={{ color: 'red', marginTop: '10px', fontStyle: 'Helvetica' }}>List name must not be empty!!!</div>}
                <Button style={styles.button} onClick={AddNewList}>Add a list</Button>
                <Button style={styles.icon} onClick={closeForm}>
                    <CloseIcon />
                </Button>
            </div>
        )
    }
    const renderAddButton = () => {
        return (
            <div onClick={openForm}
                style={styles.form}>
                <AddIcon style={styles.plusIcon} /> <p style={styles.title}>Add another list</p>
            </div>
        )
    }
    return (
        formOpen ? renderForm() : renderAddButton()
    )
}
const styles = {
    container: {
        width: '272px',
        marginRight: '10px',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        height: '38px',
        width: '272px',
        backgroundColor: '#ebecf0',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        textAlign: 'left',
        cursor: 'pointer',
        borderRadius: '2px',
    },
    textField: {
        backgroundColor: 'white',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        height: '38px',
        width: '268px',
        marginLeft: '2px',
        border: '2px solid #172b4d',
        borderRadius: '4px',
        outline: 'none',
        resize: 'none',
    },
    icon: {
        width: '19px',
        color: '#172b4d'
    },
    plusIcon: {
        marginTop: '10px',
        marginBottom: '10px',
        paddingLeft: '10px',
        height: '19px',
        width: '19px',
        color: 'rgba(0,0,0,0.6)'
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: '14px',
        marginLeft: '2px',
        marginTop: '12px',
        width: '272px',
        color: 'rgba(0,0,0,0.6)'
    },
    button: {
        marginTop: '8px',
        marginLeft: '2px',
        marginBottom: '10px',
        backgroundColor: '#0079bf',
        color: 'white',
        fontSize: '11px',
        borderRadius: '4px',
        borderStyle: 'none',
    }
}
export default ListForm;