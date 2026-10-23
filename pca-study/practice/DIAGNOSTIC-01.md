# Diagnostic awal — 10 skenario

Estimasi 20–30 menit; tanpa mencari jawaban agar baseline berguna. Jika belum tahu, tulis “belum tahu”. Pilih satu jawaban kecuali nomor 10 (dua jawaban). Sertakan alasan 1–2 kalimat dan confidence rendah/sedang/tinggi. Soal orisinal tutor, bukan soal resmi atau bocoran. Kunci dan alasan setiap opsi diberikan setelah Anda menjawab.

Format: `nomor. pilihan — alasan … — confidence rendah/sedang/tinggi`.

## 1. Sebuah API HTTP stateless sudah dikemas sebagai container. Traffic berubah dari hampir nol menjadi ribuan request, setiap request selesai dalam beberapa detik. Tim kecil ingin mengurangi pengelolaan server dan tidak membutuhkan Kubernetes API. Pilih platform awal yang paling sesuai.

- A. Compute Engine dengan kapasitas tetap untuk beban puncak.
- B. GKE Standard dengan tim mengelola konfigurasi cluster.
- C. Cloud Run service dengan autoscaling yang disesuaikan.
- D. VM on-premises dengan kapasitas tambahan permanen.

## 2. Dua aplikasi berjalan di region Google Cloud berbeda. Keduanya harus berada dalam satu VPC dengan IP internal, rentang alamat tidak tumpang tindih, dan akses antarlayanan dibatasi. Desain mana paling sesuai?

- A. Satu subnet global yang dipakai semua region.
- B. Satu VPC dengan subnet regional serta firewall rules sesuai kebutuhan.
- C. Dua VPC wajib dibuat karena setiap VPC terikat satu region.
- D. IP publik pada semua VM agar koneksi lintas region dimungkinkan.

## 3. Aplikasi pesanan memakai MySQL, transaksi relasional, dan SQL joins. Bebannya masih muat pada satu primary; tim ingin perubahan aplikasi minimal serta mengurangi pekerjaan patching dan backup. Pilihan awal terbaik?

- A. Cloud SQL for MySQL, dengan kapasitas dan HA yang dinilai sesuai kebutuhan.
- B. BigQuery sebagai database utama semua transaksi pesanan.
- C. Firestore dengan penulisan ulang model data dan pola query.
- D. MySQL di Compute Engine dengan seluruh operasi dikelola tim.

## 4. Workload di AWS perlu membaca satu bucket Cloud Storage. Identitas AWS sudah tersedia; kebijakan melarang private key jangka panjang. Pendekatan paling sesuai?

- A. Service account key disimpan di image container.
- B. Bucket dapat dibaca publik, sedangkan namanya dirahasiakan.
- C. Akun pengguna bersama dengan hak Project Owner.
- D. Workload Identity Federation dengan batas identitas dan izin bucket minimum.

## 5. Saat simulasi bencana, layanan berhenti pukul 10:00, kembali pukul 10:40, dan data terakhir yang dapat dipulihkan berasal dari 09:50. Target RTO 30 menit dan RPO 15 menit. Apa hasil evaluasinya?

- A. Kedua target terpenuhi.
- B. Target RTO tidak terpenuhi; target RPO terpenuhi.
- C. Target RTO terpenuhi; target RPO tidak terpenuhi.
- D. Kedua target tidak terpenuhi.

## 6. Setelah order tersimpan, layanan email dan analitik harus memproses event secara independen. Checkout tidak boleh menunggu kedua consumer. Sistem boleh mengirim event lebih dari sekali. Desain terbaik?

- A. Checkout memanggil kedua consumer secara sinkron dan menunggu selesai.
- B. Kedua consumer berbagi satu file lokal pada instance checkout.
- C. Pub/Sub dengan subscription terpisah dan consumer idempotent.
- D. Semua proses dijalankan berurutan dalam transaksi database checkout.

## 7. Tim analitik menjalankan SQL agregasi atas histori event puluhan terabyte. Workload ini tidak melayani transaksi checkout; tim tidak ingin mengelola cluster database. Layanan utama yang paling sesuai?

- A. BigQuery.
- B. Cloud SQL sebagai satu database untuk seluruh histori analitik.
- C. Memorystore sebagai penyimpanan permanen histori.
- D. Persistent Disk tanpa mesin pemroses query.

## 8. Sewa data center akan berakhir dalam tiga bulan. Sebagian aplikasi sudah containerized, tetapi integrasi legacy wajib tetap on-premises selama dua tahun. Tim operasi kecil. Strategi mana paling dapat dipertanggungjawabkan?

- A. Tulis ulang seluruh aplikasi sebelum memindahkan workload apa pun.
- B. Pindahkan semuanya sekaligus termasuk integrasi yang wajib tetap on-premises.
- C. Tunda seluruh migrasi sampai semua legacy diganti dua tahun lagi.
- D. Petakan dependency, siapkan hybrid connectivity, lakukan pilot dan migrasi bertahap dengan rollback.

## 9. Revisi baru aplikasi berisiko menaikkan error rate. Schema database kompatibel dengan revisi lama. Anda harus membatasi dampak pengguna dan dapat kembali cepat. Pendekatan terbaik?

- A. Arahkan 100% traffic ke revisi baru lalu hanya pantau penggunaan CPU.
- B. Canary rollout, pantau error/latency yang terkait SLO, lalu lanjutkan atau rollback.
- C. Gunakan versi library terbaru sebagai satu-satunya bukti kesiapan.
- D. Matikan alert selama deployment agar tidak mengganggu tim.

## 10. Retailer ingin AI menghasilkan deskripsi produk. Atribut harus sesuai data supplier, dan setiap usulan wajib disetujui staf sebelum masuk katalog produksi. PILIH DUA langkah paling penting.

- A. Tulis langsung keluaran model ke katalog agar latensi paling rendah.
- B. Gunakan data supplier sebagai konteks dan evaluasi akurasi pada contoh representatif.
- C. Gunakan prompt yang lebih panjang sebagai pengganti seluruh pemeriksaan manusia.
- D. Sediakan antrean approve/reject/edit dan simpan jejak keputusan sebelum publikasi.
