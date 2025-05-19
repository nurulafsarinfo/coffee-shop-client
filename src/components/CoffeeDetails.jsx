import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    // const coffeeData = 
    const { name, photo, price, supplier, taste, details, quantity } = useLoaderData();

    // console.log("coffe data is:",coffeeData);
    console.log("coffe data is:",name);

    return (
        <div>
            <div>
                <div>
                    <img src={photo} alt="coffee photo" />
                </div>
                <div>
                    <p className=''>NiceTies</p>
                    <p className='text-xl font-semibold'>Name: {name}</p>
                    <p className='text-xl font-semibold'>Supplier: {supplier}</p>
                    <p className='text-xl font-semibold'>Taste: {taste}</p>
                    <p className='text-xl font-semibold'><span>Details:</span>{details}</p>
                    <p className='text-xl font-semibold'><span>Quantity:</span>{quantity}</p>
                    <p className='text-xl font-semibold'><span>Price: </span>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;