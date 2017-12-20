import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Test = () => {
  return (
      <div className="title">
        <h1>Test</h1>
        <Link to="/about"><button>about</button></Link>
      </div>
  )
}

// module.exports = Test;
