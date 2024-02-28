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