import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/utils/api";

const CustomerEditForm = ({ customer, onClose, fetchCustomers }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: customer,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    reset(customer);
  }, [customer, reset]);

  const handleForm = async (data) => {
    setLoading(true);
    try {
      const url = `/api/customers/${customer.id}`;
      console.log("PUT request URL:", url);
      console.log("PUT request data:", data);
      await api.put(url, data);
      fetchCustomers(); // Refresh the customer list
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <Input {...register("city")} id="city" placeholder="e.g. Hamburg" />
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
  );
};

export default CustomerEditForm;
