// Importa recursos y componentes necesarios
import imgCar from "./../assets/2025-toyota-4runner-limited-108-jpg.avif";
import profileImg from "./../assets/profile.jpg";
import React, { useState } from "react";
import CommentForm from "./CommentForm";
import ListComment from "./ListComments";

// Contextos para compartir comentarios y el setter con los hijos
export const commentDB = React.createContext();
export const setCommentDB = React.createContext();

const Post = () => {
  // Estado para "Me gusta" del post
  const [like, setLike] = useState(false);

  // Estado para mostrar u ocultar los comentarios
  const [showComment, setShowComment] = useState(false);

  // Estado para mostrar u ocultar el modal de compartir
  const [showShare, setShowShare] = useState(false);

  // Contador de veces que se ha compartido la publicación
  const [share, setShare] = useState(0);

  // Lista de comentarios, con id, mensaje, cantidad de likes
  const [dataComment, setDataComment] = useState([
    { id: 1, message: "Elegante vehículo", like: 2 },
    { id: 2, message: "¿Qué vale?", like: 1 }
  ]);

  return (
    <div className="card shadow-sm rounded-2 mx-auto" style={{ maxWidth: "600px" }}>
      
      {/* Encabezado del post con imagen y nombre del autor */}
      <div className="card-header bg-white border-0 d-flex align-items-center justify-content-between pt-3">
        <div className="d-flex align-items-center">
          <img
            src={profileImg}
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
            alt="Perfil"
          />
          <div>
            <h6 className="mb-0 fw-bold">Toyota Colombia</h6>
            <small className="text-muted">Publicado hace 2 horas</small>
          </div>
        </div>

        {/* Dropdown de opciones del post */}
        <div className="dropdown">
          <button
            className="btn btn-sm btn-light rounded-circle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a className="dropdown-item" href="#">Guardar publicación</a></li>
            <li><a className="dropdown-item" href="#">Editar publicación</a></li>
            <li><a className="dropdown-item" href="#">Eliminar publicación</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#">Ocultar publicación</a></li>
            <li><a className="dropdown-item text-danger" href="#">Reportar publicación</a></li>
          </ul>
        </div>
      </div>

      {/* Cuerpo del post: texto e imagen */}
      <div className="card-body">
        <p className="card-text mb-3">Nueva versión de Toyota 4runner. ¡Ahora disponible en Colombia!</p>
        <img src={imgCar} className="card-img-top rounded-3" alt="Auto" />
      </div>

      {/* Reacciones (likes, comentarios, compartido) */}
      <div className="card-body py-2 border-top border-bottom d-flex justify-content-between text-muted">
        <span>
          <i className="bi bi-hand-thumbs-up-fill me-1 text-primary"></i>
          <i className="bi bi-heart-fill me-2" style={{ color: "#E0245E" }}></i>
          {like ? 1 : 0}
        </span>
        <div>
          <span className="me-2">{dataComment.length} Comentarios</span>
          <span>{share} Compartido</span>
        </div>
      </div>

      {/* Botones de acción: Me gusta, Comentar, Compartir */}
      <div className="card-body py-2 d-flex justify-content-around">
        <button
          className={`btn btn-light w-100 me-1 ${like ? 'text-primary fw-bold' : ''}`}
          onClick={() => setLike(!like)}
        >
          <i className="bi bi-hand-thumbs-up me-1"></i> {like ? "Te gusta" : "Me gusta"}
        </button>
        <button
          className="btn btn-light w-100 mx-1"
          onClick={() => setShowComment(!showComment)}
        >
          <i className="bi bi-chat-left-text me-1"></i> Comentar
        </button>
        <button
          className="btn btn-light w-100 ms-1"
          onClick={() => setShowShare(!showShare)}
        >
          <i className="bi bi-share me-1"></i> Compartir
        </button>
      </div>

      {/* Lista de comentarios, con providers para contextos */}
      <commentDB.Provider value={dataComment}>
        <setCommentDB.Provider value={setDataComment}>
          <ListComment />
        </setCommentDB.Provider>
      </commentDB.Provider>

      {/* Formulario para comentar, aparece si showComment es true */}
      {showComment && (
        <div className="card-footer bg-light">
          <setCommentDB.Provider value={setDataComment}>
            <CommentForm />
          </setCommentDB.Provider>
        </div>
      )}

      {/* Modal de compartir personalizado */}
      {showShare && (
        <>
          <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content shadow">
                <div className="modal-header">
                  <h5 className="modal-title">Compartir publicación</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Cerrar"
                    onClick={() => setShowShare(false)}
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column gap-2">
                  {/* Opciones de compartir */}
                  <button
                    className="btn d-flex align-items-center justify-content-start border rounded-pill px-3 py-2 shadow-sm"
                    onClick={() => { setShare(share + 1); setShowShare(false); }}
                  >
                    <i className="bi bi-link-45deg fs-4 text-primary me-3"></i>
                    <span className="fw-semibold text-start">Copiar enlace</span>
                  </button>
                  <button
                    className="btn d-flex align-items-center justify-content-start border rounded-pill px-3 py-2 shadow-sm"
                    onClick={() => { setShare(share + 1); setShowShare(false); }}
                  >
                    <i className="bi bi-people fs-4 text-success me-3"></i>
                    <span className="fw-semibold text-start">Compartir con amigos</span>
                  </button>
                  <button
                    className="btn d-flex align-items-center justify-content-start border rounded-pill px-3 py-2 shadow-sm"
                    onClick={() => { setShare(share + 1); setShowShare(false); }}
                  >
                    <i className="bi bi-globe-americas fs-4 text-warning me-3"></i>
                    <span className="fw-semibold text-start">Compartir en tu historia</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;