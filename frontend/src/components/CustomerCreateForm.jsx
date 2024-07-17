import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "@/utils/api";

const CustomerCreateForm = ({ setFormToggle, formToggle, fetchCustomers }) => {
  const { register, handleSubmit } = useForm();
  const [Loading, setLoading] = useState(false);

  const handleForm = async (data) => {
    setLoading(true);
    const { name, email, city, country, phone } = data;
    // console.log(data);
    try {
      const res = await api.post("/api/customers/", {
        name,
        email,
        city,
        country,
        phone,
      });

      setFormToggle(false);
      fetchCustomers();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle>Create customer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      {...register("name")}
                      id="name"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      id="email"
                      placeholder="e.g. johndoe@mail.com"
                    />
                  </div>
                </section>
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input
                      {...register("city")}
                      id="city"
                      placeholder="e.g. Hamburg"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      {...register("country")}
                      id="country"
                      placeholder="e.g. Canada"
                    />
                  </div>
                </section>
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      {...register("phone")}
                      id="phone"
                      placeholder="e.g. (012)123456"
                    />
                  </div>
                </section>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={() => setFormToggle(!formToggle)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button>Create</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default CustomerCreateForm;
