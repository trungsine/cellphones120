import { PiDeviceRotate, PiTelevision } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { TbBatteryVerticalCharging2 } from "react-icons/tb";
import { RiHomeWifiLine } from "react-icons/ri";
import { CgAppleWatch } from "react-icons/cg";
import { SlEarphones } from "react-icons/sl";
// import { ReactNode } from "react";
import { MdAutorenew, MdLaptopMac } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { IconType } from "react-icons";

interface ListItem {
  title: string;
  icons: IconType;
  contentTitle: {
    titleItem: string;
    contentTitleItem: string[];
  }[];
}

const listItems: ListItem[] = [
  {
    title: "Điện thoại, Tablet",
    icons: IoPhonePortraitOutline,
    contentTitle: [
      {
        titleItem: "Hãng điện thoại",
        contentTitleItem: [
          "iPhone",
          "Samsung",
          "Xiaomi",
          "Oppo",
          "realme",
          "TECHNO",
          "vivo",
          "Infinix",
          "Nokia",
          "Nubia",
          "Nothing Phone",
          "Masstel",
          "Sony"
        ]
      },
      {
        titleItem: "Mức giá điện thoại",
        contentTitleItem: [
          "Dưới 2 triệu",
          "Từ 2 đến 4 triệu",
          "Từ 4 đến 7 triệu",
          "Từ 7 đến 13 triệu",
          "Từ 13 đến 20 triệu",
          "Trên 20 triệu"
        ]
      },
      {
        titleItem: "Điện thoại HOT",
        contentTitleItem: [
          "iPhone 16 Series",
          "iPhone 15 Pro Max",
          "Galaxy S25 Ultra",
          "Galaxy Z Flip6",
          "OPPO Reno13",
          "Redmi Note 14",
          "Redmi Note 14 Pro Plus",
          "Redmi Note 13 Pro",
          "Nothing Phone 2A ",
          "Tecno Camon 30S",
          "Realme 13+ 5G",
          "Xiaomi 14T Pro",
          "Samsung Galaxy M55"
        ]
      },
      {
        titleItem: "Hãng máy tính bảng",
        contentTitleItem: [
          "iPad",
          "Samsung",
          "Xiaomi",
          "Huawei",
          "Lenovo",
          "Nokia",
          "Teclast",
          "Máy đọc sách",
          "Kindle",
          "Boox",
          "Xem thêm tất cả Tablet"
        ]
      },
      {
        titleItem: "Máy tính bảng HOT",
        contentTitleItem: [
          "iPad Air 2024",
          "iPad Pro 2024",
          "iPad mini 7 ",
          "Galaxy Tab S10 Series ",
          "Galaxy Tab S9 FE 5G",
          "Xiaomi Pad 6 256GB",
          "Huawei Matepad 11.5''S",
          "Xiaomi Pad SE",
          "Xiaomi Redmi Pad Pro",
          "Teclast M50"
        ]
      }
    ]
  },

  {
    title: "Laptop",
    icons: MdLaptopMac,
    contentTitle: [
      {
        titleItem: "Thương hiệu",
        contentTitleItem: [
          "Mac",
          "ASUS",
          "Lenovo",
          "Dell",
          "HP",
          "Acer",
          "LG",
          "Huawei",
          "MSI",
          "Gigabyte",
          "Vaio",
          "Masstel"
        ]
      },
      {
        titleItem: "Phân khúc giá",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 - 15 triệu",
          "Từ 15 - 20 triệu",
          "Từ 20 - 25 triệu",
          "Từ 25 - 30 triệu"
        ]
      },
      {
        titleItem: "Nhu cầu sử dụng",
        contentTitleItem: [
          "Văn phòng",
          "Gaming",
          "Mỏng nhẹ",
          "Đồ họa - kỹ thuật",
          "Sinh viên",
          "Cảm ứng",
          "Laptop AI ",
          "Mac CTO - Nâng cấp theo cách của bạn "
        ]
      },
      {
        titleItem: "Dòng chip",
        contentTitleItem: [
          "Laptop Core i3",
          "Laptop Core i5",
          "Laptop Core i7",
          "Laptop Core i9",
          "Apple M1 Series",
          "Apple M3 Series",
          "Apple M4 Series ",
          "AMD Ryzen",
          "Intel Core Ultra "
        ]
      },
      {
        titleItem: "Kích thước màn hình",
        contentTitleItem: [
          "Laptop 12 inch",
          "Laptop 13 inch",
          "Laptop 14 inch",
          "Laptop 15.6 inch",
          "Laptop 16 inch"
        ]
      }
    ]
  },

  {
    title: "Âm thanh",
    icons: SlEarphones,
    contentTitle: [
      {
        titleItem: "Chọn loại tai nghe",
        contentTitleItem: [
          "Bluetooth",
          "Chụp tai",
          "Nhét tai",
          "Có dây",
          "Thể thao",
          "Gaming",
          "Xem tất cả tai nghe"
        ]
      },
      {
        titleItem: "Hãng tai nghe",
        contentTitleItem: [
          "Apple",
          "Sony",
          "JBL",
          "Samsung",
          "Marshall",
          "Soundpeats",
          "Bose",
          "Edifier",
          "Xiaomi",
          "Huawei",
          "Sennheiser",
          "ASUS",
          "Havit",
          "Beats"
        ]
      },
      {
        titleItem: "Chọn theo giá",
        contentTitleItem: [
          "Tai nghe dưới 200K",
          "Tai nghe dưới 500K",
          "Tai nghe dưới 1 triệu",
          "Tai nghe dưới 2 triệu",
          "Tai nghe dưới 5 triệu"
        ]
      },

      {
        titleItem: "Hãng loa",
        contentTitleItem: [
          "JBL",
          "Marshall",
          "Harman Kardon",
          "Acnos",
          "Samsung",
          "Sony",
          "Arirang",
          "LG",
          "Alpha Works",
          "Edifier",
          "Bose",
          "Nanomax"
        ]
      },
      {
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "AirPods 4",
          "AirPods Pro 2",
          "Galaxy Buds 3 pro",
          "JBL Tour Pro 3",
          "Sony WH-1000XM5",
          "OPPO Enco Air3i - Chỉ có tại CPS",
          "Redmi Buds 6 Pro ",
          "Onyx Studio 9 ",
          "Marshall Willen II"
        ]
      }
    ]
  },
  {
    title: "Đồng hồ, Camera",
    icons: CgAppleWatch,
    contentTitle: [
      {
        titleItem: "Loại đồng hồ",
        contentTitleItem: [
          "Đồng hồ thông minh",
          "Vòng đeo tay thông minh",
          "Đồng hồ định vị trẻ em",
          "Dây đeo"
        ]
      },
      {
        titleItem: "Chọn theo thương hiệu",
        contentTitleItem: [
          "Apple Watch",
          "Samsung",
          "Xiaomi",
          "Huawei",
          "Coros",
          "Garmin",
          "Kieslect",
          "Amazfit",
          "Black Shark",
          "Mibro",
          "Masstel",
          "imoo",
          "Kospet",
          "MyKID",
          "KAVVO"
        ]
      },
      {
        titleItem: "Sản phẩm nổi bật ⚡",
        contentTitleItem: [
          "Apple Watch Series 10 ",
          "Apple Watch Ultra 2",
          "Samsung Galaxy Watch 7 ",
          "Samsung Galaxy Watch Ultra ",
          "Apple Watch SE",
          "imoo Z1",
          "Viettel MyKID 4G Lite",
          "Xiaomi Mi Band 9 Pro ",
          "Xiaomi Mi Band 9 Active ",
          "Huawei Watch D2",
          "Huawei Watch Fit 3"
        ]
      },
      {
        titleItem: "Camera",
        contentTitleItem: [
          "Camera an ninh",
          "Camera hành trình",
          "Action Camera",
          "Camera AI ",
          "Gimbal",
          "Tripod",
          "Máy ảnh",
          "Flycam",
          "Xem tất cả camera"
        ]
      },
      {
        titleItem: "Camera nổi bật",
        contentTitleItem: [
          "Camera an ninh Imou",
          "Camera an ninh Ezviz",
          "Camera an ninh Xiaomi",
          "Camera an ninh TP-Link",
          "Camera Tiandy ",
          "Camera DJI",
          "Camera Insta360",
          "Máy ảnh Fujifilm",
          "Máy ảnh Canon ",
          "Máy ảnh Sony ",
          "Gopro Hero 13",
          "Flycam dji",
          "DJI Action 5 Pro",
          "DJI Action 4"
        ]
      }
    ]
  },
  {
    title: "Đồ gia dụng",
    icons: RiHomeWifiLine,
    contentTitle: [
      {
        titleItem: "Gia dụng nhà bếp",
        contentTitleItem: [
          "Nồi chiên không dầu",
          "Máy rửa bát",
          "Lò vi sóng",
          "Nồi cơm điện",
          "Máy xay sinh tố",
          "Máy ép trái cây",
          "Máy làm sữa hạt",
          "Bếp điện",
          "Ấm siêu tốc",
          "Nồi áp suất",
          "Nồi nấu chậm",
          "Máy ép chậm"
        ]
      },
      {
        titleItem: "Sức khỏe - Làm đẹp",
        contentTitleItem: [
          "Máy đo huyết áp",
          "Máy sấy tóc",
          "Máy massage",
          "Máy cạo râu",
          "Cân sức khoẻ",
          "Bàn chải điện",
          "Máy tăm nước",
          "Tông đơ cắt tóc"
        ]
      },
      {
        titleItem: "Thiết bị gia đình",
        contentTitleItem: [
          "Robot hút bụi",
          "Máy lọc không khí",
          "Quạt",
          "Máy hút bụi cầm tay",
          "Máy rửa chén",
          "TV Box",
          "Máy chiếu",
          "Đèn thông minh",
          "Bàn ủi",
          "Chăm sóc thú cưng",
          "Máy hút ẩm "
        ]
      },
      {
        titleItem: "Sản phẩm nổi bật⚡",
        contentTitleItem: [
          "Robot hút bụi Dreame X40 Ultra",
          "Máy chơi game Sony PS5 Slim",
          "Máy chiếu Beecube X2 Max Gen 3",
          "Robot hút bụi Ecovacs X5 Pro Omni",
          "Robot hút bụi Ecovacs N30",
          "Robot hút bụi Xiaomi S20",
          "Máy lọc không khí Xiaomi",
          "Robot hút bụi Ecovacs",
          "Máy hút bụi Dreame"
        ]
      },
      {
        titleItem: "Thương hiệu gia dụng",
        contentTitleItem: [
          "Philips",
          "Kangaroo",
          "Panasonic",
          "Sunhouse",
          "Sharp",
          "Gaabor",
          "Bear",
          "Bluestone",
          "Dreame",
          "Kalite",
          "Xiaomi",
          "Cuckoo"
        ]
      }
    ]
  },
  {
    title: "Phụ kiện",
    icons: TbBatteryVerticalCharging2,
    contentTitle: [
      {
        titleItem: "Thiết bị mạng",
        contentTitleItem: [
          "Thiết bị phát sóng WiFi",
          "Bộ phát wifi di động",
          "Bộ kích sóng WiFi",
          "Xem tất cả thiết bị mạng"
        ]
      },

      {
        titleItem: "Phụ kiện điện thoại & Laptop",
        contentTitleItem: [
          "Phụ kiện điện thoại",
          "Phụ kiện Laptop",
          "Chuột, bàn phím",
          "Balo Laptop | Túi chống sốc",
          "Phần mềm",
          "Webcam",
          "Giá đỡ",
          "Thảm, lót chuột",
          "Sạc laptop",
          "Camera phòng họp"
        ]
      },
      {
        titleItem: "Phụ kiện di động",
        contentTitleItem: [
          "Phụ kiện Apple",
          "Dán màn hình",
          "Ốp lưng - Bao da",
          "Thẻ nhớ",
          "Apple Care+",
          "Samsung Care+",
          "Sim 4G",
          "Cáp, sạc",
          "Pin dự phòng"
        ]
      },
      {
        titleItem: "Gaming Gear",
        contentTitleItem: [
          "PlayStation",
          "ROG Ally",
          "MSI Claw",
          "Bàn phím Gaming",
          "Chuột chơi game",
          "Tai nghe Gaming",
          "Tay cầm chơi game",
          "Xem tất cả Gaming Gear"
        ]
      },
      {
        titleItem: "Phụ kiện khác",
        contentTitleItem: [
          "Dây đeo đồng hồ",
          "Dây đeo Airtag",
          "Phụ kiện tiện ích",
          "Phụ kiện ô tô",
          "Đồ chơi trẻ em",
          "Trạm sạc dự phòng",
          "Thiết bị định vị"
        ]
      },
      {
        titleItem: "Thiết bị lưu trữ",
        contentTitleItem: ["Thẻ nhớ", "USB", "Ổ cứng di động"]
      }
    ]
  },
  {
    title: "PC, Màn hình, Máy in",
    icons: FaComputer,
    contentTitle: [
      {
        titleItem: "Loại PC",
        contentTitleItem: ["Build PC", "Cấu hình sẵn", "All In One", "PC bộ"]
      },

      {
        titleItem: "Gaming Gear",
        contentTitleItem: [
          "PlayStation",
          "ROG Ally",
          "Bàn phím Gaming",
          "Chuột chơi game",
          "Tai nghe Gaming",
          "Tay cầm chơi Game",
          "Xem tất cả"
        ]
      },
      {
        titleItem: "Chọn màn hình theo nhu cầu",
        contentTitleItem: [
          "Gaming",
          "Văn phòng",
          "Đồ họa",
          "Lập trình",
          "Màn hình di động",
          "Arm màn hình",
          "Xem tất cả"
        ]
      },
      {
        titleItem: "Linh kiện máy tính",
        contentTitleItem: [
          "CPU",
          "Main",
          "RAM",
          "Ổ cứng",
          "Nguồn",
          "VGA",
          "Tản nhiệt",
          "Case",
          "Xem tất cả"
        ]
      },
      {
        titleItem: "Chọn màn hình theo hãng",
        contentTitleItem: [
          "ASUS",
          "Samsung",
          "DELL",
          "LG",
          "MSI",
          "Acer",
          "Xiaomi",
          "ViewSonic",
          "Philips",
          "AOC",
          "Dahua"
        ]
      },
      {
        titleItem: "Chọn PC theo nhu cầu",
        contentTitleItem: ["Gaming", "Đồ họa", "Văn phòng"]
      },

      {
        titleItem: "Thiết bị văn phòng",
        contentTitleItem: ["Máy in", "Phần mềm", "Decor bàn làm việc"]
      }
    ]
  },
  {
    title: "Tivi",
    icons: PiTelevision,
    contentTitle: [
      {
        titleItem: "Chọn theo hãng",
        contentTitleItem: [
          "Samsung",
          "LG",
          "Xiaomi",
          "Coocaa",
          "Sony",
          "Toshiba",
          "TCL",
          "Hisense",
          "Aqua "
        ]
      },
      {
        titleItem: "Chọn theo mức giá",
        contentTitleItem: [
          "Dưới 5 triệu",
          "Từ 5 - 9 triệu",
          "Từ 9 - 12 triệu",
          "Từ 12 - 15 triệu",
          "Trên 15 triệu"
        ]
      },
      {
        titleItem: "Chọn theo độ phân giải",
        contentTitleItem: [
          "Tivi 4K",
          "Tivi 8K",
          "Tivi Full HD",
          "Tivi OLED",
          "Tivi QLED",
          "Android Tivi"
        ]
      },
      {
        titleItem: "Chọn theo kích thước",
        contentTitleItem: [
          "Tivi 32 inch",
          "Tivi 43 inch",
          "Tivi 50 inch",
          "Tivi 55 inch",
          "Tivi 65 inch",
          "Tivi 70 inch",
          "Tivi 85 inch"
        ]
      },
      {
        titleItem: "Sản phẩm nổi bật ⚡",
        contentTitleItem: [
          "Tivi Samsung UHD 4K 55 inch",
          "Tivi NanoCell LG 4K 55 inch",
          "Tivi LG 4K 55 ich Evo Oled Pose",
          "Tivi Samsung QLED 4K 65 inch",
          "Tivi Samsung UHD 4K 65 inch 2024",
          "Tivi LG 43LM5750PTC FHD 43 inch",
          "Tivi Xiaomi A 4K 2025 55 inch",
          "Tivi Coocaa khung tranh QLED 4K 55 inch",
          "Tivi Coocaa 4K 55 inch"
        ]
      }
    ]
  },
  {
    title: "Thu cũ đổi mới",
    icons: MdAutorenew,
    contentTitle: [
      {
        titleItem: "Chọn theo hãng",
        contentTitleItem: [
          "Thu cũ iPhone",
          "Thu cũ Samsung",
          "Thu cũ Xiaomi",
          "Thu cũ Laptop",
          "Thu cũ Mac",
          "Thu cũ iPad",
          "Thu cũ đồng hồ",
          "Thu cũ Apple Watch",
          "Thu cũ 2G"
        ]
      },
      {
        titleItem: "Sản phẩm trợ giá cao",
        contentTitleItem: [
          "iPhone 15 Pro Max » 2 triệu",
          "iPhone 14 Pro Max » 2 triệu",
          "Galaxy S23 Ultra » 2 triệu",
          "Galaxy Z Fold 5 » 2 triệu",
          "Galaxy Z Flip 5 » 2 triệu",
          "Galaxy Tab S9 » 500K",
          "OPPO Find N3 » 5 triệu",
          "Oppo Find N3 Flip » 3 triệu",
          "Macbook » 2 triệu",
          "Laptop » 3 triệu",
          "Máy chơi game Rog Ally » 2 triệu"
        ]
      },
      {
        titleItem: "Sản phẩm giá thu cao ⚡",
        contentTitleItem: [
          "iPhone 15 Pro Max",
          "iPhone 14 Pro Max",
          "iPhone 13 Pro Max",
          "Samsung Galaxy Z Fold 5",
          "Samsung Galaxy Z Flip 5",
          "Samsung Galaxy S24 Ultra",
          "Macbook Air M1"
        ]
      }
    ]
  },
  {
    title: "Hàng cũ",
    icons: PiDeviceRotate,
    contentTitle: [
      {
        titleItem: "Chọn theo hãng",
        contentTitleItem: [
          "Thu cũ iPhone",
          "Thu cũ Samsung",
          "Thu cũ Xiaomi",
          "Thu cũ Laptop",
          "Thu cũ Mac",
          "Thu cũ iPad",
          "Thu cũ đồng hồ",
          "Thu cũ Apple Watch",
          "Thu cũ 2G"
        ]
      },
      {
        titleItem: "Sản phẩm trợ giá cao",
        contentTitleItem: [
          "iPhone 15 Pro Max » 2 triệu",
          "iPhone 14 Pro Max » 2 triệu",
          "Galaxy S23 Ultra » 2 triệu",
          "Galaxy Z Fold 5 » 2 triệu",
          "Galaxy Z Flip 5 » 2 triệu",
          "Galaxy Tab S9 » 500K",
          "OPPO Find N3 » 5 triệu",
          "Oppo Find N3 Flip » 3 triệu",
          "Macbook » 2 triệu",
          "Laptop » 3 triệu",
          "Máy chơi game Rog Ally » 2 triệu"
        ]
      },
      {
        titleItem: "Sản phẩm giá thu cao ⚡",
        contentTitleItem: [
          "iPhone 15 Pro Max",
          "iPhone 14 Pro Max",
          "iPhone 13 Pro Max",
          "Samsung Galaxy Z Fold 5",
          "Samsung Galaxy Z Flip 5",
          "Samsung Galaxy S24 Ultra",
          "Macbook Air M1"
        ]
      }
    ]
  },
  {
    title: "Khuyến mãi",
    icons: HiOutlineSpeakerphone,
    contentTitle: [
      {
        titleItem: "Các chương trình khuyến mãi",
        contentTitleItem: [
          "Hotsale cuối tuần",
          "Siêu sale phụ kiện",
          "Ưu đãi thanh toán",
          "Thu cũ 2G trợ giá đến 500k",
          "Khách hàng doanh nghiệp B2B",
          "Thu cũ đổi mới giá hời",
          "iPhone 16 trợ giá đến 5 triệu",
          "Galaxy Z Fold6 trợ giá 2 triệu",
          "OPPO Find N3 trợ giá 5 triệu",
          "Laptop trợ giá đến 5 triệu",
          "Đồng hồ trợ giá đến 1 triệu"
        ]
      },
      {
        titleItem: "Ưu đãi đặc biệt",
        contentTitleItem: [
          "Ưu đãi thành viên",
          "Nâng cấp chính sách Smember 3.0 ",
          "Ưu đãi sinh viên",
          "Nhập hội S-Student ",
          "Đăng ký S-Student "
        ]
      },
      {
        titleItem: "Giảm giá theo danh mục",
        contentTitleItem: [
          "Laptop giảm đến 400K",
          "Điện thoại giảm đến 6%",
          "Đồng hồ giảm thêm 6%",
          "Loa - tai nghe giảm thêm 5%",
          "Máy chơi game giảm thêm 5%",
          "Hàng cũ giảm thêm 10% "
        ]
      }
    ]
  },
  {
    title: "Tin công nghệ",
    icons: FaRegNewspaper,
    contentTitle: [
      {
        titleItem: "Chuyên mục",
        contentTitleItem: [
          "Tin công nghệ",
          "Khám phá",
          "S-Games",
          "Tư vấn",
          "Trên tay",
          "Thị trường",
          "Thủ thuật - Hỏi đáp"
        ]
      }
    ]
  }
];

export default listItems;
