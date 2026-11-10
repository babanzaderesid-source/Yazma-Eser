/* ============================================================
   VERİ — yeni kütüphane ya da eser eklemek için yalnızca bu bölüm düzenlenir.
   Her metin alanı dil koduna göre yazılır: { tr: "...", en: "..." }.
   Yeni bir dil (ör. İtalyanca) için LANGS'e "it" eklenir ve ilgili
   kayıtlara it: "..." alanı yazılır; eksik çeviri İngilizceye düşer.
   ============================================================ */
const LANGS = {
  tr: { label: "TR", name: "Türkçe" },
  en: { label: "EN", name: "English" }
};

/* Ülkeler: iso = ISO 3166-1 sayısal kod (harita katmanı), langs = o ülkede sunulan diller */
const COUNTRIES = {
  TR: { iso: "792", name: { tr: "Türkiye", en: "Türkiye" }, langs: ["tr", "en"] }
};

const SRC = {
  portal: { t: "YEK Yazma Eserler Portalı", u: "https://portal.yek.gov.tr/" },
  unesco: { t: "Dışişleri Bakanlığı: UNESCO Dünya Belleği kayıtları", u: "https://www.mfa.gov.tr/unesco-info.tr.mfa" },
  haber7: { t: "Yazma eser kütüphaneleri dökümü (AA / Haber7)", u: "https://www.haber7.com/kultur/haber/882105-dunyanin-hazinesi-suleymaniyede" },
  suleymaniye: { t: "Nevzat Kaya, “Süleymaniye Kütüphanesi”", u: "https://kureansiklopedi.com/tr/detay/suleymaniye-kutuphanesi" },
  aliemiri: { t: "TDV İslâm Ansiklopedisi, “Ali Emîrî Efendi”", u: "https://islamansiklopedisi.org.tr/ali-emiri-efendi" },
  dltErsoy: { t: "Feyzi Ersoy, “Dîvânu Lugâti’t-Türk, Ali Emiri Efendi’yi Nasıl Buldu?” (2018)", u: "https://dergipark.org.tr/tr/download/article-file/1556102" },
  dltKacalin: { t: "Mustafa S. Kaçalin, “Dîvânu luğâti’t-türk” (2024)", u: "https://aef.marmara.edu.tr/dosya/aef/dekanlik/etkinlikler/etkinlik-fotograflar/2024%20Etkinlik-Foto/DLT_Kacalin.pdf" },
  cerrahiyye: { t: "TDV İslâm Ansiklopedisi, “Cerrâhiyye-i İlhâniyye”", u: "https://islamansiklopedisi.org.tr/cerrahiyye-i-ilhaniyye" },
  cerrahiyye2: { t: "Konak & Ateşgöz, “Resimli Cerrahiyye-i İlhaniyye nüshaları” (2021)", u: "https://dergipark.org.tr/en/download/article-file/1884693" },
  piri: { t: "Karen Pinto, “Piri Reis’in 1513 Tarihli Dünya Haritası”, Osmanlı Araştırmaları", u: "https://dergipark.org.tr/tr/download/article-file/112216" },
  bahriye: { t: "TDV İslâm Ansiklopedisi, “Kitâb-ı Bahriyye”", u: "https://islamansiklopedisi.org.tr/kitab-i-bahriyye" },
  seyahat: { t: "UNESCO: Evliya Çelebi’s “Book of Travels”", u: "https://en.unesco.org/silkroad/silk-road-themes/documentary-heritage/evliya-celebis-book-travels-topkapi-palace-museum-library-and" },
  ibnsina: { t: "UNESCO: The works of Ibn Sina in the Süleymaniye Manuscript Library", u: "https://en.unesco.org/silkroad/silk-road-themes/documentary-heritage/works-ibn-sina-suleymaniye-manuscript-library" },
  cezeri: { t: "TDV İslâm Ansiklopedisi, “Cezerî, İsmâil b. Rezzâz”", u: "https://islamansiklopedisi.org.tr/cezeri-ismail-b-rezzaz" },
  surname: { t: "TDV İslâm Ansiklopedisi, “Surnâme”", u: "https://islamansiklopedisi.org.tr/surname" },
  ahmed3: { t: "Açıkgözoğlu & Yurdakul, “III. Ahmed Kütüphanesi’nde Kâğıt Oyma Tezyinatlı Fener”, Millî Saraylar (2022)", u: "https://dergipark.org.tr/en/download/article-file/2445231" },
  mesnevi: { t: "Mehmet Önder, “Mevlâna’nın Eserlerinin Dünyadaki En Eski Yazma Nüshaları” (1991)", u: "https://isamveri.org/pdfdrg/D030267/1991/1991_ONDERM.pdf" },
  iranica: { t: "Encyclopædia Iranica, “Konya ii. Persian manuscript collections”", u: "https://www.iranicaonline.org/articles/konya-ii-persian-manuscript-collections/" },
  menazil: { t: "TDV İslâm Ansiklopedisi, “Beyân-ı Menâzil-i Sefer-i Irâkeyn”", u: "https://islamansiklopedisi.org.tr/beyan-i-menazil-i-sefer-i-irakeyn" },
  futuhat: { t: "Mahmud Erol Kılıç, “el-Fütûhâtü’l-Mekkiyye”", u: "https://kureansiklopedi.com/tr/detay/el-futuhatul-mekkiyye" },
  futuhat2: { t: "Ibn ‘Arabi Society, “Six Printed Editions of al-Futūḥāt al-Makkīyah”", u: "https://ibnarabisociety.org/?p=5390" },
  yusufaga: { t: "Gül Güney, “Konya Yusuf Ağa Yazma Eser Kütüphanesi’nde Müzehheb Bir Yazma”, Akdeniz Sanat (2014)", u: "https://dergipark.org.tr/en/download/article-file/275493" },
  ziyabey: { t: "“Ziya Bey Yazma Eserler Kütüphanesi”, Küre Ansiklopedi", u: "https://kureansiklopedi.com/tr/detay/ziya-bey-yazma-eserler-kutuphanesi-33db5" },
  diyarbakir: { t: "Diyarbakır Ziya Gökalp Yazma Eser Kütüphanesi üzerine makale (DergiPark)", u: "https://dergipark.org.tr/en/download/article-file/2353871" }
};

const INST = {
  yek: { tr: "Türkiye Yazma Eserler Kurumu Başkanlığı (YEK)", en: "Manuscripts Institution of Türkiye (YEK)" },
  msb: { tr: "Millî Saraylar Başkanlığı", en: "Directorate of National Palaces" },
  ktb: { tr: "Kültür ve Turizm Bakanlığı", en: "Ministry of Culture and Tourism" },
  iu: { tr: "İstanbul Üniversitesi", en: "Istanbul University" },
  bu: { tr: "Boğaziçi Üniversitesi", en: "Boğaziçi University" }
};

