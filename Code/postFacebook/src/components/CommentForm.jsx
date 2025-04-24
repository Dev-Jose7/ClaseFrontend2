import { useContext, useState } from "react";
import { setCommentDB } from "./Post";

let CommentForm = ({replyId = null}) => {
    let setDataComment = useContext(setCommentDB);
    let [newComment, setComment] = useState("");
    let objectComment = {};

    let createComment = () => {
        setDataComment(comment => [
            ...comment,
            {
                    "id": Math.max(...comment.map(c => c.id)) + 1, 
                    "message": newComment,
                    "like": 0,
                    "replyId": replyId
            }
        ])
    }

    return(
        <section className="text-end mt-3">
            <textarea placeholder="Comenta algo..." className="form-control" onChange={(e) => setComment(e.target.value)}></textarea>
            <br />
            <button className="btn btn-secondary" onClick={createComment}>Enviar</button>
        </section>
    );
}

export default CommentForm;