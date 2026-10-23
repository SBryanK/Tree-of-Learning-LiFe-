# L01 — Dari kebutuhan ke keputusan arsitektur

Estimasi 35 menit + 15 menit latihan. Kerjakan diagnostic dahulu agar baseline tidak terpengaruh materi. Prasyarat: memahami aplikasi, database, dan network secara umum.

## Masalah yang kita pecahkan
Banyak desain terlihat masuk akal, tetapi hanya sebagian memenuhi batas bisnis. Tugas arsitek adalah menunjukkan hubungan antara kebutuhan, mekanisme solusi, konsekuensi, dan bukti. Target modul: menulis satu keputusan yang bisa dinilai oleh tim lain.

## Model sederhana
Anggap keputusan sebagai kontrak yang dapat diuji: “Saya memilih X karena memenuhi A dan B; saya menerima biaya C; keputusan ditinjau ulang jika D berubah.” Analogi ini membantu menyusun alasan, tetapi tidak menggantikan pengukuran atau pembuktian fitur layanan.

## Istilah yang perlu dikenali

| Istilah | Arti | Contoh orisinal |
|---|---|---|
| Functional requirement | Kemampuan yang harus tersedia | Pengguna dapat mengunduh invoice |
| NFR — Non-functional requirement | Kualitas atau batas operasi | 95% invoice selesai dalam 30 detik |
| Constraint | Batas wajib yang menyaring opsi | Data tertentu hanya boleh berada di lokasi yang disetujui |
| Trade-off | Manfaat yang diperoleh dengan konsekuensi | Duplikasi data mempercepat baca tetapi menambah biaya dan konsistensi yang dikelola |
| ADR — Architecture Decision Record | Catatan keputusan, alasan, dan konsekuensi | Mengapa batch dipilih daripada real-time |
| RTO — Recovery Time Objective | Target maksimum lamanya layanan tidak tersedia | Pulih dalam 60 menit |
| RPO — Recovery Point Objective | Target maksimum rentang waktu data yang boleh hilang | Kehilangan paling jauh 10 menit data |

Definisi recovery mengikuti [DR planning, bagian Basics](https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide). RPO adalah rentang waktu, bukan jumlah baris. Target yang lebih ketat biasanya menaikkan biaya dan kompleksitas. HA dan DR berhubungan tetapi tidak identik.

## Mekanisme mengambil keputusan
1. Nyatakan hasil bisnis dan siapa yang akan menggunakannya.
2. Ubah kata samar menjadi acceptance criteria: “cepat” perlu metrik, “aman” perlu akses dan ancaman yang jelas.
3. Pisahkan batas wajib dari preferensi. Opsi yang melanggar batas wajib gugur sebelum pembandingan biaya.
4. Daftar dua atau tiga opsi realistis. Tuliskan asumsi yang belum dibuktikan.
5. Bandingkan security, reliability, performance, cost, operational effort, serta sustainability bila relevan.
6. Pilih dan tentukan pengukuran yang akan membuktikan atau membatalkannya.

