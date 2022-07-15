# Set up TS in vscode
https://www.digitalocean.com/community/tutorials/how-to-work-with-typescript-in-visual-studio-code
## Installation

`npm install typescript ts-node -g`

## Configuration

`tsc --init`
It will generate `tsconfig.json` file. Typical file

```
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "out"
    }
}
```

Configure vscode to ignore search on generated .js files. The `settings.json`

```
{
    "files.exclude": {
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/**.js": {
            "when": "$(basename).tsx"
        }
    }
}
```

## Running

Run app `npx ts-node hello.ts`
Configure vscode launch for TS. Configure `launch.json`

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Run current .ts with ts-node",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "runtimeExecutable": "ts-node",
            "program": "${file}",
        }
    ]
}
```
