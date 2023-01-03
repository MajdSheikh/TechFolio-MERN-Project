const { Portfolio } = require('../models/portfolio.model');
const jwt = require("jsonwebtoken");



module.exports.createPortfolio = (request, response) => {
    // session=request.session;

    const name = request.body.name ;
    // const password = request.body.password ;
    // const confirmPassword = request.body.confirmPassword ;

    const phoneNumber = request.body.phoneNumber ;
    const email = request.body.email ;
    const gender = request.body.gender ;
    const specialization = request.body.specialization ;
    const address = request.body.address ;
    const linkedin = request.body.linkedin ;
    const github = request.body.github ;
    const skills = request.body.skills ;
    const experience = request.body.experience ;
    const education = request.body.education ;
    const summary = request.body.summary ;
    const projects = request.body.projects ;
    const profilePicUrl = request.body.profilePicUrl ;
    const photo = request.file.filename;
    const user_id = request.body.user_id;



        const newPortfolioData = {

            name: name,
            // password: password,
            // confirmPassword:confirmPassword,
            phoneNumber: phoneNumber,
            email: email,
            gender: gender,
            specialization: specialization,
            address: address,
            linkedin: linkedin,
            github: github, 
            skills: skills,
            experience: experience,
            education: education,
            summary: summary,
            projects: projects,
            profilePicUrl: profilePicUrl,
            photo: photo,
            user_id:user_id,

        }
        const newPortfolio = new Portfolio(newPortfolioData);
        newPortfolio.save()
        .then(Portfolio => response.json(Portfolio))
        .catch(err => response.status(400).json(err))

    // User.create(request.body)
    //     .then(user => response.json(user))
    //     .catch(err => response.status(400).json(err))

        // newUser.save()
        //        .then(() => res.json('User Added'))
        //        .catch(err => res.status(400).json('Error: ' + err));
}


    
    module.exports.getAllPortfolios = (request, response) => {
        Portfolio.find({})
        .populate("user_id")
            .then(Portfolios => response.json(Portfolios))
            .catch(err => response.json(err))
    }
    module.exports.getPortfolio = (request, response) => {
        Portfolio.findOne({_id:request.params.id})
        .populate("user_id")
            .then(Portfolio => response.json(Portfolio))
            .catch(err => response.json(err))
    }

    module.exports.updatePortfolio = (request, response) => {
        Portfolio.findOneAndUpdate({_id: request.params.id}, request.body, {
            new: true,
            runValidators: [true, "{PATH} is required"],
          })
            .then(updatedPortfolio => response.json(updatedPortfolio))
            .catch(err => response.status(400).json(err));
    }
    module.exports.deletePortfolio = (request, response) => {
        Portfolio.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
    