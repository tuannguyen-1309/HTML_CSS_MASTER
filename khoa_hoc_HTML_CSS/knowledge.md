Để _""_ : là thuộc tính
Để `""` : là giá trị
- Cùng cấp _'./'_
- Truy xuất ra ngoài 1 cấp _'../'_
- Thuộc tính _'attribute'_
- Thẻ _'tag'_
- _'Price'_: Giá
- _'image'_ : Hình ảnh
- CSS nó sẽ chạy từ trên xuống dưới , nếu có 2 đoạn code cùng thực hiện 1 chức năng thì nó sẽ ưu tiên đoạn code ở dưới
- _'div'_ là thẻ block, có độ rộng 100% phần tử chứa nó, lưu ý: chưa nói đến vấn đề khi sử dụng CSS
- _'div'_ thường được dùng rất nhiều, khi chia layout, gom 1 khối nào đó
- _'img'_ là thẻ inline, tự đóng, dùng để hiển thị hình ảnh với 2 thuộc tính `src` và `alt`
- _'alt'_ viết tắt của `alternate text` nó dùng trong việc SEO, khi hình ảnh bị lỗi hoặc sai đường dẫn thì _'alt'_ sẽ hiển thị để người dùng biết hình ảnh đó nói về cái gì
- _'span'_ là thẻ inline nó thường được dùng cho những đoạn chữ ngắn
- _'class'_ là thuộc tính dùng để sử dụng các class cho thẻ, sau đó dùng để styles trong CSS
- Việc đặt tên class khá là nan giải, khó, không nên đặt tiếng Việt, nên đặt tiếng Anh ngắn gọn dễ hiểu
- Thẻ tiêu đề: h1,h2,h3,h4,h5,h6
- _'h1'_: Mỗi trang chỉ có tối đa 1 thẻ h1 mà thôi, thẻ này thường được dùng cho những tiêu đề lớn của trang
- _'h2'_ : Dùng được nhiều, thường được dùng cho những block to
- _'h3'_ : Dùng được nhiều, thường được dùng cho những block nhỏ
- _'h4,h5,h6'_ : Tương ứng cho những tiêu đề nhỏ hơn
- Thẻ a: Là thẻ inline , chắc chắn là dùng cho liên kết, nó có 3 thuộc tính hay dùng `href`, `target` và `rel`
- Khi dùng `target` có giá trị là _'blank'_ thì thẻ a nên thêm thuộc tính `rel= "noopener noreferrer"`
- Fonts chữ:
  - 1. Sẽ có sẵn ở Google Fonts
  - 2. Không có ở Google Fonts mà được mua, tải trên mạng về máy
- _'Fonts-weight'_: Độ đậm nhạt của chữ, 100 -> 900, normal, bold, bolder, extra bold, light, thin, regular, medium, semibold
- _'Fonts-family'_: Thiết lập font chữ, truyền vào là font name(tên của font chữ)
- `Sans-serif`: Chữ không có chân
- `Serif`: Chữ có chân

- _'CSS Selectors'_: tag, class, id, attribute
  - Tags: h1, h2, h3, div, body, span, a
  - Class: .name, .tour, .tour-header
  - Id: #header, #content
  - Attribute: Later `*`
  - Special selector: \* chọn toàn bộ Selectors
- Cấu trúc 1 đoạn code CSS
  cssSelectors,cssSelectors,cssSelectors
  {
  property: value;
  h1,.name,#header,input[type='mail']
  {
  font-family:'Inter'
  }
  }
- _'User Agent Stylesheet'_: CSS mặc định của trình duyệt, mỗi trình duyệt sẽ có CSS mặc định khác nhau
- _'CSS reset'_: Dùng để reset CSS mặc định của các trình duyệt, và 'bắt buộc' phải có đầu tiên
- _'color'_: Màu chữ
- _'background-color'_: Màu nền
- _'Mã màu'_: haxa(#ffa400), orange, rgb(0,0,0), rgba(0,0,0,0.5)
  - _Alpha_(opacity): 0 -> 1
- **'box-sizing'** :
  - _'Content-box'_: Độ rộng lúc này của 1 khối sẽ bằng width + padding(left+right) + border(left+rigth)
  - _'Border-box'_: Độ rộng lúc này của một khối sẽ bao gồm padding với border, nên áp dụng cho toàn bộ selector(\*)
- _'Width'_: Độ rộng
- _'Height'_: Chiều cao
- _'Border'_: Viền
- _'Shorthand'_: (CSS Shorthand) Viết rút gọn
- _'Padding'_: Không dùng được số âm
- _'Margin'_: Có thể dùng số âm, có giá trị `auto`
- Đơn vị: px, em, rem, vw, vh, %
- _'Text-decoration'_: Gạch dưới của thẻ a, `none`, `underline`, `overline`, `line-through`
- Border-radius: Độ bo góc của khối, càng lớn thì càng bo góc, nếu hình vuông mà có bo góc lớn thì sẽ tạo ra hình tròn, còn nếu là hình chữ nhật mà có bo góc lớn thì sẽ tạo ra hình elip
- border-top-left-radius,
  border-top-right-radius,
  border-bottom-left-radius,
  border-bottom-right-radius
- _line-height_ : Khoảng cách giữa các dòng chữ
- Khi những thẻ inline nằm cạnh nhau thì nó sẽ nằm trên một hàng, ngược lại những thẻ block thì nó sẽ tạo ra hàng mới.
- _díplay_:block, inline, inline-block, none, flex, grid
- `block` : Biến thành thẻ block;
- `inline` : Biến thành thẻ inline, nó sẽ bị hạn chế vài thuộc tính CSS liên quan tới box-sizing như là `_padding-top,padding-bottom, margin-top,margin-bottom_`
- `inline-block` : Biến thành thẻ inline-block, là sự kết hợp giữa inline và block, khi các thẻ có cùng thuộc tính inline-block nó sẽ kế thừa đặc tính của inline tức là nằm cạnh nhau thì sẽ nằm trên 1 hàng, có độ rộng bằng nội dung nó chứa, không bị hạn chế CSS 
- `none` : Ẩn luôn, không thấy không nhấn được;
- `flex` : Dùng rất nhiều hiện nay, nếu master được nó thì code layout vô tư ;
- _min-width_ : độ rộng tối thiểu, ví dụ 100px -> >= 100px
- _max-width_ : độ rộng tối đa, ví dụ 100px -> <= 100px
- _flexbox_ : Áp dụng thuộc tính display: flex vào phần tử mình muốn dàn layout
- _calc_ : hàm dùng để tính toán, + - \* /, lưu ý phải có khoảng cách giữa các phép tính 
- _component_ : Mục đích tái sử dụng và có thể sử dụng nhiều nơi
- _column-gap_: Khoảng trống chiều dọc
- _row-gap_: Khoảng trống chiều ngang
- _pug_: https://pugjs.org/api/getting-started.html
- _sass_:
- _javascript_:
- _position_: 