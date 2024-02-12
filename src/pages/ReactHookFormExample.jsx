import React from "react";
import { useForm } from "react-hook-form";

function ReactHookFormExample() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookFormExample;
