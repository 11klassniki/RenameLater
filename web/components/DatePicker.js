import * as React from 'react'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

//mui.com/x/react-date-pickers/getting-started/

export default function DatePicker() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'))

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
