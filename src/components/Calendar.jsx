import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar defaultValue={dayjs("2022-04-17")} />
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}
