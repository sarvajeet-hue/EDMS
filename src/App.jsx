import { useEffect, useState, useRef } from "react";
import { PopupBar } from "./components/PopupBar";

function App() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);

  const handleForm = () => {
    setShow(true);
  };

  useEffect(() => {
    
    function handleClickOutside(event) {
      console.log("popref" , popupRef.current)
      // Check if the popup is open and the click is outside the popup
      
      if (
        show &&
        popupRef.current 
        
      ) {
        setShow(false); // Close the popup
      }
    }

    // Attach the click event listener to the document
    document.addEventListener("mousedown",handleClickOutside );

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      <div  className="w-[100%] h-[400px] border border-black"></div>

      {show && (
        <div >
          <PopupBar popupRef={popupRef}  />
        </div>
      )}
    </div>
  );
}

export default App;
