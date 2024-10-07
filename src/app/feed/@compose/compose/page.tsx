"use client";

import ComposeTweet from "@/components/ComposeTweet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Compose a Tweet</DialogHeader>
        <ComposeTweet onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
}
