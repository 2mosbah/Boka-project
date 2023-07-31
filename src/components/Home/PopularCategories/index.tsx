import manicure from "../../../assets/manicure.jpeg";
import pedicure from "../../../assets/pedicure.png";
import ivtherap from "../../../assets/ivtherap.png";
import trimming from "../../../assets/trimming.png";
import haircut from "../../../assets/haircut.png";

import axios from "axios";

import Container from "../../Shared/Conatiner";
import PopularImage from "./PopularImage";

import { useEffect, useState } from "react";

const PopularCategories = () => {
  return (
    <Container>
      <div>
        <div className="flex flex-col lg:flex-row my-20 items-center gap-6">
          <PopularImage
            imgSrc={manicure}
            name="Manicure"
            subName="243+ Business"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <PopularImage imgSrc={pedicure} name="Pedicure" />
            <PopularImage imgSrc={ivtherap} name="IV Therap" />
            <PopularImage imgSrc={trimming} name="Trimming" />
            <PopularImage imgSrc={haircut} name="Haircut" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularCategories;

/* Code with api */

// import manicure from "../../../assets/manicure.jpeg";
// import pedicure from "../../../assets/pedicure.png";
// import ivtherap from "../../../assets/ivtherap.png";
// import trimming from "../../../assets/trimming.png";
// import haircut from "../../../assets/haircut.png";

// import axios from "axios";

// import Container from "../../Shared/Conatiner";
// import PopularImage from "./PopularImage";

// import { useEffect, useState } from "react";
// import { className } from "../../../interfaces/props/IPropsPopularImage";

// const PopularCategories = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(
//           "https://api.dev.boka.co/business-management/lookups/business-categories?orderBy=popularity&limit=5"
//         );
//         setData(res.data.data);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     })();
//   }, []);

//   return (
//     <Container className="my-20">
//       {error ? (
//         <div className="w-full text-center text-4xl text-red-500 font-bold">
//           {error}...
//         </div>
//       ) : (
//         <div>
//           <div className="grid grid-cols-4 grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 mx-auto gap-[15px] xl:gap-[30px] xl:!w-full w-[90%]">
//             {data.map((item: any, index) => (
//               <PopularImage
//                 imgSrc={item.thumbnailUrl}
//                 backgroundImage={item.thumbnailUrl}
//                 name={item.nameEn}
//                 subName={item.usedNo}
//                 className={index === 0 ? className.BigElementClassName : ""}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default PopularCategories;
