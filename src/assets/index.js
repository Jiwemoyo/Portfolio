document.addEventListener('astro:page-load',()=>{
    const wrapper=document.querySelector('[data-tech-wrapper]')
    let copy=document.querySelector('.tech-card')?.cloneNode(true)
    wrapper.append(copy)
})
