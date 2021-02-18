import { useState } from 'react';
import { GroupInput } from './GroupInput';
import '../css/form.css'
import { Button } from './Button';
import { GroupSelect } from './GroupSelect';

export const Form = () => {

   const [formData, updateFormData] = useState({
      branch: {
         name: "",
         validationMessage: "Please select the branch!",
         isValid: "false",
      },
      date: {
         date: "",
         endDate: "",
         validationMessage: "Please enter the correct date of birth!",
         isValid: "false"
      },
      selfie: {
         name: "",
         size: 0,
         accept: ".jpg, .jpeg, .gif, .png, .pdf",
         validationMessage: "Please check the size of the file!",
         isValid: "false"
      },
      firstName: {
         name: "",
         validationMessage: "Please enter your first name!",
         isValid: "false",
      },
      lastName: {
         name: "",
         validationMessage: "Please enter your last name!",
         isValid: "false",
      },
      email: {
         name: "",
         validationMessage: "Please enter a valid email address!",
         isValid: "false",
      },
   });

   const updateFormField = (field, fieldKey, value) => {
      updateFormData({ ...formData, [field]: { ...formData[field], [fieldKey]: value } });
      //console.log("field", field, "fieldKey", fieldKey, "value", value)
   };

   // max Date
      let date = new Date(); 
   
      let day = date.getDate();
      if (day < 10) day = '0' + day;
    
      let month = date.getMonth() + 1; 
      if (month < 10) month = '0' + month;
    
      let year = date.getFullYear();
      if (year < 10) year = '0' + year;
   
      let endDate = year + "-" + month + "-" + day;
     // updateFormField('date', "endDate", endDate)
   

  

   const setBranch = (value) => {
      updateFormField('branch', "name", value.name)
   }

   const setPhoto = (value) => {
      console.log("kkk", value)
      updateFormField('selfie', "name", value.name);
      updateFormField('selfie', "size", value.size)
   }

   const setDateOfBirth = (value) => {
      updateFormField('date', "date", value.name)
   }

   const setFirstName = (value) => {
      updateFormField('firstName', "name", value.name)
   }

   const setLastName = (value) => {
      updateFormField('lastName', "name", value.name)
   }

   const setEmail = (value) => {
      updateFormField('email', "name", value.name)
   }

   const checkBranch = () => {
      let validBranch = formData.branch.name !== "" ? true : false;
      updateFormField("branch", "isValid", validBranch)
   }

   const checkDateOfBirth = () => {
      let validDate = formData.date.date <= endDate ? true : false;
      updateFormField("date", "isValid", validDate)
   }

   const checkFirstName = () => {
      let regFirstName = /(^[a-zA-Z]+)-*([a-zA-Z]*)$/i; 
      updateFormField("firstName", "isValid", regFirstName.test(formData.firstName.name));
   }

   const checkLastName = () => {
      let regLastName = /(^[a-zA-Z]+)-*'*([a-zA-Z]*)$/i;
      updateFormField("lastName", "isValid", regLastName.test(formData.lastName.name));
   }

   const checkEmail = () => {
      let regEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      updateFormField("email", "isValid", regEmail.test(formData.email.name))
   }

   const checkValidation = () => {
      checkBranch();
      checkDateOfBirth();
      checkFirstName(); 
      checkLastName(); 
      checkEmail();
   }
   //console.log("branch", formData.branch)
     // console.log("fn", formData.firstName)
      //console.log("ln", formData.lastName)
     // console.log("email", formData.email)
     console.log("data", formData)
   return (
      <div>
         <form className="form-body p-5  mb-3" method="POST" name="form">
            <h4 className="form-header">Before You Begin</h4>
            <GroupSelect setData={setBranch} name="branch" labelText="Please select the NZLH Branch Closest To You" validationMessage={formData.branch.validationMessage}></GroupSelect>
            <h4 className="form-header">Personal Data</h4>
            <p className="form-text">Before you start please have ready, your passport, birth sertificate, driver's license and any proof of your qualifications.</p>
            <GroupInput setData={setDateOfBirth} name="date" labelText="Birth Date" type="date" validationMessage={formData.date.validationMessage} maxDate={endDate}></GroupInput>
            <GroupInput setData={setPhoto} name="selfie" labelText="Take a selfie for your file - [Files of type: jpg, jpeg, gif, png & pdf] (Limited to 1MB)" type="file" validationMessage={formData.selfie.validationMessage} accept={formData.selfie.accept}></GroupInput>

            
            <div className="row">
               <GroupInput setData={setFirstName} name="first-name" labelText="First name" type="text" validationMessage={formData.firstName.validationMessage} isValid={formData.firstName.isValid} placeholder="John" maxlength="50"></GroupInput>
               <GroupInput setData={setLastName} name="last-name" labelText="Last name" type="text" validationMessage={formData.lastName.validationMessage} isValid={formData.lastName.isValid}  placeholder="Smith" maxlength="50"></GroupInput>
            </div>
            <GroupInput setData={setEmail} name="email-adress" labelText="Email address" type="email" validationMessage={formData.email.validationMessage} isValid={formData.email.isValid} placeholder="j.smith@example.com"></GroupInput>
            <div className="row">
               <GroupInput name="mobile-phone" labelText="Mobile phone" type="text" validationMessage="Please enter your mobile phone number!" placeholder="__-_______"></GroupInput>
               <GroupInput name="home-phone" labelText="Home phone" type="text" validationMessage="Please enter your home phone number!" placeholder="__-____-__-__" sup="false" required="false"></GroupInput>
            </div>
            <Button startValidation={checkValidation}></Button>
         </form>
      </div>
   )
}