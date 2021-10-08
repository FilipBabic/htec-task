import { useSelector } from 'react-redux'
const BoardHeader = () => {
    const user = useSelector(state => state.user);
    return (
        <div style={styles.container}>
            {user.userName} 's workspace
        </div>
    )
}
const styles = {
    container: {
        marginTop: '90px',
        marginBottom: '20px',
        textAlign: 'left',
        color: 'white',
        width: '20%',
        paddingTop: '10px',
        paddingLeft: '10px',
        backgroundColor: '#0079bf',
        height: '30px',
        fontFamily: 'Helvetica',
        fontSize: '16px',
    }
}
export default BoardHeader
