import { useEffect, useState, useRef } from "react";
import { Form } from "./components/Form";

function App() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);

  const handleForm = () => {
    setShow(true);
  };

  useEffect(() => {
    console.log("popref:" , popupRef.current)
    // Function to handle click outside
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        console.log("inside the if condition",popupRef.current)
        console.log(popupRef.current.contains(event.target))
        setShow(false);
      }
    }

    // Add the event listener only if the dialog is open
    // if (show) {
    //   document.addEventListener("mousedown", handleClickOutside);
    // }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
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
      <div className="w-[100%] h-[400px] border border-black"></div>

      {show && (
        <div className=" fixed inset-0  flex items-center justify-center  bg-gray-300 bg-opacity-10 backdrop-blur-sm ">
          <div ref={popupRef}>
            
            <Form />
          </div>
        </div>
        // <div>
        //   <PopupBar popupRef={popupRef} />
        // </div>
      )}
    </div>
  );
}

export default App;