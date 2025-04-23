import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link to={`/receta/${recipe.id}`}>Ver más</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;