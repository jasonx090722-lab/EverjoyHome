import {
  UserProfile,
  OfficeZone,
  ComplianceStandard,
  SopItem,
  SkuIncidentLog,
  KsaoSkill,
} from '../types';

export const DEFAULT_USER: UserProfile = {
  id: 'EJH-USR-882',
  name: 'Nguyễn Văn A',
  email: 'nguyen.vana@everjoyhome.com',
  role: 'R&D Specialist',
  department: 'R&D & Product Engineering',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  online: true,
};

export const PRESET_USERS: UserProfile[] = [
  {
    id: 'EJH-USR-882',
    name: 'Nguyễn Văn A',
    email: 'nguyen.vana@everjoyhome.com',
    role: 'R&D Specialist',
    department: 'R&D & Product Engineering',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    online: true,
  },
  {
    id: 'EJH-USR-419',
    name: 'Trần Thị B',
    email: 'tran.thib@everjoyhome.com',
    role: 'Sourcing Lead',
    department: 'Global Supply Chain & OEM Sourcing',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    online: true,
  },
  {
    id: 'EJH-USR-620',
    name: 'Lê Hoàng C',
    email: 'le.hoangc@everjoyhome.com',
    role: 'Marketing Director',
    department: 'E-Commerce Growth & Amazon Listing',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    online: true,
  },
];

