# Muhammad Fakhrizal Garnindyo - Digital Portfolio (V2)

Website portofolio digital modern, futuristik, dan berkinerja tinggi untuk **Software Engineer & Fullstack Developer**. Menggabungkan latar belakang interaktif 3D **Three.js (WebGL 60FPS)**, transisi halaman sinematik **Framer Motion**, desain antarmuka modular **Tailwind CSS**, dan skema warna gelap harmonis beraksen ungu elektrik dan merah vibran.

---

## 🎨 Color Palette (Harmonis, Modern & WCAG AA)

| Token | Warna Hex | Deskripsi & Peran |
|---|---|---|
| `bg-main` | `#0A0A0F` | Background kanvas utama (hitam pekat bernuansa ruang gelap) |
| `surface` | `#16161D` | Permukaan card, panel, dan header navigasi |
| `surface-card` | `#181822` | Card komponen dengan kedalaman visual |
| `border-dark` | `#2A2A35` | Garis pembatas dan wireframe separator |
| `text-primary` | `#F5F5F7` | Teks utama dengan kontras tinggi (WCAG AAA) |
| `text-secondary` | `#A1A1AA` | Teks sekunder, deskripsi, dan subtitle (WCAG AA) |
| `accent-purple` | `#8B5CF6` | Ungu elektrik untuk status node & primary highlights |
| `accent-red` | `#EF4444` | Merah vibran untuk aksen sekunder & dynamic gradients |
| `gradient` | `linear-gradient(135deg, #8B5CF6 0%, #EF4444 100%)` | Gradien ikonik untuk teks hero dan tombol CTA |

---

## 🚀 Tech Stack

- **Framework**: React 19 (Vite, Functional Components & Hooks)
- **Styling**: Tailwind CSS + Custom CSS Variables & Utilities
- **Animasi 3D**: Three.js (Interactive Particle Constellation, Dynamic Wireframe Icosahedrons & Holographic Emblem Core)
- **Animasi UI & Transisi**: Framer Motion (Page Transition, Scroll In-view, Progress Bars, Card Hover micro-interactions)
- **Routing**: React Router DOM (v7)
- **Icons**: React Icons (Feather) & Lucide React
- **Aksesibilitas**: Dukungan `prefers-reduced-motion` dan toggle manual reduced-motion di navigasi.

---

## 📁 Struktur Direktori Project

```text
my-digital-portfolio/
├── public/
│   ├── cv/                    # File PDF Curriculum Vitae
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/            # Gambar profile, 11 project, & sertifikat
│   ├── components/
│   │   ├── canvas/            # Modul 3D Three.js
│   │   │   ├── ThreeBackground.jsx  # Particle constellation + wireframe background
│   │   │   └── Hero3DCanvas.jsx     # Hologram 3D interactive emblem
│   │   ├── common/            # Komponen umum
│   │   │   ├── Footer.jsx
│   │   │   └── ProjectModal.jsx     # Modal detail project mendalam
│   │   ├── home/              # Section halaman utama
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── navigation/        # Header navigasi
│   │   │   └── Navbar.jsx           # Sticky glassmorphism navbar + smooth scroll
│   │   └── welcome/           # Halaman sinematik pertama
│   │       └── Welcome.jsx          # Hero text prominent, 3D core & enter button
│   ├── data/
│   │   └── portfolioData.js   # Centralized data repository (Bio, Skills, Projects, Experience)
│   ├── pages/
│   │   └── HomePage.jsx       # Single-page layout terintegrasi
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx                # Routing & page transition container
│   ├── index.css              # Custom styling, scrollbar, glowing border & reduced motion
│   └── main.jsx
├── index.html                 # Meta tags, typography Space Grotesk & Inter
├── tailwind.config.js         # Setup custom palette & keyframes
└── package.json
```

---

## 🛠️ Instalasi & Menjalankan Project

### 1. Install Dependencies
Jalankan perintah berikut di terminal:

```bash
npm install
```

### 2. Menjalankan di Mode Development (Lokal)
```bash
npm run dev
```
Buka browser pada alamat yang tertera di terminal (biasanya `http://localhost:5173`).

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap dideploy ke Vercel, Netlify, atau Cloudflare Pages dari folder `dist/`.

---

## 🌟 Fitur Utama Portofolio

1. **Sinematik Welcome Page**:
   - Menampilkan nama lengkap **MUHAMMAD FAKHRIZAL GARNINDYO** secara megah dan elegan.
   - Status HUD: jam real-time UTC+7, status sistem online, dan role badge.
   - Background 3D partikel interaktif & floating wireframe geometry yang merespons kursor.
   - Tombol "Enter Portfolio" dengan micro-interaction dan transisi portal halus ke halaman utama.

2. **Hero Section Interaktif**:
   - Headline arsitektur perangkat lunak dengan gradien ungu-merah.
   - Hologram kubik 3D yang dapat diinteraksikan dengan mouse.
   - Metrik pengalaman kerja, 11+ project, dan 14+ sertifikat.
   - Ticker badge stack teknologi inti.

3. **About Me Section**:
   - Foto profil berbingkai gradien glowing dengan filter monokrom hover color.
   - Prinsip rekayasa perangkat lunak (Clean Architecture, High Performance, User-Centric).
   - Tombol unduh CV langsung.

4. **Skills Section**:
   - Visual progress bar teranimasi untuk tiap domain teknis (Frontend, Backend, Database, Design).
   - Filter tab kategori interaktif.
   - Badge soft skills & metodologi kerja.

5. **Projects Showcase**:
   - Menampilkan 11 project nyata dari database portfolio lengkap dengan screenshot lokal.
   - Filter kategori: Fullstack Apps, AI & Healthcare, Management Systems, dan UI/UX Design.
   - Efek 3D tilt hover dan modal detail project untuk inspeksi arsitektur & source code.

6. **Experience Timeline**:
   - Timeline vertikal dengan glowing node markers.
   - Riwayat di Parthaistic Digital Agency, STT Nurul Fikri, Freelance, dan GDGoC.

7. **Contact Direct Dispatch**:
   - Form pesan terintegrasi yang langsung menghasilkan tautan pesan WhatsApp otomatis ke nomor pemilik (`+62 821-2343-9604`).
   - Tautan langsung ke Email, GitHub, dan LinkedIn.
