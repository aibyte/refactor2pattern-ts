# Refactor to pattern - TypeScript version

A sample project to demonstrate the refactoring of a set of codebase to pattern.

## Cases

* Simplification 
  * [Compose Method](src/List.ts)
  * [Use composite to replace Implicit Tree](src/simplify/OrdersWriter.ts)
* Generalization
  * [Use Interpreter to replace Implicit Language - ProductFinder](src/generalization/interpreter/ProductFinder.ts)

## steps to create project

* Init project config (package.json)
```shell
npm init -y
# using -y flag tells npm init to automatically use the defaults.
```
* Install TypeScript and ts-node
```shell
npm i -D typescript ts-node
# This will add the package under devDependencies
```
* Create a tsconfig.json file
```shell
# Will create the tsconfig.json file with default options
npx tsc --init
```
* Configuring Testing Environment
```shell
npm i -D jest ts-jest @types/jest
```

  * Configure Jest: `jest.config.js`
    ```js 
     module.exports = {
       preset: "ts-jest",
       testEnvironment: "node",
     };
    ```
  * Add TypeScript Configuration: Add `include` and `exclude` properties after `compilerOptions`
    ```js
    {
    "compilerOptions": {
    // ...
    },
    "include": ["**/*.ts"],
    "exclude": ["node_modules"]
    }
    
    ```