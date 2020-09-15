// #! /usr/bin/env node

// // globals

// let shell = require('shelljs')
// let colors = require('colors')
// let fs = require('fs')
// let templates = require('./templates/template')


// let APP_NAME = process.argv[2]
// let APP_DIRECTORY = `${process.cwd()}/${APP_NAME}`

// const rerp = () => {
//   return new Promise(resolve => {
//     if(APP_NAME) {
//       shell.exec(`rerp ${APP_NAME}`, () => {
//         console.log(`your react app, ${APP_NAME} has been created`)
//         resolve(true)
//       })
//     } else {
//       console.log('\nYou did not give me the name of your app\n'.yellow)
//       console.log('Give me an app name in this format: ')
//       console.log('rerp your-app-name'.cyan)
//       resolve(false)
//     }
//   })
// }


// // initialize a start function

// const start = async () => {
//   let success = await rerp()

//   if (!success) {
//     console.log(
//       'oops! something went wrong while trying to create a new react app using rerp'
//         .red
//     )
//     return false
//   }
//   // the function below changes into the new
//   // app directory provided by the user
//   await changeIntoNewAppDir()
//   // installs additional packages
//   await addPackages()
//   await updateTemplates()
//   console.log('Voila! you are set')
// }

// start()

// // changes into the directory provided by the user
// const changeIntoNewAppDir = () => {
//   return new Promise(resolve => {
//     shell.exec(`cd ${APP_NAME}`, () => {
//       resolve()
//     })
//   })
// }

// // adds packages that are necessary
// const addPackages = () => {
//   return new Promise(resolve => {
//     console.log('\n installing react-router-dom, redux, redux-thunk\n'.cyan)
//     shell.exec(`npm isnatll --save redux react-router-dom redux-thunk`, () => {
//       console.log('\nAdditional packages installed\n'.green)
//       resolve()
//     })
//   })
// }


// const updateTemplates = () => {
//     return new Promise(resolve => {
//         let promises = []

//         Object.keys(templates).forEach((fileName, i) => {
//             promises[i] = new Promise(res => {
//                 fs.writeFile(`${APP_DIRECTORY}/src/${fileName}`, templates[fileName]),
//                 (err) => {
//                     if (err) {
//                         return console.log(err)
//                     }
//                     res()
//                 }
//             })
//             Promise.all(promises).then(() => {
//                 resolve()
//             })
//         })
//     }) 
// }