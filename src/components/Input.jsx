import '../css/input.css'
export const Input = ({setInputData, id, name, type, placeholder, maxLength, required="true", maxDate, accept}) => {

   let value = {
      name: "",
      size: 0
   }

   const handleChange = (e) => {
      if (type === "file") {
         value.size = e.target.files[0].size;
         value.name = e.target.files[0].name;
      } else {
         value.name = e.target.value;
      }
      setInputData(value);
   }
   
   return (
      <input className="form-control" type={type} id={id} name={name} data-format="custom" 
      placeholder={placeholder} maxLength={maxLength} max={maxDate} accept={accept}
      onChange={handleChange} />
   )
}

