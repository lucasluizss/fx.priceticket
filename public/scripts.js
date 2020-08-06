const socket = io('http://localhost:3333');

const prices = [];

const renderTr = (item) => `
  <tr id="${item.id}">
    <td> ${item.id} </td>
    <td> ${item.instrument} </td>
    <td> ${item.bid} </td>
    <td> ${item.ask} </td>
    <td> ${item.date} </td>
  </tr>
`;

const renderTable = item => {
    if (prices.includes(item)) return;

    $('#tickets tbody').prepend(renderTr(item));

    prices.push(item);
};

const renderUpdateTable = item => {
  const index = prices.indexOf(item);

  prices.splice(index, 1, item);

  $(`#${item.id}`).replaceWith(renderTr(item));
};

const renderDeleteTable = (id) => {
  $(`#${id}`).remove();
};

socket.on('previousPrices', prices => prices.map(renderTable));
socket.on('newPrice', price => renderTable(price));
socket.on('updatePrice', price => renderUpdateTable(price));
socket.on('deletePrice', id => renderDeleteTable(id));
