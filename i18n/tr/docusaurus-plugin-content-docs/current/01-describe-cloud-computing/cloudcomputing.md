---
title: Başlarken
sidebar_position: 1
---

# 📘 BÖLÜM 1: Bulutun Görünmez Anlaşması
## Alt Başlık: Paylaşılan Sorumluluk Modeli

Bulut dünyasına ilk adımınızı attığınızda, muhtemelen her şeyin sihirli bir şekilde Microsoft tarafından halledileceğini düşünüyorsunuz. Ancak bulut, aslında sizinle bulut sağlayıcısı (Azure) arasında imzalanmış, görünmez bir ortaklık anlaşmasıdır. Bu anlaşmanın adı **"Paylaşılan Sorumluluk Modeli"**dir.

Bu bölümde, fiziksel güvenliğin derinliklerinden, verilerinizin korunmasına kadar kimin neden sorumlu olduğunu, bir **Balık Ziyafeti** üzerinden inceleyeceğiz.

---

### 🎣 1. On-Premises: "Kendi Balığını Tutmak" (Tam Sorumluluk)
Diyelim ki kendi ofisinizde, kendi sunucunuzla çalışıyorsunuz. Bu, sabah erkenden kalkıp oltanızla denize gitmeye benzer.

* **Fiziksel Güvenlik:** Odaya sadece yetkili kişilerin girmesini sağlamak, kabloların sağlamlığından emin olmak, odanın sıcaklığını (soğutma) kontrol etmek tamamen sizin işinizdir. Eğer birisi fiziksel olarak sunucunuza dokunabiliyorsa, verileriniz tehlikededir.
* **Dijital Yönetim:** Sunucuyu satın almak, üzerine Windows veya Linux kurmak, her gece güvenlik yamalarını (patching) tek tek yüklemek sizin omuzlarınızdadır.
* **Özet:** Binadan, elektrikten, ağ kutularından ve o sunucu üzerindeki her bir bitten siz sorumlusunuzdur. Başka kimse gelip size yardım etmez.

### 🛥️ 2. IaaS: "Tekne ve Ekipman Kiralamak" (Hizmet Olarak Altyapı)
Artık Azure dünyasındasınız. Bu modelde, Azure size profesyonel bir tekne ve mutfak sağlar. 

* **Azure'un Sorumluluğu:** Microsoft, devasa veri merkezlerini (binayı) korur. Fiziksel ağ kablolarından, sunucuların elektriğinden ve o binaya yabancıların girmesini engellemekten sorumludur. Fiziksel katman tamamen Azure'undur.
* **Sizin Sorumluluğunuz:** Azure size "boş bir bilgisayar" (Sanal Makine) verir. İşte çizgi tam burada çekilir: İşletim sistemi seviyesinden itibaren sorumluluk sizdedir. Yamaları yüklemek, güvenlik duvarı ayarlarını yapmak ve uygulamayı kurmak sizin görevinizdir.
* **Azure Ürünü:** **Azure Virtual Machines (VM)**.

### 🍽️ 3. PaaS: "Balık Restoranına Gitmek" (Hizmet Olarak Platform)
Bu seviyede, işletim sistemiyle uğraşma zahmetinden kurtulursunuz. Bir restorana gidip sipariş vermek gibidir.

* **Paylaşılan Alan:** Burası ilginçtir; ağ ve güvenlik duvarı sorumluluğu artık ortaktır. Azure size "kapıları" sunar; hangi IP adreslerinin geçebileceğine veya hangi kapıların kapalı kalacağına siz karar verirsiniz.
* **Azure'un Sorumluluğu:** Fiziksel donanım, elektrik ve en önemlisi **işletim sistemi** (OS). Azure, sunucuyu sizin yerinize günceller ve ayakta tutar.
* **Sizin Sorumluluğunuz:** Kendi tarifiniz (kodunuz) ve masadaki misafirleriniz (kullanıcı hesaplarınız).
* **Azure Ürünü:** **Azure App Services** veya **Azure SQL Database**.

### 🍱 4. SaaS: "Hazır Hamsi Siparişi" (Hizmet Olarak Yazılım)
En üst seviye soyutlamadır. Sadece paketi açar ve kullanırsınız.

* **Süreç:** Yazılımın nasıl çalıştığından, sunucusundan veya güncellemesinden sorumlu değilsiniz. SQL veritabanı veya bir mail uygulaması size hazır sunulur.
* **Ortak Sorumluluk:** Kimin sisteme giriş yapabileceği (Kimlik Doğrulama). Hesapları siz oluşturursunuz, ancak bu hesapların güvenliğini sağlamak için gerekli araçları Azure sunar.
* **Sizin Sorumluluğunuz:** Verileriniz, erişim kontrolünüz ve bağlanan cihazlarınız.
* **Azure Ürünü:** **Microsoft 365 (Teams)** veya **Azure Portal**.

---

## 💡 Kitabın Notu: Altın Kural (Unutma!)
Hangi modeli seçerseniz seçin, aşağıdaki 3 şey **daima ve sadece** müşterinin (yani sizin) sorumluluğundadır:

1.  **Veriler (Information and Data):** Balığın tadı ve kalitesi.
2.  **Cihazlar (Endpoints):** Balığı yediğiniz çatal ve tabağın temizliği.
3.  **Hesaplar (Accounts and Identities):** Sofranıza kimi davet ettiğiniz.

> Bu modelin en önemli noktası şudur: Sorumluluk Azure'a kaydıkça sizin yükünüz azalır, ancak verilerinizin güvenliği her zaman sizin elinizdedir.