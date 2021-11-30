const addNewItem = (list, value) => {
  const item = document.createElement('li')
  item.classList.add('item')
  const button = document.createElement('button')
  item.innerHTML = ` 
  <input class="input__checkbox" type="checkbox" id="checkbox"> 
  <label class="style" for="checkbox"> ${value}
   <img class="spider" src="icons/dark-icon/fun-icon/spider.png" alt="aranha"> 
 </label> 
 <button class="delete" type="button" data-delete>
   <img class="garbage"src="icons/dark-icon/fun-icon/garbage.png" alt="botão para deletar"> 
 </button>
  ` 
  
  
  list.appendChild(item)
}

const inicializarAplicacao = () => {
  const form = document.querySelector('[data-form]')
  const input = document.querySelector('[data-input]')
  const list = document.querySelector('[data-list]')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    addNewItem(list, input.value) 
  })

}

inicializarAplicacao()


const starAplication = () => { 
  const welcome = document.querySelector('[data-welcome]')
  const input = document.querySelector('[data-submit]')
  const list = document.querySelector('[data-toDoList]')
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    list.classList.remove('hidden')
    welcome.classList.add('hidden')
  })
  
}
starAplication()
