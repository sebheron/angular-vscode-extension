import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import "@vscode-elements/elements-lite/components/action-button/action-button.css";
import "@vscode-elements/elements-lite/components/badge/badge.css";
import "@vscode-elements/elements-lite/components/button/button.css";
import "@vscode-elements/elements-lite/components/checkbox/checkbox.css";
import "@vscode-elements/elements-lite/components/collapsible/collapsible.css";
import "@vscode-elements/elements-lite/components/divider/divider.css";
import "@vscode-elements/elements-lite/components/form-container/form-container.css";
import "@vscode-elements/elements-lite/components/form-group/form-group.css";
import "@vscode-elements/elements-lite/components/form-helper/form-helper.css";
import "@vscode-elements/elements-lite/components/label/label.css";
import "@vscode-elements/elements-lite/components/progress-ring/progress-ring.css";
import "@vscode-elements/elements-lite/components/radio/radio.css";
import "@vscode-elements/elements-lite/components/select/select.css";
import "@vscode-elements/elements-lite/components/textarea/textarea.css";
import "@vscode-elements/elements-lite/components/textfield/textfield.css";

import { AppComponent } from "./app.component";

bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
