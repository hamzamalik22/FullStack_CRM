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
import { ACCESS_TOKEN } from "@/utils/constants";
import { jwtDecode } from "jwt-decode";
import { House } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { register, handleSubmit } = useForm(); // access react-form-hook components
  const navigate = useNavigate(); // initialize navigate hook
  const [Loading, setLoading] = useState(false); // useState for loading

  useEffect(() => {
    // UseEffect checks that if user is logged in, then don't show register page and redirect it to dashboard
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

  const handleForm = async (data) => {
    // This function hold the register logic
    setLoading(true); // set loading to true
    const { username, email, password } = data; // capture the data that is coming from form & destructure that
    console.log(data);
    try {
      const res = await api.post("/api/register/", {
        // making use of api.js and sending post request to register user api
        username,
        email,
        password,
      });
      console.log(res);
      navigate("/login");
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
      <div className="w-full h-screen flex flex-col lg:flex-row">
        <div className="w-full h-full lg:w-[50%] flex flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-200">
          <form onSubmit={handleSubmit(handleForm)} className="w-full max-w-sm px-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                  Enter your email below to create a new account.
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
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="e.g. johndoe@mail.com"
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
                <Button className="w-full" type="submit">
                  {Loading ? "Signing up..." : "Sign up"}
                </Button>
              </CardFooter>
            </Card>
          </form>
          <div className="flex pt-8 gap-5 items-center">
            <p>Already have an account?</p>
            <Link to="/login">
              <Button>Login here</Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[50%]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Register;
