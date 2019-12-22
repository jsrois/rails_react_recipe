import * as React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

export const Home = (): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <div>Successfully Logged In</div>
  ) : (
    <Redirect to='login'/>
  );
};
