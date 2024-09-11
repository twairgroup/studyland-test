"use client"; // 添加这一行来告诉 Next.js 这是一个客户端组件

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import PaymentModal from './components/PaymentModal'; // 引入 PaymentModal 组件

export default function StartTutoring() {
    const [subject, setSubject] = useState(''); // 科目或问题输入
    const [price, setPrice] = useState(50); // 初始价格
    const [isRealTime, setIsRealTime] = useState(true); // 实时辅导状态
    const [language, setLanguage] = useState('English'); // 默认语言
    const [description, setDescription] = useState(''); // 问题描述
    const [uploadedFileName, setUploadedFileName] = useState(''); // 上传的文件名
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // 控制模态框的状态
    const [isPaymentBound, setIsPaymentBound] = useState(false); // 管理员开关，默认未绑定付款方式

    const handleSubmit = () => {
        // 提交逻辑：如果未绑定付款方式，则显示支付方式模态框
        if (!isPaymentBound && subject && price) {
            setIsPaymentModalOpen(true); // 打开支付模态框
        } else {
            console.log('Payment is already bound. Proceed with tutoring request.');
            // 其他处理逻辑，比如跳转到下一页面
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFileName(file.name);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="text-left mb-10">
                <h1 className="text-4xl font-bold mb-4">
                    Find the <span className="text-blue-500">Best</span> tutor for <span className="text-blue-500">You</span>
                </h1>
                <p className="text-lg text-gray-600">Empower your learning, connect with experts</p>
            </div>

            {/* 管理员开关 */}
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

            <div className="w-full max-w-md mb-6">
                <label htmlFor="subject" className="block text-xl font-semibold mb-2 text-left">
                    What do you want to learn?
                </label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Math/English..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="w-full max-w-md mb-6">
                <label htmlFor="price" className="block text-xl font-semibold mb-2 text-left">
                    What your budget? (You can enter an exact number or select a range)
                </label>
                <input
                    type="number"
                    id="price-input"
                    value={price}
                    onChange={(e) => {
                        const newPrice = Math.max(0, Math.min(100, parseInt(e.target.value, 10) || 0));
                        setPrice(newPrice);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your budget"
                />
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full"
                />
                <div className="flex justify-between text-gray-600">
                    <span>$0</span>
                    <span>${price}</span>
                    <span>$100</span>
                </div>
            </div>

            <div className="w-full max-w-md mb-6">
                <label className="block text-xl font-semibold mb-2 text-left">Choose Your Learning Path</label>
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={() => setIsRealTime(true)}
                        className={`px-4 py-2 rounded-lg text-white ${isRealTime ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    >
                        Instant Learning Session
                    </button>
                    <button
                        onClick={() => setIsRealTime(false)}
                        className={`px-4 py-2 rounded-lg text-white ${!isRealTime ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    >
                        Schedule a Session
                    </button>
                </div>
            </div>

            {!isRealTime && (
                <div className="w-full max-w-md mb-6">
                    <label className="block text-xl font-semibold mb-2 text-left">Select Date and Time</label>
                    <input
                        type="datetime-local"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}

            <div className="w-full max-w-md mb-6">
                <label htmlFor="language" className="block text-xl font-semibold mb-2 text-left">
                    Choose your language (default is English)
                </label>
                <input
                    type="text"
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder="English..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="w-full max-w-md mb-6 relative">
                <label htmlFor="description" className="block text-xl font-semibold mb-2 text-left">
                    Describe Your Problem
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your problem..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                    htmlFor="file-upload"
                    className="absolute bottom-3 right-3 cursor-pointer text-blue-500"
                >
                    <FontAwesomeIcon icon={faUpload} className="text-xl" />
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </label>
                {uploadedFileName && (
                    <p className="mt-2 text-gray-600">{uploadedFileName}</p>
                )}
            </div>

            <button
                onClick={handleSubmit}
                disabled={!subject || !price}
                className={`w-full max-w-md py-3 mt-6 text-white font-semibold rounded-lg ${subject && price ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
                    }`}
            >
                Find My Tutor
            </button>

            <p className="mt-4 text-gray-600">Are you ready? Start finding a tutor today!</p>

            {/* 引入支付方式模态框 */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
            />
        </div>
    );
}





















