import { Card, CardBody } from "@nextui-org/card";
import React, { useState } from "react";
import GraduateIcon from "../components/ui/icons/sidebar/graduate-icon";
import SchoolIcon from "../components/ui/icons/sidebar/school-icon";
import UsersIcon from "../components/ui/icons/sidebar/users-icon";
import TeacherIcon from "../components/ui/icons/sidebar/teacher-icon";
import UpShortIcon from "../components/ui/icons/sidebar/up-short-icon";
import DownShortIcon from "../components/ui/icons/sidebar/down-short-icon";

import useSWR from "swr";
import CardSkeleton from "../CardSkeleton";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DashboardCard = ({ activeYear, content, handleChange }) => {
  const [selected, setSelected] = useState(null);
  const { data, isLoading } = useSWR(
    `/api/v1/dashboard/statistics?year=${activeYear}`,
    fetcher,
    {
      keepPreviousData: true,
      shouldRetryOnError: false,
    }
  );

  if (isLoading) {
    return <CardSkeleton />;
  }

  const list = [
    {
      key: 1,
      title: "Number of Schools",
      quantity:
        Number(data?.number_of_schools)?.toLocaleString("en-us") || "NA",
      other: `0 schools approved expenditure`,
      percentage: 9,
      logo: <SchoolIcon />,
      end: <UpShortIcon />,
    },
    {
      key: 2,
      title: "Enrolled Learners",
      quantity:
        Number(data?.enrolled_learners)?.toLocaleString("en-us") || "NA",
      percentage: 3.48,
      other: `${
        Number(data?.students_with_disability)?.toLocaleString("en-us") || "NA"
      } learners with disability`,
      logo: <GraduateIcon />,
      end: <DownShortIcon />,
    },
    {
      key: 3,
      title: "Number of Teachers",
      quantity: Number(data?.count)?.toLocaleString("en-us") || "NA",
      other: `${
        Number(data?.count)?.toLocaleString("en-us") || "NA"
      } new teachers`,
      percentage: 12,
      logo: <TeacherIcon />,
      end: <UpShortIcon />,
    },
    // {
    //   key: 4,
    //   title: "Learners with Disability",
    //   quantity:
    //     Number(data?.students_with_disability)?.toLocaleString("en-us") || "NA",
    //   percentage: 1.02,
    //   logo: <StandingIcon />,
    //   end: <PieIcon />,
    // },
    {
      key: 5,
      title: "Eligible girls for CT",
      quantity: Number(data?.eligible)?.toLocaleString("en-us") || "NA",
      other: `${
        Number(data?.validated)?.toLocaleString("en-us") || "NA"
      } girls validated for CT`,
      percentage: 9,
      logo: <UsersIcon />,
      end: <UpShortIcon />,
    },
    // {
    //   key: 6,
    //   title: "Validated girls for CT",
    //   quantity: Number(data?.validated)?.toLocaleString("en-us") || "NA",
    //   percentage: 3.48,
    //   logo: <AddUserIcon />,
    //   end: <DownShortIcon />,
    // },
    // {
    //   key: 7,
    //   title: "Approved Expenditure",
    //   quantity: 0,
    //   percentage: 1.02,
    //   logo: <CashOnlyIcon />,
    //   end: <PieIcon />,
    // },
  ];

  return (
    <>
      <div className="gap-5 grid sm:grid-cols-4 mt-6">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => {
              handleChange(index);
              setSelected(index);
            }}
            className={selected == index && `bg-primary-900`}
          >
            <CardBody className={`overflow-visible p-5`}>
              <div className="flex justify-evenly">
                <div>
                  <p
                    className={`${
                      selected == index && "text-gray-300"
                    } !uppercase text-sm`}
                  >
                    {item.title}
                  </p>
                  <p className="text-primary">{item.quantity}</p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-sm ">{item.end}</span> */}
                    <small
                      style={{
                        color: "#C9DD81",
                      }}
                      // style={{
                      //   color:
                      //     item.percentage >= 9
                      //       ? "#C9DD81"
                      //       : item.percentage >= 3.48
                      //       ? "#F5365C"
                      //       : "#11CDEF",
                      // }}
                    >
                      {item.other}
                    </small>
                  </div>
                </div>
                <div
                  className={`w-10 h-10 flex justify-center items-center rounded-full overflow-hidden ${
                    selected == index ? `bg-gray-300` : `bg-primary-900`
                  }`}
                >
                  {item?.logo}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      {content && (
        <Card className="mt-5">
          <CardBody className="text-sm">
            <h1>{content?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content?.description }} />
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default DashboardCard;
