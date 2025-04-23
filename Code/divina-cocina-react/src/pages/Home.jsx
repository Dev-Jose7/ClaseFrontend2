import React from 'react';
import RecipeList from '../components/RecipeList';
import { recipes } from '../../data.js';

function Home() {
  return (
    <div>
      <h1>Recetas Destacadas</h1>
      <RecipeList recipes={recipes.slice(0, 5)} />
    </div>
  );
}

export default Home;