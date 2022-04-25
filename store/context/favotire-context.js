import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFaorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFvIds) => [...currentFvIds, id]);
  }

  function removeFaorite(id) {
    setFavoriteMealIds((currentFvIds) =>
      currentFvIds.filter((mealId) => mealId !== id)
    );
  }

  value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFaorite: removeFaorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
