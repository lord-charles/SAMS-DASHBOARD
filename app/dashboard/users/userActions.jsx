"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { LockIcon } from "@/app/components/ui/icons/lock-icon";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useAsyncList } from "@react-stately/data";
import NextLink from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserActions = ({ row }) => {
  let list = useAsyncList({
    initialFilterText: row?.dutyAssigned[0]?.schoolName,
    async load({ signal, filterText = row?.schoolName }) {
      let res = await fetch(`/api/v1/schools?page=1&query=${filterText}`, {
        signal,
      });
      let json = await res.json();
      const uniqueNames = new Set();
      const uniqueItems = json.rows.filter((row) => {
        if (!uniqueNames.has(row.sName)) {
          uniqueNames.add(row.sName);
          return true;
        }
        return false;
      });
      return {
        items: uniqueItems,
      };
    },
  });
  const router = useRouter();
  const { data: userData, session } = useSession();
  const [loading, setLoading] = React.useState(false);
  const [stateValues, setStateValues] = React.useState(
    new Set(row?.statesAsigned)
  );
  const userTypes = [
    { id: "Teacher", name: "Teacher" },
    { id: "HeadTeacher", name: "Head Teacher" },
    { id: "DeputyHeadTeacher", name: "Deputy Head Teacher" },
    { id: "Secretariate", name: "Secretariate" },
    { id: "SuperAdmin", name: "Super Admin" },
    { id: "VolunteerTeacher", name: "Volunteer Teacher" },
    { id: "SeniorTeacher", name: "Senior Teacher" },
    { id: "ClassTeacher", name: "Class Teacher" },
  ];

  const { data: states, isLoading: statesLoading } = useSWR(
    `/api/v1/states`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const {
    isOpen: isMobileOpen,
    onOpen: onMobileOpen,
    onOpenChange: onMobileOpenChange,
  } = useDisclosure();
  const {
    isOpen: isResetOpen,
    onOpen: onResetOpen,
    onOpenChange: onResetOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure();

  const filteredStates = React.useMemo(() => {
    let filteredRows = [...(states?.rows || [])];

    return filteredRows;
  }, [states?.rows]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData.entries());
    if (user.userType !== "SuperAdmin") {
      user.statesAsigned = [...stateValues];
      user.dutyAssigned = [
        {
          schoolName: user.dutiesAssigned,
          isAssigned: true,
        },
      ];
    } else {
      user.isAdmin = true;
    }
    delete user.dutiesAssigned;
    if (!loading) {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/user/users/update/${row?._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData.user.token}`,
            },
            body: JSON.stringify(user),
          }
        );
        const message = await result.json();
        if (result.ok) {
          // toast.success(message?.message);
          toast.success("User updated successfully!");
          mutate(
            (key) =>
              typeof key === "string" && key.startsWith("/api/v1/users?page=1"),
            undefined,
            { revalidate: true }
          );
          router.refresh();
        } else {
          toast.error(message?.message);
        }
      } catch (error) {
        toast.error("Unknown error! Please contact your System Administrator.");
      } finally {
        setLoading(false);
      }
    }
  };
  const onResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData.entries());
    if (!loading) {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/user/users/forgot-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData.user.token}`,
            },
            body: JSON.stringify({ username: row?.username }),
          }
        );
        const token = await result.json();
        if (result.ok) {
          const resetResult = await fetch(
            `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/user/reset-password/${token?.token}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userData.user.token}`,
              },
              body: JSON.stringify({ password: user?.password }),
            }
          );
          const message = await resetResult.json();
          if (resetResult.ok) {
            toast.success(message?.message);
            mutate(
              (key) =>
                typeof key === "string" &&
                key.startsWith("/api/v1/users?page=1"),
              undefined,
              { revalidate: true }
            );
            router.refresh();
          } else {
            toast.error("Password reset failed.");
          }
          // toast.success(message?.message);
        } else {
          toast.error(message?.message);
        }
      } catch (error) {
        toast.error("Unknown error! Please contact your System Administrator.");
      } finally {
        setLoading(false);
      }
    }
  };
  const onDeleteUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!loading) {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/user/users/delete-user/${row?._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData.user.token}`,
            },
          }
        );
        const message = await result.json();
        if (result.ok) {
          toast.success(message?.message);
          mutate(
            (key) =>
              typeof key === "string" && key.startsWith("/api/v1/users?page=1"),
            undefined,
            { revalidate: true }
          );
          router.refresh();
        } else {
          toast.error(message?.message);
        }
      } catch (error) {
        toast.error("Unknown error! Please contact your System Administrator.");
      } finally {
        setLoading(false);
      }
    }
  };
  const handleStateChange = (e) => {
    setStateValues(new Set(e.target.value.split(",")));
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
            <DropdownItem key="edit_mobile" onPress={onMobileOpen}>
              Edit
            </DropdownItem>
            <DropdownItem
              key="view_mobile"
              as={NextLink}
              href={`/dashboard/users/view/${row?._id}`}
            >
              View
            </DropdownItem>
            <DropdownItem key="reset_password" onPress={onResetOpen}>
              Reset Password
            </DropdownItem>
            <DropdownItem
              key="delete_mobile"
              color="danger"
              className="text-danger"
              onPress={onDeleteOpen}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Modal
        isOpen={isMobileOpen}
        onOpenChange={onMobileOpenChange}
        placement="auto"
        className="h-5/6 overflow-scroll"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Update user
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="First Name"
                    name="firstname"
                    placeholder="Enter first name"
                    variant="bordered"
                    defaultValue={row.firstname}
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Last Name"
                    name="lastname"
                    placeholder="Enter last name"
                    defaultValue={row.lastname}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    variant="bordered"
                    defaultValue={row.username}
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    defaultValue={row.phoneNumber}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    defaultValue={row.email}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="School Code"
                    name="schoolCode"
                    placeholder="Enter School Code"
                    variant="bordered"
                    defaultValue={row?.schoolCode}
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Code"
                    name="teacherCode"
                    placeholder="Enter Teacher Code"
                    variant="bordered"
                    defaultValue={row?.teacherCode}
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Position"
                    name="position"
                    placeholder="Enter Position"
                    variant="bordered"
                    defaultValue={row?.position}
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Category"
                    name="category"
                    placeholder="Enter Category"
                    defaultValue={row?.category}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Work Status"
                    name="workStatus"
                    placeholder="Enter Work Status"
                    defaultValue={row?.workStatus}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Date of Birth"
                    type="date"
                    name="dob"
                    defaultValue={row?.dob}
                    placeholder="Enter Date of Birth"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="National Number"
                    name="nationalNo"
                    defaultValue={row?.nationalNo}
                    placeholder="Enter National Number"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Salary Grade"
                    name="salaryGrade"
                    defaultValue={row?.salaryGrade}
                    placeholder="Enter Salary Grade"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Country Of Origin"
                    name="countryOfOrigin"
                    defaultValue={row?.countryOfOrigin}
                    placeholder="Enter Country Of Origin"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Training Level"
                    name="trainingLevel"
                    defaultValue={row?.trainingLevel}
                    placeholder="Enter Training Level"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Professional Qualifications"
                    name="professionalQual"
                    defaultValue={row?.professionalQual}
                    placeholder="Enter Professional Qualifications"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Unique ID"
                    name="teacherUniqueID"
                    defaultValue={row?.teacherUniqueID}
                    placeholder="Enter Teacher Unique ID"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Est Number"
                    name="teachersEstNo"
                    defaultValue={row?.teachersEstNo}
                    placeholder="Enter Teacher Est Number"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Gender"
                    name="gender"
                    defaultValue={row?.gender}
                    placeholder="Enter Gender"
                    variant="bordered"
                    isRequired
                  />
                  <Select
                    items={userTypes}
                    variant="bordered"
                    label="Select User Type"
                    isRequired
                    placeholder="Select a user type"
                    name="userType"
                    defaultSelectedKeys={[row?.userType]}
                  >
                    {(type) => (
                      <SelectItem key={type.id} textValue={type.name}>
                        {type.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Autocomplete
                    label="Select a school"
                    placeholder="Type to search schools..."
                    isRequired
                    name="dutiesAssigned"
                    variant="bordered"
                    inputValue={list.filterText}
                    isLoading={list.isLoading}
                    items={list.items}
                    onInputChange={list.setFilterText}
                    onKeyDown={(e) => e.continuePropagation()}
                  >
                    {(school) => (
                      <AutocompleteItem key={school.sName}>
                        {school.sName}
                      </AutocompleteItem>
                    )}
                  </Autocomplete>
                  <Select
                    items={filteredStates}
                    isLoading={statesLoading}
                    label="Select States Assigned"
                    isMultiline={true}
                    selectionMode="multiple"
                    onChange={handleStateChange}
                    placeholder="Select a state"
                    variant="bordered"
                    defaultSelectedKeys={row.statesAsigned}
                    name="statesAsigned"
                    renderValue={(items) => {
                      return (
                        <div className="flex flex-wrap gap-2">
                          {items.map((item) => (
                            <Chip
                              key={item.key}
                              className="capitalize"
                              color="primary"
                            >
                              {item.data.name}
                            </Chip>
                          ))}
                        </div>
                      );
                    }}
                  >
                    {(state) => (
                      <SelectItem key={state.id} textValue={state.name}>
                        <div className="flex gap-2 items-center">
                          <div className="flex flex-col">
                            <span className="text-small capitalize">
                              {state.name}
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    )}
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={loading}
                    color="primary"
                    type=" submit"
                    onPress={onClose}
                  >
                    Update User
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
        placement="auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form className="space-y-4 md:space-y-6" onSubmit={onDeleteUser}>
                <ModalHeader className="flex flex-col gap-1">
                  Delete user?
                </ModalHeader>
                <ModalBody>
                  <p>
                    Are you sure you want to delete{" "}
                    {`${row.firstname} ${row.lastname}`}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={loading}
                    color="danger"
                    type=" submit"
                    onPress={onClose}
                  >
                    Delete user
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isResetOpen}
        onOpenChange={onResetOpenChange}
        placement="auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={onResetPassword}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Reset Password
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Password"
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    name="password"
                    placeholder="Enter Password"
                    variant="bordered"
                    isRequired
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={loading}
                    color="danger"
                    type=" submit"
                    onPress={onClose}
                  >
                    Reset Password
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

export default UserActions;
