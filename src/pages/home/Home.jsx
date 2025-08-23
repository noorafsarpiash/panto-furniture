
import Products from '../shop/Products'
import Hero from './Hero'
import WhyChoose from './WhyChoose'

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChoose />
            <Products headline="Best Selling Product" />
        </>
    )
}

export default Home