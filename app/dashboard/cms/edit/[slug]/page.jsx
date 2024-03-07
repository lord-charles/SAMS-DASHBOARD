"use client"
import React from 'react'
import { Button } from "@nextui-org/button";
import { Input} from "@nextui-org/input";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import CardSkeleton from "@/app/CardSkeleton";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = ({params}) => {
    const { data: session, status } = useSession();
    const router = useRouter()
    const [loading, setLoading] = React.useState(false)
    const [cmsValue, setCMSValue] = React.useState("");

    
    const { data: cmsModel, isLoading } = useSWR(
        `/api/v1/cms/${params?.slug}`,
        fetcher,
        {
          keepPreviousData: true,
        }
      );
    
      if (isLoading) {
        return <CardSkeleton />;
      }
    const onSubmit = async(event)=>{
      event.preventDefault()
      setLoading(true);
    const formData = new FormData(event.currentTarget);
    const cms = Object.fromEntries(formData.entries());
    cms.description = cmsValue||cmsModel?.description;
    cms.userId = session?.user?.id;
    try {
        const result = await fetch(`/api/v1/cms/${params?.slug}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cms),
        });
        const message = await result.json();
        if (result.ok) {
            toast.success(message?.message);
          setTimeout(() => {
            router.back();
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
    <Card className='mx-5'>
        <CardHeader>
        Update Post
        </CardHeader>
        <CardBody>
        <form className="" onSubmit={onSubmit}>
            <div className='flex justify-between items-center gap-3 mb-8'>
            <Input
                    autoFocus
                    label="Title"
                    name="title"
                    placeholder="Enter title"
                    variant="bordered"
                    defaultValue={cmsModel.title}
                  />
                </div>
                  <ReactQuill theme="snow" defaultValue={cmsModel?.description} onChange={setCMSValue} className='h-36'/>

                  <div className='flex justify-end items-center gap-3 mt-12'>

                  <Button
                    isLoading={loading}
                    color="primary"
                    type="submit"
                  >
                    Update Post
                  </Button>
                  </div>
              </form>
        </CardBody>
    </Card>
    <ToastContainer/>
    </>
  )
}

export default Page