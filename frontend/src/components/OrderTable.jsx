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

// const orders = [
//   {
//     orderID: "ORD001",
//     customerName: "John Doe",
//     totalAmount: "$250.00",
//     status: "Shipped",
//     orderDate: "2023-01-15",
//   },
//   {
//     orderID: "ORD002",
//     customerName: "Jane Smith",
//     totalAmount: "$150.00",
//     status: "Pending",
//     orderDate: "2023-02-20",
//   },
//   {
//     orderID: "ORD003",
//     customerName: "Emily Johnson",
//     totalAmount: "$350.00",
//     status: "Delivered",
//     orderDate: "2023-03-10",
//   },
//   {
//     orderID: "ORD004",
//     customerName: "Michael Brown",
//     totalAmount: "$450.00",
//     status: "Cancelled",
//     orderDate: "2023-04-05",
//   },
//   {
//     orderID: "ORD005",
//     customerName: "Jessica Davis",
//     totalAmount: "$550.00",
//     status: "Shipped",
//     orderDate: "2023-05-15",
//   },
//   {
//     orderID: "ORD006",
//     customerName: "David Wilson",
//     totalAmount: "$200.00",
//     status: "Pending",
//     orderDate: "2023-06-01",
//   },
//   {
//     orderID: "ORD007",
//     customerName: "Sarah Miller",
//     totalAmount: "$300.00",
//     status: "Delivered",
//     orderDate: "2023-07-10",
//   },
// ];

export function OrderTable({ orders }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead className="text-right">Order Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer.name}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>${order.total_Amount}</TableCell>
            <TableCell className="text-right">{order.date_created.slice(0,10)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderTable;
