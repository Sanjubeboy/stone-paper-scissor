import React, { useState } from 'react'
import './Stone.css';

function Stone() {

    const [botscore, setbot] = useState(0)
    const [playerscore, setplayer] = useState(0)
    const [userinput, setInput] = useState(0)
    const [playerout, setpout] = useState("none")
    const [botout, setbout] = useState("none")

    const handlestone = () =>{
        
        console.log(userinput)
        setInput(1)
        setpout("stone")
        calculateScore(1)

    }

    const handlepaper = () =>{

        setInput(2)
        setpout("paper")
        calculateScore(2)

    }

    const newset = (x) =>{
        if(x === 1)
        {
            setbout("stone")
        }
        if(x===2)
        {
            setbout("paper")
        }
        if(x===3)
        {
            setbout("scissor")
        }

    }

    const handlescissor = () =>{

        setInput(3)
        setpout("scissor")
        calculateScore(3)

    }


    const calculateScore = (x) =>{

        


        let a = Math.floor(Math.random()*(3))+1

        newset(a)

        if(x === a)
        {
            setbot(botscore+0)
            setplayer(playerscore+0);
        }

        else{

        

            if(x===1)
            {
                if(a===2)
                {
                    setbot(botscore+1)
                }
                if(a===3)
                {
                    setplayer(playerscore+1)
                }
            }

            if(x===2)
            {
                if(a===1)
                {
                    setplayer(playerscore+1)
                }
                if(a===3)
                {
                    setbot(botscore+1)
                }
            }

            if(x===3)
            {
                if(a===1)
                {
                    setbot(botscore+1)
                }
                if(a===2)
                {
                    setplayer(playerscore+1)
                }
            }
        }


        if(playerscore === 5)
        {
            alert("Player wins the match");
            setplayer(0)
            setbot(0)
        }

        if(botscore === 5)
        {
            alert("Bot wins the match")
            setplayer(0)
            setbot(0)
        }

    }

  return (
    <React.Fragment>
    <div className='container'>
        <div className='display'>
        <div className='player'>
            <h1 className='head'>You</h1>
            <img className='img1' src='https://p.kindpng.com/picc/s/146-1468390_transparent-shadow-person-png-missing-profile-picture-icon.png' alt=''/>
            <h1 className='head'>{playerout}</h1>

        </div>

        <div className='bot'>
            <h1 className='head'>Bot</h1>
            <img className='img' src='https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78=' alt=''/>
            <h1 className='head'>{botout}</h1>
        </div>
        </div>

        <div className='options'>
            <button className='btn' onClick={handlestone}>Stone</button>
            <button className='btn' onClick={handlepaper}>Paper</button>
            <button className='btn' onClick={handlescissor}>Scissor</button>
        </div>

        {/* <div className='Score'> */}

            <div className='sc'>

                <div className='ind'>
                    <h1>Player</h1>
                    <h1 className='head1'>{playerscore}</h1>
                </div>
                <div>
                    <h1>Bot</h1>
                    <h1 className='head1'>{botscore}</h1>
                </div>
            </div>

        {/* </div> */}
    </div>
    </React.Fragment>
  )
}

export default Stone