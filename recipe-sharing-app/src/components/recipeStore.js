import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
  })),
  
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
    })),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id)
    })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filterRecipes: (term) => {
    const search = term?.toLowerCase() ?? get().searchTerm.toLowerCase();
    set({
      filteredRecipes: get().recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search)
      )
    });
  }
}));
