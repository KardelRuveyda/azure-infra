---
title: "Chapter 1.2: Cloud Models - Where do we fish?"
sidebar_position: 2
---

# 📘 CHAPTER 1.1: The Three Faces of Cloud
## Public, Private, and Hybrid Cloud

In cloud computing, we must ask: "Where is the hardware, and who has access?" The answer leads us to three main cloud models. Understanding these is essential for the AZ-900 exam and real-world design.

---

### 🌐 1. Public Cloud: "The Public Fish Market"

A public cloud is available to the general public. It is a shared pool of resources offered over the internet.

* **Ownership:** Microsoft Azure owns and manages the hardware and network. You simply subscribe to the services.
* **No Hardware Stress:** You don't buy physical servers or fix broken parts. All you need is an Azure account.
* **Cost (OpEx):** This follows the "pay-as-you-go" model. In accounting, it is called **Operational Expenditure (OpEx)**. It is a regular monthly cost, not a big upfront investment.
* **Most Common:** 90% of Azure services are in the Public Cloud.



---

### 🏰 2. Private Cloud: "The Private Fish Pond"

A private cloud is dedicated to a single organization. It is not shared with the public.

* **Ownership:** You own or exclusively rent the hardware. It is isolated for security, performance, or legal reasons.
* **Cost (CapEx):** It requires a large upfront investment because you buy the hardware. This is called **Capital Expenditure (CapEx)**.
* **Azure Local:** Microsoft offers **Azure Local** (formerly Azure Stack HCI) to let you run Azure services on your private hardware.

---

### 🌉 3. Hybrid Cloud: "The Best of Both Worlds"

A hybrid cloud combines public and private environments. It allows data and apps to move between them.

* **Flexibility:** You can keep sensitive data in your private cloud and use the public cloud for massive scalability.
* **Key Tools:**
    * **Azure Arc:** This lets you manage your private servers using the same control panel as your Azure public cloud.
    * **Azure File Sync:** This extends your local infrastructure into the cloud by replicating files to Azure storage.
* **Value:** It offers the security of private infrastructure and the cost efficiency of the public cloud.

---

## 🔑 Quick Comparison Table

| Feature | Public Cloud | Private Cloud | Hybrid Cloud |
| :--- | :--- | :--- | :--- |
| **Cost Type** | OpEx (Monthly charge) | CapEx (Upfront cost) | Both OpEx and CapEx |
| **Ownership** | Microsoft Azure | You / Your Company | Both |
| **Access** | Open to Public | Restricted / Isolated | Both Public and Private |
| **Core Value** | Speed and Efficiency | Control and Compliance | Ultimate Flexibility |

---
*Kardel Ruveyda Cetin - 2026*