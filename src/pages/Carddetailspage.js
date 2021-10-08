import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getCommentsOnCard } from '../actions'
import Comment from '../components/Comment'
import AddCommentForm from '../forms/AddCommentForm';
const CardDetailsPage = () => {
    const { cardID } = useParams()
    const { comments } = useSelector(state => state.commentsData);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCommentsOnCard(cardID))
    }, [cardID, dispatch])
    const filteredComments = comments?.filter(comment => comment?.data?.list)
    if (!comments) {
        return (
            <div style={styles.error}>
                <div style={{ marginBottom: '40px' }}>
                    WRONG CARD ID
                </div>
                <Link to='/boards'>
                    <button >GO BACK</button>
                </Link>
            </div >
        )
    }
    return (
        <div style={styles.container}>
            {
                filteredComments?.length === 0 && <div style={styles.noComments}>NO comments</div>
            }
            <div style={styles.header}>
                <p style={styles.cardName}>
                    {filteredComments?.[0]?.data?.card?.name}
                </p>
                <p style={styles.listName}>
                    in list {filteredComments?.[0]?.data?.list?.name}
                </p>
                <AddCommentForm cardID={cardID} />
            </div>
            {
                filteredComments.map((comment) => <Comment
                    key={comment.id}
                    text={comment?.data?.text}
                    fullName={comment?.memberCreator?.fullName}
                    listName={comment.data?.list?.name}
                    cardName={comment.data?.card?.name} />)
            }
            <Link to={`/boards`}>
                <button style={styles.button}>GO BACK</button>
            </Link>
        </div >
    )
}
const styles = {
    container: {
        backgroundColor: '#f4f5f7',
        margin: '90px auto 0 auto',
        textAlign: 'left',
        width: '572px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    },
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
    header: { marginLeft: '10%', marginRight: '10%' },
    button: { margin: '10px 0 10px 10%', fontSize: '12px', textAlign: 'center', color: 'white', backgroundColor: '#172b4d' },
    listName: { fontSize: '16px' },
    cardName: { paddingTop: '20px', fontSize: '22px' },
    noComments: { margin: '100px 0 0 10%', paddingTop: '20px', fontSize: '20px' }
}
export default CardDetailsPage;