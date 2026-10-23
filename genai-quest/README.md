# GenAI Quest — AWS AIP-C01 foundation checkpoint

Buka `GenAI-Quest.html` di browser. Satu file ini bekerja offline tanpa installation, AWS account, CDN, backend, atau paid API. Preview lokal memakai `dist/index.html` dengan isi sama.

Mulai: Dashboard → Belajar terpandu → empat tahap → latihan dan lab → checkpoint milestone. Diagnostic dapat dilewati. Urutan fondasi: Foundation models & Bedrock → Prompt/RAG/fine-tuning → RAG → Embeddings dan cosine lab. Jalur tujuh hari mengelompokkan 14 lessons fondasi, bukan seluruh kursus atau jaminan siap ujian.

## Fitur tersedia

- Dashboard dengan empat milestone berbasis bukti, empat integration checkpoints, dan mode belajar terpandu empat tahap.
- 14 bilingual lessons, objectives, mechanism, analogies with limits, worked examples, misconceptions, sources, focus mode.
- Branching concept map dan list alternative; 56 istilah glossary, comparison tables, Guess the concept.
- 42 soal orisinal dengan penjelasan setiap opsi, retry, diagnostic dan error log aktual.
- 7 labs lokal: adaptation strategy, cosine/storage, chunk windows, metadata scope, RAG diagnosis, JSON contracts, policy AND.
- Notes, bookmark, confused flag, simple spaced review, XP tanpa farming retry, export/import JSON tervalidasi.

## Penyimpanan

localStorage jika browser mengizinkan. Ia khusus browser/origin/perangkat; perubahan port, private mode, clear browser data dan file-origin policy dapat memengaruhinya. Bila tidak tersedia, aplikasi menampilkan session-only. Gunakan Export dan simpan JSON. Import mengganti progres setelah file valid dan konfirmasi UI. PDF lokal opsional tidak diunggah atau disertakan dalam export.

## Batas cakupan

Sumber: `AWSCertifiedGenerativeAIDeveloper.pdf`, 682 halaman. Semua halaman diindeks; 1–74 dibaca, 17–74 diajarkan. 75–682 belum dibaca substantif dan belum dibuat lesson. Lihat SOURCES.md, COVERAGE.md dan STATE.md. Ekstraksi teks seluruh PDF bukan bukti telah membacanya.

Penjelasan dan latihan orisinal. Tidak ada slides/gambar PDF di artifact distribusi. Research files untuk pembacaan pribadi tidak termasuk paket pengguna. Versi HTTPS privat disiapkan melalui Sites atas permintaan akses ChatGPT web pada 23 October. PDF dan research files tidak dimasukkan ke publikasi.

## Learning evidence

Baca/recall bebas = self-assessment. Practice = jawaban aktual. Jawaban salah atau confused = review. Stronger evidence membutuhkan seluruh 3 soal lesson dijawab benar berulang dengan jarak ≥24 jam serta tidak ada latest error/confused. Ini heuristik, bukan ukuran mastery tervalidasi atau prediksi nilai ujian.

10 XP per soal unik yang berhasil, 15 XP per lab challenge unik, 20 XP per checkpoint unik; membuka lesson atau menandai baca tidak memberi XP. Lab XP menandai mission check sederhana, bukan proficiency cloud.

## Melanjutkan pengembangan

Edit `dist/content.js`, `dist/practice.js`, `dist/app.js`, `dist/experience.js`, `dist/style.css`, lalu jalankan `python3 build.py`. Source PDF dan `sources/` tidak diedit. Baca checkpoint sebelum menambah bab. Jangan mengubah status coverage hanya karena halaman diberi mapping.

## ChatGPT web dan perangkat lain

Versi online menggunakan HTTPS privat dan akun ChatGPT yang sama. Progres tetap milik browser/origin, tanpa sinkronisasi otomatis. Export JSON dari browser lama dan import pada versi online untuk memindahkannya. File export dapat berisi catatan Anda; simpan sendiri. Riwayat baru maupun lama tetap dapat diimport setelah validasi.

## Milestone bukan prediksi nilai

Semua jawaban practice terbaru pada modul harus benar, lab checks terkait terpenuhi, dan checkpoint terakhir benar tanpa penanda bingung. Jawaban salah berikutnya mengembalikan status perlu review. Materi boleh dijelajahi kapan pun, termasuk checkpoint, tanpa membuka kunci berbasis XP.
