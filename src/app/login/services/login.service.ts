import { authentication } from "../models/authentication";

export const login= async ({ email, password }: authentication) => {
  const url = "http://localhost:3001/auth/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return {data,success:true};
  } catch (error) {
    console.log(error);
    return {error,success:false};
  }
};
