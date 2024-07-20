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
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "@/store/actions/CustomerActions";
import { fetchOrders } from "@/store/actions/OrderActions";

const OrderCreateForm = ({ setFormToggle, formToggle }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { customerList } = useSelector((state) => state.customers);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await api.get("/api/agent/role/");
        setRole(response.data.role.role);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

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
        dispatch(fetchOrders()); // Refresh the order list
        setFormToggle(!formToggle); // Close the form
      }
    } catch (error) {
      console.error("Failed to create order:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  if (role === "") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <div>Create order</div>
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
          {role === "Tester" ? (
            <p>You do not have permission to create an order.</p>
          ) : (
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
                      {customerList.map((cust) => (
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderCreateForm;
