import React, { useState } from 'react';
import { FakeLogin } from './components/FakeLogin';
import { Header } from './components/Header';
import { VirtualOfficeMap } from './components/VirtualOfficeMap';
import { ProductWiki } from './components/ProductWiki';
import { AiAssistant } from './components/AiAssistant';
import { KsaoMatrix } from './components/KsaoMatrix';
import { SlaTracker } from './components/SlaTracker';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { DEFAULT_USER } from './data/mockData';
import { UserProfile, ZoneId } from './types';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile>(DEFAULT_USER);
  const [currentZone, setCurrentZone] = useState<ZoneId | 'overview'>('overview');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [overallCompetencyScore, setOverallCompetencyScore] = useState<number>(72);

  // Handle pass-through login
  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setCurrentZone('overview');
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentZone('overview');
  };

  if (!isLoggedIn) {
    return <FakeLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        user={currentUser}
        currentZone={currentZone}
        onNavigate={(zone) => setCurrentZone(zone)}
        onLogout={handleLogout}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* Breadcrumb & Navigation strip for inner views */}
        {currentZone !== 'overview' && (
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setCurrentZone('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg"
            >
              <i className="fa-solid fa-arrow-left text-xs" />
              <span>Quay lại Sơ đồ Văn phòng Ảo</span>
            </button>

            <div className="text-xs text-slate-400 font-mono">
              Đang làm việc tại:{' '}
              <strong className="text-white uppercase">
                {currentZone === 'wiki' && 'Zone 01 · Product Wiki'}
                {currentZone === 'ai-training' && 'Zone 02 · Trợ lý AI & Video 60s'}
                {currentZone === 'ksao-matrix' && 'Zone 03 · Ma trận KSAO'}
                {currentZone === 'sla-tracker' && 'Zone 04 · SLA Tracker'}
              </strong>
            </div>
          </div>
        )}

        {/* View Routing */}
        {currentZone === 'overview' && (
          <VirtualOfficeMap
            onSelectZone={(zoneId) => setCurrentZone(zoneId)}
            activeZoneId={currentZone}
          />
        )}

        {currentZone === 'wiki' && <ProductWiki />}

        {currentZone === 'ai-training' && (
          <AiAssistant
            onMicroLearningCompleted={() => {
              setOverallCompetencyScore((prev) => Math.min(100, prev + 5));
            }}
          />
        )}

        {currentZone === 'ksao-matrix' && (
          <KsaoMatrix
            onProgressUpdated={(newScore) => setOverallCompetencyScore(newScore)}
          />
        )}

        {currentZone === 'sla-tracker' && <SlaTracker />}
      </main>

      {/* Minimalistic Corporate Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">EverJoy Home E-Commerce Ltd</span>
            <span>·</span>
            <span>Second Brain & Virtual Workspace</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>SLA Cam kết: &lt; 90 Ngày</span>
            <span>·</span>
            <span>1.181 SKUs QA Archive</span>
            <span>·</span>
            <span>FDA 21 CFR 177</span>
            <span>·</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-teal-400 hover:underline cursor-pointer"
            >
              Tải file HTML đơn
            </button>
          </div>
        </div>
      </footer>

      {/* Standalone Single-File HTML Export Modal */}
      <StandaloneExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
