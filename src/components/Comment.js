const Comment = ({ text, fullName }) => {
    return (
        <div style={styles.container}>
            <div style={styles.userName}>
                {fullName}
            </div>
            <div style={styles.comment}>
                {text}
            </div>
        </div>
    )
}
const styles = {
    container: {
        margin: '10px 10% 10px 10%',
    },
    comment: {
        color: '#172b4d',
        border: '1px solid silver',
        borderRadius: '3px',
        textAlign: 'left',
        padding: '8px',
        fontSize: '15px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    },
    userName: {
        textAlign: 'left',
        paddingTop: '4px',
        fontWeight: 'bold',
        paddingBottom: '8px',
        fontSize: '15px',
        color: '#172b4d'
    }
}
export default Comment;