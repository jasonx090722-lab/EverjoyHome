# EverJoy Home - Virtual Workspace & Second Brain System

Hệ thống Văn phòng Ảo (Virtual Workspace) tích hợp Product Wiki / Second Brain và Nền tảng Đào tạo Chéo thông minh dành cho doanh nghiệp E-Commerce EverJoy Home, tối ưu hóa quy trình R&D -> Design -> Sourcing -> Marketing và lưu trữ tri thức kiểm thử 1.181 SKUs.

## User Review & Critical Decisions

> [!IMPORTANT]
> Dựa trên phản hồi trong giai đoạn khảo sát yêu cầu (Phase 1), các quyết định then chốt đã được thống nhất:

- **Confirmed Decision 1 (Sơ đồ Văn phòng Ảo)**: Thiết kế sơ đồ 2.5D Isometric trực quan hóa 4 phân khu chức năng (Thư viện Tri thức, Trợ lý AI & Quy trình, Phòng Đào tạo Chéo KSAO, Phòng họp R&D & SLA Tracker) với thẻ tương tác mở nhanh giao diện tương ứng.
- **Confirmed Decision 2 (Trợ lý AI & Micro-Learning)**: Trang bị AI Chatbot tra cứu thông minh phản hồi tức thì với dữ liệu chuẩn EverJoy Home, đi kèm Trình phát Video/Audio mô phỏng bài giảng Onboarding 60 giây có avatar thuyết minh và thanh điều khiển tương tác.
- **Confirmed Decision 3 (Kiến trúc Phát triển)**: Đảm bảo tính linh hoạt tối đa — xây dựng toàn bộ mã nguồn tự đóng gói (self-contained single-file) với Tailwind CSS, icon FontAwesome và JavaScript/React trực quan, có thể chạy độc lập trực tiếp từ file hoặc trong môi trường máy chủ AI Studio.

---

## 1. Overview & Core Concept

- **Mục tiêu**: Xây dựng không gian làm việc số tập trung giúp đội ngũ EverJoy Home (đặc biệt là nhân sự mới và các bộ phận R&D, Design, Sourcing, Marketing) tra cứu quy chuẩn pháp lý quốc tế (FDA, BPA-Free, Lead-Free cho US/Canada/Mexico), tiếp cận bài học kinh nghiệm từ 1.181 SKUs, kiểm soát cam kết SLA rút ngắn từ 146 ngày xuống dưới 90 ngày, và nâng cao năng lực thông qua ma trận KSAO.
- **Đối tượng sử dụng**: Chuyên viên R&D sản phẩm, Kỹ sư vật liệu/chất lượng (QA/QC), Chuyên viên tìm nguồn cung ứng (Sourcing), Designer bao bì và Marketer thị trường Bắc Mỹ.
- **Giá trị cốt lõi**:
  - Loại bỏ tình trạng phân mảnh thông tin, chống lặp lại lỗi kiểm thử trong quá khứ.
  - Minh bạch hóa quy trình chuyển giao liên phòng ban với bộ đếm SLA trực quan.
  - Tự động hóa đào tạo hội nhập bằng trợ lý AI và bài giảng vi mô (Micro-learning).

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Bắc cầu Đăng nhập (Seamless Pass-Through Login)**:
   - Giao diện đăng nhập doanh nghiệp cao cấp với thương hiệu EverJoy Home ("Virtual Workspace & Second Brain System").
   - Người dùng nhập bất kỳ email/mã nhân viên hoặc bấm trực tiếp "Đăng Nhập" -> chuyển cảnh mượt mà vào Dashboard văn phòng ảo mà không báo lỗi.
2. **Khám phá Văn phòng Ảo (Virtual Office Map & Navigation)**:
   - Header hiển thị nhận diện EverJoy Home, profile nhân viên ("Nguyễn Văn A - R&D Specialist"), trạng thái hoạt động và nút chuyển tài khoản/Đăng xuất.
   - Bản đồ 4 khu vực tương tác dạng 2.5D Isometric với hiệu ứng hover, hiển thị trạng thái phòng, số lượng tài liệu/nhiệm vụ và nút truy cập nhanh.
