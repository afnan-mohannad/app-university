
import React from 'react';
import Students from './Component/Students';
import studentsData from './data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">University Students Names</h2>
      <Students data={studentsData} />
    </div>
  );
}

export default App;
