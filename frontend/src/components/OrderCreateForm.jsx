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
import api from "@/utils/api";

const OrderCreateForm = ({ setFormToggle, formToggle }) => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/api/customers/");
      setCustomers(response.data.Customers);
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      setError("Failed to load customers. Please try again.");
    }
  };


  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <div>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Create order</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                {" "}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="customer">Customer</Label>
                  <Select id="customer">
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
                  <Select id="status">
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
                </div>{" "}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Total Amount</Label>
                  <Input type="number" id="amount" placeholder="e.g. $279" />
                </div>{" "}
              </div>
            </form>
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
      </div>
    </>
  );
};

export default OrderCreateForm;
