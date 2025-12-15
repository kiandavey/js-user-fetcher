# 👤 Vanilla JS User Fetcher

This project is a practice showcase for fundamental **DOM (Document Object Model) Manipulation** and **Asynchronous JavaScript**. It features a simple interface that fetches a mock user profile from an external API and renders it to the screen using pure JavaScript.

## 🚀 Functionality

* **Trigger Event**: A button click initiates the process.
* **Data Fetching**: Uses the `fetch` API with `async/await` to retrieve data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
* **Dynamic Rendering**:
    * Clears previous content to prevent duplicates.
    * Programmatically creates HTML elements (`<h3>`, `<p>`) using JavaScript.
    * Injects the data into the DOM tree.
* **Error Handling**: Catches network errors and displays a user-friendly failure message.

## 🛠️ Concepts Applied

* **Event Listeners**: `button.addEventListener("click", ...)`
* **DOM Creation**: `document.createElement("h3")` instead of `innerHTML` for better security and performance.
* **DOM Injection**: `profileCard.appendChild(userName)`.
* **Async/Await**: Clean handling of Promises for the network request.

## 💻 Usage

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/vanilla-js-user-fetcher.git](https://github.com/yourusername/vanilla-js-user-fetcher.git)
    ```
2.  **Run the App**:
    * Simply open `index.html` in your web browser.
    * Click the **"Load User Profile"** button to see the data appear.

## 📂 Project Structure

```text
vanilla-js-user-fetcher/
├── index.html      # Structure (Button + Container)
├── styles.css      # Styling (ID Card Layout)  
├── index.js        # Logic (Fetch + DOM Manipulation)
└── README.md       # Documentation
