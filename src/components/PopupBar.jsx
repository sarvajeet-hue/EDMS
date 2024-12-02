import React from "react";
import { Form } from "./Form";

export const PopupBar = ({ popupRef  }) => {
    
    
  return (
    <div
      ref={popupRef} 
      
      className="  fixed inset-0  flex items-center justify-center  bg-gray-300 bg-opacity-10 backdrop-blur-sm "
    >
      <Form />
    </div>
  );
};
