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
import { House } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Regsiter() {
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    const { email, password } = data;

    console.log(email);
    console.log(password);

    let userInfo = {
      email,
      password,
    };

    // try {
    //   userLogin(userInfo);
    // } catch (error) {
    //   console.log("error in login page", error);
    // }
  };

  return (
    <>
      <div className="absolute top-8 left-8">
        <Link to='/' className="cursor-pointer">
          <House />
        </Link>
      </div>
      <div className="w-full h-screen flex">
        <div className="w-[50%] flex flex-col items-center justify-center bg-zinc-200">
          <form onSubmit={handleSubmit(handleForm)}>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                  Enter your email below to create a new account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    id="password"
                    type="password"
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
            <p>Already have an account?</p>
            <Link to="/login">
              <Button>Login here</Button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] ">
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

export default Regsiter;
