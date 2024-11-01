import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Print = () => {
    const [order, setOrder] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`https://api.eveon.pk/getorderonid/${id}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching the order:', error);
            }
        };

        fetchOrder();
    }, [id]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <Layout>
                <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Order Details</h1>
                    <div className="text-lg mb-2"><strong>Name:</strong> {order.name}</div>
                    <div className="text-lg mb-2"><strong>CNIC:</strong> {order.cnic}</div>
                    <div className="text-lg mb-2"><strong>Contact:</strong> {order.contact}</div>
                    <div className="text-lg mb-2"><strong>Email:</strong> {order.email}</div>
                    <div className="text-lg mb-2"><strong>Address:</strong> {order.address}</div>
                    <div className="mt-4 border-t pt-4">
                        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                        <div className="text-lg mb-2"><strong>Product Name:</strong> {order.product.name}</div>
                        <div className="text-lg mb-2"><strong>Color:</strong> {order.product.color}</div>
                        <div className="text-lg mb-2"><strong>Price:</strong> Rs. {order.product.price.toLocaleString()}</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Print;
