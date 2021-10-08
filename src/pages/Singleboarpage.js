import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLists, getCards } from '../actions';
import BoardHeader from '../components/BoardHeader';
import ListForm from '../forms/ListForm';
import List from '../components/List';
const SingleBoardPage = () => {
    let { boardID } = useParams()
    const { lists, loading } = useSelector(state => state.listsData);
    const cards = useSelector(state => state.cardsData.cards);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists(boardID))
        dispatch(getCards(boardID))
    }, [boardID, dispatch])
    return (
        <div>
            <BoardHeader />
            <div style={styles.container}>
                {lists.map((list) => <List key={list.id} listID={list.id} name={list.name} cards={cards} boardID={boardID} loading={loading} />)}
                <ListForm boardID={boardID} />
            </div >
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        marginRight: '10px',
        marginTop: '20px',
    },
    form: {
        display: 'flex',
        height: '80px',
    }
}
export default SingleBoardPage;