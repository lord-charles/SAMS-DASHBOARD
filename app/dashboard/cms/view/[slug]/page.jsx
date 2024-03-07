"use client"
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import { Card, CardBody } from '@nextui-org/react';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import CardSkeleton from "@/app/CardSkeleton";
const fetcher = (...args) => fetch(...args).then((res) => res.json());



const Page = ({params}) => {
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
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
  return (
    <>
    <Card className='mx-5'>
        <CardBody>
        <span className='font-bold'>{cmsModel?.title}</span>
        <hr  className='my-3'/>
        <div dangerouslySetInnerHTML={{ __html: cmsModel?.description }} />
        <div className='flex justify-end items-center gap-3 mb-8'>
            <div>
                <p className='text-stone-500 text-xs'>Author: {cmsModel?.tbl_user_account?.firstName+" "+cmsModel?.tbl_user_account?.lastName}</p>
                <span className='text-stone-500 text-xs'>
            {new Date(cmsModel?.updatedAt)?.toLocaleString("en-us", options)}</span>

            </div>
        </div>
                  
        </CardBody>
    </Card>
    <ToastContainer/>
    </>
  )
}

export default Page