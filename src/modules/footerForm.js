const footerForm = () => {
  
  const form = document.getElementById('form2')
  const formName = document.getElementById('form2-name')
  const formEmail = document.getElementById('form2-email')
  const formPhone = document.getElementById('form2-phone')


  form.addEventListener('submit', (e) => {
     e.preventDefault()
    let isError = false

    if(!/[^а-яА-я\s\-]/g.test(formName.value) && formName.value !=='') {
       alert('кириллица')
    } else {
      isError = true
    }

    if(!/[^\w\@\-\.\!\~\*\']+@([\w]+\.)+[\w]+/gi.test(formEmail.value) && formEmail.value !=='') {
       alert('емейл')
    } else {
      isError = true
    }

    if(!/[^\d\-\(\)]/g.test(formPhone.value) && formPhone.value !=='') {
       alert('телефон')
    } else {
      isError = true
    }
  
    if(!isError) alert('данные отправлены')
  })

}

export default footerForm