"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import CardSkeleton from "../CardSkeleton";
import { styled, useThemeProps } from "@mui/material/styles";
import { Popper, PopperProps } from "@mui/base/Popper";
import { ChartsTooltip } from "@mui/x-charts";
import { Spinner } from "@nextui-org/react";

const StateDistributionCard = ({ activeYear, content, title }) => {
  const [states, setStates] = useState([]);
  const [female, setFemale] = useState([]);
  const [male, setMale] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const processData = (data) => {
    const statesArray = [];
    const femaleArray = [];
    const maleArray = [];

    data.forEach((item) => {
      statesArray.push(item.state);
      femaleArray.push(item.totalFemale);
      maleArray.push(item.totalMale);
    });

    // Update states with extracted values
    setStates(statesArray);
    setFemale(femaleArray);
    setMale(maleArray);
  };

  const getData = async (current) => {
    console.log(current);
    try {
      setIsloading(true);
      const res = await axios.post(`${base_url}data-set/state/gender`, {
        year: current,
      });
      // console.log(res.data);
      processData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData(activeYear);
  }, [activeYear]);

  const ChartsTooltipRoot = styled(Popper, {
    name: "MuiChartsTooltip",
    slot: "Root",
    overridesResolver: (_, styles) => styles.root,
  })(({ theme }) => ({
    pointerEvents: "none",
    zIndex: theme.zIndex.modal,
  }));

  const CustomPopperRoot = (props) => {
    return (
      <ChartsTooltipRoot
        {...props}
        anchorEl={{
          getBoundingClientRect: () => ({
            ...props.anchorEl?.getBoundingClientRect(),
            y: 50,
            top: 50,
          }),
        }}
      />
    );
  };

  return (
    <>
      <h4>{title ?? "States"}</h4>
      <hr className="my-3" />

      <div className="">
        {states.length === 0 || female.length === 0 || male.length === 0 ? (
          <CardSkeleton />
        ) : (
          <div className="relative">
            <BarChart
              // width={600}
              height={400}
              className="w-[100%]"
              series={[
                { data: male, label: "Male", id: "pvId" },
                { data: female, label: "Female", id: "uvId" },
              ]}
              xAxis={[
                {
                  data: states,
                  scaleType: "band",
                  scale: {
                    type: "band",
                    paddingInner: 100,
                    paddingOuter: 200,
                  },
                },
              ]}
              margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
              tooltip={{ trigger: "axis", slotProps: {} }}
              // slots={{ popper: CustomPopperRoot }}
            />
            {isLoading && (
              <div className="absolute top-[30%] left-[50%]">
                <Spinner size="lg" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default StateDistributionCard;
