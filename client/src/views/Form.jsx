import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div style={{marginLeft:500,alignItems:"center", marginTop:50}} >
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div class="form-group col-md-6">
                <label for="inputAddress">Phone Number</label>
                <input type="text" class="form-control" id="inputphone" placeholder="Phone Number" name="phoneNumber"
                            value={newPortfolio.phoneNumber}
                            onChange={handleChange} />
            </div><br></br>
            <div class="form-group col-md-6">
                <label for="inputCity">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Address" name="address"
                            value={newPortfolio.address}
                            onChange={handleChange}/>
            </div><br></br>
            <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-1 pt-0">Gender</legend>
                    <div class="col-sm-1" >
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Female" checked={newPortfolio.gender === "Female"}
                            onChange={handleChange}/>
                            <label class="form-check-label" for="gridRadios1">
                                Female
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Male" checked={newPortfolio.gender === "Male"}
                            onChange={handleChange}/>
                            <label class="form-check-label" for="gridRadios2">
                                Male
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset><br></br>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputpecialization">Specialization</label>
                    <input type="text" class="form-control" id="inputpecialization" placeholder="Specialization" name="specialization"
                                value={newPortfolio.specialization}
                                onChange={handleChange}/>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="inputLinkedIn">LinkedIn</label>
                    <input type="url" class="form-control" id="inputLinkedIn" placeholder="LinkedIn" name="linkedin"
                                value={newPortfolio.linkedin}
                                onChange={handleChange}/>
                </div><br></br>
                    <div class="form-group col-md-6">
                    <label for="inputGitHub">GitHub</label>
                    <input type="url" class="form-control" id="inputGitHub" placeholder="GitHub" name="github"
                            value={newPortfolio.github}
                            onChange={handleChange}/>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="Skills">Skills</label>
                    <textarea class="form-control" id="SkillsTextarea1" rows="3" name="skills"
                            value={newPortfolio.skills}
                            onChange={handleChange}></textarea>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="education">Education</label>
                    <textarea class="form-control" id="SkillsTextarea1" rows="3" name="education"
                            value={newPortfolio.education}
                            onChange={handleChange}></textarea>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="experience">Experience</label>
                    <textarea class="form-control" id="SkillsTextarea1" rows="3"name="experience"
                                value={newPortfolio.experience}
                                onChange={handleChange}></textarea>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="Skills">Projects</label>
                    <textarea class="form-control" id="SkillsTextarea1" rows="3" name="projects"
                            value={newPortfolio.projects}
                            onChange={handleChange}></textarea>
                </div><br></br>
                <div class="form-group col-md-6">
                    <label for="Summary">Summary</label>
                    <textarea class="form-control" id="SkillsTextarea1" rows="3" name="summary"
                                value={newPortfolio.summary}
                                onChange={handleChange}></textarea>
                </div><br></br>
                <div class="form-group col-md-6">
                    <div class="input-group-prepend">
                        <label for="Skills">Upload your picture</label>
                    </div><br></br>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"  
                                    accept=".png, .jpg, .jpeg"
                                    name="photo"
                                    // value={newUser.photo}
                                    onChange={handlePhoto}/>
                    </div>
                </div>
            </div><br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>     
    </div>
    );
}

export default Form;