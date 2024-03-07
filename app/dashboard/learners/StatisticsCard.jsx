import { Card, CardBody } from "@nextui-org/card";
import React, {useState} from "react";
import SchoolIcon from "@/app/components/ui/icons/sidebar/school-icon";
import UpShortIcon from "@/app/components/ui/icons/sidebar/up-short-icon";

import useSWR from "swr";
import CardSkeleton from "@/app/CardSkeleton";
import GraduateIcon from "@/app/components/ui/icons/sidebar/graduate-icon";
import UsersIcon from "@/app/components/ui/icons/sidebar/users-icon";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StatisticsCard = ({ activeYear }) => {
  const [selected, setSelected] = useState(null)
  const { data, isLoading } = useSWR(
    `/api/v1/dashboard/statistics?year=${activeYear}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <CardSkeleton />;
  }

  const list = [
    {
      key: 1,
      title: "Total enrolled",
      quantity: 900,
      other: `1200 enrolled`,
      percentage: 9,
      logo: <SchoolIcon />,
      end: <UpShortIcon />,
    },

    {
      key: 2,
      title: "New Students",
      quantity: 1200,
      other: `0 new students`,
      percentage: 9,
      logo: <UsersIcon />,
      end: <UpShortIcon />,
    },
    {
      key: 3,
      title: "Promoted Learners",
      quantity: 11000,
      other: `0 promoted learners`,
      percentage: 9,
      logo: <GraduateIcon />,
      end: <UpShortIcon />,
    },
  ];

  return (
    <>
      <div className="gap-5 grid sm:grid-cols-4 mt-6">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={()=>setSelected(index)} 
            className={selected==index && `bg-primary-900`}>
            <CardBody className={`overflow-visible p-5`}>
              <div className="flex justify-evenly">
                <div>
                  <p className={`${selected==index && "text-gray-300"} !uppercase text-sm`}>{item.title}</p>
                  <p className="text-primary">{item.quantity}</p>
                  <div className="flex justify-between items-center">
                    <small
                      style={{
                        color:"#C9DD81"
                      }}
                    >
                      {item.other}
                    </small>
                  </div>
                </div>
                <div
                  className={`w-10 h-10 flex justify-center items-center rounded-full overflow-hidden ${selected==index ? `bg-gray-300` : `bg-primary-900`}`}
                >
                  {item?.logo}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default StatisticsCard;
