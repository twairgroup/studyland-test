"use client"; // 告诉 Next.js 这是客户端组件

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜单开关
    const [isTutor, setIsTutor] = useState(false); // 控制身份状态，默认是学生
    const [tutorials, setTutorials] = useState([]); // 存储创建的 Tutorial
    const [isModalOpen, setIsModalOpen] = useState(false); // 控制弹窗的显示
    const [category, setCategory] = useState(""); // 选择的学科
    const [subject, setSubject] = useState(""); // 自定义的科目
    const [basicPrice, setBasicPrice] = useState(""); // Basic 价格
    const [advancedPrice, setAdvancedPrice] = useState(""); // Advanced 价格
    const [premiumPrice, setPremiumPrice] = useState(""); // Premium 价格
    const [isOnline, setIsOnline] = useState(true); // 管理在线/离线状态
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 控制下拉菜单状态

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSwitch = () => {
        setIsMenuOpen(false);
    };

    const toggleRole = () => {
        setIsTutor(!isTutor);
    };

    const toggleOnlineStatus = () => {
        setIsOnline(!isOnline); // 切换在线/离线状态
    };

    // 添加一个新的 Tutorial
    const handleAddTutorial = () => {
        if (tutorials.length < 3) {
            setIsModalOpen(true); // 打开弹窗
        }
    };

    // 保存新 Tutorial
    const handleSaveTutorial = () => {
        if (category && subject && basicPrice) {
            const newTutorial = {
                category,
                subject,
                basicPrice,
                advancedPrice,
                premiumPrice,
                status: "closed", // 默认状态为关闭
            };
            setTutorials([...tutorials, newTutorial]);
            setIsModalOpen(false); // 关闭弹窗
        }
    };

    // 切换 Tutorial 状态
    const toggleTutorialStatus = (index) => {
        const updatedTutorials = tutorials.map((tutorial, i) =>
            i === index ? { ...tutorial, status: tutorial.status === "open" ? "closed" : "open" } : tutorial
        );
        setTutorials(updatedTutorials);
    };

    return (
        <div onClick={handleSwitch}>
            {/* 顶部菜单栏 */}
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <div className="logo font-bold text-xl">Studyland LOGO</div>
                <nav className="flex space-x-4 relative z-20">
                    <a href="#" className="text-white hover:text-blue-400">Home</a>

                    {/* Tutoring 菜单 */}
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu();
                            }}
                            className="text-white hover:text-blue-400"
                        >
                            Tutoring
                        </button>
                        {isMenuOpen && (
                            <div className="absolute left-0 mt-1 bg-white text-gray-900 py-2 rounded shadow-lg w-48 z-30">
                                <Link href="/start-tutoring" className="block px-4 py-2 hover:bg-gray-100">
                                    Start Tutoring
                                </Link>
                                <Link href="/my-schedule" className="block px-4 py-2 hover:bg-gray-100">
                                    My Schedule
                                </Link>

                            </div>
                        )}
                    </div>

                    <a href="#" className="text-white hover:text-blue-400">My Courses</a>
                    <a href="#" className="text-white hover:text-blue-400">Dashboard</a>
                </nav>

                <div className="flex items-center space-x-4">
                    {/* Student/Tutor Switch 滑块 */}
                    <div className="flex items-center">
                        <span className="text-sm mr-2">Student</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isTutor}
                                onChange={toggleRole}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span className="text-sm ml-2">Tutor</span>
                    </div>

                    {/* 图标替换消息、用户、设置 */}
                    <div className="flex space-x-4 relative">
                        <button>
                            <i className="fas fa-envelope text-xl"></i> {/* 消息图标 */}
                        </button>

                        {/* 用户图标及下拉菜单 */}
                        <div className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <i className="fas fa-user text-xl"></i> {/* 用户图标 */}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                                    <button
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        onClick={() => alert('Redirect to Profile Settings')}
                                    >
                                        Profile Setting
                                    </button>
                                    <button
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        onClick={toggleOnlineStatus}
                                    >
                                        {isOnline ? "I'm Online" : "I'm Offline"}
                                    </button>
                                </div>
                            )}
                        </div>

                        <button>
                            <i className="fas fa-cog text-xl"></i> {/* 设置图标 */}
                        </button>
                    </div>
                </div>
            </header>

            {/* 根据身份状态切换不同的页面内容 */}
            {isTutor ? (
                /* Tutor Home Page */
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-center">Welcome, twairgroup!</h1>
                    {/* Tutorial 容器 */}
                    <section className="p-6 mt-6 bg-gray-100 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Your Tutorials</h2>
                            <button
                                className={`px-4 py-2 text-white rounded ${tutorials.length >= 3 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
                                onClick={handleAddTutorial}
                                disabled={tutorials.length >= 3}
                            >
                                Add Tutorial {tutorials.length}/3
                            </button>
                        </div>

                        {/* 显示已创建的 Tutorial 卡片 */}
                        <div className="grid grid-cols-3 gap-4">
                            {tutorials.map((tutorial, index) => (
                                <div key={index} className={`p-4 rounded shadow-md ${tutorial.status === "open" ? "bg-green-100" : "bg-gray-200"}`}>
                                    <h3 className="text-lg font-semibold">{tutorial.category}/{tutorial.subject}</h3>
                                    <p>Basic: ${tutorial.basicPrice}</p>
                                    <button
                                        className={`mt-2 p-2 text-white rounded ${tutorial.status === "open" ? "bg-green-500" : "bg-gray-500"}`}
                                        onClick={() => toggleTutorialStatus(index)}
                                    >
                                        {tutorial.status === "open" ? "Open" : "Closed"}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* 保存按钮 */}
                        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Save</button>
                    </section>

                    {/* 弹窗 */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4">
                                <h3 className="text-xl font-bold">Add New Tutorial</h3>

                                <label className="block">
                                    <span className="text-gray-700">Category</span>
                                    <select
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Math">Math</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Computer Science">Computer Science</option>
                                        {/* 添加更多的学科 */}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="text-gray-700">Subject</span>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        placeholder="Enter Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-gray-700">Basic Price</span>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        placeholder="Basic Price"
                                        value={basicPrice}
                                        onChange={(e) => setBasicPrice(e.target.value)}
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Advanced Price</span>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        placeholder="Advanced Price"
                                        value={advancedPrice}
                                        onChange={(e) => setAdvancedPrice(e.target.value)}
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Premium Price</span>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        placeholder="Premium Price"
                                        value={premiumPrice}
                                        onChange={(e) => setPremiumPrice(e.target.value)}
                                    />
                                </label>

                                {/* 保存按钮 */}
                                <div className="flex justify-end">
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        onClick={handleSaveTutorial}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="ml-2 bg-gray-300 py-2 px-4 rounded"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                /* Student Home Page (原来的页面内容) */
                <div>
                    {/* Hero 区域 */}
                    <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/login_new.png')" }}>
                        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h1 className="text-5xl text-white font-bold">Explore Your Studyland</h1>
                        </div>
                    </div>

                    {/* 搜索栏 */}
                    <div className="flex justify-center p-6 bg-gray-100">
                        <input
                            type="text"
                            placeholder="Search for courses or tutors..."
                            className="p-2 w-96 border border-gray-300 rounded mr-4"
                        />
                        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">Search</button>
                    </div>

                    {/* Most Popular Courses 推荐区域 */}
                    <section className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Most Popular Courses</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="p-4 bg-white rounded shadow-md">
                                    Course {index + 1}
                                </div>
                            ))}
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="p-4 bg-white rounded shadow-md">
                                    Course {index + 5}
                                </div>
                            ))}
                            <div className="p-4 bg-gray-200 rounded shadow-md text-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Show More</button>
                            </div>
                        </div>
                    </section>

                    {/* Popular Tutor of the Week */}
                    <section className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Popular Tutors of the Week</h2>
                        <div className="flex justify-center space-x-4">
                            <div className="bg-gray-200 p-4 rounded shadow-md text-center">Tutor 2</div>
                            <div className="bg-gray-300 p-6 rounded shadow-md text-center">Tutor 1</div>
                            <div className="bg-gray-200 p-4 rounded shadow-md text-center">Tutor 3</div>
                        </div>
                    </section>
                </div>
            )}

            {/* 页脚 */}
            <footer className="p-4 bg-gray-900 text-white text-center">
                <p>© 2024 Studyland. All rights reserved.</p>
            </footer>
        </div>
    );
}


