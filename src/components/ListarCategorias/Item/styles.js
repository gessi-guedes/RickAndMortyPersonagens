import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 30%;
    padding: 18px;
    margin: 1px;
    border: 2px solid lightgrey;
    border-radius: 20px;
    text-align: center;
    transition-duration: 0.5s;
    background-color:light black;
    max-height:90vh;
    &:hover{

        box-shadow: 1px 1px 10px black;
    }
`;

export const StyledName = styled.h1`
  font-size: 21px;
  color: #333;
  text-align: center;
  color:white;
  border:2px solid lightgrey;
  border-radius:2px;
  padding:2px;

    &:hover{
      color:pink;
      box-shadow:1px 1px 10px black;
    }
  `;

  export const StyledInfo = styled.p`
    fount-size:18px;
    color:white;

    &:hover{
      transform:scale(1.07);
      color: pink;

    }
    
  `;

  export const StyledImg = styled.img`
    width:70%;
    border-radius:10px;

    &:hover{
      transform:scale(1.04);

    }
  `;
