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
import { useEffect, useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import CustomerEditForm from "./CustomerEditForm";
import api from "@/utils/api";

export function CustomerTable({ customers, fetchCustomers }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [role, setRole] = useState("");

  const handleDelete = async (customerId) => {
    try {
      await api.delete(`/api/customers/${customerId}`);
      fetchCustomers();
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

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

  if (role === "") {
    // Display loading message while role is being fetched
    return <p>Loading...</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>
              {customer.city}, {customer.country}
            </TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.date_created.slice(0, 10)}</TableCell>
            <TableCell className="flex justify-between items-center gap-2">
              <span
                className="cursor-pointer text-blue-400"
                onClick={() => setSelectedCustomer(customer)}
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
                          You do not have permission to delete the customer.
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
                          delete this Customer and remove the data from our
                          servers.
                        </DialogDescription>
                        <Button onClick={() => handleDelete(customer.id)}>
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
      {selectedCustomer && (
        <Dialog
          open={selectedCustomer !== null}
          onOpenChange={() => setSelectedCustomer(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Customer</DialogTitle>
            </DialogHeader>
            <DialogDescription></DialogDescription>
            <CustomerEditForm
              customer={selectedCustomer}
              onClose={() => setSelectedCustomer(null)}
              fetchCustomers={fetchCustomers}
            />
          </DialogContent>
        </Dialog>
      )}
    </Table>
  );
}

export default CustomerTable;
