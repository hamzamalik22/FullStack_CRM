# CRMAX - Fullstack CRM Project

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Overview
CRMAX is a comprehensive Customer Relationship Management (CRM) application designed to help businesses manage and analyze customer interactions and data throughout the customer lifecycle. Built with a powerful tech stack, CRMAX offers a robust and scalable solution for customer data management, sales tracking, and more.

## Features
- User Authentication and Authorization
- Customer Management
- Sales and Order Tracking
- Analytics Dashboard
- Responsive UI
- RESTful API

## Tech Stack
- **Frontend:**
  - React
  - Redux
  - ShadCN
  - Tailwind CSS

- **Backend:**
  - Django
  - Django REST Framework

- **Database:**
  - PostgreSQL (or your preferred database)

## Installation
### Prerequisites
- Node.js
- Python 3.x
- PostgreSQL (or your preferred database)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crmax.git
   cd crmax/backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure the database settings in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'your-db-name',
           'USER': 'your-db-user',
           'PASSWORD': 'your-db-password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

5. Run database migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

7. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
- Access the frontend application at `http://localhost:3000`.
- Access the Django admin panel at `http://localhost:8000/admin`.
- Visit the live application at https://crmax-five.vercel.app/.

## Contact
For any inquiries or issues, please contact:

- Name: Hamza Malik
- Email: hamzamalikaj22@gmail.com
- LinkedIn: [Hamza Malik](https://www.linkedin.com/in/hamzamalik22/)

