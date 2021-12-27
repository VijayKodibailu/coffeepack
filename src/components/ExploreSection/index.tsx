import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";



const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}

  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;



const ViewUpButton = styled.button`
  ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-black
        text-4xl
        transition-colors
        duration-200
        hover:text-green-700
    `};
`;


export function ExploreSection() {
  return (
    <ExploreSectionContainer name="Explore">
      <Title>Explore Coffee Packs</Title>
      <SectionInfo>
        View our coffee package and find out more about the product you will enjoy
        together on this coffee, and having so much
        fun.
      </SectionInfo>
      <ExploreSectionWrapper>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src='./images/pack01.jpg' />
            <Description>Colombian Coffee</Description>
          </Item>
          <Item>
            <img src='./images/pack01.jpg' />
            <Description>Premimm Coffee</Description>
          </Item>
          <Item>
            <img src='./images/pack03.jpg' />
            <Description>Ethiopia Bean </Description>
          </Item>
          <Item>
            <img src='./images/pack04.jpg'/>
            <Description>Great Coffee Bean</Description>
          </Item>
          <Item>
            <img src='./images/pack05.jpg'/>
            <Description>Rosted Coffee Bag</Description>
          </Item>
          <Item>
            <img src='./images/pack06.jpg'/>
            <Description>Barista Beans Pouch</Description>
          </Item>
          <Item>
            <img src='./images/pack07.jpg'/>
            <Description>Orange Coffee Bag</Description>
          </Item>
          <Item>
            <img src='./images/pack08.jpg'/>
            <Description>PNTM Coffee Box</Description>
          </Item>
          <Item>
            <img src='./images/pack09.jpg'/>
            <Description>Rosted Coffee Box</Description>
          </Item>                         

        </Carousel>
      </ExploreSectionWrapper>
      <ViewUpButton>

      <Link to="Home" smooth={"easeInOutQuad"} duration={1500}>
            <BsArrowUpCircle />
          </Link>
      </ViewUpButton>
    </ExploreSectionContainer>
  );
}
