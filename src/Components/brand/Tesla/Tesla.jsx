import { useLoaderData } from "react-router-dom";
import TeslaCardes from "./teslaCardes";
const Tesla = () => {
    const teslaCard = useLoaderData();
    return (
      <>
        <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
          {
          teslaCard.filter((tesla) => tesla.carbrand === "tesla")
            .map((tesla) => (
              <TeslaCardes key={tesla._id} tesla={tesla}></TeslaCardes>
            ))}
        </div>
      </>
    );
};

export default Tesla;