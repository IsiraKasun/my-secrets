import Encrypt from "./Encrypt";
import Dcrypt from "./Decrypt";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Main = () => {
  return (
    <div className="flex flex-col h-full justify-center gap-20">
      <Tabs defaultValue="encrypt" className="w-full flex justify-center">
        <TabsList className="flex flex-row justify-center w-full">
          <TabsTrigger value="encrypt">Encrypt</TabsTrigger>
          <TabsTrigger value="dcrypt">Dcrypt</TabsTrigger>
        </TabsList>
        <TabsContent value="encrypt">
          <Encrypt />
        </TabsContent>
        <TabsContent value="dcrypt">
          <Dcrypt />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Main;
