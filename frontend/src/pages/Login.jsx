import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/utils/api";
import { House } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/utils/constants";
import { jwtDecode } from "jwt-decode";

export function Login() {
  const { register, handleSubmit } = useForm();     // access react-form-hook
  const navigate = useNavigate();                 // initialize navigate hook
  const [Loading, setLoading] = useState(false); // useState for loading

  useEffect(() => { // UseEffect checks that if user is logged in, then don't show login page and redirect it to dashboard
    const token = localStorage.getItem(ACCESS_TOKEN); 
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000; // Convert date to seconds
        if (decoded.exp > now) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, [navigate]);


  const handleForm = async (data) => { // This function hold the register logic
    setLoading(true); // set loading to true
    const { username, password } = data; // capture the data that is coming from the form & destructure that
    console.log(data);
    try {
      const res = await api.post("/api/users/token/", { // making use of api.js and sending post request to token access api
        username,
        password,
      });
      
      console.log(res);

      localStorage.setItem(ACCESS_TOKEN, res.data.access); // store the access token to local storage
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh); // store the refresh token to local storage
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-8 left-8">
        <Link to="/" className="cursor-pointer">
          <House />
        </Link>
      </div>
      <div className="w-full h-screen flex">
        <div className="w-[50%] flex flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-200">
          <form onSubmit={handleSubmit(handleForm)}>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                  Enter your username below to login to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    {...register("username")}
                    id="username"
                    type="text"
                    placeholder="e.g. johndoe"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    id="password"
                    type="password"
                    placeholder="*******"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Sign in</Button>
              </CardFooter>
            </Card>
          </form>
          <div className="flex pt-8 gap-5 items-center">
            <p>Not a customer?</p>
            <Link to="/register">
              <Button>Register here</Button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] ">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1618544976528-6fe8b8a811b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Login;
