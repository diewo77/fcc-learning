Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
    RegExp

/
^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$
/
gm
^ asserts position at start of a line
1st Capturing Group (1\s?)?
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
1 matches the character 1 literally (case sensitive)
\s? matches any whitespace character (equal to [\r\n\t\f\v ])
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
2nd Capturing Group (\(\d{3}\)|\d{3})
1st Alternative \(\d{3}\)
\( matches the character ( literally (case sensitive)
\d{3} matches a digit (equal to [0-9])
{3} Quantifier — Matches exactly 3 times
\) matches the character ) literally (case sensitive)
2nd Alternative \d{3}
\d{3} matches a digit (equal to [0-9])
{3} Quantifier — Matches exactly 3 times
Match a single character present in the list below [\s\-]?
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equal to [\r\n\t\f\v ])
\- matches the character - literally (case sensitive)
\d{3} matches a digit (equal to [0-9])
{3} Quantifier — Matches exactly 3 times
Match a single character present in the list below [\s\-]?
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equal to [\r\n\t\f\v ])
\- matches the character - literally (case sensitive)
\d{4} matches a digit (equal to [0-9])
{4} Quantifier — Matches exactly 4 times
$ asserts position at the end of a line
Global pattern flags
g modifier: global. All matches (don't return after first match)
m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
