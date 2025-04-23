let ListComment = ({data}) => {
    return(
        <ul className="list-group list-group-flush border-top-0">
        {
            data.map(comment => (
                <li key={comment.id} className="list-group-item">{comment.message}</li>
            ))
        }
        </ul>
    );
}

export default ListComment;