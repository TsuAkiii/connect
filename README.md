# Connect - A Modern Contact Management App
Connect is a responsive and intuitive Single Page Application (SPA) for managing personal and professional contacts. Built entirely with Angular, this project demonstrates a strong command of modern front-end architecture, component-based design, and state management.

The primary goal of this project is to showcase advanced front-end skills in a standalone environment, simulating a real-world application that would typically connect to a REST API.

# 🚀 Live Demo
[>>> [demo](https://connect-tsuakiiis-projects.vercel.app/) <<<]

# ✨ Key Features
Create, Read, Update & Delete (CRUD): Full functionality to manage your contacts.

Reactive Forms: Robust and scalable forms for adding and editing contacts with real-time validation.

Dynamic Search: Instantly filter the contact list as you type.

Clean & Responsive UI: A professional and user-friendly interface built with Angular Material that works seamlessly on all screen sizes.

Component-Based Architecture: The application is logically structured into reusable and maintainable components.

# 🎯 Technical Focus: API Simulation & State Management
This project deliberately operates without a back-end to place a strong emphasis on front-end development patterns.

Instead of making real HTTP calls, a dedicated mock data service (ContactDataService) is used to simulate the behavior of a REST API. This service uses RxJS Observables to provide asynchronous data, perfectly mimicking how an Angular application would interact with a live server.

This approach demonstrates:

Separation of Concerns: The data logic is completely decoupled from the components that display it.

Dependency Injection: The mock service is injected into components, meaning it could be swapped with a real HttpClient-based service with zero changes to the components themselves.

Mastery of RxJS: Handling asynchronous data streams, which is a core skill for any modern web developer.

# 🛠️ Tech Stack
Framework: Angular

Language: TypeScript

UI Library: Tailwinds for a high-quality.

Reactive Programming: RxJS for managing asynchronous operations and data streams.

Forms: Angular Reactive Forms for powerful and testable form controls.
