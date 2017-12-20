import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
      <div className="title">
        <h1>About</h1>
        <Link to="/test"><button>test</button></Link>
      </div>
  )
}

// module.exports = About;
