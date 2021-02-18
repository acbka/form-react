import '../css/button.css';

export const Button = ({startValidation}) => {

   const handleClick = (e) => {
      e.preventDefault();
      startValidation()
    }
   
   return (
      <div className="button">
         <button className="btn" id="click" 
         onClick={handleClick}
         >send</button>
      </div>
   )
}

