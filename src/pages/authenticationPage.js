import React from "react";
import Login from "./login";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <Login />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not login" }, { status: 500 });
  }
  return redirect("/home");
}
