import React, { useState } from 'react';
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    cnic: '',
    startupName: '',
    startupCategory: '',
    noofteammembers: '2',
    teamMembersNames: '',
    instituteName: '',
    departmentName: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { name, contact, email, cnic, startupName, startupCategory,noofteammembers, teamMembersNames, instituteName, departmentName, reason } = formData;
  
    // Check if mandatory fields are filled
    if (name && contact && email) {
      try {
        // Submit data to the backend
        const response = await axios.post("https://yes1-backend.onrender.com/submit", {
          name,
          contact,
          email,
          cnic,
          startupName,
          startupCategory,
          teamMembersNames,
          noofteammembers,
          instituteName,
          departmentName,
          reason,
        });
  
        if (response.status === 201) {
          window.alert('Form submitted successfully!');
  
          // Clear form data
          setFormData({
            name: '',
            contact: '',
            email: '',
            cnic: '',
            startupName: '',
            startupCategory: '',
            noofteammembers,
            teamMembersNames: '',
            instituteName: '',
            departmentName: '',
            reason: '',
          });
  
          // Optionally reload the page
          window.location.reload();
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        window.alert('An error occurred while submitting the form. Please try again later.');
      }
    } else {
      window.alert('Please enter all required details first!');
    }
  };




  return (


    <div className='myform d-flex justify-content-center align-items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='border border-2 bg-transparent border-dark d-flex flex-column col-lg-6 justify-content-center align-items-center text-white fs-5 p-4 mt-3'
      >
        <h2 className='text-white text-center'>YES Chapter 4</h2>
        <h4 className='text-white text-center'>Registrations Are Open!</h4>

        <label>Your Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required />

        <label>Contact No</label>
        <input type='text' name='contact' value={formData.contact} onChange={handleChange} required />

        <label>Email</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange} required />

        <label>CNIC No</label>
        <input type='text' name='cnic' value={formData.cnic} onChange={handleChange} required />

        <label>Startup Name</label>
        <input type='text' name='startupName' value={formData.startupName} onChange={handleChange} required />

        <label>Startup Category</label>
        <input type='text' name='startupCategory' value={formData.startupCategory} onChange={handleChange} required />

        <label>Number of Team Members</label>
        <select
          className='w-75 text-center text-black bg-transparent'
          name='noofteammembers'
          value={formData.noofteammembers}
          onChange={handleChange}
          required
        >
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>

        <label>Names of Team Members</label>
        <input type='text' name='teamMembersNames' value={formData.teamMembersNames} onChange={handleChange} required />

        <label>Institute Name</label>
        <input type='text' name='instituteName' value={formData.instituteName} onChange={handleChange} required />

        <label>Department Name</label>
        <input type='text' name='departmentName' value={formData.departmentName} onChange={handleChange} required />

        <label>Why YES?</label>
        <input type='text' name='reason' value={formData.reason} onChange={handleChange} required />

        <button type='submit' className='btn btn-primary mt-2 w-25 sm-w-50'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
