const modal = () => {

   const modal = document.querySelector('.popup')
   const buttons = document.querySelectorAll('.popup-btn')
   const popupClose = modal.querySelector('.popup-close')
   const content = modal.querySelector('.popup-content')
   // console.log(content.getBoundingClientRect());
   // console.log(document.documentElement.clientWidth);

   
   let count = 0
   let idInterval

    
   buttons.forEach(btn => {

      btn.addEventListener('click', () => {
         modal.style.display = 'block'

         if (document.documentElement.clientWidth >= 768) {
         content.style.top = -360 + `px` 
         flyAnimate() 
         } 
      })
   })

   const flyAnimate = () => {
      count++
      idInterval = requestAnimationFrame(flyAnimate)

      if (count <= 80) {
         content.style.top = count + `px`
      }  else {
         cancelAnimationFrame(idInterval)
         count = 0
      }
   }

    
   popupClose.addEventListener('click', () => {
      modal.style.display = 'none'
   })
}

export default modal