"use client"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";

const CMSActions = ({row}) => {
  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async(event)=>{
    event.preventDefault()
    setLoading(true);
    try {
        const result = await fetch(`/api/v1/cms/${row?.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const message = await result.json();
        if (result.ok) {
            toast.success(message?.message);
          setTimeout(() => {
            router.refresh();
          }, 1000);
        } else {
          toast.error(message?.error);
        }
      } catch (error) {
        toast.error("Unknown error! Please contact System Administrator.");
      } finally {
        setLoading(false);
      }

  }
  return (
    <>
    <div className="relative flex justify-end items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" variant="solid">
            Action
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="view" onPress={()=>router.push(`/dashboard/cms/view/${row.id}`)}>View </DropdownItem>
          <DropdownItem key="edit" onPress={()=>router.push(`/dashboard/cms/edit/${row.id}`)}>
            Edit
          </DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger" onPress={onOpen}>
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Confirm Action
                </ModalHeader>
                <ModalBody>
                 <p>Are you sure you want to delete this post?</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={loading}
                    color="primary"
                    type="submit"
                    onPress={onClose}
                  >
                    Confirm
                  </Button>
                </ModalFooter>
                </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CMSActions;
