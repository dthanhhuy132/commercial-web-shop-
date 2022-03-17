const mockData = [
  {
    name: "Iphone 13",
    image:
      "https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/11/4/637716428589973121_3.jpg",
    category: "phone",
    price: 22490000,
    desription:
      "iPhone 13 sở hữu hệ thống camera kép xuất sắc nhất từ trước đến nay, bộ vi xử lý Apple A15 nhanh nhất thế giới smartphone cùng thời lượng pin cực khủng, sẵn sàng đồng hành cùng bạn suốt cả ngày.",
  },
  {
    name: "Xiaomi Redmi Note 11S",
    image:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/691801108.jpeg",
    category: "phone",
    price: 22490000,
    desription:
      "Xiaomi đã trình làng Redmi Note 11S và chiếc điện thoại này mang nhiều cải tiến về mọi mặt so với người tiền nhiệm. Camera chính chuyên nghiệp, sạc nhanh siêu tốc, màn hình mượt mà cùng hiệu năng ấn tượng sẽ tạo nên một sự toàn diện đáng kinh ngạc, tất cả sẽ có trong chiếc smartphone tầm trung này.",
  },
  {
    name: "Samsung Galaxy Z Fold 3",
    image:
      "http://img.websosanh.vn/v2/users/root_product/images/dien-thoai-samsung-galaxy-z/h00bhuny9aklt.jpg",
    category: "phone",
    price: 41990000,
    desription:
      "Khi bạn mở ra màn hình gập lớn tới 7,6 inch trên Samsung Galaxy Z Fold3 5G là lúc bạn đã mở ra một tương lai hoàn toàn mới cho thế giới smartphone, nơi công nghệ vượt qua mọi giới hạn, cho trải nghiệm hoàn hảo nhất ở một thiết bị di động nhỏ gọn.",
  },

  {
    name: "Samsung Galaxy A52s 5G",
    image:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1296523079.jpeg",
    category: "phone",
    price: 9490000,
    desription:
      "Trải nghiệm kỷ nguyên 5G hoàn toàn mới, nơi là người làm chủ tốc độ và dẫn đầu cuộc chơi, Samsung Galaxy A52s 5G với kết nối 5G siêu tốc, sức mạnh hiệu năng tuyệt đỉnh cùng bộ tứ camera chống rung quang học OIS vượt trội sẽ đưa bạn đến từ bất ngờ này đến bất ngờ khác.",
  },

  {
    name: "Vivo Y21s",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/249429/vivo-y21s-blue-600x600.jpg",
    category: "phone",
    price: 5090000,
    desription:
      "Thiết kế mỏng thời thượng, 3 camera sau siêu nét độ phân giải lên tới 50MP, mạnh mẽ với công nghệ RAM mở rộng cùng dung lượng pin cực khủng, vivo Y21s sẵn sàng cùng bạn cháy hết mình trong mọi cuộc vui.",
  },

  {
    name: "Laptop HP Envy 13",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/201805/hp-envy-13-ah1010tu8-2-201805-600x600.jpg",
    category: "laptop",
    price: 21359000,
    desription:
      "Bạn cần một chiếc laptop siêu di động, cao cấp nhưng cũng đầy mạnh mẽ, HP Envy 13 ba1536TU chắc chắn sẽ không làm bạn phải thất vọng với độ tỉ mỉ trong thiết kế cùng hiệu suất hàng đầu từ bộ vi xử lý thế hệ thứ 11 Tiger Lake.",
  },
  {
    name: "Laptop Asus Zenbook UX325EA-KG656W",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/267786/asus-zenbook-ux325ea-i5-1135g7-8gb-512gb-600x600.jpg",
    category: "laptop",
    price: 22299000,
    desription:
      "Bạn cần một chiếc laptop siêu di động, cao cấp nhưng cũng đầy mạnh mẽ, Laptop Asus Zenbook UX325EA-KG656W chắc chắn sẽ không làm bạn phải thất vọng với độ tỉ mỉ trong thiết kế cùng hiệu suất hàng đầu từ bộ vi xử lý thế hệ thứ 11 Tiger Lake.",
  },
  {
    name: "Laptop Lenovo Gaming Legion 5",
    image: "https://laptopaz.vn/media/product/1669_legion_5_bo_vien.jpg",
    category: "laptop",
    price: 28924000,
    desription:
      "Lenovo Gaming Legion 5 cho thấy sự kết hợp giữa sức mạnh ấn tượng của chip AMD Ryzen 7-5800H nằm trong bộ khung vỏ mỏng gọn, sắc sảo đầy tính thời trang. Trên sản phẩm này, bạn sẽ tìm thấy màn hình IPS 165Hz siêu mượt, card đồ họa NVIDIA RTX 3050Ti hứa hẹn những phút giây trải nghiệm game cực kỳ xuất sắc.",
  },

  {
    name: "Tai nghe bluetooth nhét tai i.value Y933",
    image:
      "https://hangthanhlygiare.com/Upload/product/636892768235274931hasptaingheivaluen15296335-8991.jpg",
    category: "headphone",
    price: 350000,
    desription:
      "Tai nghe bluetooth nhét tai i.value Y 933 được đánh giá rất cao về chất lượng và là một sản phẩm lý tưởng dành cho những người có nhu cầu đàm thoại trong lúc làm việc. Dung lượng pin lớn và chất lượng âm thanh tốt là những điểm nhấn sáng giá ở i.value Y933.",
  },
  {
    name: "Tai nghe Bluetooth JBL T115TWSREDAS",
    image:
      "https://img.websosanh.vn/v2/users/root_product/images/tai-nghe-khong-day-jbl-tune/jwd87p7gbr0w1.jpg?compress=85",
    category: "headphone",
    price: 1490000,
    desription:
      "Được thiết kế với kích cỡ nhỏ nhắn, đem lại cảm giác trên tai thoải mái và thể hiện chất âm trầm tinh tế, JBL T115TWS là một lựa chọn hết sức sáng giá trên thị trường tai nghe True-Wireless hiện nay. Điểm cộng của sản phẩm nằm ở thời lượng pin tổng cộng 21 tiếng khi kết hợp cùng hộp sạc đi kèm.",
  },
  {
    name: "Tai nghe Beats Fit Pro True Wireless Earbuds",
    image: "https://hitechworld.vn/media/product/1308_mk2h3_av3.jpeg",
    category: "headphone",
    price: 4490000,
    desription:
      "Là thế hệ tai nghe True Wireless mới của thương hiệu lừng danh Beats, phiên bản tai nghe Fit Pro True Wireless Earbuds cho thấy sự hòa trộn hiệu quả giữa yếu tố thời trang, phong cách và trải nghiệm chất âm chuẩn phòng thu. Sản phẩm được tích hợp chip H1, công nghệ khử ồn chủ động ANC và ghi nhận thời lượng pin tối đa là một ngày khi kết hợp với hộp sạc.",
  },
];

export default mockData;
