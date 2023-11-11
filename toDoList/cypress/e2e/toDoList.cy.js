describe('toDoList', () => {

  it('Adicionar uma tarefa na to do list', () => {

    //Acessar a página
    cy.visit('https://lambdatest.github.io/sample-todo-app/')

    //Adicionar a tarefa
    cy.get("#sampletodotext").type("Selenium")
    
    //Clicar no botão "Add"
    cy.get("#addbutton").click();

    //Assertion - Verificar se foi adicionado a tarefa desejada
    cy.get('/html/body/div/div/div/ul/li[6]/span').contains("Selenium");
  })

})