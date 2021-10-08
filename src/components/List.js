import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCard, getCards } from '../actions';
import Card from './Card';
import CardForm from '../forms/CardForm';
const ListComponent = ({ name, listID, loading, boardID }) => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cardsData.cards);
    useEffect(() => {
        dispatch(getCards(boardID))
    }, [boardID, dispatch])
    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cardID = e.dataTransfer.getData("cardID")
        dispatch(updateCard(cardID, listID))
    }
    const onDragOver = (e) => {
        e.preventDefault()
    }
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    if (!cards && !loading) {
        return <div>NO CARDS IN LIST...</div>
    }
    return (
        <div
            onDrop={(e) => onDrop(e, "test")}
            onDragOver={(e) => onDragOver(e, "test")}
            style={styles.container}>
            <h4 style={styles.header}>{name}</h4>
            <div style={styles.name}>
                {cards.filter((card) => (card.idList === listID)).map((card) => <Card key={card.id} cardID={card.id} listID={listID} name={card.name} description={card.desc} commentCount={card?.badges?.comments} />)}
            </div>
            <CardForm listID={listID} name={name} />
        </div >
    )
}
const styles = {
    container: {
        borderRadius: '2px',
        minWidth: '274px',
        backgroundColor: '#ebecf0',
        marginRight: '10px',
    },
    header: {
        margin: '8px 0 8px 0',
        padding: '8px',
        fontSize: '14px',
        fontStyle: 'bold',
        fontFamily: 'Helvetica',
        textAlign: 'left',
        color: '#172b4d',
    },
    name: {
        color: 'red',
        backgroundColor: '#ebecf0'
    }
}
export default ListComponent;