Neste projeto, feito para avaliação na Trybe, desenvolvi uma API RESTful com arquitetura MSC. Algumas das habilidades desenvolvidas com ele foram:

- Estruturar a aplicação em camadas (Model, Service e Controller), fazendo com que cada uma seja responsável pela sua própria delegação;
- Conectar a aplicação a um banco de dados (nesse caso, o mySQL, cujo schema fora fornecido pela Trybe);
- Aplicar os padrões REST.

A ideia da API é simular um sistema de gerenciamento de vendas, onde é possível criar, visualizar, atualizar e deletar tanto produtos quanto vendas.

Por ser uma aplicação RESTful, os verbos HTTP são condizentes com sua ação, as URLs são padronizadas e os endpoints sempre retornam algo para o cliente, com os status HTTP adequados.

A conexão com o banco de dados é feita através de variáveis de ambiente para garantir a segurança dos dados.

As tecnologias utilizadas foram:

- Node.js
- Express.js
- MySQL
