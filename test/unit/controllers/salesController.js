const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../services/salesService');
const controller = require('../../../controllers/salesController');

describe('SALES CONTROLLER', () => {
  const req = {};
  const res = {};
  let next = () => {};

  describe('GetAll', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'getAll').resolves([]);
    });

    after(() => {
      service.getAll.restore();
    });

    it('Retorna status 200', async () => {
      await controller.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('GetById', () => {
    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'getById').resolves([[]]);
    });

    after(() => {
      service.getById.restore();
    });

    it('Retorna status 200', async () => {
      await controller.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
}); 