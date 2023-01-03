
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useRadioGroup } from '@material-ui/core';



const Portfolio = (props) => {
    const [person,setPerson] = useState({});
    const [loaded,setLoaded]=useState(false);
    var data = JSON.parse(sessionStorage.getItem('user'))
    const {portfolioId} = useParams()
    console.log(data.user.name)
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:8000/api/portfolio/'+portfolioId)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);


    // const logout = (e) => {
    //     axios.get('http://localhost:8000/api/logout')
    //     .then(res => {
    //         sessionStorage.removeItem('user')
    //         // setPerson(null);
    //         console.log(person)
    //     })
    //     .catch(err => console.log(err));
    // };

    const deletePortfolio = portfolioId => {
        axios.delete('http://localhost:8000/api/portfolio/' + portfolioId)
            .then(res=> navigate("/PortfolioLists"))
            .catch(err => console.error(err))
    }

    // const removeFromDom = portfolioId => {
    //     setPerson(person.filter(person => person._id != portfolioId));
    // }

    // const remove = j=>{
    //     setPerson(person.filter(one=>one._id !=j));
    //   }


    return (
    
        <div>
            <p><img src={`http://localhost:8000/${person.photo}`} alt="" height="100px" width="100px"></img></p>
            <p>Name:{data.user.name}</p>
            <p> email: {data.user.email}</p>
            <p> address: {person.address}</p>
            <p>skills: {person.skills}</p>
            <p>education: {person.education}</p>
            <p>phoneNumber: {person.phoneNumber}</p>
            <p>experience: {person.experience}</p>
            <p>gender: {person.gender}</p>
            <p>specilaization: {person.specialization}</p>
            <p>projects: {person.projects}</p>
            <p>github: {person.github}</p>
            <p>linkedin: {person.linkedin}</p>
            <p>{person._id}</p>
            {/* <button onClick={logout}>Logout</button> */}
            <Link to={"/api/portfolio/" + portfolioId}>Edit</Link> 
            <button onClick={e => {deletePortfolio(person._id)}}>Delete</button>
        </div>
    )
}

export default Portfolio
