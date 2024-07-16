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

const OrderCreateForm = ({ setFormToggle, formToggle }) => {
  return (
    <>
      <div>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Create customer</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                {" "}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Customer</Label>
                  <Input id="name" placeholder="e.g. John Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="status">Status</Label>
                  <Input id="status" placeholder="e.g. pending" />
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
