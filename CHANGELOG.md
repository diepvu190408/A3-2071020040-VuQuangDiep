# Nhật ký thay đổi

## Xác nhận đồng bộ GitHub Pages · 25/11/2026

- Mình mở website công khai và xác nhận đã có các mục Dự án, Quê hương và Gia đình, cùng game khủng long.
- GitHub Actions báo triển khai Pages thành công từ commit `2fd3e06255c5f93bbb7a79189d70507ecd603777` trên nhánh `main`.
- Mình cập nhật README để trạng thái báo cáo phản ánh đúng phiên bản đang được triển khai;

## Rà soát responsive và tương tác · 25/11/2026

- Mình kiểm tra lại website ở 320, 375, 390, 768, 1024, 1366 và 1920px; không phát hiện tràn ngang hoặc hình ảnh bị thiếu.
- Mình kiểm tra menu điện thoại, đổi VI/EN, đổi giao diện sáng/tối, xác thực biểu mẫu và mini game; các tương tác hoạt động đúng trong trình duyệt mô phỏng.
- Mình bổ sung tối ưu vùng an toàn cho tai thác di động, cỡ chữ 16px cho ô nhập liệu để tránh tự động phóng trên iOS và ngăn cuộn chạm khi dùng Canvas game.
- Mình thêm cơ chế đóng Lightbox dự phòng cho trình duyệt không hỗ trợ `dialog.close()`; phím Escape vẫn có thể đóng cửa sổ ảnh.

## Rà soát trước bàn giao · 25/11/2026

- Mình phát hiện các tương tác giao diện được khởi tạo trong khung hình Canvas đầu tiên; đã cho khung hình đầu tiên chạy đồng bộ để menu và điều khiển không phải chờ tab được vẽ tiếp.
- Mình kiểm tra mô phỏng bản local ở 320, 375, 390, 768, 1024, 1366 và 1920px: không có tràn ngang, nội dung chính nằm trong khung nhìn.
- Mình kiểm tra nhanh menu mở/đóng, đổi VI/EN, đổi giao diện sáng/tối, biểu mẫu với email sai/hợp lệ và trạng thái bắt đầu game; không thấy lỗi JavaScript trong lần kiểm tra này.
- Website GitHub Pages hiện còn là bản cũ, thiếu một số phần đã có trong repository. Chưa push thay đổi và chưa thử trên thiết bị thật.
- Mình thêm dải màu cầu vồng chuyển động nhẹ cho tiêu đề trang chủ; hiệu ứng tĩnh khi thiết bị bật giảm chuyển động.

## Thêm mục Quê hương và gia đình

- Mình thêm mục giới thiệu Bảo Ái, Lào Cai và gia đình có năm thành viên: bố, mẹ, chị gái, mình và em gái.
- Nội dung nói ngắn gọn về nơi mình sinh ra, lớn lên và ý nghĩa của gia đình; không thêm tên, nghề nghiệp hay thông tin riêng tư khác.
- Mình thêm liên kết điều hướng và bản dịch tiếng Anh; bố cục chuyển thành một cột trên điện thoại.
- Theo yêu cầu tiếp theo, mình đã bỏ hình minh họa gia đình và biểu tượng ghim ở thẻ quê hương; nội dung và danh sách năm thành viên vẫn được giữ nguyên.
- Mình mô phỏng trình duyệt ở 320, 375, 390, 768, 1024 và 1366px: không tràn ngang; hai thẻ xếp dọc trên điện thoại và cạnh nhau trên màn hình lớn.
- Mình kiểm tra menu ở 320px, liên kết tới mục mới, đủ năm nhãn thành viên và bản dịch VI/EN; không có lỗi JavaScript hoặc yêu cầu tài nguyên thất bại.
- Chưa thử trên thiết bị thật.

## Tinh chỉnh hiệu ứng tuyết

