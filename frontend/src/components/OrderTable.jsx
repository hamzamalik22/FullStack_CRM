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
import OrderEditForm from "./OrderEditForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, deleteOrder } from "@/store/actions/OrderActions";
import { fetchCustomers } from "@/store/actions/CustomerActions";
import { fetchUserRole } from "@/store/actions/AgentActions";

export function OrderTable() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const dispatch = useDispatch();
  const { orderList, loading, error } = useSelector((state) => state.orders);
  const { customerList } = useSelector((state) => state.customers);

  const role = useSelector((state) => state.agent.role);

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchCustomers());
  }, [dispatch]);

  // Find customer name by ID
  const getCustomerName = (customerId) => {
    const customer = customerList.find((c) => c.id === customerId);
    return customer ? customer.name : "Unknown Customer";
  };

  if (role === "") {
    return <p>Loading...</p>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        {orderList.map((order) => (
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
                  {role === "Tester" ? (
                    <>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Warning!</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          You do not have permission to delete an order.
                        </DialogDescription>
                      </DialogContent>
                    </>
                  ) : (
                    <>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete this Order and remove the data from our
                          servers.
                        </DialogDescription>
                        <Button onClick={() => dispatch(deleteOrder(order.id))}>
                          Delete
                        </Button>
                      </DialogContent>
                    </>
                  )}
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
            />
          </DialogContent>
        </Dialog>
      )}
    </Table>
  );
}

export default OrderTable;
