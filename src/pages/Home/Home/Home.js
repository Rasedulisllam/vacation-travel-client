import React from 'react';
import Benner from '../Benner/Benner';
import BulletPoint from '../BulletPoint/BulletPoint';
import Destinations from '../Destinations/Destinations';
import Highlight from '../Highlight/Highlight';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <BulletPoint></BulletPoint>
            <Packages></Packages>
            <Highlight></Highlight>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;