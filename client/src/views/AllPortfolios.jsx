import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'


const AllPortfolios = (props) => {

    const [portfolios, setPortfolios] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();
    

    useEffect(() => {
    axios.get('http://localhost:8000/api/portfolios')
        .then(res => {
            setPortfolios(res.data);
            setLoaded(true);
            var data = JSON.parse(sessionStorage.getItem('user'))

            console.log(data.user._id);
        })
        .catch(err => console.log(err));
    }, []);


    const logout = (e) => {
    sessionStorage.removeItem('userToken')
    navigate("/")
}
var data = JSON.parse(sessionStorage.getItem('user'))


    return (
    loaded && 
            <div>
                <button onClick={logout}>Logout</button>
                <p><Link to={"/Form"}>create your portfolio</Link></p>
                {portfolios.map((prortfolio, i) => 
                    data.user._id==prortfolio.user_id._id?
                    <p key ={i}><Link to={"/portfolio/"+prortfolio._id}>View My Portfolio</Link></p>
                    :
                    <p></p>
                    )}
            </div>
    )
}

export default AllPortfolios
