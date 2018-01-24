# README

##About

## Installation

You can install this program in its current form by cloning it by entering ```git clone git@github.com:jmstrick93/react-dice.git``` into the console.

After cloning the repo, navigate to the repo directory and run ```bundle install```.

Then, run npm install.  This could take a few minutes.

## Usage

1. Execute ```rake start``` into your console.  This will start the rails API backend on localhost:3001 and the React app on localhost:3000.

2. Run ```rake db:migrate``` in the terminal.

3. Open your preferred browser and navigate to localhost:3000/.

4. Click the 'Add Die' button to get started.  You can adjust how many sides a die has, as well as how many dice there are.

5.  To see your roll history, click the 'roll history' link in the menu bar.


## Development

After forking and cloning the repo, run ```bundle install```. Then, run rake db:migrate.

When working with the API, work out of the root directory using Ruby.

You can run ```rails console``` in the terminal to experiment with the API database and its models.

You may create new migration files by using standard rails generators such as ```rails g migration```.  You can look at existing rails routes by running ```rake routes```.  You can also see a complete list of Rake commands by executing rake -T in the terminal.  

The front-end React app can be found in the folder labeled ```client```.  It communicates with the API via a proxy, which is set up in ```client/package.json``` where you can see ```"proxy": "http://localhost:3001/"```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jmstrick93/react-dice.

Contributions adding additional functionality are encouraged.

## License

ReactDice is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
