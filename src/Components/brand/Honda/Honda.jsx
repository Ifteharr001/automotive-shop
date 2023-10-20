import { useLoaderData } from "react-router-dom";
import HondaCardes from "./HondaCardes";
const Honda = () => {

    const hondaCard = useLoaderData();
    return (
      <>
        <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
          {hondaCard
            .filter((honda) => honda.carbrand === "honda")
            .map((honda) => (
              <HondaCardes key={honda._id} honda={honda}></HondaCardes>
            ))}
        </div>
      </>
    );
};

export default Honda;