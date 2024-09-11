
// src/app/home/page.js

"use client"; // 添加这一行来告诉 Next.js 这是一个客户端组件

import React, { useState } from 'react';
import Link from 'next/link'; // 导入 Link 组件

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜单开关

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // 切换菜单显示状态
    };

    const handleSwitch = () => {
        setIsMenuOpen(false); // 点击其他地方时关闭菜单
    };

    return (
        <div onClick={handleSwitch}> {/* 点击页面其他地方时关闭菜单 */}
            {/* 顶部菜单栏 */}
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <div className="logo font-bold text-xl">Studyland LOGO</div>
                <nav className="flex space-x-4 relative z-20">
                    <a href="#" className="text-white hover:text-blue-400">Home</a>

                    {/* Tutoring 菜单，使用点击事件触发 */}
                    <div className="relative">
                        <button onClick={(e) => { e.stopPropagation(); toggleMenu(); }} className="text-white hover:text-blue-400">
                            Tutoring
                        </button>

                        {/* 下拉菜单 */}
                        {isMenuOpen && ( // 根据 isMenuOpen 来控制显示和隐藏
                            <div className="absolute left-0 mt-1 bg-white text-gray-900 py-2 rounded shadow-lg w-48 z-30">
                                <Link href="/start-tutoring" passHref> {/* 使用 Link 跳转到 start-tutoring 页面 */}
                                    <a className="block px-4 py-2 hover:bg-gray-100">Start Tutoring</a>
                                </Link>
                                <Link href="/my-schedule" passHref> {/* 假设有一个 my-schedule 页面 */}
                                    <a className="block px-4 py-2 hover:bg-gray-100">My Schedule</a>
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
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span className="text-sm ml-2">Tutor</span>
                    </div>

                    {/* 图标替换消息、用户、设置 */}
                    <div className="flex space-x-4">
                        <button>
                            <i className="fas fa-envelope text-xl"></i> {/* 消息图标 */}
                        </button>
                        <button>
                            <i className="fas fa-user text-xl"></i> {/* 用户图标 */}
                        </button>
                        <button>
                            <i className="fas fa-cog text-xl"></i> {/* 设置图标 */}
                        </button>
                    </div>
                </div>
            </header>

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
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Search
                </button>
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
                    <div className="bg-gray-200 p-4 rounded shadow-md text-center">
                        Tutor 2
                    </div>
                    <div className="bg-gray-300 p-6 rounded shadow-md text-center">
                        Tutor 1
                    </div>
                    <div className="bg-gray-200 p-4 rounded shadow-md text-center">
                        Tutor 3
                    </div>
                </div>
            </section>

            {/* 页脚 */}
            <footer className="p-4 bg-gray-900 text-white text-center">
                <p>© 2024 Studyland. All rights reserved.</p>
            </footer>
        </div>
    );
}

