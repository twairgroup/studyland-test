"use client";

import { useState } from 'react';

export default function Register() {
  // 定义状态
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(''); // 用于选择性别
  const [registrationStatus, setRegistrationStatus] = useState(null); // 用于显示注册结果

  // 模拟注册提交处理
  const handleSubmit = (e) => {
    e.preventDefault();

    // 简单的格式验证
    if (!email.includes('@')) {
      setRegistrationStatus('请输入有效的邮箱地址');
      return;
    }

    if (password.length < 6) {
      setRegistrationStatus('密码长度必须大于6个字符');
      return;
    }

    if (!username) {
      setRegistrationStatus('请输入用户名');
      return;
    }

    if (!gender) {
      setRegistrationStatus('请选择性别');
      return;
    }

    // 模拟邮箱验证 (我们允许任何字符通过验证)
    setRegistrationStatus('注册成功！请检查您的邮箱进行验证（模拟）。');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* 外层容器 */}
      <div className="bg-white shadow-lg rounded-lg flex w-3/4 max-w-4xl overflow-hidden">
        {/* 左边的展示图片 */}
        <div className="w-1/2">
          <img
            src="/login_new.png" // 你可以替换为你的图片路径
            alt="Studyland"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 右边的注册表单 */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">注册</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 邮箱输入框 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                邮箱地址
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* 密码输入框 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密码
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* 用户名输入框 */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                用户名
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* 性别选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">性别</label>
              <div className="mt-1">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">请选择性别</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>

            {/* 注册按钮 */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                注册
              </button>
            </div>

            {/* 注册状态显示 */}
            {registrationStatus && <p className="text-red-500 text-center">{registrationStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
