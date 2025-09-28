
# 📊 **Admin Dashboard Frontend-Only (School Manager Example)**

## Features You’ll Build:

1. **Auth (mocked)**

   * Login page (email + password).
   * Store "JWT" (fake token) in `localStorage`.
   * Redirect to dashboard if logged in.

2. **Dashboard Overview**

   * Cards for **Students, Teachers, Expenses, Reports**.
   * Use **charts** (Recharts or Chart.js) for quick analytics.

3. **CRUD Tables**

   * **Students Table**: list students (GET), add new (POST), edit (PUT), delete (DELETE).
   * **Teachers Table**: same as above.
   * Use **MockAPI.io** or [JSON Server](https://github.com/typicode/json-server) to simulate the API.

4. **Attendance & Reports (frontend only)**

   * Attendance marking with toggle (present/absent).
   * Reports form (store data in mock API).

5. **Expenses**

   * Simple form to add an expense.
   * Table to show expense history.

6. **UI/UX polish**

   * Dark/Light mode toggle.
   * Responsive sidebar + navbar.
   * Notifications / toasts.

---

## 🔹 Tools/Stack:

* **Framework**: Next.js (App Router).
* **Styling**: TailwindCSS (fast + utility classes).
* **Charts**: Recharts / Chart.js.
* **State Management**: React Query (for API calls + caching).
* **API**: MockAPI.io (quick fake REST backend).

---

## 🔹 Sample API (MockAPI.io)

You can set up **collections** like this:

* **Students API**:
  `GET https://mockapi.io/api/v1/students`
  Example response:

  ```json
  [
    { "id": "1", "name": "John Doe", "class": "Grade 5", "dob": "2013-05-01" },
    { "id": "2", "name": "Mary Smith", "class": "Grade 6", "dob": "2012-09-14" }
  ]
  ```

* **Teachers API**:
  `GET https://mockapi.io/api/v1/teachers`

  ```json
  [
    { "id": "1", "name": "Mr. Brown", "subject": "Math", "salary": 1500 },
    { "id": "2", "name": "Ms. Green", "subject": "English", "salary": 1200 }
  ]
  ```

* **Expenses API**:
  `POST https://mockapi.io/api/v1/expenses`

  ```json
  { "id": "1", "type": "Exam Fees", "amount": 500, "date": "2025-09-14" }
  ```

---

## 🔹 Directory Example in Next.js

```
school-dashboard/
├── app/
│   ├── login/            # Login page
│   ├── dashboard/        # Protected dashboard
│   │   ├── students/     # CRUD student table
│   │   ├── teachers/     # CRUD teacher table
│   │   ├── expenses/     # Expense management
│   │   ├── reports/      # Reports & attendance
│   ├── layout.tsx        # Sidebar + Navbar
│   ├── globals.css
│
├── lib/
│   ├── api.ts            # fetch wrappers
│   ├── auth.ts           # login/logout utils
│
├── components/
│   ├── ui/               # Buttons, modals, cards
│   ├── charts/           # Recharts components
│
└── package.json
```

---

👉 This way you’re **not building a backend**, but you’re still **building a production-style frontend** with real API integration (mocked).

---

⚡ So to answer your question directly:
A **sample project to use** = **Frontend-Only Admin Dashboard for School Management**, powered by **Next.js + Tailwind + MockAPI.io**.

---

Do you want me to **draft the Day 1 → Day 5 roadmap** for this frontend-only version (like we did before for fullstack), so you can follow it step by step?
# hostel-manager
