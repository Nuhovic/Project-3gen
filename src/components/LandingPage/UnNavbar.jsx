import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [racunari, setRacunari] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id='Racunari' style={{background:"orange",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div id='levi div' style={{width:"50%",height:"70px",display:"flex",justifyContent:"flex-start",alignItems:"center",marginRight:"50px"}}>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Racunari</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={racunari}
          onChange={handleChange}
          autoWidth
          label="Racunari"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Avanturisticke Igrice</MenuItem>
          <MenuItem value={21}>Igrice Za Decu</MenuItem>
          <MenuItem value={22}>Sportske Igrice</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">PlayStation</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={racunari}
          onChange={handleChange}
          autoWidth
          label="Racunari"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Avanturisticke Igrice</MenuItem>
          <MenuItem value={21}>Igrice Za Decu</MenuItem>
          <MenuItem value={22}>Sportske Igrice</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">XBox</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={racunari}
          onChange={handleChange}
          autoWidth
          label="Racunari"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Avanturisticke Igrice</MenuItem>
          <MenuItem value={21}>Igrice Za Decu</MenuItem>
          <MenuItem value={22}>Sportske Igrice</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div id='desni div' style={{}}>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">XBox</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={racunari}
          onChange={handleChange}
          autoWidth
          label="Racunari"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Avanturisticke Igrice</MenuItem>
          <MenuItem value={21}>Igrice Za Decu</MenuItem>
          <MenuItem value={22}>Sportske Igrice</MenuItem>
        </Select>
      </FormControl>
      </div>
    </div>
  );
}