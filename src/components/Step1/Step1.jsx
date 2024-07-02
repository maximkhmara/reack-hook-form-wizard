// components/Step1.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseBase } from "../../rootSlice";
import TextField from "@mui/material/TextField";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const base = useSelector((state) => state.base);
  const category = useSelector((state) => state.category);
  const nameProduct = useSelector((state) => state.nameProduct);
  const quantity = useSelector((state) => state.quantity);
  const price = useSelector((state) => state.price);
  const description = useSelector((state) => state.description);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      base,
      category,
      nameProduct,
      quantity,
      price,
      description,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseBase(data));
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="base">Pick base:</label>
        <select name="base" id="base" {...register("base")}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <TextField
          id="category"
          label="Category"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("category", { required: true })}
        />
        <TextField
          id="nameProduct"
          label="Name Product"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("nameProduct", { required: true })}
        />
        <TextField
          id="quantity"
          label="Quantity"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          {...register("quantity", { required: true })}
        />
        <TextField
          id="price"
          label="Price"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          {...register("price", { required: true })}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("description")}
        />
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step1;
