# 🚀 Dynamic Blog Explorer (Next.js)

A modern web application built using **Next.js App Router** to demonstrate **Dynamic Route Segments**, **Nested Routing**, and **Real API Integration**.

---

## 📌 Project Overview

This project showcases how dynamic routing works in Next.js by building a blog explorer with:

* Dynamic categories
* Nested dynamic routes
* Real-time data fetching from an API
* Loading and error handling

---

## 🧠 Key Concepts Covered

* 🔹 Dynamic Route Segments (`[category]`, `[post]`)
* 🔹 Nested Routing in Next.js
* 🔹 Server Components (data fetching)
* 🔹 Real API Integration
* 🔹 Loading UI (`loading.js`)
* 🔹 Error Handling (`error.js`)

---

## 🌐 Routes Structure

| Route                     | Description            |
| ------------------------- | ---------------------- |
| `/`                       | Home Page              |
| `/blog`                   | List of categories     |
| `/blog/[category]`        | Posts under a category |
| `/blog/[category]/[post]` | Individual blog post   |

---

## 📁 Folder Structure

```
app/
 ├── page.js
 ├── blog/
 │    ├── page.js
 │    ├── [category]/
 │    │    ├── page.js
 │    │    ├── loading.js
 │    │    └── [post]/
 │    │         ├── page.js
 │    │         ├── loading.js
 │    │         └── error.js
```

---

## ⚙️ Tech Stack

* Next.js (App Router)
* React
* JavaScript
* CSS (basic styling)

---

## 🔌 API Used

Data is fetched from:

```
https://jsonplaceholder.typicode.com/posts
```

---

## ✨ Features

* 📚 Dynamic category-based navigation
* 📝 Real-time blog posts using API
* ⚡ Fast server-side rendering
* ⏳ Loading states for better UX
* ❌ Error handling for stability

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/Malihafatima1/dynamic-blog-explorer.git
cd dynamic-blog-explorer
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🎯 What I Learned

* How dynamic routing works in Next.js
* How to build scalable URL structures
* How to fetch and display API data in Server Components
* How to handle loading and error states

---

## 💡 Future Improvements

* Add SEO optimization (dynamic metadata)
* Improve UI using Tailwind CSS
* Add search and filtering
* Deploy on Vercel

---

## 📌 Author

**Maliha Fatima**

---

## 🌟 Show your support

If you like this project, give it a ⭐ on GitHub and share your feedback!

---

## 📢 Connect with me

Let’s connect and grow together 🚀
