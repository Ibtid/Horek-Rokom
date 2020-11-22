import React from 'react'
import HomepageBanner from '../../components/Images/Banner/HomepageBanner/HomepageBanner'
import ProductsList from '../../components/Products/ProductsList'
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <HomepageBanner/>
                <div className="home__ProductList">
                    <ProductsList/>
                </div>
            </div>
        </div>
    )
}

export default Home
