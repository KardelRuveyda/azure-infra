---
title: What is Cloud Computing?
sidebar_position: 1
---

# 📘 CHAPTER 1: The Invisible Contract
## Subtitle: Shared Responsibility Model

When you start using the cloud, you might think Microsoft does everything for you. But the cloud is actually an invisible partnership between you and the cloud provider (Azure). This partnership is called the **"Shared Responsibility Model."**

In this chapter, we will look at who is responsible for what—from physical cables to your data—using the **Fish Banquet** analogy.

---

### 🎣 1. On-Premises: "Catching Your Own Fish" (Full Responsibility)
Imagine you are running a server in your own office. It is like waking up early and going to the sea to catch your own fish.

* **Physical Security:** You must make sure no one enters the server room without permission. You are responsible for the cooling (AC), the cables, and the electricity. If someone touches your physical server, your data is at risk.
* **Digital Management:** You must buy the server, install Windows or Linux, and manually install security patches every night.
* **Summary:** You are 100% responsible for everything, from the building to every single bit of data. No one is coming to help you.

### 🛥️ 2. IaaS: "Renting a Boat and Equipment" (Infrastructure)
Now you are in Azure. In this model, Azure provides the professional boat and the kitchen.

* **Azure’s Responsibility:** Microsoft protects the massive data centers (the buildings). They manage the physical cables, the power, and the security guards. The physical layer belongs to Azure.
* **Your Responsibility:** Azure gives you a "blank computer" (a Virtual Machine). This is where the line is drawn: You are responsible for the **Operating System**. You must install updates, set up firewalls, and manage your apps.
* **Azure Product:** **Azure Virtual Machines (VM)**.

### 🍽️ 3. PaaS: "Going to a Fish Restaurant" (Platform)
At this level, you don't need to worry about the operating system. It is like going to a restaurant and ordering a meal.

* **The Shared Area:** This is interesting; network and firewall responsibility is now shared. Azure gives you the "gates"; you decide which IP addresses can pass and which gates remain closed.
* **Azure’s Responsibility:** Physical hardware, power, and most importantly, the **Operating System**. Azure updates the server for you.
* **Your Responsibility:** Your own recipe (code) and your guests (user accounts).
* **Azure Product:** **Azure App Services** or **Azure SQL Database**.

### 🍱 4. SaaS: "Ordering Anchovy Delivery" (Software)
This is the highest level of abstraction. You just open the box and use it.

* **The Process:** You are not responsible for how the software works or its updates. The application (like a database or email) is ready for you.
* **Shared Responsibility:** Identity (who can log in). You create the accounts, but Azure provides the tools to keep them safe.
* **Your Responsibility:** Your data, your access control, and your connected devices.
* **Azure Product:** **Microsoft 365 (Teams)** or the **Azure Portal**.

---

## 💡 Book Note: The Golden Rule (Don't Forget!)
No matter which model you choose, these 3 things are **always and only** your responsibility:

1.  **Data (Information and Data):** The taste and quality of the fish.
2.  **Devices (Endpoints):** The cleanliness of the fork and plate you use to eat.
3.  **Accounts (Identities):** Who you invite to your table.

> **Key Point:** As more responsibility moves to Azure, your workload decreases, but the security of your data is always in your hands.