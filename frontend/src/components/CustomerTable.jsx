import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/utils/api";
import { useEffect, useState } from "react";

// const customers = [
//   {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     location: "New York, NY",
//     phone: "(123) 456-7890",
//     created: "2023-01-15",
//   },
//   {
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     location: "Los Angeles, CA",
//     phone: "(987) 654-3210",
//     created: "2023-02-20",
//   },
//   {
//     name: "Emily Johnson",
//     email: "emily.johnson@example.com",
//     location: "Chicago, IL",
//     phone: "(456) 789-0123",
//     created: "2023-03-10",
//   },
//   {
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     location: "Houston, TX",
//     phone: "(321) 654-9870",
//     created: "2023-04-05",
//   },
//   {
//     name: "Jessica Davis",
//     email: "jessica.davis@example.com",
//     location: "Phoenix, AZ",
//     phone: "(654) 321-0987",
//     created: "2023-05-15",
//   },
//   {
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     location: "Philadelphia, PA",
//     phone: "(789) 012-3456",
//     created: "2023-06-01",
//   },
//   {
//     name: "Sarah Miller",
//     email: "sarah.miller@example.com",
//     location: "San Antonio, TX",
//     phone: "(012) 345-6789",
//     created: "2023-07-10",
//   },
// ];

export function CustomerTable({customers}) {
  // const [customers, setCustomers] = useState([]);

  // const fetchCustomers = async () => {
  //   try {
  //     const response = await api.get("/api/customers/");
  //     console.log(response)
  //     setCustomers(response.data.Customers);
  //   } catch (error) {
  //     console.error("Failed to fetch user role:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCustomers();
  // }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead className="text-right">Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.email}>
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.city}, {customer.country}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell className="text-right">{customer.date_created.slice(0,10)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CustomerTable;
