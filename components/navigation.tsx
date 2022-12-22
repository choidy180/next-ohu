import Router, { useRouter } from "next/router";
import styled from "styled-components";

const Navigation = () => {
    const router = useRouter();
    return (
        <Container>
            <Box>
                <Left>
                    <Logo onClick={()=> Router.push('/')}>오늘의 집</Logo>
                    <MenuBar>
                        <span>커뮤니티</span>
                        <span>스토어</span>
                        <span>이사/시공/수리</span>
                    </MenuBar>
                </Left>
                <Right>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cart">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <a href="/">로그인</a>
                    <a href="/" className="border-left">회원가입</a>
                    <a href="/" className="border-left">고객센터</a>
                    <button onClick={()=> console.log(router.asPath)}>
                        글쓰기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </Right>
            </Box>
            <Box className="nav">
                <Left className="nav">
                    <span onClick={()=> Router.push('/')} className={router.asPath === '/' ? 'active' : ''}>홈</span>
                    <span onClick={()=> Router.push('/content/follow')} className={router.asPath === '/content/follow' ? 'active' : ''}>팔로잉</span>
                    <span onClick={()=> Router.push('/content/card')} className={router.asPath === '/content/card' ? 'active' : ''}>사진</span>
                    <span onClick={()=> Router.push('/content/house-warming/self')} className={router.asPath === '/content/house-warming/self' ? 'active' : ''}>집들이</span>
                    <span onClick={()=> Router.push('/content/advices')} className={router.asPath === '/content/advices' ? 'active' : ''}>노하우</span>
                    <span onClick={()=> Router.push('/content/house-warming/pro')} className={router.asPath === '/content/house-warming/pro' ? 'active' : ''}>전문가집들이</span>
                    <span onClick={()=> Router.push('/content/self_interior')} className={router.asPath === '/content/self_interior' ? 'active' : ''}>셀프가이드</span>
                    <span onClick={()=> Router.push('/content/questions')} className={router.asPath === '/content/questions' ? 'active' : ''}>질문과답변</span>
                    <span onClick={()=> Router.push('/content/event')} className={router.asPath === '/content/event' ? 'active' : ''}>이벤트</span>
                </Left>
                <Right className="nav">
                    <p className="rank">
                        1. 
                        <svg className="up" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        블렌더
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="more">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </p>
                </Right>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
`
const Box = styled.div`
    width: 100%;
    max-width: 1256px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    &.nav{
        padding: 0px 50px;
        ::before{
            content: '';
            width: 150vw;
            height: 1.4px;
            background-color: #e8e8e8;
            position: absolute;
            top: 0px;
            left: -50vw;
        }
        ::after{
            content: '';
            width: 150vw;
            height: 1.4px;
            background-color: #e8e8e8;
            position: absolute;
            bottom: 0px;
            left: -50vw; 
        }
    }
`
const Left = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
    &.nav{
        height: 100%;
        span{
            padding: 16px 6px;
            margin: 0 5px;
            font-weight: 400;
            cursor: pointer;
            :hover{
                color: var(--logo-main-color);
            }
            &.active{
                color: var(--logo-main-color);
                ::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background-color: var(--logo-main-color);
                    z-index: 999;
                }
            }
        }
    }
`

const Right = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &.nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 300px;
        height: 100%;
        p.rank{
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            svg.up{
                width: 16px;
                height: 16px;
                color: #F05656;
                margin: 0 8px;
            }
            svg.more{
                position: absolute;
                width: 18px;
                height: 18px;
                right: 0px;
            }
        }
    }
    button{
        cursor: pointer;
        padding: 8px 14px;
        width: auto;
        height: 100%;
        background-color: var(--logo-main-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        border: none;
        outline: none;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
        margin-left: 8px;
        svg{
            margin-top: 2px;
            margin-left: 4px;
            width: 20px;
            height: 20px;
        }
        :hover{
            background-color: var(--logo-main-hover);
        }
    }
    a{
        font-size: 14px;
        font-weight: 400;
        padding: 0 12px;
        letter-spacing: -.4px;
        &.border-left{
            border-left: 1px solid #EAEDEF;
        }
    }
    .cart{
        width: 24px;
        height: 24px;
        margin-right: 18px;
        cursor: pointer;
        :hover{
            color: var(--logo-main-color);
        }
    }
`

const Logo = styled.span`
    font-size: 20px;
    color: #000000;
    letter-spacing: -1px;
    cursor: pointer;
`
const MenuBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-left: 42px;
    span{
        font-size: 18px;
        letter-spacing: -.6px;
        cursor: pointer;
        :hover{
            color: var(--logo-main-color);
        }
    }
`

export default Navigation;