# 🚀 Next.js Multi-Page Dashboard App

A modern **multi-page dashboard application** built using **Next.js (App Router)**.
This project demonstrates core Next.js concepts like **nested routing, layouts, loading UI, error handling, and dynamic routing**.

---

## 📌 Features

* ✅ App Router (Next.js latest structure)
* ✅ Nested Routes (`/dashboard/analytics`, `/dashboard/settings`)
* ✅ Nested Layouts (Shared Sidebar)
* ✅ Loading UI (`loading.js`)
* ✅ Error Handling (`error.js`)
* ✅ Dynamic Routing (`/blog/[id]`)
* ✅ Client-side navigation using `Link`

---

## 🏗️ Project Structure

```
app/
 ├── layout.js              # Root layout
 ├── page.js                # Home page

 ├── dashboard/
 │    ├── layout.js         # Dashboard layout (Sidebar)
 │    ├── page.js           # Dashboard Home
 │    ├── loading.js        # Loading UI
 │    ├── error.js          # Error UI
 │    ├── analytics/
 │    │     └── page.js
 │    ├── settings/
 │    │     └── page.js

 ├── blog/
 │    └── [id]/
 │          └── page.js     # Dynamic route
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/Malihafatima1/next-dashboard-app.git
```

2. Navigate to project folder:

```
cd next-dashboard-app
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🧪 Routes to Test

* `/` → Home Page
* `/dashboard` → Dashboard Home
* `/dashboard/analytics` → Analytics Page
* `/dashboard/settings` → Settings Page
* `/blog/1` → Dynamic Blog Page

---

## 🧠 Concepts Covered

* 📂 File-based routing in Next.js
* 🧩 Layouts and nested layouts
* 🔄 Client-side navigation
* ⏳ Loading states
* ❌ Error boundaries
* 🔗 Dynamic routes

---

## 🚀 Future Improvements

* Add authentication (Login/Signup)
* Fetch real data using APIs
* Improve UI with Tailwind CSS
* Add database integration

---

## 👩‍💻 Author

**Maliha Fatima**

* MCA Graduate
* Aspiring Full Stack Developer

---

## ⭐ Acknowledgements

Built as part of learning **Next.js App Router** and modern web development.
