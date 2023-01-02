import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
  <AutoHeightImageWrapper>
    <Image layout="fill" objectFit='cover' className="autoImage" {...props} />
  </AutoHeightImageWrapper>
);

const AutoHeightImageWrapper = styled.div`
    width: 100%;
    & > span {
        position: unset !important;
        & .autoImage {
            object-fit: contain !important;
            position: relative !important;
            height: auto !important;
        }
    }
`;

export default AutoHeightImage;

