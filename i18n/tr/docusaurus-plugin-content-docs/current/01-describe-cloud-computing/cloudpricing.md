---
title: "Bölüm 1.3: Bulut Ekonomisi - Maliyet Mühendisliği ve Tahminleme"
sidebar_position: 3
---

# 📘 BÖLÜM 1.3: Bulut Ekonomisi
## Maliyetleri Yönetmek, Tahmin Etmek ve Optimize Etmek

Bulut bilişimin en "aldatıcı" ve karmaşık görünen kısmı fiyatlandırmadır. Geleneksel IT dünyasında bir sunucuya sabit bir ücret ödersiniz ve konu kapanır. Ancak bulutta fiyatlandırma, tıpkı bir okyanustaki akıntılar gibi sürekli değişkendir. Bu bölümde, faturayı etkileyen gizli kaldıraçları ve Azure'un maliyet hesaplama araçlarını bir mimar gözüyle inceleyeceğiz.

---

### 🔍 1. Bölüm: Fiyatlandırmanın Anatomisi ve Seçim Stratejileri
#### Bir Sanal Makine (VM) Neden Farklı Ücretlendirilir?

Bir sanal makineyi "sepete" eklediğinizde, aslında tek bir ürün değil, birbirine bağlı en az sekiz farklı değişkeni kiralarsınız. İşte faturayı yukarı veya aşağı çeken o kaldıraçlar ve **Mimarın Karar Matrisi**:

1.  **Bölge (Region) Stratejisi: Maliyet mi, Performans mı?**
    * **Senaryo:** Eğer kullanıcılarınız Türkiye’deyse ve bir **Frontend (Önyüz)** uygulaması yayınlıyorsanız, maliyeti düşük diye Amerika (West US) bölgesini seçmek **yanlıştır.** Çünkü gecikme (latency) nedeniyle site yavaş açılır.
    * **Karar:** Kullanıcıya en yakın (örn. West Europe) bölgeyi seçin. Ancak arka planda çalışan ve acelesi olmayan bir **Data Processing (Veri İşleme)** işiniz varsa, en ucuz bölgeyi (örn. East US) seçerek tasarruf edebilirsiniz.

2.  **İşletim Sistemi ve Azure Hybrid Benefit**
    * **Senaryo:** Bir **Node.js veya Python Backend** yazılımı koşturacaksanız, Windows seçmek gereksiz bir maliyettir.
    * **Karar:** Açık kaynak kodlu projeler için her zaman Linux seçin. Eğer eski bir .NET uygulamasını taşıyorsanız ve elinizde şirket lisansları varsa, [Azure Hybrid Benefit](https://azure.microsoft.com/en-us/pricing/offers/hybrid-benefit) seçeneğini işaretleyerek %40'a yakın indirim kazanın.

3.  **Örnek (Instance) Tipi: Doğru İşe Doğru Motor**
    * **Yanlış Seçim:** Küçük bir web sitesi için devasa bir **D-Serisi** makine seçmek, şehir içinde tırla gezmeye benzer.
    * **Doğru Seçim:** * **Frontend/Web:** Değişken yüklere uygun, maliyet dostu **B-Serisi (Burstable)** makineleri seçin.
        * **Ağır Backend/Database:** İstikrarlı güç gerektiren **D-Serisi** veya bellek yoğun işler için **E-Serisi** seçin.

4.  **Veri Çıkışı (Egress): Görünmez Fatura**
    * **Senaryo:** Uygulamanız çok fazla yüksek çözünürlüklü video veya görsel içeriyorsa, her "izleme" işlemi Azure'dan dışarı veri çıkışı demektir.
    * **Mimarın Notu:** Inbound (Veri girişi) bedava, Outbound (Veri çıkışı) ücretlidir. Eğer veri trafiğiniz çok yoğunsa, maliyeti düşürmek için veriyi sıkıştırın veya bir CDN (Content Delivery Network) kullanarak trafiği Azure dışına optimize edin.

5.  **Disk Tipi ve İşlemler (Transactions)**
    * **Karar:** Bir **Test/Geliştirme** ortamı için pahalı Premium SSD seçmek yanlıştır; Standart HDD yeterlidir. Ancak bir **Üretim (Production) Veritabanı** için kesinlikle Premium SSD veya Ultra Disk seçilmelidir; aksi takdirde disk hızı darboğaz yaratır.

---

### 🧮 2. Bölüm: Azure Pricing Calculator (Fiyat Hesaplama Aracı)
#### Stratejik Bir Simülasyon Aracı

Bu araç sadece bir hesap makinesi değil, projenizin bütçe onayını alacak olan dokümandır. Kullanırken şu detaylara dikkat etmelisiniz:

* **Zaman Ayarı (Hours):** * **Mesai Saatleri Uygulaması:** Eğer uygulama sadece mesai saatlerinde kullanılıyorsa, otomasyonla akşamları kapatacağınızı varsayarak saati **730'dan 200'e** düşürebilir, devasa tasarruf sağlayabilirsiniz.
* **Bağlılık Modelleri (Reservations):** * **Üretim Ortamı:** Canlıda 7/24 çalışacak bir sunucu için asla "Pay-as-you-go" ödemeyin. 3 yıllık rezervasyon yaparak faturayı anında %60-%70 oranında budayın.

---

### ⚠️ 3. Bölüm: Kaybolan Araç: TCO
Eski kaynaklarda **TCO (Total Cost of Ownership)** hesaplayıcısını görebilirsiniz. Bu araç, kendi fiziksel sunucunuzun maliyetini (elektrik, soğutma, maaşlar) Azure ile kıyaslardı. 
> **Dikkat:** Bu ürün artık kullanımdan kaldırılmıştır (**Deprecated**). Artık tüm tahminler Pricing Calculator üzerinden yapılmaktadır.

---

### 🎁 4. Bölüm: Ücretsiz Servisler (Free Tiers)
Öğrenme sürecinde korkmanıza gerek yok. Azure, **55'ten fazla servisi** (Cosmos DB dahil) ücretsiz veya belirli limitlerle sunar. Bu, mimari denemeler yapmak için harika bir "kum havuzu" (Sandbox) fırsatıdır.

---
*Kardel Ruveyda Çetin - 2026*