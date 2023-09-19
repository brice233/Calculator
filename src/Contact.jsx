import React, { useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [showInfo, setShowInfo] = useState(false);

  const handleSend = () => {
    // Validate the form fields before sending
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = 'First Name is required'; 
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      validationErrors.firstName = 'First Name should contain only letters';
    }

    if (!lastName) {
      validationErrors.lastName = 'Last Name is required';
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      validationErrors.lastName = 'Last Name should contain only letters';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!message) {
      validationErrors.message = 'Message is required';
    } else if (message.length < 15) {
      validationErrors.message = 'Message should be at least 15 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowInfo(false); // Hide information display
    } else {
      setShowInfo(true); // Show information display
      setErrors({});
    }
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setShowInfo(false); // Hide information display when clearing
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-4 bg-gray-200">
        <div className="flex justify-between">
          <div className="w-1/2 p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && <p className="text-red-500 mt-2">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {errors.lastName && <p className="text-red-500 mt-2">{errors.lastName}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
            </div>
          </div>
          <div className="w-1/2 p-4">
            <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded">
              Send
            </button>
            <button onClick={handleClear} className="bg-red-500 text-white p-2 rounded mt-2">
              Clear
            </button>
          </div>
        </div>
        {showInfo && (
          <div className="mt-4">
            <div className="bg-gray-300 p-4 rounded">
              Information Display:
              <div className="mt-2">
                <strong>First Name:</strong> {firstName}
              </div>
              <div className="mt-2">
                <strong>Last Name:</strong> {lastName}
              </div>
              <div className="mt-2">
                <strong>Email:</strong> {email}
              </div>
              <div className="mt-2">
                <strong>Message:</strong> {message}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
