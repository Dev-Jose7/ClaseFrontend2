// Importa hooks y contextos necesarios
import React, { useContext, useState } from "react";
import { commentDB, setCommentDB } from "./Post";
import CommentForm from "./CommentForm";

const ListComment = () => {
  // Obtiene el listado de comentarios desde el contexto
  const data = useContext(commentDB);

  // Setter para actualizar el listado de comentarios
  const setData = useContext(setCommentDB);

  // Estado que guarda el ID del comentario que está siendo respondido
  const [idCommentReply, setIdCommentReply] = useState(0);

  // Activa o desactiva el formulario de respuesta de un comentario
  const activateComment = (id) => {
    setIdCommentReply(prev => (prev === id ? 0 : id));
  };

  // Alterna el like y la propiedad liked del comentario con el ID correspondiente
  const likeComment = (id) => {
    setData(prevData =>
      prevData.map(comment =>
        comment.id === id
          ? {
              ...comment,
              like: comment.liked ? comment.like - 1 : comment.like + 1,
              liked: !comment.liked
            }
          : comment
      )
    );
  };

  return (
    <ul className="list-group list-group-flush border-top-0 pb-3">
      {/* Filtra los comentarios que no son respuesta */}
      {data
        .filter(comment => !comment.replyId)
        .map(comment => (
          <React.Fragment key={comment.id}>
            {/* Comentario principal */}
            <li className="list-group-item border-0 pt-2 pb-2">
              <div className="bg-light rounded-3 p-3 shadow-sm">
                <p className="mb-2">{comment.message}</p>
                <div className="d-flex align-items-center gap-2">
                  {/* Botón de me gusta con estilo dinámico */}
                  <button
                    className={`btn btn-sm rounded-pill d-flex align-items-center ${
                      comment.liked ? 'btn-primary text-white' : 'btn-outline-primary'
                    }`}
                    onClick={() => likeComment(comment.id)}
                  >
                    <i className="bi bi-hand-thumbs-up me-1"></i>
                    {comment.liked ? "Te gusta" : "Me gusta"}
                  </button>

                  {/* Botón para activar/desactivar el formulario de respuesta */}
                  <button
                    className="btn btn-sm btn-outline-secondary rounded-pill d-flex align-items-center"
                    onClick={() => activateComment(comment.id)}
                  >
                    <i className="bi bi-reply-fill me-1"></i>
                    {idCommentReply === comment.id ? "Cancelar" : "Responder"}
                  </button>

                  {/* Mostrar cantidad de likes */}
                  <span className="text-muted ms-auto">
                    <i className="bi bi-hand-thumbs-up-fill me-1 text-primary"></i> 
                    {comment.like}
                  </span>
                </div>

                {/* Formulario de respuesta visible solo si el ID coincide */}
                {idCommentReply === comment.id && (
                  <div className="mt-3">
                    <CommentForm replyId={comment.id} />
                  </div>
                )}
              </div>
            </li>

            {/* Respuestas a este comentario */}
            {data
              .filter(reply => reply.replyId === comment.id)
              .map(reply => (
                <li key={reply.id} className="list-group-item border-0 pt-2 ps-5">
                  <div className="bg-white border-start border-3 border-primary ps-3 pe-3 py-2 rounded shadow-sm">
                    <p className="mb-2">{reply.message}</p>
                    <div className="d-flex align-items-center gap-2">
                      {/* Botón de me gusta para respuesta */}
                      <button
                        className={`btn btn-sm rounded-pill d-flex align-items-center ${
                          reply.liked ? 'btn-primary text-white' : 'btn-outline-primary'
                        }`}
                        onClick={() => likeComment(reply.id)}
                      >
                        <i className="bi bi-hand-thumbs-up me-1"></i>
                        {reply.liked ? "Te gusta" : "Me gusta"}
                      </button>

                      {/* Botón para activar formulario de respuesta sobre la respuesta */}
                      <button
                        className="btn btn-sm btn-outline-secondary rounded-pill d-flex align-items-center"
                        onClick={() => activateComment(reply.id)}
                      >
                        <i className="bi bi-reply-fill me-1"></i>
                        {idCommentReply === reply.id ? "Cancelar" : "Responder"}
                      </button>

                      {/* Mostrar cantidad de likes de la respuesta */}
                      <span className="text-muted ms-auto">
                        <i className="bi bi-hand-thumbs-up-fill me-1 text-primary"></i>
                        {reply.like}
                      </span>
                    </div>

                    {/* Formulario de respuesta para la respuesta */}
                    {idCommentReply === reply.id && (
                      <div className="mt-3">
                        <CommentForm replyId={reply.id} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default ListComment;