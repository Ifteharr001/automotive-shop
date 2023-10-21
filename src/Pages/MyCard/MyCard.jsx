import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyAllCard from "./MyAllCard";
const MyCard = () => {
    const loadCard = useLoaderData();
    const [cards, setDelet] = useState(loadCard)
      const { user } = useContext(AuthContext);
    return (
      <div>
        <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
          {cards
            .filter((card) => card?.email === user.email)
            .map((card) => (
              <MyAllCard key={card?._id} card={card} cards={cards} setDelet={setDelet}></MyAllCard>
              
            ))}
        </div>
      </div>
    );
};

export default MyCard;