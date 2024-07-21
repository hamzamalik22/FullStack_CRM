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
import { useState, useEffect } from "react";
import api from "@/utils/api";
import { X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "@/store/actions/CustomerActions";
import { fetchUserRole } from "@/store/actions/AgentActions";

const CustomerCreateForm = ({ setFormToggle, formToggle }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const role = useSelector((state) => state.agent.role);

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  const handleForm = async (data) => {
    setLoading(true);
    const { name, email, city, country, phone } = data;
    try {
      const res = await api.post("/api/customers/", {
        name,
        email,
        city,
        country,
        phone,
      });

      toast.success("Customer Created");
      setFormToggle(false);
      dispatch(fetchCustomers());
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (role === "") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ToastContainer />
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  <div>Create customer</div>
                  <div>
                    <X
                      className="cursor-pointer"
                      onClick={() => setFormToggle(!formToggle)}
                      size="20px"
                    />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                {role === "Tester" ? (
                  <>
                    <p>You do not have permission to create a customer.</p>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </CardContent>
            {role !== "Tester" && (
              <CardFooter className="flex justify-between">
                <Button
                  onClick={() => setFormToggle(!formToggle)}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create"}
                </Button>
              </CardFooter>
            )}
          </Card>
        </form>
      </div>
    </>
  );
};

export default CustomerCreateForm;
