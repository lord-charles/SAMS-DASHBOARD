"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Spinner } from '@nextui-org/spinner';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react'
import useSWR from "swr";
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = ({params}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
const { data, isLoading } = useSWR(
    `/api/v1/teachers/${params?.slug}`,
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
const teacher = Object.fromEntries(formData.entries());

try {
  const result = await fetch(`/api/v1/teachers/${params?.slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teacher),
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
        {isLoading? <Spinner/>:
        <form onSubmit={onSubmit}>
        <p className='font-bold'>Update Teacher</p>
        <div className="gap-5 grid sm:grid-cols-3 mt-6 text-sm">

            <div className=''>
            <Input
                    autoFocus
                    label="Teacher Code"
                    name="teacherCode"
                    placeholder="Enter teacher code"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.teacherCode}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Teacher Name"
                    name="fullName"
                    placeholder="Enter full name"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.fullName}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Position"
                    name="position"
                    placeholder="Enter position"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.position}
                  />
            </div>

            <div className=''>
            <Input
                    autoFocus
                    label="Category"
                    name="category"
                    placeholder="Enter Category"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.category}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.phoneNumber}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Gender"
                    name="gender"
                    placeholder="Enter gender"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.gender}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Date of Birth"
                    type='date'
                    name="dateOfBirth"
                    placeholder="Enter date of birth"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.dateOfBirth}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="National Number"
                    name="nationalNo"
                    placeholder="Enter National Number"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.nationalNo}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Salary Grade"
                    name="salaryGrade"
                    placeholder="Enter Salary Grade"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.salaryGrade}
                  />
            </div>

            <div className=''>
            <Input
                    autoFocus
                    label="First Appointment"
                    name="firstAppointment"
                    placeholder="Enter First Appointment"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.firstAppointment}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Country of Origin"
                    name="countryOfOrigin"
                    placeholder="Enter Country of Origin"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.countryOfOrigin}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Active"
                    name="active"
                    placeholder="Enter Active"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.active}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Work Status"
                    name="workStatus"
                    placeholder="Enter Work Status"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.workStatus}
                  />
            </div>

            <div className=''>
            <Input
                    autoFocus
                    label="Training Level"
                    name="trainingLevel"
                    placeholder="Enter Training Level"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.trainingLevel}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Professional Qualifications"
                    name="professionalQual"
                    placeholder="Enter Professional Qualifications"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.professionalQual}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Refugee"
                    name="refugee"
                    placeholder="Enter Refugee"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.refugee}
                  />
            </div>
            <div className=''>
            <Input
                    autoFocus
                    label="Notes"
                    name="notes"
                    placeholder="Enter Notes"
                    variant="bordered"
                    isRequired
                    defaultValue={data?.notes}
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