document.getElementById("MeuFormulario").addEventListener("submit", function(event){
    event.preventDefault(); //evita o envio padrao do formulario
    
    /*addEventListener(): Este é um método que permite que você anexe um ouvinte de eventos a um elemento HTML, que será chamado quando o evento especificado ocorrer.
"submit": É o tipo de evento que estamos ouvindo. Neste caso, estamos ouvindo o evento de envio de formulário.*/
   

    /*event: Este é o objeto de evento passado para a função. Ele contém informações sobre o evento que ocorreu, como o elemento alvo, tipo de evento, etc.
preventDefault(): Este é um método do objeto de evento que previne o comportamento padrão do evento. No caso do evento de envio de formulário, ele previne o envio padrão do formulário, que seria recarregar a página.*/


    //captura os dados do formulario

    const nome = document.getElementById("nome").value; //isso acessa o valor do elemento HTML, neste caso, o valor de entrada do campo do formulario
    const email = document.getElementById("email").value;
    const numeroTelefone = document.getElementById("numeroTelefone").value;
    const DataDeNascimento = document.getElementById("DataDeNascimento").value;
    const NivelDeEscolaridade = document.getElementById("NivelDeEscolaridade").value;
    const profissao = document.getElementById("profissao").value;
    const empresa = document.getElementById("empresa").value;
    const AnosDeExperiencia = document.getElementById("AnosDeExperiencia").value;

    //salvar os dados no Local Storage

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('numeroTelefone', numeroTelefone);
    localStorage.setItem('DataDeNascimento', DataDeNascimento);
    localStorage.setItem('NivelDeEscolaridade', NivelDeEscolaridade);
    localStorage.setItem('profissao', profissao);
    localStorage.setItem('empresa', empresa);
    localStorage.setItem('AnosDeExperiencia', AnosDeExperiencia);
    alert("Dados enviados com sucesso!"); //exibe uma mensagem de confirmacao

    /*localStorage: Este é um objeto global em JavaScript que permite armazenar dados no navegador do usuário de forma persistente entre sessões.
setItem('chave', valor): Este é um método do objeto localStorage que define um valor para uma determinada chave. Ele armazena os dados no navegador sob o nome da chave especificada.*/




    //acesse os dados armazenados no Local storage

    const nomeArmazenado = localStorage.getItem('nome');
    const emailArmazenado = localStorage.getItem('email');
    const numeroTelefoneArmazenado = localStorage.getItem('numeroTelefone');
    const DataDeNascimentoArmazenado = localStorage.getItem('DataDeNascimento');
    const NivelDeEscolaridadeArmazenado = localStorage.getItem('NivelDeEscolaridade');
    const profissaoArmazenado = localStorage.getItem('profissao');
    const empresaArmazenado = localStorage.getItem('empresa');
    const AnosDeExperienciaArmazenado = localStorage.getItem('AnosDeExperiencia');

    //exibe os dados armazenados

    console.log("nome: " + nomeArmazenado);
    console.log("Email:" + emailArmazenado);
    console.log("Numero De Telefone:" + numeroTelefoneArmazenado);
    console.log("Data De Nascimento:" + DataDeNascimentoArmazenado);
    console.log("Nivel De Escolaridade:" + NivelDeEscolaridadeArmazenado);
    console.log("Profissão:" + profissaoArmazenado);
    console.log("Empresa:" + empresaArmazenado);
    console.log("Anos De Experiencia:" + AnosDeExperienciaArmazenado);
});