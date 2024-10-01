import React from 'react';
import './PostList.css'; 

const posteos = [
  {
    id: 12,
    titulo: 'Spiderman',
    texto: 'Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.',
    user_id: 7,
    usuario: 'stan_lee',
  },
  {
    "id": 14,
    "titulo": "X-MEN",
    "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 16,
    "titulo": "Capitán América",
    "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 17,
    "titulo": "Thanos",
    "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
    {
    "id": 18,
    "titulo": "Ant-Man",
    "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  // Agrega más objetos aquí según tus publicaciones
];

const PostList = () => {
  const handleLeerClick = (posteoId) => {
    alert(`LEER posteo ID ${posteoId}`);
  };

  const handleModificarClick = (posteoId) => {
    alert(`MODIFICAR posteo ID ${posteoId}`);
  };

  const elementosRenderizados = posteos.map((posteo) => (
    <div key={posteo.id} className="post-card">
      <div className="post-content">
        <h2>{posteo.titulo}</h2>
        <p>{posteo.texto}</p>
      </div>
      <div className="button-container">
        <button onClick={() => handleLeerClick(posteo.id)}>Leer</button>
        <button onClick={() => handleModificarClick(posteo.id)}>Modificar</button>
      </div>
    </div>
  ));

  return <div className="post-list-centered">{elementosRenderizados}</div>;
};

export default PostList;
