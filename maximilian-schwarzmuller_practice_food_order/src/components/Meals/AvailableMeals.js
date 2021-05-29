import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://node-practice-3b49e.firebaseio.com/meals.json');
        if (!res.ok) throw new Error('Oops!');

        const data = await res.json();
        const loadedMeal = Object.keys(data).map((key) => ({
          id: key,
          description: data[key].description,
          price: data[key].price,
          name: data[key].name,
        }));
        setMealData(loadedMeal);
      } catch (err) {
        setHttpError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);
  const mealsList = mealData.map((meal, id) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoading)
    return (
      <section className={classes.MealsLoading}>
        <p>Loading</p>
      </section>
    );

  if (httpError)
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
