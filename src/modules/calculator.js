const calc = () => {

   // const square = document.querySelector('.calc-square')
   // const count = document.querySelector('.calc-count')
   // const day = document.querySelector('.calc-day')

   // square.addEventListener('input', (e) => {
   //    e.target.value = e.target.value.replace(/\D+/, '')
   // })
   //  count.addEventListener('input', (e) => {
   //    e.target.value = e.target.value.replace(/\D+/, '')
   // })
   //  day.addEventListener('input', (e) => {
   //    e.target.value = e.target.value.replace(/\D+/, '')
   // })

   const calcItems = document.querySelectorAll('.calc-item')
  
   calcItems.forEach(item => {
      if (!item.classList.contains('calc-type')) {
         item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '')
         })
      }
   })

}

export default calc