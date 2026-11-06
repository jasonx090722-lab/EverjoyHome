import React, { useState } from 'react';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Fetch the standalone HTML file or trigger download
    const link = document.createElement('a');
    link.href = '/everjoy-home-single-file.html';
    link.download = 'everjoy-home-virtual-workspace.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open('/everjoy-home-single-file.html', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4">
        <div className="flex items-start justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <i className="fa-solid fa-file-code" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Xuất Mã Nguồn Single-File HTML Độc Lập</h3>
              <p className="text-xs text-slate-400">File tự đóng gói hoàn chỉnh với Tailwind CDN & FontAwesome</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-slate-300">
          <p className="leading-relaxed">
            Hệ thống đã tạo sẵn file HTML đơn <strong className="text-teal-300 font-mono">everjoy-home-single-file.html</strong> tự đóng gói 100% mã nguồn (Tailwind CSS, FontAwesome 6, và Vanilla JavaScript).
          </p>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1 text-slate-400">
            <div className="text-emerald-400 flex items-center gap-1.5">
              <i className="fa-solid fa-check" />
              <span>Chạy offline hoặc trên bất kỳ trình duyệt nào không cần Node.js/Server</span>
            </div>
            <div className="text-teal-300 flex items-center gap-1.5">
              <i className="fa-solid fa-check" />
              <span>Đầy đủ 5 phân khu: Đăng nhập bắc cầu, Bản đồ 2.5D, Wiki 1.181 SKUs, AI & KSAO</span>
            </div>
            <div className="text-cyan-300 flex items-center gap-1.5">
              <i className="fa-solid fa-check" />
              <span>Tích hợp bộ đếm giờ video mô phỏng 60 giây và bộ lọc thông minh</span>
            </div>
          </div>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-2.5">
          <button
            onClick={handleOpenNewTab}
            className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            <span>Mở Trong Tab Mới</span>
          </button>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-4 py-2 bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 shadow-md shadow-teal-500/25 cursor-pointer"
          >
            <i className="fa-solid fa-download text-xs" />
            <span>Tải Xuống File .HTML</span>
          </button>
        </div>
      </div>
    </div>
  );
};
