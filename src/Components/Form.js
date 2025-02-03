import React, { useState } from 'react';

export default function Form() {

  const inputClass = ("p-3 flex m-auto rounded-md bg-transparent/[0.4] w-full");

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem('gymFormData', JSON.stringify(formData));
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <>
      <form className="contact flex flex-col text-white" onSubmit={handleSubmit}>

        <div className="flex items-start justify-between m-auto px-16 py-48 w-full">

          <div className="flex flex-col space-y-10 w-[30rem]">
            <h1 className="text-6xl font-bold">Fill the form for more information</h1>

            <div className="space-y-3 mt-10">
              <input type="text" name="firstName" placeholder='First name' value={formData.firstName} onChange={handleChange} required className={inputClass} />
              <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange} required className={inputClass} />
              <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required className={inputClass} />
              <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required className={inputClass} />
            </div>

            <div className="border-dashed border-t border-black pt-10">
              <button className="flex justify-center text-xl p-2 bg-gradient-to-r from-indigo-700 to-pink-700 hover:from-green-700 hover:to-green-900 rounded-md w-full" type="submit">Submit</button>
            </div>

          </div>

        </div>
      </form>
    </>
  )
}
