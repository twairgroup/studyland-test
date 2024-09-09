"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* 外层容器 */}
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl h-[500px] overflow-hidden">
        {/* 左边的图片 */}
        <div className="w-1/2">
          <img
            src="/login_new.png" // 确保图片放置在 public 文件夹中
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 右边的登录表单 */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-4 text-left">Login</h1>
          <p className="mb-6 text-left text-gray-500">Please fill in your email and password</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* 邮箱输入框 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">📧</span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="E-mail"
                />
              </div>
            </div>

            {/* 密码输入框 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">🔒</span>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* 登录按钮 */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>

            {/* 忘记密码和注册新账户 */}
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm">
                <Link href="/reset-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Forget your password?
                </Link>
              </div>
              <div className="text-sm">
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                  Create a new account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}