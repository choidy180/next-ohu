import Image from "next/image"
import { useRef, useState } from "react";
import styled from "styled-components"

export default function Home() {
    const image_container_box = useRef<any>(null);
    const image_container_data = [0,1,2,3,4,5,6,7,8,9]; 
    const [imageCount, setImageCount] = useState<number>(0);
    const handleImagePrev = () => {
        if(imageCount !== 0){
            setImageCount(imageCount - 1);
            image_container_box.current.style.transform = `translateX(-${260 * (imageCount - 1)}px)`;
        }
    }
    const handleImageNext = () => {
        if(imageCount !== 9){
            setImageCount(imageCount + 1);
            image_container_box.current.style.transform = `translateX(-${260 * (imageCount + 1)}px)`;
        }
    }
    return (
        <Container>
          <TopBox>
              <div className="left">
                <Image
                    src={'/images/166849926723253580.jpg'}
                    layout='fill'
                    objectFit='cover'
                    alt=""
                    className='background'
                />
                <div className="dark-back"></div>
                <p className="title">디자이너 부부의🤍따뜻한 화이트톤이 돋보이는 집</p>
                <div className="user-profile">
                    <div className="image-box">
                      <Image
                          src={'/images/iu-185.jpg'}
                          layout='fill'
                          objectFit='cover'
                          alt=""
                      />
                    </div>
                    <span>오늘도날씨는맑음</span>
                </div>
              </div>
              <div className="right">
                  <div className="image-container">
                      <div 
                          className="container" 
                          ref={image_container_box}
                          style={{transform: `translateX(-0px)`}}
                      >
                        {image_container_data.map((content, i) => (
                            <div 
                                key={i} 
                                className="image-content"
                            >
                                <Image
                                    src={'/images/20221207_234147014.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    alt=''
                                />
                                <p>{content}</p>
                            </div>
                        ))}
                      </div>
                  </div>
                  <span className="button left-button" onClick={handleImagePrev}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                  </span>
                  <span className="button right-button" onClick={handleImageNext}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </span>
                  <div className="count">
                      <div className="back-dark"/>
                      <span>{`${imageCount + 1} / ${image_container_data.length}+`}</span>
                  </div>
              </div>
          </TopBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1256px;
    padding: 20px 56px;
`
const TopBox = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        width: calc(100% - 300px);
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        .dark-back{
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(20, 20, 20, 0) 10%,
                rgba(20, 20, 20, 0.05) 25%,
                rgba(20, 20, 20, 0.1) 50%,
                rgba(20, 20, 20, 0.3) 100%,
                rgba(20, 20, 20, 0.5) 100%
            );
        }
        .title{
            position: absolute;
            left: 30px;
            bottom: 40px;
            color: #FFFFFF;
            font-size: 22px;
        }
        .user-profile{
            position: absolute;
            bottom: 16px;
            left: 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .image-box{
              width: 32px;
              height: 32px;
              border-radius: 50%;
              overflow: hidden;
            }
            span{
              font-size: 18px;
              color: #FFFFFF;
              margin-left: 8px;
            }
        }
        .background{
            transition: all .15s ease-in-out;
        }
        :hover{
            .background{
                scale: calc(1.05);
            }
        }
    }
    .right{
        width: 260px;
        height: 100%;
        border-radius: 8px;
        .image-container{
            position: absolute;
            display: flex;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            overflow: hidden;
            .container{
                position: absolute;
                display: flex;
                top: 0;
                left: 0;
                width: 1000%;
                height: 100%;
                transition: all ease-in-out .2s;
            }
            .image-content{
                width: 10%;
                height: 100%;
                transition: all ease-in-out .2s;
                cursor: pointer;
                :hover{
                    scale: calc(1.05);
                }
            }
        }
        .button{
            width: 42px;
            height: 42px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            z-index: 999999; 
            background-color: #FFFFFF;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            svg{
                width: 36px;
                height: 36px;
            }
            &.left-button{
                left: -20px;
                svg{
                    margin-left: -4px;
                }
            }
            &.right-button {
                right: -20px;
                svg{
                    margin-right: -4px;
                }
            }
        }
        .count{
            position: absolute;
            right: 12px;
            bottom: 12px;
            padding: 5.5px 12.5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 28px;
            overflow: hidden;
            .back-dark{
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: #000000;
                opacity: 0.7;
            }
            span{
                color: #FFFFFF;
                font-size: 14px;
            }
        }
    }
`