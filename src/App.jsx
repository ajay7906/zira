
import './App.css'
import TaskBoard from './TaskBoard'

function App() {
  

  return (
    <>
    <TaskBoard/>
     
    </>
  )
}

export default App





















































// // import { useState, useEffect } from 'react';
// // import './App.css';
// // import AuthPage from './components/AuthComponents';
// // import MailDashboard from './components/MailDashboard';

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // Check login status on initial render
// //   useEffect(() => {
// //     const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
// //     if (token) {
// //       setIsLoggedIn(true);
// //     }
// //   }, []);

// //   const handleLogin = (token) => {
// //     // Save token to localStorage and update state
// //     localStorage.setItem('authToken', token);
// //     setIsLoggedIn(true);
// //   };

// //   const handleLogout = () => {
// //     // Clear token from localStorage and update state
// //     localStorage.removeItem('authToken');
// //     setIsLoggedIn(false);
// //   };

// //   return (
// //     <>
// //       {isLoggedIn ? (
// //         <MailDashboard onLogout={handleLogout} />
// //       ) : (
// //         <AuthPage onLogin={handleLogin} />
// //       )}
// //     </>
// //   );
// // }

// // export default App;




















// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import './App.css';
// import AuthPage from './components/AuthComponents';
// import MailDashboard from './components/MailDashboard';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login status on initial render
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     // Save token to localStorage and update state
//     localStorage.setItem('token', token);
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Clear token from localStorage and update state
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Redirect to /dashboard if logged in */}
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? <Navigate to="/dashboard" /> : <AuthPage onLogin={handleLogin} />
//           }
//         />
//         {/* Dashboard route */}
//         <Route
//           path="/dashboard"
//           element={
//             isLoggedIn ? (
//               <MailDashboard onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
