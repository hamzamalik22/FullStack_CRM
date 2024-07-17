import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import api from "@/utils/api";
import OrderEditForm from "./OrderEditForm";

export function OrderTable({ orders, fetchOrders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [customers, setCustomers] = useState([]);

  // Fetch customers
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

  // Find customer name by ID
  const getCustomerName = (customerId) => {
    const customer = customers.find((c) => c.id === customerId);
    return customer ? customer.name : "Unknown Customer";
  };

  const handleDelete = async (orderId) => {
    try {
      await api.delete(`/api/orders/${orderId}`);
      fetchOrders();
    } catch (error) {
      console.error("Failed to delete order:", error);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead className="text-right">Order Date</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">ORD-{order.id}</TableCell>
            <TableCell>{getCustomerName(order.customer)}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>${order.total_Amount}</TableCell>
            <TableCell className="text-right">
              {order.date_created.slice(0, 10)}
            </TableCell>
            <TableCell className="flex items-start justify-evenly">
              <span
                className="cursor-pointer text-blue-400"
                onClick={() => setSelectedOrder(order)}
              >
                <SquarePen size="20px" />
              </span>
              <span className="cursor-pointer text-red-600">
                <Dialog>
                  <DialogTrigger>
                    <Trash2 size="20px" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      this order and remove the data from our servers.
                    </DialogDescription>
                    <Button onClick={() => handleDelete(order.id)}>
                      Delete
                    </Button>
                  </DialogContent>
                </Dialog>
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {selectedOrder && (
        <Dialog
          open={selectedOrder !== null}
          onOpenChange={() => setSelectedOrder(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Order</DialogTitle>
            </DialogHeader>
            <DialogDescription></DialogDescription>
            <OrderEditForm
              order={selectedOrder}
              onClose={() => setSelectedOrder(null)}
              fetchOrders={fetchOrders}
            />
          </DialogContent>
        </Dialog>
      )}
    </Table>
  );
}

export default OrderTable;
