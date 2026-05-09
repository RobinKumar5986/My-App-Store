<div align="center">



<img src="https://robinkumar5986.github.io/My-App-Store/generalImages/logo.png" alt="AppVault Logo" width="350" height="120" />

### 🌐 [👉 Visit AppVault — Live Site](https://robinkumar5986.github.io/My-App-Store/)

# AppVault — Android App Store

**A sleek, modern personal Android app store built and hosted on GitHub Pages.**  
Discover, browse, and install APKs directly on your Android device — no Play Store required.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-AppVault-4f46e5?style=for-the-badge)](https://robinkumar5986.github.io/My-App-Store/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br/>

![AppVault Hero](https://robinkumar5986.github.io/My-App-Store/generalImages/hero-banner.png)

</div>

---

## 📖 Table of Contents

- [✨ About the Project](#-about-the-project)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📸 Screenshots](#-screenshots)
- [⚙️ Getting Started](#️-getting-started)
- [📂 Project Structure](#-project-structure)
- [📦 Adding New Apps](#-adding-new-apps)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ About the Project

**AppVault** is a personal Android app store hosted on GitHub Pages. It was built to create a centralized, beautiful hub for distributing APK files — completely free, without needing the Google Play Store.

Whether you're sharing your own Android apps, tools, or utilities with friends and users, AppVault gives you a polished storefront with zero backend infrastructure required.

> 💡 All APKs hosted on AppVault are **safe, verified, and directly installable** on any Android device.

---

## 🚀 Features

- 🎨 **Modern UI** — Clean, responsive design that looks great on all screen sizes
- 🔍 **Search Functionality** — Instantly search through all available apps
- 🗂️ **Category Filtering** — Browse apps by category with one click
- 📱 **Direct APK Install** — Download and sideload APKs directly to your Android device
- 🆓 **100% Free Downloads** — All apps are available at no cost
- ✅ **Verified Apps** — Every APK is safe and hand-picked
- ⚡ **Zero Backend** — Pure static site, hosted for free via GitHub Pages
- 🌐 **Always Online** — Reliable hosting with GitHub's infrastructure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Styling, animations & responsive layout |
| **Vanilla JavaScript** | Dynamic content, search & filtering |
| **GitHub Pages** | Free static hosting & deployment |

---

> 📌 *Visit the [live site](https://robinkumar5986.github.io/My-App-Store/) to see it in action!*

---

## ⚙️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- [Git](https://git-scm.com/) installed on your system
- *(Optional)* [VS Code](https://code.visualstudio.com/) with the **Live Server** extension

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/robinkumar5986/My-App-Store.git
   ```

2. **Navigate into the project folder**

   ```bash
   cd My-App-Store
   ```

3. **Open in your browser**

   - Simply open `index.html` in your browser, **or**
   - Use VS Code's **Live Server** extension for hot-reload during development:
     - Right-click `index.html` → *Open with Live Server*

---

## 📂 Project Structure

```
My-App-Store/
│
├── index.html              # Main entry point
├── style.css               # Global styles
├── script.js               # App logic (search, filter, rendering)
│
├── generalImages/          # Static assets
│   ├── logo.png            # AppVault logo
│   ├── hero-banner.png     # Hero section banner
│   ├── search-icon.png     # Search UI icon
│   └── filter.png          # Filter UI icon
│
├── apps/                   # (Your APK files go here)
│   └── ...
│
└── README.md               # Project documentation
```

---

## 📦 Adding New Apps

To add a new app to your store:

1. **Add the APK file** to your `apps/` directory (or host it externally).

2. **Update your app data** in `script.js` (or your data source file) with the app's details:

   ```javascript
   {
     name: "My Awesome App",
     category: "Tools",
     description: "A short description of what the app does.",
     version: "1.0.0",
     icon: "path/to/icon.png",
     apkUrl: "apps/my-awesome-app.apk"
   }
   ```

3. **Commit and push** your changes — GitHub Pages will automatically redeploy within a minute.

---

## 🚢 Deployment

This project is deployed automatically via **GitHub Pages**.

### Steps to deploy your own fork:

1. **Fork** this repository
2. Go to your repo's **Settings** → **Pages**
3. Under **Source**, select the `main` branch and `/ (root)` folder
4. Click **Save** — your site will be live at:
   ```
   https://<your-username>.github.io/My-App-Store/
   ```

> ✅ Every `git push` to the `main` branch automatically updates the live site.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request**

Please make sure your code follows the existing style and structure of the project.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👨‍💻 Author

<div align="center">

**Robin Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-robinkumar5986-181717?style=for-the-badge&logo=github)](https://github.com/robinkumar5986)

*Built with ❤️ — AppVault · All APKs are safe and verified*

</div>

---

<div align="center">

⭐ **If you found this project useful, please give it a star!** ⭐

</div>
