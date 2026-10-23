# Roadmap sementara

Asumsi tutor: 8 minggu × 6 jam = 48 jam. Deadline belum ditentukan. Ubah setelah diagnostic; bobot ujian tidak otomatis sama dengan kebutuhan waktu Anda.

| Minggu | Fokus | Bukti yang dihasilkan |
|---|---|---|
| 1 | Diagnostic; membaca requirements; resource hierarchy, IAM, region/zone | Baseline, satu decision record, teach-back |
| 2 | Compute dan deployment: Cloud Run, GKE, Compute Engine | Perbandingan 3 workload dan alasan pilihan |
| 3 | Data: object/file/block, transactional vs analytical, integration | Diagram aliran data dan keputusan penyimpanan |
| 4 | VPC, hybrid connectivity, routing, load balancing; security | Diagram network, trust boundary, akses minimum |
| 5 | Reliability, RTO/RPO, observability, SLO, biaya | Rencana DR, recovery drill di atas kertas, cost drivers |
| 6 | AI/ML dan generative AI sesuai guide; evaluasi, data, keamanan | Desain alur AI dengan review manusia dan metrik kualitas |
| 7 | Empat case studies resmi; migration, CI/CD, proses bisnis | Decision matrix per kasus, risiko dan rencana verifikasi |
| 8 | Skenario campuran dengan batas waktu; remediasi; recall tertunda | Error log ditutup dengan soal baru dan teach-back |

## Pola mingguan
Empat sesi × 60 menit: 10 menit recall, 25 menit konsep, 20 menit skenario, 5 menit catatan. Satu sesi × 120 menit: 60 menit case/lab terencana, 30 menit latihan baru, 30 menit review. Total 360 menit.

## Penyesuaian setelah diagnostic
Kesalahan berkeyakinan tinggi diprioritaskan sebagai dugaan miskonsepsi; jawaban benar dengan tebakan belum menjadi bukti penguasaan. Diagnostic kecil ini hanya baseline, bukan prediksi skor ujian. Ulang konsep secara heuristik pada +1, +3, +7, +14 hari sejak latihan aktual. Jadwal tersebut belum menjadi reminder otomatis.

## Peta cakupan resmi
Bobot perkiraan di bawah berasal dari [guide yang diperiksa 13 Oktober 2026 (Asia/Singapore)](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf).

| Domain | Bobot | Lokasi guide | Materi GCP dari lampiran | Hub awal |
|---|---:|---|---|---|
| D1 Perencanaan dan desain arsitektur | 25% | hlm. 2–3, §1 | missing | partial: modul pengambilan keputusan |
| D2 Provisioning dan pengelolaan infrastruktur | 17,5% | hlm. 3–4, §2 | missing | missing: pelajaran mendalam |
| D3 Keamanan dan kepatuhan | 17,5% | hlm. 5, §3 | missing | missing: pelajaran mendalam |
| D4 Optimasi proses teknis dan bisnis | 15% | hlm. 5–6, §4 | missing | partial: prioritas dan trade-off |
| D5 Pelaksanaan solusi | 12,5% | hlm. 6, §5 | missing | missing: pelajaran mendalam |
| D6 Operasi dan keandalan solusi | 12,5% | hlm. 7, §6 | missing | partial: bukti dan verifikasi |

covered = seluruh kompetensi pada unit yang dinilai telah dibahas; partial = baru sebagian; missing = belum tersedia; outdated = bertentangan dengan sumber resmi terkini. Belum ada lampiran GCP yang bisa dinilai outdated. Ringkasan dan tautan sumber tidak sama dengan cakupan pelajaran penuh.
