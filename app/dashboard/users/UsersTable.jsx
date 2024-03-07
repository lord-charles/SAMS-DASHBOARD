"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import useSWR from "swr";
import { columns, userRender } from "./userColumns";
import { Button } from "@nextui-org/button";
import { PlusIcon } from "@/app/components/ui/icons/PlusIcon";
import { toast } from "react-toastify";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { MailIcon } from "@/app/components/ui/icons/mail-icon";
import { LockIcon } from "@/app/components/ui/icons/lock-icon";
import { useRouter } from "next/navigation";
import { Chip } from "@nextui-org/chip";
import { Select, SelectItem } from "@nextui-org/select";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useAsyncList } from "@react-stately/data";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UsersTable = () => {
  let list = useAsyncList({
    async load({ signal, filterText }) {
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [values, setValues] = React.useState(new Set([]));
  const [filterValue, setFilterValue] = React.useState("");

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
  // const data = [];
  // const isLoading = false;
  const { data, isLoading } = useSWR(
    `/api/v1/users?page=${page}&query=${filterValue}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const { data: states, isLoading: statesLoading } = useSWR(
    `/api/v1/states`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );
  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData.entries());
    if (user.userType !== "SuperAdmin") {
      user.statesAsigned = [...values];
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
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
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
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredRows = [...(data?.rows || [])];

    return filteredRows;
  }, [data?.rows]);

  const filteredStates = React.useMemo(() => {
    let filteredRows = [...(states?.rows || [])];

    return filteredRows;
  }, [states?.rows]);

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / 10) : 0;
  }, [data?.count]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);

  return (
    <>
      <Card className="mb-5 mx-5">
        <CardBody>
          <div className="flex justify-between items-center mt-3 mb-5">
            <h4 className="mb-5">Users</h4>
            <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
              Add New User
            </Button>
          </div>

          <NextUITable
            columns={columns}
            renderCell={userRender}
            isLoading={isLoading}
            page={page}
            pages={pages}
            rowCount={rowCount}
            setPage={setPage}
            filteredItems={filteredItems}
            hasSearchFilter={hasSearchFilter}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        className="h-5/6 overflow-scroll"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Create New User
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="First Name"
                    name="firstname"
                    placeholder="Enter first name"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Middle Name"
                    name="middleName"
                    placeholder="Enter middle name"
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="Last Name"
                    name="lastname"
                    placeholder="Enter last name"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="School Code"
                    name="schoolCode"
                    placeholder="Enter School Code"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Code"
                    name="teacherCode"
                    placeholder="Enter Teacher Code"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Position"
                    name="position"
                    placeholder="Enter Position"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Category"
                    name="category"
                    placeholder="Enter Category"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Work Status"
                    name="workStatus"
                    placeholder="Enter Work Status"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Date of Birth"
                    type="date"
                    name="dob"
                    placeholder="Enter Date of Birth"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="National Number"
                    name="nationalNo"
                    placeholder="Enter National Number"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Salary Grade"
                    name="salaryGrade"
                    placeholder="Enter Salary Grade"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Country Of Origin"
                    name="countryOfOrigin"
                    placeholder="Enter Country Of Origin"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Training Level"
                    name="trainingLevel"
                    placeholder="Enter Training Level"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Professional Qualifications"
                    name="professionalQual"
                    placeholder="Enter Professional Qualifications"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Unique ID"
                    name="teacherUniqueID"
                    placeholder="Enter Teacher Unique ID"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Teacher Est Number"
                    name="teachersEstNo"
                    placeholder="Enter Teacher Est Number"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    autoFocus
                    label="Gender"
                    name="gender"
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
                  >
                    {(type) => (
                      <SelectItem key={type.id} textValue={type.name}>
                        {type.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Autocomplete
                    label="Select school assigned"
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
                    onChange={handleSelectionChange}
                    placeholder="Select a state"
                    variant="bordered"
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
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    variant="bordered"
                    isRequired
                  />
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
                    Create User
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

export default UsersTable;
