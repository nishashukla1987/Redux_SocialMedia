import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';





export default function Searching(){
return (
  <div style={{ width: 300 }}>
    <Autocomplete
      freeSolo
      style={{ height: '40px', backgroundColor: 'white', borderRadius: 5 }}
      id='free-solo-2-demo'
      disableClearable
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          style={{ marginTop: 0 }}
          {...params}
          size='small'
          placeholder='search...'
          margin='normal'
          variant='outlined'
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  </div>
);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [