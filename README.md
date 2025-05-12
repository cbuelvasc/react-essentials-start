# React Essentials Start

This project is a starter template to learn and practice the essential concepts of React. It features a minimal setup using Vite for fast and efficient development, along with the main dependencies: React and ReactDOM.

## Main Features
- React 19
- Vite for development and build
- Simple structure, ready to start

## Available Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Generates the production build.
- `npm run preview`: Previews the production build.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the scripts above to start development or build the project.

## Description
This project serves as a starting point for learning React, allowing you to focus on the core concepts without unnecessary configuration.

## GitHub Actions: CI/CD Workflow

This project includes a GitHub Actions workflow for continuous integration and deployment, defined in `.github/workflows/deployment.yml`. The workflow is triggered on every push to the `master` branch and consists of the following jobs:

- **Lint:** Checks out the code, caches dependencies, installs Node.js and project dependencies, and runs code linting.
- **Test:** Runs after linting, installs dependencies, and executes the test suite.
- **Build:** Runs after tests pass, builds the project, and uploads the build artifacts.
- **Deploy:** Runs after a successful build, downloads the build artifacts, and simulates deployment to a server.

This automated pipeline ensures code quality and a reliable deployment process for every change pushed to the main branch. 