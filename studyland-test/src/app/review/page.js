"use client"; // Next.js 客户端组件

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Review({ subject, price, language, paymentMethod }) {
    const router = useRouter();

    const handleConfirm = () => {
        // 处理确认逻辑，点击确认后进入匹配系统
        router.push('/matching');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">Review Your Tutoring Request</h1>

            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Subject:</h2>
                    <p>{subject}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Price:</h2>
                    <p>${price}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Language:</h2>
                    <p>{language}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Payment Method:</h2>
                    <p>{paymentMethod ? paymentMethod : 'No payment method bound'}</p>
                </div>
            </div>

            <button
                onClick={handleConfirm}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            >
                Confirm and Find Tutor
            </button>
        </div>
    );
}
