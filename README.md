# Advanced React To-Do Application with API Integration

## Description
This project is an advanced To-Do application built using React, designed to test and enhance your understanding of foundational web technologies (HTML, CSS, JavaScript) and essential React concepts. The application integrates external API data, implements advanced state management using Redux, and ensures a responsive and user-friendly experience across various devices.

## Objective
The main objective of this project is to enhance a basic To-Do application by:
- Integrating external API data (e.g., weather information).
- Implementing advanced state management using Redux.
- Ensuring the application is responsive and user-friendly across different devices.

## Features
- **Frontend Development and API Integration**:
  - Structured layout using HTML.
  - Styled using CSS, with optional CSS frameworks like Bootstrap or Material-UI.
  - Application logic implemented with JavaScript (ES6+).
  - Integration with a public API to display relevant data (e.g., current weather conditions for outdoor tasks).
  - Error handling for API requests to manage and display errors gracefully.

- **React Components and Advanced State Management**:
  - Developed using functional components and React hooks (`useState`, `useEffect`).
  - Components include:
    - **TaskInput**: For adding new tasks.
    - **TaskList**: For displaying the list of tasks.
  - Utilizes Redux Thunk or Redux Saga for handling asynchronous actions (e.g., API calls).

- **Responsive Design**:
  - Fully responsive design for mobile, tablet, and desktop devices.
  - Implemented using CSS Grid and Flexbox with a mobile-first design approach.

- **Functionality**:
  - **Add Task**: Users can input a task and add it to the list.
  - **View Tasks**: Displays all added tasks in a list format.
  - **Delete Task**: Each task has a delete button to remove it from the list.
  - **Task Prioritization**: Users can set priorities (High, Medium, Low) for tasks.
  - **Persistent Storage**: Uses local storage or session storage to save tasks and authentication status.

- **User  Authentication**:
  - Simple user authentication feature (login/logout functionality) simulated using Redux for state management.
  - Protects the To-Do list behind authentication, ensuring tasks are only visible to logged-in users.

## Setup Instructions
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/advanced-react-todo-app.git
