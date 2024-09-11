"use client"; // 告诉 Next.js 这是客户端组件
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; // 引入 useRouter

export default function PaymentModal({ isOpen, onClose }) {
    const [paymentMethod, setPaymentMethod] = useState('stripe'); // 默认选择 Stripe
    const router = useRouter(); // 初始化 useRouter 来实现跳转

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSave = () => {
        // 模拟保存付款方式的逻辑
        console.log('Saved payment method:', paymentMethod);

        // 跳转到 Review 页面，构建 URL 参数
        router.push(`/review?paymentMethod=${paymentMethod}`);

        onClose(); // 关闭模态框
    };

    if (!isOpen) {
        return null; // 如果模态框关闭，则不渲染任何内容
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 relative animate-fadeInUp">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
                    Please Add a Payment Method
                </h2>

                {/* 选择付款方式 */}
                <div className="space-y-4">
                    <label className="block text-xl font-medium text-gray-700">Select Payment Method:</label>

                    <div className="space-y-4">
                        {/* Stripe 选项 */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md ${paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                }`}
                            onClick={() => setPaymentMethod('stripe')}
                        >
                            <FontAwesomeIcon icon={faCreditCard} className="text-blue-500 text-2xl mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Credit/Debit Card (via Stripe)</h3>
                                <p className="text-sm text-gray-500">Secure and encrypted card payment.</p>
                            </div>
                        </div>

                        {/* 余额选项 */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md ${paymentMethod === 'balance' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                }`}
                            onClick={() => setPaymentMethod('balance')}
                        >
                            <FontAwesomeIcon icon={faWallet} className="text-blue-500 text-2xl mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Use My Balance</h3>
                                <p className="text-sm text-gray-500">Pay with your available Studyland balance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stripe 表单显示 */}
                {paymentMethod === 'stripe' && (
                    <div className="space-y-4 transition-opacity ease-in-out duration-300">
                        <label className="block text-lg font-medium text-gray-700">Card Details:</label>
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                            />
                            <input
                                type="text"
                                placeholder="CVC"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                            />
                        </div>
                    </div>
                )}

                {/* 保存按钮 */}
                <button
                    onClick={handleSave}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in-out"
                >
                    Save and Continue
                </button>

                {/* 关闭按钮 */}
                <button
                    onClick={onClose}
                    className="w-full mt-2 text-gray-500 hover:text-gray-700 text-center"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}


