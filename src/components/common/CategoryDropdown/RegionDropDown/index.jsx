import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegionDropDown = () =>{
const [Region, setRegion] = React.useState('') 

const handleChange = (e) =>{
  setRegion(e.target.value)
}

return(
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">지역</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Region}
          label="Region"
          onChange={handleChange}
        >
              <MenuItem value="Seoul">서울</MenuItem>
              <MenuItem value="Kyunggi">경기</MenuItem>
              <MenuItem value="Incheon">인천</MenuItem>
              <MenuItem value="busan">부산</MenuItem>
              <MenuItem value="Daegu">대구</MenuItem>
              <MenuItem value="Daejeon">대전</MenuItem>
              <MenuItem value="Gwangju">광주</MenuItem>
              <MenuItem value="Gangwon">강원</MenuItem>
              <MenuItem value="kyungbook">경북</MenuItem>
              <MenuItem value="Jeonbook">전북</MenuItem>
              <MenuItem value="chungbook">충북</MenuItem>
              <MenuItem value="sejong">세종</MenuItem>
              <MenuItem value="ulsan">울산</MenuItem>
              <MenuItem value="kyungnam">경남</MenuItem>
              <MenuItem value="Jeonnam">전남</MenuItem>
              <MenuItem value="chungNam">충남</MenuItem>
              <MenuItem value="Jeju">제주</MenuItem>
              <MenuItem value="overSea">해외</MenuItem>
        </Select>
      </FormControl>
    </Box>
)

}

export default RegionDropDown