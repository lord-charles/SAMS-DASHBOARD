"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Spinner } from '@nextui-org/spinner';
import React from 'react'
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const Page = ({params}) => {
    const { data, isLoading } = useSWR(
        `/api/v1/schools/${params?.slug}`,
        fetcher,
        {
            keepPreviousData: true,
        }
        );
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
          };
console.log(data);
  return (
    <Card className='mx-5'>
        <CardBody>
        {isLoading? <Spinner/> :
        <div className="gap-5 grid sm:grid-cols-3 mt-6 text-sm">
            <div className=''>
                <p> Name</p>
                <p className='text-stone-500'>{data?.sName}</p>
            </div>
            <div className=''>
                <p> School Type</p>
                <p className='text-stone-500'>
                    {data?.sSchType}
                </p>
            </div>
            <div className=''>
                <p> Reference</p>
                <p className='text-stone-500'>{data?.sRef}</p>
            </div>
            <div className=''>
                <p> Address</p>
                <p className='text-stone-500'>{data?.sAddr}</p>
            </div>
            <div className=''>
                <p> Phone</p>
                <p className='text-stone-500'>{data?.sAlertPhone}</p>
            </div>
        </div>
        }
    </CardBody>
    </Card>
  )
}

export default Page