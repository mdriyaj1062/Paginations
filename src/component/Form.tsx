import React, { useState } from "react";


interface FormData {
    name: string;
    email: string;
    message: string;
}

function Form() {
    
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("Form submitted:", formData);
        
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
