import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  margin-bottom: 7rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const WhiteSpan = styled.span`
  -webkit-text-fill-color: initial;
  color: rgb(255, 255, 255);
`

export const Img = styled.img`
  width: 60%;
  height: 60%
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    height: 70%;
    padding: 30px;
  }
`
