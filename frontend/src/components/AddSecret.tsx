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
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import SecretList from "./SecretList";

const Secret = () => {
  const [title, setTitle] = useState("");
  const [secret, setSecret] = useState("");
  const [isViewSecretList, setIsViewSecretList] = useState(false);
  const [secretList, setSecretList] = useState([]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSecretChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecret(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/secrets', {
        title: title,
        secret: secret
      });
      await fetchSecretList();
      toast(`Secret added with id ${response.data.id}`);

    } catch (error) {
      console.error('Error sending request:', error);
      toast("Error occured while adding secret");
    }
  };

  const fetchSecretList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/secrets');
      setSecretList(response.data);
    } catch (error) {
      console.error('Error fetching secret list:', error);
      toast("Error fetching secret list");
    }
  }

  const handleSecretList = async () => {
    await fetchSecretList();
    setIsViewSecretList((prevIsViewSecretList) => !prevIsViewSecretList);
  }

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
              <Label htmlFor="message">Title</Label>
              <Input type="text" value={title} onChange={handleTitleChange}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Secret</Label>
              <Textarea required className="resize-none h-40" value={secret} onChange={handleSecretChange}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardContent className="flex flex-row justify-center gap-4">
        <Button type="button" onClick={handleSubmit}>
          Add Secret
        </Button>
        <Button type="button" onClick={handleSecretList}>
          View Secrets
        </Button>
      </CardContent>
      <CardContent>
        {isViewSecretList && <SecretList secrets={secretList} />}
      </CardContent>
    </Card>
  );
};

export default Secret;
