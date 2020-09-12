# rrp
A parcel powered react, redux template, that gives you the feeling of create-react-app, but this time with fast bundling, compile and build time.

![build-stats](src/assets/build.png)


## Development

- To get this package globally on your machine type this 👇 in your terminal.
```npm
    npm install rerp -g
```
OR 

```npm
    npx install rerp name-of-your-app
```
It automatically creates a new folder wit your app name and install all the required dependencies.

- To start using this package locally on your machine run this command in your terminal
```npm 
    npm start
```
it pops open your browser and loads the app at this address. :point_down:
## `localhost:3000`

- I've installed prettier as a dependency, run the following command to format your codes.
```npm
    npm run format
```

## Folder structure
```
your-app
├── build
├── node_modules
├── public
│   ├── bundled-app-icon
│   ├── index.html
│   └── css && js (bundled format)
│──src
│   ├── components
│   │   └──App.js 
│   ├── scss
│   │  └── app.css
│   │  └── global.scss
│   │  └── _variables.scss
│   ├──index.js
|   └── index.html
├── .gitignore
├── .prettierrc
├── .babelrc
├── package.json
└── README.md
``` 



I decide to go with `scss` files for our styles since it gives you proper flexibility when writing your styles.

You can place all your styles in the `scss` folder. In this package there are some base scss files already in the project,

- The `_variables.scss` file houses all your variables in one file. So when you want to use any of the variables, you simply import them into the file. e.g 👇

```scss
---global.scss
        @import './variables.scss';

        body {
            background: $primary;
        }
```
- You can also nest elements when using scss.

```scss
.app__base {
  margin-top: 10%;
  text-align: center;
  font-size: 30px;
  color: $text-primary;

  .logo {
    width: 200px;
    width: 200px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}  
```

In the assets folder, you can choose to add your styles along with your images too. Your choice, really! 😊

Inside the `src` folder, there's a sub `components` folder, that's where all your components would go.

## Things to note.
- Don't worry you can use arrow functions to bind your handlers to the context of `this` in the constructor of your `class` components.

```javascript
    class ClassComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            clicked: 0
        }
    }

    // es6 arrow function handler
    handleClick = () => {
        const { clicked } = this.state

        this.setState({
            clicked: clicked + 1
        })
    }

    render() {
        const { clicked } = this.state
        return (
            <div>
                <button onClick={this.handleClick}>you clicked me {clicked} times</button>
            </div>
        )
    }
}
```
