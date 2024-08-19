# Dereck Helms' Resume Website

This project is a simple web application built using React.js for the frontend and Django for the backend. The purpose of this project is to showcase Dereck Helms' qualifications, experience, and technical skills.

## Project Description

This web application serves as an online resume, displaying detailed information about Dereck Helms' professional background. The frontend is developed using React.js to ensure a dynamic and responsive user interface, while the backend is powered by Django to provide robust API endpoints that serve the resume data.

## Features

- **Frontend:** React.js components to display resume information.
- **Backend:** Django REST framework to provide API endpoints for frontend data consumption.
- **API Endpoints:** Serve data related to contact information, qualifications, experience, education, technical skills, and activities.
- **Database:** SQLite (default) used for storing resume data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.x installed on your machine
- Node.js and npm (Node Package Manager) installed
- Django and Django REST framework installed
- React.js environment setup

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dhelms33/dereck-helms-resume.git
   cd dereck-helms-resume

2. # Backend Setup:

### Navigate to the backend directory:
```bash
cd backend
```

### Install the required Python packages:
```bash
pip install -r requirements.txt
```

### Apply migrations to set up the database:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Run the Django development server:
```bash
python manage.py runserver
```

# Frontend Setup:

### Navigate to the frontend directory:
```bash
cd ../frontend
```

### Install the required npm packages:
```bash
npm install
```

### Start the React development server:
```bash
npm start
```

# Running the Application

### Ensure the Django backend is running:
```bash
python manage.py runserver
```

### Ensure the React frontend is running:
```bash
npm start
```

### Open your web browser and navigate to:
```arduino
http://localhost:3000
```
The application should be running and displaying Dereck Helms' resume.

# API Endpoints
The backend exposes the following API endpoints:

- `/api/contact/` - Retrieves contact information.
- `/api/objective/` - Retrieves the objective statement.
- `/api/qualifications/` - Retrieves a list of qualifications.
- `/api/experiences/` - Retrieves a list of professional experiences.
- `/api/education/` - Retrieves educational background information.
- `/api/technical-skills/` - Retrieves a list of technical skills.
- `/api/activities/` - Retrieves a list of activities and roles.

# Deployment (Bonus)
If you wish to deploy this application, you may also create a 3-tier AWS architecture diagram as per the project's bonus task. For deployment, refer to the AWS documentation: AWS Architecture Icons.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
Dereck Helms  
[LinkedIn](#)  
[GitHub](#)  
Email: [dereckhelmsdev@gmail.com](mailto:dereckhelmsdev@gmail.com)
