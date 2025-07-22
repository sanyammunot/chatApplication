# Real-Time Chat Application

A modern, responsive chat application with real-time messaging and secure user authentication. Built with scalability, performance, and user experience in mind.

## 🌐 Live Demo


## 📽️ Project Overview

This is a full-featured real-time chat app where users can:

- Register and log in securely
- Chat in real-time with other users
- View online/offline status of users
- Access previous messages upon joining
- Use it seamlessly across desktop and mobile devices

It is designed using a clean architecture and modern tech stack that ensures performance and maintainability.

---

## 🚀 Features

- 🔐 **User Authentication**: Signup/login with password hashing and session management
- 💬 **Real-time Messaging**: Instant bidirectional communication using Socket.IO
- 🟢 **User Presence**: Know who’s currently online
- 🕒 **Chat History**: Persistent message storage with MongoDB
- 📱 **Responsive UI**: Mobile-first design with Tailwind CSS

---

## 🧰 Tech Stack

### 📦 Frontend
- **React** – JavaScript library for building UIs
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Socket.io-client** - Real-time client-side communication

### 🔧 Backend
- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Web application framework
- **Socket.IO** – Real-time communication
- **MongoDB** – NoSQL database for storing chats and users
- **JWT** – JSON Web Tokens for secure authentication

  ### Additional Tools
- **npm / yarn** – Package managers
- **Nodemon** – Hot-reloading server in development
- **CORS** – Cross-Origin Resource Sharing support

---

## 📁 Project Structure
```
chatApplication/
├── client/ # Frontend React application
│ ├── public/ # Static assets (favicon, index.html, etc.)
│ ├── src/
│ │ ├── components/ # Reusable UI components (buttons, inputs, etc.)
│ │ ├── pages/ # Application-level pages (Login, Chat, etc.)
│ │ ├── services/ # API handlers and Socket.IO client setup
│ │ ├── utils/ # Helper functions and utilities
│ │ └── styles/ # CSS or SCSS files for global styling
│ └── package.json # Frontend dependencies and scripts
│
├── server/ # Backend Node.js application
│ ├── controllers/ # Express route handlers (auth, messages)
│ ├── models/ # Mongoose or DB schema models
│ ├── routes/ # Express API route definitions
│ ├── middleware/ # Auth checks, error handlers, CORS, etc.
│ ├── config/ # Database connection and config
│ └── package.json # Backend dependencies and scripts
│
└── README.md # Project documentation
```

## 🧑‍💻 Usage Guide

### 🚀 Getting Started
1. Open the app in your web browser.
2. Register a new account or log in with your existing credentials.
3. Create a new chat room or join an existing one using the room code.
4. Start chatting in real-time!

### 💬 Messaging
- Type your message in the input field at the bottom of the chat window.
- Press **Enter** or click the **Send** button.
- Your message will appear instantly for all users in the room.
- **Chat history** is saved and will persist between sessions.


