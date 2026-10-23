# Empat case studies resmi — orientasi

PDF dibaca seluruhnya oleh tutor pada 13 Oktober 2026 (Asia/Singapore), termasuk pemeriksaan visual semua halaman. Ini ringkasan singkat; analisis mendalam dan soal tiap kasus akan mengikuti hasil diagnostic. Tidak ada arsitektur jawaban tunggal resmi yang diasumsikan.

## Altostrat Media
[Sumber, hlm. 1–3](https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf). Perusahaan media ingin memperbaiki pengalaman pengguna dan pengelolaan konten dengan AI. Sistem cloud sudah ada, namun ingestion/arsip legacy masih memerlukan integrasi. Reliability dan pengendalian biaya menjadi prioritas; auditabilitas AI dan moderasi konten perlu dibahas.

Arah latihan tutor: bandingkan pipeline konten, biaya lifecycle media, akses identitas, dan jalur eskalasi konten bermasalah. Jangan mengasumsikan semua komponen on-premises sudah dipindah.

## Cymbal Retail
[Sumber, hlm. 1–4](https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf). Retailer ingin memperkaya katalog, memperbaiki pencarian, dan modernisasi integrasi. Sistem awal beragam serta masih memiliki proses manual. Staf harus dapat meninjau, menolak, mengubah, atau menyetujui usulan konten sebelum katalog diperbarui.

Arah latihan tutor: petakan alur data supplier ke katalog, evaluasi kualitas, dan proses review. Nilai dampak pada konversi dan beban kerja staf, bukan hanya kualitas demo AI.

## EHR Healthcare
[Sumber, hlm. 1–2](https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf). Pertumbuhan dan berakhirnya sewa fasilitas mendorong migrasi. Integrasi legacy tertentu harus tetap berjalan on-premises untuk sementara. Requirement mencakup availability minimal 99,9%, akses hybrid, observability konsisten, dan kepatuhan.

Arah latihan tutor: susun urutan migrasi berdasarkan dependency, lalu rancang pengukuran layanan dan responsibility saat alert. Jangan memindahkan komponen yang secara eksplisit belum dijadwalkan migrasi. Persentase availability harus diterjemahkan dengan definisi metrik dan window yang disepakati.

## KnightMotives Automotive
[Sumber, hlm. 1–3](https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf). Produsen kendaraan ingin memperbaiki pengalaman kendaraan dan dealer serta memodernisasi sistem lama. Konektivitas terbatas, fragmentasi software, keamanan, privasi, serta kemampuan tim menjadi pertimbangan. Dealer tidak memiliki anggaran untuk perangkat baru.

Arah latihan tutor: pisahkan jalur yang memerlukan respons lokal dari analitik cloud; periksa strategi saat koneksi hilang dan modernisasi bertahap. Pernyataan eksekutif dalam kasus merupakan konteks fiktif, bukan bukti keselamatan kendaraan nyata.
