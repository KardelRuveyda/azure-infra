---
title: "Bölüm 1.2: Bulut Modelleri - Nereden Avlanıyoruz?"
sidebar_position: 2
---

# 📘 BÖLÜM 1.1: Bulutun Üç Hali
## Public, Private ve Hybrid Cloud

Bulut bilişime giriş yaptığımızda karşımıza çıkan en temel soru şudur: "Bu veriler ve işlem gücü nerede duruyor ve buna kimlerin erişimi var?" Bu sorunun cevabı bizi üç ana bulut modeline götürür. Azure'un bu büyük resimde nereye oturduğunu anlamak için bu farkları bilmek hayati önem taşır.

---

### 🌐 1. Public Cloud (Genel Bulut): "Şehrin Balık Pazarı"

Genel bulut, isminden de anlaşılacağı üzere halka açık, genel kullanıma sunulmuş bir hizmettir. İnternet üzerinden herkesin erişebildiği veya satın alabildiği devasa bir teknoloji havuzudur.

* **Sahiplik:** Donanım, ağ ve tüm altyapı Microsoft Azure gibi üçüncü taraf sağlayıcılara aittir. Siz sadece bu hizmetleri kiralarsınız.
* **Donanım Derdi Yok:** Fiziksel sunucu satın almanıza veya bozulan bir parçayı değiştirmenize gerek yoktur. Sadece bir Azure hesabına ihtiyacınız vardır.
* **Maliyet (OpEx):** Bu model "kullandığın kadar öde" mantığıyla çalışır. Muhasebecilerin sevdiği **Operasyonel Gider (OpEx)** modelidir; yani büyük bir ön yatırım yerine aylık düzenli gider olarak kaydedilir.
* **Hız ve Ölçek:** Azure dünyasında konuştuğumuz şeylerin %90'ı "Public Cloud"dur. İhtiyacınız olduğunda saniyeler içinde binlerce sunucu kiralayabilir, işiniz bitince geri verebilirsiniz.



---

### 🏰 2. Private Cloud (Özel Bulut): "Özel Balık Çiftliği"

Özel bulut, sadece tek bir kuruluşa adanmış, dış dünyaya kapalı bir ortamdır. Bu ortam sizin kendi veri merkezinizde (On-premises) olabileceği gibi, sizin için ayrılmış özel bir sunucuda da olabilir.

* **Sahiplik ve İzolasyon:** Donanım tamamen size aittir veya sadece size özel olarak kiralanmıştır; kaynaklar kimseyle paylaşılmaz. Genellikle yüksek güvenlik, yasal zorunluluklar veya performans ihtiyaçları için tercih edilir.
* **Maliyet (CapEx):** Donanımı satın almanız veya özel olarak kiralamanız gerektiği için başlangıçta büyük bir yatırım gerektirir. Buna **Sermaye Gideri (CapEx)** denir.
* **Özel Teknolojiler:** Microsoft, kendi donanımınızda Azure deneyimi yaşamanız için **Azure Local** (eski adıyla Azure Stack HCI) teknolojisini sunar. Bu, "Azure'u kendi evime kuruyorum" demektir.

---

### 🌉 3. Hybrid Cloud (Hibrit Bulut): "En İyi İki Dünya"

Hibrit bulut, hem genel hem de özel bulut ortamlarını birleştirerek verilerin ve uygulamaların ikisi arasında özgürce hareket etmesini sağlar.

* **Esneklik:** Hassas verilerinizi kendi özel sunucunuzda (Private) tutarken, yoğun dönemlerdeki yükleri genel buluta (Public) aktarabilirsiniz.
* **Köprü Kurmak:**
    * **Azure Arc:** Yerel sunucularınızı (Private), sanki Azure'daymış gibi tek bir ekran üzerinden yönetmenizi sağlayan sihirli bir kontrol panelidir.
    * **Azure File Sync:** Yerel dosya sunucularınızı bulutla senkronize ederek hem yerel hız hem de bulutun devasa depolama kapasitesini birleştirir.
* **Avantajı:** Hem özel altyapının güvenliğini hem de genel bulutun sınırsız ölçeklenebilirliğini aynı anda sunar.

---

## 🔑 Mimarın Karşılaştırma Matrisi (AZ-900 Odaklı)

| Özellik | Public Cloud | Private Cloud | Hybrid Cloud |
| :--- | :--- | :--- | :--- |
| **Maliyet** | OpEx (Aylık ödeme) | CapEx (Ön yatırım) | İkisinin karışımı |
| **Donanım** | Microsoft'a ait | Size/Kuruluşa ait | Paylaşımlı |
| **Ölçekleme** | Devasa ve hızlı | Sınırlı ve yavaş | Esnek |
| **Değer** | Hız, maliyet, verimlilik | Kontrol, yüksek güvenlik | Maksimum esneklik |

> **💡 Kritik Not:** Sınavda veya gerçek dünyada "Maliyet" sorulduğunda; Public Cloud'un **OpEx** (Rutin gider), Private Cloud'un ise **CapEx** (Varlık yatırımı) olduğunu hatırlamak sizi bir adım öne taşır.