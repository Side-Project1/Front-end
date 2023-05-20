import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EasyDropDownUI = () => {

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor="grouped-select">카테고리</InputLabel>
      <Select defaultValue="" id="grouped-select" label="Grouping">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <ListSubheader>음악</ListSubheader>
        <MenuItem value={1}>피아노</MenuItem>
        <MenuItem value={2}>관현악</MenuItem>
        <MenuItem value={3}>성악</MenuItem>
        <MenuItem value={4}>솔리스트</MenuItem>
        <MenuItem value={5}>축가</MenuItem>
        <MenuItem value={6}>합창단</MenuItem>
        <MenuItem value={7}>작곡</MenuItem>
        <ListSubheader>실용음악</ListSubheader>
        <MenuItem value={8}>보컬</MenuItem>
        <MenuItem value={9}>작곡</MenuItem>
        <MenuItem value={10}>녹음</MenuItem>
        <MenuItem value={11}>연극</MenuItem>
        <MenuItem value={12}>연출</MenuItem>
        <MenuItem value={13}>뮤지컬</MenuItem>
        <MenuItem value={14}>재즈</MenuItem>
        <ListSubheader>디자인/미술 </ListSubheader>
        <MenuItem value={15}>UI/UX</MenuItem>
        <MenuItem value={16}>시각/영상</MenuItem>
        <MenuItem value={17}>제품디자인</MenuItem>
        <MenuItem value={18}>의류디자인</MenuItem>
        <MenuItem value={19}>만화/웹툰/애니</MenuItem>
      </Select>
    </FormControl>
  )

}

export default EasyDropDownUI