const LIBRARIES = [
  /* ---------------- İSTANBUL ---------------- */
  { id: "suleymaniye", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9632, 41.0158],
    name: { tr: "Süleymaniye Yazma Eser Kütüphanesi", en: "Süleymaniye Manuscript Library" },
    short: { tr: "Süleymaniye", en: "Süleymaniye" },
    founded: { tr: "1918 (külliye: 1550–1557)", en: "1918 (complex: 1550–1557)" },
    inst: INST.yek, records: 249887,
    desc: {
      tr: "Türkiye'nin en büyük yazma eser kütüphanesi. Mimar Sinan'ın Kanuni Sultan Süleyman için yaptığı külliyenin iki medresesinde çalışır. İstanbul'un farklı semtlerindeki vakıf kütüphanelerinin koleksiyonları 1918'den başlayarak burada toplandı; Ayasofya, Fatih, Şehid Ali Paşa ve Esad Efendi gibi koleksiyonlar bugün burada korunuyor.",
      en: "The largest manuscript library in Türkiye. It occupies two madrasas of the complex Sinan built for Süleyman the Magnificent. From 1918 onward the collections of endowed libraries scattered across Istanbul were gathered here; the Ayasofya, Fatih, Şehid Ali Paşa and Esad Efendi collections are among those it keeps today."
    },
    sources: [SRC.suleymaniye, SRC.portal] },

  { id: "millet", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9508, 41.0184],
    name: { tr: "Millet Yazma Eser Kütüphanesi", en: "Millet Manuscript Library" },
    short: { tr: "Millet", en: "Millet" },
    founded: { tr: "1916", en: "1916" },
    founder: { tr: "Ali Emîrî Efendi", en: "Ali Emîrî Efendi" },
    inst: INST.yek, records: 86414,
    desc: {
      tr: "Diyarbakırlı kitap toplayıcısı Ali Emîrî Efendi'nin ömrü boyunca biriktirdiği, çoğu nadir ya da tek nüsha olan yaklaşık 16.000 ciltlik koleksiyonu millete bağışlamasıyla kuruldu. Kütüphaneye kendi adını değil “Millet” adını verdi ve ölümüne kadar müdürlüğünü yaptı.",
      en: "Founded when the Diyarbakır-born collector Ali Emîrî Efendi donated the roughly 16,000 volumes he had gathered over a lifetime, many of them rare or unique. He named the library not after himself but “Millet” (the Nation) and directed it until his death."
    },
    sources: [SRC.aliemiri, SRC.portal] },

  { id: "beyazit", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9640, 41.0107],
    name: { tr: "Beyazıt Yazma Eser Kütüphanesi", en: "Beyazıt Manuscript Library" },
    short: { tr: "Beyazıt", en: "Beyazıt" },
    founded: { tr: "Koleksiyon: 19. yüzyıl sonu", en: "Collection: late 19th century" },
    inst: INST.yek, records: 27032,
    desc: {
      tr: "Beyazıt Meydanı'nda, Osmanlı'nın devlet eliyle kurduğu ilk kütüphanenin yazma koleksiyonlarını barındırır. Beyazıt ve Veliyyüddin Efendi koleksiyonları en büyük bölümlerini oluşturur.",
      en: "On Beyazıt Square, it holds the manuscript collections of the first library founded by the Ottoman state itself. The Beyazıt and Veliyyüddin Efendi collections form its largest sections."
    },
    sources: [SRC.portal, SRC.haber7] },

  { id: "nuruosmaniye", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9706, 41.0102],
    name: { tr: "Nuruosmaniye Yazma Eser Kütüphanesi", en: "Nuruosmaniye Manuscript Library" },
    short: { tr: "Nuruosmaniye", en: "Nuruosmaniye" },
    founded: { tr: "1755", en: "1755" },
    inst: INST.yek, records: 9534,
    desc: {
      tr: "Kapalıçarşı'nın yanındaki Nuruosmaniye Külliyesi'nin kütüphanesi. Külliyeyi I. Mahmud başlattı, III. Osman tamamlattı; kütüphane padişah koleksiyonlarından gelen kitaplarla açıldı.",
      en: "The library of the Nuruosmaniye complex beside the Grand Bazaar. The complex was begun under Mahmud I and completed under Osman III; the library opened with books from the sultans' own collections."
    },
    sources: [SRC.portal, SRC.haber7] },

  { id: "koprulu", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9707, 41.0080],
    name: { tr: "Köprülü Yazma Eser Kütüphanesi", en: "Köprülü Manuscript Library" },
    short: { tr: "Köprülü", en: "Köprülü" },
    founded: { tr: "1661", en: "1661" },
    founder: { tr: "Köprülü ailesi (Köprülü Mehmed Paşa vakfı)", en: "The Köprülü family (endowment of Köprülü Mehmed Paşa)" },
    inst: INST.yek, records: 6046,
    desc: {
      tr: "Çemberlitaş'ta, Divanyolu üzerinde tek kubbeli küçük bir yapı. Bir cami ya da medreseye bağlı olmadan, kendi binasında kurulan Osmanlı vakıf kütüphanelerinin erken örneklerindendir.",
      en: "A small single-domed building on Divanyolu in Çemberlitaş. It is one of the early Ottoman endowed libraries to stand in a building of its own rather than inside a mosque or madrasa."
    },
    sources: [SRC.haber7, SRC.portal] },

  { id: "atif-efendi", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9596, 41.0157],
    name: { tr: "Atıf Efendi Yazma Eser Kütüphanesi", en: "Atıf Efendi Manuscript Library" },
    short: { tr: "Atıf Efendi", en: "Atıf Efendi" },
    founded: { tr: "1741", en: "1741" },
    founder: { tr: "Defterdar Mustafa Âtıf Efendi", en: "Mustafa Âtıf Efendi, chief treasurer" },
    inst: INST.yek, records: 16478,
    desc: {
      tr: "Vefa'da, hattat ve şair bir maliyeci olan Mustafa Âtıf Efendi'nin kurduğu vakıf kütüphanesi. Kütüphane görevlileri için yapılan lojmanlarıyla birlikte tasarlanmıştır.",
      en: "An endowed library in Vefa founded by Mustafa Âtıf Efendi, a treasury official who was also a calligrapher and poet. It was designed together with lodgings for its librarians."
    },
    sources: [SRC.haber7, SRC.portal] },

  { id: "ragip-pasa", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9575, 41.0090],
    name: { tr: "Ragıp Paşa Yazma Eser Kütüphanesi", en: "Ragıp Paşa Manuscript Library" },
    short: { tr: "Ragıp Paşa", en: "Ragıp Paşa" },
    founded: { tr: "1763", en: "1763" },
    founder: { tr: "Sadrazam Koca Ragıp Paşa", en: "Grand Vizier Koca Ragıp Paşa" },
    inst: INST.yek, records: 4776,
    desc: {
      tr: "Laleli'de, Ordu Caddesi üzerinde. Devlet adamı ve şair Koca Ragıp Paşa'nın kendi kitaplarını vakfederek kurduğu kütüphane.",
      en: "On Ordu Caddesi in Laleli. The statesman and poet Koca Ragıp Paşa founded it by endowing his own books."
    },
    sources: [SRC.haber7, SRC.portal] },

  { id: "haci-selim-aga", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [29.0185, 41.0245],
    name: { tr: "Hacı Selim Ağa Yazma Eser Kütüphanesi", en: "Hacı Selim Ağa Manuscript Library" },
    short: { tr: "Hacı Selim Ağa", en: "Hacı Selim Ağa" },
    founded: { tr: "1782", en: "1782" },
    founder: { tr: "Hacı Selim Ağa", en: "Hacı Selim Ağa" },
    inst: INST.yek, records: 6275,
    desc: {
      tr: "İstanbul'un Anadolu yakasındaki yazma eser kütüphanesi; Üsküdar'dadır. Üsküdar'daki tekke ve vakıf koleksiyonlarının bir bölümü de burada toplanmıştır.",
      en: "The manuscript library on Istanbul's Asian shore, in Üsküdar. Some of the lodge and endowment collections of Üsküdar were also brought together here."
    },
    sources: [SRC.portal] },

  { id: "topkapi", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9841, 41.0122],
    name: { tr: "Topkapı Sarayı Müzesi Kütüphanesi", en: "Topkapı Palace Museum Library" },
    short: { tr: "Topkapı Sarayı", en: "Topkapı Palace" },
    founded: { tr: "Saray koleksiyonu: 15. yüzyıldan itibaren", en: "Palace collection: from the 15th century" },
    inst: INST.msb,
    desc: {
      tr: "Osmanlı sarayının yüzyıllar boyunca biriken kitaplarını barındırır. Koleksiyonlar sarayda bulundukları yerin adını taşır: Hazine, Revan Köşkü, Bağdat Köşkü, III. Ahmed. Üçüncü avludaki III. Ahmed (Enderun) Kütüphanesi 18. yüzyıl başında bu kitapları bir araya getirmek için yaptırıldı. Resimli saray yazmalarının en zengin koleksiyonlarından biridir.",
      en: "It holds the books the Ottoman palace accumulated over centuries. The collections carry the names of the places in the palace where they were kept: Hazine (Treasury), Revan Kiosk, Baghdad Kiosk, Ahmed III. The Library of Ahmed III (Enderun Library) in the third courtyard was built in the early 18th century to bring these books together. It is one of the richest collections of illustrated court manuscripts."
    },
    sources: [SRC.ahmed3, SRC.haber7] },

  { id: "iu-nadir", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9622, 41.0118],
    name: { tr: "İstanbul Üniversitesi Nadir Eserler Kütüphanesi", en: "Istanbul University Rare Works Library" },
    short: { tr: "İÜ Nadir Eserler", en: "IU Rare Works" },
    founded: { tr: "Çekirdek koleksiyon: Yıldız Sarayı Kütüphanesi", en: "Core collection: Yıldız Palace Library" },
    inst: INST.iu,
    desc: {
      tr: "Beyazıt'ta, üniversitenin yazma ve nadir basma eserlerini barındırır. Koleksiyonun önemli bir bölümü II. Abdülhamid'in Yıldız Sarayı Kütüphanesi'nden gelir; yazmalar dillerine göre TY (Türkçe), AY (Arapça) ve FY (Farsça) kısaltmalarıyla numaralanır.",
      en: "In Beyazıt, it keeps the university's manuscripts and rare printed books. A large part of the collection comes from Abdülhamid II's Yıldız Palace Library; manuscripts are numbered by language as TY (Turkish), AY (Arabic) and FY (Persian)."
    },
    sources: [SRC.menazil] },

  { id: "tiem", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [28.9745, 41.0063],
    name: { tr: "Türk ve İslam Eserleri Müzesi", en: "Museum of Turkish and Islamic Arts" },
    short: { tr: "TİEM", en: "TİEM" },
    founded: { tr: "1914 (Evkaf-ı İslâmiye Müzesi adıyla)", en: "1914 (as the Museum of Islamic Endowments)" },
    inst: INST.ktb,
    desc: {
      tr: "Sultanahmet Meydanı'ndaki İbrahim Paşa Sarayı'nda. Cami, türbe ve tekkelerden toplanan vakıf eserleriyle kuruldu; yazma koleksiyonu erken dönem Kur'an sayfaları ve müellif hattı eserleriyle tanınır. Yazmalar hâlâ müzenin ilk adına göre “Evkaf Müzesi” numarasıyla anılır.",
      en: "In the İbrahim Paşa Palace on Sultanahmet Square. It was founded with endowed objects collected from mosques, tombs and dervish lodges; its manuscript collection is known for early Qur'an leaves and autograph works. The manuscripts are still cited by “Evkaf Müzesi” numbers, after the museum's first name."
    },
    sources: [SRC.futuhat] },

  { id: "kandilli", country: "TR", city: { tr: "İstanbul", en: "Istanbul" }, coord: [29.0600, 41.0627],
    name: { tr: "Kandilli Rasathanesi Kütüphanesi", en: "Kandilli Observatory Library" },
    short: { tr: "Kandilli", en: "Kandilli" },
    founded: { tr: "Rasathane: 1868", en: "Observatory: 1868" },
    inst: INST.bu,
    desc: {
      tr: "Boğaz'ın Anadolu yakasındaki tepede, Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü'nün kütüphanesi. Astronomi, matematik ve takvim üzerine yazmalarıyla bir bilim tarihi koleksiyonudur.",
      en: "On a hill above the Asian shore of the Bosphorus, this is the library of Boğaziçi University's Kandilli Observatory and Earthquake Research Institute. Its manuscripts on astronomy, mathematics and calendars make it a history-of-science collection."
    },
    sources: [SRC.unesco] },

  /* ---------------- ANADOLU VE TRAKYA ---------------- */
  { id: "selimiye", country: "TR", city: { tr: "Edirne", en: "Edirne" }, coord: [26.5594, 41.6781],
    name: { tr: "Selimiye Yazma Eser Kütüphanesi", en: "Selimiye Manuscript Library" },
    short: { tr: "Selimiye", en: "Selimiye" },
    inst: INST.yek, records: 11210,
    desc: {
      tr: "Mimar Sinan'ın ustalık eseri Selimiye Camii'nin külliyesinde. Edirne'nin cami ve medrese kitaplıklarından gelen yazmaları korur.",
      en: "In the complex of the Selimiye Mosque, Sinan's masterpiece. It keeps the manuscripts that came from Edirne's mosque and madrasa libraries."
    },
    sources: [SRC.portal] },

  { id: "inebey", country: "TR", city: { tr: "Bursa", en: "Bursa" }, coord: [29.0577, 40.1840],
    name: { tr: "İnebey Yazma Eser Kütüphanesi", en: "İnebey Manuscript Library" },
    short: { tr: "İnebey", en: "İnebey" },
    founded: { tr: "Medrese: erken Osmanlı dönemi", en: "Madrasa: early Ottoman period" },
    inst: INST.yek,
    desc: {
      tr: "Erken Osmanlı dönemine ait İnebey Medresesi'nde. Bursa'nın Ulucami, Orhan ve Haraççıoğlu gibi eski kitaplıklarından gelen koleksiyonları bir araya getirir.",
      en: "Housed in the early Ottoman İnebey Madrasa. It brings together collections from Bursa's old libraries, among them Ulucami, Orhan and Haraççıoğlu."
    },
    sources: [SRC.portal] },

  { id: "vahit-pasa", country: "TR", city: { tr: "Kütahya", en: "Kütahya" }, coord: [29.9787, 39.4186],
    name: { tr: "Vahit Paşa Yazma Eser Kütüphanesi", en: "Vahit Paşa Manuscript Library" },
    short: { tr: "Vahit Paşa", en: "Vahit Paşa" },
    founded: { tr: "1811", en: "1811" },
    founder: { tr: "Mehmed Vahid Paşa", en: "Mehmed Vahid Paşa" },
    inst: INST.yek, records: 3994,
    desc: {
      tr: "Kütahya'da Ulu Cami'nin yanında, Vahid Paşa'nın vakfettiği kitaplarla kurulan kütüphane.",
      en: "Beside the Great Mosque in Kütahya, founded with the books Vahid Paşa endowed."
    },
    sources: [SRC.portal] },

  { id: "manisa", country: "TR", city: { tr: "Manisa", en: "Manisa" }, coord: [27.4290, 38.6128],
    name: { tr: "Manisa Yazma Eser Kütüphanesi", en: "Manisa Manuscript Library" },
    short: { tr: "Manisa", en: "Manisa" },
    inst: INST.yek,
    desc: {
      tr: "Şehzadeler şehri Manisa'nın medrese ve vakıf kitaplıklarından gelen yazmaları korur. Ayrıntılı kayıt eklenecek.",
      en: "Keeps the manuscripts from the madrasa and endowment libraries of Manisa, the city where Ottoman princes were trained. A fuller record will be added."
    },
    sources: [SRC.portal] },

  { id: "mevlana", country: "TR", city: { tr: "Konya", en: "Konya" }, coord: [32.5047, 37.8707],
    name: { tr: "Mevlânâ Müzesi Kütüphanesi", en: "Mevlânâ Museum Library" },
    short: { tr: "Mevlânâ Müzesi", en: "Mevlânâ Museum" },
    founded: { tr: "Dergâh kitaplığı; müze 1927'den beri", en: "Lodge library; a museum since 1927" },
    inst: INST.ktb,
    desc: {
      tr: "Mevlânâ Celâleddîn-i Rûmî'nin türbesinin bulunduğu dergâhta. Konya'daki en önemli Farsça yazma koleksiyonudur; Mevlevîliğin erken dönem yazmalarını ve Mevlânâ'nın eserlerinin en eski nüshalarını barındırır.",
      en: "In the dervish lodge that holds the tomb of Mevlânâ Jalāl al-Dīn Rūmī. It is the most important collection of Persian manuscripts in Konya, with early Mevlevi manuscripts and the oldest copies of Rūmī's works."
    },
    sources: [SRC.iranica, SRC.mesnevi] },

  { id: "yusuf-aga", country: "TR", city: { tr: "Konya", en: "Konya" }, coord: [32.5036, 37.8709],
    name: { tr: "Yusuf Ağa Yazma Eser Kütüphanesi", en: "Yusuf Ağa Manuscript Library" },
    short: { tr: "Yusuf Ağa", en: "Yusuf Ağa" },
    founded: { tr: "1796", en: "1796" },
    founder: { tr: "Yusuf Ağa", en: "Yusuf Ağa" },
    inst: INST.yek, records: 15937,
    desc: {
      tr: "Selimiye Camii'ne bitişik kubbeli yapıda. Yusuf Ağa kendi 750 cilt kitabını vakfederek kurdu ve kitaplar için bir hâfız-ı kütüb görevlendirdi. Sadreddin Konevî'nin 13. yüzyıldaki vakıf kitaplığından gelen yazmalarla da tanınır.",
      en: "In a domed building adjoining the Selimiye Mosque. Yusuf Ağa founded it by endowing 750 volumes of his own and appointing a keeper of books. It is also known for manuscripts from the 13th-century endowed library of Ṣadr al-Dīn Qūnawī."
    },
    sources: [SRC.yusufaga, SRC.portal] },

  { id: "konya-bolge", country: "TR", city: { tr: "Konya", en: "Konya" }, coord: [32.4850, 37.8663],
    name: { tr: "Konya Bölge Yazma Eserler Kütüphanesi", en: "Konya Regional Manuscript Library" },
    short: { tr: "Konya Bölge", en: "Konya Regional" },
    inst: INST.yek, records: 49969,
    desc: {
      tr: "Konya Yazma Eserler Bölge Müdürlüğü'nün merkez kütüphanesi. Çevre illerden derlenen koleksiyonlarla Anadolu'nun en büyük yazma eser birikimlerinden birini oluşturur.",
      en: "The central library of the Konya Regional Directorate of Manuscripts. With collections gathered from surrounding provinces it forms one of the largest manuscript holdings in Anatolia."
    },
    sources: [SRC.portal, SRC.iranica] },

  { id: "milli", country: "TR", city: { tr: "Ankara", en: "Ankara" }, coord: [32.8265, 39.9164],
    name: { tr: "Millî Kütüphane Yazmalar Koleksiyonu", en: "National Library, Manuscripts Collection" },
    short: { tr: "Millî Kütüphane", en: "National Library" },
    founded: { tr: "1946", en: "1946" },
    inst: INST.ktb, records: 43915,
    desc: {
      tr: "Türkiye'nin ulusal kütüphanesi. Yazmalar koleksiyonu, Anadolu'nun birçok ilindeki halk kütüphanelerinden getirilen eserlerle büyümüştür.",
      en: "The national library of Türkiye. Its manuscripts collection grew with works brought from public libraries in many Anatolian provinces."
    },
    sources: [SRC.portal] },

  { id: "hasan-pasa", country: "TR", city: { tr: "Çorum", en: "Çorum" }, coord: [34.9537, 40.5499],
    name: { tr: "Hasan Paşa Yazma Eser Kütüphanesi", en: "Hasan Paşa Manuscript Library" },
    short: { tr: "Hasan Paşa", en: "Hasan Paşa" },
    inst: INST.yek, records: 17158,
    desc: {
      tr: "Çorum'un yazma eser kütüphanesi. Ayrıntılı kayıt eklenecek.",
      en: "The manuscript library of Çorum. A fuller record will be added."
    },
    sources: [SRC.portal] },

  { id: "amasya", country: "TR", city: { tr: "Amasya", en: "Amasya" }, coord: [35.8275, 40.6532],
    name: { tr: "Amasya Beyazıt Yazma Eser Kütüphanesi", en: "Amasya Beyazıt Manuscript Library" },
    short: { tr: "Amasya Beyazıt", en: "Amasya Beyazıt" },
    founded: { tr: "Külliye: 15. yüzyıl sonu", en: "Complex: late 15th century" },
    inst: INST.yek, records: 4352,
    desc: {
      tr: "Yeşilırmak kıyısındaki II. Bayezid Külliyesi'nde. Şehzadeler şehri Amasya'nın medrese kitaplıklarından gelen yazmaları korur.",
      en: "In the complex of Bayezid II on the bank of the Yeşilırmak. It keeps manuscripts from the madrasa libraries of Amasya, another city of Ottoman princes."
    },
    sources: [SRC.portal] },

  { id: "kastamonu", country: "TR", city: { tr: "Kastamonu", en: "Kastamonu" }, coord: [33.7765, 41.3760],
    name: { tr: "Kastamonu Yazma Eser Kütüphanesi", en: "Kastamonu Manuscript Library" },
    short: { tr: "Kastamonu", en: "Kastamonu" },
    inst: INST.yek, records: 7786,
    desc: {
      tr: "Kastamonu'nun yazma eser kütüphanesi. Ayrıntılı kayıt eklenecek.",
      en: "The manuscript library of Kastamonu. A fuller record will be added."
    },
    sources: [SRC.portal] },

  { id: "rasit-efendi", country: "TR", city: { tr: "Kayseri", en: "Kayseri" }, coord: [35.4880, 38.7215],
    name: { tr: "Raşit Efendi Yazma Eser Kütüphanesi", en: "Raşit Efendi Manuscript Library" },
    short: { tr: "Raşit Efendi", en: "Raşit Efendi" },
    founded: { tr: "18. yüzyıl sonu", en: "Late 18th century" },
    founder: { tr: "Mehmed Râşid Efendi", en: "Mehmed Râşid Efendi" },
    inst: INST.yek, records: 3914,
    desc: {
      tr: "Kayseri'de tarihî binasında hizmet veren vakıf kütüphanesi; Osmanlı bürokratı Râşid Efendi'nin memleketi için kurduğu koleksiyon.",
      en: "An endowed library in Kayseri still serving in its historic building; the Ottoman official Râşid Efendi founded the collection for his home town."
    },
    sources: [SRC.portal] },

  { id: "ziya-bey", country: "TR", city: { tr: "Sivas", en: "Sivas" }, coord: [37.0160, 39.7478],
    name: { tr: "Ziya Bey Yazma Eser Kütüphanesi", en: "Ziya Bey Manuscript Library" },
    short: { tr: "Ziya Bey", en: "Ziya Bey" },
    founded: { tr: "1908", en: "1908" },
    founder: { tr: "Yusuf Ziya Başara", en: "Yusuf Ziya Başara" },
    inst: INST.yek,
    desc: {
      tr: "Sivas'ta Yusuf Ziya Başara'nın kurduğu kütüphane. 2019'da Sivas Cumhuriyet Üniversitesi kütüphanelerindeki 169 yazma eser de buraya devredildi.",
      en: "Founded in Sivas by Yusuf Ziya Başara. In 2019 the 169 manuscripts held in the libraries of Sivas Cumhuriyet University were also transferred here."
    },
    sources: [SRC.ziyabey] },

  { id: "erzurum", country: "TR", city: { tr: "Erzurum", en: "Erzurum" }, coord: [41.2760, 39.9060],
    name: { tr: "Erzurum Yazma Eser Kütüphanesi", en: "Erzurum Manuscript Library" },
    short: { tr: "Erzurum", en: "Erzurum" },
    inst: INST.yek, records: 11324,
    desc: {
      tr: "Doğu Anadolu'nun yazma eser kütüphanesi. Ayrıntılı kayıt eklenecek.",
      en: "The manuscript library of eastern Anatolia. A fuller record will be added."
    },
    sources: [SRC.portal] },

  { id: "ziya-gokalp", country: "TR", city: { tr: "Diyarbakır", en: "Diyarbakır" }, coord: [40.2370, 37.9120],
    name: { tr: "Ziya Gökalp Yazma Eser Kütüphanesi", en: "Ziya Gökalp Manuscript Library" },
    short: { tr: "Ziya Gökalp", en: "Ziya Gökalp" },
    founded: { tr: "Yapı: Artuklu dönemi (1198'de başlandı)", en: "Building: Artuqid period (begun 1198)" },
    inst: INST.yek, records: 3773,
    desc: {
      tr: "Diyarbakır surlarının içinde, yapımına Artuklu hükümdarı II. Sökmen zamanında başlanan tarihî bir yapıda hizmet verir.",
      en: "Inside the walls of Diyarbakır, it serves in a historic building begun under the Artuqid ruler Sökmen II."
    },
    sources: [SRC.diyarbakir, SRC.portal] }
];

