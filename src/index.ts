// Type definitions for Google Forms
// Based on: https://theconfuzedsourcecode.wordpress.com/2019/12/15/programmatically-access-your-complete-google-forms-skeleton/
// See https://gist.github.com/gcampfield/cb56f05e71c60977ed9917de677f919c for a python implementation
// These may not be correct, as it's based on private APIs and trial and error.
// If you find an error, please report it.

type NumOrNull = null | number;
type boolNum = 0 | 1;
type Nullable<T> = T | null;

enum QuestionType {
  ShortAnswer = 0,
  Paragraph = 1,
  MultipleChoice = 2,
  DropDown = 3,
  CheckBoxes = 4,
  LinearScale = 5,
  GridChoice = 7, //Grid Choice – represents both: Multiple Choice Grid & Checkbox Grid
  UNKNOWN_8 = 8,
  Date = 9,
  Time = 10,
  UNKNOWN_11 = 11,
  FileUpload = 13,
}
type OptionChoice = [
  string, // name
  null,
  null,
  null,
  0,
];
type QuestionValidation = [
  [
    2,
    100,
    (string | number)[], // Valid answers
    string, // Message if failed validation
  ],
];

type QuestionId = number;
type FieldId = number;
type QuestionText = string;
type QuestionDescription = string | null;
type IsRequired = 1 | 0;
type QuestionAnswerSpec = [
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
type Question = [
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
type FormDescription = string | null;
type FormTitle = string;
type FormFileName = string;
type FormId = string; // Base64 encoded
type Organization = string; // Where is this form accessible from?
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
type FB_PUBLIC_LOAD_DATA_ = [
  null,
  [
    FormDescription, // Description
    Question[],
    Nullable<["", boolNum, boolNum, boolNum, boolNum]>,
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
  boolNum,
  Nullable<"">,
  Nullable<Organization>,
  boolNum,
  FormId, // form id
  boolNum,
  string?,
  boolNum?,
  boolNum?,
];