[Well-Architected Framework](https://docs.cloud.google.com/architecture/framework) menempatkan keputusan dalam beberapa pilar dan menganjurkan desain yang dapat berubah, terdokumentasi, serta sederhana. Langkah di atas adalah kerangka mengajar tutor, bukan prosedur ujian resmi.

## Worked example — laporan cabang
Contoh sintetis: 30 cabang mengirim total 600.000 record per hari. Manajer memakai laporan tren besok pagi, bukan untuk mengotorisasi penjualan. Data hari ini harus siap pukul 06:00 besok. Tim hanya dua engineer. Angka ini adalah asumsi latihan, bukan quota atau benchmark Google.

Opsi A: pipeline streaming yang menjaga dashboard nyaris real-time. Opsi B: batch harian dengan retry, validasi jumlah record, dan alert sebelum tenggat. Opsi C: staf menyalin data manual setiap pagi.

| Dimensi | Opsi A | Opsi B | Opsi C |
|---|---|---|---|
| Kebutuhan laporan besok | Memenuhi jika pipeline sehat | Memenuhi jika selesai sebelum tenggat | Berisiko terlambat |
| Freshness | Lebih cepat daripada kebutuhan | Sesuai kebutuhan | Bergantung staf |
| Operasional | Streaming, late events, replay perlu dikelola | Jadwal, retry, rekonsiliasi perlu dikelola | Pekerjaan manual berulang |
| Risiko data | Tetap butuh validasi dan akses minimum | Tetap butuh validasi dan akses minimum | Risiko salah salin dan akses tak terkendali |
| Cost | Perlu estimasi ingest, query, operasi | Perlu estimasi batch, query, operasi | Termasuk jam kerja dan biaya kesalahan |

Rekomendasi awal: B. Alasan utamanya cocok dengan freshness dan kapasitas tim. Kita belum boleh menyebut B paling murah tanpa estimasi atau pengukuran. A masuk akal bila kelak ada keputusan operasional real-time. C kurang cocok untuk proses berulang dan kebutuhan konsistensi.

Diagram alir konseptual: cabang → landing data → validasi → batch transform → laporan. Jalur gagal: validasi/batch gagal → retry terbatas → alert kepada operator → rekonsiliasi. Diagram belum menetapkan produk Google Cloud; pemilihan layanan mengikuti volume, format, lokasi, akses, dan query.

## Bukti yang harus dikumpulkan
Uji dengan data representatif dan pola hari puncak. Ukur waktu selesai, record masuk/ditolak, hasil rekonsiliasi, akses yang diizinkan/ditolak, dan biaya aktual. Simulasikan satu cabang terlambat. Tentukan apakah laporan parsial boleh diterbitkan serta bagaimana label kelengkapannya. Ini rencana verifikasi; tidak ada lab yang sudah dijalankan.

## Kapan kerangka ini cocok, dan batasnya
Cocok untuk memilih layanan, merencanakan migrasi, dan menilai skenario. Saat incident aktif, gunakan runbook dan peran incident yang sudah disepakati; jangan menunda mitigasi untuk ADR panjang. Untuk risiko sulit dibalik, tambahkan review dan pengujian yang sepadan. Dua desain dapat sama-sama layak bila kebutuhan belum lengkap.

## Kesalahan umum
- Memilih layanan karena familiar dari AWS/Tencent tanpa memeriksa perilaku Google Cloud.
- Menganggap managed service menghapus tanggung jawab data, IAM, dan konfigurasi.
- Menyamakan backup tersedia dengan restore sudah terbukti berhasil.
- Mengatakan “scalable” tanpa menyebut bottleneck, quota, dan downstream limit.
- Menganggap opsi paling canggih otomatis paling tepat.

## Active recall — jawab tanpa membaca ulang
1. Apa perbedaan constraint dengan preference? Beri contoh lain.
2. Mengapa freshness laporan harus dinyatakan sebelum memilih pipeline?
3. Bagaimana menguji klaim “biaya lebih rendah” tanpa mengarang angka?
4. Jika laporan kini dibutuhkan setiap lima menit, bagian mana dari keputusan yang harus ditinjau ulang?

## Skenario lanjutan L01-Q1
Sebuah tim mengusulkan multi-region untuk tool internal bulanan. Sponsor belum menyatakan dampak downtime, target recovery, atau lokasi data. Apa tiga pertanyaan pertama Anda, dan bukti apa yang diperlukan sebelum menyetujui biaya tambahan? Kirim jawaban dan alasan; tutor akan memberi feedback setelah Anda mencoba.

## Teach-back dan completion
Jelaskan rekomendasi batch dalam 90 detik: requirement, constraint, opsi yang ditolak, trade-off, dan verifikasi. Menandai “sudah dibaca” hanya mencatat membaca. “Bisa dijelaskan” adalah self-rating sampai ada jawaban yang ditinjau. Modul selesai secara belajar setelah alasan Anda dinilai dan diterapkan pada skenario baru.
