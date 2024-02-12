import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const HookForm = () => {
  const form = useForm();
 const {register,control} = form 


  return (
    <div>
      <form  className="flex flex-col items-center mt-10 h-screen w-screen gap-6">
        <p>Form</p>
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-sm w-[70%] outline-none focus:border-green-300 pl-4 pt-2 pb-2 pr-2"
          {...register("firstName")}
        />
        <input
          type="text"
          placeholder="Middle Name"
          className="border rounded-sm w-[70%] outline-none focus:border-green-300 pl-4 pt-2 pb-2 pr-2"
          {...register("middletName")}
        />
        <input
          type="text"
          placeholder="Email"
          className="border rounded-sm w-[70%] outline-none focus:border-green-300 pl-4 pt-2 pb-2 pr-2"
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border rounded-sm w-[70%] outline-none focus:border-green-300 pl-4 pt-2 pb-2 pr-2"
          {...register("mobile")}
        />
        <input
          type="Password"
          placeholder="Password"
          className="border rounded-sm w-[70%] outline-none focus:border-green-300 pl-4 pt-2 pb-2 pr-2"
          {...register("password")}
        />
        <button className="bg-green-500 border rounded-lg pr-4 pl-4 pt-2 pb-2  w-[70%] active:bg-green-400 text-white">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default HookForm;

// //react hook form with tailwind css
// import React from "react";
// import { useForm } from "react-hook-form";

//  const HookForm=()=> {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
//       <div className="form-control w-full mb-5">
//         <label className="">
//           <span className="text-secondary font-semibold text-lg">Email</span>
//         </label>
//         <input
//           type="text"
//           placeholder="example@email.com"
//           className="input input-bordered w-full rounded-full"
//           {...register("email", {
//             required: {
//               value: true,
//               message: "Email Required !!!",
//             },
//             pattern: {
//               value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
//               message: "Invalid Email Provided !!!",
//             },
//           })}
//         />
//         <label className="level font-bold">
//           {errors.email?.type === "required" && (
//             <span className="label-text-alt text-red-500">
//               {errors.email.message}
//             </span>
//           )}
//           {errors.email?.type === "pattern" && (
//             <span className="label-text-alt text-red-500">
//               {errors.email.message}
//             </span>
//           )}
//         </label>
//       </div>
//       <div className="form-control w-full">
//         <label className="">
//           <span className="text-secondary font-semibold text-lg">Password</span>
//         </label>
//         <input
//           type="password"
//           placeholder="abcd123$"
//           className="input input-bordered w-full rounded-full"
//           {...register("password", {
//             required: {
//               value: true,
//               message: "Password Required !!!",
//             },
//             pattern: {
//               value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
//               message: "Password Must be 8 char including a special char !!!",
//             },
//           })}
//         />
//         <label className="level font-bold">
//           {errors.password?.type === "required" && (
//             <span className="label-text-alt text-red-500">
//               {errors.password.message}
//             </span>
//           )}
//           {errors.password?.type === "pattern" && (
//             <span className="label-text-alt text-red-500">
//               {errors.password.message}
//             </span>
//           )}
//         </label>
//       </div>
//       <input type="submit" />
//     </form>
//   );
// }

// export default HookForm
