import { useHistory } from 'react-router-dom'
import MessageTwoToneIcon from '@material-ui/icons/MessageTwoTone';
const NewCard = ({ cardID, name, commentCount }) => {
    const history = useHistory();
    const openComments = (e) => {
        e.preventDefault();
        history.push(`/card/${cardID}`)
    }
    const onDragStart = (e) => {
        e.dataTransfer.setData("cardID", cardID);
    }
    return (
        <div draggable onDragStart={(e) => onDragStart(e)}
            style={styles.container}
            onClick={openComments}>
            <div style={styles.name}>{name}</div>
            <div style={styles.comments}>
                <div style={styles.icon}>
                    <MessageTwoToneIcon />
                </div>
                <p style={styles.title}>{commentCount}</p>
            </div>
        </div >
    )
}
const styles = {
    container: {
        backgroundColor: 'white',
        borderRadius: '6px',
        margin: '8px 4px 0 4px',
        padding: '8px 4px 0 4px',
        cursor: 'pointer'
    },
    name: {
        width: '100%',
        marginLeft: '4px',
        fontFamily: "Helvetica",
        fontSize: '14px',
        fontWeight: '400px',
        textAlign: 'left',
        lineHeight: '20px',
        color: '#172b4d'
    },
    description: {
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '14px',
        fontFamily: "Helvetica",
        color: '#172b4d'
    },
    icon: {
        backgroundColor: 'white',
        color: '#00000049',
        marginTop: '8px',
        marginLeft: '4px',
        border: 'none',
        paddingLeft: '0'
    },
    comments: {
        display: 'flex',
    },
    title: {
        textAlign: 'center',
        marginTop: '10px',
        marginLeft: '4px',
        color: '#00000049',
        fontFamily: 'Helvetica'
    }
}
export default NewCard;