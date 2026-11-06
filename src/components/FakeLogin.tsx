import React, { useState } from 'react';
import { PRESET_USERS } from '../data/mockData';
import { UserProfile } from '../types';

interface FakeLoginProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export const FakeLogin: React.FC<FakeLoginProps> = ({ onLoginSuccess }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserProfile>(PRESET_USERS[0]);
  const [isLoading, setIsLoading] = useState(false);

  // Seamless pass-through login mechanism: ANY input or empty immediately logs in
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // If user typed custom name or email, adopt it smoothly
      const loggedUser: UserProfile = {
        ...selectedUser,
        name: employeeId.trim() ? (employeeId.includes('@') ? employeeId.split('@')[0] : employeeId) : selectedUser.name,
        email: employeeId.includes('@') ? employeeId : selectedUser.email,
      };
      setIsLoading(false);
      onLoginSuccess(loggedUser);
    }, 400);
  };

  const handleSelectPreset = (user: UserProfile) => {
    setSelectedUser(user);
    setEmployeeId(user.email);
    setPassword('••••••••••••');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/20 mb-4">
            <i className="fa-solid fa-brain text-2xl" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            <span>EverJoy Home</span>
            <span className="text-xs uppercase px-2 py-0.5 font-semibold bg-teal-500/20 text-teal-400 rounded border border-teal-500/30">
              Workspace
            </span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Virtual Workspace & Second Brain System
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-base font-semibold text-white">Đăng nhập Văn phòng Ảo</h2>
            <p className="text-xs text-slate-400 mt-1">
              Cơ chế Đăng nhập Bắc cầu: Nhập bất kỳ thông tin nào hoặc để trống để vào hệ thống ngay lập tức.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="employeeId" className="block text-xs font-medium text-slate-300 mb-1.5">
                Mã Nhân Viên / Email Doanh Nghiệp
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <i className="fa-regular fa-user text-sm" />
                </div>
                <input
                  id="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="VD: nguyen.vana@everjoyhome.com hoặc NV-882"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-medium text-slate-300">
                  Mật Khẩu Nội Bộ
                </label>
                <span className="text-xs text-teal-400 cursor-pointer hover:underline">
                  Đăng nhập một chạm
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <i className="fa-solid fa-lock text-sm" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập bất kỳ mật khẩu nào..."
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-2.5 px-4 bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin text-sm" />
                  <span>Đang kết nối Văn phòng Ảo...</span>
                </>
              ) : (
                <>
                  <span>Đăng Nhập Vào Hệ Thống</span>
                  <i className="fa-solid fa-arrow-right text-xs" />
                </>
              )}
            </button>
          </form>

          {/* Quick Preset Selector for Fast Demos */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <p className="text-xs font-medium text-slate-400 mb-3 text-center">
              Hoặc chọn nhanh hồ sơ nhân sự mẫu:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {PRESET_USERS.map((user) => {
                const isCurrent = selectedUser.id === user.id;
                return (
                  <button
                    key={user.id}
                    type="button"
                    onClick={() => handleSelectPreset(user)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-teal-950/40 border-teal-500/50 text-white'
                        : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-teal-400 font-bold text-xs shrink-0 border border-slate-600">
                      {user.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold truncate flex items-center gap-2">
                        <span>{user.name}</span>
                        <span className="text-[10px] text-teal-400 font-normal">({user.role})</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">{user.department}</div>
                    </div>
                    {isCurrent && <i className="fa-solid fa-check text-xs text-teal-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Security / System Footer */}
        <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-3">
          <span>EverJoy Home E-Commerce Ltd</span>
          <span>·</span>
          <span>Hệ thống Bảo mật Cấp Doanh nghiệp</span>
          <span>·</span>
          <span>SLA 90-Day GTM</span>
        </div>
      </div>
    </div>
  );
};
