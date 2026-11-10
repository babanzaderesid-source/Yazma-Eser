# Yazma Eserler Haritası — devir notu

Bu not, projeyi başka bir bilgisayarda ve başka bir Claude hesabında sürdürmek için yazıldı. Yeni hesaptaki Claude bu konuşmayı, önceki hesabın proje belgelerini ve yayımlanan sayfayı göremez; bilmesi gereken her şey bu klasördedir.

Son güncelleme: 10 Kasım 2026

---

## 1. Yeni bilgisayarda nasıl başlanır

1. `YazmaEserler` klasörünün tamamını yeni bilgisayara taşıyın (USB bellek, bulut klasörü ya da GitHub deposu üzerinden).
2. Siteyi görmek için `index.html` dosyasına çift tıklayın. İnternet bağlantısı gerekir (yazı tipleri ve harita kütüphanesi internetten yüklenir). Başka kurulum gerekmez.
3. Claude'da yeni bir sohbet açın; bu notu (`devir/DEVIR-NOTU.md`) ve `veri.js` dosyasını sohbete ekleyin. Tasarım ya da harita üzerinde değişiklik isteyecekseniz `index.html` dosyasını da ekleyin. Masaüstü uygulamasında klasörün kendisini bağlamak da olur.
4. İlk mesaj olarak aşağıdaki metni kullanabilirsiniz.

### Claude'a verilecek ilk mesaj

> Ekteki devir notunu oku. "Yazma Eserler Haritası" adlı TÜBİTAK 2204-A proje sitesini kaldığı yerden sürdüreceğiz. Site dosyaları ekte (ya da bağlı klasörde): `index.html`, `veri.js`, `harita.js`. Notun 4. bölümündeki kararlara ve 6. bölümündeki veri yapısına uy; yeni kayıt eklerken her bilgiyi kaynağıyla doğrula ve kaynağı kayda yaz. İlk iş olarak 8. bölümdeki yapılacaklar listesini göster ve nereden başlamamı önerdiğini söyle.

### Yeni hesapta kalıcı proje talimatı olarak kullanılabilecek metin

> Bu proje, dünyadaki yazma eser kütüphanelerini haritada gösteren çok dilli bir sitedir (TÜBİTAK 2204-A). İlk aşama Türkiye'dir; diller Türkçe ve İngilizce. Yerleşim: solda harita (%30), sağda bilgi paneli (%70). İçerik `veri.js` dosyasında tutulur; her metin `{ tr, en }` biçimindedir. Her kütüphane ve eser kaydı en az bir kaynakla yazılır; doğrulanamayan bilgi eklenmez ya da "teyit edilecek" diye işaretlenir. Eser görselleri izinli fotoğraf gelene kadar temsilî çizimdir ve sitede öyle etiketlenir.

---

## 2. Proje nedir

- Amaç: dünyadaki yazma eser kütüphanelerini harita üzerinde gösteren bir site. Kütüphaneye tıklanınca kütüphane bilgisi ve oradaki eserler, esere tıklanınca eserin künyesi, görseli ve ne anlama geldiği görülür.
- Çerçeve: TÜBİTAK 2204-A (lise öğrencileri araştırma projeleri) için hazırlanıyor.
- Aşamalar: önce Türkiye, sonra ülke ülke bütün dünya.
- Dil planı: her ülke kendi yerel diliyle açılır (ör. İtalya için İtalyanca), yanında küresel erişim için İngilizce ve TÜBİTAK/araştırma için Türkçe bulunur. Sağ üstteki düğme dili değiştirir. Şu an yalnızca Türkçe ve İngilizce var.

## 3. Şu anki durum

- Site çalışıyor: harita, kütüphane sayfaları, eser sayfaları, TR/EN geçişi, arama ve şehir filtresi var.
- İçerik: 14 şehirde 27 kütüphane, 15 eser kaydı. 5 kayıt UNESCO Dünya Belleği etiketli.
- 20 kütüphanenin eser kaydı yok. Manisa, Çorum Hasan Paşa, Kastamonu ve Erzurum kayıtları yalnızca birer cümle.
- GitHub: dosyalar GitHub Pages'e yüklenmeye hazır; yükleme henüz yapılmadı (yapıldıysa depo adresini buraya yazın: ............). Adımlar `README.md` içinde.
- Önceki hesapta site ayrıca Claude'da özel bir sayfa (artifact) olarak yayımlanmıştı. O sayfa yalnızca eski hesaba açıktır; yeni hesapta gerekirse `devir/tek-dosya-surum.html` dosyasından yeniden yayımlanır.

