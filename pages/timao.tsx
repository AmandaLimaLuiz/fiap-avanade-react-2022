import { NextPageContext } from 'next'
import React, {useState, useEffect} from 'react'
import Button from '../components/Form/Button/Button'

type TimaoProps = {
frase: string,
autor:string
}

async function getFrase(){
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random()* data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    
    return{
        frase,autor
    }
}


export default function Timao(props: TimaoProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)
    const [contador, setContador] = useState<Number>(0);
    useEffect(()=>{    
    getFrase().then((data)=>{console.log(`Executou ${contador} vezes`, data)});   
    setContador(+1); 
    },[autor,frase]);

  return (
    <>
    <h1>{frase?frase:"Seja Bem vindo!"}</h1>
    {autor && <h2>{autor}</h2>}
    <Button onClick={(e) => setAutor("Amanda")}>Mudar Autor</Button>
    <Button onClick={(e) => setFrase("Capricho! É fazer o melhor que você pode, na condição que você tem, em quanto não tem condições melhores, pra fazer melhor ainda!")}>Mudar Frase</Button>

    </>
  )
}

//Dry - Don't repeat yourself

Timao.getInitialProps = async (ctx: NextPageContext) => {
    
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random()* data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return{
        frase,
        autor,
    }
}
