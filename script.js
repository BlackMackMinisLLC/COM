const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.nav-links');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const archiveForm=document.getElementById('sib-form');
if(archiveForm){
  archiveForm.addEventListener('submit',()=>{
    const submitButton=archiveForm.querySelector('.archive-submit');
    const successMessage=document.getElementById('success-message');
    const errorMessage=document.getElementById('error-message');
    if(errorMessage) errorMessage.style.display='none';
    if(submitButton){
      submitButton.disabled=true;
      submitButton.textContent='Entering the Archive…';
    }
    window.setTimeout(()=>{
      if(successMessage) successMessage.style.display='block';
      archiveForm.reset();
      if(submitButton){
        submitButton.disabled=false;
        submitButton.textContent='Enter the Archive';
      }
    },900);
  });
}
