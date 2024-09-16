// pages/tutorSelection.js

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function TutorSelection() {
    const router = useRouter();
    const [selectedTutors, setSelectedTutors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Simulated tutor data
    const tutors = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        avatar: '/default-avatar.png', // Replace with actual image paths
        username: `Tutor${index + 1}`,
        rating: (Math.random() * 5).toFixed(1),
        age: Math.floor(Math.random() * 30) + 25,
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        location: 'Location ' + (index + 1),
        language: 'English',
        education: 'Master\'s Degree',
        price: Math.floor(Math.random() * 50) + 20,
    }));

    const tutorsPerPage = 10;
    const totalPages = Math.ceil(tutors.length / tutorsPerPage);

    const handleSelectTutor = (tutor) => {
        if (selectedTutors.length < 3) {
            setSelectedTutors([...selectedTutors, tutor]);
        }
    };

    const handleDeselectTutor = (tutor) => {
        setSelectedTutors(selectedTutors.filter((t) => t.id !== tutor.id));
    };

    const isTutorSelected = (tutor) => {
        return selectedTutors.some((t) => t.id === tutor.id);
    };

    const handleInvite = () => {
        // Handle invite action
        alert('Invitation sent to selected tutors!');
        // You can navigate to another page or reset the selection
    };

    const displayedTutors = tutors.slice(
        (currentPage - 1) * tutorsPerPage,
        currentPage * tutorsPerPage
    );

    return (
        <div className="min-h-screen bg-white p-8 flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
                    Choose Your Tutor
                </h1>

                {/* Selected Tutors Container */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Selected Tutors ({selectedTutors.length}/3):</h2>
                    <div className="flex space-x-4">
                        {selectedTutors.map((tutor) => (
                            <div key={tutor.id} className="flex flex-col items-center">
                                <img
                                    src={tutor.avatar}
                                    alt={tutor.username}
                                    className="w-24 h-24 rounded-full object-cover mb-2"
                                />
                                <p className="text-gray-700">{tutor.username}</p>
                                <button
                                    onClick={() => handleDeselectTutor(tutor)}
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tutor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedTutors.map((tutor) => (
                        <div
                            key={tutor.id}
                            className={`border rounded-lg p-4 shadow ${isTutorSelected(tutor) ? 'opacity-50' : ''
                                }`}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={tutor.avatar}
                                    alt={tutor.username}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{tutor.username}</h3>
                                    <div className="flex items-center text-yellow-500">
                                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                                        <span>{tutor.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <p><strong>Age:</strong> {tutor.age}</p>
                            <p><strong>Gender:</strong> {tutor.gender}</p>
                            <p><strong>Location:</strong> {tutor.location}</p>
                            <p><strong>Language:</strong> {tutor.language}</p>
                            <p><strong>Education:</strong> {tutor.education}</p>
                            <p><strong>Price:</strong> ${tutor.price}/hr</p>
                            <button
                                onClick={() => handleSelectTutor(tutor)}
                                disabled={isTutorSelected(tutor) || selectedTutors.length >= 3}
                                className={`mt-4 w-full py-2 rounded-full text-white ${isTutorSelected(tutor) || selectedTutors.length >= 3
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                    } transition duration-200`}
                            >
                                {isTutorSelected(tutor) ? 'Selected' : 'Add to Match'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center items-center space-x-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                    >
                        Previous
                    </button>
                    <span className="text-xl">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                    >
                        Next
                    </button>
                </div>

                {/* Invite Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleInvite}
                        disabled={selectedTutors.length === 0}
                        className={`w-1/2 py-4 rounded-full text-2xl font-semibold shadow-lg transition duration-200 ${selectedTutors.length > 0
                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Invite
                    </button>
                </div>
            </div>
        </div>
    );
}
