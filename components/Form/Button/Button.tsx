import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react'

const ButtonData: React.FC<ButtonUnion> = styled.button`
width: 100px;
line-height: 30px;
border: none;
border-radius: .900rem;
margin-left: 10px;
&:hover{
  cursor:pointer;
  background-color: #fff;
  color: black;
  border: 1px solid #ced4da;
}
&:disabled{
    cursor: not-allowed;
}
`;

type ButtonProps = {
    children?: React.ReactNode
}

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
