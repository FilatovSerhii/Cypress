/// <reference types="Cypress" />

describe('API тест', () => {
  it('Должен вернуть корректный статус код и токен', () => {
    // Задаем данные для входа
    const credentials = {
      email: 'george.iremadze@hygge.software',
      password: 'Qwerty!1',
    };

    // Повторяем запрос 5 раз
    cy.wrap(Array(5).fill(null)).each(() => {
      cy.request({
        method: 'POST',
        url: 'http://creativity-backend-dev.eba-hfjwbq2w.us-east-1.elasticbeanstalk.com/api/v1/auth/login',
        body: credentials,
      }).then((response) => {
        // Проверка, что статус код равен 200
        expect(response.status).to.eq(200);

        // Проверка, что токен присутствует в ответе
        expect(response.body).to.have.property('token');

        // Проверка, что есть свойство "id" и оно не пустое
        expect(response.body.user).to.have.property('id').and.not.to.be.empty;
        expect(response.body.user).to.have.property('firebaseUid').and.not.to.be
          .empty;

        // Можете добавить дополнительные проверки на другие данные в ответе, если это необходимо
        expect(response.body.user).to.have.property('firstName', 'Geo');
        expect(response.body.user).to.have.property('lastName', 'Irem');
      });
    });
  });
});
