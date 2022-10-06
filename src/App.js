import './App.css';

import React, {useState, useEffect} from 'react'
import Snowfall from 'react-snowfall'
import Santa from './component/santa-claus.png'
import Elf from './component/elf.png'
import Snowman from './component/snowman.png'
import grinch from './component/grinch.png'

const App = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState()
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(100000)


    useEffect(() => {
        win()
    }, [ring3])


 function row1() {

    if (!spin) {
      return (
          <>
          <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
          <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
          <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
          <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
          </>
              )
      } else if (spin && ring1 == undefined) {
          return (
            <>
              <div className="ringMoving"><img className=' w-20' src={Santa} /></div>
              <div className="ringMoving"><img className=' w-20' src={Elf} /></div>
              <div className="ringMoving"><img className=' w-20' src={Snowman} /></div>
              <div className="ringMoving"><img className=' w-20' src={grinch} /></div>
            </>
          )
      } else if (ring1 >= 1 && ring1 <= 50 ) {
          return (
            <>
            <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
            <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
            <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
            <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
            </>
          )  
      } else if (ring1 > 50 && ring1 <= 75) {
          return (
            <>
            <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
            <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
            <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
            <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
            </>
          )  
      } else if (ring1 > 75 && ring1 <= 95) {
          return (
              <>
              <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
              <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
              <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
              <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
              </>
          )  
      } else if (ring1 > 95 && ring1 <= 100) {
          return (
              <>
              <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
              <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
              <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
              <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
              </>
          )  
      }
 }

 function row2() {

    if (!spin) {
      return (
        <>
        <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
        <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
        <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
        <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
        </>
        )
    } else if (spin && ring2 == undefined) {
      return (
          <>
          <div className="ringMoving"><img className=' w-20' src={Santa} /></div>
          <div className="ringMoving"><img className=' w-20' src={Elf} /></div>
          <div className="ringMoving"><img className=' w-20' src={Snowman} /></div>
          <div className="ringMoving"><img className=' w-20' src={grinch} /></div>
          </>
      )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
          <>
          <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
          <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
          <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
          <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
          </>
        )  
    } else if (ring2 > 50 && ring2 <= 75) {
        return (
          <>
          <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
          <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
          <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
          <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
          </>
        )  
    } else if (ring2 > 75 && ring2 <= 95) {
        return (
            <>
            <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
            <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
            <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
            <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
            </>
        )  
    } else if (ring2 > 95 && ring2 <= 100) {
        return (
            <>
            <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
            <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
            <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
            <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
            </>
        )  
  }
}

 function row3() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
        <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
        <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
        <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
        </>
            )
    } else if (spin && ring3 == undefined) {
    return (
        <>
        <div className="ringMoving"><img className=' w-20' src={Santa} /></div>
        <div className="ringMoving"><img className=' w-20' src={Elf} /></div>
        <div className="ringMoving"><img className=' w-20' src={Snowman} /></div>
        <div className="ringMoving">🍋</div>
        <div className="ringMoving">🍍</div>
        <div className="ringMoving"><img className=' w-20' src={grinch} /></div>
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
            <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
            <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
            <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
                <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
                <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
                <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
                    <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
                    <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
                    <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd"><img className=' w-20' src={grinch} /></div>
                        <div className="ringEnd"><img className=' w-20' src={Santa} /></div>
                        <div className="ringEnd"><img className=' w-20' src={Elf} /></div>
                        <div className="ringEnd"><img className=' w-20' src={Snowman} /></div>
                        </>
                            )  
                    }
     }

     function win() {
      if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
          setPrice(1)
      } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
          setPrice(2)
      } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
          setPrice(3)
      } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
          setPrice(4)
      } else {
          setPrice(0)
      } 
  }

 function rand() {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
      setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

function play() {
    if (ring3 > 1 || !spin){
    setRealBet(input)
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - input)
    setJackpot(jackpot + (input / 2))
    setTimeout(function(){
   rand()
    }, 2000)
  }
}


function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
        setPrice(1)
        setBalance(balance + (balance * 15))
    } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
        setPrice(2)
        setBalance(balance + (balance * 20))
    } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
        setPrice(3)
        setBalance(balance + (balance * 25))
    } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
        setPrice(4)
        setBalance(balance + jackpot)
        setJackpot(0)
    } else {
        setPrice(0)
    } 
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd flex justify-between items-center"><img className='w-12' src={Elf} /> {"15 оноо нэмлээ " + (realBet + 15)}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd flex justify-between items-center"><img className='w-12' src={Snowman} /> {" 20 оноо нэмлээ " + (realBet + 20)}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd flex justify-between items-center"><img className='w-12' src={grinch} /> {" 25 оноо хасагдлаа " + (realBet - 25)}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd flex justify-between items-center"><img className='w-12' src={Santa} /> {" Jackpot! You've won: " + (jackpot)}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 So close! But no luck...</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Not enough funds</span> </p>
            )
}
}

function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if (value.match(regex) && parseInt(value) >= 0 || value === "") {
        setInput(value);
    }
}

    return (
        <div className="z-50 absolute flex bg-graysss h-full flex-col w-full max-w-[500px] justify-between left-0 right-0 m-auto items-center">
          <div className=' -z-20'>
          {/* style={{ background: '#282c34',}} */}
          <Snowfall />
          </div>
            <h1 style={{backgroundColor: '#C81E37'}} className="h-14 flex justify-center items-center w-64 rounded-lg text-white mt-10">Good Luck</h1>
            <div className='w-full px-5'>
            <div className='border-2 border-red-500 rounded-xl'>
              <div className="flex w-full h-[150px] overflow-hidden justify-center flex-row p-2"> 
                  <div className="row rounded-xl">
                      {row1()}
                  </div>
                  <div className="row rounded-xl">
                      {row2()}
                  </div>
                  <div className="row rounded-xl">
                      {row3()}
                  </div>
              </div>
              <div className="slotFoot">
                <button style={{backgroundColor: '#C81E37'}} className="spinButton text-white rounded-full p-10 animate-pulse" onClick={() => play()}>Spin</button>
            </div>
            </div>
            </div>
            <h1 style={{backgroundColor: '#C81E37'}} className="h-14 flex justify-center items-center w-64 rounded-lg text-white">
                {premio()}
            </h1>
            
        </div>
        
    )
}

export default App;
