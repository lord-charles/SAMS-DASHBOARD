"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
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
        `/api/v1/schools/${params?.slug}`,
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
    const school = Object.fromEntries(formData.entries());
    
    try {
      const result = await fetch(`/api/v1/schools/${params?.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(school),
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
        <p className='font-bold'>Update School</p>
        <div className="gap-5 grid sm:grid-cols-3 mt-6 text-sm">
            <div className=''>
            <Input
                    autoFocus
                    label="School Name"
                    name="sName"
                    placeholder="Enter School Name"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.sName}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="School Type"
                    name="sSchType"
                    placeholder="Enter School Type"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.sSchType}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="School Reference"
                    name="sRef"
                    placeholder="Enter School Reference"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.sRef}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="School Address"
                    name="sAddr"
                    placeholder="Enter School Address"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.sAddr}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Alert Phone"
                    name="sAlertPhone"
                    placeholder="Enter Alert Phone"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.sAlertPhone}
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
    </CardBody>
    <ToastContainer/>
    </Card>
  )
}

export default Page