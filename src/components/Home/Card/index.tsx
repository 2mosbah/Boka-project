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

const TypesCard = ({ id, header }: { id: number; header: string }) => {
  return (
    <Container className="my-20">
      <SubTitle
        heading={header}
        label="view all"
        children={
          <div className="flex gap-1 items-center">
            <Button
              type="button"
              className={`prev${id} text-2xl`}
              label={<IoIosArrowBack className="text-4xl" />}
            />
            <Button
              type="button"
              className={`next${id} text-2xl`}
              label={<IoIosArrowForward className="text-4xl" />}
            />
          </div>
        }
      />
      <Swiper
        className="w-full !p-2"
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: `.next${id}`,
          prevEl: `.prev${id}`,
          enabled: true,
        }}
        slidesPerGroup={1}
        breakpoints={{
          100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          430: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          537: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          760: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        }}
      >
        {CardContents.map((card, index) => (
          <SwiperSlide
            key={index}
            className="!max-w[300px] !min-w-[300px] !p-1 "
          >
            <CardContent
              id={index}
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
