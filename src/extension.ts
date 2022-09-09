import * as vscode from "vscode";
var cron = require("node-cron");

const postivesVibeData = [
  "No bad vibes",
  "Let it challenge you to change you!",
  "Let your thoughts go. Why focus on something you can’t control?",
  "Do life with love!",
  "Stop when you’re happy with what you’ve achieved!",
  "Everyday is a day to be happy!",
];

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "positive-vibe" is now active!');

  let disposable = vscode.commands.registerCommand(
    "positive-vibe.helloWorld",
    () => {
      cron.schedule("* * * * *", () => {
        vscode.window.showInformationMessage(
          postivesVibeData[Math.floor(Math.random() * postivesVibeData.length)]
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
