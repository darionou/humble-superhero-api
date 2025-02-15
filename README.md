# 🦸‍ Humble Superhero API

## Overview
Humble Superhero API is a RESTful service built with **NestJS** and **TypeScript** that lets you manage superheroes. You can:
- **Add a new superhero** by providing a name, a superpower, and a humility score (from 1 to 10).
- **Retrieve a list of superheroes** ordered by humility score in descending order.

This API is designed following the **Hexagonal Architecture (Ports & Adapters)** pattern, which separates the core domain logic from external concerns (like persistence and delivery), ensuring modularity, testability, and scalability.

## Technologies Used
- **NestJS** – API framework
- **TypeScript** – Strong typing
- **Class-Validator** – Input validation via DTOs
- **Jest** and **Supertest** – End-to-end testing

## Setup & Installation

### 1. Prerequisites
- Node.js
- npm (or yarn)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server (Development Mode)
```bash
npm run start:dev
```
The API will be accessible at http://localhost:4000.

### 4. Running End-to-End Tests
Ensure that the server is not already running (the tests will create their own instance):
```bash
npm run test:e2e
```

### API Endpoints

**POST**	*/superheroes*	Adds a new superhero
**GET**	*/superheroes*	Retrieves a sorted list of heroes


### Key Technical Decisions

**Hexagonal Architecture:** The core domain (entities and repository interfaces) is isolated from external layers (controllers and repository implementations), allowing for easy replacement of components (for example, swapping the in-memory repository for a database-backed one).

**ID Generation in the Repository**:
Instead of handling ID generation in the service layer, the in-memory repository now assigns IDs—this encapsulates persistence logic and simplifies the service.

**Data Validation**:
DTOs use class-validator to ensure that the humility score is within the 1-10 range and that all required fields are present.

### Future Improvements
**Database Integration**: Replace the in-memory store with a persistent database (e.g., PostgreSQL).

**Swagger Documentation**: Integrate Swagger for auto-generated API docs.

**Security Enhancements**: Add authentication (e.g., JWT) to secure API endpoints.

**CI/CD Pipeline**: Automate testing and deployment.

### Conclusion
This API is designed to be modular, scalable, and easy to maintain. Its clean separation of concerns, achieved through Hexagonal Architecture, provides a strong foundation for future growth and enhancements.