const WORKS = [
  { id: "divanu-lugatit-turk", lib: "millet", type: "cilt", tone: "lacivert", unesco: 2017,
    title: { tr: "Dîvânu Lugâti't-Türk", en: "Dīwān Lughāt al-Turk (Compendium of the Turkic Dialects)" },
    orig: "ديوان لغات الترك",
    author: { tr: "Kâşgarlı Mahmud", en: "Mahmud al-Kashgari" },
    date: { tr: "Telif: 1072–1074 · Bu nüsha: 1 Ağustos 1266", en: "Composed 1072–1074 · This copy: 1 August 1266" },
    lang: { tr: "Arapça açıklamalı Türkçe sözlük", en: "Turkic dictionary explained in Arabic" },
    shelf: "Ali Emîrî, Arabî 4189",
    copy: { tr: "Dünyada bilinen tek nüsha. 319 yaprak, her sayfada 17 satır. Müstensih: Sâveli Muhammed b. Ebû Bekir (Şam).", en: "The only known copy in the world. 319 leaves, 17 lines to the page. Copied by Muhammad b. Abī Bakr of Sāveh (Damascus)." },
    what: {
      tr: "Türk dilinin bilinen ilk sözlüğü. Kâşgarlı Mahmud, Türk boylarını dolaşarak derlediği kelimeleri Araplara Türkçe öğretmek amacıyla Arapça açıklamalarla yazdı. Sözlük maddelerinin yanında şiirler, atasözleri, boyların ağız özellikleri ve Türk dünyasını gösteren bir harita içerir.",
      en: "The first known dictionary of the Turkic language. Mahmud al-Kashgari travelled among the Turkic peoples collecting words, and wrote them up with Arabic explanations to teach Turkic to Arabic speakers. Alongside the entries it contains poems, proverbs, notes on dialects and a map of the Turkic world."
    },
    why: {
      tr: "11. yüzyıl Türkçesinin söz varlığını, halk edebiyatını ve coğrafyasını tek kaynakta toplar. Eser yüzyıllarca kayıp sanıldı; Ali Emîrî Efendi 1914'te İstanbul'da bir sahaftan satın alarak buldu ve kütüphanesiyle birlikte millete bağışladı. Bugün elimizdeki her baskı bu tek yazmaya dayanır.",
      en: "It gathers the vocabulary, oral literature and geography of 11th-century Turkic in a single source. The work was thought lost for centuries until Ali Emîrî Efendi bought it from an Istanbul bookseller in 1914 and donated it to the nation along with his library. Every edition we have today rests on this one manuscript."
    },
    sources: [SRC.dltErsoy, SRC.dltKacalin, SRC.unesco] },

  { id: "cerrahiyyetul-haniyye", lib: "millet", type: "cilt", tone: "visne",
    title: { tr: "Cerrâhiyyetü'l-Hâniyye", en: "Cerrāhiyyetü'l-Hāniyye (Imperial Surgery)" },
    orig: "جراحيۂ إلخانيه",
    author: { tr: "Sabuncuoğlu Şerefeddin", en: "Şerefeddin Sabuncuoğlu" },
    date: { tr: "1465 (870 H.), Amasya", en: "1465 (870 AH), Amasya" },
    lang: { tr: "Türkçe", en: "Turkish" },
    shelf: "Ali Emîrî, Tıp 79",
    copy: { tr: "Bilinen üç nüshadan biri. Diğerleri Paris Bibliothèque nationale (Suppl. turc 693) ile İstanbul Üniversitesi Tıp Tarihi koleksiyonundadır.", en: "One of three known copies. The others are in the Bibliothèque nationale, Paris (Suppl. turc 693), and the History of Medicine collection of Istanbul University." },
    what: {
      tr: "Amasyalı hekim Sabuncuoğlu Şerefeddin'in Fatih Sultan Mehmed'e sunduğu resimli cerrahi kitabı. Büyük ölçüde Endülüslü Zehrâvî'nin cerrahi bölümünün çevirisidir; yazar buna iki fasıl, kendi gözlemlerini ve ameliyatları, aletleri gösteren minyatürleri eklemiştir.",
      en: "An illustrated book of surgery that the Amasya physician Şerefeddin Sabuncuoğlu presented to Mehmed the Conqueror. It is largely a translation of the surgical section of al-Zahrāwī of al-Andalus, to which the author added two chapters, his own observations, and miniatures of operations and instruments."
    },
    why: {
      tr: "Türkçe yazılmış ilk resimli cerrahi kitabı sayılır. Hekimi hastasının başında gösteren minyatürleri, 15. yüzyıl Anadolu'sunda tıbbın nasıl uygulandığına dair eşsiz görsel belgedir.",
      en: "It is regarded as the first illustrated surgical book written in Turkish. Its miniatures, showing the physician at work on the patient, are a unique visual record of how medicine was practised in 15th-century Anatolia."
    },
    sources: [SRC.cerrahiyye, SRC.cerrahiyye2] },

  { id: "piri-reis-haritasi", lib: "topkapi", type: "harita", tone: "kahve", unesco: 2017,
    title: { tr: "Pîrî Reis'in Dünya Haritası", en: "The World Map of Piri Reis" },
    author: { tr: "Pîrî Reis", en: "Piri Reis" },
    date: { tr: "1513, Gelibolu", en: "1513, Gallipoli" },
    lang: { tr: "Osmanlı Türkçesi notlarla", en: "With notes in Ottoman Turkish" },
    shelf: "Revan Köşkü 1633 mük.",
    copy: { tr: "Ceylan derisi (parşömen) üzerine, yaklaşık 90 × 63 cm. Daha büyük bir dünya haritasının günümüze ulaşan batı parçası.", en: "On gazelle-skin parchment, about 90 × 63 cm. The surviving western part of a larger world map." },
    what: {
      tr: "Osmanlı denizcisi Pîrî Reis'in çizdiği dünya haritasından kalan parça; Atlas Okyanusu'nu, Avrupa ve Afrika'nın batı kıyılarını ve Amerika'nın doğu kıyılarını gösterir. Pîrî Reis haritayı 1517'de Mısır'da Yavuz Sultan Selim'e sundu. Kenar notlarında yararlandığı kaynakları, aralarında Kolomb'a ait bir haritayı da sayar.",
      en: "The surviving part of a world map drawn by the Ottoman mariner Piri Reis, showing the Atlantic, the western coasts of Europe and Africa, and the eastern coasts of the Americas. He presented it to Selim I in Egypt in 1517. In its marginal notes he lists his sources, among them a map by Columbus."
    },
    why: {
      tr: "Amerika'yı gösteren en eski haritalardan biridir ve Kolomb'un kayıp haritasının izlerini taşır. 1929'da Topkapı Sarayı müzeye dönüştürülürken bulundu; bulunuşu haritacılık tarihinde büyük yankı uyandırdı.",
      en: "It is among the oldest maps to show the Americas and preserves traces of Columbus's lost map. It was found in 1929 while Topkapı Palace was being turned into a museum, a discovery that resonated through the history of cartography."
    },
    sources: [SRC.piri, SRC.unesco] },

  { id: "kitab-i-bahriyye-hazine", lib: "topkapi", type: "harita", tone: "yesil",
    title: { tr: "Kitâb-ı Bahriyye (saray nüshası)", en: "Kitāb-ı Bahriyye, the Book of Navigation (palace copy)" },
    author: { tr: "Pîrî Reis", en: "Piri Reis" },
    date: { tr: "İkinci telif: 1526", en: "Second version: 1526" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "Hazine 642",
    copy: { tr: "215 haritalı. Kanuni Sultan Süleyman'a sunulan nüsha olması kuvvetle muhtemeldir.", en: "With 215 charts. Very probably the copy presented to Süleyman the Magnificent." },
    what: {
      tr: "Akdeniz'in kıyılarını, adalarını, limanlarını ve tehlikeli sularını anlatan denizcilik kılavuzu. Pîrî Reis her bölümü o kıyının haritasıyla birlikte verir.",
      en: "A sailing guide to the coasts, islands, harbours and dangerous waters of the Mediterranean. Piri Reis pairs each chapter with a chart of that coast."
    },
    why: {
      tr: "Akdeniz'in 16. yüzyıldaki en ayrıntılı tasviridir; hem bilim tarihi hem de harita sanatı açısından Osmanlı denizciliğinin başyapıtı sayılır.",
      en: "It is the most detailed description of the 16th-century Mediterranean, and is considered the masterpiece of Ottoman seafaring for both the history of science and the art of the map."
    },
    sources: [SRC.bahriye] },

  { id: "seyahatname", lib: "topkapi", type: "cilt", tone: "siyah", unesco: 2013,
    title: { tr: "Evliyâ Çelebi Seyahatnâmesi", en: "Evliya Çelebi's Seyahatnāme (Book of Travels)" },
    author: { tr: "Evliyâ Çelebi", en: "Evliya Çelebi" },
    date: { tr: "17. yüzyıl", en: "17th century" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "Bağdat Köşkü 304, 305, 307, 308",
    copy: { tr: "On kitaplık eserin ilk sekiz kitabını içeren ciltler. UNESCO kaydı Topkapı ve Süleymaniye'deki nüshaları birlikte kapsar.", en: "The volumes containing the first eight of the work's ten books. The UNESCO inscription covers the copies in Topkapı and Süleymaniye together." },
    what: {
      tr: "Evliyâ Çelebi'nin 1640–1680 arasında Osmanlı coğrafyasında ve komşu ülkelerde yaptığı yolculukların on kitaplık anlatısı. Şehirleri, yapıları, dilleri, yemekleri ve insanları merakla ve mizahla kaydeder.",
      en: "A ten-book account of the journeys Evliya Çelebi made through the Ottoman lands and neighbouring countries between 1640 and 1680. He records cities, buildings, languages, food and people with curiosity and humour."
    },
    why: {
      tr: "İslam edebiyatının, belki de dünya edebiyatının en uzun ve en kapsamlı seyahat anlatısıdır. 17. yüzyıl gündelik hayatı için başvurulan ilk kaynaklardandır.",
      en: "It is the longest and fullest travel account in Islamic literature, perhaps in world literature, and one of the first sources consulted on everyday life in the 17th century."
    },
    sources: [SRC.seyahat, SRC.unesco] },

  { id: "cezeri-hiyel", lib: "topkapi", type: "cilt", tone: "yesil",
    title: { tr: "Kitâb fî Ma'rifeti'l-Hiyeli'l-Hendesiyye", en: "The Book of Knowledge of Ingenious Mechanical Devices" },
    author: { tr: "İsmâil b. Rezzâz el-Cezerî", en: "Ismāʿīl ibn al-Razzāz al-Jazarī" },
    date: { tr: "Telif: 1205, Âmid (Diyarbakır) · Nüsha: 13. yüzyıl başı", en: "Composed 1205, Āmid (Diyarbakır) · Copy: early 13th century" },
    lang: { tr: "Arapça", en: "Arabic" },
    shelf: "III. Ahmed 3472",
    copy: { tr: "Eserin bilinen en eski yazma nüshası; renkli resim ve şemalarla.", en: "The oldest known manuscript of the work, with coloured illustrations and diagrams." },
    what: {
      tr: "Artuklu sarayında çalışan mühendis Cezerî'nin tasarladığı su saatleri, otomatlar, su çıkarma makineleri, fıskiyeler ve kilitleri anlatan altı bölümlük kitap. Her düzeneğin yapılışını parça parça, çizimleriyle tarif eder.",
      en: "A book in six parts describing the water clocks, automata, water-raising machines, fountains and locks designed by al-Jazarī, an engineer at the Artuqid court. He explains how to build each device piece by piece, with drawings."
    },
    why: {
      tr: "Ortaçağ mühendisliğinin en önemli kaynağıdır. Krank-biyel düzeneği gibi çözümleri ve “yapılabilir tarif” anlayışı nedeniyle otomasyon ve robot tarihinde başlangıç metinlerinden sayılır.",
      en: "It is the most important source on medieval engineering. For solutions such as the crank and connecting rod, and for its insistence on buildable instructions, it is counted among the founding texts of the history of automation and robotics."
    },
    sources: [SRC.cezeri] },

  { id: "surname-i-humayun", lib: "topkapi", type: "cilt", tone: "visne",
    title: { tr: "Sûrnâme-i Hümâyûn", en: "Sūrnāme-i Hümāyūn (Imperial Festival Book)" },
    author: { tr: "Metin: İntizâmî · Resimler: Nakkaş Osman ve ekibi", en: "Text: İntizâmî · Paintings: Nakkaş Osman and his workshop" },
    date: { tr: "1582 şenliği için, 1580'ler", en: "For the festival of 1582; 1580s" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "Hazine 1344",
    copy: { tr: "Başı ve sonu eksik; 427 minyatür içerir.", en: "Lacking its beginning and end; contains 427 miniatures." },
    what: {
      tr: "III. Murad'ın oğlu Şehzade Mehmed'in 1582'de Atmeydanı'nda yapılan sünnet düğününü gün gün anlatan kitap. Her sahnede aynı meydan görülür; önünden esnaf loncaları, cambazlar, çalgıcılar ve hokkabazlar geçer.",
      en: "A day-by-day account of the circumcision festival held in 1582 on the Hippodrome for Prince Mehmed, son of Murad III. Every scene shows the same square, across which pass the guilds, acrobats, musicians and conjurers."
    },
    why: {
      tr: "Resimli sûrnâmelerin ilkidir. 16. yüzyıl İstanbul'unun mesleklerini, eğlencelerini ve gösteri sanatlarını tek tek görmemizi sağlayan en zengin görsel kaynaktır.",
      en: "It is the first of the illustrated festival books, and the richest visual source for the trades, entertainments and performing arts of 16th-century Istanbul."
    },
    sources: [SRC.surname] },

  { id: "surname-i-vehbi", lib: "topkapi", type: "cilt", tone: "lacivert",
    title: { tr: "Sûrnâme-i Vehbî", en: "Sūrnāme-i Vehbī" },
    author: { tr: "Metin: Seyyid Vehbî · Resimler: Levnî", en: "Text: Seyyid Vehbî · Paintings: Levnî" },
    date: { tr: "1720 şenliği için", en: "For the festival of 1720" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "III. Ahmed 3593",
    copy: { tr: "Eserin yirmiden fazla nüshası bilinir; Levnî'nin minyatürlerini taşıyan nüsha budur.", en: "More than twenty copies of the text are known; this is the one with Levnî's miniatures." },
    what: {
      tr: "III. Ahmed'in şehzadeleri için 1720'de düzenlenen sünnet şenliğinin kitabı. Levnî, Okmeydanı ve Haliç'teki alayları, gösterileri ve ziyafetleri canlı renklerle resmetmiştir.",
      en: "The book of the circumcision festival held in 1720 for the sons of Ahmed III. Levnî painted the processions, performances and banquets at Okmeydanı and on the Golden Horn in vivid colour."
    },
    why: {
      tr: "Lale Devri'nin en ünlü nakkaşı Levnî'nin başyapıtıdır; Osmanlı minyatürünün klasik üsluptan yeni bir anlatıma geçişini gösterir.",
      en: "It is the masterpiece of Levnî, the most celebrated painter of the Tulip Era, and shows Ottoman miniature painting moving from the classical style toward a new idiom."
    },
    sources: [SRC.surname] },

  { id: "ibn-sina-yazmalari", lib: "suleymaniye", type: "koleksiyon", tone: "lacivert", unesco: 2003,
    title: { tr: "İbn Sînâ Yazmaları Koleksiyonu", en: "The Works of Ibn Sina (Avicenna) Collection" },
    author: { tr: "İbn Sînâ (ö. 1037)", en: "Ibn Sīnā, Avicenna (d. 1037)" },
    date: { tr: "Farklı yüzyıllardan nüshalar", en: "Copies from several centuries" },
    lang: { tr: "Arapça, Farsça", en: "Arabic, Persian" },
    shelf: "Ayasofya, Fatih ve diğer koleksiyonlarda",
    shelfEn: "In the Ayasofya, Fatih and other collections",
    copy: { tr: "Tek bir kitap değil, kütüphanenin farklı koleksiyonlarına dağılmış İbn Sînâ eserlerinin bütünü.", en: "Not a single book but the whole body of Ibn Sīnā's works spread across the library's collections." },
    what: {
      tr: "Hekim ve filozof İbn Sînâ'nın tıp, felsefe, mantık ve doğa bilimleri üzerine eserlerinin Süleymaniye'de korunan yazma nüshaları. el-Kānûn fi't-tıb ve eş-Şifâ gibi temel eserlerinin erken ve değerli nüshalarını içerir.",
      en: "The manuscript copies, kept in the Süleymaniye, of the physician and philosopher Ibn Sīnā's works on medicine, philosophy, logic and natural science. They include early and valuable copies of fundamental works such as the Canon of Medicine and the Book of Healing."
    },
    why: {
      tr: "İbn Sînâ'nın eserleri yüzyıllarca hem İslam dünyasında hem Avrupa üniversitelerinde ders kitabı olarak okundu. Bu koleksiyon, metinlerinin en güvenilir biçimde kurulabileceği en zengin nüsha topluluklarından biridir.",
      en: "For centuries Ibn Sīnā's works were read as textbooks in both the Islamic world and the universities of Europe. This collection is one of the richest groups of copies from which his texts can be reliably established."
    },
    sources: [SRC.ibnsina, SRC.unesco] },

  { id: "kitab-i-bahriyye-ayasofya", lib: "suleymaniye", type: "harita", tone: "kahve",
    title: { tr: "Kitâb-ı Bahriyye (Ayasofya nüshası)", en: "Kitāb-ı Bahriyye (Ayasofya copy)" },
    author: { tr: "Pîrî Reis", en: "Piri Reis" },
    date: { tr: "İkinci telif: 1526", en: "Second version: 1526" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "Ayasofya 2612",
    copy: { tr: "Eserin ikinci telifine ait nüsha.", en: "A copy of the work's second version." },
    what: {
      tr: "Pîrî Reis'in Akdeniz kılavuzunun, Kanuni'ye sunmak üzere genişlettiği ikinci telifinin Ayasofya koleksiyonundaki nüshası.",
      en: "The copy in the Ayasofya collection of the second, expanded version of Piri Reis's Mediterranean guide, which he prepared for presentation to Süleyman."
    },
    why: {
      tr: "Yayımlayanlarca “en tam ve mükemmel” nüsha görüldüğü için eserin tıpkıbasımına esas alınmıştır; Kitâb-ı Bahriyye'yi bugün çoğunlukla bu nüsha üzerinden okuruz.",
      en: "Its editors judged it the most complete and perfect copy and chose it for the facsimile edition, so it is largely through this manuscript that the Kitāb-ı Bahriyye is read today."
    },
    sources: [SRC.bahriye] },

  { id: "mesnevi-1278", lib: "mevlana", type: "cilt", tone: "yesil",
    title: { tr: "Mesnevî (en eski nüsha)", en: "The Masnavī (oldest copy)" },
    orig: "مثنوی معنوی",
    author: { tr: "Mevlânâ Celâleddîn-i Rûmî", en: "Mevlânâ Jalāl al-Dīn Rūmī" },
    date: { tr: "1278 (Rebîülevvel 677 H.), Konya", en: "1278 (Rabīʿ I 677 AH), Konya" },
    lang: { tr: "Farsça", en: "Persian" },
    shelf: "Müzelik Kitaplar, no. 51",
    copy: { tr: "Altı defter tek ciltte. Hattat: Muhammed b. Abdullah el-Konevî. Tezhip: Muhlis b. Abdullah el-Hindî.", en: "All six books in one volume. Scribe: Muḥammad b. ʿAbdallāh al-Qūnawī. Illumination: Mukhliṣ b. ʿAbdallāh al-Hindī." },
    what: {
      tr: "Mevlânâ'nın altı defterden ve yaklaşık yirmi altı bin beyitten oluşan büyük tasavvufî eseri. Bu nüsha, Mevlânâ'nın ölümünden beş yıl sonra, onun gözden geçirdiği bir nüshaya dayanılarak yazılmıştır.",
      en: "Rūmī's great mystical poem in six books and about twenty-six thousand couplets. This copy was written five years after his death, on the basis of a copy he himself had checked."
    },
    why: {
      tr: "Mesnevî'nin tarihi bilinen en eski tam nüshasıdır ve metnin en güvenilir tanığı sayılır; bilimsel yayınlar ve çeviriler buna dayanır. Anadolu Selçuklu tezhibinin de en önemli örneklerindendir. Mevlânâ'nın Külliyatı 2023'te UNESCO Dünya Belleği Kütüğü'ne kaydedildi.",
      en: "It is the oldest dated complete copy of the Masnavī and is regarded as the most reliable witness to the text; scholarly editions and translations depend on it. It is also among the finest examples of Anatolian Seljuk illumination. Rūmī's collected works were inscribed on the UNESCO Memory of the World Register in 2023."
    },
    sources: [SRC.mesnevi, SRC.iranica, SRC.unesco] },

  { id: "beyan-i-menazil", lib: "iu-nadir", type: "harita", tone: "lacivert",
    title: { tr: "Beyân-ı Menâzil-i Sefer-i Irâkeyn", en: "Beyān-ı Menāzil-i Sefer-i ʿIrāḳeyn (Stages of the Campaign of the Two Iraqs)" },
    orig: "بيان منازل سفر عراقين",
    author: { tr: "Matrakçı Nasuh", en: "Matrakçı Nasuh" },
    date: { tr: "1537 (944 H.)", en: "1537 (944 AH)" },
    lang: { tr: "Osmanlı Türkçesi", en: "Ottoman Turkish" },
    shelf: "TY 5964",
    copy: { tr: "Bilinen tek nüsha. Yıldız Sarayı Kütüphanesi'nden gelmiştir.", en: "The only known copy. It came from the Yıldız Palace Library." },
    what: {
      tr: "Kanuni Sultan Süleyman'ın 1533–1536 İran seferinde ordunun konakladığı yerleri sırasıyla anlatan ve resimleyen kitap. Matrakçı Nasuh İstanbul'dan Tebriz ve Bağdat'a uzanan yoldaki şehirleri, içinde hiç insan olmadan, yapılarıyla tek tek çizmiştir.",
      en: "A book that describes and pictures, in order, the places where the army halted during Süleyman the Magnificent's Persian campaign of 1533–1536. Matrakçı Nasuh drew the cities on the road from Istanbul to Tabriz and Baghdad building by building, with no human figures at all."
    },
    why: {
      tr: "Resimleri sembolik değil, şehirleri aslına uygun gösterdiği için 16. yüzyıl Anadolu, İran ve Irak şehirlerinin en eski görsel belgelerindendir. İstanbul tasviri şehrin en ünlü erken görünümlerinden biridir.",
      en: "Because its pictures are faithful rather than symbolic, it is among the earliest visual records of the cities of 16th-century Anatolia, Iran and Iraq. Its view of Istanbul is one of the most famous early depictions of the city."
    },
    sources: [SRC.menazil] },

  { id: "futuhat-muellif-hatti", lib: "tiem", type: "koleksiyon", tone: "visne",
    title: { tr: "el-Fütûhâtü'l-Mekkiyye (müellif hattı)", en: "al-Futūḥāt al-Makkiyya (autograph)" },
    orig: "الفتوحات المكّيّة",
    author: { tr: "Muhyiddin İbnü'l-Arabî", en: "Muḥyī al-Dīn Ibn ʿArabī" },
    date: { tr: "1238 (636 H.), Şam", en: "1238 (636 AH), Damascus" },
    lang: { tr: "Arapça", en: "Arabic" },
    shelf: "Evkaf Müzesi 1845–1881",
    copy: { tr: "37 cilt; müellifin kendi el yazısı (9. cilt sonradan tamamlanmıştır). Konya'da Sadreddin Konevî'nin vakıf kitaplığından gelir.", en: "37 volumes in the author's own hand (volume 9 is a later replacement). From the endowed library of Ṣadr al-Dīn Qūnawī in Konya." },
    what: {
      tr: "İbnü'l-Arabî'nin tasavvuf düşüncesini en geniş biçimde anlattığı eseri. Müellif, eseri baştan sona gözden geçirip genişleterek ikinci kez yazmış ve ölümünden iki yıl önce tamamlamıştır; bu ciltler o ikinci yazımdır.",
      en: "The work in which Ibn ʿArabī sets out his mystical thought at greatest length. He revised and enlarged it, writing the whole a second time and finishing two years before his death; these volumes are that second redaction."
    },
    why: {
      tr: "Bu ölçekte bir ortaçağ eserinin yazarının elinden çıkmış nüshasının neredeyse eksiksiz korunması çok nadirdir. Üvey oğlu ve öğrencisi Konevî'nin Konya'daki kitaplığında yüzyıllarca saklanmıştır.",
      en: "It is very rare for a medieval work on this scale to survive almost complete in its author's own hand. It was kept for centuries in Konya, in the library of his stepson and student Qūnawī."
    },
    sources: [SRC.futuhat, SRC.futuhat2] },

  { id: "futuhat-yusuf-aga", lib: "yusuf-aga", type: "cilt", tone: "kahve",
    title: { tr: "el-Fütûhâtü'l-Mekkiyye (tezhipli nüsha)", en: "al-Futūḥāt al-Makkiyya (illuminated copy)" },
    author: { tr: "Muhyiddin İbnü'l-Arabî", en: "Muḥyī al-Dīn Ibn ʿArabī" },
    date: { tr: "Tarihsiz", en: "Undated" },
    lang: { tr: "Arapça", en: "Arabic" },
    shelf: "Env. 6633",
    copy: { tr: "Birinci cüzün müstensihi: Abdullah el-Leyşânî.", en: "Scribe of the first part: ʿAbdallāh al-Layshānī." },
    what: {
      tr: "İbnü'l-Arabî'nin büyük eserinin Yusuf Ağa'da korunan tezhipli bir nüshası.",
      en: "An illuminated copy of Ibn ʿArabī's great work kept in the Yusuf Ağa library."
    },
    why: {
      tr: "Araştırmacılara göre büyük olasılıkla Sadreddin Konevî'nin kitaplığından gelmektedir; müellif nüshasının İstanbul'a götürülmesinden sonra Konya'da kalan Konevî mirasının tanıklarındandır.",
      en: "Researchers think it very probably comes from Ṣadr al-Dīn Qūnawī's library; it is a witness to the Qūnawī legacy that remained in Konya after the autograph was taken to Istanbul."
    },
    sources: [SRC.yusufaga] },

  { id: "kandilli-yazmalari", lib: "kandilli", type: "koleksiyon", tone: "siyah", unesco: 2001,
    title: { tr: "Kandilli Rasathanesi El Yazmaları", en: "Kandilli Observatory Manuscripts" },
    author: { tr: "Çeşitli müellifler", en: "Various authors" },
    date: { tr: "Farklı yüzyıllardan", en: "From several centuries" },
    lang: { tr: "Türkçe, Arapça, Farsça", en: "Turkish, Arabic, Persian" },
    shelf: "Rasathane koleksiyonu",
    shelfEn: "Observatory collection",
    copy: { tr: "Astronomi, astroloji, matematik ve takvim üzerine yazmalardan oluşan koleksiyon.", en: "A collection of manuscripts on astronomy, astrology, mathematics and calendars." },
    what: {
      tr: "Gökyüzü gözlemleri, zîcler (astronomi cetvelleri), takvimler, usturlap ve matematik üzerine yazılmış eserlerin bir araya geldiği koleksiyon.",
      en: "A collection bringing together works on celestial observation, zījes (astronomical tables), calendars, the astrolabe and mathematics."
    },
    why: {
      tr: "Osmanlı ve İslam bilim tarihinin en derli toplu kaynaklarından biridir. Türkiye'den UNESCO Dünya Belleği Kütüğü'ne kaydedilen ilk miraslardandır.",
      en: "It is one of the most coherent bodies of sources for the history of Ottoman and Islamic science, and was among the first heritage from Türkiye inscribed on the UNESCO Memory of the World Register."
    },
    sources: [SRC.unesco] }
];

const UI = {
  brand: { tr: "Yazma Eserler Haritası", en: "Manuscripts Map" },
  brandTag: { tr: "Türkiye", en: "Türkiye" },
  langLabel: { tr: "Dil", en: "Language" },
  homeTitle: { tr: "Türkiye'nin yazma eser kütüphaneleri", en: "The manuscript libraries of Türkiye" },
  homeLede: {
    tr: "Haritadan bir kütüphane seçin; koleksiyonunu, orada korunan eserleri ve bu eserlerin neden önemli olduğunu okuyun. İlk aşama Türkiye'yi kapsıyor; diğer ülkeler sırayla eklenecek.",
    en: "Pick a library on the map to read about its collection, the works kept there, and why those works matter. This first stage covers Türkiye; other countries will follow one by one."
  },
  nLib: { tr: "kütüphane", en: "libraries" },
  nWork: { tr: "eser kaydı", en: "work records" },
  nCity: { tr: "şehir", en: "cities" },
  nUnesco: { tr: "UNESCO Dünya Belleği kaydı", en: "UNESCO Memory of the World entries" },
  featured: { tr: "Öne çıkan eserler", en: "Featured works" },
  allLibs: { tr: "Kütüphaneler", en: "Libraries" },
  search: { tr: "Kütüphane, eser ya da yazar ara", en: "Search a library, work or author" },
  all: { tr: "Tümü", en: "All" },
  noResult: { tr: "Aramayla eşleşen kayıt yok. Başka bir kelime deneyin ya da filtreyi kaldırın.", en: "No record matches. Try another word or clear the filter." },
  works: { tr: "eser", en: "works" },
  work1: { tr: "eser", en: "work" },
  backAll: { tr: "Tüm kütüphaneler", en: "All libraries" },
  founded: { tr: "Kuruluş", en: "Founded" },
  founder: { tr: "Kurucu", en: "Founder" },
  inst: { tr: "Bağlı kurum", en: "Institution" },
  records: { tr: "YEK portalında kayıt", en: "Records on the YEK portal" },
  recordsNote: { tr: "Portaldaki katalog kaydı sayısıdır (basma eserler dahil); cilt sayısı değildir.", en: "Number of catalogue records on the portal (printed books included), not a count of volumes." },
  city: { tr: "Şehir", en: "City" },
  worksHere: { tr: "Bu kütüphanedeki eserler", en: "Works in this library" },
  noWorks: { tr: "Bu kütüphane için eser kaydı henüz eklenmedi.", en: "No work records have been added for this library yet." },
  sources: { tr: "Kaynaklar", en: "Sources" },
  author: { tr: "Müellif", en: "Author" },
  date: { tr: "Tarih", en: "Date" },
  lang: { tr: "Dil", en: "Language" },
  shelf: { tr: "Yer numarası", en: "Shelfmark" },
  copy: { tr: "Nüsha", en: "This copy" },
  keptAt: { tr: "Korunduğu yer", en: "Kept at" },
  what: { tr: "Nedir?", en: "What is it?" },
  why: { tr: "Neden önemli?", en: "Why does it matter?" },
  unesco: { tr: "UNESCO Dünya Belleği", en: "UNESCO Memory of the World" },
  plateNote: { tr: "Temsilî görsel", en: "Representational image" },
  plateLong: { tr: "Temsilî çizimdir; eserin fotoğrafı değildir.", en: "A representational drawing, not a photograph of the work." },
  about: { tr: "Bu site hakkında", en: "About this site" },
  aboutText: {
    tr: "Bu site, TÜBİTAK 2204-A için hazırlanan bir araştırma projesinin çalışma sürümüdür. Bilgiler her kayıtta gösterilen kaynaklardan derlenmiştir. Haritadaki konumlar yaklaşıktır. Eser görselleri şimdilik temsilî çizimlerdir; kütüphanelerden izinli görseller sağlandıkça değiştirilecektir. Sıradaki aşamada başka ülkeler ve o ülkelerin yerel dilleri eklenecek.",
    en: "This site is a working version of a research project prepared for TÜBİTAK 2204-A. The information is compiled from the sources shown on each record. Map positions are approximate. Images of the works are representational drawings for now and will be replaced as licensed images are obtained from the libraries. The next stage will add other countries and their local languages."
  },
  mapData: { tr: "Harita verisi: Natural Earth", en: "Map data: Natural Earth" },
  zoomIn: { tr: "Yakınlaştır", en: "Zoom in" },
  zoomOut: { tr: "Uzaklaştır", en: "Zoom out" },
  fitTr: { tr: "Türkiye'yi göster", en: "Show Türkiye" },
  fitWorld: { tr: "Dünyayı göster", en: "Show the world" },
  resize: { tr: "Harita genişliğini ayarla", en: "Adjust map width" },
  mapAria: { tr: "Kütüphaneler haritası", en: "Map of libraries" },
  mapFail: { tr: "Harita yüklenemedi. Kütüphaneleri sağdaki listeden açabilirsiniz.", en: "The map could not be loaded. You can open the libraries from the list on the right." },
  libsHere: { tr: "kütüphane", en: "libraries" },
  notFound: { tr: "Bu kayıt bulunamadı.", en: "This record was not found." }
};
