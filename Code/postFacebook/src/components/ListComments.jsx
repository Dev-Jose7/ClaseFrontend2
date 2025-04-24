import React, { useContext, useEffect, useState } from "react";
import { commentDB, setCommentDB } from "./Post";
import CommentForm from "./CommentForm";

let ListComment = () => {
    let data = useContext(commentDB);
    let setData = useContext(setCommentDB)
    let [showComment, setShowComment] = useState(false);
    let [idCommentReply, setIdCommentReply] = useState(0);
    let [idCommentLike, setIdCommentLike] = useState(0);

    function activateComment(id){
        if(idCommentReply == 0){
            setIdCommentReply(id);
        } else {
            setIdCommentReply(0);
        }
    }

    function likeComment(id){
        if(idCommentLike == 0){
            setIdCommentLike(id);
        } else {
            setIdCommentLike(0);
        }

        setData(data =>
            data.map(comment =>
              comment.id === id
                ? {
                    ...comment,
                    like: idCommentLike != 0 ? comment.like - 1 : comment.like + 1
                  }
                : comment
            )
          );
    }


    return(
        <ul className="list-group list-group-flush border-top-0">
            {data
                .filter(comment => !comment.replyId) // Filtra las respuesta que no tienen una respuesta
                .map(comment => (
                    <React.Fragment key={comment.id}>
                        <li className="list-group-item ">
                            <p>{comment.message}</p>
                            <div className="d-flex">
                                <a className="me-2 text-decoration-none" onClick={() => likeComment(comment.id)}> {idCommentLike == comment.id ? "Te gusta" : "Me gusta"}</a>
                                <a className="ms-2 text-decoration-none" onClick={() => activateComment(comment.id)}>{idCommentReply == comment.id ? "Cancelar" : "Responder"}</a>
                                
                                <span className="ms-3">👍🏼 {comment.like}</span>
                            </div>

                            {idCommentReply === comment.id && <CommentForm replyId={comment.id}/>}
                        </li>

                        {data
                            .filter(reply => reply.replyId === comment.id)
                            .map(reply => (
                                <li key={reply.id} className="list-group-item ps-5">
                                    <p>{reply.message}</p>
                                    <div className="d-flex">
                                        <a className="me-2 text-decoration-none" onClick={() => likeComment(reply.id)}> {idCommentLike == reply.id ? "Te gusta" : "Me gusta"}</a>
                                        <a className="ms-2 text-decoration-none" onClick={() => activateComment(reply.id)}>{idCommentReply == reply.id ? "Cancelar" : "Responder"}</a>
                                    
                                        <span className="ms-3">👍🏼 {reply.like}</span>
                                    </div>
                                </li>
                        ))}
                    </React.Fragment> 
                    

                ))

                
            }

        </ul>
    );
}

export default ListComment;