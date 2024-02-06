import axios from "axios";
import React, { useState } from "react";
import { containerStyle } from "../componenets/Components";

const vFormId = import.meta.env.VITE_VFORMID;
const merchantId = import.meta.env.VITE_MERCHANTID;
const API= import.meta.env.VITE_API;
const NewCustomer = () => {
  const [formOptions, setFormOptions] = useState({
    vFormId: vFormId,
    publicMerchantKey: merchantId,
    dev: false,
    personalInformation: {
      image:'',
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      bvn: "",
      dateOfBirth:"",
      gender: "MALE",
    },
    appearance: {
      greeting:
        "We will need to verify your identity. It will only take a moment.",
      actionText: "Verify Identity",
      buttonBackgroundColor: "#46B2C8",
      buttonTextColor: "#ffffff",
      primaryColor: "#46B2C8",
    },
    metadata: {},
    onSuccess: (data) => {
      // custom logic here
    },
    onClose: () => {
      // custom logic here
    },
  });
  console.log(formOptions);


  const sendData= async(formOptions)=>{
    console.log("DATA",formOptions);
try {
  const response = await axios.post("https://crudcrud.com/api/c834be654a7a4803ac1ee7de9b30e670/customer",{formOptions})
 console.log(response.data);
} catch (error) {
  console.log(error.message);
}
  }

  const handleSubmit = async() => {
  try {
    await sendData(formOptions)
  } catch (error) {
    console.error(error.message);
  }
  };

  const handleClose = () => {
    // Trigger onClose logic
    formOptions.onClose();
  };

  return (
    <div className={containerStyle}>
      <form
        // onSubmit={handleFirstNameChange}
        className="flex flex-col gap-6 border rounded p-4 "
      >
        <div className="flex flex-col justify-center item-center">
       
          <h3 className="text-center text-orange-300">Customer's Data</h3>
        </div>
        <input
          className="p-2 rounded outline-none  border  focus:border-red-300"
          type="text"
          placeholder="First Name"
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              firstName: e.target.value,
            })
          }
        />
        <input
          className="p-2 rounded outline-none  border f focus:border-red-300"
          type="text"
          placeholder="Middle Name"
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              middleName: e.target.value,
            })
          }
        />

        <input
          className="p-2 rounded outline-none  border  focus:border-red-300"
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              lastName: e.target.value,
            })
          }
        />
        <input
          className="p-2 rounded outline-none  border  focus:border-red-300"
          type="text"
          placeholder="Mobile"
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              mobile: e.target.value,
            })
          }
        />
        <input
          className="p-2 rounded outline-none  border f focus:border-red-300"
          type="text"
          placeholder="B V N "
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              bvn: e.target.value,
            })
          }
        />
        <input
          className="p-2 rounded outline-none  border focus:border-red-300"
          type="date"
          placeholder="Date of  Birth"
          required
          onChange={(e) =>
            setFormOptions({
              ...formOptions.personalInformation,
              dateOfBirth: e.target.value,
            })
          }
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 p-3 rounded text-white active:bg-green-400"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleClose}
          className="bg-red-500 p-3 rounded text-white active:bg-red-400"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default NewCustomer;
