import React, { useState } from 'react';
import { KSAO_SKILLS } from '../data/mockData';
import { KsaoSkill } from '../types';

interface KsaoMatrixProps {
  onProgressUpdated?: (newOverallPercent: number) => void;
}

export const KsaoMatrix: React.FC<KsaoMatrixProps> = ({ onProgressUpdated }) => {
  const [skills, setSkills] = useState<KsaoSkill[]>(KSAO_SKILLS);
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute overall percentage
  const totalCompleted = skills.filter((s) => s.completed).length;
  const overallPercent = Math.round(
    skills.reduce((acc, curr) => acc + curr.progressPercent, 0) / skills.length
  );
  const totalXp = skills.filter((s) => s.completed).reduce((acc, curr) => acc + curr.xpReward, 0);

  // Handle Mark as completed or boost progress
  const handleToggleComplete = (skillId: string) => {
    setSkills((prev) => {
      const updated = prev.map((item) => {
        if (item.id === skillId) {
          const nextState = !item.completed;
          const newPercent = nextState ? 100 : Math.max(30, item.progressPercent - 30);

          if (nextState) {
            setToastMessage(`🎉 Chúc mừng! Bạn đã hoàn thành khóa học: "${item.title}" (+${item.xpReward} XP)`);
            setTimeout(() => setToastMessage(null), 3500);
          }

          return {
            ...item,
            completed: nextState,
            progressPercent: newPercent,
          };
        }
        return item;
      });

      const newAvg = Math.round(
        updated.reduce((acc, curr) => acc + curr.progressPercent, 0) / updated.length
      );
      if (onProgressUpdated) {
        onProgressUpdated(newAvg);
      }

      return updated;
    });
  };

  // Filter skills
  const filteredSkills = skills.filter((s) => {
    const matchRole = roleFilter === 'all' || s.targetRole === roleFilter || s.targetRole === 'Cross-functional';
    const matchCat = categoryFilter === 'all' || s.category === categoryFilter;
    return matchRole && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 border border-emerald-500 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <i className="fa-solid fa-circle-check text-emerald-400 text-lg" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner & Overall KPI Score */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
              <i className="fa-solid fa-graduation-cap" />
              <span>NĂNG LỰC CHÉO KSAO MATRIX</span>
              <span>·</span>
              <span className="text-slate-400">EverJoy Home Competency Framework</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Bảng Theo Dõi Năng Lực & Đào Tạo Chéo (KSAO)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Ma trận 4 trụ cột: Kiến thức (Knowledge) · Kỹ năng (Skills) · Khả năng (Abilities) · Thái độ (Other) cho R&D, Sourcing và Marketing.
            </p>
          </div>

          {/* Overall Score Card */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 rounded-xl p-4 shrink-0">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 transition-all duration-500"
                  strokeDasharray={`${overallPercent}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-sm font-bold text-white font-mono-numbers">{overallPercent}%</span>
              </div>
            </div>

            <div className="text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>Cấp độ: Chuyên Gia Bậc 4</span>
                <i className="fa-solid fa-award text-emerald-400" />
              </div>
              <div className="text-slate-400 mt-0.5">
                Hoàn thành: <strong className="text-emerald-400 font-mono-numbers">{totalCompleted} / {skills.length}</strong> modules
              </div>
              <div className="text-slate-500 font-mono text-[11px] mt-0.5">
                Tổng điểm: <strong className="text-teal-300 font-mono-numbers">+{totalXp} XP</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-4 border-t border-slate-800">
          {/* Role Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 text-[11px] whitespace-nowrap">Chức danh:</span>
            {[
              { label: 'Tất cả vai trò', value: 'all' },
              { label: 'R&D Specialist', value: 'R&D' },
              { label: 'Sourcing Lead', value: 'Sourcing' },
              { label: 'Marketing Director', value: 'Marketing' },
            ].map((rf) => (
              <button
                key={rf.value}
                onClick={() => setRoleFilter(rf.value)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  roleFilter === rf.value
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {rf.label}
              </button>
            ))}
          </div>

          {/* KSAO Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 text-[11px] whitespace-nowrap">Trụ cột KSAO:</span>
            {[
              { label: 'Tất cả (K-S-A-O)', value: 'all' },
              { label: 'Knowledge (Kiến thức)', value: 'Knowledge' },
              { label: 'Skills (Kỹ năng)', value: 'Skills' },
              { label: 'Abilities (Khả năng)', value: 'Abilities' },
              { label: 'Other (Thái độ)', value: 'Other' },
            ].map((cf) => (
              <button
                key={cf.value}
                onClick={() => setCategoryFilter(cf.value)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  categoryFilter === cf.value
                    ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {cf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => {
          // Distinct badges for K-S-A-O
          const catBadges: Record<string, { label: string; bg: string; text: string; icon: string }> = {
            Knowledge: {
              label: 'K - KIẾN THỨC',
              bg: 'bg-blue-950/70 border-blue-500/30',
              text: 'text-blue-300',
              icon: 'fa-brain',
            },
            Skills: {
              label: 'S - KỸ NĂNG',
              bg: 'bg-cyan-950/70 border-cyan-500/30',
              text: 'text-cyan-300',
              icon: 'fa-screwdriver-wrench',
            },
            Abilities: {
              label: 'A - KHẢ NĂNG',
              bg: 'bg-emerald-950/70 border-emerald-500/30',
              text: 'text-emerald-300',
              icon: 'fa-bolt',
            },
            Other: {
              label: 'O - THÁI ĐỘ & TỐ CHẤT',
              bg: 'bg-amber-950/70 border-amber-500/30',
              text: 'text-amber-300',
              icon: 'fa-heart',
            },
          };

          const badgeInfo = catBadges[skill.category];

          return (
            <div
              key={skill.id}
              className={`bg-slate-900/80 border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 ${
                skill.completed
                  ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeInfo.bg} ${badgeInfo.text} flex items-center gap-1`}
                  >
                    <i className={`fa-solid ${badgeInfo.icon} text-[9px]`} />
                    <span>{badgeInfo.label}</span>
                  </span>

                  <span className="text-[11px] font-mono text-slate-400">
                    Vai trò: <strong className="text-slate-200">{skill.targetRole}</strong>
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {skill.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress & Interaction Footer */}
              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-400 text-[11px]">Tiến độ thành thục:</span>
                    <span
                      className={`font-mono font-bold text-xs ${
                        skill.completed ? 'text-emerald-400' : 'text-teal-400'
                      }`}
                    >
                      {skill.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${skill.progressPercent}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.completed
                          ? 'bg-gradient-to-r from-teal-500 to-emerald-400'
                          : 'bg-teal-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-teal-400">
                    +{skill.xpReward} XP
                  </span>

                  <button
                    onClick={() => handleToggleComplete(skill.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      skill.completed
                        ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/40'
                        : 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                    }`}
                  >
                    <i
                      className={`fa-solid ${
                        skill.completed ? 'fa-check-double text-emerald-400' : 'fa-check'
                      } text-xs`}
                    />
                    <span>{skill.completed ? 'Đã Đạt Chuẩn' : 'Xác Nhận Đã Học'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
