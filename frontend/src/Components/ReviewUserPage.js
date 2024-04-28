import Rating from '@mui/material/Rating';

const data = [
    {
        id: 1,
        author: 'author1',
        game: 'game1',
        date: 'date1',
        rating: 1
    },
    {
        id: 2,
        author: 'author2',
        game: 'game2',
        date: 'date2',
        rating: 2
    },
    {
        id: 3,
        author: 'author3',
        game: 'game3',
        date: 'date3',
        rating: 3
    }
]

const ReviewUserPage = () => {
    return (
            data.map((reviewuserpage) => (
            <div>{reviewuserpage.author}
            <Rating name="read-only" value={1} readOnly />
            </div>
            ))
    )
}

export default ReviewUserPage;
