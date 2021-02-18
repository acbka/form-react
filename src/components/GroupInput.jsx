import { Input } from './Input';
import '../css/groupInput.css'

export const GroupInput = ({setData, name, labelText, type, validationMessage, placeholder, maxLength, sup="true", isValid="false", maxDate, accept}) => {

   return (
      <div className="form-group">
         <label className="form-label" htmlFor={name}>{labelText}
            {sup && <sup className="text-danger">*</sup>}
         </label>
         <Input setInputData={setData} id={name} name={name} type={type} placeholder={placeholder} maxLength={maxLength} maxDate={maxDate} accept={accept}></Input>
         {!isValid && <div className="validationMessage">{validationMessage}</div>}
      </div>
   )
}

