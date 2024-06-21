import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Authentications } from "../../service/login.service";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();
  useEffect(() => {
    const dataHave = localStorage.getItem("User Auth") 
    if(dataHave){
        nav("/dashboard")
    }
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = await Authentications("user", formData);
    if (loginData) {
        localStorage.setItem("User Auth",JSON.stringify(loginData))
      nav("/dashboard", { state: { loginData } });
    }
  };

  const handleEmailInput = (e) => {
    setFormData((pre) => {
      return {
        ...pre,
        email: e.target.value,
      };
    });
  };

  const handlePasswordInput = (e) => {
    setFormData((pre) => {
      return {
        ...pre,
        password: e.target.value,
      };
    });
  };
  return (
    <div className="">
      <div className=" h-[500px] flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              value={formData.email}
              onChange={handleEmailInput}
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              value={formData.password}
              onChange={handlePasswordInput}
              id="password1"
              type="password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
