import RestaurantsList from '../components/RestaurantsList'

export default function Home({ restaurants }) {
  return (
    <div className='container'>
      <RestaurantsList restaurants={restaurants} />
    </div>
  )
}


export async function getStaticProps(){
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  return {
    props: {
      restaurants,
    },
  }
}
