---
title: "Chapter 1.3: Cloud Economics - Cost Engineering"
sidebar_position: 3
---

# 📘 CHAPTER 1.3: Cloud Economics
## Managing and Optimizing Costs

Cloud pricing can be "tricky" because it changes based on how you use the services. As an architect, you don't just look for the cheapest price; you look for the **right balance** between performance and cost.

---

### 🔍 Section 1: Anatomy of Pricing and Decision Strategy
#### Why is a Virtual Machine (VM) charged differently?

When you add a VM to your "cart," you are renting at least eight variables. Here is the **Architect’s Decision Matrix**:

1.  **Region Strategy: Cost vs. Latency**
    * **Scenario:** If your users are in Europe, do not pick a US region just because it is cheaper. The **latency** (delay) will make your **Frontend** slow.
    * **The Rule:** Choose the region closest to your users for front-facing apps. Use cheaper regions for "background tasks" like **Data Processing**.

2.  **Operating System & Azure Hybrid Benefit**
    * **Scenario:** Running a **Node.js or Python Backend** on Windows is a waste of money. 
    * **The Rule:** Always use Linux for open-source projects. Only use Windows if your app requires it, and use [Azure Hybrid Benefit](https://azure.microsoft.com/en-us/pricing/offers/hybrid-benefit) if you already have licenses.

3.  **Instance Type: The Right Engine for the Job**
    * **Frontend/Web:** Use **B-Series (Burstable)**. They are cost-effective and handle small traffic spikes well.
    * **Databases:** Use **D-Series** (General Purpose) or **E-Series** (Memory Optimized) for stable and heavy workloads.

4.  **Bandwidth (Egress): The Hidden Cost**
    * **The Rule:** Data coming *into* Azure (Ingress) is free. Data going *out* to the internet (Egress) costs money. If your app has many large videos, your bill will increase every time someone watches them.

---

### 🧮 Section 2: Azure Pricing Calculator
#### Strategic Simulation

This tool is more than a calculator; it is your budget plan. 
* **Time Management:** If a VM is only for **Development**, you can plan to shut it down at night. Change the hours from **730 (full month)** to **200 (working hours)** to save money.
* **Reservations:** For a **Production** server that runs 24/7, always use 1 or 3-year reservations. This can save you up to 72% compared to Pay-as-you-go.

---

### ⚠️ Section 3: Deprecated Tool - TCO
The **Total Cost of Ownership (TCO)** calculator is now **Deprecated**. It used to compare on-premises costs (electricity, cooling) with Azure. Today, we use the Pricing Calculator for almost everything.

---
*By Kardel Ruveyda Cetin - 2026*