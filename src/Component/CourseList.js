import React from 'react';
import './CourseList.css'

const CourseList = (props) => {
    return (
        <div id = 'course-list'>
            <h3 id = 'name'>Course Title: {props.course.name}</h3>
            <p id = 'price'>Price: ${props.course.price}</p>
            <button onClick = {() => props.handleAddCourse(props.course)} id = 'btn'>Enroll Now</button>

            
        </div>
    );
};

export default CourseList;