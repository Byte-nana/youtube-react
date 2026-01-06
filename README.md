<div align="center">

<img src="./public/favicon/favicon-96x96.png" alt="You can TO DO App Icon" width="100" style="border-radius: 20px" />

# 📺 YouTube Clone — React Project

![Status](https://img.shields.io/badge/status-in%20progress-yellow?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

A **YouTube-style video browsing application** built with **React (Vite)**.  
This project focuses on **data-driven UI**, **API integration**, **routing**, and **scalable project structure**, rather than visual originality.

> 🧩 Version 1.0.0 — Initial implementation featuring video listing, search, routing, and YouTube Data API integration.

---

## 🎮 Live Demo

🔗 [**Try the App on Netlify**](https://nanatube.netlify.app/)

---

## 🎞️ Preview GIF Template

<div>
    <a href="https://www.loom.com/share/caa72ba60f694ecbaa65871e557fe87b">
      <p>NanaTube</p>
    </a>
    <a href="https://www.loom.com/share/caa72ba60f694ecbaa65871e557fe87b">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/caa72ba60f694ecbaa65871e557fe87b-eec00b55c97c7984-full-play.gif#t=0.1">
    </a>
  </div>

---

## 💡 Project Overview

This project is a **React-based YouTube clone** that fetches real video data from the **YouTube Data API** and displays it using a modern frontend stack.

The app supports:

- Video browsing
- Search results
- Video detail views
- Channel and metadata rendering

The primary goal of this project is **learning and architectural practice**, rather than pixel-perfect design replication.

---

## 🎯 Why I Built This Project

### Project Motivation & Learning Goals

This project was built as part of my learning journey with **React (Vite)**, with the aim of moving beyond small-scale demo applications and experiencing a more realistic, data-driven frontend project.

I chose to build a **YouTube clone** because it represents a familiar product with significantly higher complexity than a typical Todo app. Rather than focusing on visual originality, my intention was to practise **core frontend engineering skills** that are commonly required in real-world applications.

---

### 🔑 Key Learning Objectives

#### 1. Working with External APIs

I integrated the **YouTube Data API** to fetch videos, channel information, and statistics.  
This helped me understand:

- Asynchronous data handling
- Loading and error states
- API response structures
- Request testing and validation using **Postman**

---

#### 2. Managing Application State & Re-rendering

Through this project, I gained a deeper understanding of:

- How React components render and re-render
- How state changes propagate through the component tree
- How to derive UI directly from data
- How **React Query** simplifies server-state management

---

#### 3. Project Structure & Scalability

Unlike vanilla HTML/CSS/JavaScript projects, React requires thinking about structure early.  
This project helped me learn how to organise:

- Components
- Hooks
- API logic
- Utilities

in a way that supports **readability, maintainability, and future extension**.

---

#### 4. Routing & Navigation

I implemented **client-side routing** to handle multiple views such as:

- Home
- Video detail
- Search results

This improved my understanding of:

- URL-based navigation
- Passing state between routes
- Managing application flow with **React Router**

---

#### 5. Debugging Real-World Issues

While developing this project, I encountered and resolved common issues such as:

- Undefined or missing API data
- Asynchronous timing problems
- Component rendering bugs

These challenges significantly strengthened my **debugging and problem-solving skills**.

---

### 🧠 Why Clone Coding?

Clone coding allowed me to focus on **engineering decisions rather than design choices**.  
By working with a well-known product, I could concentrate on:

- React’s mental model
- Data flow
- Application architecture

These skills are **directly transferable to professional frontend development**.

---

## 🧩 Key Features

| Feature                | Description                                          |
| :--------------------- | :--------------------------------------------------- |
| 🔍 Video Search        | Search videos using the YouTube Data API             |
| 📺 Video List          | Display trending or searched videos                  |
| 🧾 Video Detail        | Dedicated video detail view                          |
| 🧭 Client-side Routing | Navigation between pages using React Router          |
| ⏱️ Relative Time       | Display publish time using `timeago.js`              |
| ⚡ API Caching         | Efficient data fetching and caching with React Query |

---

## 🧠 Tech Stack

| Category      | Technology       |
| :------------ | :--------------- |
| Framework     | React 18 (Vite)  |
| Styling       | Tailwind CSS     |
| Routing       | React Router     |
| Data Fetching | Axios            |
| Server State  | React Query      |
| API           | YouTube Data API |
| Utilities     | timeago.js       |
| API Testing   | Postman          |
| Build Tool    | Vite             |

---

## 📁 Project Structure (Simplified)

```
src/
├── components/
├── pages/
├── hooks/
├── api/
├── utils/
├── App.jsx
├── main.jsx
```

_(Exact structure may evolve as features are added.)_

---

## 🧩 Future Improvements

- 🔐 Environment variable management for API keys
- 📱 Improved responsive design
- 🎨 UI refinement and accessibility improvements
- ♻️ Refactoring reusable components
- 🧪 Error boundary and fallback UI

---

## 👩‍💻 About the Developer

**Developed by [Byte-nana](https://github.com/Byte-nana)**  
Aspiring front-end developer focused on building **scalable, data-driven React applications** and understanding modern frontend architecture.

---

<div align="center">
  <sub>Built with curiosity, debugging, and many re-renders • 2026</sub>
</div>
