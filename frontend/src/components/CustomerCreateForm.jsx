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

const CustomerCreateForm = ({ setFormToggle, formToggle }) => {
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
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="e.g. John Doe" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="e.g. johndoe@mail.com" />
                  </div>
                </section>
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="e.g. Hamburg" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="e.g. Canada" />
                  </div>
                </section>
                <section className="flex gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="e.g. (012)123456" />
                  </div>
                </section>
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

export default CustomerCreateForm;
