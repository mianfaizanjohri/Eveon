import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';

const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://api.eveon.pk/getorder'); // Update with your API endpoint
                setOrders(response.data.orders);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch orders');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-4">All Orders</h2>
                {loading ? (
                    <p className="text-center">Loading orders...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        CNIC
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Name
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Price
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Color
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.name}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.cnic}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.contact}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.email}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.product.name}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            Rs {order.product.price}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {order.product.color}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Admin;
