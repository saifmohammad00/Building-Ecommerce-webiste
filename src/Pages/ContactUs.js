import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

const ContactUs=()=>{
    const [isValid,setisValid]=useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(event.target.name.value==="" || event.target.email.value==="" || event.target.password.value===""){
            setisValid(true);
            return;
        }
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
          };
        try{
            const response=await fetch("https://react-movies-app-44446-default-rtdb.asia-southeast1.firebasedatabase.app/contactus.json",{
                method:"POST",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!response.ok){
                throw new Error("something went wrong");
            }
            event.target.reset();
        }
        catch(error){
            console.log(error.message);
        }
      };
    return <>
    <Container className="mb-5" style={{maxWidth:"30rem"}}>
        <h1 className="text-center">Contact Us</h1>
        <Form noValidate validated={isValid} onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit form</Button>
        </Form>
    </Container>
    </>
}
export default ContactUs;