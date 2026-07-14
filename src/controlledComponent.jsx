import React, { useEffect, useState } from 'react';

function ControlledCompnent() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');

  const student = ["Kaleab", "Alex","Josh"]
  student.map((stur)=>{console.log(student)});
  return (
    <>
      <h1>This is the controlled component page</h1>
      
      <input
        type='text'
        placeholder='full name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='text'
        placeholder='course'
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type='number'
        placeholder='age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Name: {name} </p>
      <p> Course: {course} </p>
      <p>Age: {age}</p>
    </>
  );
}
export default ControlledCompnent;
