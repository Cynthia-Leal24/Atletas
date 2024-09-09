/*Aqui os dados serão exibidos após clicar em pesquisar*/
function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;/*getElementById (obter elemento por Id)*/
    // Inicializa uma string vazia para armazenar o HTML dos resultados.

    console.log(campoPesquisa);
    /*se campopesquisa for uma string vazia*/
    if(campoPesquisa == "")
    {
      section.innerHTML =  "<p> Nada foi encontrado.Você precis digitar o nome de um atleta ou esporte.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Intera sobre cada item de dado na lista de resultados.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()

    /*se titulo includes campoPesquisa*/

    if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa))
    {
       // Cria um novo elemento HTML <div> para cada resultado.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }

    if(!resultados)
      {
        resultados = "<p> Nada foi encontrado</p>"
      }
      console.log(dado.titulo.includes(campoPesquisa))
  
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }

  
/*aqui exibe os dados pesquisados na tela*/

section.innerHTML = resultados
    

/*console.log(dados);/*observar no console*/

let section = document.getElementById("resultados-pesquisa");
console.log(section);

/*variável que armazenar todos os textos*/
let resultados = ""

/*imprimir dos dados armnazenados em js no Html*/
/*section.innerHTML =`
 <div class="item-resultado">
        
         <h2>
                <a href="#" target="_blank">${dados[1].titulo}</a>
    
            </h2>
            <p class="descricao-meta"${dados[1].descricao}</p>
    
            <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">Mais informações</a>
        </div>
        `
        */

/*para cada dado dentro da lista de dados*/

/*for (let dado of dados)/*loop dentro da lista dados
{
    section.innerHTML += `
    <div class="item-resultado">
            <h2>
                   <a href="#" target="_blank">${dado.titulo}</a>
               </h2>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href=${dado.link} target="_blank">Mais informações</a>
           </div>
           `
}*/


for (let dado of dados)
{
    /*boas práticas, para não ficar usando várias vezes o section.innerHTML, então criou a váriavel resultados e adicionou todos os textos nela.*/
    resultados += `/
    <div class="item-resultado">
            <h2>
                   <a href="#" target="_blank">${dado.titulo}</a>
               </h2>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href=${dado.link} target="_blank">Mais informações</a>
           </div>
           `
}



section.innerHTML = resultados


