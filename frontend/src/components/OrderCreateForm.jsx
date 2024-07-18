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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "@/utils/api";

const OrderCreateForm = ({ setFormToggle, formToggle, fetchOrders }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/api/customers/");
      setCustomers(response.data.Customers);
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      const requestData = {
        customer: data.customer_id, // Correcting the field name
        status: data.status,
        total_Amount: data.total_amount,
      };
      const response = await api.post("/api/orders/", requestData);
      if (response.status === 201) {
        fetchOrders(); // Refresh the order list
        setFormToggle(!formToggle); // Close the form
      }
    } catch (error) {
      console.error("Failed to create order:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Create order</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="customer">Customer</Label>
                <Select
                  {...register("customer_id", { required: true })}
                  onValueChange={(value) => setValue("customer_id", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Customer" />
                  </SelectTrigger>
                  <SelectContent>
                    {customers.map((cust) => (
                      <SelectItem key={cust.id} value={cust.id}>
                        {cust.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="status">Status</Label>
                <Select
                  {...register("status", { required: true })}
                  onValueChange={(value) => setValue("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Out for delivery">
                      Out for delivery
                    </SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="amount">Total Amount</Label>
                <Input
                  {...register("total_amount", { required: true })}
                  type="number"
                  id="amount"
                  placeholder="e.g. $279"
                  onChange={(e) => setValue("total_amount", e.target.value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-6">
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderCreateForm;
