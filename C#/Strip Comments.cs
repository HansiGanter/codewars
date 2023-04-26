using System.Linq;
using System.Text.RegularExpressions;

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
// Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:

//  apples, pears # and bananas
//  grapes
//  bananas !apples

// The output expected would be:

//  apples, pears
//  grapes
//  bananas
//  The code would be called like so:

// string stripped = StripCommentsSolution.StripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new [] { "#", "!" })
// // result should == "apples, pears\ngrapes\nbananas"

class StripCommentsSolution
{
    public static string StripComments(string text, string[] commentSymbols)
    {
        string result = "";
        bool write = true;
        for (int i = 0; i < text.Length; i++)
        {
            if (commentSymbols.Contains(text[i].ToString()))
            {
                write = false;
            }
            if (text[i] == '\n')
            {
                write = true;
                result = result.Trim(' ');
            }
            if (write)
            {
                result += text[i];
            }
        }
        return result.Trim(' ');
    }




    public static string StripComments2(string text, string[] commentSymbols)
    {
        string result = "";
        foreach (string line in text.Split('\n'))
        {
            if (line == "")
            {

                result += '\n';
                continue;
            }
            if (commentSymbols.Contains(line.Substring(0, 1)))
            {
                result += '\n';
                continue;
            }
            foreach (char c in line)
            {
                if (commentSymbols.Contains(c.ToString()))
                {
                    break;
                }
                else
                {
                    result += c;
                }
            }
            result = result.Trim();
            result += '\n';
        }
        return result.Substring(0, result.Length - 1);
    }
}