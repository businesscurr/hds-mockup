
// Question function
const toggleQuestion = (question) => {
    let pregunta = `pregunta${question}`
    let result = document.getElementById(pregunta)
    result.classList.toggle("d-none")
}
