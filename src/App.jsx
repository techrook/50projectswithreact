import React, { useState, useRef, useEffect} from 'react'

function App() {

  const Ref = useRef(null);

  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) =>{
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total/1000)%60);
    const minutes = Math.floor((total/1000/60)%60);
    const hours = Math.floor((total/1000/60/60)%24);
    const days = Math.floor((total/1000/60/60) / 24);
    return{
      total, days, hours, minutes, seconds
    };
  }

  const startTimer = (e) =>{
    let { total, days, hours, minutes, seconds}
          =getTimeRemaining(e);

    if (total >= 0){

      setTimer(
              (days > 9 ? days :'0'+days ) + ':'+
              (hours > 9 ? hours :'0'+hours ) + ':' +
             (minutes > 9 ? minutes :'0'+minutes ) + ':'
             +(seconds > 9 ? seconds : '0' +seconds)

      )

    }
  }




    const clearTimer = (e) => {
      setTimer('00:00:00:00');

      if(Ref.current) clearInterval(Ref.current);
      const id = setInterval(() =>{
        startTimer(e);
      }, 1000)

      Ref.current = id;
    }


    const getDeadTime = () =>{
      let deadline = new Date();
 
      deadline.setHours(deadline.getHours() + 1152);

      return deadline;
    }


    useEffect(() =>{
      clearTimer(getDeadTime());
    }, []);


    const onClickReset = () =>{
      clearTimer(getDeadTime());
    }



  return (
    <div>

      <h1 className='text-center text-2xl'>50 days react countdown</h1>
      <p className=' text-xl '>countdown started from day 47</p>
      <h2 className='text-4xl text-center bg-gray-500 pt-10 my-40'>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
    </div>
  )
}

export default App