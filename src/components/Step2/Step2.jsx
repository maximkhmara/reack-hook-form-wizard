import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCrust } from "../../rootSlice";

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    navigate("/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="crust">Pick crust:</label>
        <select name="crust" id="crust" {...register("crust")}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step2;
