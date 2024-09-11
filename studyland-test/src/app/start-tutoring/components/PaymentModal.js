"use client"; // 告诉 Next.js 这是客户端组件
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function PaymentModal({ isOpen, onClose }) {
    const [paymentMethod, setPaymentMethod] = useState('stripe'); // 默认选择 Stripe

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSave = () => {
        // 模拟保存付款方式的逻辑
        console.log('Saved payment method:', paymentMethod);
        onClose(); // 关闭模态框
    };

    if (!isOpen) {
        return null; // 如果模态框关闭，则不渲染任何内容
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Please Add a Payment Method</h2>

                {/* 选择付款方式 */}
                <div className="space-y-4">
                    <label className="block text-xl font-medium text-gray-700">Select Payment Method:</label>

                    <div className="space-y-2">
                        {/* Stripe 选项 */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
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
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'balance' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
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
                    <div className="space-y-4">
                        <label className="block text-lg font-medium text-gray-700">Card Details:</label>
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="CVC"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                )}

                {/* 保存按钮 */}
                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                >
                    Save and Contnue
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

