const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

function render() {

    let htmlStr = ''

    listContent.forEach(function(item){

        htmlStr = htmlStr + `
            <div class="item">
              <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time}</p>
              </div>
            </div>
      `

        //console.log('item', item)
    })

    list.innerHTML = htmlStr

}


addedBtn.addEventListener('click', function() {
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.push({ //listContent.unshift()  added from the front
        content : content.value,
        date : date.value,
        time : time.value,
    })

    //console.log(listContent)

    render()

    
})

deletedBtn.addEventListener('click', function (){
    listContent.pop()  //listContent.shift() deleted  first

    render()

    
    
})

