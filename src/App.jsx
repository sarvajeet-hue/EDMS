import { useEffect, useState, useRef } from "react";
import { PopupBar } from "./components/PopupBar";

function App() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);

  const handleForm = () => {
    setShow(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Popup Ref:", popupRef.current);
      console.log("Event Target:", event.target);
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        console.log("Clicked outside the popup, closing it.");
        setShow(false);
      } else {
        console.log("Clicked inside the popup, keeping it open.");
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {  

      
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  

  return (
    <div className="flex flex-col gap-5">
      <div
        onClick={handleForm}
        className="flex items-center justify-between mt-[50px]"
      >
        <p className="font-bold">EDMS</p>
        <button className="flex items-center justify-center px-3 py-1 border rounded-3xl bg-gray-300">
          Add Employee
        </button>
      </div>
      <div className="w-[100%] h-[400px] border border-black"></div>

      {show && (
        <div
          ref={popupRef}
          className="popup-container bg-white border border-gray-300 p-4 shadow-lg"
        >
          <PopupBar />
        </div>
      )}
    </div>
  );
}

export default App;
