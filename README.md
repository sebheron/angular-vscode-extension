# Angular VS Code Extension

## Overview

**Project Name** is a VS Code extension that provides a custom sidebar panel for executing project name. Built using **Angular** and **Vite**, this extension enhances developer productivity by integrating a dynamic webview panel into the VS Code activity bar.

## Features

- **Custom Sidebar Panel**: Adds a "Project Name" panel in the VS Code activity bar.
- **Webview Integration**: Uses Angular for building a dynamic and interactive UI inside the VS Code webview.
- **Fast Development & Build**: Powered by **Vite** for quick bundling and serving.

## Installation

### Prerequisites
Ensure you have the following installed:
- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/) (LTS recommended)
- [VS Code Extension Manager (vsce)](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/sebheron/angular-vscode-extension.git
   cd project-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the extension:
   ```sh
   npm run build
   ```
4. Package the extension:
   ```sh
   vsce package
   ```
5. Install the packaged extension in VS Code:
   ```sh
   code --install-extension project-name-0.0.1.vsix
   ```
6. Open VS Code and find **Project Name** in the activity bar.

## Development

To run the extension in development mode:

1. Start the Vite development server:
   ```sh
   npm run dev
   ```
2. Open VS Code and run **Start Debugging** (`F5`) to launch an extension development host.

## Configuration

### VS Code Integration

The extension contributes the following to VS Code:
- **Sidebar Panel**: A dedicated "Project Name" view container in the activity bar.
- **Webview Panel**: A custom Angular-powered webview inside the sidebar.

Defined in `package.json`:
```json
"contributes": {
  "viewsContainers": {
    "activitybar": [
      {
        "id": "project-name-sidebar",
        "title": "Project Name",
        "icon": "./assets/icon.svg"
      }
    ]
  },
  "views": {
    "project-name-sidebar": [
      {
        "type": "webview",
        "id": "project-name-panel",
        "name": "Project Name",
        "icon": "./assets/icon.svg",
        "contextualTitle": "Project Name"
      }
    ]
  }
}
```

## Dependencies

### Development Dependencies
- **@analogjs/vite-plugin-angular**: Angular support for Vite.
- **@angular-devkit/build-angular**: Angular build utilities.
- **@tomjs/vite-plugin-vscode**: Vite plugin for VS Code extensions.
- **@types/vscode**: TypeScript definitions for VS Code API.
- **Vite**: Development and build tool.

### Runtime Dependencies
- **@angular/common, @angular/core, @angular/platform-browser**: Core Angular libraries.
- **@vscode-elements/elements-lite**: UI components for VS Code extensions.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License
This project is licensed under the MIT License.

