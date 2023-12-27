import styled from "styled-components";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

//STYLED-COMPONENT START
const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
`;
const Wrapper = styled.div`
    background: linear-gradient(
            38.73deg,
            rgba(204, 0, 187, 0.15) 0%,
            rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
            141.27deg,
            rgba(0, 70, 209, 0) 50%,
            rgba(0, 70, 209, 0.15) 100%
        );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
//STYLED-COMPONENT END

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Body>
                <HeroSection />
                <Wrapper>
                    <Skills />
                    <Experience />
                </Wrapper>
            </Body>
        </>
    );
};

export default HomePage;
