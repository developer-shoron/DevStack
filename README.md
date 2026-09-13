# Dev Stack

Dev Stack is a modern and responsive web application where developers can explore different technologies and build their own development stack. Users can add technologies to their stack, remove them, and view useful information about each technology.

## 🚀 Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React Icons
* React-Toastify
* JSON
* Vite

## ✨ Features

* 🔍 **Explore Technologies** — Browse different frontend, backend, database, styling, language, and other development technologies.
* 🧩 **Build Your Stack** — Add your favorite technologies to a personal stack and remove them whenever needed.
* 🔔 **Interactive UI & Notifications** — Responsive design with FAQ accordion, loading state, and toast notifications for stack actions.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage changing data inside a React component.

In this project, I used it to manage the selected technology stack, FAQ open state, technology data, and loading-related state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code after a component renders.

I used it to fetch the technology and FAQ JSON data when the components load.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which items changed, were added, or were removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, in the stack section, I show an empty message when there are no selected technologies:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

A child can send something back by calling a function passed from the parent as a prop.

For example:

```tsx
<TechnologyCard
  tech={tech}
  onAdd={handleAddToStack}
/>
```

Here, `tech` and `onAdd` are passed from the parent to the child. The child calls `onAdd(tech)` when the user clicks the button.
