import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favotire-context";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //   const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return (
    <>
      {favoriteMeals.length === 0 ? (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      ) : (
        <MealsList items={favoriteMeals} />
      )}
    </>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
