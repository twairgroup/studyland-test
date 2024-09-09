"use client";

import { useState } from 'react';

export default function ResetPasswordNew() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("New password:", newPassword, "Confirm password:", confirmPassword);
    // 可以在这里添加密码重置逻辑
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* 外层容器 */}
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl h-[500px] overflow-hidden">
        {/* 左边的图片 */}
        <div className="w-1/2">
          <img
            src="/login_new.png" // 确保图片放置在 public 文件夹中
            alt="Reset Password Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 右边的表单 */}
        <div className="w-1/2 p-8">
          {/* 标题 */}
          <h2 className="text-3xl font-semibold mb-6">Reset Password</h2>

          {/* 新密码输入框 */}
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your new password"
              />
              {/* Eye icon */}
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                👁️
              </span>
            </div>
          </div>

          {/* 确认密码输入框 */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm your new password"
              />
              {/* Eye icon */}
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                👁️
              </span>
            </div>
          </div>

          {/* 提示信息 */}
          <p className="text-gray-500 mb-6">
            The system will send an email containing a password reset link.
          </p>

          {/* 发送按钮 */}
          <div>
            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
