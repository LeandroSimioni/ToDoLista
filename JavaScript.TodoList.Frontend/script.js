const URL_API = "http://localhost:3000"

const elFiltro = document.getElementbyid("filtro")
const elTarefas = document.getElementbyid("tarefas")
const elNovaTarefaDescricao = document.getElementbyid("nova-tarefa")
const elAdicionarNovaTarefa = document.getElementbyid("adicionar-nova-tarefa")

async function carregarTarefas() {
    try {
        const response = await fetch(`${URL_API}/tarefas`)

        if (response.ok) {
            const tarefas = await response.json()

            elTarefas.innerHTML = ""
            tarefas.forEach(tarefa => {
                const elTarefaItem = document.createElement("li")
                elTarefaItem.classList.add(tarefa.completa ? "completa" : "pendente")

                const elTarefaDescricao = document.createElement("span")
                elTarefaDescricao.classList.add("descricao")
                elTarefaDescricao.innerText = tarefa.descricao

                const elTarefaStatus = document.createElement("span")
                elTarefaStatus.classList.add("status")
                elTarefaStatus.innerText = tarefa.completa ? "FEITA" : "A FAZER"     

                const elTarefaApagar = document.createElement("button")
                elTarefaApagar.classList.add("apagar")
                elTarefaApagar.innertext = "apagar"

                elTarefaItem.appendChild(elTarefaDescricao)
                elTarefaItem.appendChild(elTarefaStatus)
                elTarefaItem.appendChild(elTarefaApagar)

                elTarefas.appendChild(elTarefaItem)
    })
        } else {
            console.error("Erro ao carregar tarefas")
        }
    } catch {
        console.error("Erro de internet ao carregar tarefas")
    }
}

window.onload = carregarTarefas
