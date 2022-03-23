import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    StyledSliderWrapp,
    StyledSliderImage,
    StyledSliderImageWrapp,
    StyledSliderItem,
    StyledSliderText,
    StyledSliderButtonNext,
    StyledSliderButtonPrev,
    StyledSliderImageBlock,
    StyledDescription,
    StyledDescriptionItem,
} from "./slider.styled";
import 'swiper/css';

interface IArraySlider {
    id: string;
    text: string;
    image: string;
}

interface IArrayDesc {
    id: string;
    text: string;
}

interface IProps {
    slider: IArraySlider[];
    description: IArrayDesc[];
}

export const Slider: React.FC<IProps> = ({ slider, description }) => {
    const [swiperIndex, setSwiperIndex] = useState(0);

    return(
        <>
            <StyledSliderWrapp>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    centeredSlides={true}
                    speed={1800}
                    loop={true}
                    onActiveIndexChange={(swiperCore) => {setSwiperIndex(swiperCore.realIndex)}}
                    navigation={{
                        nextEl: StyledSliderButtonNext.toString(),
                        prevEl: StyledSliderButtonPrev.toString(),
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        slider.map((item) => (
                            <SwiperSlide key={item.id}>
                                <StyledSliderItem>
                                    <StyledSliderImageWrapp>
                                        <StyledSliderImageBlock>
                                            <StyledSliderImage src={item.image} alt="" />
                                        </StyledSliderImageBlock>
                                        <StyledSliderImageBlock right>
                                            <StyledSliderImage src={item.image} alt="" right/>
                                        </StyledSliderImageBlock>
                                    </StyledSliderImageWrapp>
                                    <StyledSliderText>{item.text}</StyledSliderText>
                                </StyledSliderItem>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <StyledSliderButtonNext />
                <StyledSliderButtonPrev />
            </StyledSliderWrapp>
            <StyledDescription>
                {
                    description.map((item, index) => (
                        <StyledDescriptionItem
                            active={index === swiperIndex}
                            key={item.id}
                        >
                            {item.text}
                        </StyledDescriptionItem>
                    ))
                }
            </StyledDescription>
        </>
    )
}