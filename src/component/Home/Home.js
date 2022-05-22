import React from 'react';
import Products from '../ShowingProduct/Products/Products';
import Banner from './Banner/Banner';
import ComingSoon from './ComingSoon/ComingSoon';
import SellingGraph from './SellingGraph/SellingGraph';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ComingSoon/>
            <Products/>
            <SellingGraph/>
        </div>
    );
};

export default Home;