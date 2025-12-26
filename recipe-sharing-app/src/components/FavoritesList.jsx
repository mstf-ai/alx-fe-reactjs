import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(r => r.id === id))
  );

  if (!favorites.length) return <p>You have no favorite recipes yet.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
