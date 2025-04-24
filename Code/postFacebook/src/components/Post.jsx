import imgCar from "./../assets/2025-toyota-4runner-limited-108-jpg.avif"
import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import ListComment from "./ListComments";

export const commentDB = React.createContext();
export const setCommentDB = React.createContext()

const Post = () => {
    let [like, setLike] = useState(false)
    let [showComment, setShowComment] = useState(false)
    let [numberComment, setNumberComment] = useState(0)

    let [dataComment, setDataComment] = useState(
        [
            {"id": 1, "message": "Elegante vehiculo", "like": 2},
            {"id": 2, "message": "Que vale?", "like": 1}
        ]
    )

    return(
        <div className="card d-flex justify-content-center align-center" style={{"width": "35vw"}}>
            <div className="card-body">
                <h5 className="card-title">2025 Toyota 4Runner</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <img src={imgCar} className="card-img-top img-fluid rounded-3" alt="..."></img>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span>👍🏼 <span>{like ? 1 : 0}</span></span>
                    <div>
                        <span className="me-1">{dataComment.length} Comentarios</span>
                        <span className="ms-1">Compartido</span>
                    </div>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                   <button className="btn btn-primary" onClick={() => setLike(!like)}>Like</button>
                   <button className="btn btn-secondary"onClick={() => setShowComment(!showComment)}>Comentar</button>
                   {/* <button className="btn btn-secondary">Compartir</button> */}
                </li>
            </ul>

            <commentDB.Provider value={dataComment}>
                <setCommentDB.Provider value={setDataComment}>
                    <ListComment/>
                </setCommentDB.Provider>
            </commentDB.Provider>

            {showComment === true && 
                <setCommentDB.Provider value={setDataComment}>
                    <div className="card-footer">
                        <CommentForm/>
                    </div>
                </setCommentDB.Provider>
            }
        </div>
    );
}

export default Post