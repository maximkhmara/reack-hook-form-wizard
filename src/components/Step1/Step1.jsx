// Step1.jsx
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCategory } from "../../rootSlice";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseCategory(data.category));
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl component="fieldset" margin="normal" fullWidth>
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-labelledby="category-group-label"
          {...register("category")}
        >
          <FormControlLabel
            value="нова брама"
            control={<Radio />}
            label="нова брама"
          />
          <FormControlLabel
            value="заміна брами"
            control={<Radio />}
            label="заміна брами"
          />
        </RadioGroup>
      </FormControl>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
