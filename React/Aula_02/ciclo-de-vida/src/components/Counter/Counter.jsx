import React from "react";

export class Counter extends React.Component {

    constructor(){
        super();
        console.log('Contruindo a classe counter!') //etapa 01
    }

    componentDidMount(){
        console.log("O componente montou!") //etapa 03
    }
    render() {
        console.log("Renderizando o componente counter...") //etapa 02
        return (
            <div>
                <h1>0</h1>

                <button>Diminui</button>
                <button>Aumenta</button>
            </div>
        )
    }
}