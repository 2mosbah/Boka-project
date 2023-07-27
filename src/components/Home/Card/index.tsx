import Container from "../../Shared/Conatiner";
import Button from "../../Shared/Button";
import SubTitle from "../../Shared/SubTitle";
import CardContent from "./CardContent";
import { CardContents } from "../../../mock/CardContent";

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

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TypesCard = ({ id }: { id: string }) => {
  return (
    <Container>
      <SubTitle
        heading="Special offer"
        label="view all"
        children={
          <div className="flex gap-1 items-center">
            <Button
              type="button"
              className={`prev text-2xl`}
              label={<IoIosArrowBack className="text-4xl" />}
            />
            <Button
              type="button"
              className={`next text-2xl`}
              label={<IoIosArrowForward className="text-4xl" />}
            />
          </div>
        }
      />
      <Swiper
        key={id}
        className="h-[700px] p-2"
        modules={[Navigation]}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={20}
        navigation={{
          nextEl: `.next`,
          prevEl: `.prev`,
          enabled: true,
        }}
      >
        {CardContents.map((card, index) => (
          <SwiperSlide key={index}>
            <CardContent
              images={card.images}
              price={card.price}
              time={card.time}
              title={card.title}
              options={card.options}
              rating={card.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TypesCard;
