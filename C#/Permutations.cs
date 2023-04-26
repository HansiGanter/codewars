using System;
using System.Collections.Generic;
using System.Linq;

// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

class Permutations
{

    public static List<string> permut = new List<string>();

    public static List<string> SinglePermutations(string s)
    {
        char[] arr = s.ToCharArray();
        GetPermutation(arr);
        var result = permut.Distinct().ToList();
        Console.Write("[" + String.Join(", ", result) + "]");

        return permut.Distinct().ToList();
    }

    public static void Swap(ref char a, ref char b)
    {
        if (a == b) return;

        var temp = a;
        a = b;
        b = temp;
    }

    public static void GetPermutation(char[] list)
    {
        int x = list.Length - 1;
        GetPer(list, 0, x);
    }

    public static void GetPer(char[] list, int k, int m)
    {
        if (k == m && list.Length - 1 == m)
        {
            // permut.Add("\"" + new string(list) + "\"");
            Console.WriteLine(new string(list));
            permut.Add(new string(list));
        }
        else
            for (int i = k; i <= m; i++)
            {
                Swap(ref list[k], ref list[i]);
                GetPer(list, k + 1, m);
                Swap(ref list[k], ref list[i]);
            }
    }
}