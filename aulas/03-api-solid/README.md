# App


GymPass Style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [ ] Deve ser possivel o usuario obter o seu historico de check-ins ;
- [ ] Deve ser possivel o usuario buscar academias proximas ;
- [ ] Deve ser possivel o usuario buscar  academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel o validar o chek-in de um usuario;
- [ ] Deve ser possivel cadastrar uma academia.;



## RNFs (Regras de negocio)

- [ ] o usuario nao deve poder se cadastrar com um e-mail duplicado.;
- [ ] o usuario nao deve poder  fazer 2 check-ins no mesmo dia.;
- [ ] o usuario nao deve poder  fazer  check-ins se nao estiver perto (100m) da academia;
- [ ] o check-in so pode ser validado ate 20 minutos apos criado;
- [ ] o check-in so pode ser validado por administradores;
- [ ]  a academia so pode ser cadastrada por administradores;



## RRNFS (Requisitos nao-funcionais)

- [ ]  a senha do usuario precisa estar criptografada;
- [ ]  os dados da aplicacao precisam estar persistidos em um banco PostgreSQL;
- [ ]  todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [ ]  o usuario deve ser identificado por um JWT (JSON Web Token);