## 4. Verilen kararlar

| Konu | Karar |
|---|---|
| Yerleşim | Solda harita, sağda bilgi paneli. Varsayılan oran %30 / %70; aradaki çubuk sürüklenerek %20–%65 arasında değişir. Dar ekranda harita üstte, bilgi altta. |
| Dil | Sağ üstte TR / EN düğmesi. Varsayılan Türkçe. Seçim tarayıcıda hatırlanır. |
| Akış | Harita → kütüphane sayfası → eser sayfası. Eser sayfasında künye, "Nedir?", "Neden önemli?" ve kaynaklar. |
| Harita | Sokak haritası değil; sayfaya gömülü sınır verisi (dünya ülkeleri + Türkiye'nin 81 ili). Yakın kütüphaneler sayı balonunda toplanır; en yakın ölçekte hâlâ üst üste binenler bir çember üzerine açılır. |
| Görseller | Şimdilik kodla çizilen temsilî görseller (cilt, harita, kitap sırtları) ve "Temsilî görsel" etiketi. Gerçek fotoğraflar izin alınarak eklenecek. |
| Kaynak | Her kayıtta kaynak listesi gösterilir. |
| Görünüm | Lacivert (lapis), altın ve sürh kırmızısı; başlıklarda Literata, arayüzde IBM Plex Sans. Açık ve koyu tema desteklenir. |

## 5. Dosyalar

| Dosya | İçerik | Düzenlenir mi |
|---|---|---|
| `index.html` | Tasarım (CSS), sayfa mantığı ve harita kodu | Tasarım/işlev değişikliğinde |
| `veri.js` | Diller, ülkeler, kaynaklar, kütüphaneler, eserler, arayüz metinleri | İçerik eklerken hep burası |
| `harita.js` | Harita sınır verisi (`window.YEH_GEO`) | Hayır |
| `README.md` | GitHub Pages adımları ve kayıt ekleme kılavuzu | Gerektikçe |
| `devir/DEVIR-NOTU.md` | Bu not | Durum değiştikçe güncelleyin |
| `devir/tek-dosya-surum.html` | Sitenin tek dosyada birleşmiş hâli | Elle değil; betikle üretilir |
| `devir/tek-dosya-yap.py` | Üç dosyayı tek dosyada birleştiren betik | Hayır |

`devir` klasörünün GitHub'a yüklenmesi gerekmez; yüklenirse de zararı olmaz.

## 6. Veri yapısı (`veri.js`)

- `LANGS`: diller. Yeni dil için `it: { label: "IT", name: "Italiano" }` gibi bir satır eklenir.
- `COUNTRIES`: ülkeler. `iso` haritadaki ülke kodudur (ISO 3166-1 sayısal; Türkiye "792"), `langs` o ülkede sunulan dillerdir.
- `SRC`: tekrar kullanılan kaynaklar (`t` başlık, `u` adres).
- `INST`: bağlı kurum adları.
- `LIBRARIES`: kütüphaneler. Alanlar: `id`, `country`, `city`, `coord: [boylam, enlem]`, `name`, `short`, `founded` (isteğe bağlı), `founder` (isteğe bağlı), `inst`, `records` (isteğe bağlı; YEK portalındaki kayıt sayısı), `desc`, `sources`.
- `WORKS`: eserler. Alanlar: `id`, `lib` (kütüphane `id`'si), `type` (`cilt` / `harita` / `koleksiyon`), `tone` (`visne` / `lacivert` / `yesil` / `kahve` / `siyah`), `unesco` (isteğe bağlı yıl), `title`, `orig` (isteğe bağlı; özgün yazıyla ad), `author`, `date`, `lang`, `shelf` (yer numarası), `shelfEn` (isteğe bağlı), `copy` (nüsha bilgisi), `what`, `why`, `sources`.
- `UI`: arayüz metinleri.

Kurallar: her metin `{ tr: "...", en: "..." }`; `id` yalnızca küçük İngilizce harf, rakam ve tire; çevirisi olmayan metin İngilizceye düşer.

## 7. Teknik notlar (Claude için)

- Kütüphaneler: D3 7.9.0 ve topojson 3.0.2, cdnjs üzerinden. Yazı tipleri Google Fonts'tan.
- Harita: `d3.geoMercator`, Türkiye illerine göre 1000×460 birimlik bir kutuya oturtulur. Zemin katmanı `d3.zoom` ile ölçeklenir; iğneler ayrı bir katmanda ekran koordinatıyla çizilir, bu yüzden boyutları sabittir.
- Kümeleme: iğneler 24 px yarıçapla gruplanır. Yakınlaştırma tavanı taban ölçeğin 30 katıdır; tavanda gruplama yarıçapı 80 px olur ve birden fazla üyesi olan gruplar çember üzerine açılır (`drawPins`).
- Adresler: `#lib-<id>` ve `#work-<id>`. Tarayıcıda saklananlar: `yeh-lang` (dil), `yeh-mapw` (harita genişliği).
- Temsilî görseller `plate(w)` işleviyle SVG olarak üretilir.
- Harita verisi Natural Earth'ten (kamu malı): 1:50m dünya ülkeleri ve 1:10m il sınırları, sadeleştirilip topojson'a çevrildi. İl adları Türkçe yazımla düzeltildi.
- Sokak haritası ve uzak görsel kullanılmamasının nedeni, sitenin ilk olarak Claude'da yayımlanan sayfa olarak kurulmasıdır; o ortam dış görsel ve harita karosu yüklemez. GitHub Pages'te bu sınır yoktur: istenirse gerçek harita karolarına (ör. Leaflet + OpenStreetMap) ve dosya olarak eklenen fotoğraflara geçilebilir. Bu, verilmiş bir karar değil, açık bir seçenektir.
- Denetim durumu: ilk sürüm ekran görüntüsüyle kontrol edildi. Sonradan eklenen çember açılımı ve dört dosyalı GitHub sürümü yalnızca hata denetiminden geçti (hata yok); görünümlerine gözle bakılmadı.

## 8. Yapılacaklar

1. GitHub Pages'e yükleme (adımlar `README.md` içinde).
2. İstanbul'da en yakın ölçekteki çember açılımına gözle bakmak; etiketler üst üste biniyorsa düzeltmek.
3. Eser kaydı olmayan 20 kütüphane için en az birer eser seçip yazmak.
4. Kısa kalan dört kütüphane kaydını (Manisa, Çorum Hasan Paşa, Kastamonu, Erzurum) tamamlamak: kuruluş, bina, koleksiyon.
5. Koordinatları kesinleştirmek (şu an yaklaşık).
6. Teyit bekleyen bilgiler (9. bölüm).
7. İzinli eser ve kütüphane fotoğraflarını sağlamak; temsilî çizimlerin yerine koymak.
8. Sonraki ülkeyi ve yerel dilini eklemek.

## 9. Teyit bekleyen bilgiler

- Seyahatnâme'nin yer numaraları (Topkapı, Bağdat Köşkü 304, 305, 307, 308) ve Kitâb-ı Bahriyye'nin Süleymaniye nüshası (Ayasofya 2612) kaynaktan doğrulanamadı; katalogdan bakılmalı.
- "YEK portalında kayıt" sayıları portal.yek.gov.tr arama sonuçlarından alındı. Bunlar katalog kaydı sayısıdır (basma eserler dahil), cilt sayısı değildir. Rapora girmeden önce portaldan yeniden bakılmalı.
- Kuruluş tarihleri çoğunlukla ikincil kaynaklardan; TDV İslâm Ansiklopedisi maddeleriyle karşılaştırılmalı. Özellikle: Beyazıt (koleksiyonun kuruluşu), Köprülü (1661), Hacı Selim Ağa (1782), Vahit Paşa (1811), Raşit Efendi.
- Mesnevî'nin 1278 tarihli nüshasının yaprak sayısı kaynaklarda farklı veriliyor (312 ve 325); bu yüzden siteye yazılmadı.
- Dîvânu Lugâti't-Türk'ün bulunuş yılı sitede 1914 olarak geçiyor (kaynak: Ersoy 2018 ve DergiPark'taki Ali Emîrî makalesi).

## 10. Mevcut içerik

**Kütüphaneler (27).** İstanbul (12): Süleymaniye, Millet, Beyazıt, Nuruosmaniye, Köprülü, Atıf Efendi, Ragıp Paşa, Hacı Selim Ağa, Topkapı Sarayı Müzesi Kütüphanesi, İstanbul Üniversitesi Nadir Eserler, Türk ve İslam Eserleri Müzesi, Kandilli Rasathanesi. Diğer şehirler: Edirne Selimiye, Bursa İnebey, Kütahya Vahit Paşa, Manisa, Konya (Mevlânâ Müzesi, Yusuf Ağa, Bölge), Ankara Millî Kütüphane, Çorum Hasan Paşa, Amasya Beyazıt, Kastamonu, Kayseri Raşit Efendi, Sivas Ziya Bey, Erzurum, Diyarbakır Ziya Gökalp.

**Eserler (15).**

| Eser | Kütüphane | Yer numarası |
|---|---|---|
| Dîvânu Lugâti't-Türk | Millet | Ali Emîrî, Arabî 4189 |
| Cerrâhiyyetü'l-Hâniyye | Millet | Ali Emîrî, Tıp 79 |
| Pîrî Reis'in Dünya Haritası | Topkapı | Revan Köşkü 1633 mük. |
| Kitâb-ı Bahriyye (saray nüshası) | Topkapı | Hazine 642 |
| Evliyâ Çelebi Seyahatnâmesi | Topkapı | Bağdat Köşkü 304, 305, 307, 308 |
| Cezerî, Kitâb fî Ma'rifeti'l-Hiyel | Topkapı | III. Ahmed 3472 |
| Sûrnâme-i Hümâyûn | Topkapı | Hazine 1344 |
| Sûrnâme-i Vehbî | Topkapı | III. Ahmed 3593 |
| İbn Sînâ Yazmaları Koleksiyonu | Süleymaniye | çeşitli koleksiyonlar |
| Kitâb-ı Bahriyye (Ayasofya nüshası) | Süleymaniye | Ayasofya 2612 |
| Mesnevî (1278) | Mevlânâ Müzesi | Müzelik Kitaplar no. 51 |
| Beyân-ı Menâzil-i Sefer-i Irâkeyn | İÜ Nadir Eserler | TY 5964 |
| el-Fütûhâtü'l-Mekkiyye (müellif hattı) | TİEM | Evkaf Müzesi 1845–1881 |
| el-Fütûhâtü'l-Mekkiyye (tezhipli nüsha) | Yusuf Ağa | Env. 6633 |
| Kandilli Rasathanesi El Yazmaları | Kandilli | rasathane koleksiyonu |

UNESCO Dünya Belleği etiketi taşıyanlar: Kandilli yazmaları (2001), İbn Sînâ yazmaları (2003), Seyahatnâme (2013), Dîvânu Lugâti't-Türk (2017), Pîrî Reis Haritası (2017). Mevlânâ'nın Külliyatı 2023'te kaydedildi; Mesnevî kaydında metin içinde anılıyor, etiket konmadı.

## 11. Kullanılan kaynaklar

- YEK Yazma Eserler Portalı — https://portal.yek.gov.tr/
- Dışişleri Bakanlığı, UNESCO Dünya Belleği kayıtları — https://www.mfa.gov.tr/unesco-info.tr.mfa
- TDV İslâm Ansiklopedisi: Kitâb-ı Bahriyye — https://islamansiklopedisi.org.tr/kitab-i-bahriyye
- TDV İslâm Ansiklopedisi: Cerrâhiyye-i İlhâniyye — https://islamansiklopedisi.org.tr/cerrahiyye-i-ilhaniyye
- TDV İslâm Ansiklopedisi: Cezerî — https://islamansiklopedisi.org.tr/cezeri-ismail-b-rezzaz
- TDV İslâm Ansiklopedisi: Surnâme — https://islamansiklopedisi.org.tr/surname
- TDV İslâm Ansiklopedisi: Beyân-ı Menâzil-i Sefer-i Irâkeyn — https://islamansiklopedisi.org.tr/beyan-i-menazil-i-sefer-i-irakeyn
- TDV İslâm Ansiklopedisi: Ali Emîrî Efendi — https://islamansiklopedisi.org.tr/ali-emiri-efendi
- Feyzi Ersoy, "Dîvânu Lugâti't-Türk, Ali Emiri Efendi'yi Nasıl Buldu?" (2018) — https://dergipark.org.tr/tr/download/article-file/1556102
- Mustafa S. Kaçalin, "Dîvânu luğâti't-türk" (2024) — https://aef.marmara.edu.tr/dosya/aef/dekanlik/etkinlikler/etkinlik-fotograflar/2024%20Etkinlik-Foto/DLT_Kacalin.pdf
- Konak & Ateşgöz, "Resimli Cerrahiyye-i İlhaniyye nüshaları" (2021) — https://dergipark.org.tr/en/download/article-file/1884693
- Karen Pinto, Pîrî Reis'in 1513 tarihli dünya haritası — https://dergipark.org.tr/tr/download/article-file/112216
- UNESCO, Evliya Çelebi's "Book of Travels" — https://en.unesco.org/silkroad/silk-road-themes/documentary-heritage/evliya-celebis-book-travels-topkapi-palace-museum-library-and
- UNESCO, The works of Ibn Sina in the Süleymaniye Manuscript Library — https://en.unesco.org/silkroad/silk-road-themes/documentary-heritage/works-ibn-sina-suleymaniye-manuscript-library
- Mehmet Önder, "Mevlâna'nın Eserlerinin Dünyadaki En Eski Yazma Nüshaları" (1991) — https://isamveri.org/pdfdrg/D030267/1991/1991_ONDERM.pdf
- Encyclopædia Iranica, "Konya ii. Persian manuscript collections" — https://www.iranicaonline.org/articles/konya-ii-persian-manuscript-collections/
- Mahmud Erol Kılıç, "el-Fütûhâtü'l-Mekkiyye" — https://kureansiklopedi.com/tr/detay/el-futuhatul-mekkiyye
- Ibn 'Arabi Society, "Six Printed Editions of al-Futūḥāt al-Makkīyah" — https://ibnarabisociety.org/?p=5390
- Gül Güney, "Konya Yusuf Ağa Yazma Eser Kütüphanesi'nde Müzehheb Bir Yazma" (2014) — https://dergipark.org.tr/en/download/article-file/275493
- Nevzat Kaya, "Süleymaniye Kütüphanesi" — https://kureansiklopedi.com/tr/detay/suleymaniye-kutuphanesi
- "Ziya Bey Yazma Eserler Kütüphanesi", Küre Ansiklopedi — https://kureansiklopedi.com/tr/detay/ziya-bey-yazma-eserler-kutuphanesi-33db5
- Diyarbakır Ziya Gökalp Yazma Eser Kütüphanesi üzerine makale — https://dergipark.org.tr/en/download/article-file/2353871
- Açıkgözoğlu & Yurdakul, "III. Ahmed Kütüphanesi'nde Kâğıt Oyma Tezyinatlı Fener" (2022) — https://dergipark.org.tr/en/download/article-file/2445231
- Yazma eser kütüphaneleri dökümü (AA / Haber7) — https://www.haber7.com/kultur/haber/882105-dunyanin-hazinesi-suleymaniyede

Araştırma sırasında ulaşılamayanlar: yek.gov.tr ana sayfası ve portalın kendisi otomatik okumaya kapalıydı (bilgiler arama sonuçlarındaki özetlerden alındı); YEK'in 2024 faaliyet raporu açılamadı. Kütüphane bazında yazma/basma sayıları için bu rapora elle bakmak yararlı olur.
