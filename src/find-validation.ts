// An example for the usage of this package.
// This file gets all feilds with a defined validation rule and alerts the user of the expected value.
import { FB_PUBLIC_LOAD_DATA_ } from "./index";

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const FB_PUBLIC_LOAD_DATA_: FB_PUBLIC_LOAD_DATA_;

const ans = FB_PUBLIC_LOAD_DATA_[1][1]
	.map(q => (+q[3] === 0 ? q : false)) // Ensure QuestionType.ShortAnswer.
	.map(q => q && q[4]?.[0][4]?.[0][2]?.join(" | "))
	.map((val, i) => val && `${i + 1}: ${val}`)
	.filter(Boolean)
	.join("\n")
	.trim();
alert(ans === "" ? "No answers with validation found" : ans);
