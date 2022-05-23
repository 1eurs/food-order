import MealSummary from "./MealsSummurry";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react/cjs/react.production.min";
const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
