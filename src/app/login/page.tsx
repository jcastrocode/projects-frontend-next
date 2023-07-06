"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { login } from "./services";


export default async function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    
    const res =await login({email, password});
     
    if (res.success) {
      const nextUrl = searchParams.get("next");
      router.push(nextUrl ?? "/");
      router.refresh();
    } else {
        console.log(res);
      alert("Login failed. " );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
