import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const initialCoffees = useLoaderData();
    console.log(initialCoffees)
    return (
        <div>
            
        </div>
    );
};

export default Home;