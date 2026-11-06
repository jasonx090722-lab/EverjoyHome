import React from 'react';
import { OFFICE_ZONES } from '../data/mockData';
import { ZoneId } from '../types';

interface VirtualOfficeMapProps {
  onSelectZone: (zoneId: ZoneId) => void;
  activeZoneId?: ZoneId | 'overview';
}

export const VirtualOfficeMap: React.FC<VirtualOfficeMapProps> = ({
  onSelectZone,
  activeZoneId,
}) => {
  return (
    <div className="space-y-6">
      {/* Top Welcome & KPI Quick Strip */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-teal-400 font-medium mb-1">
              <i className="fa-solid fa-satellite-dish animate-pulse" />
              <span>VĂN PHÒNG ẢO TRỰC QUYẾT TỔNG HỢP</span>
              <span>·</span>
              <span className="text-slate-400">EverJoy Home Headquarters</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Trung Tâm Điều Hành Second Brain & R&D
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Chọn bất kỳ khu vực chức năng bên dưới hoặc nhấp vào phòng 2.5D để truy cập trực tiếp tài liệu và công cụ làm việc.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Thư viện Tri thức</div>
              <div className="text-base sm:text-lg font-bold text-teal-400 font-mono-numbers">1.181 SKUs</div>
              <div className="text-[10px] text-slate-500">Đã chuẩn hóa</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Mục tiêu SLA</div>
              <div className="text-base sm:text-lg font-bold text-amber-400 font-mono-numbers">&lt; 90 Ngày</div>
              <div className="text-[10px] text-slate-500">Trước đây: 146 ngày</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Đào tạo Chéo</div>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono-numbers">72% Xong</div>
              <div className="text-[10px] text-slate-500">Ma trận 4 KSAO</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Trợ lý AI</div>
              <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono-numbers">1s Phản hồi</div>
              <div className="text-[10px] text-slate-500">Training 60s Video</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.5D Isometric Office Floor Section */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 overflow-hidden shadow-2xl">
        {/* Isometric Grid Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Sơ đồ Mặt Bằng Tương Tác 2.5D Isometric
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Nhấp vào phòng bất kỳ để mở tính năng tương ứng
            </span>
          </div>

          {/* 4 Interactive 2.5D Zone Pedestals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {OFFICE_ZONES.map((zone, index) => {
              const isCurrent = activeZoneId === zone.id;

              // Distinct visual colors for the 4 zones
              const themeStyles = {
                teal: {
                  border: 'border-teal-500/30 hover:border-teal-400',
                  bg: 'from-teal-950/40 via-slate-900 to-slate-900',
                  glow: 'group-hover:shadow-teal-500/20',
                  iconBg: 'bg-teal-500/20 text-teal-300',
                  accent: 'text-teal-400',
                  btn: 'bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border-teal-500/30',
                },
                cyan: {
                  border: 'border-cyan-500/30 hover:border-cyan-400',
                  bg: 'from-cyan-950/40 via-slate-900 to-slate-900',
                  glow: 'group-hover:shadow-cyan-500/20',
                  iconBg: 'bg-cyan-500/20 text-cyan-300',
                  accent: 'text-cyan-400',
                  btn: 'bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border-cyan-500/30',
                },
                emerald: {
                  border: 'border-emerald-500/30 hover:border-emerald-400',
                  bg: 'from-emerald-950/40 via-slate-900 to-slate-900',
                  glow: 'group-hover:shadow-emerald-500/20',
                  iconBg: 'bg-emerald-500/20 text-emerald-300',
                  accent: 'text-emerald-400',
                  btn: 'bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border-emerald-500/30',
                },
                amber: {
                  border: 'border-amber-500/30 hover:border-amber-400',
                  bg: 'from-amber-950/40 via-slate-900 to-slate-900',
                  glow: 'group-hover:shadow-amber-500/20',
                  iconBg: 'bg-amber-500/20 text-amber-300',
                  accent: 'text-amber-400',
                  btn: 'bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border-amber-500/30',
                },
              }[zone.colorTheme] || {
                border: 'border-teal-500/30 hover:border-teal-400',
                bg: 'from-teal-950/40 via-slate-900 to-slate-900',
                glow: 'group-hover:shadow-teal-500/20',
                iconBg: 'bg-teal-500/20 text-teal-300',
                accent: 'text-teal-400',
                btn: 'bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border-teal-500/30',
              };

              return (
                <div
                  key={zone.id}
                  onClick={() => onSelectZone(zone.id)}
                  className={`group relative bg-gradient-to-br ${themeStyles.bg} border ${themeStyles.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${themeStyles.glow} cursor-pointer overflow-hidden ${
                    isCurrent ? 'ring-2 ring-teal-400 shadow-teal-500/20' : ''
                  }`}
                >
                  {/* Decorative Room Perspective Corner Lines */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity" />

                  {/* Room Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${themeStyles.iconBg} flex items-center justify-center text-xl shrink-0 shadow-inner transition-transform group-hover:scale-110`}>
                        <i className={`fa-solid ${zone.icon}`} />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                          <span>{zone.code}</span>
                          <span>·</span>
                          <span className={themeStyles.accent}>{zone.badge}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                          {zone.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-1 bg-slate-800/90 border border-slate-700 rounded-md text-slate-300 whitespace-nowrap">
                      {zone.activeCount}
                    </span>
                  </div>

                  {/* Room Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 line-clamp-2 mb-5">
                    {zone.description}
                  </p>

                  {/* Room Isometric Simulated Environment Box */}
                  <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-3.5 mb-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800">
                      <span className="text-slate-500">TRẠNG THÁI KHU VỰC:</span>
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        SẴN SÀNG HOẠT ĐỘNG
                      </span>
                    </div>
                    <div className="pt-2 text-[11px] text-slate-300 flex items-center justify-between">
                      <span>Phân hệ: {zone.subtitle}</span>
                      <span className="text-slate-500">Tầng 0{index + 1}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors flex items-center gap-1.5">
                      <span>Mở giao diện phòng</span>
                      <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                    </span>
                    <button
                      type="button"
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${themeStyles.btn}`}
                    >
                      Truy Cập Ngay
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
