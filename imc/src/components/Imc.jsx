import { useState } from 'react'
import './imc.css'

export default function IMC() {

    const[peso, setPeso] = useState(null)
    const[altura, setAltura] = useState(null)
    const[resultado, setResultado] = useState("")
    // const[condicao, setCondicao] = useState("")

    function calcular(e) {
        e.preventDefault();
        if(resultado === 0){
            setResultado("")
        }
        else{
            setResultado(peso/(altura*altura))
            console.log(resultado)
        }
        
        // exibirResultado()
    }

    // function exibirResultado(){
    //     switch(resultado){
    //         case 0:
    //             setResultado("")
    //             break
    //         case resultado <= 18.5:
    //             setCondicao("Abaixo do Peso")
    //             break
    //         case resultado <= 24.9:
    //             setCondicao("Dentro do Peso")
    //             break
    //         case resultado <= 29.9:
    //             setCondicao("Excesso de Peso")
    //             break
    //         case resultado >= 30:
    //             setCondicao("Obesidade")
    //             break
    //     }
    // }

  return (
    <div>
        <header>
            <h1>Cálculo do IMC</h1>
        </header>
        <form onSubmit={calcular}>
            
            <div>
            <label htmlFor="peso">
                Peso:
            </label>
            <input type="text" id='peso' onChange={(e)=>setPeso(e.target.value)}/>
            </div>

            
            <div className='altura'>
                <label htmlFor="altura">Altura:</label> 
                <input type="text" id='altura' onChange={(e)=>setAltura(e.target.value)}/>
            </div>
            
            
            <p>Resultado: {resultado}</p>
            {/* <p>Condição: {condicao}</p> */}


            <button type='submit'>Calcular</button>
        </form>
    </div>
  )
}