export const OFFICE_ZONES: OfficeZone[] = [
  {
    id: 'wiki',
    code: 'ZONE-01',
    title: 'Thư viện Tri thức & Product Wiki',
    subtitle: 'Second Brain & Knowledge Repository',
    description: 'Kho tri thức chuẩn hóa: Tiêu chuẩn FDA / Lead-Free / BPA-Free, SOP liên phòng ban và tra cứu nhật ký kiểm thử 1.181 SKUs.',
    icon: 'fa-book-atlas',
    activeCount: '1.181 SKUs / 42 SOPs',
    badge: 'Core Database',
    colorTheme: 'teal',
  },
  {
    id: 'ai-training',
    code: 'ZONE-02',
    title: 'Trợ lý AI & Phòng Micro-Learning',
    subtitle: 'EverJoy Second Brain AI Agent',
    description: 'Trợ lý AI hỏi đáp quy trình tức thì 1 giây và trình phát video bài giảng Onboarding 60 giây mô phỏng avatar kỹ thuật số.',
    icon: 'fa-robot',
    activeCount: 'Online 24/7 · 99.8% độ chuẩn',
    badge: 'AI Powered',
    colorTheme: 'cyan',
  },
  {
    id: 'ksao-matrix',
    code: 'ZONE-03',
    title: 'Phòng Đào tạo Chéo & Ma trận KSAO',
    subtitle: 'Competency Framework & Skills Upgrading',
    description: 'Bảng theo dõi 4 nhóm năng lực KSAO cho R&D, Sourcing, Marketing. Xác nhận hoàn thành khóa học để thăng tiến cấp bậc.',
    icon: 'fa-chart-pie',
    activeCount: '12 Khóa học · 4 Trụ cột KSAO',
    badge: 'Interactive Score',
    colorTheme: 'emerald',
  },
  {
    id: 'sla-tracker',
    code: 'ZONE-04',
    title: 'Phòng họp R&D & SLA Pipeline Tracker',
    subtitle: '146 Ngày → Dưới 90 Ngày GTM',
    description: 'Hệ thống đo lường tiến độ chuyển giao R&D -> Design -> Sourcing -> Marketing. Bộ công cụ tính toán ngày ra mắt thị trường.',
    icon: 'fa-stopwatch-20',
    activeCount: 'Hiện tại: 88 Ngày (Mục tiêu < 90d)',
    badge: 'SLA Cam kết',
    colorTheme: 'amber',
  },
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    id: 'std-fda-21cfr',
    code: 'FDA 21 CFR 177',
    title: 'Quy chuẩn Vật liệu Tiếp xúc Thực phẩm (Food Contact Substance) - FDA Hoa Kỳ',
    targetMarket: 'US',
    category: 'Drinkware',
    description: 'Tiêu chuẩn bắt buộc đối với tất cả bình giữ nhiệt, ly cốc nước và hộp thực phẩm xuất khẩu sang thị trường Mỹ. Quy định độ tinh khiết kim loại, polymer và chất đàn hồi silicone.',
    keyThresholds: [
      {
        parameter: 'Thép không gỉ ruột bình (Stainless Steel 304/316)',
        requirement: 'Hàm lượng Crom ≥ 18%, Niken ≥ 8%, giới hạn thôi nhiễm kim loại nặng trong dung dịch giả lập axit citric',
        testMethod: 'FDA CPG 7117.06 & 7117.07 / ICP-MS',
      },
      {
        parameter: 'Gioăng Silicone đệm nắp',
        requirement: 'Platinum Cured Silicone, không chứa peroxide residues, thôi nhiễm tổng số ≤ 0.5 mg/inch²',
        testMethod: 'FDA 21 CFR 177.2600 (Rubber articles)',
      },
      {
        parameter: 'Nắp nhựa Tritan / PP nguyên sinh',
        requirement: 'Hoàn toàn không có Bisphenol A, B, S. Thử nghiệm trích ly trong n-Heptane và Ethanol 50%',
        testMethod: 'FDA 21 CFR 177.1520 & 177.1240',
      },
    ],
    criticalNote: 'Tuyệt đối không dùng silicone lưu hóa sulfur giá rẻ vì gây mùi hôi cao su khi đựng nước nóng trên 80°C.',
    lastUpdated: '10/2026',
  },
  {
    id: 'std-cpsia-lead',
    code: 'CPSIA & Lead-Free',
    title: 'Đạo luật Cải thiện An toàn Sản phẩm Tiêu dùng (CPSIA) & California Prop 65',
    targetMarket: 'North America',
    category: 'Baby Products',
    description: 'Quy định nghiêm ngặt về nồng độ Chì (Lead) và Phthalates đối với các sản phẩm trẻ em và đồ gia dụng tiếp xúc trực tiếp.',
    keyThresholds: [
      {
        parameter: 'Hàm lượng Chì trong lớp sơn / phủ bề mặt',
        requirement: 'Tổng hàm lượng chì tuyệt đối ≤ 90 ppm (0.009%)',
        testMethod: '16 CFR 1303 / ASTM F963',
      },
      {
        parameter: 'Chì trong cơ chất (Substrate Materials)',
        requirement: 'Tổng hàm lượng chì trong kim loại đúc và nhựa ≤ 100 ppm',
        testMethod: 'CPSC-CH-E1001-08.3 (XRF Screening & ICP-OES)',
      },
      {
        parameter: 'Phthalates (DEHP, DBP, BBP, DINP, DIBP, DPENP, DHEXP, DCHP)',
        requirement: 'Mỗi chất phthalate không được vượt quá 0.1% (1000 ppm)',
        testMethod: 'CPSC-CH-C1001-09.4',
      },
    ],
    criticalNote: 'Mối hàn đáy bình giữ nhiệt chân không trước đây thường dùng hạt chì (lead solder plug). EverJoy Home 100% bắt buộc dùng chốt thép không gỉ hàn Laser (Lead-free vacuum sealing).',
    lastUpdated: '11/2026',
  },
  {
    id: 'std-canada-ccpsa',
    code: 'Canada CCPSA',
    title: 'Đạo luật An toàn Sản phẩm Tiêu dùng Canada (CCPSA) & Sơ tán nhiệt',
    targetMarket: 'Canada',
    category: 'Drinkware',
    description: 'Quy định nhãn cảnh báo bỏng nhiệt độ cao, thử nghiệm rơi tự do ở nhiệt độ âm (-20°C) cho thị trường Bắc Cực/Canada và quy định nhãn song ngữ Anh - Pháp.',
    keyThresholds: [
      {
        parameter: 'Kiểm tra chịu lạnh nắp bật (-20°C Drop Test)',
        requirement: 'Rơi từ độ cao 1.2m sau khi cấp đông 4 giờ, nắp không được nứt vỡ hoặc phát sinh mảnh nhọn',
        testMethod: 'CCPSA Children’s Sleepwear and Containers Protocol',
      },
      {
        parameter: 'Nhãn cảnh báo song ngữ (English / French)',
        requirement: 'Bắt buộc in nổi hoặc dán tem chịu nước song ngữ: "Caution: Hot Liquids / Attention: Liquides Chauds"',
        testMethod: 'Consumer Packaging and Labelling Act Canada',
      },
    ],
    criticalNote: 'Thị trường Canada trả hàng tỷ lệ cao nếu bình nước bị đông cứng kẹt khóa bật vào mùa đông.',
    lastUpdated: '09/2026',
  },
  {
    id: 'std-mexico-nom',
    code: 'Mexico NOM-252',
    title: 'Tiêu chuẩn Y tế & Nhập khẩu Mexico (NOM-252-SSA1 & NOM-050-SCFI)',
    targetMarket: 'Mexico',
    category: 'Baby Products',
    description: 'Quy định giới hạn sinh khả dụng của kim loại nặng hòa tan (Antimon, Asen, Bari, Cadmi, Crom, Chì, Thủy ngân, Selen) đối với vật dụng ăn uống trẻ em.',
    keyThresholds: [
      {
        parameter: 'Kim loại nặng hòa tan trong axit clohydric 0.07M',
        requirement: 'Chì hòa tan ≤ 90 mg/kg, Cadmi ≤ 75 mg/kg, Thủy ngân ≤ 60 mg/kg',
        testMethod: 'NOM-252-SSA1-2011 / Quang phổ hấp thụ nguyên tử AAS',
      },
      {
        parameter: 'Thông tin thương mại trên nhãn',
        requirement: 'Thông tin nhà nhập khẩu, cảnh báo bằng tiếng Tây Ban Nha chuẩn NOM-050',
        testMethod: 'Kiểm tra hồ sơ hải quan SAT Mexico',
      },
    ],
    criticalNote: 'Chứng nhận phải được cấp bởi phòng thí nghiệm được EMA (Entidad Mexicana de Acreditación) chỉ định.',
    lastUpdated: '08/2026',
  },
];

