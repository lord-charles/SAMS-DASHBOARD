"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Select, SelectItem } from '@nextui-org/select';
import { Spinner } from '@nextui-org/spinner';
import React, { useState } from 'react'
import useSWR from "swr";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const Page = ({params}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { data, isLoading } = useSWR(
        `/api/v1/students/${params?.slug}`,
        fetcher
        );
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
          };
          const onSubmit = async (event) => {
            event.preventDefault();
            setLoading(true);
    const formData = new FormData(event.currentTarget);
    const student = Object.fromEntries(formData.entries());

    try {
      const result = await fetch(`/api/v1/students/${params?.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const message = await result.json();
      if (result.ok) {
        toast.success(message?.message);
        setTimeout(() => {
            router.back()
        }, 1000);
      } else {
        toast.error(message?.error || "Unknown error occured");
      }
    } catch (error) {
      toast.error("Unknown error! Please contact System Administrator.");
    } finally {
      setLoading(false);
    }
            }
  return (
    <Card className='mx-5'>
        <CardBody>
        {isLoading? <Spinner/> :
        <form onSubmit={onSubmit}>
            <p className='font-bold'>Update Student</p>
        <div className="gap-5 grid sm:grid-cols-3 mt-6 text-sm">
            <div className=''>
                <Input
                    autoFocus
                    label="Reference Number"
                    name="stRef"
                    placeholder="Enter reference number"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stRef}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Date of Birth"
                    name="stDOB"
                    type='date'
                    placeholder="Enter date of birth"
                    variant="bordered"
                    isRequired
                    defaultValue={new Date(data?.stDOB)?.toLocaleString("en-us")}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="First Name"
                    name="stFName"
                    placeholder="Enter first name"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stFName}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Middle Name"
                    name="stMNames"
                    placeholder="Enter middle name"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stMNames}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Last Name"
                    name="stLName"
                    placeholder="Enter last name"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stLName}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Gender"
                    name="stGender"
                    placeholder="Enter gender"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stGender}
                  />
            </div>
            <div className=''>
                    <Select
                        label="Orphan"
                        name='stOrphan'
                        placeholder="Orphan"
                        disallowEmptySelection
                    >
                    <SelectItem key={true} value={true}>
                    Yes
                    </SelectItem>
                    <SelectItem key={false} value={false}>
                    No
                    </SelectItem>
                </Select>
            </div>
            <div className=''>
            <Select
                        label="Special Needs"
                        placeholder="Special needs"
                        name='stSpecialNeeds'
                        disallowEmptySelection
                    >
                    <SelectItem key={true} value={true}>
                    Yes
                    </SelectItem>
                    <SelectItem key={false} value={false}>
                    No
                    </SelectItem>
                </Select>
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Phone Number"
                    name="stPhone"
                    placeholder="Enter phone number"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stPPhone}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Address"
                    name="stPAddr"
                    placeholder="Enter address"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stPAddr}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Remarks"
                    name="stRemarks"
                    placeholder="Enter remarks"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stRemarks}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="First Language"
                    name="stFirstLanguage"
                    placeholder="Enter first language"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stFirstLanguage}
                  />
            </div>
            <div className=''>
            <Select
                        label="Refugee"
                        placeholder="Refugee"
                        name='stRefugee'
                        disallowEmptySelection
                    >
                    <SelectItem key={true} value={true}>
                    Yes
                    </SelectItem>
                    <SelectItem key={false} value={false}>
                    No
                    </SelectItem>
                </Select>
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Origin"
                    name="stOrigin"
                    placeholder="Enter origin"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.stOrigin}
                  />
            </div>

        </div>
        <Button
        isLoading={loading}
        className='mt-5'
                    color="primary"
                    type="submit"
                  >
                    Save
                  </Button>
        </form>
        }
        <ToastContainer/>
    </CardBody>
    </Card>
  )
}

export default Page