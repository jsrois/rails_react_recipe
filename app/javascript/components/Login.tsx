import * as React from "react";
import useForm from "react-hook-form";

type UserLoginData = {
  name: string;
  password: string;
};

const Login = (): JSX.Element => {
  const { register, setValue, handleSubmit, errors } = useForm<UserLoginData>();

  const onSubmit = handleSubmit(() => {
    console.log("data submitted");
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name</label>
      <input name="name" type="text" ref={register({ required: true })} />
      {errors.name && <span className="error-msg">This field is required</span>}
      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      {errors.password && <span className="error-msg">This field is required</span>}
      <input type="submit" value="Log In"/>
    </form>
  );
};

export default Login;
