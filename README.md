# Game Development Task

## Overview

This project is a game development task that involves building a Soldier page using React.js for the frontend and Node.js for the backend.

## Backend API

The backend API is responsible for serving Soldier data to the frontend. The API provides information such as rank, weapons, kits, vehicles, and more. The API is implemented using Node.js.

### API Endpoint

- **GET /api/soldier**: Retrieves the Soldier data.

### Installation and Running the Backend

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies using `npm install`.
4. Run the server using `npm start`.
5. The server will be running on `http://localhost:5000`.

## Frontend UI

The frontend is built using React.js and Tailwind CSS. It includes a Soldier page with a navbar, left sidebar, and right sidebar. The Soldier page displays information about the user retrieved from the backend API.

### Installation and Running the Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open your browser and visit `http://localhost:3000` to view the application.

## Folder Structure

  ```bash
  /project-root
  │
  ├── backend
  │ ├── server.js
  │ ├── soldierData.js
  │ └── ... (other backend files)
  │
  └── frontend
  ├── public
  │ └── index.html
  ├── src
  │ ├── assets
  │ │ └── ... (image assets)
  │ ├── components
  │ │ ├── LeftSidebar.jsx
  │ │ └── ... (other React components)
  │ ├── App.jsx
  │ ├── index.js
  │ └── ... (other frontend files)
  └── ... (other frontend files)

  ```

## Instructions for Running the Full Application

1. Follow the backend installation and running instructions.
2. Follow the frontend installation and running instructions.
3. Open your browser and visit `http://localhost:3000` to view the application.

## Additional Notes

- Make sure to test the application on different devices to ensure responsiveness.
- Free hosting services like GitHub Pages, Netlify, or Vercel can be used for deployment.

Feel free to reach out if you have any questions or need further assistance!
