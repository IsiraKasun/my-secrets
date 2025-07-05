import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from 'react';

type Secret = {
    _id: string,
    title: string,
    secret: string
}

type SecretListProps = {
  secrets: Secret[]
}

const SecretList: React.FC<SecretListProps> = ({secrets}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSecret, setSelectedSecret] = useState<Secret | null>(null);

  const handleItemClick = (secret: Secret) => {
    setSelectedSecret(secret);
    setIsDialogOpen(true);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="flex flex-row justify-center">
            <ScrollArea className="h-72 w-full rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Secrets</h4>
                {secrets.map((secret: Secret) => (
                <div key={secret._id} className="cursor-pointer border rounded p-2 m-1 hover:bg-muted transition-colors">
                    <div onClick={() => handleItemClick(secret)} className="text-sm">{secret.title}</div>
                </div>
                ))}
            </div>
            </ScrollArea>
        </div>

         <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedSecret?.title}</DialogTitle>
          <DialogDescription>{selectedSecret?.secret}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SecretList