import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { company } from "../models/company";



export const CompanyView = ({ CompanySearchResult, setSearchText, isFetching, setSelectedCompany }: CompanyProps) => {

  const [open, setOpen] = useState<boolean>(false);

  const loading = open && isFetching;

  return (

    <Autocomplete
      id="company-select"
      sx={{ width: 350 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      //getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name}
        </Box>
      )}
      onChange={(_ev, value) => value ? setSelectedCompany(value) : setSelectedCompany(undefined)}
      options={CompanySearchResult ?? []}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label="Search Company"
          variant="outlined"
          onChange={ev => {
            // dont fire API if the user delete or not entered anything
            if (ev.target.value !== "" || ev.target.value !== null) {
              setSearchText(ev.target.value);
            }
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              < >
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </ >
            )
          }}
        />
      )}
    />


  )
}

interface CompanyProps {
  CompanySearchResult?: company[];
  setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>;
  isFetching: boolean;
  setSelectedCompany: React.Dispatch<React.SetStateAction<company | undefined>>;
}