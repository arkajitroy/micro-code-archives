# React Error Boundary System (Advanced Example)

## 📚 Overview

This is a **production-level React + TypeScript system** demonstrating how to implement **robust error boundaries** using `react-error-boundary` along with `react-query` for async data fetching and management. The app includes **nested routes**, **API calls to DummyJSON**, **loading skeletons**, and **component-level error handling**. Built with **Tailwind CSS** and **shadcn/ui** for modern UI.

---

## ⚙️ Tech Stack

- **React 18+ (TypeScript)**
- **React Router v6** (nested routing)
- **React Query (TanStack Query)** — async state management
- **Axios** — API client
- **React Error Boundary (react-error-boundary)**
- **Tailwind CSS + shadcn/ui** — styled UI components

---

## 🚀 Features

- **Global Error Boundary**: Wraps entire app for unexpected errors.
- **Route-level Error Boundaries**: Isolated error handling for each route.
- **Component-level Error Handling**: Independent error boundary for widgets if needed.
- **Data Fetching**: API integration via DummyJSON.
- **Loading Skeletons**: Beautiful loading states with shadcn skeleton components.
- **Retry & Reset**: Errors have retry mechanism baked-in.

---

## 🧠 Error Handling Strategy

| Level               | Implementation                                        |
| ------------------- | ----------------------------------------------------- |
| **Global**          | `ErrorBoundary` around `<BrowserRouter>` in `App.tsx` |
| **Route-level**     | `ErrorBoundary` wrapping each route element           |
| **Component-level** | Can wrap components/widgets independently as needed   |

### 🔑 Example Usage

```tsx
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <SomeComponent />
</ErrorBoundary>
```

**FallbackComponent** shows error message and a reset button.

---

## 🌐 API Endpoints Used

- `https://dummyjson.com/users` — List of users
- `https://dummyjson.com/users/:id` — User detail
- `https://dummyjson.com/products` — Products listing

---

## 🛠 Setup & Run

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <project-directory>
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the app

```bash
yarn dev
# or
npm run dev
```

### 4. Open in browser

```
http://localhost:5173/
```

---

## ✅ How to Extend

- **Add new route**: Create a file under `routes/`, add route in `App.tsx` wrapped with error boundary.
- **Add API call**: Use `useQuery` in a new hook under `hooks/` and consume in component.
- **Component-level error handling**: Wrap critical components with `ErrorBoundary` as needed.

---

## ⚡ Example Extensions (Ideas)

- Add dark/light mode toggle using shadcn theme utilities.
- Add toast notifications using `@/components/ui/toast` for success/error feedback.
- Pagination for users/products.
- Search functionality (e.g., filter users by name).

---

## 🔑 Key Libraries

| Library                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `react-query`          | API fetching, caching, state management |
| `react-error-boundary` | Graceful error handling                 |
| `react-router-dom`     | Client-side routing                     |
| `axios`                | API requests                            |
| `tailwindcss`          | Utility-first CSS                       |
| `shadcn/ui`            | Beautiful UI components                 |

---

## ✍️ Author Notes

This system is designed to be **scalable, extendable, and production-friendly**. The error boundaries are structured so that you can **catch issues at different layers** without taking down the whole app, **like in real-world apps**. Extend it, play with it, and feel free to ask for additional features or explanations!

---

## 🔗 Useful Links

- [React Error Boundary](https://www.npmjs.com/package/react-error-boundary)
- [React Query](https://tanstack.com/query/v4)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [DummyJSON API](https://dummyjson.com/)

---

## 🙌 Enjoy Building!
