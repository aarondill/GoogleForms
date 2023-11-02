// Type definitions for Google Forms
// Based on: https://theconfuzedsourcecode.wordpress.com/2019/12/15/programmatically-access-your-complete-google-forms-skeleton/
// See https://gist.github.com/gcampfield/cb56f05e71c60977ed9917de677f919c for a python implementation
// These may not be correct, as it's based on private APIs and trial and error.
// If you find an error, please report it.

type NumOrNull = null | number;
type BooleanNum = 0 | 1;
type Nullable<T> = T | null;

export enum QuestionType {
	shortAnswer = 0,
	paragraph = 1,
	multipleChoice = 2,
	dropDown = 3,
	checkBoxes = 4,
	linearScale = 5,
	gridChoice = 7, //Grid Choice – represents both: Multiple Choice Grid & Checkbox Grid
	unknown8 = 8,
	date = 9,
	time = 10,
	unknown11 = 11,
	fileUpload = 13,
}
export type OptionChoice = [
	string, // name
	null,
	null,
	null,
	0,
];
export type QuestionValidation = [
	[
		2,
		100,
		(string | number)[], // Valid answers
		string, // Message if failed validation
	],
];

export type QuestionId = number;
export type FieldId = number;
export type QuestionText = string;
export type QuestionDescription = string | null;
export type IsRequired = 1 | 0;
export type QuestionAnswerSpec = [
	[
		FieldId, // field identifier -- Answer Submit Id
		Nullable<OptionChoice[]>,
		IsRequired, // required?
		null?,
		Nullable<QuestionValidation>?,
		null?,
		(null | [number])?,
		(null | [number, number])?,
		0?,
	],
];
export type Question = [
	QuestionId, // question id
	QuestionText, // Question text
	QuestionDescription, // Secondary description
	QuestionType, // question type
	Nullable<QuestionAnswerSpec>,
	null?,
	Nullable<[string, 0, [number, number, 0]]>?,
	null?,
	null?,
	Nullable<[[string, null, [number, number, 0]]]>?,
	null?,
	[null, QuestionDescription]?,
	[null, QuestionText]?,
];
export type FormDescription = string | null;
export type FormTitle = string;
export type FormFileName = string;
export type FormId = string; // Base64 encoded
export type Organization = string; // Where is this form accessible from?
//eslint-disable-next-line @typescript-eslint/naming-convention
type I_ACTUALLY_HAVE_NO_IDEA_WHAT_THIS_IS = [
	null,
	null,
	null,
	null,
	null,
	[
		null,
		[
			[string, 0, [number, number, 0]],
			[
				[number, number, number, null, 2],
				[number, number, number, null, 1],
				[number, number, number, null, 1],
				[number, number, number, null, 1],
				[number, number, number, null, 2],
			],
		],
		null,
		[number, number, number, null, 2],
		[number, number, number, null, 1],
	],
];
//eslint-disable-next-line @typescript-eslint/naming-convention
export type FB_PUBLIC_LOAD_DATA_ = [
	null,
	[
		FormDescription, // Description
		Question[],
		Nullable<["", BooleanNum, BooleanNum, BooleanNum, BooleanNum]>,
		null,
		Nullable<I_ACTUALLY_HAVE_NO_IDEA_WHAT_THIS_IS>,
		number[],
		null,
		Nullable<[1, ""]>,
		FormTitle, // form title
		number,
		NumOrNull[],
		null,
		null,
		null,
		null,
		number[],
		[[1, 1, 1, 1, 1], 1]?,
		null?,
		null?,
		null?,
		null?,
		null?,
		null?,
		null?,
		Nullable<[null, FormDescription]>?,
		Nullable<[null, FormTitle]>?,
	],
	"/forms",
	FormFileName,
	null,
	null,
	null,
	`${number}`,
	null,
	0,
	BooleanNum,
	Nullable<"">,
	Nullable<Organization>,
	BooleanNum,
	FormId, // form id
	BooleanNum,
	string?,
	BooleanNum?,
	BooleanNum?,
];
