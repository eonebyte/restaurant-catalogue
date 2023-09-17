import Link from "next/link";
import PropTypes  from "prop-types";
import RestaurantItem from "./RestaurantItem";

function RestaurantsList({ restaurants }) {
    return (
    <div className="grid">
        {restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} {...restaurant} />
        ))}
    </div>
    );
}

const restaurantShapes = {
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

RestaurantsList.propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.shape(restaurantShapes)).isRequired
}

export default RestaurantsList;