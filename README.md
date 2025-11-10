Conversor de Moedas Estático
Este é um projeto front-end de um conversor de moedas simples, que converte valores de Real (BRL) para 5 moedas estrangeiras. O projeto foi desenvolvido como prática de JavaScript, focando na manipulação do DOM e na lógica de eventos.

Importante: Este projeto utiliza valores de câmbio fixos, definidos diretamente no código JavaScript. As cotações não são atualizadas em tempo real.

Nota: Sugiro que você tire um print da tela do seu projeto, faça upload em um site como o Imgur e cole o link onde está https://i.imgur.com/link-da-sua-imagem.png.

🚀 Funcionalidades
Conversão Estática: Converte valores de Real (BRL) para Dólar Americano (USD), Euro (EUR), Libra Esterlina (GBP), Iene Japonês (JPY) e Yuan Chinês (CNY).

Formatação Dinâmica: O valor final é formatado automaticamente para o padrão monetário correto de cada moeda (ex: $ para Dólar, € para Euro).

Validação Simples: Inclui validações para garantir que o usuário insira um valor válido e selecione uma moeda antes de tentar a conversão.

🛠️ Tecnologias Utilizadas
Este projeto foi construído com as seguintes tecnologias:

HTML5: Para a estrutura semântica da página.

CSS3: Para a estilização e layout.

JavaScript (ES6+): Para toda a lógica de funcionalidade.

Manipulação do DOM: Seleção e atualização de elementos da página (getElementById, innerHTML).

Event Listeners: Captura do evento de submit do formulário.

Lógica Condicional: Uso de if/else para determinar qual cálculo de conversão realizar.

toLocaleString(): Para a formatação correta dos valores monetários de saída.

🏁 Como Executar
Por ser um projeto puramente front-end, você só precisa de um navegador.

Clone este repositório:

Bash

git clone https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git
Navegue até a pasta do projeto:

Bash

cd NOME-DO-SEU-REPOSITORIO
Abra o arquivo index.html no seu navegador de preferência.

E pronto! O conversor estará funcionando com os valores definidos no código.

💡 Aprendizados
O foco deste projeto foi solidificar os fundamentos do JavaScript para interagir com uma página web:

Capturar entradas do usuário (.value) de campos de input e select.

Impedir o comportamento padrão de um formulário (event.preventDefault()).

Usar a lógica condicional (if/else if) para processar diferentes escolhas do usuário.

Atualizar o conteúdo da página dinamicamente (.innerHTML).

Implementar a função valueFormatter usando toLocaleString, uma poderosa ferramenta nativa do JS para internacionalização de números e moedas.
