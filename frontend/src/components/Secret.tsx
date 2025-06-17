import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";

const Secret = () => {
  // const [response, setResponse] = useState(null);

  const handleOnEncrypt = () => {
    try {
      axios({
        method: "post",
        url: "/user/12345",
        data: {
          firstName: "Fred",
          lastName: "Flintstone",
        },
      });
    } catch (error) {
      console.log("Request Error");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add Secret</CardTitle>
        <CardDescription>Type Secret and Submit</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="message">Input</Label>
              <Textarea required className="resize-none h-40" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardContent className="flex-col gap-2">
        <Button type="button" onClick={handleOnEncrypt}>
          Add Secret
        </Button>
      </CardContent>
      <CardContent>
      </CardContent>
    </Card>
  );
};

export default Secret;
