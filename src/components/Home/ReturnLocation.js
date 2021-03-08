import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const ReturnLocation = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={location}
      getOptionLabel={(option) => option.title}
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Return Location" variant="outlined" />
      )}
    />
  );
};

export default ReturnLocation;
const location = [{ title: "Bahrain" }, { title: "UAE" }, { title: "KSA" }];
