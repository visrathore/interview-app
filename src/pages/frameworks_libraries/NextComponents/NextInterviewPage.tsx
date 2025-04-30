import { Box, Tab, Tabs } from "@mui/material";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TabsLabelsConceptsNext } from "../../../utils/nextFiles/NextHelper";
import { NEXT_INTERVIEW_DATA_TYPES } from "../../../utils/nextFiles/interview";

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

const NextInterviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(Number(searchParams.get("tabValue")));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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
          aria-label="next-interview"
          variant="scrollable"
          scrollButtons="auto"
        >
          {TabsLabelsConceptsNext.map((tabName, tabIndex) => (
            <Tab label={tabName} {...a11yProps(tabIndex)} />
          ))}
        </Tabs>
      </Box>

      {NEXT_INTERVIEW_DATA_TYPES?.map((nextData, nextIndex) => (
        <CustomTabPanel value={value} index={nextIndex}>
          {nextData.map((nData, nIndex) => (
            <CustomizedAccordions
              id={`${nIndex + 1}`}
              heading={nData.heading}
              content={nData.content}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default NextInterviewPage;
