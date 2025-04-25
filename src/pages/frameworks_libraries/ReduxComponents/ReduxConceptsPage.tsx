import { Box, Tab, Tabs } from "@mui/material";
import CustomizedAccordions from "../../../components/UI/CustomizedAccordions";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TabsLabelsConceptsRedux } from "../../../utils/reduxFiles/ReduxHelper";
import { REDUX_CONCEPTS_DATA_TYPES } from "../../../utils/reduxFiles/concepts";

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

const ReduxConceptsPage = () => {
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
          aria-label="redux-interview"
          variant="scrollable"
          scrollButtons="auto"
        >
          {TabsLabelsConceptsRedux.map((tabName, tabIndex) => (
            <Tab label={tabName} {...a11yProps(tabIndex)} />
          ))}
        </Tabs>
      </Box>

      {REDUX_CONCEPTS_DATA_TYPES?.map((reduxData, reduxIndex) => (
        <CustomTabPanel value={value} index={reduxIndex}>
          {reduxData.map((rData, bIndex) => (
            <CustomizedAccordions
              id={`${bIndex + 1}`}
              heading={rData.heading}
              content={rData.content}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default ReduxConceptsPage;