- Mình làm các bông tuyết thành sprite Canvas sáu nhánh, thay đổi kích thước/tốc độ và lắc nhẹ theo gió khi rơi liên tục từ trên xuống.
- Mình tăng mật độ vừa phải (24 hạt trên điện thoại, 40 trên màn hình lớn) và giảm độ đặc của một số nền sáng để tuyết vẫn thấy được phía sau nội dung.
- Canvas vẫn phủ toàn màn hình nhưng không nhận thao tác chuột/chạm; hiệu ứng tiếp tục chuyển mờ giữa tuyết và bầu trời đêm, đồng thời đứng yên khi bật giảm chuyển động.
- Mình xác nhận bằng trình duyệt rằng vị trí tuyết thay đổi theo thời gian và hiệu ứng chuyển đổi đổi dần giữa hai theme; chưa thử trên thiết bị thật.

## Thêm mini game và hiệu ứng nền theo giao diện

- Mình thêm mini game khủng long vẽ bằng Canvas, có điểm, tốc độ tăng theo thời gian, va chạm, Game Over và nút chơi lại.
- Người chơi có thể bắt đầu/nhảy bằng Space, phím mũi tên lên hoặc nút cảm ứng; nhãn, trạng thái và hướng dẫn hỗ trợ VI/EN.
- Mình thay nền hạt cũ bằng bầu trời đêm có trăng/sao ở giao diện tối và tuyết rơi ở giao diện sáng; hai hiệu ứng chuyển đổi mờ dần và giữ lựa chọn giao diện đã lưu.
- Khi bật giảm chuyển động, hiệu ứng nền giữ hình tĩnh; số lượng hạt được giới hạn thấp hơn trên màn hình nhỏ.
- Mình kiểm tra mô phỏng trình duyệt ở 320, 375, 390, 768, 1024 và 1366px; không phát hiện tràn ngang. Đã kiểm tra bàn phím, nút nhảy, điểm, Game Over, chơi lại, chuyển giao diện, lưu lựa chọn và giảm chuyển động.
- Chưa kiểm tra trên điện thoại vật lý.

## Bổ sung mục Dự án và rà soát responsive

- Mình thêm mục Dự án với portfolio cá nhân được ghi rõ là bài tập thực hành FIT4014 A3 và ảnh minh họa riêng; không đưa ra tuyên bố thành tích hoặc dự án thương mại.
- Mình thêm liên kết mục Dự án vào điều hướng và bổ sung nội dung tiếng Anh tương ứng.
- Mình giữ biểu mẫu chỉ xác thực phía trình duyệt, điều chỉnh nhãn nút và làm rõ rằng thông tin hợp lệ không đồng nghĩa email đã được gửi.
- Mình tăng chiều cao tối thiểu của các nút điều khiển đầu trang lên 44px để thao tác cảm ứng thuận tiện hơn.
- Mình mô phỏng viewport 320, 375, 390, 768, 1024 và 1366px trên trình duyệt: không có tràn ngang; mục Dự án, biểu mẫu và footer đều nằm trong khung nhìn, ảnh minh họa tải đúng tỷ lệ.
- Mình kiểm tra menu mở/đóng ở điện thoại, xác thực biểu mẫu khi bỏ trống/nhập email sai/nhập hợp lệ, chuyển VI/EN và mở/đóng lightbox; không có lỗi JavaScript hoặc yêu cầu tài nguyên lỗi trong lần kiểm tra cuối.
- Đây là kiểm tra mô phỏng trong trình duyệt, chưa kiểm tra trên thiết bị thật.

## Điều chỉnh giao diện

- Mình bỏ mục Dự án học tập khỏi trang và menu điều hướng.
- Mình bỏ quả cầu công nghệ khỏi phần giới thiệu đầu trang.
- Mình dọn các kiểu CSS và mã JavaScript chỉ phục vụ hai phần đã bỏ.

## Nâng cấp tính năng tương tác

- Mình bổ sung chuyển đổi tiếng Việt/Anh, lightbox ảnh, điều hướng theo phần đang xem, nút về đầu trang, nền hạt, scroll reveal, quả cầu công nghệ và ánh sáng con trỏ.
- Mình cập nhật phần dự án và biểu mẫu liên hệ; biểu mẫu chỉ xác nhận dữ liệu hợp lệ, không giả vờ gửi email.
- Mình sửa việc khởi tạo các tương tác bên trong vòng lặp vẽ hạt để tránh đăng ký lặp listener; các điều khiển vẫn hoạt động khi bật giảm chuyển động.
- Mình kiểm tra bằng trình duyệt ở các chiều rộng 320, 390, 768, 1024, 1366 và 1920px; không phát hiện tràn ngang hoặc lỗi JavaScript.
- Mình chưa thêm trình phát nhạc vì dự án chưa có tệp nhạc được cấp quyền sử dụng.

