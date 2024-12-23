import { useState } from 'react';
import './App.css';

function App() {
  const initialFormState = {
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.mobile.match(/^[6-9]\d{9}$/)) newErrors.mobile = 'Enter a valid mobile number';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email address';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.course) newErrors.course = 'Course selection is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    if (validate()) {
      alert(`Data Stored Successfully! \n\n${JSON.stringify(formData, null, 2)}`);
      setFormData(initialFormState);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setErrors({});
  };

  return (
    <>
    <div className="App text-white">
      <h1 className='text-center '>Higher Secondary Admission Form</h1>
      <form>
<div className='d-flex flex-row'>
          <label className='form-label'>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='form-control' placeholder='Full Name' type="text" name="name" value={formData.name} onChange={handleChange}/>
          {errors.name && <p className="error">{errors.name}</p>}
        
</div>
  <br></br>
<div className='d-flex flex-row'>
        <label className='form-label'>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <textarea
            name="address"
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            className='form-control'
          />
          {errors.address && <p className="error">{errors.address}</p>}
       
        
          </div>
          <br></br>
          <div className='d-flex flex-row'>
        <label className='form-label'> </label>
          Mobile:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          className='form-control'
            type="text"
            placeholder='Mobile Number'
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
       
         
          </div>
          <br></br>
          <div className='d-flex flex-row'>
        <label className='form-label'>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
          placeholder='@email address'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-control'
          />
          {errors.email && <p className="error">{errors.email}</p>}
     </div>
        <br></br>
        <div className='d-flex flex-row'>
        <label className='form-label d-flex flex-row'>
          Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male&nbsp;&nbsp;
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </label>
        </div>
        <div className='d-flex flex-row'>
        <label>Date of Birth:&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            name="dob"
           
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </label>
       </div>
        <br></br>
        <label>
          Course:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="course"
          
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <p className="error">{errors.course}</p>}
        </label>
      <br></br>
        <div className="buttons">
          <button type="button" className='btn btn-primary' onClick={handleRegister}>
            Register
          </button>
          <button type="button" className='btn btn-primary' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
