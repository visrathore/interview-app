import { Box, Tab, Tabs } from "@mui/material";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";
import { ADVANCED_REACT_DATA } from "../../../utils/reactFiles/interview/ReactAdvanced";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BEGINNER_REACT_DATA } from "../../../utils/reactFiles/interview/ReactBeginner";
import { INTERMEDIATE_REACT_DATA } from "../../../utils/reactFiles/interview/ReactIntermediate";
import { REACT19_REACT_DATA } from "../../../utils/reactFiles/interview/React19";

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

const ReactInterviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(Number(searchParams.get("tabValue")));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    searchParams.set("tabValue", `${newValue}`);
    setValue(newValue);
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="react-interview"
        >
          <Tab label="Beginner" {...a11yProps(0)} />
          <Tab label="Intermediate" {...a11yProps(1)} />
          <Tab label="Advanced" {...a11yProps(2)} />
          <Tab label="React 19" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {BEGINNER_REACT_DATA.map((reactData, bIndex) => (
          <CustomizedAccordions
            id={`${bIndex + 1}`}
            heading={reactData.heading}
            content={reactData.content}
          />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {INTERMEDIATE_REACT_DATA.map((reactData, iIndex) => (
          <CustomizedAccordions
            id={`${iIndex + 1}`}
            heading={reactData.heading}
            content={reactData.content}
          />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {ADVANCED_REACT_DATA.map((reactData, aIndex) => (
          <CustomizedAccordions
            id={`${aIndex + 1}`}
            heading={reactData.heading}
            content={reactData.content}
          />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {REACT19_REACT_DATA.map((reactData, aIndex) => (
          <CustomizedAccordions
            id={`${aIndex + 1}`}
            heading={reactData.heading}
            content={reactData.content}
          />
        ))}
      </CustomTabPanel>
    </Box>
  );
};

export default ReactInterviewPage;
