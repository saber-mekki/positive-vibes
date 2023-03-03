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
	"كن أو لا تكن",
	"إذا قصّر العبد بالعمل ابتلاه الله بالهموم",
	"الدّنيا ساعة فاجعلها طاعة",
	"لا تسقني كأس الحياة بذلّةٍ بل فاسقني بالعزّ كأس الحنظل",
	"كل شيء يحتاج إلى العقل والعقل يحتاج إلى المشاورة العقول مواهب والعلوم مكاسب",
	"لا تمدحنّ امرأً حتّى تجرّبه ولا تذمّه من غير تجريب",
	"هي الأمور كما شاهدتها دول من سرّه زمن ساءته أزمان",
	"ليس ارتحالك في كسب الغنى سفراً، لكن مقامك في ضد هو السفر",
	"أكرم نفسك عن كل دنيء",
	"اشد ما في الكسل أنه يجعل العمل الواحد كأنه اعمال كثيرة",
	"جالس العقلاء أعداء كانوا أم أصدقاء فإن العقل يقع على العقل",
	"تعدو الذئاب على من لا كلاب له وتتقي صولة المستنفر الحامي",
	"إذا قصرت يدك عن المكافأة فليصل لسانك بالشكر",
	"إذا كان الصبر مُرًّا فعاقبته حلوة",
	"على قدر أهل العزم تأتي العزائم و تأتي على قدر الكرام المكارم",
	"الإفراط في التواضع يجلب المذلة",
	"المعرفة كنز يرفع صاحبه أبنما ذهب",
	"احتمال الفقر أفضل من احتمال الذل، لأن الصبر على الفقر قناعة والصبر على الذل ضراعة.",
	"قليل الرزق مع سلامة النفس امتع من كثيره مع الاوجاع",
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
