# 🚀 NestJS Users API

A professional, production-ready backend service built with **NestJS** and **MongoDB**. This project implements a clean, modular architecture for user management, featuring robust data validation and interactive documentation.

## 🔗 Live Demo & Documentation
*   **Live API Documentation (Swagger):** [https://nestjs-users-api-production-b4af.up.railway.app/api](https://nestjs-users-api-production-b4af.up.railway.app/api)
*   **Base API URL:** `https://nestjs-users-api-production-b4af.up.railway.app`

> **Note:** The API is hosted on Railway. If the link takes a moment to load, the server may be "waking up" from an idle state.

---

## 🛠 Tech Stack

*   **Runtime:** Node.js
*   **Framework:** NestJS (TypeScript)
*   **Database:** MongoDB (via Mongoose ODM)
*   **Documentation:** Swagger / OpenAPI 3.0
*   **Deployment:** Railway

---

## ✨ Key Features

*   **Modular Design:** Optimized for scalability using NestJS modules, providers, and controllers.
*   **CRUD Operations:** Full implementation for creating, reading, updating, and deleting user records.
*   **Interactive API Docs:** Built-in Swagger UI for real-time testing of all endpoints.
*   **DTO Validation:** Integrated `class-validator` to ensure data integrity and security.
*   **Global Exception Handling:** Consistent and professional error responses.
*   **CORS Enabled:** Ready to be consumed by frontend applications.

---

## 📸 API Documentation Preview

![Swagger UI Screenshot](https://raw.githubusercontent.com/BismaAbbasi/nestjs-users-api/main/screenshot.png)
> *I have integrated Swagger to ensure that any developer can easily understand and test the API endpoints directly from the browser.*

---

## 🏗 Project Architecture

```text
src/
├── users/
│   ├── dto/            # Data Transfer Objects for request validation
│   ├── schemas/        # Mongoose/MongoDB schemas
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── main.ts             # Application bootstrap & Swagger config
└── app.module.ts       # Root module
