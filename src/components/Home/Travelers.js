import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Travelers = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={travelers}
      getOptionLabel={(option) => option.title}
      defaultValue="1 Adult"
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Number of Travelers" variant="outlined" />
      )}
    />
  );
};

export default Travelers;
const travelers = [
  { title: "1 Adult" },
  { title: "2 Adults" },
  { title: "3 Adults" },
];
