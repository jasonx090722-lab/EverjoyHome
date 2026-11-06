import React, { useState, useEffect, useRef } from 'react';
import { AI_PRESET_QUESTIONS, AI_KNOWLEDGE_BASE } from '../data/mockData';
import { ChatMessage } from '../types';

interface AiAssistantProps {
  onMicroLearningCompleted?: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ onMicroLearningCompleted }) => {
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: `Xin chào! Tôi là **EverJoy Second Brain AI Agent**. Tôi được nạp sẵn toàn bộ cơ sở tri thức về tiêu chuẩn FDA/Lead-Free, quy trình SOP 90 ngày và dữ liệu kiểm thử của 1.181 SKUs EverJoy Home.\n\nBạn có thể nhấp vào các câu hỏi gợi ý bên dưới hoặc nhập câu hỏi bất kỳ để tôi hỗ trợ ngay trong 1 giây!`,
      timestamp: 'Vừa xong',
      references: ['Second Brain Core v4.2', '1.181 SKUs QA Logs', 'FDA 21 CFR 177'],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Micro-Learning Video Simulation state (60 seconds)
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Synchronized video lecture slides and subtitles
  const microLessons = [
    {
      start: 0,
      end: 15,
      stage: '01. Bối cảnh & Thách thức',
      slideTitle: 'Thách thức Chu trình Cũ 146 Ngày',
      caption: 'Chào mừng bạn đến với EverJoy Home! Trước đây, chu trình từ ý tưởng R&D đến khi hàng lên kệ Amazon mất tới 146 ngày do thiếu quy chuẩn tập trung.',
      avatarState: 'speaking',
    },
    {
      start: 15,
      end: 30,
      stage: '02. Chuẩn hóa SOP',
      slideTitle: 'Cam kết SLA Rút Ngắn Dưới 90 Ngày',
      caption: 'Với Second Brain, 4 chặng: R&D (15d) -> Design (20d) -> Sourcing (35d) -> Marketing (18d) được số hóa và kiểm soát tiến độ từng giờ.',
      avatarState: 'explaining',
    },
    {
      start: 30,
      end: 45,
      stage: '03. Thư viện 1.181 SKUs',
      slideTitle: 'Kỷ luật Chất lượng Zero-Defect',
      caption: 'Nhật ký 1.181 SKUs giúp chúng ta loại bỏ 100% lỗi rò rỉ nắp, bong tróc sơn tĩnh điện và chì >90ppm ngay từ khâu bản vẽ 3D.',
      avatarState: 'pointing',
    },
    {
      start: 45,
      end: 60,
      stage: '04. Về đích & GTM',
      slideTitle: 'Chinh phục Thị trường US / Canada / Mexico',
      caption: 'Tuân thủ nghiêm ngặt tiêu chuẩn FDA và Prop 65 sẽ giúp sản phẩm EverJoy Home đạt chuẩn quốc tế và nâng tầm thương hiệu toàn cầu.',
      avatarState: 'celebrating',
    },
  ];

  // Current active lecture segment
  const currentSegment =
    microLessons.find((l) => playbackSeconds >= l.start && playbackSeconds < l.end) ||
    microLessons[microLessons.length - 1];

  // Video timer loop
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackSeconds((prev) => {
          if (prev >= 59) {
            setIsPlaying(false);
            setIsCompleted(true);
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Auto-scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Send message handler
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI bot responds in 1 second
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedData = Object.entries(AI_KNOWLEDGE_BASE).find(([k]) => lower.includes(k));

      let replyText = '';
      let refs: string[] = ['Second Brain Internal Archive'];
      let actions: string[] = ['Tra cứu thêm tại Product Wiki'];

      if (matchedData) {
        replyText = matchedData[1].answer;
        refs = matchedData[1].references;
        actions = matchedData[1].actions;
      } else if (lower.includes('fda') || lower.includes('thực phẩm') || lower.includes('inox')) {
        replyText = `Theo quy chuẩn FDA 21 CFR 177 của EverJoy Home:\n- Thép ruột bình bắt buộc Inox SUS 304 hoặc 316.\n- Gioăng đệm nắp phải dùng Platinum Silicone chịu nhiệt 120°C, không chứa mùi cao su lưu hóa.\n- Nắp nhựa Tritan/PP không thôi nhiễm BPA trong cồn hoặc axit thực phẩm.`;
        refs = ['FDA 21 CFR 177', 'Inox Mill Cert Standard'];
      } else if (lower.includes('sla') || lower.includes('146') || lower.includes('90')) {
        replyText = `Quy trình Second Brain giúp EverJoy Home giảm chu kỳ từ 146 ngày xuống dưới 90 ngày:\n- R&D: 15 ngày (trước: 28d)\n- Design: 20 ngày (trước: 35d)\n- Sourcing: 35 ngày (trước: 55d)\n- Marketing: 18 ngày (trước: 28d)\nTổng thời gian đo lường thực tế hiện tại là 88 ngày!`;
        refs = ['SOP Handover Protocol', 'SLA Target 90d'];
      } else {
        replyText = `Câu hỏi của bạn đã được đối chiếu với cơ sở dữ liệu EverJoy Second Brain.\n\nĐối với nội dung "${query}":\n- Các quy định an toàn Bắc Mỹ (FDA, CPSIA Lead-free <90ppm) luôn là điều kiện tiên quyết.\n- Mọi thiết kế mới phải đối chiếu với 1.181 SKUs để tránh lỗi gioăng nắp hoặc rơi vỡ.\n- Nếu cần hỗ trợ thêm, bạn có thể tham gia bài học Micro-learning 60s hoặc xem chi tiết trong Product Wiki.`;
        refs = ['EverJoy Home Policy', '1.181 SKUs QA Archive'];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        references: refs,
        actions: actions,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 900);
  };

  const handleMarkCompleted = () => {
    setIsCompleted(true);
    if (onMicroLearningCompleted) {
      onMicroLearningCompleted();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT COLUMN: EverJoy Second Brain AI Agent Chat (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col h-[750px] bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <i className="fa-solid fa-robot text-lg" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">EverJoy Second Brain AI Agent</h3>
                <span className="text-[10px] text-teal-400 font-mono bg-teal-950/60 border border-teal-500/30 px-1.5 py-0.2 rounded">
                  v4.2 PRO
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Trực tuyến · Phản hồi chuẩn xác trong 1 giây</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setMessages([
                {
                  id: 'msg-reset',
                  sender: 'ai',
                  text: 'Đã làm mới phiên hội thoại. Tôi sẵn sàng giải đáp mọi thắc mắc về tiêu chuẩn và quy trình EverJoy Home!',
                  timestamp: 'Vừa xong',
                },
              ]);
            }}
            title="Làm mới cuộc trò chuyện"
            className="text-xs text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-rotate-right mr-1" />
            <span className="hidden sm:inline">Làm mới</span>
          </button>
        </div>

        {/* Preset Question Buttons */}
        <div className="p-3 bg-slate-950/70 border-b border-slate-800/80">
          <div className="text-[11px] text-slate-400 mb-2 font-medium flex items-center gap-1.5">
            <i className="fa-solid fa-bolt text-cyan-400" />
            <span>Câu hỏi gợi ý nhanh (Một chạm để nhận phản hồi):</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AI_PRESET_QUESTIONS.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(question)}
                className="text-[11px] text-left px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-950/50 hover:border-cyan-500/40 border border-slate-700/70 text-slate-300 hover:text-cyan-200 transition-all cursor-pointer"
              >
                <i className="fa-regular fa-comment-dots text-cyan-400 mr-1.5" />
                <span>{question}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 text-sm mt-1">
                  <i className="fa-solid fa-brain" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-teal-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-tl-none shadow-md'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* AI References */}
                {msg.references && msg.references.length > 0 && (
                  <div className="pt-2 border-t border-slate-700/60 text-[10px] text-slate-400 flex flex-wrap items-center gap-1.5">
                    <span className="text-cyan-400 font-semibold">Trích dẫn:</span>
                    {msg.references.map((ref, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 font-mono text-slate-300"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                )}

                <div className="text-[10px] text-right text-slate-400 pt-1">{msg.timestamp}</div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs mt-1">
                  Tôi
                </div>
              )}
            </div>
          ))}

          {/* Typing state */}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 text-sm">
                <i className="fa-solid fa-brain" />
              </div>
              <div className="bg-slate-800/90 border border-slate-700/70 rounded-2xl rounded-tl-none p-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">AI đang tra cứu Second Brain...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Hỏi AI về tiêu chuẩn FDA, lỗi nắp 1.181 SKUs, SLA bàn giao..."
            className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <span>Gửi</span>
            <i className="fa-solid fa-paper-plane text-[10px]" />
          </button>
        </form>
      </div>

      {/* RIGHT COLUMN: Micro-Learning Simulated Video/Audio Player (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col h-[750px] bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Player Header */}
        <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <i className="fa-solid fa-film text-sm" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Phòng Bài Giảng Onboarding 60s</h3>
              <p className="text-[11px] text-slate-400">Micro-Learning do AI Thuyết Minh</p>
            </div>
          </div>

          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-teal-300">
            0:{playbackSeconds < 10 ? `0${playbackSeconds}` : playbackSeconds} / 1:00
          </span>
        </div>

        {/* Video Canvas Simulator */}
        <div className="relative flex-1 bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Ambient Video Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

          {/* AI Instructor Digital Avatar */}
          <div className="relative z-10 mb-5">
            <div
              className={`w-28 h-28 rounded-full border-4 ${
                isPlaying ? 'border-teal-400 shadow-lg shadow-teal-500/30 scale-105' : 'border-slate-700'
              } p-1 transition-all duration-300 bg-slate-900 flex items-center justify-center relative`}
            >
              {/* Speaking pulse rings */}
              {isPlaying && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-teal-400/50 animate-ping pointer-events-none" />
                  <div className="absolute -inset-2 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
                </>
              )}

              <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 flex flex-col items-center justify-center text-teal-300">
                <i className="fa-solid fa-user-astronaut text-3xl mb-1" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-teal-400">
                  {isPlaying ? 'AI Speaking' : 'AI Ready'}
                </span>
              </div>
            </div>

            {/* Audio Wave Visualizer Simulation */}
            <div className="flex items-center justify-center gap-1 mt-3 h-5">
              {[40, 70, 95, 60, 85, 50, 100, 65, 45].map((h, i) => (
                <div
                  key={i}
                  style={{ height: isPlaying ? `${h}%` : '20%' }}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    isPlaying ? 'bg-teal-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Title & Stage */}
          <div className="relative z-10 space-y-1 mb-4 max-w-sm">
            <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400 bg-teal-950/70 border border-teal-500/30 px-2 py-0.5 rounded-full inline-block">
              {currentSegment.stage}
            </div>
            <h4 className="text-base font-bold text-white tracking-tight">
              {currentSegment.slideTitle}
            </h4>
          </div>

          {/* Synchronized Captions (Phụ đề thời gian thực) */}
          <div className="relative z-10 w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 shadow-lg min-h-[75px] flex items-center justify-center">
            <p className="leading-relaxed italic text-center">
              "{currentSegment.caption}"
            </p>
          </div>
        </div>

        {/* Video Scrubber & Playback Controls */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
          {/* Scrubber Bar */}
          <div className="space-y-1">
            <input
              type="range"
              min="0"
              max="60"
              value={playbackSeconds}
              onChange={(e) => setPlaybackSeconds(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>0:00 - Bối cảnh</span>
              <span>0:15 - SOP</span>
              <span>0:30 - 1.181 SKUs</span>
              <span>0:45 - GTM</span>
              <span>1:00</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              {/* Rewind 5s */}
              <button
                onClick={() => setPlaybackSeconds((prev) => Math.max(0, prev - 5))}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs transition-colors cursor-pointer"
                title="Tua lại 5 giây"
              >
                <i className="fa-solid fa-rotate-left text-xs" />
              </button>

              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-md shadow-teal-500/20 cursor-pointer"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs`} />
                <span>{isPlaying ? 'Tạm Dừng' : playbackSeconds >= 60 ? 'Xem Lại' : 'Phát Bài Giảng'}</span>
              </button>

              {/* Forward 5s */}
              <button
                onClick={() => setPlaybackSeconds((prev) => Math.min(60, prev + 5))}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs transition-colors cursor-pointer"
                title="Tua tới 5 giây"
              >
                <i className="fa-solid fa-rotate-right text-xs" />
              </button>
            </div>

            {/* Mark as Completed */}
            <button
              onClick={handleMarkCompleted}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${isCompleted ? 'fa-circle-check text-emerald-400' : 'fa-check'} text-xs`} />
              <span>{isCompleted ? 'Đã Hoàn Thành (+50 XP)' : 'Xác Nhận Đã Học'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
