import React from 'react'
import styled from 'styled-components'
import backImg from '../Images/homeBackground.jpg'

const Background = styled.div`
    border:1px solid;
    background-image: url(${backImg});
    height: 100vh;
    width: 100%;
    background-repeat:no-repeat;
    background-size:cover;
`

const Button = styled.button`
   flex-direction:row;
   justify-content:center;
    margin:2%;
    
	color:white;
    background-color:black;
    font-color:white;
    border: 3px solid black;
    border-radius:10px;
    padding:2%;
    font-size:1.2rem;
    font-family:'Roboto';
`

const Buttons = styled.div`

`

const Display = styled.div`
    font-family: 'Roboto';
    font-size:20px;

    margin:5%;
    
    border-radius:10px;
    text-align:center;
    padding:5%;
    
`


function Homepage() {

    return (
        <Background>

            <Display>
                <h1>Welcome to Anywhere Fitness</h1>

                <Buttons> 
                        <Button className = 'Sign-In'>Login</Button>

                        <Button className = 'Sign-Up'>Sign Up</Button>
                </Buttons> 

            </Display>

        </Background>

       
    )
}
export default Homepage