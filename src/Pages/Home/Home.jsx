import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import Success from '../../components/Success/Success';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Doctors></Doctors>
            <Success></Success>
        </main>
    );
};

export default Home;