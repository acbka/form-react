import '../css/select.css';

export const Select = ({setSelectData, name}) => {

   const handleChange = (e) => {
      const value = e.target.value;
      setSelectData(value);
   }

   return (
      <select className="select" id="branch" name={name} required onChange={handleChange}>
         <option value=""></option>
         <option value="auckland">Auckland</option>
         <option value="hamilton">Hamilton</option>
         <option value="wellington">Wellington</option>
      </select>
   )
}

