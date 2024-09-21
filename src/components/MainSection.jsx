import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainSection() {
        const [category, setCategory] = useState('');
        const [hostel, setHostel] = useState('');
        const [floor, setFloor] = useState('');
        const [room, setRoom] = useState('');
        const [complaint, setComplaint] = useState('');
      
        // Hostels data, floors, rooms (you can extend this as per requirement)
        const hostels = {
          'Hostel 1': ["Ground Floor",1, 2, 3],
          'Hostel 2': ["Ground Floor",1, 2, 3],
          'Hostel 3': ["Ground Floor",1,2,3],
          'Hostel 4': ["Ground Floor",1,2,3],
          'Hostel 5': ["Ground Floor",1,2,3],
          'Hostel 6': ["Ground Floor",1,2,3]
        };
      
        const rooms = {
          1: ['101', '102', '103','104','105','106','107','108','109','110','111','112','113','114'],
          2: ['201', '202', '203','204','205','206','207','208','209','210','211','212','213','214'],
          3: ['301', '302', '303','304','305','306','307','308','309','310','311','312','313','314'],
          4: ['401', '402', '403','404','405','406','407','408','409','410','411','412','413','414']
        };
      
      
        // Handle category selection
        const handleCategoryChange = (e) => {
          setCategory(e.target.value);
          setHostel('');
          setFloor('');
          setRoom('');
        };
      
        // Handle hostel selection
        const handleHostelChange = (e) => {
          setHostel(e.target.value);
          setFloor('');
          setRoom('');
        };
      
        // Handle floor selection
        const handleFloorChange = (e) => {
          setFloor(e.target.value);
          setRoom('');
        };
    
  return (
     <div className="container d-flex justify-content-center  ">
      <div className="col-md-8">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white">
            <h2 className="text-center">{category} Complaint System</h2>
          </div>
          <div className="card-body">
            <div className="row">
              {/* Category selection */}
              <div className="form-group col-12 col-md-6">
                <label>Select Category:</label>
                <select
                  className="form-control"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select</option>
                  <option value="College">College</option>
                  <option value="Hostel">Hostel</option>
                </select>
              </div>

              {category === 'Hostel' && (
                <>
                  {/* Hostel selection */}
                  <div className="form-group col-12 col-md-6">
                    <label>Select Hostel:</label>
                    <select
                      className="form-control"
                      value={hostel}
                      onChange={handleHostelChange}
                    >
                      <option value="">Select Hostel</option>
                      {Object.keys(hostels).map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>

                  {hostel && (
                    <>
                      {/* Floor selection */}
                      <div className="form-group col-12 col-md-6">
                        <label>Select Floor:</label>
                        <select
                          className="form-control"
                          value={floor}
                          onChange={handleFloorChange}
                        >
                          <option value="">Select Floor</option>
                          {hostels[hostel].map((f) => (
                            <option key={f} value={f}>
                              {f}
                            </option>
                          ))}
                        </select>
                      </div>

                      {floor && (
                        <>
                          {/* Room selection */}
                          <div className="form-group col-12 col-md-6">
                            <label>Select Room:</label>
                            <select
                              className="form-control"
                              value={room}
                              onChange={(e) => setRoom(e.target.value)}
                            >
                              <option value="">Select Room</option>
                              {rooms[floor].map((r) => (
                                <option key={r} value={r}>
                                  {r}
                                </option>
                              ))}
                            </select>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>

            {/* Complaint Input */}
            {room && (
              <>
                <div className="form-group">
                  <label>Complaint:</label>
                  <textarea
                    className="form-control"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    placeholder="Enter your complaint here"
                    rows="4"
                  ></textarea>
                </div>
              </>
            )}
          </div>

          {/* Submit Button */}
          {room && (
            <div className="card-footer text-right">
              <button className="btn btn-success">Submit Complaint</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default MainSection
