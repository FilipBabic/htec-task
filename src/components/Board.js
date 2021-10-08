import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../actions'
const Board = ({ name, id }) => {
    const dispatch = useDispatch();
    const removeBoard = (e) => {
        e.preventDefault();
        dispatch(deleteBoard(id))
    }
    return (
        <div style={styles.container}>
            <Link to={`/board/${id}`} style={{ textDecoration: 'none' }}>
                <h2 style={styles.content}>{name}</h2>
            </Link>
            <button style={styles.button} onClick={removeBoard}>
                Delete a board
            </button>
        </div >
    )
}
const styles = {
    container: {
        fontFamily: 'Helvetica',
        marginTop: '20px',
        width: '40%',
        height: '120px',
        backgroundColor: '#ebecf0',
        marginLeft: '30%'
    },
    button: {
        display: 'flex',
        height: 'auto',
        width: '40%',
        marginTop: '30px',
        marginLeft: '30%',
        fontSize: '14px'
    },
    content: {
        paddingTop: '8px',
        height: '34px',
        color: 'white',
        backgroundColor: '#172b4d'
    }
}

export default Board