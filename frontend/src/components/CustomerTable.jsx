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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomers,
  deleteCustomer,
} from "@/store/actions/CustomerActions";
import { fetchUserRole } from "@/store/actions/AgentActions";
import { ThreeDots } from "react-loader-spinner";

export function CustomerTable() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const dispatch = useDispatch();
  const { customerList, loading, error } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const role = useSelector((state) => state.agent.role);

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  if (loading)
    return (
      <div>
        <div>
          <div className="flex justify-center">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#36454F"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {role === "" ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
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
              {customerList.map((customer) => (
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
                                You do not have permission to delete the
                                customer.
                              </DialogDescription>
                            </DialogContent>
                          </>
                        ) : (
                          <>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Are you absolutely sure?
                                </DialogTitle>
                              </DialogHeader>
                              <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete this Customer and remove the
                                data from our servers.
                              </DialogDescription>
                              <Button
                                onClick={() =>
                                  dispatch(deleteCustomer(customer.id))
                                }
                              >
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
                  />
                </DialogContent>
              </Dialog>
            )}
          </Table>
        </>
      )}
    </>
  );
}

export default CustomerTable;
