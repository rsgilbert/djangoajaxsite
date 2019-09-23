const OPTIONS = document.querySelectorAll('option')
const POST_URL = "http:localhost:8000"
const MSG = document.querySelector('#message')
const FORM = document.querySelector('form')

// make ajax call for each option
OPTIONS.forEach((option) => {
    option.addEventListener('click', () => {
        let data = new FormData(FORM)    
        writeMessage(data)
    }) 
})
// wait for response from django view and write message
let writeMessage = async (data) => {
    let jsonMessage = await postData(POST_URL, data).catch((err) => console.error(err))
    if(jsonMessage.message === 'success') {
        MSG.innerHTML = "Wow. You're good at English"
        MSG.classList.replace("failed", "success")
    } else {
        MSG.innerHTML = "Wrong, you should learn the Alphabet"
        MSG.classList.replace("success", "failed")
    }
} 

// send a POST request to django view
let postData = (url, data) => fetch(url, {
    method: "POST",
    body: data
}).then(response => response.json())


