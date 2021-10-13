
// Question function
const toggleQuestion = (question) => {
    let pregunta = `pregunta${question}`
    let result = document.getElementById(pregunta)
    // let pQuestions = document.
    let preguntaContainer = document.getElementById(`question${question}`)

    // Función para determinar el álto máximo a los contenedores de las preguntas.
    function addHeight(){
        let questions = document.querySelectorAll(".question")
        questions.forEach(element => {
            element.classList.add('maxHeight')
        });
        preguntaContainer.classList.remove("maxHeight")
        // result.classList.toggle("d-none")

    }
    addHeight()    
    result.classList.toggle("d-none")
}
