import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseSause } from "../../rootSlice";

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sause = useSelector((state) => state.sause);
  const { register, handleSubmit } = useForm({ defaultValues: { sause } });

  const onSubmit = (data) => {
    dispatch(chooseSause(data.sause));
    navigate("/step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sause">Pick sause:</label>
        <select name="sause" id="sause" {...register("sause")}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step3;
