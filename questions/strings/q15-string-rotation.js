const Q_STRINGS_15 = {
  id: "strings-15",
  title: "Check if String is a Rotation of Another",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A circular conveyor belt tracking system checks if one sequence of items is a rotation of another.",
  description: 
    "Given two strings S1 and S2 of equal length, print \"YES\" if S1 is a rotation of S2, else \"NO\".",
  constraints: [
    "1 ≤ |S1| = |S2| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S1\nLine 2: String S2",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "abcde\ncdeab",
      output: "YES",
      explanation: "Rotation by 2 yields abcde -> cdeab."
    }
  ],
  testCases: [
    { id: 1, input: "abcde\ncdeab", expected: "YES", hidden: false },
    { id: 2, input: "abcde\nabced", expected: "NO", hidden: false },
    { id: 3, input: "a\na", expected: "YES", hidden: true },
    { id: 4, input: "ab\nba", expected: "YES", hidden: true }
  ],
  bruteForce: {
    approach: "Compare all rotations of S1 by slicing.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `s1 = input().strip()
s2 = input().strip()

if len(s1) != len(s2):
    print("NO")
else:
    match = False
    for i in range(len(s1)):
        # rotate by i
        rotated = s1[i:] + s1[:i]
        if rotated == s2:
            match = True
            break
    print("YES" if match else "NO")`
  },
  optimal: {
    approach: "Concatenate S1 to S1. If S2 is a rotation, it must be a substring of S1+S1.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s1 = input().strip()
s2 = input().strip()

if len(s1) == len(s2) and s2 in (s1 + s1):
    print("YES")
else:
    print("NO")`
  }
};
