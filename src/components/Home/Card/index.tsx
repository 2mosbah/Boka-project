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

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import axios from "axios";

const TypesCard = ({
  id,
  header,
  categoryId,
}: {
  id: number;
  header: string;
  categoryId: number;
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `  https://api.dev.boka.co/business-management/businesses?limit=10&categoryId=${categoryId}`
        );
        setData(res.data.data);
      } catch (error: any) {
        setError(error.message);
        console.log(error.message);
      }
    })();
  }, [categoryId]);

  return (
    <Container className="my-20">
      {error ? (
        <div className="w-full text-center text-4xl text-red-500 font-bold">
          {error}...
        </div>
      ) : (
        <div>
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
            {data.map((card: any) => (
              <SwiperSlide
                key={card.id}
                className="!max-w[300px] !min-w-[300px] !p-1 "
              >
                <CardContent
                  className="border rounded-lg"
                  id={card.id + (id ? id : 1231)}
                  images={card.images}
                  title={card.nameEn}
                  rating={card.rating}
                  options={card.services}
                  address={card.address[0].formatted}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </Container>
  );
};

export default TypesCard;
