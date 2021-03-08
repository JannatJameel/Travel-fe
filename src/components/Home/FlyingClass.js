import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const FlyingClass = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={flyingClass}
      getOptionLabel={(option) => option.title}
      defaultValue="1 Adult"
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Flying Class" variant="outlined" />
      )}
    />
  );
};

export default FlyingClass;
const flyingClass = [
  { title: "Economy" },
  { title: "Business Class" },
  { title: "Fist Class" },
];
