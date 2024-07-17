import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { useEffect, useState } from "react";
  import api from "@/utils/api";
  import { useForm } from "react-hook-form";
  
  const OrderEditForm = ({ order, onClose, fetchOrders }) => {
    const { register, handleSubmit, reset, setValue } = useForm({
      defaultValues: order,
    });
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [formToggle, setFormToggle] = useState(false);
  
    useEffect(() => {
      reset(order);
    }, [order, reset]);
  
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
  
    const handleForm = async (data) => {
      setLoading(true);
      try {
        const url = `/api/orders/${order.id}`;
        console.log("PUT request URL:", url);
        console.log("PUT request data:", data);
        await api.put(url, data);
        fetchOrders(); // Refresh the order list
        onClose();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle>Edit order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="customer">Customer</Label>
                  <Select
                    {...register("customer.id")}
                    onValueChange={(value) => setValue("customer.id", value)}
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
                    {...register("status")}
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
                    {...register("total_amount")}
                    type="number"
                    id="amount"
                    placeholder="e.g. $279"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    );
  };
  
  export default OrderEditForm;
  