import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider'
import Freeone from '../Freeone/Freeone'
import Step from '../Step/Step'
import Primiumone from '../Primiumone/Primiumone'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Freeone></Freeone>
            <Primiumone></Primiumone>
        </div>
    );
};

export default Home;