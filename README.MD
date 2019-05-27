# ShopList APP

ShopList is a very simple NodeJS app that runs on terminal, and aims to create simple shopping lists. Once the user add an item to the list, the app creates a json file to store the data. Simple as that.

## Installation

Use the npm default instalation to install ShopList.

```bash
npm install
```

## Usage

### Adding an item

To **add an item** to the list, it's just needed to pass the following arguments:

1. title - The title of the item
2. body - The body of the item
3. amount - The amount of the item

```javascript
node app add --title="Item" --body="Description" --amount=1.5
```

### Removing an item

To **remove an item** to the list, simply pass the title of the item that will be removed.

```javascript
node app remove --title="Item"
```

### Reading an item

To **read an item** from the list, simply pass the title of the item.

```javascript
node app read --title="Item"
```

### Listing all items

To **list all items** from the list, simply pass the command with no arguments.

```javascript
node app list
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
