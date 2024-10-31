import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [studentInfo] = useState({
    name: "Mohmadsahil Shaikh",
    studentid: "101413469",
    course: "COMP 3123",
    college: "George Brown College, Toronto"
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - 1</h1>
        <h3>React JS Programming Week09 Lab Exercise</h3>
        <StudentInfo student={studentInfo} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function StudentInfo({ student }) {
  return (
    <div>
      <p><strong>Student ID:</strong> {student.studentid}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>College:</strong> {student.college}</p>
    </div>
  );
}


export default App;
