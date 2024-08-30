import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://api.eveon.pk/user-login', { email, password });
            console.log(response.data);
            setLoading(false);
            sessionStorage.setItem('user', JSON.stringify(response.data))
            navigate('/admin')
        } catch (error) {
            setError(error.response.data.error || 'Something went wrong');
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-900">Admin Login</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="rounded-md shadow-sm">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="********"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? 'Logging in...' : 'Sign in'}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default AdminLogin;
