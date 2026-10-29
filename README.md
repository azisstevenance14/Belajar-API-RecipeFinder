# 🍳 ASSA Recipe Finder App

Aplikasi web sederhana untuk mencari resep makanan secara instan menggunakan data publik dari **TheMealDB API**. Project ini dibangun untuk mempraktikkan konsep *asynchronous JavaScript*, `fetch` API, *DOM manipulation*, dan *Bootstrap 5.3 styling*.

## 🚀 Fitur Utama
* **Pencarian Resep Dinamis**: Cari resep berdasarkan kata kunci (contoh: *Chicken, Soup, Pasta, Beef*).
* **Loading State**: Indikator *spinner* interaktif saat data sedang diambil dari server.
* **Responsive Grid Layout**: Tampilan kartu resep yang rapi dan responsif di berbagai ukuran layar menggunakan Bootstrap 5.3.
* **Direct Video Link**: Tombol tautan langsung ke video tutorial memasak di YouTube.

## 🛠️ Teknologi yang Digunakan
* **HTML5 & CSS3** (Structure & Styling)
* **Bootstrap 5.3** (UI Framework & Components)
* **Vanilla JavaScript (ES6+)** (`async/await`, `fetch` API, *DOM Manipulation*)
* **TheMealDB API** (Public REST API for Recipes)

## 📂 Struktur File Project
```text
recipe-app/
│
├── index.html       # Kerangka Tampilan (UI)
├── style.css        # Kustomisasi CSS Tambahan
└── script.js        # Otak Logika (API Fetching & DOM Rendering)