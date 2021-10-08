import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { createCard } from '../actions';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
const CardForm = ({ listID }) => {
    const [formOpen, setFormOpen] = useState(false)
    const [cardName, setCardName] = useState('')
    const dispatch = useDispatch();
    const AddNewCard = (e) => {
        e.preventDefault()
        dispatch(createCard(listID, cardName))
        setCardName("")
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
                    placeholder="Enter a title for this card..."
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)} />
                <Button style={styles.button} onClick={AddNewCard}>Add a card</Button>
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
                <AddIcon style={styles.icon} /> <p style={styles.title}>Add a card</p>
            </div>
        )
    }
    return (
        formOpen ? renderForm() : renderAddButton()
    )
}
const styles = {
    form: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        cursor: 'pointer',
        height: '48px',
        width: '100%',
        paddingLeft: '10px',
        fontFamily: 'Helvetica'
    },
    textField: {
        backgroundColor: 'white',
        height: '60px',
        width: '91%',
        marginTop: '10px',
        marginLeft: '8px',
        border: 'none',
        borderRadius: '4px',
        outline: 'none',
        resize: 'none',
    },
    icon: {
        marginTop: '12px',
        marginBottom: '10px',
        color: 'rgba(0,0,0,0.6)'
    },
    button: {
        marginTop: '8px',
        marginLeft: '8px',
        marginBottom: '10px',
        backgroundColor: '#0079bf',
        color: 'white',
        fontSize: '11px',
        borderRadius: '4px',
        borderStyle: 'none',
    },
    title: {
        color: 'rgba(0,0,0,0.6)'
    }
}
export default CardForm;