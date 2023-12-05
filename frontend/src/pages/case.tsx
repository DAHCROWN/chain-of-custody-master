import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import CaseViewDetails from "../components/CaseViewDetails";
import CaseTimeLine from "../components/CaseTimeLine";

const Case = () => {
  return (
    <Box bg={"primarydark"} px={"4rem"} pt={"8rem"}>
      <Tabs>
        <TabList color={"white"} fontFamily={"aldrich"} borderBottom={"none"}>
          <Tab>Details</Tab>
          <Tab>Timeline</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CaseViewDetails />
          </TabPanel>
          <TabPanel>
            <CaseTimeLine />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Case;
