import React from 'react'
import excited from '../excited.gif'

function Result(props){
    return(
        <div className="result">
            Awesome! Did you know you just saved <strong>{props.quizResult} filing with Credit Karma! </strong>!
            <br/><br/>
            <a href= "https://thecollegeinvestor.com/15201/comparing-prices-turbotax-hr-block-tax-act/"></a>
            <br/><br/>
            <img src={excited}></img>
        </div>

    )
}

export default Result
