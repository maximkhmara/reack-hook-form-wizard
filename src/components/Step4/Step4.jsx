// components/Step4.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCheese, chooseImage } from "../../rootSlice";

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cheese = useSelector((state) => state.cheese);
  const image = useSelector((state) => state.image);
  const { register, handleSubmit } = useForm({
    defaultValues: { cheese, image },
  });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    dispatch(chooseImage(data.image));
    navigate("/result");
  };

  const stockImages = [
    {
      url: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      alt: "Image 1",
    },
    {
      url: "https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg",
      alt: "Image 2",
    },
    {
      url: "https://fastly.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      alt: "Image 3",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cheese">Pick cheese:</label>
        <select name="cheese" id="cheese" {...register("cheese")}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">Pick an image:</label>
        <div>
          {stockImages.map((img, index) => (
            <label key={index}>
              <input type="radio" value={img.url} {...register("image")} />
              <img
                src={img.url}
                alt={img.alt}
                style={{ width: "100px", height: "100px", margin: "10px" }}
              />
            </label>
          ))}
        </div>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step4;
