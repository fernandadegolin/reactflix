import React from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";

function Carousel({ ignoreFirstVideo, category }) {
  const { titulo, cor, link_extra, videos } = category;

  console.log({ videos });
  console.log({ category });

  console.log({ cor });

  return (
    <VideoCardGroupContainer>
      {titulo && (
        <>
          <Title style={{ backgroundColor: cor }}>{titulo}</Title>
          {link_extra && (
            <ExtraLink href={link_extra.url} target="_blank">
              {link_extra.text}
            </ExtraLink>
          )}
        </>
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={cor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
