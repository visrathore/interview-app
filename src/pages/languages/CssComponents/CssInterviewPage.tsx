import { Box, Tab, Tabs } from "@mui/material";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TabsLabelsConceptsCss } from "../../../utils/cssFiles/CssHelper";
import { CSS_INTERVIEW_DATA_TYPES } from "../../../utils/cssFiles/interview";

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

const CssInterviewPage = () => {
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
          aria-label="css-interview"
          variant="scrollable"
          scrollButtons="auto"
        >
          {TabsLabelsConceptsCss.map((tabName, tabIndex) => (
            <Tab label={tabName} {...a11yProps(tabIndex)} />
          ))}
        </Tabs>
      </Box>

      {CSS_INTERVIEW_DATA_TYPES?.map((cssData, cssIndex) => (
        <CustomTabPanel value={value} index={cssIndex}>
          {cssData.map((cData, cIndex) => (
            <CustomizedAccordions
              id={`${cIndex + 1}`}
              heading={cData.heading}
              content={cData.content}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CssInterviewPage;