export const SOP_LIST: SopItem[] = [
  {
    id: 'sop-01',
    code: 'SOP-RD-01',
    title: 'Khảo sát Thị trường, Phân tích VOC & Ý tưởng Kỹ thuật',
    department: 'R&D',
    previousSlaDays: 28,
    currentSlaDays: 15,
    owner: 'Nguyễn Văn A (R&D Lead)',
    deliverables: [
      'Báo cáo phân tích Voice of Customer (VOC) từ 5.000 đánh giá 1-3 sao của đối thủ',
      'Bản đặc tả yêu cầu kỹ thuật PRD (Product Requirements Document)',
      'Hồ sơ thẩm định bằng sáng chế (Patent & Trademark Freedom-to-Operate)',
    ],
    checklist: [
      'Xác nhận phân khúc giá mục tiêu $19.99 - $34.99 trên Amazon US',
      'Kiểm tra danh mục bằng sáng chế cơ cấu nắp mở tự động trên USPTO',
      'Chốt thể tích và khả năng tương thích khay để cốc xe hơi (Car cup holder fit)',
    ],
    handoverCondition: 'Tài liệu PRD có đủ chữ ký của R&D và Marketing trước 17:00 ngày thứ 15.',
  },
  {
    id: 'sop-02',
    code: 'SOP-DES-02',
    title: 'Thiết kế Mô hình 3D CAD, CMF & Bao bì Chuẩn Drop-Test',
    department: 'Design',
    previousSlaDays: 35,
    currentSlaDays: 20,
    owner: 'Trần Bảo Nam (Industrial Designer)',
    deliverables: [
      'File 3D STEP hoàn chỉnh chi tiết ren nắp, gờ silicone và đường gân chịu lực',
      'Bảng thông số CMF (Color, Material, Finish) theo mã màu Pantone chuyên dụng',
      'Thiết kế hộp quà tặng carton 5 lớp đạt tiêu chuẩn thả rơi Amazon ISTA-6A',
    ],
    checklist: [
      'Mô phỏng áp suất dòng chảy nhựa (Mold Flow Analysis) tránh bọt khí nắp',
      'Đảm bảo góc vát phôi dập Inox không vượt quá 12 độ để tránh rạn nứt chân không',
      'Đính kèm file đồ họa nhãn cảnh báo FDA & mã vạch UPC chuẩn GS1',
    ],
    handoverCondition: 'File CAD 3D được duyệt 100% không xung đột dung sai cơ học.',
  },
  {
    id: 'sop-03',
    code: 'SOP-SRC-03',
    title: 'Thẩm định Nhà máy OEM, Đàm phán BOM & Đúc Golden Sample',
    department: 'Sourcing',
    previousSlaDays: 55,
    currentSlaDays: 35,
    owner: 'Trần Thị B (Sourcing Lead)',
    deliverables: [
      'Báo cáo Audit xưởng (ISO 9001, BSCI, SMETA) từ tối thiểu 3 nhà sản xuất',
      'Bảng bóc tách chi phí định mức linh kiện (BOM Costing Sheet) chi tiết từng cent',
      'Bộ mẫu thử nghiệm thực tế (Golden Samples) gồm 10 sản phẩm hoàn chỉnh',
    ],
    checklist: [
      'Kiểm tra giấy chứng nhận nguyên liệu Inox 304/316 Mill Test Certificate',
      'Ký cam kết chất lượng độc quyền và điều khoản phạt 20% nếu trễ tiến độ',
      'Gửi 5 mẫu Golden Sample sang phòng thí nghiệm SGS / Intertek kiểm định FDA',
    ],
    handoverCondition: 'Golden Sample được R&D nghiệm thu và phòng lab cấp chứng thư đạt chuẩn.',
  },
  {
    id: 'sop-04',
    code: 'SOP-MKT-04',
    title: 'Lab Test Quốc tế, Listing 3D & Kích hoạt Go-To-Market',
    department: 'Marketing',
    previousSlaDays: 28,
    currentSlaDays: 18,
    owner: 'Lê Hoàng C (Marketing Director)',
    deliverables: [
      'Hồ sơ hải quan FDA Prior Notice & Children Product Certificate (CPC)',
      'Bộ hình ảnh listing 7 ảnh chuẩn Amazon (Ảnh chính nền trắng + 6 ảnh infographics)',
      'Chiến dịch quảng cáo PPC Launching và kế hoạch bán buôn đa kênh US/CA/MX',
    ],
    checklist: [
      'Tải giấy chứng nhận CPC lên cổng Amazon Compliance Portal',
      'Tạo Video giới thiệu sản phẩm 45 giây thể hiện tính năng giữ nhiệt 24h',
      'Kiểm tra tồn kho trung chuyển tại kho FBA California và Texas',
    ],
    handoverCondition: 'Listing kích hoạt trạng thái "In Stock" và đơn hàng đầu tiên được giao thành công.',
  },
];

