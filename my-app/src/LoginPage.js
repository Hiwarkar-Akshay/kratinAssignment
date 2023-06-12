// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginPage = () => {
//   const [name, setName] = useState('');
//   const [height, setHeight] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [disease, setDisease] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic or handle form submission
//     // You can access the form data using the state variables (name, height, age, etc.)
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-primary text-white p-3 text-center">
//         <h1>My Login Page</h1>
//       </header>

//       {/* Content */}
//       <div className="container mt-4">
//         <h2 className="text-center">Login Page</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>
//           {/* Add other form fields */}
//           {/* ... */}

//           <button type="submit" className="btn btn-primary btn-block">Login</button>
//         </form>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white p-3 text-center mt-4">
//         &copy; 2023 My Company. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic or handle form submission
    // You can access the form data using the state variables (name, height, age, etc.)
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white p-3 text-center">
        <h1>Login Page</h1>
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item">
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={faUserPlus} /> Sign Up
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <div className="container mt-4">
        <h2 className="text-center">Login Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input type="text" className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input type="text" className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <input type="text" className="form-control" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="disease">Disease:</label>
            <input type="text" className="form-control" id="disease" value={disease} onChange={(e) => setDisease(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white p-3 text-center mt-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;

