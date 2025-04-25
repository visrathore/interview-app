import { Box, Tab, Tabs } from "@mui/material";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TabsLabelsInterviewTs } from "../../../utils/typescriptFiles/TsHelper";
import { TYPESCRIPT_DATA_TYPES } from "../../../utils/typescriptFiles/interview";

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

const TypescriptInterviewPage = () => {
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
          aria-label="ts-interview"
          variant="scrollable"
          scrollButtons="auto"
        >
          {TabsLabelsInterviewTs.map((tabName, tabIndex) => (
            <Tab label={tabName} {...a11yProps(tabIndex)} />
          ))}
        </Tabs>
      </Box>

      {TYPESCRIPT_DATA_TYPES?.map((tsData, tsIndex) => (
        <CustomTabPanel value={value} index={tsIndex}>
          {tsData.map((tData, tIndex) => (
            <CustomizedAccordions
              id={`${tIndex + 1}`}
              heading={tData.heading}
              content={tData.content}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default TypescriptInterviewPage;
