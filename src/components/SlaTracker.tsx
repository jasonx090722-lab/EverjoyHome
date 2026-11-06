import React, { useState } from 'react';

export const SlaTracker: React.FC = () => {
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [productCategory, setProductCategory] = useState<'Drinkware' | 'Baby Products' | 'Outdoor & Home'>('Drinkware');
  const [targetSlaDays, setTargetSlaDays] = useState<number>(88);

  // Compute calculated milestone dates
  const calculateMilestoneDate = (daysFromStart: number) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + daysFromStart);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const stages = [
    {
      code: 'STAGE-01',
      name: 'R&D & Khảo Sát VOC Kỹ Thuật',
      owner: 'Nguyễn Văn A (R&D Lead)',
      oldDays: 28,
      newDays: 15,
      delta: '-13 ngày (-46%)',
      deliverable: 'PRD Approved + File Phác Thảo Sơ Bộ',
      deadline: calculateMilestoneDate(15),
      status: 'Đã hoàn thành bàn giao',
      color: 'teal',
    },
    {
      code: 'STAGE-02',
      name: 'Thiết Kế 3D CAD & CMF Bao Bì',
      owner: 'Trần Bảo Nam (Design Lead)',
      oldDays: 35,
      newDays: 20,
      delta: '-15 ngày (-43%)',
      deliverable: 'STEP 3D + Bản Vẽ Dung Sai + Pantone CMF',
      deadline: calculateMilestoneDate(35),
      status: 'Đang triển khai (Ngày 12/20)',
      color: 'cyan',
    },
    {
      code: 'STAGE-03',
      name: 'Sourcing, Đúc Khuôn & Golden Sample',
      owner: 'Trần Thị B (Sourcing Lead)',
      oldDays: 55,
      newDays: 35,
      delta: '-20 ngày (-36%)',
      deliverable: '10 Mẫu Thử Nghiệm + BOM Chi Tiết',
      deadline: calculateMilestoneDate(70),
      status: 'Sẵn sàng tiếp nhận',
      color: 'amber',
    },
    {
      code: 'STAGE-04',
      name: 'Lab Test Quốc Tế & Listing GTM',
      owner: 'Lê Hoàng C (Marketing Lead)',
      oldDays: 28,
      newDays: 18,
      delta: '-10 ngày (-36%)',
      deliverable: 'Chứng chỉ FDA/CPC + Listing Amazon Live',
      deadline: calculateMilestoneDate(88),
      status: 'Lên kế hoạch chạy PPC',
      color: 'emerald',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <i className="fa-solid fa-stopwatch-20" />
              <span>SLA OPTIMIZATION PIPELINE</span>
              <span>·</span>
              <span className="text-slate-400">R&D Acceleration Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Phòng Họp R&D & Bộ Đo Lường SLA (146 Ngày → Dưới 90 Ngày)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Tối ưu hóa thời gian đưa sản phẩm mới ra thị trường (Go-to-Market Speed), loại bỏ độ trễ bàn giao liên phòng ban.
            </p>
          </div>

          {/* SLA Comparison Box */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 rounded-xl p-4 shrink-0">
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-[11px] text-slate-400">Chu trình Cũ</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-500 font-mono-numbers line-through">
                146 Ngày
              </div>
              <div className="text-[10px] text-rose-400">Chậm trễ 4.8 tháng</div>
            </div>

            <div className="text-center px-3">
              <div className="text-[11px] text-amber-300 font-semibold">SLA Cam Kết Mới</div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono-numbers">
                88 Ngày
              </div>
              <div className="text-[10px] text-emerald-400">Rút ngắn 58 Ngày (-40%)</div>
            </div>
          </div>
        </div>

        {/* Big Visual Progress Comparison */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold">So sánh Tỷ Lệ Tiến Độ Chu Trình:</span>
            <span className="font-mono text-emerald-400 font-bold">Tiết kiệm 58 ngày cho mỗi SKU ra mắt</span>
          </div>

          {/* Old Timeline */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Chu trình cũ không có Second Brain (146 ngày):</span>
              <span className="font-mono">146d</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div style={{ width: '19%' }} className="bg-slate-600 h-full border-r border-slate-900" title="R&D 28d" />
              <div style={{ width: '24%' }} className="bg-slate-500 h-full border-r border-slate-900" title="Design 35d" />
              <div style={{ width: '38%' }} className="bg-slate-600 h-full border-r border-slate-900" title="Sourcing 55d" />
              <div style={{ width: '19%' }} className="bg-slate-500 h-full" title="Marketing 28d" />
            </div>
          </div>

          {/* New Optimized Timeline */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[11px] text-teal-300">
              <span className="font-semibold">Chu trình mới chuẩn hóa Second Brain (88 ngày):</span>
              <span className="font-mono font-bold text-emerald-400">88d (Mục tiêu &lt; 90d ĐẠT CHUẨN)</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
              <div style={{ width: '17%' }} className="bg-teal-500 h-full border-r border-slate-950" title="R&D 15d" />
              <div style={{ width: '23%' }} className="bg-cyan-500 h-full border-r border-slate-950" title="Design 20d" />
              <div style={{ width: '40%' }} className="bg-amber-500 h-full border-r border-slate-950" title="Sourcing 35d" />
              <div style={{ width: '20%' }} className="bg-emerald-500 h-full" title="Marketing 18d" />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Handover Stages Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <div
            key={stage.code}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>{stage.code}</span>
                <span className="text-emerald-400 font-bold">{stage.delta}</span>
              </div>

              <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                {stage.name}
              </h4>

              <div className="text-[11px] text-slate-400 mb-3">
                Chủ trì: <span className="text-slate-200">{stage.owner}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 mb-3 text-center">
                <div>
                  <div className="text-[10px] text-slate-500">Quy trình Cũ</div>
                  <div className="text-sm font-bold text-slate-400 font-mono-numbers line-through">
                    {stage.oldDays} Ngày
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-emerald-400">Cam Kết SLA</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono-numbers">
                    {stage.newDays} Ngày
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-300 mb-2">
                <span className="text-[11px] text-slate-500 block mb-0.5">Sản phẩm bàn giao:</span>
                <span className="line-clamp-2">{stage.deliverable}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px]">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>Hạn chót dự phóng:</span>
                <span className="font-mono text-white font-semibold">{stage.deadline}</span>
              </div>
              <div className="text-teal-400 font-medium flex items-center gap-1">
                <i className="fa-solid fa-clock text-[10px]" />
                <span>{stage.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project SLA Launch Date Calculator */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur space-y-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-calculator text-teal-400" />
          <h3 className="text-base font-bold text-white">
            Bộ Công Cụ Dự Phóng Ngày Ra Mắt Dự Án Mới (SLA Estimator)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Ngày Khởi Động Dự Án (Kick-off Date):
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Phân Loại Sản Phẩm:
            </label>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="Drinkware">Bình / Ly giữ nhiệt (Drinkware)</option>
              <option value="Baby Products">Đồ dùng trẻ em (Baby Feeding & Cups)</option>
              <option value="Outdoor & Home">Gia dụng thông minh & Cắm trại</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Mục Tiêu Chu Trình SLA:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="60"
                max="120"
                value={targetSlaDays}
                onChange={(e) => setTargetSlaDays(Number(e.target.value))}
                className="w-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
              />
              <span className="text-xs text-slate-400">Ngày (&lt; 90d đạt chuẩn)</span>
            </div>
          </div>
        </div>

        {/* Calculated Result Ribbon */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-teal-400 font-medium">DỰ BÁO NGÀY LAUNCH CHÍNH THỨC TRÊN AMAZON / SHOPIFY:</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono-numbers mt-0.5">
              {calculateMilestoneDate(targetSlaDays)}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Áp dụng bộ tiêu chuẩn FDA & kiểm thử 1.181 SKUs giúp loại bỏ hoàn toàn nguy cơ chậm trễ.
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-semibold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check" />
              <span>SLA Tối Ưu Hóa Thành Công</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
