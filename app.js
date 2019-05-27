const yargs = require('yargs');

const list = require('./list');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new item to the list',
  builder: {
    title: {
      describe: 'Item title',
      demmandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Item body',
      demandOption: true,
      type: 'string'
    },
    amount: {
      describe: 'Item amount',
      demmmandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    list.addItems(argv.title, argv.body, argv.amount);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove an item from the list',
  builder: {
    title: {
      describe: 'Item title',
      demmandOption: true,
      type: 'string'
    }
  },
  handler(arvg) {
    console.log('Removing note');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read the items',
  builder: {
    title: {
      describe: 'Item title',
      demmandOption: true,
      type: 'string'
    }
  },
  handler() {
    console.log('Reading an item');
  }
});

yargs.command({
  command: 'list',
  describe: 'List all items',
  hander() {
    list.listItems();
  }
});

yargs.parse();
