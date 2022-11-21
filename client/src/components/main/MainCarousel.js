import React, { useState, useEffect, useRef } from 'react';
import {
  ContainerDiv,
  SlideDiv,
  BtnDiv,
  WindowDiv,
  FlexBoxDiv,
  PositionDiv,
  ImageDiv,
} from './MainCarousel.style';

const Carousel = () => {
  const images = useRef([
    {
      src: 'https://an2-img.amz.wtchn.net/image/v2/QAYGCBozk5Op9FhbtLpuSg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gwWjJoaWIyWndZM2Q1T0hsd2VEVnRhbU56SW4wLm5mc1FNMnI5Q0VmSGFKUTRkRk5ocm1FRXFEdTBkemNYcE5hYXdUbC1fakk',
    },
    {
      src: 'https://an2-img.amz.wtchn.net/image/v2/fUK_R2MfkYEyPV7rIqE_tA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZME5UazVNRGt6T1RnM01qQXdPREExTmlKOS5Xa0Z2aDloRE5kNjJpLS1UaVUyM0NtODMyZVpxU25uYTFiTl9BdHJXdU5F',
    },
    {
      src: 'https://an2-img.amz.wtchn.net/image/v2/1vHVMgi5VwonuTKYmV19fQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2R5ZVRCNmFXTnZhVEUxZDJseWVHbG5kVzFwSW4wLmRielV6R015V1NBdGY3Qmk5bEhxeThkYTF3RkJOTkFfRnRHSEhNOTBpNkE',
    },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });

  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <ContainerDiv>
      <SlideDiv>
        <BtnDiv
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </BtnDiv>
        <WindowDiv>
          <FlexBoxDiv style={style}>
            {images.current.map((img, i) => (
              <ImageDiv
                key={i}
                style={{ backgroundImage: `url(${img.src})` }}
              ></ImageDiv>
            ))}
          </FlexBoxDiv>
        </WindowDiv>
        <BtnDiv
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </BtnDiv>
      </SlideDiv>
      <PositionDiv>
        {images.current.map((x, i) => (
          <div key={i} className={i === current ? 'dot current' : 'dot'}></div>
        ))}
      </PositionDiv>
    </ContainerDiv>
  );
};

export default Carousel;
