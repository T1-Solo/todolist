window.addEventListener("DOMContentLoaded" , () => {
    console.log(uuid.v4());
    let form = renderElement("form")
    let input = renderElement("input")
    let ul = renderElement("ul")
    let template = renderElement("template").content
    let result = []
    let renders = (arr) => {
        ul.innerHTML = null
        for(let i = 0 ; i<arr.length; i++){
            let clone = template.cloneNode(true) 
            let li = clone.querySelector("li")
            let del = li.querySelector(".del")
            del.addEventListener("click" , handleDel)
            del.dataset.id = arr[i].id
            let h3 = li.querySelector("h3")
            console.log(arr[i].name)
            h3.textContent = arr[i].name
            console.log(h3)
            ul.appendChild(li)
        }
    }
    function handleSub(event) {
        event.preventDefault()
        let data = new FormData(event.target)
        let name = data.get("name")
        let todo = {
            id: uuid.v4(),
            name : data.get("name")
        }
        result.push(todo)
        renders(result)
    }
    form.addEventListener("submit" , handleSub)
    function handleDel(event){
        let id = event.target.dataset.id
        for(let i = 0 ; i<result.length ; i++) {
            if(result[i].id === id ){
                result.splice(i , 1)
                let but = event.target.parentNode
                let li = but.parentNode
                li.remove()
            }
        }
    }
})