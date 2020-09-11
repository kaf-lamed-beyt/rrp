#!/usr/bin/env node

// globals

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/template')
const { resolve } = require('path')


let APP_NAME = process.argv[2]
let APP_DIRECTORY = `${process.cwd()}/${APP_NAME}`

// initialize a start function

const start = async () => {
  let success = await rrp()

  if (!success) {
    console.log(
      'oops! something went wrong while trying to create a new react app using rrp'
        .red
    )
    return false
  }
  // the function below changes into the new
  // app directory provided by the user
  await changeIntoNewAppDir()
  // installs additional packages
  await addPackages()
  console.log('Voila! you are set')
}

start()

const rrp = () => {
  return new Promise(resolve => {
    APP_NAME
      ? shell.exec(`rrp ${APP_NAME}`, () => {
          console.log(`your react app, ${APP_NAME} has been created`)
          resolve(true)
        })
      : console.log('\nYou did not give me the name of your app'.red)
    console.log('\nGive me an app name in this format: ')
    console.log('\nrrp your-app-name'.cyan)
    resolve(false)
  })
}

// changes into the directory provided by the user
const changeIntoNewAppDir = () => {
  return new Promise(resolve => {
    shell.exec(`cd ${APP_NAME}`, () => {
      resolve()
    })
  })
}

// adds packages that are necessary
const addPackages = () => {
  return new Promise(resolve => {
    console.log('\n installing react-router-dom, redux, redux-thunk\n'.cyan)
    shell.exec(`npm isnatll --save redux react-router-dom redux-thunk`, () => {
      console.log('\nAdditional packages installed\n'.green)
      resolve()
    })
  })
}


const updateTemplates = () => {
    return new Promise(resolve => {
        let promises = []

        Object.keys(templates).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${APP_DIRECTORY}/src/${fileName}`, templates[fileName]),
                (err) => {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                }
            })
            Promise.all(promises).then(() => {
                resolve()
            })
        })
    }) 
}