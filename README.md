# gerador-de-senhas

Este projeto consiste em uma aplicação web avançada para geração de senhas aleatórias e seguras. Focada em Segurança da Informação e UX (User Experience), a ferramenta combina algoritmos de criptografia modernos com uma interface futurista de alto impacto visual.

  Funcionalidades Principais
Algoritmo de Criptografia Real: Utiliza a API window.crypto do navegador para garantir que a aleatoriedade das senhas seja criptograficamente segura, superior ao Math.random() comum.

Níveis de Segurança Customizáveis: Quatro modos de geração (Básico, Médio, Forte e Extremo) que ajustam a complexidade dos caracteres (alfanuméricos, símbolos e caracteres especiais raros).

Histórico Persistente: Armazena as últimas 5 senhas geradas utilizando localStorage, permitindo que o usuário recupere senhas recentes mesmo após fechar ou atualizar o navegador.

Feedback Visual e de Interatividade: Efeito de animação "Cipher-Reveal" (decodificação) ao gerar senhas e sistema de cópia rápida com feedback visual no botão.

Dashboard de Status: Painel lateral informativo que fornece dicas de segurança dinâmicas e indicadores de integridade do sistema.

Análise de Força em Tempo Real: Barra de progresso dinâmica que calcula o nível de entropia da senha baseada no comprimento e complexidade escolhidos.

  Tecnologias Utilizadas
HTML5 Semântico: Estrutura organizada para acessibilidade e SEO.

CSS3 Avançado: Uso de Variáveis (CSS Variables), Flexbox para layout responsivo, Glassmorphism (efeito de vidro fosco) e animações via keyframes.

JavaScript Vanilla (Puro): Lógica de manipulação de DOM, gerenciamento de estados do histórico e integração com APIs nativas do navegador.

LocalStorage API: Para persistência de dados local sem necessidade de banco de dados externo.

Web Crypto API: Para geração de valores aleatórios de nível industrial.

🌐 Visualize o projeto:

https://rony0112.github.io/gerador-de-senhas/
