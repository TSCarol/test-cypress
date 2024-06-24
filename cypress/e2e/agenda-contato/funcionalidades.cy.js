/// <reference types="cypress" />

describe('Testes para adicionar contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Tela de adicionar', () => {
        //verifica se existe um formulário
        cy.get('form.sc-gLDzan').should('exist')
        //verifica se existem três inputs
        cy.get('input').should('have.length', 3)
        cy.screenshot('tela-adicionar')
    })

    it('Deve preencher o formulário para adicionar', () => {
        //preenchimento do campo nome
        cy.get('input[type="text"]').type('Arya Stark')
        //preenchimento do email
        cy.get('input[type="email"]').type('aryastark@teste.com')
        //preenchimento do telefone
        cy.get('input[type="tel"]').type('44 999685157')
        //clica no botão adicionar
        cy.get('.adicionar').click()
    
        //verifica um alerta
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Seu contato foi adicionado')
        })
    })

    it("Deve editar um contato existente", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear()
        cy.wait(1000)
        cy.get('[type="email"]').clear()
        cy.wait(1000)
        cy.get('[type="tel"]').clear()
        cy.wait(1000)
        //altera os dados
        cy.get('input[type="text"]').type('Bruna B Costa')
        cy.get('input[type="email"]').type('Bruna.costa@gmail.com')
        cy.get('input[type="tel"]').type('15 932635179')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})
