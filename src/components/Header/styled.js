import styled from "styled-components";
;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing:border-box;
  .logo{
    width: 70px;
    height: 70px;
    margin-right: 2rem;
  }
  .copy {
    text-align: center;
    &-title{
      text-transform: uppercase;
      color: #f00;
    }
  }
`;