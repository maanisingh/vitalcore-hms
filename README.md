# 🏥 VitalCore HMS - Hospital Management System

A comprehensive, full-stack Hospital Management System built with **Node.js**, **Express**, **Prisma**, **MySQL**, and **React**. This system provides complete hospital operations management with role-based access control, real-time tracking, and comprehensive reporting.

## ✨ Features

### 🔐 Authentication & Authorization
- Multi-role authentication (Admin, Doctor, Nurse, Pharmacist, Lab Tech, Radiologist, Finance, HR, Patient, Auditor)
- JWT-based secure authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt

### 👥 Patient Management
- Complete patient registration with automatic MRN generation
- Patient demographics and medical history
- Insurance information management
- Emergency contact details
- Vitals tracking
- Medical records management

### 🩺 Clinical Modules
- **Appointments**: Complete appointment scheduling with doctor-department mapping
- **Prescriptions**: E-prescribing with medicine tracking
- **Lab Requests**: Laboratory test requests with relational data (patient, doctor, department)
- **Radiology Requests**: Imaging requests with complete relational mapping
- **Medical Records**: Comprehensive patient medical history
- **Vital Signs**: Temperature, BP, pulse, SpO2, weight, height tracking

### 💊 Pharmacy Management
- Medicine inventory with stock management
- Low stock alerts
- Batch and expiry tracking
- Pharmacy sales
- Prescription fulfillment

### 🧪 Laboratory & Radiology
- Test templates management
- Request tracking with status (REQUESTED, IN_PROGRESS, COMPLETED)
- Results management
- Report generation
- Department-wise categorization

### 💰 Billing & Finance
- Invoice generation for all services
- Multiple payment modes (Cash, Card, UPI, Insurance, etc.)
- Payment tracking
- Financial reports
- Revenue analytics

### 📊 Reports & Analytics
- Dashboard statistics
- Revenue reports
- Department-wise performance
- Doctor performance metrics
- Lab & Radiology reports
- Pharmacy reports
- Financial summaries
- Appointment analytics

### 🏢 Administrative
- Department management
- Employee management with department assignment
- Staff attendance tracking
- User management
- Role management

### 📍 Location & Tracking
- Beacon-based location tracking
- Real-time staff location monitoring
- Zone management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended)
- MySQL 8.0+
- npm or yarn

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**
```bash
git clone https://github.com/maanisingh/vitalcore-hms.git
cd vitalcore-hms
```

2. **Start with Docker Compose**
```bash
docker-compose up -d
```

3. **Initialize the database**
```bash
docker-compose exec backend npx prisma migrate deploy
docker-compose exec backend npx prisma db seed
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8100
- API Health: http://localhost:8100/health

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create a `.env` file in the `backend` directory:
```env
DATABASE_URL="mysql://hms_user:hms_password@localhost:3306/vitalcore_hms"
PORT=8100
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

4. **Setup MySQL database**
```bash
mysql -u root -p
```
```sql
CREATE DATABASE vitalcore_hms;
CREATE USER 'hms_user'@'localhost' IDENTIFIED BY 'hms_password';
GRANT ALL PRIVILEGES ON vitalcore_hms.* TO 'hms_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

5. **Run Prisma migrations**
```bash
npx prisma migrate deploy
npx prisma generate
```

6. **Seed the database (optional)**
```bash
npx prisma db seed
```

7. **Start the backend**
```bash
npm run dev
```

The backend will be running at http://localhost:8100

#### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:8100/api
```

4. **Start the frontend**
```bash
npm run dev
```

The frontend will be running at http://localhost:3000

## 📚 API Documentation

### Base URL
```
http://localhost:8100/api
```

### Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### Main Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

#### Patients
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create patient
- `GET /api/patients/:id` - Get patient by ID
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

#### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/:id` - Get appointment by ID
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

#### Lab Requests (New Improved)
- `GET /api/lab-requests` - Get all lab requests with relational data
- `POST /api/lab-requests` - Create lab request
- `GET /api/lab-requests/:id` - Get lab request by ID
- `PUT /api/lab-requests/:id` - Update lab request
- `DELETE /api/lab-requests/:id` - Delete lab request
- `POST /api/lab-requests/results` - Create/Update lab result
- `GET /api/lab-requests/templates/all` - Get all lab templates

#### Radiology Requests (New Improved)
- `GET /api/radiology-requests` - Get all radiology requests with relational data
- `POST /api/radiology-requests` - Create radiology request
- `GET /api/radiology-requests/:id` - Get radiology request by ID
- `PUT /api/radiology-requests/:id` - Update radiology request
- `DELETE /api/radiology-requests/:id` - Delete radiology request
- `GET /api/radiology-requests/templates/all` - Get all radiology templates