export const SKU_INCIDENT_LOGS: SkuIncidentLog[] = [
  {
    id: 'inc-01',
    sku: 'SKU-EJH-DW802',
    productName: 'Bình giữ nhiệt Titan Elite 750ml (Nắp vặn nam tính)',
    category: 'Drinkware',
    incidentType: 'Rò rỉ nắp (Seal Leakage)',
    batchNumber: 'LOT-2025-11-D8',
    testLab: 'Intertek Hong Kong',
    rootCause: 'Khi chứa nước sôi 95°C và đóng chặt, áp suất hơi nước nóng làm biến dạng nén gioăng silicone tiêu chuẩn 50 Shore A, gây xẹp 0.35mm và xì giọt nước sau 4 giờ lật ngược.',
    correctiveAction: 'Nâng cấp lên gioăng Platinum Silicone 65 Shore A hai tầng đệm (Dual-Lip Seal), bổ sung vi rãnh xả áp thông minh khi mở nắp góc 15 độ.',
    preventiveRule: 'Bổ sung bài kiểm tra "24-Hour Inverted Leak Test ở 95°C" vào Checklist kiểm xưởng trước khi xuất cảng.',
    status: 'Đã khắc phục 100%',
    dateLogged: '14/01/2026',
  },
  {
    id: 'inc-02',
    sku: 'SKU-EJH-BB104',
    productName: 'Bình tập uống Spout Cup trẻ em 280ml có tay cầm 360°',
    category: 'Baby Products',
    incidentType: 'Độ bền cơ học (Drop Test)',
    batchNumber: 'LOT-2025-09-B4',
    testLab: 'SGS Vietnam Technical Lab',
    rootCause: 'Thất bại bài thả rơi CPSIA 1.5m trên nền đá granite. Tay cầm nhựa PP cứng bị gãy tại khớp nối đai ốc, để lại cạnh sắc nhọn nguy hiểm cho trẻ dưới 3 tuổi.',
    correctiveAction: 'Thiết kế lại khuôn đúc tay cầm: Chuyển sang nhựa Tritan TX2001 đúc liền khối bọc đệm cao su nhiệt dẻo TPE chống sốc, gia tăng độ dày góc chịu lực từ 1.8mm lên 2.6mm.',
    preventiveRule: 'Tất cả sản phẩm Baby Drinkware bắt buộc vượt qua 10 lần rơi tự do từ độ cao 2.0m không nứt vỡ.',
    status: 'Đã khắc phục 100%',
    dateLogged: '08/02/2026',
  },
  {
    id: 'inc-03',
    sku: 'SKU-EJH-DW512',
    productName: 'Ly giữ nhiệt cà phê Coffee Tumbler 500ml (Nắp trượt nam châm)',
    category: 'Drinkware',
    incidentType: 'Bong tróc sơn (Coating Peeling)',
    batchNumber: 'LOT-2025-12-C1',
    testLab: 'TUV Rheinland Shanghai',
    rootCause: 'Lớp sơn tĩnh điện mờ (Matte Powder Coat) bị bong mảng quanh miệng ly sau 30 chu kỳ thử nghiệm máy rửa chén gia đình ở 65°C.',
    correctiveAction: 'Thêm công đoạn phun cát bề mặt (Sand-blasting Sa 2.5) để tạo độ nhám tế vi trước khi sơn tĩnh điện, đồng thời lùi viền sơn cách mép uống 8mm để mạ điện bóng Inox trần.',
    preventiveRule: 'Yêu cầu nhà máy ký cam kết bảo hành 100 chu kỳ máy rửa bát (100 Dishwasher Cycles Guarantee).',
    status: 'Đã khắc phục 100%',
    dateLogged: '22/02/2026',
  },
  {
    id: 'inc-04',
    sku: 'SKU-EJH-BB309',
    productName: 'Khay trữ đồ ăn dặm Silicone 8 ngăn có nắp đậy',
    category: 'Baby Products',
    incidentType: 'Hàm lượng Chì / BPA (Lead/BPA Test)',
    batchNumber: 'LOT-2026-01-S3',
    testLab: 'Bureau Veritas Shenzhen',
    rootCause: 'Phát hiện hàm lượng chất màu thôi nhiễm nhẹ trong dung dịch mô phỏng thức ăn chua (3% Acetic Acid) do xưởng phụ thêm chất trợ nở màu công nghiệp.',
    correctiveAction: 'Hủy bỏ toàn bộ 2.500 khay của lô thử nghiệm, chuyển sang mua hạt màu silicone y tế hữu cơ (Medical-grade FDA Organic Pigments) từ Clariant Thụy Sĩ.',
    preventiveRule: 'Mỗi mẻ silicone pha màu phải kèm chứng nhận Certificate of Analysis (COA) và phổ hồng ngoại FTIR.',
    status: 'Đã khắc phục 100%',
    dateLogged: '05/03/2026',
  },
  {
    id: 'inc-05',
    sku: 'SKU-EJH-DW991',
    productName: 'Bình thể thao Auto-Spout One-Touch 1000ml có vạch chia giờ',
    category: 'Drinkware',
    incidentType: 'Mất chân không (Vacuum Loss)',
    batchNumber: 'LOT-2026-02-T9',
    testLab: 'EverJoy In-house QA Lab',
    rootCause: 'Tỷ lệ mất chân không sau 3 tháng lưu kho đạt 4.2% (vượt mức cho phép 0.5%). Nguyên nhân do mối hàn đáy bằng hạt đồng bị rỗ khí trong lò hàn chân không cao tần.',
    correctiveAction: 'Chuyển toàn bộ dây chuyền sang công nghệ hàn kín Laser không đuôi (Tailless Laser Vacuum Brazing) trong môi trường khí Argon trơ.',
    preventiveRule: 'Áp dụng máy soi nhiệt hồng ngoại 100% từng bình sau khi bơm nước nóng 90°C để loại trừ bình mất chân không trước đóng gói.',
    status: 'Đã khắc phục 100%',
    dateLogged: '18/03/2026',
  },
  {
    id: 'inc-06',
    sku: 'SKU-EJH-DW330',
    productName: 'Cốc cắm trại dã ngoại Campfire Mug 400ml có móc Carabiner',
    category: 'Outdoor & Home',
    incidentType: 'Độ bền cơ học (Drop Test)',
    batchNumber: 'LOT-2026-03-M2',
    testLab: 'Intertek Hong Kong',
    rootCause: 'Mối hàn quai cốc bằng máy bấm điểm (Spot weld) bị đứt khi chịu lực giật kéo 32kg trong bài kiểm tra độ bền quai cầm.',
    correctiveAction: 'Gia cố bằng chốt đinh tán cơ học Inox 304 hai đầu xuyên qua thành cốc và tăng diện tích hàn laser quanh viền đinh tán, chịu lực kéo vượt 75kg.',
    preventiveRule: 'Bổ sung tiêu chuẩn kiểm thử kéo giật tay cầm Tensile Test 50kg tối thiểu 1 phút.',
    status: 'Đã khắc phục 100%',
    dateLogged: '29/03/2026',
  },
];

