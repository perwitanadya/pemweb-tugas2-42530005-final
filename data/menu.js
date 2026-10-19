// ===== MAKANAN (id 1-6, 19-20) =====
const makanan = [
  { id: 1, nama: "Spaghetti Bolognese", kategori: "makanan", harga: 36000,
    deskripsi: "Spaghetti dengan saus daging tomat yang gurih, ditaburi keju parut.",
    foto: "/img/spaghetti.jpg" },
  { id: 2, nama: "Chicken Katsu Curry", kategori: "makanan", harga: 38000,
    deskripsi: "Nasi hangat dengan ayam katsu renyah dan saus kari Jepang yang gurih manis.",
    foto: "/img/katsu-curry.jpg" },
  { id: 3, nama: "Chicken Teriyaki Rice", kategori: "makanan", harga: 32000,
    deskripsi: "Nasi hangat dengan ayam saus teriyaki manis gurih dan taburan wijen.",
    foto: "/img/teriyaki-rice.jpg" },
  { id: 4, nama: "Cheesy Garlic Bread", kategori: "makanan", harga: 24000,
    deskripsi: "Roti panggang dengan mentega bawang putih dan keju leleh.",
    foto: "/img/garlic-bread.jpg" },
  { id: 5, nama: "Kitty Mini Burger", kategori: "makanan", harga: 29000,
    deskripsi: "Burger mungil dengan roti bentuk kepala kucing, isi ayam crispy dan keju.",
    foto: "/img/kitty-burger.jpg" },
  { id: 6, nama: "Cloud Mac and Cheese", kategori: "makanan", harga: 30000,
    deskripsi: "Makaroni keju super creamy dengan topping crumble renyah seperti awan.",
    foto: "/img/mac-cheese.jpg" },
  { id: 19, nama: "Honey Butter Wings", kategori: "makanan", harga: 34000,
    deskripsi: "Sayap ayam goreng renyah dengan saus madu mentega yang manis gurih.",
    foto: "/img/honey-wings.jpg" },
  { id: 20, nama: "Creamy Mushroom Soup", kategori: "makanan", harga: 26000,
    deskripsi: "Sup jamur krim yang hangat dan lembut, disajikan dengan roti panggang.",
    foto: "/img/mushroom-soup.jpg" }
];

// ===== MINUMAN (id 7-12, 21-22) =====
const minuman = [
  { id: 7, nama: "Strawberry Milk Cloud", kategori: "minuman", harga: 24000,
    deskripsi: "Susu stroberi dingin dengan topping whipped cream seperti awan.",
    foto: "/img/strawberry-milk.jpg" },
  { id: 8, nama: "Pink Sakura Latte", kategori: "minuman", harga: 27000,
    deskripsi: "Latte dengan sirup sakura yang wangi, lembut, dan manis.",
    foto: "/img/sakura-latte.jpg" },
  { id: 9, nama: "Rose Lychee Soda", kategori: "minuman", harga: 23000,
    deskripsi: "Soda segar rasa leci dengan sirup mawar dan es batu bentuk bunga.",
    foto: "/img/rose-lychee.jpg" },
  { id: 10, nama: "Bubblegum Frappe", kategori: "minuman", harga: 28000,
    deskripsi: "Frappe permen karet pink dengan whipped cream dan taburan sprinkle.",
    foto: "/img/bubblegum-frappe.jpg" },
  { id: 11, nama: "Peach Blossom Tea", kategori: "minuman", harga: 22000,
    deskripsi: "Teh persik dingin dengan potongan buah dan aroma bunga yang segar.",
    foto: "/img/peach-tea.jpg" },
  { id: 12, nama: "Marshmallow Hot Choco", kategori: "minuman", harga: 25000,
    deskripsi: "Coklat panas dengan marshmallow pink mengambang di atasnya.",
    foto: "/img/hot-choco.jpg" },
  { id: 21, nama: "Strawberry Lemonade", kategori: "minuman", harga: 26000,
    deskripsi: "Lemonade segar dengan puree stroberi dan irisan lemon.",
    foto: "/img/strawberry-lemonade.jpg" },
  { id: 22, nama: "Taro Bubble Milk Tea", kategori: "minuman", harga: 21000,
    deskripsi: "Milk tea rasa talas yang creamy dengan boba kenyal.",
    foto: "/img/taro-milk-tea.jpg" }
];

// ===== DESSERT (id 13-18, 23-24) =====
const dessert = [
  { id: 13, nama: "Strawberry Shortcake", kategori: "dessert", harga: 32000,
    deskripsi: "Kue sponge lembut berlapis krim dan stroberi segar di atasnya.",
    foto: "/img/shortcake.jpg" },
  { id: 14, nama: "Pink Macaron Set", kategori: "dessert", harga: 35000,
    deskripsi: "Satu set macaron warna pastel rasa stroberi, mawar, dan raspberry.",
    foto: "/img/macaron.jpg" },
  { id: 15, nama: "Cotton Candy Cupcake", kategori: "dessert", harga: 26000,
    deskripsi: "Cupcake vanila dengan frosting pink dan gulali di atasnya.",
    foto: "/img/cupcake.jpg" },
  { id: 16, nama: "Banana Split", kategori: "dessert", harga: 30000,
    deskripsi: "Pisang dengan tiga scoop es krim, saus coklat, whipped cream, dan ceri di atasnya.",
    foto: "/img/banana-split.jpg" },
  { id: 17, nama: "Strawberry Cream Sandwich", kategori: "dessert", harga: 27000,
    deskripsi: "Roti lembut isi krim segar dan potongan stroberi, dipotong kecil-kecil biar imut.",
    foto: "/img/strawberry-sandwich.jpg" },
  { id: 18, nama: "Choco Lava Cake", kategori: "dessert", harga: 29000,
    deskripsi: "Kue coklat hangat dengan isi coklat cair yang meleleh saat dipotong.",
    foto: "/img/lava-cake.jpg" },
  { id: 23, nama: "Fluffy Pancake Stack", kategori: "dessert", harga: 28000,
    deskripsi: "Tumpukan pancake empuk dengan eskrim, icing gula, dan stroberi.",
    foto: "/img/pancake-stack.jpg" },
  { id: 24, nama: "Mini Donut Box", kategori: "dessert", harga: 25000,
    deskripsi: "Enam donat mini dengan beraneka ragam dan taburan.",
    foto: "/img/mini-donut.jpg" }
];

const menu = [...makanan, ...minuman, ...dessert];

module.exports = menu;