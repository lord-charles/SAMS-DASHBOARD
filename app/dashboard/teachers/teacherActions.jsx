"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { toast } from "react-toastify";

const TeacherActions = ({ row }) => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await fetch(`/api/v1/teachers/${row?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const message = await result.json();
      if (result.ok) {
        toast.success(message?.message);
        router.refresh();
      } else {
        toast.error(message?.error);
      }
    } catch (error) {
      toast.error("Unknown error! Please contact System Administrator.");
    } finally {
      setLoading(false);
    }
  };
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
            <DropdownItem
              key="view"
              as={NextLink}
              href={`/dashboard/teachers/view/${row?.id}`}
            >
              View
            </DropdownItem>
            <DropdownItem
              key="edit"
              as={NextLink}
              href={`/dashboard/teachers/edit/${row?.id}`}
            >
              Edit
            </DropdownItem>
            <DropdownItem
              key="delete"
              color="danger"
              onPress={onOpen}
              className="text-danger"
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          {(onClose) => (
            <>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Delete teacher {row?.fullName}
                </ModalHeader>
                <ModalBody>
                  <p>Are you sure you want to delete this teacher?</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={loading}
                    color="danger"
                    type="submit"
                    onPress={onClose}
                  >
                    Delete
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

export default TeacherActions;