3. **Tra cứu Product Wiki & Second Brain**:
   - Thanh tìm kiếm thông minh hỗ trợ tìm theo từ khóa và bộ lọc nhanh:
     - *Tiêu chuẩn Pháp lý & An toàn*: FDA Food Contact, CPSIA Lead-Free, California Prop 65, BPA-Free cho Drinkware và Baby Products.
     - *SOPs & SLA Liên phòng ban*: Chu trình R&D -> Design -> Sourcing -> Marketing (cam kết rút ngắn 146 ngày -> dưới 90 ngày).
     - *Nhật ký Bài học Kinh nghiệm (1.181 SKUs)*: Thư viện tra cứu sự cố kiểm thử rò rỉ nắp, va đập chân không, thôi nhiễm nhiệt, in ấn màng tráng.
   - Xem chi tiết từng tài liệu trong khung đọc phân tích chuyên sâu (Full-detail Drawer / Reader Modal).
4. **Tương tác AI Agent & Micro-Learning Video**:
   - Chatbot giả lập "EverJoy Second Brain AI Agent" với 4 câu hỏi gợi ý một chạm.
   - Phản hồi tức thì với cấu trúc chuẩn, trích dẫn quy định nội bộ và giải pháp xử lý.
   - Trình phát bài giảng Onboarding 60 giây: Minh họa nhân vật giảng viên số, nút Play/Pause, tua tiến trình, phụ đề đồng bộ và đánh dấu hoàn thành.
5. **Theo dõi Ma trận KSAO & Đào tạo Chéo**:
   - Bảng phân tích 4 trụ cột KSAO (Kiến thức, Kỹ năng, Khả năng, Thái độ) cho 3 nhóm vai trò: R&D, Sourcing, Marketing.
   - Tiến độ đào tạo chéo tổng thể và từng kỹ năng.
   - Nút "Xác nhận Đã hoàn thành Khóa học" tương tác cập nhật phần trăm thực tế và hiển thị thông báo chúc mừng.

### Visual Identity & Theme
- **Màu sắc chủ đạo**: Deep Slate (`#0F172A`) & Neutral Canvas kết hợp điểm nhấn Xanh ngọc / Cyan (`#0D9488` Teal 600, `#14B8A6` Teal 500, `#06B6D4` Cyan 500) tạo cảm giác công nghệ cao, hiện đại nhưng chỉn chu và đáng tin cậy.
- **Phong cách giao diện**: UI phẳng hiện đại, tuân thủ nguyên tắc Zero-Pill (dùng văn bản ngăn cách tự nhiên `·` thay vì đóng khung cồng kềnh), phân cấp thị giác rõ ràng với độ tương phản WCAG AA.
- **Typography**: Phông chữ sans-serif hình học hiện đại, kết hợp chữ số bảng biểu (`tabular-nums`) cho các chỉ số đo lường SLA và mã SKU.

---

## 3. Key Product Decisions & Trade-Offs

- **Quyết định 1: Cơ chế Đăng nhập Bắc cầu (Bridge/Pass-Through Login)**:
  - *Lựa chọn*: Cho phép người dùng nhập bất kỳ thông tin nào hoặc để trống, nhấn Đăng nhập là vào ngay không gian làm việc.
  - *Lý do*: Đáp ứng tuyệt đối yêu cầu trải nghiệm demo và kiểm thử nhanh của khách hàng nội bộ mà không cần thiết lập tài khoản phức tạp.
- **Quyết định 2: Tích hợp Tri thức 1.181 SKUs & Dữ liệu Kiểm thử Thực tế**:
  - *Lựa chọn*: Tích hợp sẵn cơ sở dữ liệu mẫu phong phú về lỗi kiểm định (thử rò rỉ nhiệt, áp suất nắp bình giữ nhiệt, độ thôi nhiễm hạt vi nhựa, kiểm tra va đập nôi trẻ em) kèm mã SKU cụ thể.
  - *Lý do*: Đảm bảo tính chân thực, thực tế và giá trị ứng dụng tức thì cho nhân sự EverJoy Home.
- **Quyết định 3: Kiến trúc Single-File kết hợp Vite Tooling**:
  - *Lựa chọn*: Viết một bản `index.html` hoàn chỉnh chạy độc lập đầy đủ mọi tính năng với Tailwind CDN và FontAwesome, đồng thời cập nhật `src/App.tsx` để trải nghiệm trên máy chủ AI Studio mượt mà, không gặp lỗi tải.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│               EVERJOY HOME VIRTUAL WORKSPACE ARCHITECTURE              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [ Màn hình Đăng nhập Bắc cầu (Pass-Through Fake Auth) ]              │
