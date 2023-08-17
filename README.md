# Login Webpage cypress tests
![Tests](https://github.com/ChiNguyen2022/CypressTests)

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- npm install cypress@12.17.2
- npm install -g cypress

## Commands
- `npx cypress open` to launch the GUI
- `npm run cy:run:chrome` to run test in chrome headlessly
- `npm run cy:run:firefox` to run test in firefox headlessly

## Project Structure

```
├── cypress
│   ├── fixtures        -- Mock json files and test data
│   ├── e2e.            -- This is where the test is
│   ├── pages           -- Page objects
│   ├── downloads
│   └── support
```
## Notes

- For the best coding experience and correct style check please use `Visual Studio Code` to review.
- The project is written in javascript using page object pattern. While cypress discourages the use of pageobject in favor of app actions, the use of pageobject is simply for demonstration purpose.

