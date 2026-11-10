# Yazma Eserler Haritası

Türkiye'deki yazma eser kütüphanelerini ve bu kütüphanelerde korunan eserleri harita üzerinde gösteren, Türkçe ve İngilizce bir site. TÜBİTAK 2204-A için hazırlanan araştırma projesinin çalışma sürümüdür.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.html` | Sitenin kendisi: tasarım, harita ve sayfa mantığı |
| `veri.js` | Kütüphane ve eser kayıtları, arayüz metinleri. İçerik eklerken yalnızca bu dosya düzenlenir |
| `harita.js` | Harita çizimi için sınır verisi. Elle düzenlenmez |

Siteyi bilgisayarda denemek için `index.html` dosyasına çift tıklamak yeterlidir (yazı tipleri ve harita kütüphanesi için internet bağlantısı gerekir).

## GitHub Pages ile yayımlama

1. github.com'da oturum açın, sağ üstteki **+** işaretinden **New repository** seçin.
2. Depoya bir ad verin (ör. `yazma-eserler`), **Public** seçin, **Create repository** deyin.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın; bu klasördeki dört dosyayı sürükleyip bırakın ve **Commit changes** deyin.
4. Depoda **Settings → Pages** bölümüne gidin. **Source** olarak **Deploy from a branch**, dal olarak **main** ve klasör olarak **/ (root)** seçip **Save** deyin.
5. Bir iki dakika sonra site `https://KULLANICI-ADINIZ.github.io/yazma-eserler/` adresinde açılır.

Sonradan bir dosyayı değiştirdiğinizde aynı depoya yeniden yüklemeniz yeterlidir; site kendiliğinden güncellenir.

## Yeni kayıt ekleme

`veri.js` içinde iki liste vardır: `LIBRARIES` (kütüphaneler) ve `WORKS` (eserler). Var olan bir kaydı kopyalayıp alanlarını değiştirin.

- Her metin iki dilde yazılır: `{ tr: "...", en: "..." }`.
- `id` yalnızca küçük İngilizce harf, rakam ve tire içerir (ör. `nuruosmaniye`) ve benzersiz olmalıdır.
- Kütüphanede `coord: [boylam, enlem]` sırasıyla yazılır.
- Eserde `lib` alanına ait olduğu kütüphanenin `id` değeri yazılır.
- Eserde `type`: `"cilt"`, `"harita"` ya da `"koleksiyon"`; `tone`: `"visne"`, `"lacivert"`, `"yesil"`, `"kahve"`, `"siyah"`.
- Her kayda en az bir kaynak eklenir: `sources: [{ t: "Kaynak adı", u: "https://..." }]`.

Yeni bir dil (ör. İtalyanca) eklemek için `LANGS` listesine `it` eklenir, ilgili ülkenin `langs` listesine yazılır ve kayıtlara `it: "..."` alanları eklenir. Çevirisi olmayan metin İngilizce gösterilir.

## Notlar

- Eser görselleri temsilî çizimlerdir; eserlerin fotoğrafı değildir.
- Haritadaki konumlar yaklaşıktır.
- Harita verisi: Natural Earth (kamu malı).
