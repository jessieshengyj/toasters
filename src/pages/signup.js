import React, { useState } from 'react';
import './login.css';
import { createNewUser } from '../services/userService';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [experience, setExperience] = useState('');
    const [occupation, setOccupation] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        try {
            createNewUser({ username, password, firstName, lastName, experience, occupation, company, phone })
            .then(() => {
                navigate('/');
            })
        } catch (e) {

        }
    }

    return (
        <div className="body">
            <div className="card w-9/12 h-4/5 bg-base-100 shadow-xl my-6 flex items-center justify-center" >
                    
            <div className="title">
              <span>Toasters</span>
            </div>
                    <div className="modal-body-row w-full flex-wrap justify-center">
                <div>
                    <div className="label">
                    <span className="label-text">Username</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Password</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        className="grow"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">First Name</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Last Name</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Company</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Occupation</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Occupation"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Phone Number</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <div className="label">
                    <span className="label-text">Experience</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Password"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    </label>
                </div>
                </div>
                <div className="mt-6">
                    <button className="btn-new h-10" onClick={createUser}>
                        Sign-up
                    </button>
                </div>
            </div>
        </div>
    );
}
