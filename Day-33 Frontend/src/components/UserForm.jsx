import React,{ useState } from "react"

const UserForm = ({setIsAddUser,fetchData})=>{
    const [firstName , setfirstName]=useState("")
    const [lastName , setlastName]=useState("")
    const [email , setemail]=useState("")
    const [contactDetails,setcontactDetails]=useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
           const response= await axios.post("http://localhost:3000/api/User",{
            firstName,lastName,email,contactDetails})
            setIsAddUser(false);
            fetchData();
            }
           catch(error){
              console.log(error)
           }
        }
        

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><p>FirstName</p></div>
                    <input type="text" placeholder="First Name"></input>
                </div>
                <div>
                    <div><p>LastName</p></div>
                    <input type="text" placeholder="Last Name"></input>
                </div>
                <div>
                    <div><p>Email</p></div>
                    <input type="text" placeholder="Enter Email"></input>
                </div>
                <div>
                    <div><p>contactDetails</p></div>
                    <input type="text" placeholder="Contact Details"></input>
                </div>
            </form>
        </div>
    )
}