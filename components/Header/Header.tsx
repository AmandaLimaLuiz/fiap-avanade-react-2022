import React, { useState } from 'react';
//import styles from '../../styles/Header.module.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const HeaderPage = styled.header`background-color: #e1e1e1;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  color: black;
`;



// Type não tem extends
type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
  name?: string;
}
/* type UserType = {
  email: string;
  password: string;
}
//Type permite juntar, Interface não.
type User = HeaderProps | UserType

// Interface tem extends
interface IHeaderProps{
  menu?: Array<string>;
  pesquisar?: string;
  name?: string;
} */

//CSS
// 5 maneiras diferentes de utilizar css.
// 1° Importar css no arquivo .tsx  - import './Header.css'
// 2° Utilizar css modules - import styles from './Header.module.css"
// 3° Utilizando style-components ou Sass - import styled from 'styled-componente'
// 4° Utilizando estilização direto no component - Utilizando o CSS-in-JS
// 5° Utilizando uma biblioteca de estilização - Ex.: Material-UI - 4 usa styled componentes - 5 usa Emotion CSS
export default function Header(props:HeaderProps) {

  const [userAuth, setUserAuth] = useState<boolean>(true)
  const [nameUser, setNameUser] = useState<string | undefined>(props.name);

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
        {userAuth && (<div>
          <span>Seja bem Vindo {nameUser?nameUser:" visitante"}</span>
        </div>)}
        <div>
            <Input type="text" placeholder='Pesquisar' />
            <Button>{props.pesquisar? props.pesquisar:"Search"}</Button>
        </div>
    {/*</header>*/}
   </HeaderPage>
  )
}
