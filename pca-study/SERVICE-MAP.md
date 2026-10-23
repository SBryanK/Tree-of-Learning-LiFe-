# Peta konsep awal

Ruang lingkup: orientasi untuk diagnostic, belum katalog lengkap PCA. Pelajari sesudah baseline. Pilihan layanan bergantung requirement, konfigurasi, region, quota, dan pengujian.

- Menjalankan aplikasi → [Cloud Run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run) untuk endpoint/container; bandingkan nanti dengan GKE dan Compute Engine.
- Menyimpan transaksi → [Cloud SQL](https://docs.cloud.google.com/sql/docs/mysql/introduction) untuk relational engine terkelola; bandingkan nanti dengan Spanner dan Firestore.
- Menganalisis histori → [BigQuery](https://docs.cloud.google.com/bigquery/docs/introduction) untuk analitik; bedakan query agregasi dengan transaksi aplikasi.
- Mengirim event antarservice → [Pub/Sub](https://docs.cloud.google.com/pubsub/docs/overview); bedakan dengan perintah pekerjaan bertarget.
- Menghubungkan workload → [VPC](https://docs.cloud.google.com/vpc/docs/vpc); pelajari scope jaringan dan subnet.
- Identitas workload eksternal → [Workload Identity Federation](https://docs.cloud.google.com/iam/docs/workload-identity-federation); bedakan identitas, credential, dan izin.
- Mengukur kualitas layanan → [SLO](https://sre.google/workbook/implementing-slos/); hubungkan dengan error, latency, dan pengalaman pengguna.

## Cheatsheet kecil

| Konsep | Fungsi / kapan dipilih | Alternatif / batas penting | Mnemonic |
|---|---|---|---|
| Cloud Run service | Endpoint HTTP/gRPC dengan operasi platform terkelola | GKE bila perlu kontrol Kubernetes; local filesystem container tidak menjadi penyimpanan permanen | Request → container |
| Cloud SQL | MySQL/PostgreSQL/SQL Server terkelola | Tetap nilai kapasitas, HA, query, dan koneksi; managed bukan tanpa konfigurasi | Relational engine yang familiar |
| BigQuery | Analitik data dengan SQL | Bukan pilihan otomatis untuk jalur transaksi OLTP; optimalkan pemindaian dan workload | Sejarah → agregasi |
| Pub/Sub | Publisher/subscriber untuk komunikasi asynchronous | Delivery dan retry perlu dipahami; buat consumer aman terhadap duplikasi sesuai mode yang dipakai | Publish sekali, subscriber bekerja sendiri |
| VPC — Virtual Private Cloud | Jaringan virtual global dengan subnet regional | Firewall/routing dan lokasi resource tetap harus dikonfigurasi | VPC global; subnet regional |
| WIF — Workload Identity Federation | Menukar identitas eksternal untuk akses berumur pendek | Direct resource access atau impersonation tergantung dukungan; tetap perlu IAM minimum | Identitas dipercaya, izin dibatasi |

Referensi per baris: tautan pada peta di atas, diperiksa 13 Oktober 2026. Mnemonic adalah alat ingat tutor, bukan definisi lengkap atau padanan identik AWS/Tencent.
