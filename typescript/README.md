TypeScript Helloworld
======
# 1. Install TypeScript
```
npm install -g typescript

tsc --version
tsc --help
```

# 2. Helloworld

## 2.1 New test.ts

```js
class Startup {
    public static main(): number {
        let date = new Date();
        console.log('Hello World at ' + date.toLocaleString());
        return 0;
    }
}

Startup.main();
```

## 2.2 Test in Command Line
```
tsc test.ts
node test.js
```
Test done, console output: Hello World

# 3. TypeScript Project
## 3.1 tsconfig.json
```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```
Parameters' options please refer to:   
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html    
https://www.typescriptlang.org/docs/handbook/compiler-options.html

## 3.2 Build project
```
tsc -p .
```
The test.ts has been compiled to dist/out-tsc/     
test.js   
test.js.map   

# 4. Work with VSCode
## 4.1 Run Build Task(Ctrl + Shift + B)   
Select `tsc:build-tsconfig.json`, compile the project.   
Select `tsc:watch-tsconfig.json`, will start a watch job in terminal to compile the project files automately when they are modified.   


More details please refer to:   
https://code.visualstudio.com/Docs/languages/typescript

