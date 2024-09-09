"use client";  // 声明为客户端组件

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // 使用 next/navigation 而不是 next/router
import Link from 'next/link';  // 引入 Link 组件

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();  // 初始化 useRouter

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("Password reset requested for", email);
    
    // 模拟验证码发送，跳转到 new-password 页面
    router.push('/reset-password/new-password');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* 外层容器 */}
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl h-[500px] overflow-hidden">
        {/* 左边的图片 */}
        <div className="w-1/2">
          <img
            src="/login_new.png" // 确保图片放置在 public 文件夹中
            alt="Password Reset Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 右边的重置密码表单 */}
        <div className="w-1/2 p-8 bg-black text-white flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-4 text-left text-white">Password Reset</h1>
          <p className="mb-6 text-left text-gray-400">Please fill in your email</p>

          <form onSubmit={handleResetPassword} className="space-y-6">
            {/* 邮箱输入框 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 sm:text-sm">📧</span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-black text-white"
                  placeholder="E-mail"
                />
              </div>
            </div>

            {/* 提示信息 */}
            <p className="text-gray-400">
              The system will send an email containing a password reset link.
            </p>

            {/* 发送按钮 */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>

            {/* 没有收到提示 */}
            <p className="text-gray-400 mt-4">
              Didn't receive it? You can request to resend after 60 seconds.
            </p>
          </form>

          {/* 忘记密码和注册新账户链接 */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm">
              <Link href="/register" className="font-medium text-blue-500 hover:text-blue-700">
                Create a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
