/* eslint-disable @next/next/no-img-element */
export default function Detail({ restaurant }) {
    const { name, description, pictureId, menus: { foods, drinks } } = restaurant;
    return (
        <div className="container">
            <img src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`} alt={name} />
            <header>
                <h1>{name}</h1>
                <p>{description}</p>
            </header>
            <br />
            <main>
                <h2>Informasi Menu</h2>

                <h3>Makanan</h3>
                <ul>
                    {foods.map((food) => (
                        <li key={food.name}>{food.name}</li>
                    ))}
                </ul>

                <h3>Minuman</h3>
                <ul>
                    {drinks.map((drink) => (
                        <li key={drink.name}>{drink.name}</li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const { restaurants } = await response.json();
    const ids = restaurants.map((resturant) => resturant.id);

    return {
        paths: ids.map((id) => ({ params: { id } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${params.id}`);
    const { restaurant } = await response.json();

    return {
        props: {
            restaurant,
        },
    };

}