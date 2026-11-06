import React, { useState, useMemo } from 'react';
import {
  COMPLIANCE_STANDARDS,
  SOP_LIST,
  SKU_INCIDENT_LOGS,
} from '../data/mockData';
import { ComplianceStandard, SopItem, SkuIncidentLog } from '../types';

export const ProductWiki: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'compliance' | 'sop' | 'incidents'>('all');
  const [selectedIncidentFilter, setSelectedIncidentFilter] = useState<string>('all');

  // Reader Modal states
  const [selectedStandard, setSelectedStandard] = useState<ComplianceStandard | null>(null);
  const [selectedSop, setSelectedSop] = useState<SopItem | null>(null);
  const [selectedIncident, setSelectedIncident] = useState<SkuIncidentLog | null>(null);

  // Filtered Standards
  const filteredStandards = useMemo(() => {
    return COMPLIANCE_STANDARDS.filter((s) => {
      const matchSearch =
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchSearch;
    });
  }, [searchTerm]);

  // Filtered SOPs
  const filteredSops = useMemo(() => {
    return SOP_LIST.filter((s) => {
      const matchSearch =
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.owner.toLowerCase().includes(searchTerm.toLowerCase());
      return matchSearch;
    });
  }, [searchTerm]);

  // Filtered SKU Incidents
  const filteredIncidents = useMemo(() => {
    return SKU_INCIDENT_LOGS.filter((inc) => {
      const matchSearch =
        inc.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inc.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inc.rootCause.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inc.correctiveAction.toLowerCase().includes(searchTerm.toLowerCase());
      const matchType =
        selectedIncidentFilter === 'all' || inc.incidentType.includes(selectedIncidentFilter);
      return matchSearch && matchType;
    });
  }, [searchTerm, selectedIncidentFilter]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 mb-1">
              <i className="fa-solid fa-book-atlas" />
              <span>SECOND BRAIN REPOSITORY</span>
              <span>·</span>
              <span className="text-slate-400">EverJoy Home Knowledge Base</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Product Wiki & Thư Viện Tri Thức Sản Phẩm
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Tra cứu chuẩn hóa tiêu chuẩn FDA, Lead-Free, chu trình SOP rút ngắn SLA và bài học sự cố từ 1.181 SKUs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30">
              <i className="fa-solid fa-shield-halved mr-1.5" />
              100% US/CA/MX Compliant
            </span>
          </div>
        </div>

        {/* Smart Search Bar & Category Filters */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm theo từ khóa: FDA, chì <90ppm, SOP-01, rò rỉ nắp, SKU-EJH-DW802..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
            )}
          </div>

          {/* Segmented Category Buttons */}
          <div className="flex items-center p-1 bg-slate-800/80 border border-slate-700/80 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setActiveCategory('compliance')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'compliance'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tiêu Chuẩn FDA / An Toàn
            </button>
            <button
              onClick={() => setActiveCategory('sop')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'sop'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quy Trình SOP & SLA
            </button>
            <button
              onClick={() => setActiveCategory('incidents')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'incidents'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bài Học 1.181 SKUs
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: Compliance Standards (Tiêu chuẩn Pháp lý & An toàn) */}
      {(activeCategory === 'all' || activeCategory === 'compliance') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                1. Tiêu Chuẩn Pháp Lý & An Toàn Thực Phẩm (FDA, CPSIA, Prop 65)
              </h3>
            </div>
            <span className="text-xs text-slate-400">{filteredStandards.length} Quy chuẩn hiển thị</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStandards.map((std) => (
              <div
                key={std.id}
                onClick={() => setSelectedStandard(std)}
                className="bg-slate-900/70 border border-slate-800 hover:border-teal-500/50 rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-500/30 px-2 py-0.5 rounded">
                      {std.code}
                    </span>
                    <span className="text-[11px] text-slate-400">Thị trường: {std.targetMarket}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Cập nhật: {std.lastUpdated}</span>
                </div>

                <h4 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors mb-2">
                  {std.title}
                </h4>

                <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                  {std.description}
                </p>

                <div className="bg-slate-950/60 rounded-lg p-2.5 border border-slate-800 text-[11px] text-slate-400">
                  <span className="text-amber-400 font-medium">Lưu ý cốt lõi: </span>
                  <span className="line-clamp-1">{std.criticalNote}</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-teal-400">
                  <span>Xem ngưỡng chỉ số chi tiết</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: SOPs & Handover SLA (Bộ Quy trình Chuẩn) */}
      {(activeCategory === 'all' || activeCategory === 'sop') && (
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                2. Bộ Quy Trình Chuẩn SOP & Cam Kết SLA (146 Ngày → Dưới 90 Ngày)
              </h3>
            </div>
            <span className="text-xs text-slate-400">{filteredSops.length} Chặng quy trình</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSops.map((sop) => (
              <div
                key={sop.id}
                onClick={() => setSelectedSop(sop)}
                className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {sop.code}
                    </span>
                    <span className="text-[11px] font-medium text-slate-300">Phòng ban: {sop.department}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 font-mono-numbers">
                      SLA: {sop.currentSlaDays} Ngày
                    </span>
                    <span className="text-[10px] text-slate-500 block line-through">
                      Cũ: {sop.previousSlaDays}d
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {sop.title}
                </h4>

                <div className="text-xs text-slate-400 mb-3">
                  <span>Phụ trách: </span>
                  <span className="text-slate-200 font-medium">{sop.owner}</span>
                </div>

                <div className="space-y-1.5 mb-4">
                  {sop.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <i className="fa-solid fa-check text-[10px] text-cyan-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950/60 rounded-lg p-2.5 border border-slate-800 text-[11px] text-slate-400">
                  <span className="text-cyan-400 font-medium">Điều kiện bàn giao: </span>
                  <span className="line-clamp-1">{sop.handoverCondition}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Lessons Learned (Nhật ký Bài học Kinh nghiệm 1.181 SKUs) */}
      {(activeCategory === 'all' || activeCategory === 'incidents') && (
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                3. Nhật Ký Bài Học Kinh Nghiệm (Thư Viện Kiểm Thử 1.181 SKUs)
              </h3>
            </div>
            
            {/* Incident Type Sub-filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              <span className="text-slate-400 text-[11px] whitespace-nowrap">Lọc lỗi:</span>
              {[
                { label: 'Tất cả', value: 'all' },
                { label: 'Rò rỉ nắp', value: 'Seal Leakage' },
                { label: 'Độ bền cơ học', value: 'Drop Test' },
                { label: 'Bong tróc sơn', value: 'Coating Peeling' },
                { label: 'Mất chân không', value: 'Vacuum Loss' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedIncidentFilter(filter.value)}
                  className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors cursor-pointer ${
                    selectedIncidentFilter === filter.value
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIncidents.map((inc) => (
              <div
                key={inc.id}
                onClick={() => setSelectedIncident(inc)}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4.5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      {inc.sku}
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      {inc.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                    {inc.productName}
                  </h4>

                  <div className="text-[11px] text-rose-300 mb-2 font-medium flex items-center gap-1.5">
                    <i className="fa-solid fa-triangle-exclamation text-[10px]" />
                    <span>Lỗi: {inc.incidentType}</span>
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-950/70 rounded-lg p-2.5 border border-slate-800/80 mb-3 space-y-1.5">
                    <div>
                      <span className="text-slate-400 text-[11px]">Nguyên nhân: </span>
                      <span className="line-clamp-2">{inc.rootCause}</span>
                    </div>
                    <div className="pt-1 border-t border-slate-800/80">
                      <span className="text-emerald-400 text-[11px]">Giải pháp: </span>
                      <span className="line-clamp-2">{inc.correctiveAction}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Lab: {inc.testLab}</span>
                  <span className="text-amber-400 group-hover:underline flex items-center gap-1">
                    <span>Xem đầy đủ</span>
                    <i className="fa-solid fa-arrow-right text-[9px]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MODAL 1: Standard Detail Reader */}
      {selectedStandard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/70 border border-teal-500/40 px-2 py-0.5 rounded">
                  {selectedStandard.code}
                </span>
                <h3 className="text-lg font-bold text-white mt-1.5">{selectedStandard.title}</h3>
                <div className="text-xs text-slate-400 mt-1">
                  Thị trường: <strong className="text-white">{selectedStandard.targetMarket}</strong> · Danh mục: {selectedStandard.category}
                </div>
              </div>
              <button
                onClick={() => setSelectedStandard(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>

            <div>
              <h4 className="text-xs uppercase font-semibold text-slate-400 mb-1">Mô tả quy chuẩn:</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{selectedStandard.description}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-semibold text-teal-400 mb-2">Bảng Ngưỡng Giới Hạn & Phương Pháp Kiểm Thử:</h4>
              <div className="border border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-800">
                {selectedStandard.keyThresholds.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-950/60 text-xs">
                    <div className="font-semibold text-white mb-0.5">{item.parameter}</div>
                    <div className="text-slate-300 mb-1">
                      <span className="text-emerald-400">Yêu cầu: </span>{item.requirement}
                    </div>
                    <div className="text-slate-500 font-mono text-[11px]">
                      Phương pháp: {item.testMethod}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-200">
              <span className="font-bold text-amber-400">Khuyến nghị bắt buộc cho R&D & Sourcing: </span>
              {selectedStandard.criticalNote}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedStandard(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SOP Detail Reader */}
      {selectedSop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/40 px-2 py-0.5 rounded">
                  {selectedSop.code}
                </span>
                <h3 className="text-lg font-bold text-white mt-1.5">{selectedSop.title}</h3>
                <div className="text-xs text-slate-400 mt-1">
                  Bộ phận: <strong className="text-white">{selectedSop.department}</strong> · Chủ trì: {selectedSop.owner}
                </div>
              </div>
              <button
                onClick={() => setSelectedSop(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                <div className="text-xs text-slate-400">SLA Cam kết Hiện tại</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono-numbers">{selectedSop.currentSlaDays} Ngày</div>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                <div className="text-xs text-slate-400">Quy trình Cũ Trước Đây</div>
                <div className="text-2xl font-bold text-slate-500 font-mono-numbers line-through">{selectedSop.previousSlaDays} Ngày</div>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-semibold text-cyan-400 mb-2">Hồ Sơ Sản Phẩm Bàn Giao (Deliverables):</h4>
              <ul className="space-y-2">
                {selectedSop.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                    <i className="fa-solid fa-circle-check text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-semibold text-slate-400 mb-2">Checklist Thẩm Định Kỹ Thuật:</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedSop.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <i className="fa-regular fa-square-check text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
              <span className="font-bold text-cyan-400">Điều kiện bàn giao sang giai đoạn tiếp theo: </span>
              <span className="text-slate-300">{selectedSop.handoverCondition}</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedSop(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: SKU Incident Detail Reader */}
      {selectedIncident && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/70 border border-amber-500/40 px-2 py-0.5 rounded">
                  {selectedIncident.sku}
                </span>
                <h3 className="text-lg font-bold text-white mt-1.5">{selectedIncident.productName}</h3>
                <div className="text-xs text-slate-400 mt-1">
                  Lô sản xuất: <span className="font-mono text-slate-200">{selectedIncident.batchNumber}</span> · Kiểm thử tại: {selectedIncident.testLab}
                </div>
              </div>
              <button
                onClick={() => setSelectedIncident(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-3.5">
              <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5 mb-1">
                <i className="fa-solid fa-circle-exclamation" />
                <span>Sự cố ghi nhận: {selectedIncident.incidentType}</span>
              </div>
              <p className="text-xs text-rose-200/90 leading-relaxed">
                {selectedIncident.rootCause}
              </p>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3.5">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <i className="fa-solid fa-circle-check" />
                <span>Biện pháp khắc phục đã triển khai:</span>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                {selectedIncident.correctiveAction}
              </p>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
              <span className="font-bold text-amber-400">Quy tắc ngăn ngừa lỗi cho nhân sự mới: </span>
              <p className="text-slate-300 mt-1 leading-relaxed">{selectedIncident.preventiveRule}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <span>Ngày ghi nhận vào Second Brain: {selectedIncident.dateLogged}</span>
              <button
                onClick={() => setSelectedIncident(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Đóng Thư Viện
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
