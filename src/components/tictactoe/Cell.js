import React from 'react';




// object destructuring
// const student = {
//   name: 'tulei',
//   age: 21
// };
// const name = student.name;
// const age = student.age;
// const {name, age} = student;
const Cell = ({value, onClick, className}) => {
  // const { value, onClick} = props;
  // console.log(value, onClick)
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
    {value}
      
    </div>
  );
};

export default Cell;