export const KSAO_SKILLS: KsaoSkill[] = [
  {
    id: 'ksao-01',
    title: 'Kiến thức Tiêu chuẩn FDA & CPSIA Lead-Free',
    category: 'Knowledge',
    description: 'Nắm vững ngưỡng chì <90ppm, quy chuẩn thôi nhiễm kim loại và vật liệu tiếp xúc thực phẩm Bắc Mỹ.',
    progressPercent: 90,
    targetRole: 'R&D',
    completed: true,
    xpReward: 150,
  },
  {
    id: 'ksao-02',
    title: 'Kỹ năng Phân tích Dung sai CAD 3D & Kiểm tra Mối hàn',
    category: 'Skills',
    description: 'Thiết kế chi tiết ren nắp, rãnh gioăng silicone chống rò rỉ và mô phỏng áp suất nén chân không.',
    progressPercent: 75,
    targetRole: 'R&D',
    completed: false,
    xpReward: 200,
  },
  {
    id: 'ksao-03',
    title: 'Kiến thức Đàm phán BOM & Thẩm định Nhà máy OEM',
    category: 'Knowledge',
    description: 'Bóc tách chi phí khuôn dập Inox, kiểm toán ISO 9001 và giám sát tiêu chuẩn BSCI xưởng gia công.',
    progressPercent: 65,
    targetRole: 'Sourcing',
    completed: false,
    xpReward: 180,
  },
  {
    id: 'ksao-04',
    title: 'Kỹ năng Quản trị SLA Chu trình 90 Ngày',
    category: 'Abilities',
    description: 'Khả năng điều phối bàn giao nhịp nhàng giữa R&D, Sourcing và Marketing, giải quyết nút thắt cổ chai.',
    progressPercent: 85,
    targetRole: 'Cross-functional',
    completed: true,
    xpReward: 250,
  },
  {
    id: 'ksao-05',
    title: 'Kỹ năng Đọc Báo cáo Lab Test SGS / Intertek',
    category: 'Skills',
    description: 'Phân tích bảng kết quả ICP-MS, phổ hồng ngoại FTIR và đánh giá hồ sơ chứng nhận an toàn CPC.',
    progressPercent: 60,
    targetRole: 'Sourcing',
    completed: false,
    xpReward: 160,
  },
  {
    id: 'ksao-06',
    title: 'Kỹ năng Tối ưu Listing Amazon Compliance US',
    category: 'Skills',
    description: 'Soạn thảo USP sản phẩm chuẩn FDA, tối ưu thuật toán tìm kiếm và xử lý hồ sơ khiếu nại tài khoản.',
    progressPercent: 70,
    targetRole: 'Marketing',
    completed: false,
    xpReward: 190,
  },
  {
    id: 'ksao-07',
    title: 'Thái độ Kỷ luật Chất lượng Zero-Defect',
    category: 'Other',
    description: 'Tinh thần không thỏa hiệp với lỗi kiểm thử, chủ động ghi nhận bài học kinh nghiệm vào Second Brain.',
    progressPercent: 95,
    targetRole: 'Cross-functional',
    completed: true,
    xpReward: 220,
  },
  {
    id: 'ksao-08',
    title: 'Khả năng Phân tích Dữ liệu 1.181 SKUs chống lỗi lặp',
    category: 'Abilities',
    description: 'Tra cứu nhanh lỗi nắp, lỗi sơn, mất chân không từ cơ sở dữ liệu để đưa ra giải pháp ngay giai đoạn ý tưởng.',
    progressPercent: 55,
    targetRole: 'R&D',
    completed: false,
    xpReward: 210,
  },
];

