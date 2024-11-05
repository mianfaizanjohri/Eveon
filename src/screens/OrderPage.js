import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const cart = location.state?.selectedItem; // Retrieve the selected item from location state

    console.log(cart);

    const [formData, setFormData] = useState({
        name: '',
        cnic: '',
        contact: '',
        email: '',
        address: '', // Add address to the state
    });

    useEffect(() => {
        if (!cart) {
            navigate('/'); // Redirect to home page if cart is empty or undefined
        }
    }, [cart, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(cart)

        try {
            const response = await fetch('https://api.eveon.pk/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    cnic: formData.cnic,
                    contact: formData.contact,
                    email: formData.email,
                    address: formData.address, // Include address in the request body
                    product: {
                        name: cart.name,
                        price: cart.price,
                        color: cart.color,
                    }
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                // Handle success
                navigate('/success'); // Redirect to success page
            } else {
                // Handle error
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error submitting the order:', error);
        }
    };

    if (!cart) {
        return null; // Return null to avoid rendering the form if cart is undefined
    }

    return (
        <Layout>
            <div className="container mx-auto p-4 lg:p-6 flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Left Side: Product Details */}
                <div className="w-full lg:w-1/2 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                    <img
                        src={cart.image} // Assuming `cart.image` holds the image URL
                        alt={cart.name}
                        className="w-72 h-auto object-cover mx-auto rounded-lg mb-4"
                    />
                    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800">{cart.name}</h2>
                        <p className="text-lg lg:text-xl mb-2 text-gray-600"><strong>Price:</strong> {cart.price}</p>
                        <p className="text-lg lg:text-xl mb-2 text-gray-600"><strong>Color:</strong> {cart.color}</p>
                    </div>
                </div>

                {/* Right Side: Order Form */}
                <div className="w-full lg:w-2/3 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl lg:text-2xl font-bold mb-4">Booking Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
                                CNIC (without dashes)
                            </label>
                            <input
                                id="cnic"
                                name="cnic"
                                type="text"
                                pattern="\d{13}"
                                value={formData.cnic}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                                Contact Number
                            </label>
                            <input
                                id="contact"
                                name="contact"
                                type="tel"
                                value={formData.contact}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                        >
                            Submit Order
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default OrderPage;
