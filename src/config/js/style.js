import styled from "@emotion/styled";

export const TextSize = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 45px;
  @media (max-width: 1200px) {
    font-size: 36px;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    font-size: 30px;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    font-weight: 500;
  }
`;
