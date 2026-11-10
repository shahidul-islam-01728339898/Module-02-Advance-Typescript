What happens to TypeScript code under the hood during compilation (tsc), and what role does tsconfig.json play?

What happens to Typescript code under the hood during compilation (tsc):

    When we code for javascript we use .js extention for javascript file and .ts extention for typescript file. when we write code for typescript within .ts file this code is saperately in two places one is typescript LSP that means "Language Server Protocol" here this server checked all types of error if LSP gets any type of error he show thats error and provide a message to solve the detected error and another is Typescript CLI "command Line Interface". This CLI convert the typescript code into javascript code and return a javascript file. After that we can this javascirpt file in browser application or console application.

what role does tsconfig.json play?

    In tsconfig.json file we can see the setting information to run the typescript project. There we can different kind of insturction are prepared for forntend and backend. Whenever we will user forntend we will change the project setup as per our project requirement. Besides anothers porject setup for backend project requirement.
