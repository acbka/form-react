import { Select } from './Select';

export const GroupSelect = ({setData, name, labelText, validationMessage, sup="true", isValid}) => {


   return (
      <div className="form-group">
         <label className="form-label" htmlFor={name}>{labelText}
            {sup && <sup className="text-danger">*</sup>}
         </label>
         <Select setSelectData={setData}></Select>
         {!isValid && <div className="validationMessage">{validationMessage}</div>}
      </div>
   )
}

