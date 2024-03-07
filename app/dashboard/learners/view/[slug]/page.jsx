"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Spinner } from '@nextui-org/spinner';
import React from 'react'
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const Page = ({params}) => {
    const { data, isLoading } = useSWR(
        `/api/v1/students/${params?.slug}`,
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
                <p> Reference Number</p>
                <p className='text-stone-500'>{data?.stRef}</p>
            </div>
            <div className=''>
                <p> Date of Birth</p>
                <p className='text-stone-500'>{new Date(data?.stDOB)?.toLocaleString("en-us", options)}</p>
            </div>
            <div className=''>
                <p> Name</p>
                <p className='text-stone-500'>
                    {data?.stFName+" "+data?.stMNames+" "+data?.stLName}
                </p>
            </div>
            <div className=''>
                <p> Added On</p>
                <p className='text-stone-500'>{new Date(data?.stAdded)?.toLocaleString("en-us", options)}</p>
            </div>
            <div className=''>
                <p> Gender</p>
                <p className='text-stone-500'>{data?.stGender}</p>
            </div>
            
            <div className=''>
                <p> Repeater</p>
                <p className='text-stone-500'>{data?.stRepeater? "Yes": "No"}</p>
            </div>
            <div className=''>
                <p> Orphan</p>
                <p className='text-stone-500'>{data?.stOrphan ? "Yes": "No"}</p>
            </div>
            <div className=''>
                <p> Special Needs</p>
                <p className='text-stone-500'>{data?.stSpecialNeeds? "Yes": "No"}</p>
            </div>
            <div className=''>
                <p> Phone</p>
                <p className='text-stone-500'>{data?.stPPhone}</p>
            </div>
            <div className=''>
                <p> Address</p>
                <p className='text-stone-500'>{data?.stPAddr}</p>
            </div>
            <div className=''>
                <p> Remarks</p>
                <p className='text-stone-500'>{data?.stRemarks}</p>
            </div>
            <div className=''>
                <p> First Language</p>
                <p className='text-stone-500'>{data?.stFirstLanguage}</p>
            </div>
            <div className=''>
                <p> Leaving Exams</p>
                <p className='text-stone-500'>{data?.stLeavingExams? "Yes": "No"}</p>
            </div>
            <div className=''>
                <p> Refugee</p>
                <p className='text-stone-500'>{data?.stRefugee? "Yes": "No"}</p>
            </div>
            <div className=''>
                <p> Origin</p>
                <p className='text-stone-500'>{data?.stOrigin}</p>
            </div>
        </div>
        }
    </CardBody>
    </Card>
  )
}

export default Page