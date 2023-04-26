using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, 
// in descending order of the number of occurrences.

// Assumptions:
// - A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// - Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// - Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// - Matches should be case-insensitive, and the words in the result should be lowercased.
// - Ties may be broken arbitrarily.
// - If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text 
//   contains no words.
// Examples:
//  top_3_words("In a village of La Mancha, the name of which I have no desire to call to
//  mind, there lived not long since one of those gentlemen that keep a lance
//  in the lance-rack, an old buckler, a lean hack, and a greyhound for
//  coursing. An olla of rather more beef than mutton, a salad on most
//  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
//  on Sundays, made away with three-quarters of his income.")
//  # => ["a", "of", "on"]

//  top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
//  # => ["e", "ddd", "aa"]

//  top_3_words("  //wont won't won't")
//  # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// - Avoid creating an array whose memory footprint is roughly as big as the input text.
// - Avoid sorting the entire array of unique words.

public class TopWords
{
    public static List<string> Top3(string s)
    {
        s = s.ToLower();
        StringBuilder sb = new StringBuilder();
        foreach (char c in s)
        {
            if ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '\'' || c == ' ')
            {
                sb.Append(c);
            }
        }
        s = sb.ToString();

        List<string> words = s.Split(' ').ToList();
        words.RemoveAll(x => x == "" || x == "'" || x == "''" || x == "'''");

        Dictionary<string, int> word_counter = new Dictionary<string, int>();
        foreach (string i in words.Distinct())
        {
            word_counter.Add(i, 0);
        }

        foreach (string w in words)
        {
            word_counter[w]++;
        }

        var sorted_word_counter = (from entry in word_counter orderby entry.Value descending select entry).ToDictionary(pair => pair.Key, pair => pair.Value);
        List<string> result = new List<string>(sorted_word_counter.Keys);

        if (result.Count() >= 3)
        {
            return new List<string>() { result[0], result[1], result[2] };
        }
        else if (result.Count() == 2)
        {
            return new List<string>() { result[0], result[1] };
        }
        else if (result.Count() == 1)
        {
            return new List<string>() { result[0] };
        }
        else
        {
            return new List<string>() { };
        }
    }
}