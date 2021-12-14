import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import { company } from "../models/company";



export const CompanyView = ({ CompanySearchResult, setSearchText ,isFetching}: CompanyProps) => { 
  return (<Grid container>
    <Grid item gridColumn={12}>
      <Autocomplete
        id="company-select"
        sx={{ width: 300 }}
        options={CompanySearchResult ?? []}
        autoHighlight
        loading={isFetching}
        loadingText={"Searching ...."}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}> 
            {option.name} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Company"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            onChange={(e)=>setSearchText(e.target.value)}
          />
        )}
      />
    </Grid>
  </Grid>)

}

interface CompanyProps {
  CompanySearchResult?: company[];
  setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>;
  isFetching:boolean;
}