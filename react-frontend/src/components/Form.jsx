import { useState } from "react";


const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [error, setError] = useState({});

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    
    }
      const handleSubmit = (e)=> {
        e.preventDefault();

        if(!formData.name){
            setError({name: "Name is required"});
            return;
        }
        if(!formData.email){
            setError({email: "Email is required"});
            return;
        }
        alert(`Form submitted with the following data: \nName: ${formData.name} \nEmail: ${formData.email}`);
        setError({});
      }
  return (
    <div>

        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <div>
            <h1>Form</h1>
             <div className="flex items-center gap-4">
             <label htmlFor="name">Name:</label>
            <input id="name" name="name" value={formData.name} type="text" placeholder="Name" onChange={handleChange} />
            {error.name && <span>{error.name}</span>}
            </div>
             <div className="flex items-center gap-4">
             <label htmlFor="email">Email:</label>
            <input id="email" name="email" value={formData.email} type="email" placeholder="Email" onChange={handleChange} />
            {error.email && <span>{error.email}</span>}
            </div>
              <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form