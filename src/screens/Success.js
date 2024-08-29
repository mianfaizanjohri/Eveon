import React from 'react';

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex flex-col items-center space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-20 h-20 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7 12l2-2m0 4l2-2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800">Order Placed Successfully!</h2>
          <p className="text-gray-600 text-center">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>
          <a
            href="/"
            className="mt-4 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
