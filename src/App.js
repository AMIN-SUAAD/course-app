import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import courses from './data';
import CourseList from './Component/CourseList';
import Cart from './Component/Cart';




function App() {
  const [courseNumber, setCourseNumber] = useState([]);
  const handleAddCourse = (course) => {
          let newCourseNumber = [...courseNumber, course];
          setCourseNumber(newCourseNumber);
   };
  return (
    <div className = 'App'>

      <div id = 'left-part'>

      {
        courses.map(course => <CourseList handleAddCourse = {handleAddCourse} course = {course}></CourseList>)
      }
      </div>

      <div>
        <Cart courseNumber = {courseNumber} ></Cart>
      </div>
      

    </div>
  );
}

export default App;
