import { useLoaderData } from "react-router-dom";
import ToyotaCardes from "./ToyotaCardes";



const Toyota = () => {

  const toyotaCard = useLoaderData();


  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
        {toyotaCard
          .filter((toyota) => toyota.carbrand === "toyota")
          .map((toyota) => (
            <ToyotaCardes key={toyota._id} toyota={toyota}></ToyotaCardes>
          ))}
      </div>
    </>
  );
};

export default Toyota;
