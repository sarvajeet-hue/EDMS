import { useEffect, useState, useRef } from "react";
import { PopupBar } from "./components/PopupBar";
import {Form} from "./components/Form"
import { EmployerList } from "./components/EmployerList";
import { Employer } from "./components/EmployerDetails";

function App() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);

  const handleForm = () => {
    setShow(true);
  };

  useEffect(() => {
    console.log("popref.current", popupRef.current)
    
    function handleClickOutside(event) {
     

      if(popupRef.current && !popupRef.current.contains(event.target)){
        console.log("popupRef.curren" , popupRef.current)
      
        setShow(false)
      }
      
    }

    // Attach the click event listener to the document
    document.addEventListener("mousedown",handleClickOutside );
    
  }, []); 

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between mt-[50px]">
        <p className="font-bold">EDMS</p>
        <button
          onClick={handleForm}
          className="flex items-center justify-center px-3 py-1 border rounded-3xl bg-gray-300"
        >
          Add Employee
        </button>
      </div>
      <div  className="w-[100%] h-[400px] border flex  items-center border-black">
        <EmployerList/>
        <Employer/>
      </div>

      {show && (
        <div className=" fixed inset-0 flex items-center justify-center  bg-gray-300 bg-opacity-10 backdrop-blur-sm " >
          {/* <div ref={popupRef} >
            <Form/>
          </div> */}
          <PopupBar setShow= {setShow} popupRef={popupRef}/>
        </div>
      )}
    </div>
  );
}

export default App;
