## Nama: Patria Anggara Susilo Putra
## Kelas: TI 3A
## NIM: 2141720058
---

### 1. Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!

+ Membuat komponen profile
![screenshot_langkah_2](/assets-record/praktikum-satu/1.png)

+ Import komponen dan gunakan di page.tsx
![screenshot_langkah_3](/assets-record/praktikum-satu/2.png)

+ Menampilkan hasil
![screenshot_hasil](/assets-record/praktikum-satu/result.png)

Sempat mengalami error saat menampilkan gambarnya, hal ini disebabkan tidak mengatur domains di file next.config.mjs. 

![screenshot_error](/assets-record/praktikum-satu/error.png)

Cara memperbaikinya sangat mudah, cukup buka file next.config.mjs, di dalam nextConfig tambahkan objek images, di dalam images tambahkan properti domains dengan nilai domain dari gambar (sebenarnya menggunakan domains sudah tidak didukung tapi entah kenapa bisa :v).

![screenshot_error](/assets-record/praktikum-satu/solve.png)

### 2. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![screenshot_result_1](/assets-record/praktikum-dua/result-1.png)

Kode dari tampilan di atas seperti berikut:

![screenshot_praktikum_2](/assets-record/praktikum-dua/1.png)

![screenshot_praktikum_2](/assets-record/praktikum-dua/2.png)

Dari praktikum kedua, hasilnya menampilkan gambar yang kurang sejajar dengan dua gambar lainnya. Agar gambar sejajar semua, gunakan flex. Berikut perbaikannya:


![screenshot_solve_1](/assets-record/praktikum-dua/solve-1.png)

![screenshot_solve_2](/assets-record/praktikum-dua/solve-2.png)

Ganti class "columns-3" dengan class "flex justify-center items-center" dan hapus class sebelumnya di tag div pada page.tsx (sisakan class margin-top saja).

Dengan membuat komponen baru (Gallery) untuk menampung 3 gambar profile, saat digunakan pada page.tsx tidak perlu memanggil sebanyak 3x seperti sebelumnya (yang saya komen) karena di dalam komponen Gallery sudah memanggil komponen Profile sebanyak 3x, jadi kode yang ada di dalam page.tsx menjadi lebih bersih dan singkat.

Berikut hasil setelah melakukan perbaikan kode:

![screenshot_result_2](/assets-record/praktikum-dua/result-2.png)