require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRouter');
const salesRouter = require('./routes/salesRouter');
const error = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);
app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Boa parte das dúvidas que tive sobre o funcionamento e a lógica do projeto
// foram tiradas das gravações das aulas ao vivo e dos repos abaixo
// https://github.com/tryber/sd-015-a-store-manager/pull/122
// https://github.com/tryber/sd-015-a-store-manager/pull/104

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
