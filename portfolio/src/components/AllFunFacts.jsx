import { GiPencilBrush } from "react-icons/gi";
import FunFactInfos from "./FunFactInfos";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";

function AllFunFacts() {
  return (
    <>
      <FunFactInfos title={"Art"} icon={<GiPencilBrush size={70} />}>
        As an art enthusiast, drawing is, to me, an expression of my creativity.
        I like to think of coding the same way as drawing, just substituting a
        pen with letters and numbers.
      </FunFactInfos>

      <FunFactInfos title={"Management"} icon={<FaPeopleGroup size={70} />}>
        I've supervised 150+ individuals on Australian solar plant projects,
        highlighting the importance of teamwork to me.
      </FunFactInfos>

      <FunFactInfos title={"Sport"} icon={<FaSkiing size={70} />}>
        Sports hold a special place in my heart, with skiing being a true
        passion. During my younger years, I even competed as a semi-professional
        skier.
      </FunFactInfos>
    </>
  );
}

export default AllFunFacts;
