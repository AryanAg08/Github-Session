import { useState } from "react";
import "./FormComponentStyle.css";

export default function OptForm() {
    const [formData, setFormData] = useState({
        name: '',
        designation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const [submittedData, setSubmittedData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({
            name: '',
            designation: ''
        });
    }

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form className='formstyle' onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Designation:</label>
                        <input
                            name='designation'
                            value={formData.designation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="Submit-button" type="submit">Submit</button>
                </form>
            </div>

            <div className="liststyle">
                <h1 style={{ fontFamily: "futur", textAlign: "center", fontSize: "40px", margin: "0 auto" }}>VOLUNTEERS</h1>
                <div className="vname">
                    {submittedData.map((data, index) => (
                        <div key={index}>
                            <p>Volunteer {index + 1}</p>
                            <p>Name: {data.name}</p>
                            <p>Designation: {data.designation}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
