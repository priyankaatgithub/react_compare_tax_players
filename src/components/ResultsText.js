import React from 'react'

function DeluxePrice(props){
    return <h1> You just saved 100$ </h1>
}

function PremierPrice(props){
    return <h1> You just saved 120$ </h1>
}

function SBOPrice(props){
    return <h1> You just saved 220$ </h1>
}

function ResultsText(props){
    const quizResult = props.quizResult
    if(quizResult === 'deluxe'){
        return <DeluxePrice />
    }
    if(quizResult === 'premier'){
        return <PremierPrice/>
    }
    if(quizResult === 'sbo'){
        return <SBOPrice/>
    }
}

export default ResultsText