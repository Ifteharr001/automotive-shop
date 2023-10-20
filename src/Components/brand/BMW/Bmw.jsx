import { useLoaderData } from "react-router-dom";
import BmwCardes from "./BmwCardes";

const Bmw = () => {
  const bmwCard = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
        {bmwCard
          .filter((bmw) => bmw.carbrand === "bmw")
          .map((bmw) => (
            <BmwCardes key={bmw._id} bmw={bmw}></BmwCardes>
          ))}
      </div>
    </>
  );
};

export default Bmw;
