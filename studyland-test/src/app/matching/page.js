// pages/matching.js

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Matching() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [showCancel, setShowCancel] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const totalDuration = 15000; // 15 seconds
        const intervalDuration = 100; // Update every 100ms
        const totalIntervals = totalDuration / intervalDuration;
        let currentInterval = 0;

        const interval = setInterval(() => {
            currentInterval++;
            const newProgress = (currentInterval / totalIntervals) * 100;
            setProgress(newProgress);

            // Update message based on progress
            if (newProgress < 20) {
                setMessage('Organizing and reviewing your tutoring request...');
            } else if (newProgress < 40) {
                setMessage('Sending your request to tutors worldwide...');
            } else if (newProgress < 60) {
                setMessage('Filtering tutors suitable for you...');
            } else if (newProgress < 80) {
                setMessage('STUDYLAND is preparing for you...');
            } else {
                setMessage('Your dedicated tutor is about to appear!');
            }

            // Hide cancel button after 50%
            if (newProgress >= 50) {
                setShowCancel(false);
            }

            // When progress reaches 100%, navigate to tutor selection page
            if (newProgress >= 100) {
                clearInterval(interval);
                router.push('/tutorSelection');
            }
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [router]);

    const handleCancel = () => {
        // Handle cancel action (e.g., navigate back to home)
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg text-center">
                {/* Animation Display Area */}
                <div className="mb-10">
                    {/* Placeholder for animation */}
                    {/* You can replace this with an actual animation component or GIF */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">[Matching Animation Here]</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="w-full bg-gray-300 rounded-full h-6">
                        <div
                            className="bg-blue-500 h-6 rounded-full transition-all duration-100"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="mt-4 text-xl text-gray-700">{message}</p>
                </div>

                {/* Cancel Button */}
                {showCancel && (
                    <button
                        onClick={handleCancel}
                        className="mt-4 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </div>
    );
}

