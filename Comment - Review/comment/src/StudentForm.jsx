import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    grade: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text" id="fullName"name="fullName" value={formData.fullName} onChange={handleChange}required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password" id="password" name="password" value={formData.password} onChange={handleChange} required
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <select
          id="grade" name="grade" value={formData.grade} onChange={handleChange} required
        >
          <option value="">Select Grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"id="female" name="gender"value="Female"checked={formData.gender === 'Female'}onChange={handleChange}required
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio" id="other" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} required
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
