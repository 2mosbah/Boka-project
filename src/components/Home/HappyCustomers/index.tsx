import { HappyCustomersData } from "../../../constants/HappyCutomersData";
import Container from "../../Shared/Conatiner";
import { H1 } from "../Typography";
import HappyCustomersCard from "./HappyCustomersCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../../Shared/Button";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const HappyCustomers = ({ id }: { id: number }) => {
  return (
    <Container className="my-20">
      <H1 className="text-[#02323D] text-[36px] text-center font-bold">
        Our happy customers say about us
      </H1>
      <div className="flex mb-20">
        <Button
          type="button"
          className={`prev${id}`}
          label={
            <BsArrowLeftShort className="text-2xl font-thin hover:rounded-full hover:py-1 hover:text-3xl hover:bg-white hover:text-orange-500" />
          }
        />
        <Swiper
          className="w-full"
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: `.next${id}`,
            prevEl: `.prev${id}`,
            enabled: true,
          }}
          slidesPerGroup={1}
        >
          {HappyCustomersData.map((data) => (
            <SwiperSlide id={data.id} className="!w-[300px] !h-[300px] ">
              <HappyCustomersCard
                id={data.id}
                body={data.body}
                logo={data.logo}
                name={data.name}
                authorName={data.authorName}
                location={data.location}
                stars={data.stars}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          type="button"
          className={`next${id}`}
          label={
            <BsArrowRightShort className="text-2xl font-thin hover:rounded-full hover:py-1 hover:text-3xl hover:bg-white hover:text-orange-500" />
          }
        />
      </div>
    </Container>
  );
};

export default HappyCustomers;
