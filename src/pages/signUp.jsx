import React from "react";
import ReactSelect from "react-select";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Form } from "react-bootstrap";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const onInvalid = (error) => {
    console.log(error);
  };
  const selectOptions = [
    {
      value: 1,
      label: "red",
    },
    {
      value: 2,
      label: "green",
    },
    {
      value: 3,
      label: "yellow",
    },
  ];
  // console.log(errors);
  return (
    <>
      <h1 className="text-center mt-3">Sign Up</h1>
      <form
        className="container py-3 w-50 shadow my-5"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <div className="form-group m-3">
          <label htmlFor="userEmail">Email address</label>
          <input
            {...register("userEmail", {
              required: true,
              pattern:
                '^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i',
            })}
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="Enter email"
          />
          {errors.userEmail && errors.userEmail.type === "required" && (
            <p className="text-danger">required</p>
          )}
          {errors.userEmail && errors.userEmail.type === "pattern" && (
            <p className="text-danger">Pattern not correct!</p>
          )}
        </div>
        <div className="form-group m-3">
          <label htmlFor="genderSelect">Select gender</label>
          <Form.Select {...register("genderSelect")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </div>
        <div className="form-group m-3">
          <label htmlFor="hobbiesSelect">Select hobbies</label>
          {/* <ReactSelect
          isMulti
          options={selectOptions}
          
        /> */}
          <Controller
            name="hobbies"
            control={control}
            render={({ field }) => {
              console.log(field);
              return (
                <ReactSelect
                  {...field}
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                  isMulti
                />
              );
            }}
          />
        </div>

        <div className="form-group m-3">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
              minLength: 8,
            })}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-danger">Required field!</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="text-danger">
              At least one uppercase letter, one lowercase letter, one number
              and one special character
            </p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-danger">Minimum is 8 characters!</p>
          )}
        </div>
        <div className="form-group m-3">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="form-control"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
        </div>
        <div className="m-3 text-end">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
