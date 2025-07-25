# GitMatchify 🚀

A modern web application that connects developers with projects, built with React, TypeScript, and Node.js.

## ✨ Features

- **User Authentication**: Register and login functionality
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Animated Components**: Smooth animations and transitions
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing for seamless navigation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons
- **Motion** - Animation library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
CodeMatcher/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   ├── assets/        # Static assets
│   │   └── styles.css     # Custom CSS styles
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
├── server/                # Backend Node.js application
│   └── index.js          # Express server
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CodeMatcher
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:8000`

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📱 Available Scripts

### Frontend (client directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (server directory)
- `npm start` - Start the server

## 🎨 Features in Detail

### Authentication System
- User registration with name, email, and password
- User login functionality
- Form validation and error handling

### Modern UI Components
- **Aurora Text**: Animated text component with gradient effects
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Custom Styling**: Beautiful gradients and animations
- **Form Components**: Styled input fields and buttons

### Routing
- Home page (`/`)
- Register page (`/register`)
- Login page (`/login`)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory:
```env
PORT=8000
NODE_ENV=development
```

### Tailwind Configuration
The project uses Tailwind CSS v4 with custom animations and configurations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters
  

---

**Made with ❤️ by Shubhi
**
