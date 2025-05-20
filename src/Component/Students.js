
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Students extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((student, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Student Name: {student.name}</h5>
                <p className="card-text">Major: {student.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Students;
