import React from 'react';
import { UserProfile, ZoneId } from '../types';

interface HeaderProps {
  user: UserProfile;
  currentZone: ZoneId | 'overview';
  onNavigate: (zone: ZoneId | 'overview') => void;
  onLogout: () => void;
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  currentZone,
  onNavigate,
  onLogout,
  onOpenExportModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md px-4 sm:px-6 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/20 font-bold">
            <i className="fa-solid fa-cube text-base" />
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-white flex items-center gap-2 whitespace-nowrap">
              <span>EverJoy Home</span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.2 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">
                2nd Brain
              </span>
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
              Virtual Workspace & SLA Platform
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Single-line controls) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => onNavigate('overview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentZone === 'overview'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-map-location-dot text-xs text-teal-400" />
            <span>Sơ đồ Văn phòng</span>
          </button>

          <button
            onClick={() => onNavigate('wiki')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentZone === 'wiki'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-book-open text-xs text-teal-400" />
            <span>Product Wiki</span>
          </button>

          <button
            onClick={() => onNavigate('ai-training')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentZone === 'ai-training'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-robot text-xs text-cyan-400" />
            <span>Trợ lý AI & Video 60s</span>
          </button>

          <button
            onClick={() => onNavigate('ksao-matrix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentZone === 'ksao-matrix'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-award text-xs text-emerald-400" />
            <span>Ma trận KSAO</span>
          </button>

          <button
            onClick={() => onNavigate('sla-tracker')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentZone === 'sla-tracker'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-stopwatch text-xs text-amber-400" />
            <span>SLA 146d → 90d</span>
          </button>
        </nav>

        {/* Zone 3: User Avatar, Standalone Single-file Export, and Logout */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Standalone HTML Export Modal Trigger */}
          <button
            onClick={onOpenExportModal}
            title="Tải hoặc xem mã nguồn Single-File HTML độc lập"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-lg border border-slate-700 transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-file-code text-xs text-teal-400" />
            <span className="hidden xl:inline">File Đơn</span>
            <span>HTML</span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                {user.name.split(' ').slice(-1)[0][0]}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>
            <div className="hidden md:block text-left text-xs leading-tight">
              <div className="font-semibold text-white truncate max-w-[120px]">{user.name}</div>
              <div className="text-[10px] text-teal-400 truncate max-w-[120px]">{user.role}</div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            title="Đăng xuất khỏi Văn phòng Ảo"
            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
          </button>
        </div>
      </div>
    </header>
  );
};
