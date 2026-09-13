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

1. What is JSX, and why is it used in React?

JSX holo React-e HTML-er moto syntax lekhar ekta way. Eta use korle UI code lekha and bujha onek easy hoy.

2. What is the difference between props and state?

Props parent component theke child component-e data pathanor jonno use hoy. Ar state component-er nijer data manage korar jonno use hoy, and eta change hote pare.

3. What does the useState hook do, and where did you use it in this project?

useState component-er data store and update korte help kore. Ei project-e ami eta technology list, selected stack, FAQ-er open item, and loading state manage korar jonno use korechi.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect component render howar por kono specific kaj run korte use hoy. Ami JSON file theke technology and FAQ data fetch korar jonno useEffect use korechi.

5. Why does every item in a .map() list need a unique key prop?

key diye React bujhte pare list-er kon item-ta kon item. Tai kono item add, remove ba update hole React efficiently UI update korte pare.

6. What is conditional rendering? Show one place you used it.

Conditional rendering mane condition-er upor depend kore different UI show kora.

Ami stack section-e eta use korechi. Stack empty thakle empty message show kori, ar technology add korle selected technology-gulo show kori.

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent component theke child component-e data props er maddhome pathano hoy. Ar child theke parent-e kichu pathate hole parent theke ekta function prop hisebe child-e pathano hoy, then child oi function call kore.

Ei project-e TechnologyGrid theke TechnologyCard-e tech and onAdd pass korechi.

Here, `tech` and `onAdd` are passed from the parent to the child. The child calls `onAdd(tech)` when the user clicks the button.