#### Prescriptions
- `GET /api/prescriptions` - Get all prescriptions
- `POST /api/prescriptions` - Create prescription
- `GET /api/prescriptions/:id` - Get prescription by ID
- `PUT /api/prescriptions/:id` - Update prescription
- `DELETE /api/prescriptions/:id` - Delete prescription

#### Invoices/Billing
- `GET /api/invoices` - Get all invoices
- `POST /api/invoices` - Create invoice
- `GET /api/invoices/:id` - Get invoice by ID
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice

#### Reports (New Module)
- `GET /api/reports/dashboard` - Get dashboard statistics
- `GET /api/reports/revenue` - Get revenue report
- `GET /api/reports/departments` - Get department-wise report
- `GET /api/reports/doctors` - Get doctor performance report
- `GET /api/reports/lab` - Get lab report
- `GET /api/reports/radiology` - Get radiology report
- `GET /api/reports/pharmacy` - Get pharmacy report
- `GET /api/reports/appointments` - Get appointment report
- `GET /api/reports/financial-summary` - Get financial summary

#### Medicines
- `GET /api/medicines` - Get all medicines
- `POST /api/medicines` - Create medicine
- `GET /api/medicines/:id` - Get medicine by ID
- `PUT /api/medicines/:id` - Update medicine
- `DELETE /api/medicines/:id` - Delete medicine

#### Departments
- `GET /api/departments` - Get all departments
- `POST /api/departments` - Create department
- `GET /api/departments/:id` - Get department by ID
- `PUT /api/departments/:id` - Update department
- `DELETE /api/departments/:id` - Delete department

#### Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create employee
- `GET /api/employees/:id` - Get employee by ID
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

#### Location Tracking
- `GET /api/locationtracker` - Get all location trackings
- `POST /api/locationtracker` - Create location tracking
- `GET /api/locationtracker/:id` - Get location tracking by ID
- `PUT /api/locationtracker/:id` - Update location tracking

#### Beacons
- `GET /api/beacon` - Get all beacons
- `POST /api/beacon` - Create beacon
- `GET /api/beacon/:id` - Get beacon by ID
- `PUT /api/beacon/:id` - Update beacon
- `DELETE /api/beacon/:id` - Delete beacon

## 🔧 Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: MySQL 8.0
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt
- **Validation**: express-validator

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **State Management**: Context API

### DevOps
- **Containerization**: Docker & Docker Compose
- **Process Manager**: PM2
- **Reverse Proxy**: Nginx (for production)

## 📋 Database Schema

The system uses a comprehensive database schema with the following main models:
- Users (with role-based access)
- Patients (with automatic MRN generation)
- Doctors (with department mapping)
- Nurses
- Pharmacists
- Employees
- Departments
- Appointments
- Prescriptions & Prescription Items
- Lab Requests & Lab Results
- Radiology Requests
- Medicines & Pharmacy Sales
- Invoices & Payments
- Medical Records
- Vitals
- Beacons & Location Tracking
- Staff Attendance
- And many more...

## 🛠️ Development

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Database Management
```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# Open Prisma Studio (Database GUI)
npx prisma studio
```

### Building for Production

#### Backend
```bash
cd backend
npm run build
npm start
```

#### Frontend
```bash
cd frontend
npm run build
```

## 🐛 Issues Fixed

This version includes fixes for all reported issues:

✅ **Patients Module** - Now working with complete CRUD and relational data
✅ **Prescriptions Module** - Now includes patient, doctor IDs and department information
✅ **Pharmacy Module** - Full CRUD operations implemented (Create, Read, Update, Delete)
✅ **Laboratory Module** - Complete LabRequest system with relational data (patient, doctor, department)
✅ **Radiology Module** - Complete RadiologyRequest system with relational data
✅ **Billing Module** - Edit and Delete functionality implemented
✅ **Reports Module** - Fully functional reporting system with 9 report types
✅ **Location Tracker** - Functional and working
✅ **Beacon Manager** - Functional and working
✅ **Staff Attendance** - Functional and working
✅ **Appointments Module** - Backend creation enabled with proper relational data
✅ **Staff Module** - Now includes departmentId and department information
✅ **Login Authentication** - All role-based dashboards accessible

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support or questions, please open an issue in the GitHub repository.

## 🎯 Roadmap

- [ ] Email notifications
- [ ] SMS integration
- [ ] WhatsApp notifications
- [ ] Advanced analytics with charts
- [ ] Mobile app (React Native)
- [ ] Telemedicine features
- [ ] Automated backup system
- [ ] Multi-hospital support
- [ ] Integration with insurance providers
- [ ] AI-powered diagnosis assistance

## 🙏 Acknowledgments

Built with ❤️ for the healthcare community.

---

**Last Updated**: November 2025
**Version**: 2.0.0 (All Issues Fixed)
