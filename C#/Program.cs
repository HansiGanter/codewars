

Console.WriteLine($"Version: {Environment.Version}");

// Permutations
// Permutations.SinglePermutations("aabb");

// TopWords

// List<string> x;
// x = TopWords.Top3("a a a  b  c c  d d d d  e e e e e");
// x = TopWords.Top3("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e");
// x = TopWords.Top3("  //wont won't won't ");
// x = TopWords.Top3("  , e   .. ");
// x = TopWords.Top3("  ...  ");
// x = TopWords.Top3("  '  ");
// x = TopWords.Top3("  '''  ");
// x = TopWords.Top3(
//     string.Join("\n", new string[]{"In a village of La Mancha, the name of which I have no desire to call to",
//                   "mind, there lived not long since one of those gentlemen that keep a lance",
//                   "in the lance-rack, an old buckler, a lean hack, and a greyhound for",
//                   "coursing. An olla of rather more beef than mutton, a salad on most",
//                   "nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra",
//                   "on Sundays, made away with three-quarters of his income." }));

// Strip Comments

Console.WriteLine(StripCommentsSolution.StripComments("\n\n\n#\n#asdf\n#Hallo\n Tschüss", new[] { "#", "!" }));
Console.WriteLine(StripCommentsSolution.StripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new[] { "#", "!" }));