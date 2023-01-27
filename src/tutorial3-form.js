import React from "react";

export default function Form(){
    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: "", comments: "", isFriendly: true, age: "", birthDate: "", employment: "unemployed"})
    console.clear()
    console.log(formData)

    
    
    function handleChange(event){
        const  {name, value, type, checked} = event.target

        setFormData(function(prevFormData){
            return {...prevFormData, [name]: type === "checkbox"|"radio" ? checked : value}
        })
    }

    function getFullName(event){
        event.preventDefault()
        console.log(formData.firstName, formData.lastName, formData.email, formData.comments)
    }
    
    return (
        <div className="form--container">
            <h2>React Forms <small>dont forget to learn forms for vanilla Js</small> </h2>
            <form onSubmit={getFullName}>
                <input placeholder="first name" type="text" name="firstName" onChange={handleChange} value={formData.firstName}/>
                <input placeholder="last name" type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
                <input placeholder="email" type="text" name="email" onChange={handleChange} value={formData.email} />
                <textarea placeholder="comments" name="comments" onChange={handleChange} value= {formData.comments}/>
                <div>
                <input name="isFriendly" id="isFriendly" type="checkbox" checked={formData.isFriendly} onChange ={handleChange}></input>
                <label htmlFor="isFriendly">Are You Friendly?</label>
                </div>
                <input name="age" type="number" placeholder="age" min="15" max="80" onChange={handleChange} value = {formData.value} />
                <input name="birthDate" type="date" min="2004-09-15" max="2023-01-25" value={formData.birthDate} onChange={handleChange}/>
                <fieldset>
                    <legend>
                    Current employment status
                    </legend>
                    <label htmlFor="unemployed">Unemployed</label>
                    <input name="employed" type="radio" id="unemployed" onChange={handleChange} value = "unemployed" checked = {formData.employment === "unemployed"}/>
                    <br />
                    <br />
                    <label htmlFor="parttime">Part-time</label>
                    <input name="employed" type="radio" id="parttime" onChange={handleChange} value = "parttime" checked = {formData.employment === "parttime"} />
                    <br />
                    <br />
                    <label htmlFor="fulltime">Full-time</label>
                    <input name="employed" type="radio" id="fulltime" onChange={handleChange} value = "fulltime" checked = {formData.employment === "fulltime"} />
                </fieldset>
            <button>Full Name</button>
            </form>
            {formData.firstName.length > 1 && <div>Your name is {formData.firstName}</div>}
            {formData.lastName.length > 1 && <div>Your name is {formData.lastName}</div>}
            {formData.email.length > 1 && <div>Your email is {formData.email}</div>}
            {formData.comments.length > 1 && <div>Your comment is {formData.comments}</div>}
        </div>
    )
}