import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length ? state.filteredRecipes : state.recipes);

  if (recipes.length === 0) return <p style={{ textAlign: 'center' }}>No recipes found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      {recipes.map(recipe => (
        <div 
          key={recipe.id} 
          style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
