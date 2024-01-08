import { useEffect, useState } from "react";

import { AgentsList } from "@/components/AgentsList";

import { DefaultLayout } from "@/components/DefaultLayout";
import { UserCountList } from "@/components/UserCountList";
import { Box } from "@mui/material";
import { instance } from "@/components/AxiosProvider";

import { useRecoilValue } from "recoil";

import dayjs from "dayjs";
import { Shift } from "@/types/shift";
import { userAtom } from "@/atoms/userAtom";
import { AxiosResponse } from "axios";

export default function buyerSelectPage() {
  const [shiftList, setShiftList] = useState<Shift>();

  const today = dayjs().format("YYYY-MM-DD");
  const queryParams = {
    date: today,
  };

  const val = useRecoilValue(userAtom);

  useEffect(() => {
    const getShiftList = async () => {
      const res: AxiosResponse<Shift> = await instance.get("/shifts/agents", {
        params: queryParams,
      });
      setShiftList(res.data);
    };
    getShiftList();
  }, []);

  return (
    <DefaultLayout>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        paddingTop="50px"
        paddingX="30px"
      >
        <UserCountList persons={shiftList?.data.length} />
        <AgentsList agentList={shiftList} />
      </Box>
    </DefaultLayout>
  );
}
