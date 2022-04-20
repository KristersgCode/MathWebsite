import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, Img, ImgWrap, } from './InfoElements';


export const InfoSection = ({ lightBg, id, imgStart, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>                        
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection 
