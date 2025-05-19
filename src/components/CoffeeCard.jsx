import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, price, quantity } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete: ', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border">
                <figure>
                    <img src={photo} />
                </figure>
                <div className="flex w-full justify-around items-center">
                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='text-xl font-semibold'>Price: {price}</p>
                        <p className='font-semibold'>Quantity: {quantity}</p>
                    </div>


                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <Link to={`/coffees/${_id}`}>
                                <button className="btn join-item">View</button>
                            </Link>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn join-item">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;