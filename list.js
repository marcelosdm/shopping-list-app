const fs = require('fs');
const chalk = require('chalk');

const listItems = () => {
  const items = loadList();

  console.log(chalk.bgBlue('Here are your notes:'));

  const list = items.map(item => {
    console.log(chalk.blue(`${item.title}`));
  });

  return list;
};

const addItems = (title, body, amount) => {
  const items = loadList();

  const duplicateItem = items.find(item => item.title === title);

  if (!duplicateItem) {
    items.push({
      title: title,
      body: body,
      amount: amount
    });

    saveList(items);
    console.log(chalk.bgGreen('New item added to the Shopping List'));
  } else {
    console.log(chalck.bgRed('No items were added to the Shopping List'));
  }
};

const removeItems = title => {
  const items = loadList();

  const itemsToKeep = items.filter(item => item.title !== title);

  if (items.length > itemsToKeep.length) {
    console.log(chalk.bgGreen('Item removed from the Shopping List'));
  } else {
    console.log(chalk.bgRed('Item not found'));
  }

  saveList(itemsToKeep);
};

const readItems = title => {
  const items = loadList();

  const item = items.find(item => item.title === title);

  if (item) {
    console.log(chalk.bgBlue(`Reading item: ${item.title}`));
    console.log(`${item.body} - amount: ${item.amount}`);
  } else {
    console.log(chalk.bgRed('Item not found'));
  }
};

const saveList = items => {
  const dataJSON = JSON.stringify(items);
  fs.writeFileSync('shopping-list.json', dataJSON);
};

const loadList = () => {
  try {
    const dataBuffer = fs.readFileSync('shopping-list.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { listItems, addItems, removeItems, readItems };
