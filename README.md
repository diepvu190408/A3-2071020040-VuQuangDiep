# A3 Portfolio cá nhân

Mình thực hiện portfolio cá nhân này trong bài tập lớn A3 môn FIT4014. Website giới thiệu bản thân, quê hương, gia đình, học vấn, kỹ năng đang rèn luyện, dự án thực hành, sở thích và mục tiêu của mình.

## Thông tin sinh viên

- Họ tên: Vũ Quang Điệp
- Mã sinh viên: 2071020040
- Trường: Đại học Đại Nam
- Khoa: Công nghệ thông tin
- Lớp: CNTT 20-04

## Nội dung portfolio

Mình sắp xếp nội dung thành các mục:

1. Trang chủ.
2. Giới thiệu bản thân.
3. Quê hương Bảo Ái, Lào Cai và gia đình gồm năm thành viên.
4. Kỹ năng đang học và rèn luyện.
5. Lộ trình học tập.
6. Dự án thực hành portfolio cá nhân trong khuôn khổ FIT4014 A3.
7. Mini game khủng long nhảy qua xương rồng.
8. Sở thích: Minecraft, nghe nhạc, Tiên Nghịch, Lamborghini Revuelto và Cristiano Ronaldo.
9. Mục tiêu học tập.
10. Thông tin liên hệ và footer.

## Cấu trúc dự án

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
├── README.md
├── CHANGELOG.md
└── AI_LOG.md
```

## Công nghệ

- HTML5, CSS3 và JavaScript thuần.
- Không sử dụng thư viện ngoài.
- CSS tạo giao diện xanh đen – xanh neon và chế độ sáng; nội dung được giới hạn tối đa 1160px, chia hai cột trên máy tính và chuyển thành một cột ở màn hình rộng tối đa 820px.
- JavaScript thuần tạo nền trời đêm có trăng/sao ở chế độ tối và tuyết dạng sprite Canvas rơi, lắc nhẹ theo gió ở chế độ sáng; hiệu ứng nền giảm chuyển động khi bật `prefers-reduced-motion`.
- Mini game khủng long dùng Canvas, có điểm số, tốc độ tăng dần, màn Game Over, chơi lại, phím Space/mũi tên lên và nút nhảy cảm ứng.
- JavaScript còn tạo hiệu ứng xuất hiện khi cuộn, ánh sáng con trỏ, điều hướng chủ động, thanh tiến trình và nút quay về đầu trang.
- Thư viện ảnh hỗ trợ đóng, chuyển ảnh bằng nút hoặc phím mũi tên, và vuốt trên thiết bị cảm ứng.
- Có thể chuyển giao diện sáng/tối và tiếng Việt/Anh; lựa chọn được lưu trong `localStorage`.
- Menu điện thoại và các nút tương tác được tối ưu cho cảm ứng; hiệu ứng chuyển động được tắt hoặc giảm khi bật `prefers-reduced-motion`.
- Biểu mẫu chỉ xác thực dữ liệu trên trình duyệt; website chưa tích hợp dịch vụ gửi email.
- Chưa có trình phát nhạc: thư mục dự án không có tệp nhạc được cấp quyền sử dụng. Mục nghe nhạc hiện chỉ là nội dung sở thích.

## Chạy dự án

Mở `index.html` trực tiếp bằng trình duyệt để đọc nội dung. Các liên kết điều hướng ở đầu trang đưa đến từng mục tương ứng. Nút giao diện và ngôn ngữ lưu lựa chọn trong `localStorage`; biểu mẫu thông báo lỗi nhập liệu hoặc xác nhận hợp lệ nhưng không gửi email.

## Phần mình thực hiện và AI hỗ trợ

Thông tin cá nhân trong trang do mình cung cấp. Mình có sử dụng AI để hỗ trợ sắp xếp nội dung và soạn HTML, CSS cơ bản; mình cần tự rà soát nội dung và hiểu các phần code trước khi nộp bài.

## Hướng dẫn kiểm tra website

1. Mở `index.html` bằng trình duyệt trên máy tính.
2. Dùng menu điều hướng để kiểm tra các mục giới thiệu, quê hương/gia đình, kỹ năng, học tập, dự án, mini game, sở thích, mục tiêu và liên hệ.
3. Mở công cụ dành cho nhà phát triển (F12), bật chế độ thiết bị (Ctrl+Shift+M), rồi lần lượt đặt chiều rộng 320px, 375px, 390px, 768px, 1024px, 1366px và 1920px.
4. Ở mỗi kích thước, kiểm tra menu, chữ, các thẻ nội dung và liên kết GitHub; cuộn ngang để xác nhận trang không bị tràn theo chiều ngang.
5. Sau mỗi lần cập nhật, hãy kiểm tra ở bảy chiều rộng trên. Kết quả kiểm tra gần nhất được ghi trong CHANGELOG.md; mô phỏng viewport không thay thế kiểm tra trên thiết bị thật.
6. Kiểm tra giao diện sáng/tối và VI/EN sau khi tải lại trang; thử thanh tiến trình, nút về đầu trang, menu, ảnh Lightbox, mục Dự án, mini game và các trạng thái lỗi/hợp lệ của biểu mẫu.
7. Bật `prefers-reduced-motion` trong công cụ dành cho nhà phát triển: hiệu ứng nền cần đứng yên; nội dung và chức năng điều hướng vẫn dùng được.
8. Nếu có thể, mở website trên điện thoại thật để kiểm tra thao tác chạm và khả năng đọc trước khi nộp.

## Trạng thái rà soát

- Bản trong repository hiện có các mục Dự án, Quê hương và Gia đình, mini game, biểu mẫu kiểm tra phía trình duyệt, cùng hiệu ứng nền theo giao diện.
- Mô phỏng viewport trong trình duyệt ở 320, 375, 390, 768, 1024, 1366 và 1920px không phát hiện tràn ngang; nội dung chính nằm trong khung nhìn.
- Lần kiểm tra website GitHub Pages ngày 25/11/2026 cho thấy bản public chưa có một số cập nhật trong repository, gồm mục Dự án, Quê hương và Gia đình và mini game. Cần push các thay đổi sau khi rà soát để cập nhật trang public.
- Chưa có bộ test tự động trong repository; mô phỏng trình duyệt không thay thế việc thử trên thiết bị thật.

## Tạo commit và push

Sau khi xem lại các thay đổi, có thể stage những tệp muốn đưa vào commit:

```bash
git status
git add index.html css/style.css js/script.js README.md CHANGELOG.md AI_LOG.md
git diff --cached
git commit -m "Upgrade portfolio interactions"
git push
```

Trước khi commit, mình cần xem `git status` và `git diff --cached` để xác nhận chính xác nội dung được đưa vào commit.
