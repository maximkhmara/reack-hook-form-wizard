import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseSize } from "../../rootSlice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const size = useSelector((state) => state.size);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { size },
  });

  const [customSize, setCustomSize] = useState(false);

  useEffect(() => {
    if (size === undefined) {
      setValue("size", "");
    }
  }, [size, setValue]);

  const onSubmit = (data) => {
    dispatch(chooseSize(data));
    navigate("/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!customSize && (
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="size-label">Standard sizes</InputLabel>
          <Select
            labelId="size-label"
            id="size"
            label="Standard sizes"
            defaultValue={size || ""}
            {...register("size", { required: !customSize })}
          >
            <MenuItem value={2500}>2500mm x 2500mm</MenuItem>
            <MenuItem value={3000}>3000mm x 3000mm</MenuItem>
            <MenuItem value={3500}>3500mm x 3500mm</MenuItem>
          </Select>
        </FormControl>
      )}

      <FormControlLabel
        control={
          <Checkbox
            checked={customSize}
            onChange={(e) => setCustomSize(e.target.checked)}
          />
        }
        label="Custom size"
      />

      {customSize && (
        <>
          <TextField
            id="width"
            label="Width"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("width", { required: customSize })}
          />
          <TextField
            id="height"
            label="Height"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("height", { required: customSize })}
          />
        </>
      )}

      <button>Next</button>
    </form>
  );
};

export default Step2;
