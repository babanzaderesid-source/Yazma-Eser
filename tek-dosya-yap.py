#!/usr/bin/env python3
"""Üst klasördeki index.html + veri.js + harita.js dosyalarını tek bir HTML dosyasında birleştirir.

Kullanım (bu klasörün içinden):  python3 tek-dosya-yap.py
Çıktı: tek-dosya-surum.html

Tek dosyalık sürüm, siteyi Claude'da "artifact" olarak yayımlamak ya da
tek bir dosya hâlinde birine göndermek için kullanılır. Asıl kaynak her zaman
üst klasördeki üç dosyadır; içerik değişince bu betik yeniden çalıştırılır.
"""
from pathlib import Path

here = Path(__file__).resolve().parent
root = here.parent

html = (root / "index.html").read_text(encoding="utf-8")
for name in ("harita.js", "veri.js"):
    tag = f'<script src="{name}"></script>'
    if html.count(tag) != 1:
        raise SystemExit(f"index.html içinde beklenen satır bulunamadı: {tag}")
    body = (root / name).read_text(encoding="utf-8")
    if "</script" in body:
        raise SystemExit(f"{name} içinde '</script' geçiyor; tek dosyaya gömülemez.")
    html = html.replace(tag, "<script>\n" + body + "\n</script>")

out = here / "tek-dosya-surum.html"
out.write_text(html, encoding="utf-8")
print(f"Yazıldı: {out.name} ({len(html.encode('utf-8')) // 1024} KB)")
