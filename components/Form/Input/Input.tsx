import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react'


const InputData = styled.input`
width: 190px;
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
appearance: none;
border-radius: .900rem;`;

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputData {...props} />
  )
}
