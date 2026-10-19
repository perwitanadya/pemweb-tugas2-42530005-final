const express = require('express');
const path = require('path');
const menu = require('./data/menu');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Layar 1: selamat datang
app.get('/', (req, res) => {
  res.render('home', { judul: 'Selamat Datang' });
});

// Layar 2: pilih kategori
app.get('/pilih', (req, res) => {
  const jumlah = {
    makanan: menu.filter((m) => m.kategori === 'makanan').length,
    minuman: menu.filter((m) => m.kategori === 'minuman').length,
    dessert: menu.filter((m) => m.kategori === 'dessert').length
  };

  res.render('pilih', { judul: 'Pilih Kategori', jumlah: jumlah });
});

// Layar 3: daftar menu + filter via QUERY PARAMETER
app.get('/menu', (req, res) => {
  const kategori = req.query.kategori;
  let menuTersaring = menu;

  if (kategori) {
    menuTersaring = menu.filter(
      (item) => item.kategori.toLowerCase() === kategori.toLowerCase()
    );
  }

  const daftarKategori = [...new Set(menu.map((item) => item.kategori))];

  res.render('index', {
    judul: 'Daftar Menu',
    menu: menuTersaring,
    kategoriAktif: kategori || '',
    daftarKategori: daftarKategori
  });
});

// Detail menu via ROUTE PARAMETER
app.get('/menu/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find((m) => m.id === id);

  if (!item) {
    return res.status(404).render('not-found', {
      judul: 'Menu Tidak Ditemukan',
      pesan: `Menu dengan ID "${req.params.id}" tidak ditemukan.`
    });
  }

  res.render('detail', { judul: item.nama, item: item });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Total menu terbaca: ${menu.length}`);
});