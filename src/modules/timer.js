
  const timer = (deadline) => {
      
      const timerHour = document.getElementById('timer-hours')
      const timerMinutes = document.getElementById('timer-minutes')
      const timerSeconds = document.getElementById('timer-seconds')
      const timerAction = document.querySelector('.timer-action')
 
     const getTimeRemaining = () => {
         
         let dateStop = new Date(deadline).getTime()
         let dateNow = new Date().getTime()
         let timeRemaining = (dateStop - dateNow) / 1000
         let hours = Math.floor(timeRemaining / 60 / 60)
         let minutes = Math.floor((timeRemaining / 60) % 60)
         let seconds = Math.floor(timeRemaining % 60)
         
         return { timeRemaining, hours, minutes, seconds }
         
     }

      const updateClock = (interval) => {
                             
         let getTime = getTimeRemaining()  

         if (getTime.timeRemaining <= 0) {
            timerHour.textContent = "00"
            timerMinutes.textContent = "00"
            timerSeconds.textContent = "00"
            timerAction.textContent = "На данный момент акция закончилась..."
            clearInterval(interval)
         } else {
         
         timerHour.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours
         timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes
         timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds
         }
      }
      
      const showTime = () => {
            
            let interval
            interval = setInterval(updateClock, 1000, interval)
            
      }
      updateClock()
      showTime()
}   
   
export default timer