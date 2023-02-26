import * as vscode from "vscode";
import axios from "axios";
var cron = require("node-cron");

var positivesVibeData = [
	"No bad vibes",
	"Let it challenge you to change you!",
	"Let your thoughts go. Why focus on something you can’t control?",
	"Do life with love!",
	"Stop when you’re happy with what you’ve achieved!",
	"Everyday is a day to be happy!",
];

export async function activate(context: vscode.ExtensionContext) {

	const res = await axios.get("https://zenquotes.io/api/quotes");
	const quotes = res.data.map((el: any) => el.q);

	positivesVibeData.push(...quotes);

	let disposable = vscode.commands.registerCommand("positive-vibes", () => {
		cron.schedule("* * * * *", () => {
			vscode.window.showInformationMessage(
				positivesVibeData[Math.floor(Math.random() * positivesVibeData.length)]
			);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
