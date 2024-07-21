import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomers,
  updateCustomer,
} from "@/store/actions/CustomerActions";
import { fetchUserRole } from "@/store/actions/AgentActions";

const CustomerEditForm = ({ customer, onClose }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: customer,
  });
  const dispatch = useDispatch();
  const role = useSelector((state) => state.agent.role);
  const loading = useSelector((state) => state.customers.loading);
  const error = useSelector((state) => state.customers.error);

  useEffect(() => {
    reset(customer);
  }, [customer, reset]);

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  const handleForm = async (data) => {
    dispatch(updateCustomer(customer.id, data)).then((res) => {
      if (!error) {
        dispatch(fetchCustomers());
        onClose();
      } else {
        console.error(error.message);
      }
    });
  };

  if (role === "") {
    return <p>Loading...</p>;
  }
  return (
    <>
      {role === "Tester" ? (
        <p>You do not have permission to edit a customer.</p>
      ) : (
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="grid gap-4">
            <div className="flex gap-5">
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
            </div>
            <div className="flex gap-5">
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
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  {...register("phone")}
                  id="phone"
                  placeholder="e.g. (012)123456"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                Save
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CustomerEditForm;
