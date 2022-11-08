import '../App.css';

import React, {useState, useEffect} from 'react'
import Snowfall from 'react-snowfall'
import Santa from '../component/Assets/santa-claus.png'
import Back from '../component/Assets/back.jpg'
import Elf from '../component/Assets/elf.png'
import Snowman from '../component/Assets/snowman.png'
import grinch from '../component/Assets/grinch.png'
import Gift from '../component/Assets/gift.png'
import gifts from '../component/Assets/text.png'

const Game = ({id, owned, close, expires}) => {

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
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
          </>
              )
      } else if (spin && ring1 == undefined) {
          return (
            <>
              <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
              <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
              <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
              <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            </>
          )
      } else if (ring1 >= 1 && ring1 <= 50 ) {
          return (
            <>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            </>
          )  
      } else if (ring1 > 50 && ring1 <= 75) {
          return (
            <>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
            </>
          )  
      } else if (ring1 > 75 && ring1 <= 95) {
          return (
              <>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
              </>
          )  
      } else if (ring1 > 95 && ring1 <= 100) {
          return (
              <>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
              <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
              </>
          )  
      }
 }

 function row2() {

    if (!spin) {
      return (
        <>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
        </>
        )
    } else if (spin && ring2 == undefined) {
      return (
          <>
          <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
          <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
          <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
          <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
          </>
      )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
          <>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
          </>
        )  
    } else if (ring2 > 50 && ring2 <= 75) {
        return (
          <>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
          <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
          </>
        )  
    } else if (ring2 > 75 && ring2 <= 95) {
        return (
            <>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
            </>
        )  
    } else if (ring2 > 95 && ring2 <= 100) {
        return (
            <>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
            </>
        )  
  }
}

 function row3() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
        </>
            )
    } else if (spin && ring3 == undefined) {
    return (
        <>
        <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
        <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
        <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
        <div className="ringMoving">🍋</div>
        <div className="ringMoving">🍍</div>
        <div className="ringMoving"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
            <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
                <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
                <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
                <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
                    <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
                    <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
                    <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={grinch} /></div>
                        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Santa} /></div>
                        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Elf} /></div>
                        <div className="ringEnd"><img className='mt-[4px] w-[60px]' src={Snowman} /></div>
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

    const Data = [
        {
            id: 1,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        },
        {
            id: 2,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        },{
            id: 3,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        },
        {
            id: 4,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
        ,
        {
            id: 5,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
        ,
        {
            id: 6,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
        ,
        {
            id: 7,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
        ,
        {
            id: 8,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
        ,
        {
            id: 9,
            Name: "Aav",
            ticket: '5 эрх',
            point: '250 оноо',
            img: Santa
        }
    ]

    return (
        <div style={{ backgroundImage: `url(${Back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="pt-2 absolute overflow-y-scroll bg-blue-500 flex h-screen flex-col w-full max-w-[500px] left-0 right-0 m-auto items-center">
            <div className='flex flex-col justify-center items-center'>
                <img className='w-64' src={gifts} />
            </div>
            <div className='absolute top-28 w-full h-[55%] px-5 pt-5'>
                <div className='relative'>
                    <div className='absolute -top-36 w-full'>
                        <div className='flex justify-center items-center'>
                            <img className=' max-w-[335px]' src={Gift} />
                        </div>
                    </div>
                    <div className="border-dotted mt-[152px] flex w-full h-[150px] overflow-hidden justify-evenly flex-row"> 
                        <div className="row">
                            {row1()}
                        </div>
                        
                        <div className="row">
                            {row2()}
                        </div>
                        
                        <div className="row">
                            {row3()}
                        </div>
                    </div>
                    <div className="slotFoot absolute top-[134px]">
                        <button className="text-white bg-red-500 h-[55px] w-36 rounded-2xl" onClick={() => play()}>Тоглох</button>
                        {/* <h1 style={{backgroundColor: '#C81E37'}} className="h-14 flex justify-center items-center w-64 rounded-lg text-white mb-10">
                            {premio()}
                        </h1> */}
                    </div>
                </div>
            </div>
            <div className='absolute top-[480px] bg-white w-[90%] mt-14 rounded-xl'>
                <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                        <img className='w-12 h-12 rounded-full' src={Santa} />
                        <div className=''>
                            <h1 className=' text-xs'>Багийн гишүүн-0</h1>
                            <h1 className=' font-semibold'>Багийн нэр</h1>
                        </div>
                    </div>
                    <div className='bg-red-500 text-white w-[40%] text-center rounded-l-md rounded-tl'>
                        <h1>Нийлбэр оноо</h1>
                        <p>0’000</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[15%] px-5 overflow-y-scroll mt-4 absolute top-[570px]'>
                {
                    Data.map((item , key) => {
                        return(
                            <div key={key} className='flex items-center justify-between border-b py-2'>
                    <img className='w-12' src={item.img} />
                    <p>{item.Name}</p>
                    <p>{item.ticket}</p>
                    <p>{item.point}</p>
                </div>
                        )
                    })
                }
            </div>  
             <div className='bg-water-blue h-24 rounded-t-md w-full absolute bottom-0 flex justify-center items-center'>
                <div className='flex justify-between items-center w-full space-x-2 px-2 text-white text-xs'>
                    <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/rule'>
                        <h1>Тоглоомын дүрэм</h1>
                    </a>
                    <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/prize'>
                        <h1>Шагналын сан</h1>
                    </a>
                    <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/prize'>
                        <h1>Leader board</h1>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Game;