## Ngày 4

- Mình tăng chiều rộng nội dung tối đa lên 1160px để tận dụng màn hình máy tính lớn nhưng vẫn giữ nội dung ở giữa trang.
- Mình giữ bố cục hai cột trên máy tính và chuyển sang một cột khi màn hình rộng tối đa 820px, phù hợp với tablet 768px và điện thoại.
- Mình làm các liên kết menu cao tối thiểu 44px để dễ thao tác bằng cảm ứng; trên màn hình nhỏ mình điều chỉnh khoảng cách, phần đệm và cỡ tiêu đề.
- Mình giới hạn chuyển động hover ở thiết bị có chuột và không bật chuyển động khi người dùng ưu tiên giảm hiệu ứng.
- Mình kiểm tra bằng mô phỏng trình duyệt ở 1920px, 1366px, 1024px, 768px, 390px và 320px. Cả sáu kích thước không bị tràn ngang; các mục nội dung nằm trong khung và liên kết menu có vùng bấm tối thiểu 44px.
- Mình không thay đổi nội dung HTML, hình ảnh, JavaScript hoặc bảng màu. Việc kiểm tra hiện tại là mô phỏng kích thước trong trình duyệt, chưa phải thử trên thiết bị thật.

## Ngày 3

- Mình viết lại phần giới thiệu theo ngôi thứ nhất, nêu việc học Công nghệ thông tin tại Đại học Đại Nam và sở thích tìm hiểu máy tính, công nghệ, kiến thức mới.
- Mình chia kỹ năng thành ba nhóm và mô tả ở mức đang học hoặc đang rèn luyện.
- Mình cập nhật mục học vấn với trường, ngành, lớp và trạng thái đang học; bỏ thông tin THPT khỏi website.
- Mình giới thiệu portfolio cá nhân là sản phẩm đã thực hiện, kèm mô tả và công nghệ HTML5, CSS3; không thêm dự án hoặc đường dẫn demo khác.
- Mình chia mục tiêu thành ngắn hạn và dài hạn, đồng thời giữ thông tin liên hệ GitHub đã có.
- Mình chỉ chỉnh nội dung HTML và tài liệu dự án; không thay đổi CSS, hình ảnh hoặc JavaScript.

## Ngày 2

- Mình thiết kế lại giao diện bằng CSS với nền xanh đen, chữ sáng và màu xanh neon làm điểm nhấn.
- Mình sắp xếp các mục thành thẻ hai cột trên màn hình rộng, có khoảng cách, đường viền và hiệu ứng hover nhẹ; bố cục tự chuyển thành một cột khi màn hình hẹp.
- Mình tạo điểm nhấn cho phần giới thiệu đầu trang, nút xem thông tin và menu điều hướng; không thêm thư viện hay chức năng JavaScript.
- Mình bổ sung thông tin học tập và liên kết GitHub vào website theo thông tin đã cung cấp.
- Mình giữ nguyên các phần kỹ năng, dự án và thông tin khác đang chờ nội dung cụ thể.

## Ngày 1

- Mình tạo cấu trúc HTML, CSS, JavaScript và thư mục ảnh cho portfolio.
- Mình viết nội dung cho trang chủ, giới thiệu, kỹ năng, học tập, dự án, sở thích, mục tiêu, liên hệ và footer.
- Mình thêm CSS cơ bản để nội dung dễ đọc; chưa làm thiết kế giao diện hoặc JavaScript.
- Mình để các nội dung cần thông tin cá nhân cụ thể để bổ sung sau, không tự tạo dữ liệu.
- Mình có sử dụng AI hỗ trợ sắp xếp nội dung và soạn HTML, CSS cơ bản.
