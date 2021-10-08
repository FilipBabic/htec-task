const Navbar = () => {
    return (
        <nav style={styles.container}>
            <div style={styles.button}>
                <button alt="title" onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.trello.com", "_blank")
                }}>
                    <p style={styles.title}>Trello</p>
                </button>
            </div>
        </nav>
    )
}
const styles = {
    container: {
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: '#172b4d',
        width: '100%',
        height: '70px',
    },
    button: {
        display: 'flex',
        rowDirection: 'row',
        marginLeft: '90px',
        marginTop: '4px',
        padding: '0',
        height: '60px',
        width: '55px',
    },
    title: {
        color: '#172b4d',
        fontSize: '19px'
    }
}
export default Navbar;