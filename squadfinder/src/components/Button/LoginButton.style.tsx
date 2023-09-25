import styled from "styled-components";
import "./styles.css";


export const LoginButton = styled.button`
margin-top: 60px;
  font-family: var(--font-sans);
  font-weight: var(--font-weight-6);
  font-size: var(--font-size-5);
  color: #fff;
  background: #A1A2B2;
  border: 0;
  padding: var(--size-4) var(--size-8);
  transform: translateY(calc(var(--y, 0) * 1%)) scale(var(--scale));
  transition: transform 0.1s;
  position: relative;


&:hover {
  --y: -10;
  --scale: 1.1;
  --border-scale: 1;
}

&:active {
  --y: 5%;
  --scale: 0.9;
  --border-scale: 0.9, 0.8;
}

&:before {
  content: "";
  position: absolute;
  inset: calc(var(--size-3) * -1);
  border: var(--size-2) solid #2B3080;
  border-radius: 8px;
  transform: scale(var(--border-scale, 0));
  transition: transform 0.125s;
  
  --angle-one: 105deg;
  --angle-two: 290deg;
  --spread-one: 30deg;
  --spread-two: 40deg;
  --start-one: calc(var(--angle-one) - (var(--spread-one) * 0.5));
  --start-two: calc(var(--angle-two) - (var(--spread-two) * 0.5));
  --end-one: calc(var(--angle-one) + (var(--spread-one) * 0.5));
  --end-two: calc(var(--angle-two) + (var(--spread-two) * 0.5));
  
  mask: conic-gradient(
    transparent 0 var(--start-one),
    white var(--start-one) var(--end-one),
    transparent var(--end-one) var(--start-two),
    white var(--start-two) var(--end-two),
    transparent var(--end-two)
  )
  
  z-index: -1;
}
`
