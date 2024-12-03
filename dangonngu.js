document.addEventListener("DOMContentLoaded", function () {
  // Get the language selector dropdown
  const languageSelector = document.getElementById("languageSelector");

  // Get all elements with the data-lang attribute
  const langElements = document.querySelectorAll("[data-lang]");

  // Translations object to store text in both languages (English and Vietnamese)
  const translations = {
    en: {
      itemlist: "Product Categories",
      register: "Register",
      login: "Login",
      introvpct: "STATIONERY IN CAN THO",
      introp:
        "Can Tho is not only the most modern and developed city in the Mekong Delta but also one of the country's major economic, cultural, educational, and commercial centers. Therefore, the demand for office supplies for companies, schools, households, and personal use has significantly increased. Finding a wholesale supplier or distributor of office supplies in Can Tho to stock up for opening an agency or office supply store, or to purchase large quantities at discounted and affordable prices, has become essential.",
      items: "COMMON OFFICE SUPPLIES AT WHOLESALE PRICES IN CAN THO",
      pitem:
        "Most essential office supplies can be easily purchased in Can Tho at wholesale prices with significant discounts from specialized office supply distributors. This approach is one of the most cost-effective ways to procure products, widely adopted by retailers and office supply agencies in the area. Common items include various types of paper such as A4 printing and photocopy paper, continuous form paper, sticky notes, colored paper, carbon paper, and decal paper. File storage solutions like document sleeves, clipboards, transparent covers, ring binders, plastic dividers, and multi-tier acrylic racks are also popular. Notebooks, school notebooks, envelopes, and name card books cater to organizational needs. Writing tools range from ballpoint pens, gel pens, and markers to correction pens, erasers, pencils, and marker ink. Adhesive supplies like tapes and glue sticks, cutting tools such as scissors and cutters, and measurement tools like rulers are indispensable. Additionally, staplers, hole punches, binder clips, and other fasteners are frequently used. Office equipment like Casio calculators, fax film, and batteries round out the comprehensive list of available items.",
      heading:
        "THINGS TO CONSIDER WHEN LOOKING FOR WHOLESALE STATIONERY SUPPLIERS",
      paragraph:
        "There are many ways to purchase office supplies in Can Tho, but the best option is to buy from reputable, long-established wholesale office supply providers with high-quality products. These suppliers often offer special policies for branches and agents, providing significant discounts for bulk purchases. They ensure transparency in product pricing and provide clear contracts. Delivery options are diverse, including free doorstep delivery while maintaining product quality standards. The products come in a wide range of brands, designs, and colors to meet various preferences.",
      aboutus: "ABOUT OUR COMPANY",
      company:
        "Green Office Company is one of the pioneers in providing modern, cost-effective, and environmentally friendly office solutions in Vietnam...",
      vision: "Vision and Mission",
      mission:
        "Vision: Become the leading supplier of office supplies in Vietnam,, a leader in innovation and sustainable development.",
      product: "Products and Services",
      services:
        "Green Office provides a wide range of office supplies such as recycled paper, eco-friendly materials, energy-saving devices...",
      corevalues: "Core Values",
      corevalue1:
        "Sustainability: Always focus on minimizing waste and promoting recycling.",
      corevalue2:
        "Innovation: Applying new technologies to create modern and smart office solutions.",
      corevalue3:
        "Quality: Ensuring that all products and services meet the highest standards.",
      corevalue4:
        "Customer-Centric: Always putting customer needs at the heart of every decision and action.",
      brand: "Our Brand Partners",
      specializing:
        "Specializing in providing high-quality stationery at reasonable prices.",
      lk: "Useful links",
      our: "About us",
      item: "Item",
      lock: "Privacy policy",
      contact: "Contact",
      in4contact: "Contact information",
      "connect-with-us": "Connect with us",
      copyright: "2024 Green Office. All rights reserved.",
    },
    vi: {
      itemlist: "Danh Mục Sản Phẩm",
      register: "Đăng Ký",
      login: "Đăng Nhập",
      introvpct: "VĂN PHÒNG PHẨM TẠI CẦN THƠ",
      introp:
        "Cần Thơ không chỉ là thành phố hiện đại và phát triển bậc nhất tại Đồng bằng sông Cửu Long mà còn là một trong những trung tâm kinh tế,văn hoá, giáo dục, thương mại của cả nước. Chính vì vậy mà cầu sử dụng các đồ dùng văn phòng phẩm cho văn phòng công ty, trường học, gia đình, học tập cũng tăng cao nên việc tìm nguồn/nhà phân phối sỉ văn phòng phẩm Cần Thơ để nhập hàng mở đại lý/cửa hàng kinh doanh văn phòng phẩm (VPP), mua số lượng lớn có chiết khấu tốt giá rẻ về sử dụng.",
      items: "CÁC MẶT HÀNG VĂN PHÒNG PHẨM THÔNG DỤNG GIÁ SỈ TẠI CẦN THƠ",
      pitem:
        "Hầu hết các mặt hàng văn phòng phẩm cần thiết đều có thể tìm mua tại Cần Thơ với giá sỉ ưu đãi cao từ các công ty chuyên phân phối VPP. Đây cũng là một trong những các đặt mua sản phẩm tốt nhất, giúp tiết kiệm kinh phí được các nhà bán lẻ, các đại lý văn phòng phẩm tại Cần Thơ áp dụng nhiều nhất.Dưới đây là các sản phẩm VPP thông dụng hiện nay:<br>Giấy các loại : Giấy in – photo A4, Giấy in liên tục, Giấy note - phân trang, Giấy bìa màu – Giấy than – Giấy decal.File đựng hồ sơ : Bìa lá  - Bìa trình ký – Bìa kiếng, Bìa còng – bìa hộp – bìa 3 dây, Bìa nhựa – Bìa phân trang – Bìa lỗ, kệ rổ - kệ tầng mica – Hộp cắm viết.Sổ - Tập : Sổ các loại, Tập vở - Bao thư, Sổ Namecard Bút mực : Bút bi – Bút Gel, Bút lông bảng – bút lông dầu – bút dạ quang, Bút xóa – Gôm tẩy, Bút chì – Chuốt chì, Mực lông bảng – Mực lông dầu – Hộp dấu.Băng keo – Dao – Kéo – Thước : Băng keo – Keo Khô, Dao – Kéo, Cắt băng keo – Thước.Bấm kim – Kim – Kẹp : Máy bấm kim – Bấm lỗ, Kim bấm – kim kẹp, Kẹp bướm – Kẹp acco Và các thiết bị văn phòng như Máy tính Casio, Film Fax, Pin các loại...",
      heading: "ĐIỀU LƯU Ý KHI TÌM NHÀ PHÂN PHỐI VĂN PHÒNG PHẨM GIÁ SỈ",
      paragraph:
        "Có rất nhiều cách để đặt mua văn phòng phẩm tại Cần Thơ nhưng cách tốt nhất là bạn nên đặt mua tại các văn phòng phẩm giá sỉ uy tín...",
      aboutus: "GIỚI THIỆU VỀ CÔNG TY CỦA CHÚNG TÔI",
      company:
        "Công Ty Văn Phòng Xanh là một trong những doanh nghiệp tiên phong trong việc cung cấp các giải pháp văn phòng hiện đại, tiết kiệm và thân thiện với môi trường tại Việt Nam...",
      vision: "Tầm nhìn và Sứ mệnh",
      mission:
        "Tầm Nhìn: Trở thành nhà cung cấp văn phòng phẩm hàng đầu tại Việt Nam,, dẫn đầu về sự đổi mới và phát triển bền vững.",
      product: "Sản phẩm và Dịch vụ",
      services:
        "Văn Phòng Xanh cung cấp đa dạng các sản phẩm văn phòng như: Giấy tái chế, vật liệu thân thiện môi trường, Thiết bị tiết kiệm năng lượng...",
      corevalues: "Giá trị cốt lõi",
      corevalue1:
        "Bền vững: Luôn hướng đến việc giảm thiểu rác thải và khuyến khích sử dụng tài nguyên tái chế.",
      corevalue2:
        "Đổi mới: Ứng dụng công nghệ mới để tạo ra giải pháp văn phòng hiện đại và thông minh.",
      corevalue3:
        "Chất lượng: Đảm bảo mọi sản phẩm và dịch vụ đều đáp ứng các tiêu chuẩn cao nhất.",
      corevalue4:
        "Khách hàng là trung tâm: Luôn đặt nhu cầu khách hàng lên hàng đầu trong mọi quyết định và hành động.",
      brand: "Các đối tác thương hiệu của chúng tôi",
      specializing:
        "Chuyên cung cấp văn phòng phẩm chất lượng cao, giá cả hợp lý.",
      lk: "Liên kết hữu ích",
      our: "Về chúng tôi",
      item: "Sản phẩm",
      lock: "Chính sách bảo mật",
      contact: "Liên hệ",
      in4contact: "Thông tin liên hệ",
      "connect-with-us": "Kết nối với chúng tôi",
      copyright: "&copy; 2024 Văn phòng xanh. Tất cả quyền được bảo lưu.",
    },
  };

  // Function to change the text content based on the selected language
  function changeLanguage(lang) {
    langElements.forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  // Event listener for the language change selector
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    changeLanguage(selectedLanguage);
  });

  // Initialize the page with the selected language (default is Vietnamese)
  changeLanguage(languageSelector.value);
});

// Hiển thị nút khi cuộn xuống 100px
window.onscroll = function () {
  const backToTop = document.getElementById("back-to-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Cuộn lên đầu trang khi nhấn nút
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
