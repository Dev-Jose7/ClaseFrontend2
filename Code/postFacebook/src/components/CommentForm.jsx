// Importa hooks y contextos necesarios
import { useContext, useState } from "react";
import { setCommentDB } from "./Post";

const CommentForm = ({ replyId = null }) => {
  // Accede al setter del contexto para actualizar los comentarios globales
  const setDataComment = useContext(setCommentDB);

  // Estado local que guarda el contenido del comentario a escribir
  const [newComment, setComment] = useState("");

  // Función para crear un nuevo comentario o respuesta
  const createComment = () => {
    // Si el campo está vacío o solo tiene espacios, no hacer nada
    if (!newComment.trim()) return;

    // Agrega un nuevo comentario al listado global
    setDataComment(comment => [
      ...comment,
      {
        id: Math.max(...comment.map(c => c.id)) + 1, // genera un nuevo ID único
        message: newComment,                         // texto del comentario
        like: 0,                                     // inicia sin likes
        replyId: replyId                             // si es respuesta, guarda el ID del comentario padre
      }
    ]);

    // Limpia el campo de texto después de enviar
    setComment("");
  };

  return (
    <section className="bg-white rounded-3 p-3 shadow-sm border">
      {/* Campo de texto para escribir el comentario */}
      <textarea
        value={newComment}
        placeholder="Escribe un comentario..."
        className="form-control mb-2 border-0 bg-light rounded-3 shadow-sm"
        style={{ resize: "none" }}
        rows={3}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      {/* Botón de envío alineado a la derecha */}
      <div className="text-end">
        <button className="btn btn-primary rounded-pill px-4" onClick={createComment}>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default CommentForm;