import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  if (!recommendations.length) return <p>No recommendations available yet.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
