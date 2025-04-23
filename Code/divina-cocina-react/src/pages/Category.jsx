import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import { recipes } from '../../data.js';

function Category() {
  const { category } = useParams();
  const filteredRecipes = recipes.filter((recipe) => recipe.category === category);

  return (
    <div>
      <h1>{category}</h1>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Category;