const sinon = require('sinon');
const { expect } = require('chai');

const model = require('../../../models/ProductsModel');
const service = require('../../../services/productsService');

describe('PRODUCTS SERVICE', () => {
  describe('Create', async () => {
    const product = {
      name: 'Teste unitario',
      quantity: 200,
    };

    before(() => {
      const idTest = 1;
      sinon.stub(model, 'create').resolves({ id: idTest });
    });

    after(() => {
      model.create.restore();
    });

    it('Retorna um objeto', async () => {
      const result = await service.create(product);
      expect(result).to.be.an('object');
    });

    it('Objeto possui campo id', async () => {
      const result = await service.create(product);
      expect(result).to.have.property('id');
    });
  });
});