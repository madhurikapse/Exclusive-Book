import React from 'react';

const NewPage = () => {
  return (
    <div className="new-page">
      <h1>Create One</h1>
      <p>Welcome! Here you can create a new account.</p>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn-create">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default NewPage;
