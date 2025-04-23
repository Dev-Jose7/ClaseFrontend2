import { useState } from "react";

let CommentForm = () => {
    let [comment, setComment] = useState("");
    let objectComment = {};
    let counterId = 2;

    let createFunction = (event) => {
        setComment(event.target.value);
        objectComment = {"id": counterId+1, "messsage": comment};
    }


    return(
        <section className="text-end">
            <textarea id="a" placeholder="Comenta algo..." className="form-control">
                
            </textarea>
            <br />
            <button className="btn btn-secondary" onClick={(e) => createFunction(e)}>Enviar</button>
        </section>
    );
}

export default CommentForm;