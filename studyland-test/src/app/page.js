"use client";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* 外层容器 */}
      <div className="bg-white shadow-lg rounded-lg flex w-3/4 max-w-4xl overflow-hidden">
        {/* 左边的展示图片 */}
        <div className="w-1/2">
          <img
            src="/login_new.png" // 你可以替换这个路径为你的图片路径
            alt="Studyland"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* 右边的登录部分 */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-lg font-bold mb-4 text-center">Welcome to Studyland</h1>

          <form className="space-y-6">
            {/* 邮箱输入框 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                邮箱
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Login 按钮 */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

