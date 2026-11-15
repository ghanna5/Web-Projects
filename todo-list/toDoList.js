let myArray1 = []
let myArray2 = []
let toDoListHTML = ''

function toDoPractice1()
{
    let userInput = document.querySelector('.input-button-1')

    let newInput = userInput.value
    myArray1.push(newInput)
    console.log(myArray1)

    userInput.value = ''
}

function toDoPractice2()
{
    let userInput = document.querySelector('.input-button-2')
    let newInput = userInput.value
    myArray2.push(newInput)

    toDoListHTML = ''

    for(let i = 0; i < myArray2.length; i++)
    {
        newInput = myArray2[i]
        let html = `
                    <p>${newInput}
                        <button onclick = '
                        deleteItem(${i})
                        '>
                            Delete
                        </button>
                    </p>
                    `
        toDoListHTML += html
    }

    console.log(toDoListHTML)
    document.querySelector('.print-list').innerHTML = toDoListHTML
    userInput.value = ''
}

function deleteItem(num)
{
    myArray2.splice(num, 1)
    toDoPractice2()
}

function onKeyDown1(event)
{
    if(event.key == 'Enter')
    {
        toDoPractice1()
    }
}

function onKeyDown2(event)
{
    if(event.key == 'Enter')
    {
        toDoPractice2()
    }
}