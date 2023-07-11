import React from 'react';
import SideBar from '../components/sideBar/SideBar';
import Posts from '../components/Posts/Posts';

const Home = () => {
    return (
        <>
            <section class="wrapper">
                <SideBar></SideBar>
                <Posts></Posts>
            </section>
        </>
    );
};

export default Home;