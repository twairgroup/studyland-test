"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Review() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const subject = searchParams.get('subject') || 'N/A';
    const topic = searchParams.get('topic') || 'N/A';
    const price = searchParams.get('price') || 'N/A';
    const language = searchParams.get('language') || 'N/A';
    const paymentMethod = searchParams.get('paymentMethod') || 'Visa **** 1234';

    const handleConfirm = () => {
        // Navigate directly to the matching page without query parameters
        router.push('/matching');
    };

    const handleChangePaymentMethod = () => {
        // Simulate changing payment method
        alert('Payment method change functionality is not implemented in this simulation.');
    };

    return (
        <div className="min-h-screen bg-white p-8 flex flex-col items-center">
            <div className="bg-gray-100 shadow-2xl rounded-3xl p-10 w-full max-w-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Review Your Tutoring Request
                    </h1>
                    <p className="text-lg text-gray-600">
                        Please confirm the details before proceeding
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Subject */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">Subject:</span>
                        <span className="text-xl text-gray-700">{subject}</span>
                    </div>

                    {/* Topic */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">Topic:</span>
                        <span className="text-xl text-gray-700">{topic}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">Price:</span>
                        <span className="text-xl text-gray-700">${price}</span>
                    </div>

                    {/* Language */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">Language:</span>
                        <span className="text-xl text-gray-700">{language}</span>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">Payment Method:</span>
                        <div className="flex items-center space-x-4">
                            <span className="text-xl text-gray-700">
                                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                                {paymentMethod}
                            </span>
                            <button
                                onClick={handleChangePaymentMethod}
                                className="text-blue-500 hover:text-blue-600 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                Change
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleConfirm}
                    className="mt-10 w-full py-4 rounded-full text-2xl font-semibold shadow-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                >
                    Confirm and Find Tutor
                </button>
            </div>
        </div>
    );
}


