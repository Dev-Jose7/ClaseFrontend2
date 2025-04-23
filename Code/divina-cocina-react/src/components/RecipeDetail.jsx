import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Receta no encontrada.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparación</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;