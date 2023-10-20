import { useLoaderData } from "react-router-dom";
import FordCardes from "./FordCardes";
const Ford = () => {
    const fordCard = useLoaderData();
    return (
      <>
        <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
          {fordCard
            .filter((ford) => ford.carbrand === "ford")
            .map((ford) => (
              <FordCardes key={ford._id} ford={ford}></FordCardes>
            ))}
        </div>
      </>
    );
};

export default Ford;