import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const provider = new ProjectProvider(context);

  const webview = vscode.window.registerWebviewViewProvider(
    ProjectProvider.viewType,
    provider,
    {
      webviewOptions: {
        retainContextWhenHidden: true,
      },
    }
  );

  context.subscriptions.push(webview);
}

class ProjectProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "project-name-panel";

  constructor(private readonly context: vscode.ExtensionContext) {}

  resolveWebviewView(panel: vscode.WebviewView) {
    panel.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this.context.extensionUri, "dist/webview"),
      ],
    };

    panel.webview.html = process.env.VITE_DEV_SERVER_URL
      ? __getWebviewHtml__(process.env.VITE_DEV_SERVER_URL)
      : __getWebviewHtml__(panel.webview, this.context);
  }
}

export function deactivate() {}
