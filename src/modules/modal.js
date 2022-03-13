const modal = () => {

   const modal = document.querySelector('.popup')
   const buttons = document.querySelectorAll('.popup-btn')
   const popupClose = modal.querySelector('.popup-close')
   const content = modal.querySelector('.popup-content')
   // console.log(content.getBoundingClientRect());
   // console.log(document.documentElement.clientWidth);
   
    
   buttons.forEach(btn => {

      btn.addEventListener('click', () => {
         modal.style.display = 'block'

         if (document.documentElement.clientWidth >= 768) {
         content.style.transform = `translateY(-150%)` 
         flyAnimate() 
         } 
      })
   })

   const flyAnimate = () => {
      
      if (!content.style.transform) {
         content.style.transform = `translateY(0)`
      }  else {
         content.style.transform = ''
      }
   }

    
   popupClose.addEventListener('click', () => {
      modal.style.display = 'none'
   })
}

export default modal