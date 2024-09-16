"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import PaymentModal from './components/PaymentModal';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export default function StartTutoring() {
    const [subject, setSubject] = useState(null);
    const [topic, setTopic] = useState(null);
    const [subjects] = useState([
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Science', label: 'Science' },
        { value: 'Language', label: 'Language' },
        // Add more subjects as needed
    ]);
    const [topics, setTopics] = useState([]);
    const subjectTopics = {
        Mathematics: [
            { value: 'Calculus', label: 'Calculus' },
            { value: 'Algebra', label: 'Algebra' },
            { value: 'Geometry', label: 'Geometry' },
        ],
        Science: [
            { value: 'Physics', label: 'Physics' },
            { value: 'Chemistry', label: 'Chemistry' },
            { value: 'Biology', label: 'Biology' },
        ],
        Language: [
            { value: 'English', label: 'English' },
            { value: 'Spanish', label: 'Spanish' },
            { value: 'French', label: 'French' },
        ],
        // Add more subjects and topics as needed
    };
    const [price, setPrice] = useState('');
    const [averagePrice] = useState(50); // Simulated average price
    const [minPrice] = useState(10); // Simulated minimum price
    const [maxPrice] = useState(100); // Simulated maximum price
    const [isRealTime, setIsRealTime] = useState(true);
    const [language, setLanguage] = useState({ value: 'English', label: 'English' });
    const [description, setDescription] = useState('');
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isPaymentBound, setIsPaymentBound] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const router = useRouter();

    const handleSubmit = () => {
        if (!isPaymentBound && subject && price) {
            setIsPaymentModalOpen(true);
        } else {
            console.log('Payment is already bound. Proceed with tutoring request.');
            const queryParams = new URLSearchParams({
                subject: subject?.value || '',
                topic: topic?.value || '',
                price: price,
                language: language?.value || '',
                paymentMethod: 'Visa ****1234',
            }).toString();
            router.push(`/review?${queryParams}`);
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFileName(file.name);
        }
    };

    // Update topics when subject changes
    const handleSubjectChange = (selectedOption) => {
        setSubject(selectedOption);
        setTopic(null);
        setTopics(subjectTopics[selectedOption.value] || []);
    };

    // Progress bar calculation
    const pricePercentage = ((price - minPrice) / (maxPrice - minPrice)) * 100;

    return (
        <div className="min-h-screen bg-white p-8 flex flex-col items-center">
            {/* Test Function Toggle Button */}
            <div className="mb-6">
                <label className="text-sm font-semibold">
                    测试：{isPaymentBound ? '已绑定付款方式' : '未绑定付款方式'}
                </label>
                <label className="switch ml-4">
                    <input
                        type="checkbox"
                        checked={isPaymentBound}
                        onChange={() => setIsPaymentBound(!isPaymentBound)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        Discover Your Ideal Tutor
                    </h1>
                    <p className="text-lg text-gray-600">
                        Enhance your skills with personalized tutoring sessions
                    </p>
                </div>

                {/* Subject and Topic Selection with Autocomplete */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Subject Autocomplete Input */}
                    <div>
                        <label htmlFor="subject" className="block text-2xl font-semibold mb-3">
                            Subject
                        </label>
                        <Select
                            id="subject"
                            value={subject}
                            onChange={handleSubjectChange}
                            options={subjects}
                            placeholder="Start typing to search..."
                            classNamePrefix="react-select"
                        />
                    </div>

                    {/* Topic Autocomplete Input */}
                    <div>
                        <label htmlFor="topic" className="block text-2xl font-semibold mb-3">
                            Topic
                        </label>
                        <Select
                            id="topic"
                            value={topic}
                            onChange={(selectedOption) => setTopic(selectedOption)}
                            options={topics}
                            placeholder={
                                subject ? 'Start typing to search...' : 'Select a subject first'
                            }
                            isDisabled={!subject}
                            classNamePrefix="react-select"
                        />
                    </div>
                </div>

                {/* Budget Input with Progress Bar */}
                <div className="mb-8">
                    <label htmlFor="price" className="block text-2xl font-semibold mb-3">
                        Your Budget ($)
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            id="price-input"
                            value={price}
                            onChange={(e) => {
                                const newPrice = Math.max(0, parseInt(e.target.value, 10) || 0);
                                setPrice(newPrice);
                            }}
                            className="w-full p-5 bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                            placeholder="Enter your budget"
                        />
                        {/* Progress Bar */}
                        <div className="mt-4 h-4 w-full bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500"
                                style={{ width: `${pricePercentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-gray-600 text-sm mt-2">
                            <div>
                                <span className="font-semibold">Min:</span> ${minPrice}
                            </div>
                            <div>
                                <span className="font-semibold">Average:</span> ${averagePrice}
                            </div>
                            <div>
                                <span className="font-semibold">Max:</span> ${maxPrice}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Path Toggle */}
                <div className="mb-12">
                    <label className="block text-2xl font-semibold mb-3">Schedule</label>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => setIsRealTime(true)}
                            className={`flex-1 p-5 rounded-2xl shadow ${isRealTime
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                } transition duration-200`}
                        >
                            Instant Session
                        </button>
                        <button
                            onClick={() => setIsRealTime(false)}
                            className={`flex-1 p-5 rounded-2xl shadow ${!isRealTime
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                } transition duration-200`}
                        >
                            Schedule Session
                        </button>
                    </div>
                </div>

                {/* Advanced Date Picker */}
                {!isRealTime && (
                    <div className="mb-8">
                        <label className="block text-2xl font-semibold mb-3">
                            Select Date and Time
                        </label>
                        <div className="relative">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                showTimeSelect
                                dateFormat="Pp"
                                className="w-full p-5 bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                placeholderText="Click to select a date and time"
                                withPortal
                            />
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"
                            />
                        </div>
                    </div>
                )}

                {/* Language Selector */}
                <div className="mb-8">
                    <label htmlFor="language" className="block text-2xl font-semibold mb-3">
                        Preferred Language
                    </label>
                    <Select
                        id="language"
                        value={language}
                        onChange={(selectedOption) => setLanguage(selectedOption)}
                        options={[
                            { value: 'English', label: 'English' },
                            { value: 'Spanish', label: 'Spanish' },
                            { value: 'French', label: 'French' },
                            { value: 'German', label: 'German' },
                            // Add more languages as needed
                        ]}
                        classNamePrefix="react-select"
                    />
                </div>

                {/* Problem Description */}
                <div className="mb-8">
                    <label htmlFor="description" className="block text-2xl font-semibold mb-3">
                        Describe Your Problem
                    </label>
                    <div className="relative">
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Provide details about the topic or problem..."
                            className="w-full p-5 bg-gray-100 rounded-3xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-40 resize-none"
                        />
                        <label
                            htmlFor="file-upload"
                            className="absolute right-5 bottom-5 text-blue-500 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faUpload} className="text-2xl" />
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                    </div>
                    {uploadedFileName && (
                        <p className="mt-3 text-gray-600">Uploaded: {uploadedFileName}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={!subject || !price}
                        className={`w-full py-5 rounded-full text-2xl font-semibold shadow-lg transition duration-200 ${subject && price
                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Find My Tutor
                    </button>
                </div>
            </div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
            />
        </div>
    );
}
























