import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { portfolioId } = useParams();
    const [person,setPerson] = useState({});
    const [portfolio, setPortfolio] = useState();
    const navigate = useNavigate();


    // const [phoneNumber, setPhoneNumber] = ("")
    // const [gender, setGender] = ("")
    // const [specialization, setSpecialization] = ("")
    // const [address, setAddress] = ("")
    // const [linkedin, setLinkedin] = ("")
    // const [github, setGithub] = ("")
    // const [skills, setSkills] = ("")
    // const [experience, setExperience] = ("")
    // const [education, setEducation] = ("")
    // const [summary, setSummary] = ("")
    // const [projects, setProjects] = ("")
    // const [profilePicUrl, setProfilePicUrl] = ("")


    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolio/' + portfolioId)
            .then(res => {
                setPerson(res.data);
            })
    }, []);

    const updatePortfolio = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/portfolio/' + portfolioId, person)
            .then(res => navigate("/portfolio/"+ portfolioId))
            .catch(err => console.error(err));
            
    }


    const handleChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value});
    }

    // const handlePhoto = (e) => {
    //     setPerson({...portfolio, photo: e.target.files[0]});
    // }


  return (
    <div>
            <h1>Update your portfolio</h1>
            <form onSubmit={updatePortfolio}>

{/* 
            <div>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                // value={person.photo}
                onChange={handlePhoto}
            />
            </div> */}
            <div>
            <input 
                type="number"
                placeholder="phone number"
                name="phoneNumber"
                value={person.phoneNumber}
                onChange={handleChange}
            />
          </div>

            <div>
              <input 
                type="text"
                placeholder="gender"
                name="gender"
                value={person.gender}
                onChange={handleChange}
            />
            </div>
              

            <div>
              <input 
                type="text"
                placeholder="specialization"
                name="specialization"
                value={person.specialization}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="address"
                name="address"
                value={person.address}
                onChange={handleChange}
            />
            </div>


            <div>
            <input 
                type="url"
                placeholder="linkedin"
                name="linkedin"
                value={person.linkedin}
                onChange={handleChange}
            />
            </div>


            <div>
            <input 
                type="url"
                placeholder="github"
                name="github"
                value={person.github}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="skills"
                name="skills"
                value={person.skills}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="experience"
                name="experience"
                value={person.experience}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="education"
                name="education"
                value={person.education}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="summary"
                name="summary"
                value={person.summary}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="projects"
                name="projects"
                value={person.projects}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="profilePicUrl"
                name="profilePicUrl"
                value={person.profilePicUrl}
                onChange={handleChange}
            />
            </div>
                <input type="submit" />
            </form>

    </div>
  )
}

export default Update
