# `start.bat` file

When using the standalone version you can use this file to start the client and API simultaneously.

## Requirements

Make sure you have `concurrently` installed globally on your machine. This can be done by running the following command:

_You may have to open your Command Promppt/Terminal with administrator permissions._

```bash
npm install --global concurrently
```

## The code

```batch
set "client_command=yarn workspace @snailycad/client start"
set "api_command=yarn workspace @snailycad/api generate && yarn workspace @snailycad/api start"


concurrently "%client_command%" "%api_command%"
```
