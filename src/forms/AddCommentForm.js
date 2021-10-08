import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../actions';
const AddCommentForm = ({ cardID }) => {
    const [formOpen, setFormOpen] = useState(false)
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    const AddComment = (e) => {
        e.preventDefault()
        dispatch(addComment(cardID, text))
        setText("")
        setFormOpen(false)
    }
    return (
        <div style={styles.container}>
            Comments:<br />
            <input
                type="text"
                style={styles.comment}
                placeholder="Write a comment..."
                value={text}
                onMouseDown={() => setFormOpen(true)}
                onChange={(e) => setText(e.target.value)} />
            <br />
            {formOpen &&
                <button style={styles.button} onClick={AddComment} disabled={!text}>
                    Save
                </button>
            }
        </div >
    )
}
const styles = {
    container: {
        color: '#172b4d',
        margin: '10px 20px 20px 0',
    },
    comment: {
        color: '#172b4d',
        width: '100%',
        border: '1px solid silver',
        borderRadius: '3px',
        textAlign: 'left',
        padding: '8px',
        fontSize: '15px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    },
    button: {
        marginTop: '8px',
        height: '36px',
        border: '1px solid black',
        borderRadius: '3px'
    }
}
export default AddCommentForm