import { Box, Tab, Tabs } from "@mui/material";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TabsLabelsConceptsDsa } from "../../../utils/dsaFiles/DsaHelper";
import { DSA_DATA_TYPES } from "../../../utils/dsaFiles/interview";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DsaCodingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(Number(searchParams.get("tabValue")));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    searchParams.set("tabValue", `${newValue}`);
    setValue(newValue);
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ width: "85vw", maxWidth: "85vw" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dsa-interview"
          variant="scrollable"
          scrollButtons="auto"
        >
          {TabsLabelsConceptsDsa.map((tabName, tabIndex) => (
            <Tab label={tabName} {...a11yProps(tabIndex)} />
          ))}
        </Tabs>
      </Box>

      {DSA_DATA_TYPES?.map((dsaData, dsaIndex) => (
        <CustomTabPanel value={value} index={dsaIndex}>
          {dsaData.map((dData, jIndex) => (
            <CustomizedAccordions
              id={`${jIndex + 1}`}
              heading={dData.heading}
              content={dData.content}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default DsaCodingPage;
