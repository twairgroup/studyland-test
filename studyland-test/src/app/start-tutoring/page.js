"use client"; // 添加这一行来告诉 Next.js 这是一个客户端组件

import React, { useState } from 'react';

export default function StartTutoring() {
  const [subject, setSubject] = useState(''); // 科目或问题输入
  const [price, setPrice] = useState(50); // 初始价格
  const [isRealTime, setIsRealTime] = useState(true); // 实时辅导状态
  const [language, setLanguage] = useState('English'); // 默认语言

  const handleSubmit = () => {
    // 这里可以实现提交逻辑，比如将数据发送到后台
    console.log('Submitted tutoring request:', {
      subject,
      price,
      tutoringType: isRealTime ? 'Instant Learning Session' : 'Scheduled Session',
      language,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* 左侧说明文字 */}
      <div className="text-left mb-10">
        <h1 className="text-4xl font-bold mb-4">Find the <span className="text-blue-500">Best</span> tutor for <span className="text-blue-500">You</span></h1>
        <p className="text-lg text-gray-600">Empower your learning, connect with experts</p>
      </div>

      {/* 搜索框 */}
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

      {/* 价格设置 */}
      <div className="w-full max-w-md mb-6">
        <label htmlFor="price" className="block text-xl font-semibold mb-2 text-left">
          What your budget? (You can enter an exact number or select a range)
        </label>
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

      {/* 辅导类型选择 */}
      <div className="w-full max-w-md mb-6">
        <label className="block text-xl font-semibold mb-2 text-left">Choose Your Learning Path</label>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => setIsRealTime(true)}
            className={`px-4 py-2 rounded-lg text-white ${isRealTime ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            Instant Learning Session
          </button>
          <button
            onClick={() => setIsRealTime(false)}
            className={`px-4 py-2 rounded-lg text-white ${!isRealTime ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            Schedule a Session
          </button>
        </div>
      </div>

      {/* 根据辅导类型显示日历 */}
      {!isRealTime && (
        <div className="w-full max-w-md mb-6">
          <label className="block text-xl font-semibold mb-2 text-left">Select Date and Time</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* 选择语言 */}
      <div className="w-full max-w-md mb-6">
        <label htmlFor="language" className="block text-xl font-semibold mb-2 text-left">Choose your language (default is English)</label>
        <input
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="English..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 提交按钮 */}
      <button
        onClick={handleSubmit}
        disabled={!subject || !price}
        className={`w-full max-w-md py-3 mt-6 text-white font-semibold rounded-lg ${
          subject && price ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Find My Tutor
      </button>

      <p className="mt-4 text-gray-600">Are you ready? Start finding a tutor today!</p>
    </div>
  );
}
