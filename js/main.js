const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
      
      function toggleSkills(){
        let itemClass = this.parentNode.className

        if(itemClass == 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }else{
            this.parentNode.className = 'skills__content skills__close'
        }
       
      }
      skillsHeader.forEach((e1) => {
        e1.addEventListener('click', toggleSkills)
    });


const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
      
      tabs.forEach(tab => {
          tab.addEventListener('click',() =>{
              const target = document.querySelector(tab.dataset.target)
              tabContents.forEach(tabContent =>{
                  tabContent.classList.remove('career-active')
              })
              target.classList.add('career-active')
              tab.forEach(tab =>{
                  tab.classList.remove('career-active')
              })
              tab.classList.add('career-active')
          })
      });