│                           │                                            │
│                           ▼ (Chuyển đổi trạng thái mượt mà)            │
│   [ Top Bar: EverJoy Branding ── Profile Nhân viên ── Nút Đăng xuất ]  │
│                           │                                            │
│       ┌───────────────────┴──────────────────────────────┐             │
│       ▼                                                  ▼             │
│   [ Sơ đồ Văn phòng Ảo 2.5D Isometric ]          [ Thanh Điều hướng ]  │
│   ┌───────────────────────────────┐              ├ Khu 1: Wiki/Brain   │
│   │ Zone 1: Second Brain & Wiki   │              ├ Khu 2: AI & SOP     │
│   │ Zone 2: AI Training & SOP Bot │              ├ Khu 3: Matrix KSAO  │
│   │ Zone 3: Phòng Đào tạo KSAO    │              └ Khu 4: SLA R&D      │
│   │ Zone 4: Phòng họp R&D & SLA   │                                    │
│   └───────────────────────────────┘                                    │
│                           │                                            │
│       ┌───────────────────┼──────────────────────────────┐             │
│       ▼                   ▼                              ▼             │
│ [ Thư viện Wiki ]   [ Trợ lý AI & Video ]      [ Ma trận KSAO & SLA ]  │
│ - FDA/BPA-Free/Lead - Chat bot 1s phản hồi     - KSAO cho R&D/Source/Mkt│
│ - SOP 146d -> 90d   - Micro-lecture 60s Player - SLA Tracker 4 chặng   │
│ - 1.181 SKUs Logs   - Gợi ý câu hỏi chuẩn       - Nút tăng % hoàn thành │
│ - Bộ lọc & Tìm kiếm - Thanh tiến trình bài học - Huy hiệu chứng nhận   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Module & Data Models

1. **Authentication State**: Quản lý phiên đăng nhập (`isLoggedIn`, `currentUser`: tên, chức vụ, bộ phận, avatar).
2. **Knowledge Base Repository**:
   - `sopList`: Danh mục quy trình chuẩn SOP kèm SLA cam kết thời gian hoàn thành từng giai đoạn (R&D -> Design -> Sourcing -> Marketing).
   - `complianceRules`: Tiêu chuẩn an toàn FDA, BPA-Free, Lead-Free, CPSIA, Prop 65 cho thị trường US/CA/MX.
   - `skuTestingLogs`: Danh sách mẫu dữ liệu kiểm thử thực tế từ 1.181 SKUs (mã SKU, tên sản phẩm, lỗi phát hiện, nguyên nhân gốc rễ, biện pháp khắc phục).
3. **AI Knowledge Engine**: Bộ xử lý từ khóa và câu hỏi mẫu mô phỏng AI Agent, đưa ra giải pháp xử lý kỹ thuật chuẩn xác ngay lập tức.
4. **KSAO Matrix Store**: Danh sách kỹ năng theo 4 nhóm (Knowledge, Skills, Abilities, Other characteristics), trạng thái hoàn thành và hàm cập nhật điểm số tương tác.
5. **Micro-Learning Media Simulator**: Bộ điều khiển thời gian 60 giây, trạng thái phát/tạm dừng, thanh chạy tiến độ bài giảng và phụ đề.

---

## 5. Implementation Steps

1. **Cấu hình siêu dữ liệu (metadata.json & HTML headers)**: Đặt tên ứng dụng `EverJoy Home - Virtual Workspace & Second Brain`, cập nhật mô tả và icon.
2. **Xây dựng Màn hình Đăng nhập Bắc cầu (Fake Login Screen)**: Thiết kế giao diện đăng nhập hiện đại với thương hiệu EverJoy Home, hỗ trợ đăng nhập 1 chạm.
3. **Xây dựng Bảng điều khiển Văn phòng Ảo (Virtual Office Dashboard)**: Header chuyên nghiệp và bản đồ 2.5D Isometric 4 phân khu chức năng.
4. **Phát triển Module Second Brain & Product Wiki**: Thanh tìm kiếm, phân loại danh mục, dữ liệu chi tiết tiêu chuẩn FDA, SLA SOP 146->90 ngày và bài học kinh nghiệm 1.181 SKUs.
5. **Phát triển Module Trợ lý AI Tra cứu & Trình mô phỏng Video 60 giây**: Chatbot với phản hồi thông minh, câu hỏi gợi ý nhanh và video player bài giảng vi mô.
6. **Phát triển Module Ma trận Đào tạo Chéo KSAO & SLA Tracker**: Ma trận năng lực liên phòng ban, thanh tiến trình tương tác và biểu đồ rút ngắn thời gian R&D.
7. **Kiểm tra biên dịch và tối ưu hóa trải nghiệm (Compile & Lint verification)**: Đảm bảo giao diện phản hồi mượt mà, không có lỗi console hay dead links.
