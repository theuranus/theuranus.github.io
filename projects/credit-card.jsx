import { useEffect, useRef } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

const CreditCard = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    VanillaTilt.init([card1.current, card2.current], {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, [card1, card2]);

  return (
    <Section>
      <Card ref={card1}>
        <CardContent>
          <Debit>Debit Card</Debit>
          <Bank>Jameshanbank</Bank>
          <Chip src="/images/chip.png" />
          <Number>0123 4567 8910 1112</Number>
          <Valid>
            <span>
              Valid
              <br />
              thru
            </span>
            <span>10/23</span>
          </Valid>
          <CardHolder>Nguyen Thai Bao</CardHolder>
        </CardContent>
      </Card>
      <Card ref={card2}>
        <CardContent>
          <BlackBar />
          <CcvText>
            <h5>Authorized Signature-not valid unless signed</h5>
            <WhiteBar></WhiteBar>
            <Ccv>123</Ccv>
          </CcvText>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </CardContent>
      </Card>
      {/* <CardFront></CardFront> */}
    </Section>
  );
};

export default CreditCard;

const Text = styled.p`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: #fff;
  font-size: 10px;
  line-height: 1.4em;
  font-weight: 300;
`;

const Ccv = styled.div`
  position: relative;
  top: -35px;
  left: 395px;
  background: #ccc;
  color: #111;
  width: 50px;
  height: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBar = styled.div`
  position: relative;
  width: 400px;
  height: 40px;
  background: #fff;
  margin-top: 5px;
`;

const CcvText = styled.div`
  position: absolute;
  top: 120px;
  left: 30px;
  h5 {
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const BlackBar = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  top: 40px;
  background-color: #000;
`;

const Debit = styled.h3`
  position: absolute;
  left: 40px;
  top: 30px;
  color: #fff;
  font-weight: 500;
`;

const Bank = styled.h3`
  position: absolute;
  right: 40px;
  top: 25px;
  color: #fff;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
`;

const Chip = styled.img`
  position: absolute;
  top: 80px;
  left: 50px;
  max-width: 64px;
`;

const Number = styled.h3`
  position: absolute;
  bottom: 130px;
  left: 40px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 6px;
  font-size: 18px;
  text-shadow: 0 2px 1px #0005;
  font-family: "Orbitron", sans-serif;
`;

const Valid = styled.h5`
  position: absolute;
  bottom: 90px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 300;
  line-height: 1em;
  text-align: right;
  span:last-child {
    margin-left: 20px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

const CardHolder = styled.h5`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
`;

const Section = styled.section`
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  background-color: #1c1c25;
  &:before {
    content: "";
    position: absolute;
    bottom: -40%;
    left: 60%;
    width: 800px;
    height: 800px;
    background: linear-gradient(#f00, #f0f);
    border-radius: 50%;
  }
`;

const Card = styled.div`
  position: relative;
  width: 508px;
  height: 314px;
  transform-style: preserve-3d;
  perspective: 500px;
  border-radius: 15px;
  overflow: hidden;
  &:last-child {
    margin-left: 2rem;
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  transform-style: preserve-3d;
  transform: 1s;
  backdrop-filter: blur(10px);
  &:before {
    content: "";
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.5;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 40px;
    right: 80px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.7;
  }
`;
