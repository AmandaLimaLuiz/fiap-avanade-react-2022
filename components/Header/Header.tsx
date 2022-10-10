import React from 'react';
//import styles from '../../styles/Header.module.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const HeaderPage = styled.header`background-color: #e1e1e1;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  color: black;
`;
const Input = styled.input`
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

const Button = styled.button`
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
`;
type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
}


//CSS
// 5 maneiras diferentes de utilizar css.
// 1° Importar css no arquivo .tsx  - import './Header.css'
// 2° Utilizar css modules - import styles from './Header.module.css"
// 3° Utilizando style-components ou Sass - import styled from 'styled-componente'
// 4° Utilizando estilização direto no component - Utilizando o CSS-in-JS
// 5° Utilizando uma biblioteca de estilização - Ex.: Material-UI - 4 usa styled componentes - 5 usa Emotion CSS
export default function Header(props:HeaderProps) {
  return (
    //Utilizando Css modules
    //<header className={styles['menu-site']}>
    <HeaderPage>
        <div>Logotipo</div>
        <nav>
            <ul className={css 
              `width: 40%; 
              display: inline-flex; 
              margin: 0%;
              padding: 0% 10%;
              > li{
                min-width: 90px;
                text-align: center;
                list-style: none;
              }
              `}>
              <li>Home</li>
              <li>Produtos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
        </nav>
        <div>
            <Input type="text" placeholder='Pesquisar' />
            <Button>{props.pesquisar? props.pesquisar:"Search"}</Button>
        </div>
    {/*</header>*/}
   </HeaderPage>
  )
}
