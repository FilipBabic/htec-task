import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div style={styles.error}>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                <button>
                    Back to home page
                </button>
            </Link>
        </div>
    );
};
const styles = {
    error: {
        margin: '120px 20% 0 20%',
        height: '60%',
        borderRadius: '4',
        border: 'solid 1px',
        backgroundColor: '#f4f5f7',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Helvetica',
        fotSize: '22px'
    },
    link: {
        textDecoration: 'none',
    }
}

export default NotFound;