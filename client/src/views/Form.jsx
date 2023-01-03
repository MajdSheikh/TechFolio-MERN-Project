import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'


const Form = () => {

    const navigate = useNavigate();

    const [newPortfolio, setNewPortfolio] = useState(
        {
            phoneNumber: "",
            gender: "",
            specialization: "",
            address: "",
            linkedin: "",
            github: "",
            skills: "",
            experience: "",
            education: "",
            summary: "",
            projects: "",
            profilePicUrl: "",
            photo: "",
        }
    );


    const handleSubmit =   (e) => {
        e.preventDefault();
        

        var data = JSON.parse(sessionStorage.getItem('user'))
        console.log(data.user._id)
        const formData = new FormData();
        formData.append('photo', newPortfolio.photo);
        formData.append('phoneNumber', newPortfolio.phoneNumber);
        formData.append('gender', newPortfolio.gender);
        formData.append('specialization', newPortfolio.specialization);
        formData.append('address', newPortfolio.address);
        formData.append('linkedin', newPortfolio.linkedin);
        formData.append('github', newPortfolio.github);
        formData.append('skills', newPortfolio.skills);
        formData.append('experience', newPortfolio.experience);
        formData.append('education', newPortfolio.education);
        formData.append('summary', newPortfolio.summary);
        formData.append('projects', newPortfolio.projects);
        formData.append('profilePicUrl', newPortfolio.profilePicUrl);
        formData.append('user_id', data.user._id);

        
         axios.post('http://localhost:8000/api/portfolio', formData)
         .then(res => navigate("/PortfolioLists"))
       .catch(err => {
          console.log(err);
          
       });
    }


    const handleChange = (e) => {
        setNewPortfolio({...newPortfolio, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewPortfolio({...newPortfolio, photo: e.target.files[0]});
    }

    return (
        
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                // value={newUser.photo}
                onChange={handlePhoto}
            />
            </div>



            <div>
            <input 
                type="number"
                placeholder="phone number"
                name="phoneNumber"
                value={newPortfolio.phoneNumber}
                onChange={handleChange}
            />
          </div>

            <div>
              <input 
                type="text"
                placeholder="gender"
                name="gender"
                value={newPortfolio.gender}
                onChange={handleChange}
            />
            </div>
              

            <div>
              <input 
                type="text"
                placeholder="specialization"
                name="specialization"
                value={newPortfolio.specialization}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="address"
                name="address"
                value={newPortfolio.address}
                onChange={handleChange}
            />
            </div>


            <div>
            <input 
                type="url"
                placeholder="linkedin"
                name="linkedin"
                value={newPortfolio.linkedin}
                onChange={handleChange}
            />
            </div>


            <div>
            <input 
                type="url"
                placeholder="github"
                name="github"
                value={newPortfolio.github}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="skills"
                name="skills"
                value={newPortfolio.skills}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="experience"
                name="experience"
                value={newPortfolio.experience}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="education"
                name="education"
                value={newPortfolio.education}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="summary"
                name="summary"
                value={newPortfolio.summary}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="projects"
                name="projects"
                value={newPortfolio.projects}
                onChange={handleChange}
            />
            </div>

            <div>
            <input 
                type="text"
                placeholder="profilePicUrl"
                name="profilePicUrl"
                value={newPortfolio.profilePicUrl}
                onChange={handleChange}
            />
            </div>


            <div>
            <input 
                type="submit"
            />
            </div>
        </form>
    );
}

export default Form;