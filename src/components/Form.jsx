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
         isValid: true,
      },
      date: {
         date: "",
         endDate: "",
         validationMessage: "Please enter the correct date of birth!",
         isValid: true,
      },
      selfie: {
         name: "",
         size: 0,
         accept: ".jpg, .jpeg, .gif, .png, .pdf",
         validationMessage: "Please check the size of the file!",
         isValid: true
      },
      firstName: {
         name: "",
         validationMessage: "Please enter your first name!",
         isValid: true,
      },
      lastName: {
         name: "",
         validationMessage: "Please enter your last name!",
         isValid: true,
      },
      email: {
         name: "",
         validationMessage: "Please enter a valid email address!",
         isValid: true,
      },
      mobilePhone: {
         number: "",
         validationMessage: "Please enter your mobile phone number!",
         isValid: true,
      },
      homePhone: {
         number: "",
         validationMessage: "Please enter your home phone number!",
         isValid: true,
      },
   });

   const updateFormField = (field, fieldKey, value) => {
      updateFormData({ ...formData, [field]: { ...formData[field], [fieldKey]: value } });
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

   const setBranch = (value) => {
      updateFormField('branch', "name", value)
   }

   const setPhoto = (value) => {
      updateFormData({...formData,
         selfie: {
            ...formData.selfie, 
            name: value.name,
            size:  value.size
         },
      })
   }

   const setDateOfBirth = (value) => {
      updateFormData({...formData,
         date: { ...formData.date,
         date: value.name,
         endDate: endDate
         }
      })
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

   const setMobilePhone = (value) => {
      updateFormField('mobilePhone', "number", value.name)
   }

   const setHomePhone = (value) => {
      updateFormField('homePhone', "number", value.name)
   }

   // check

   const checkBranch = (value) => {
      return value !== "";
   }

   const checkDateOfBirth = (value) => {
      return Date.parse(value) <= Date.parse(endDate) && Date.parse(value) !== "";
   }

   const checkPhoto = (value) => { 
      return value > 0 && value < 1024*1024
   }

   const checkFirstName = (value) => {
      const regFirstName = /(^[a-zA-Z]+)-*([a-zA-Z]*)$/i; 
      return regFirstName.test(value);
   }

   const checkLastName = (value) => {
      const regLastName = /(^[a-zA-Z]+)-*'*([a-zA-Z]*)$/i;
      return regLastName.test(value);
   }

   const checkEmail = (value) => {
      const regEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      return regEmail.test(value);
   }

   const checkMobilePhone = (value) => {
      const regMobilePhone = /^[0-9]{2}-[0-9]{7}$/;
      return regMobilePhone.test(value);
   }

   const checkHomePhone = (value) => {
      const regHomePhone = /^[0-9]{2}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/g;
      return regHomePhone.test(value) || value === "";
   }

   const checkValidation = () => {
      updateFormData({
         branch: {
           ...formData.branch, isValid: checkBranch(formData.branch.name)
         },
         date: {
           ...formData.date, isValid: checkDateOfBirth(formData.date.date)
         },
         selfie: {
            ...formData.selfie, isValid: checkPhoto(formData.selfie.size)
          },
         firstName: {
         ...formData.firstName, isValid: checkFirstName(formData.firstName.name)
         },
         lastName: {
         ...formData.lastName, isValid: checkLastName(formData.lastName.name)
         },
         email: {
         ...formData.email, isValid: checkEmail(formData.email.name)
         },
         mobilePhone: {
            ...formData.mobilePhone, isValid: checkMobilePhone(formData.mobilePhone.number)
            },
         homePhone: {
            ...formData.homePhone, isValid: checkHomePhone(formData.homePhone.number)
            },
       })
   }
console.log(formData.mobilePhone)
   return (
      <div>
         <form className="form-body" method="POST" name="form">
            <h4 className="form-header">Before You Begin</h4>
            <GroupSelect setData={setBranch} name="branch" labelText="Please select the NZLH Branch Closest To You" validationMessage={formData.branch.validationMessage} isValid={formData.branch.isValid}></GroupSelect>
            <h4 className="form-header">Personal Data</h4>
            <p className="form-text">Before you start please have ready, your passport, birth sertificate, driver's license and any proof of your qualifications.</p>
            <GroupInput setData={setDateOfBirth} name="date" labelText="Birth Date" type="date" validationMessage={formData.date.validationMessage} maxDate={endDate} isValid={formData.date.isValid}></GroupInput>
            <GroupInput setData={setPhoto} name="selfie" labelText="Take a selfie for your file - [Files of type: jpg, jpeg, gif, png & pdf] (Limited to 1MB)" type="file" validationMessage={formData.selfie.validationMessage} accept={formData.selfie.accept} isValid={formData.selfie.isValid}></GroupInput>

            
            <div className="row">
               <GroupInput setData={setFirstName} name="first-name" labelText="First name" type="text" validationMessage={formData.firstName.validationMessage} isValid={formData.firstName.isValid} placeholder="John" maxlength="50"></GroupInput>
               <GroupInput setData={setLastName} name="last-name" labelText="Last name" type="text" validationMessage={formData.lastName.validationMessage} isValid={formData.lastName.isValid}  placeholder="Smith" maxlength="50"></GroupInput>
            </div>
            <GroupInput setData={setEmail} name="email-adress" labelText="Email address" type="email" validationMessage={formData.email.validationMessage} isValid={formData.email.isValid} placeholder="j.smith@example.com"></GroupInput>
            <div className="row">
               <GroupInput setData={setMobilePhone} name="mobile-phone" labelText="Mobile phone" type="text" validationMessage={formData.mobilePhone.validationMessage} isValid={formData.mobilePhone.isValid} placeholder="__-_______"></GroupInput>
               <GroupInput setData={setHomePhone} name="home-phone" labelText="Home phone" type="text" validationMessage={formData.homePhone.validationMessage} isValid={formData.homePhone.isValid}  placeholder="__-____-__-__" sup={false} required="false"></GroupInput>
            </div>
            <Button startValidation={checkValidation}></Button>
         </form>
      </div>
   )
}