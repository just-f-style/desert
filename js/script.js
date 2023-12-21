window.addEventListener('scroll', e => 
{
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
    if(this.scrollY > 312.5)
    {
      document.querySelector('.desert1').classList.add("ds1")
    }
    else
    {
      document.querySelector('.desert1').classList.remove("ds1")
    }
    if(this.scrollY > 190)
    {
      document.getElementsByClassName('p').classList.add("p1")
    }
    else
    {
      document.getElementsByClassName('p').classList.add("p1")
    }
})
window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  preloader.classList.remove("preloader") /* добавляем ему класс для скрытия */
  preloader.classList.add("l") /* добавляем ему класс для скрытия */
  document.body.classList.add("loaded")

})