export const AI_PRESET_QUESTIONS = [
  'Tiêu chuẩn kiểm thử Drinkware xuất đi Mỹ (FDA & Prop 65)?',
  'SLA bàn giao R&D sang Sourcing là bao lâu và gồm những tài liệu gì?',
  'Các lỗi kiểm định phổ biến nhất trong 1.181 SKUs và cách phòng tránh?',
  'Quy định BPA-Free và Lead-Free đối với đồ dùng trẻ em xuất Canada/Mexico?',
];

export const AI_KNOWLEDGE_BASE: Record<string, { answer: string; references: string[]; actions: string[] }> = {
  'tiêu chuẩn kiểm thử drinkware xuất đi mỹ': {
    answer: `Theo quy chuẩn EverJoy Home Second Brain và luật pháp Hoa Kỳ, sản phẩm Drinkware (Bình/Ly giữ nhiệt Inox, Bình nước thể thao) phải đáp ứng đầy đủ 3 trụ cột bắt buộc:
1. **FDA 21 CFR 177**: Ruột bình bắt buộc làm từ Thép không gỉ thực phẩm (SUS 304 hoặc SUS 316). Gioăng nắp phải là Platinum Silicone đạt chuẩn 21 CFR 177.2600 (không thôi nhiễm mùi khi ngâm nước sôi 95°C).
2. **CPSIA & 16 CFR 1303**: Hàm lượng Chì (Lead) trong lớp sơn phủ bề mặt tuyệt đối ≤ 90 ppm. Chốt hàn chân không đáy 100% bằng Inox hàn Laser không chì.
3. **California Proposition 65**: Không phát hiện Phthalates vượt ngưỡng 1.000 ppm và không chứa BPA.
*Khuyến nghị cho R&D*: Tất cả lô xuất Mỹ đều phải lưu kèm báo cáo thử nghiệm SGS/Intertek có hiệu lực trong 12 tháng.`,
    references: ['FDA 21 CFR 177', 'CPSIA Section 101', 'EverJoy SOP-RD-01'],
    actions: ['Xem chi tiết tiêu chuẩn FDA 21 CFR', 'Tải danh mục kiểm tra xưởng OEM Drinkware'],
  },
  'sla bàn giao r&d sang sourcing': {
    answer: `Cam kết SLA mới của EverJoy Home đã rút ngắn thời gian bàn giao giữa R&D và Sourcing xuống còn **tối đa 15 ngày** (so với 28 ngày trước đây):
- **Thời hạn chốt PRD**: Đúng ngày thứ 15 của chu kỳ dự án.
- **Tài liệu bắt buộc bàn giao (Mandatory Handover Package)**:
  1. Bản đặc tả kỹ thuật PRD có chữ ký duyệt của R&D Lead và Marketing Lead.
  2. Báo cáo VOC đối thủ (tối thiểu 500 reviews tiêu cực phân tích).
  3. File CAD 3D định dạng STEP hoàn thiện chi tiết ren và rãnh gioăng.
  4. Bảng thông số CMF (Màu sắc, Chất liệu, Xử lý bề mặt) có mã màu Pantone.
  5. Giới hạn ngân sách BOM mục tiêu (Target BOM Cost) để Sourcing tiến hành đàm phán khuôn mẫu.`,
    references: ['SOP-RD-01', 'SOP-SRC-03', 'R&D Handover Protocol v3.2'],
    actions: ['Mở bộ đếm SLA Tracker', 'Tải biểu mẫu PRD Handover'],
  },
  'các lỗi kiểm định phổ biến nhất trong 1.181 skus': {
    answer: `Qua thống kê 1.181 SKUs trong Second Brain của EverJoy Home, 3 sự cố thường gặp nhất trong các phòng thử nghiệm quốc tế gồm:
1. **Rò rỉ nắp khi đựng nước sôi 95°C (Chiếm 41% lỗi Drinkware)**: Do dùng gioăng silicone độ cứng thấp (<55 Shore A), khí nóng đẩy mép gioăng biến dạng. *Giải pháp*: Chuẩn hóa Platinum Silicone 65 Shore A hai tầng đệm.
2. **Bong tróc sơn tĩnh điện qua máy rửa chén (Chiếm 27%)**: Do bỏ qua khâu phun cát Sa 2.5 trước khi sơn. *Giải pháp*: Bắt buộc xử lý bề mặt nhám vi mô và phủ Ceramic Primer.
3. **Thất bại Drop Test ở góc đáy (Chiếm 19% đồ trẻ em)**: Khớp tay cầm nhựa PP bị nứt khi rơi từ 1.5m. *Giải pháp*: Thay bằng Tritan TX2001 bọc TPE đàn hồi và bo tròn gân chịu lực.
*Ghi nhớ*: Trước khi ra khuôn mới, kỹ sư bắt buộc đối chiếu mã lỗi trong thư viện 1.181 SKUs!`,
    references: ['SKU-EJH-DW802 Log', 'SKU-EJH-BB104 Log', 'SKU-EJH-DW512 Log'],
    actions: ['Tra cứu Thư viện 1.181 SKUs', 'Xem bài học kinh nghiệm rò rỉ nắp'],
  },
  'quy định bpa-free và lead-free đối với đồ dùng trẻ em xuất canada/mexico': {
    answer: `Đối với thị trường Canada và Mexico, tiêu chuẩn an toàn cho Đồ em bé (Baby Drinkware & Feeding) có những điểm đặc thù sau:
- **Thị trường Canada (Luật CCPSA)**:
  + Cấm tuyệt đối BPA trong bình sữa và cốc tập uống bằng nhựa Polycarbonate. Toàn bộ dòng bình em bé EverJoy Home sử dụng 100% nhựa Tritan hoặc Silicone y tế.
  + Kiểm tra độ giòn lạnh: Nắp và thân bình phải chịu được thử nghiệm rơi tự do ở nhiệt độ -20°C sau 4 giờ cấp đông mà không phát sinh mảnh sắc nhọn.
  + Bắt buộc nhãn cảnh báo bỏng song ngữ Anh - Pháp (English / French).
- **Thị trường Mexico (Tiêu chuẩn NOM-252-SSA1 & NOM-015)**:
  + Giới hạn hòa tan 8 kim loại nặng trong môi trường axit giả lập dịch dạ dày (Lead ≤ 90 mg/kg, Cadmium ≤ 75 mg/kg, Barium ≤ 1000 mg/kg).
  + Kiểm định phải được thực hiện tại phòng lab được công nhận bởi EMA (Entidad Mexicana de Acreditación).`,
    references: ['Canada CCPSA Regs', 'Mexico NOM-252-SSA1', 'NOM-015-SCFI Labeling'],
    actions: ['Xem tiêu chuẩn Canada CCPSA', 'Tải hướng dẫn nhãn song ngữ'],
  },
};
