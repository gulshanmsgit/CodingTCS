const QUESTIONS = [
  {
    id: 1,
    topic: "Arrays",
    title: "Move Zeroes to End",
    difficulty: "Easy",
    realWorldContext: "A chocolate factory packs chocolates into packets. Empty packets (represented as 0) must be pushed to the end of the conveyor belt array while maintaining the order of filled packets.",
    description: `Given an array of N integers, move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.\n\nDo not return a new array — modify the given array in-place.`,
    constraints: [
      "1 ≤ N ≤ 10^5",
      "0 ≤ arr[i] ≤ 10^9",
    ],
    inputFormat: `First line: Integer N (size of array)\nNext N lines: Each element arr[i] on a new line`,
    outputFormat: `N space-separated integers on one line`,
    examples: [
      {
        input: "8\n4\n5\n0\n1\n9\n0\n5\n0",
        output: "4 5 1 9 5 0 0 0",
        explanation: "Three zeros (empty packets) are pushed to the end."
      },
      {
        input: "5\n0\n0\n1\n2\n3",
        output: "1 2 3 0 0",
        explanation: "Two leading zeros moved to end, non-zero order preserved."
      }
    ],
    testCases: [
      { input: "8\n4\n5\n0\n1\n9\n0\n5\n0", expected: "4 5 1 9 5 0 0 0", hidden: false },
      { input: "5\n0\n0\n1\n2\n3", expected: "1 2 3 0 0", hidden: false },
      { input: "1\n0", expected: "0", hidden: true },
      { input: "4\n1\n2\n3\n4", expected: "1 2 3 4", hidden: true },
      { input: "3\n0\n0\n0", expected: "0 0 0", hidden: true },
    ],
    bruteForce: {
      approach: "Create a separate list, collect non-zeros first, append zeros at the end.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      code: `n = int(input())
arr = [int(input()) for _ in range(n)]

# Brute Force: Use extra space
result = [x for x in arr if x != 0]
result += [0] * (n - len(result))

print(*result)`
    },
    optimal: {
      approach: "Two-pointer technique: maintain a write pointer. Iterate and place non-zeros at write pointer position, then fill remaining with zeros.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = [int(input()) for _ in range(n)]

# Optimal: Two-pointer in-place
write = 0
for i in range(n):
    if arr[i] != 0:
        arr[write] = arr[i]
        write += 1

while write < n:
    arr[write] = 0
    write += 1

print(*arr)`
    }
  },

  {
    id: 2,
    topic: "Strings",
    title: "First Non-Repeating Character",
    difficulty: "Easy",
    realWorldContext: "A library system needs to find the first unique book code in a sequence of returned books. Find the first character in a string that does not repeat.",
    description: `Given a string S, find the first non-repeating character in it and return its index (0-based). If every character repeats, return -1.`,
    constraints: [
      "1 ≤ |S| ≤ 10^5",
      "S contains only lowercase English letters"
    ],
    inputFormat: `Single line: String S`,
    outputFormat: `Integer index (0-based) of first non-repeating character, or -1`,
    examples: [
      {
        input: "loveleetcode",
        output: "2",
        explanation: "'v' at index 2 is the first character that appears only once."
      },
      {
        input: "aabb",
        output: "-1",
        explanation: "All characters repeat, so output is -1."
      }
    ],
    testCases: [
      { input: "loveleetcode", expected: "2", hidden: false },
      { input: "aabb", expected: "-1", hidden: false },
      { input: "z", expected: "0", hidden: true },
      { input: "abcabc", expected: "-1", hidden: true },
      { input: "abacabad", expected: "4", hidden: true },
    ],
    bruteForce: {
      approach: "For each character, scan the entire string to check if it appears more than once.",
      timeComplexity: "O(N²)",
      spaceComplexity: "O(1)",
      code: `s = input()

# Brute Force: O(N^2) - check every char against all others
result = -1
for i in range(len(s)):
    found = False
    for j in range(len(s)):
        if i != j and s[i] == s[j]:
            found = True
            break
    if not found:
        result = i
        break

print(result)`
    },
    optimal: {
      approach: "Use a frequency dictionary (hash map). First pass: count frequencies. Second pass: return index of first char with frequency 1.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1) — at most 26 keys",
      code: `s = input()

# Optimal: Two-pass with hash map
from collections import Counter
freq = Counter(s)

for i, ch in enumerate(s):
    if freq[ch] == 1:
        print(i)
        break
else:
    print(-1)`
    }
  },

  {
    id: 3,
    topic: "Number Theory",
    title: "Vehicle Manufacturing Problem",
    difficulty: "Easy",
    realWorldContext: "An automobile company manufactures two-wheelers (TW) and four-wheelers (FW). Given total vehicles V and total wheels W, find how many of each type to manufacture.",
    description: `Given V (total vehicles) and W (total wheels), find the count of two-wheelers (TW) and four-wheelers (FW).\n\nUse the equations:\n• TW + FW = V\n• 2×TW + 4×FW = W\n\nPrint "INVALID INPUT" if inputs don't satisfy constraints or have no valid integer solution.`,
    constraints: [
      "1 ≤ V ≤ 10^4",
      "1 ≤ W ≤ 4×10^4",
      "W must be even",
      "TW ≥ 0, FW ≥ 0"
    ],
    inputFormat: `Line 1: Integer V (total vehicles)\nLine 2: Integer W (total wheels)`,
    outputFormat: `Number of two-wheelers\nNumber of four-wheelers\n\nOR "INVALID INPUT"`,
    examples: [
      {
        input: "4\n10",
        output: "3\n1",
        explanation: "3 two-wheelers (6 wheels) + 1 four-wheeler (4 wheels) = 10 wheels, 4 vehicles."
      },
      {
        input: "2\n5",
        output: "INVALID INPUT",
        explanation: "5 is odd, can't be distributed in 2s and 4s."
      }
    ],
    testCases: [
      { input: "4\n10", expected: "3\n1", hidden: false },
      { input: "2\n5", expected: "INVALID INPUT", hidden: false },
      { input: "10\n20", expected: "10\n0", hidden: true },
      { input: "5\n14", expected: "3\n2", hidden: true },
      { input: "3\n14", expected: "INVALID INPUT", hidden: true },
    ],
    bruteForce: {
      approach: "Try all combinations of TW from 0 to V, check if FW = V - TW gives correct wheels.",
      timeComplexity: "O(V)",
      spaceComplexity: "O(1)",
      code: `V = int(input())
W = int(input())

# Brute Force: Iterate all possible TW counts
found = False
for tw in range(V + 1):
    fw = V - tw
    if 2 * tw + 4 * fw == W:
        print(tw)
        print(fw)
        found = True
        break

if not found:
    print("INVALID INPUT")`
    },
    optimal: {
      approach: "Direct algebra: FW = (W - 2V) / 2. Validate before computing.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      code: `V = int(input())
W = int(input())

# Optimal: Direct math solution
# TW + FW = V  =>  TW = V - FW
# 2*TW + 4*FW = W  =>  2*(V-FW) + 4*FW = W  =>  FW = (W-2V)/2

numerator = W - 2 * V
if numerator < 0 or numerator % 2 != 0:
    print("INVALID INPUT")
else:
    fw = numerator // 2
    tw = V - fw
    if tw < 0 or fw < 0:
        print("INVALID INPUT")
    else:
        print(tw)
        print(fw)`
    }
  },

  {
    id: 4,
    topic: "Arrays",
    title: "Second Largest Element",
    difficulty: "Easy",
    realWorldContext: "In a gem-sorting machine, find the gem with the second-highest value from a collection of N gems.",
    description: `Given an array of N integers, find the second largest distinct element. If no second largest exists (all elements are the same), print -1.`,
    constraints: [
      "2 ≤ N ≤ 10^6",
      "-10^9 ≤ arr[i] ≤ 10^9"
    ],
    inputFormat: `Line 1: Integer N\nLine 2: N space-separated integers`,
    outputFormat: `Single integer — the second largest element, or -1`,
    examples: [
      {
        input: "5\n12 35 1 10 34",
        output: "34",
        explanation: "Largest is 35, second largest is 34."
      },
      {
        input: "4\n10 10 10 10",
        output: "-1",
        explanation: "All elements are equal, no second largest exists."
      }
    ],
    testCases: [
      { input: "5\n12 35 1 10 34", expected: "34", hidden: false },
      { input: "4\n10 10 10 10", expected: "-1", hidden: false },
      { input: "2\n1 2", expected: "1", hidden: true },
      { input: "3\n5 5 3", expected: "3", hidden: true },
      { input: "6\n-1 -2 -3 -4 -5 -6", expected: "-2", hidden: true },
    ],
    bruteForce: {
      approach: "Sort the array in descending order, then find the first element different from the max.",
      timeComplexity: "O(N log N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Brute Force: Sort descending, find first different element
arr.sort(reverse=True)
first = arr[0]
second = -1
for x in arr:
    if x != first:
        second = x
        break

print(second)`
    },
    optimal: {
      approach: "Single pass with two variables: track largest and second_largest simultaneously.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Optimal: Single pass, two variables
largest = float('-inf')
second = float('-inf')

for x in arr:
    if x > largest:
        second = largest
        largest = x
    elif x > second and x != largest:
        second = x

print(second if second != float('-inf') else -1)`
    }
  },

  {
    id: 5,
    topic: "Number Theory",
    title: "Count Subsets with Given Sum",
    difficulty: "Medium",
    realWorldContext: "A game store manager has N game cartridges with different values. Find how many subsets of cartridges sum exactly to a target value S.",
    description: `Given an array of N non-negative integers and a target sum S, count the number of subsets whose elements add up to exactly S.\n\nMultiple test cases are given. For each test case, print the count on a new line.`,
    constraints: [
      "1 ≤ T ≤ 10",
      "1 ≤ N ≤ 15",
      "0 ≤ arr[i] ≤ 100",
      "0 ≤ S ≤ 1000"
    ],
    inputFormat: `Line 1: T (number of test cases)\nFor each test case:\n  Line 1: N and S (space-separated)\n  Line 2: N space-separated integers`,
    outputFormat: `For each test case, print count of subsets with sum = S`,
    examples: [
      {
        input: "1\n4 5\n1 2 3 4",
        output: "2",
        explanation: "Subsets {1,4} and {2,3} both sum to 5."
      },
      {
        input: "2\n3 0\n0 0 0\n4 10\n1 2 3 4",
        output: "7\n1",
        explanation: "For sum=0: 7 subsets of zeros. For sum=10: only {1,2,3,4}."
      }
    ],
    testCases: [
      { input: "1\n4 5\n1 2 3 4", expected: "2", hidden: false },
      { input: "2\n3 0\n0 0 0\n4 10\n1 2 3 4", expected: "7\n1", hidden: false },
      { input: "1\n3 6\n1 2 3", expected: "1", hidden: true },
      { input: "1\n1 0\n5", expected: "0", hidden: true },
    ],
    bruteForce: {
      approach: "Generate all 2^N subsets using bitmask, compute sum for each, count matches.",
      timeComplexity: "O(T × 2^N × N)",
      spaceComplexity: "O(N)",
      code: `T = int(input())
for _ in range(T):
    line = input().split()
    n, s = int(line[0]), int(line[1])
    arr = list(map(int, input().split()))
    
    # Brute Force: All subsets via bitmask
    count = 0
    for mask in range(1 << n):
        subset_sum = 0
        for i in range(n):
            if mask & (1 << i):
                subset_sum += arr[i]
        if subset_sum == s:
            count += 1
    print(count)`
    },
    optimal: {
      approach: "Dynamic programming: dp[i][j] = number of subsets of first i elements with sum j.",
      timeComplexity: "O(T × N × S)",
      spaceComplexity: "O(N × S)",
      code: `T = int(input())
for _ in range(T):
    line = input().split()
    n, s = int(line[0]), int(line[1])
    arr = list(map(int, input().split()))
    
    # Optimal: DP approach
    # dp[j] = number of subsets with sum j
    dp = [0] * (s + 1)
    dp[0] = 1  # empty subset sums to 0
    
    for x in arr:
        # Traverse right to left to avoid using element twice
        for j in range(s, x - 1, -1):
            dp[j] += dp[j - x]
    
    print(dp[s])`
    }
  },

  {
    id: 6,
    topic: "Strings",
    title: "Check Palindrome",
    difficulty: "Easy",
    realWorldContext: "A security system validates palindrome-based access codes. Determine if a given string reads the same forwards and backwards.",
    description: `Given a string S, determine if it is a palindrome. A palindrome reads the same forwards and backwards.\n\nIgnore case and consider only alphanumeric characters.\n\nPrint "YES" if palindrome, otherwise "NO".`,
    constraints: [
      "1 ≤ |S| ≤ 10^5",
      "S may contain spaces, punctuation"
    ],
    inputFormat: `Single line: String S`,
    outputFormat: `"YES" or "NO"`,
    examples: [
      {
        input: "racecar",
        output: "YES",
        explanation: "racecar reversed is racecar."
      },
      {
        input: "hello",
        output: "NO",
        explanation: "hello reversed is olleh, which is different."
      }
    ],
    testCases: [
      { input: "racecar", expected: "YES", hidden: false },
      { input: "hello", expected: "NO", hidden: false },
      { input: "A man a plan a canal Panama", expected: "YES", hidden: true },
      { input: "Was it a car or a cat I saw", expected: "YES", hidden: true },
      { input: "abcba", expected: "YES", hidden: true },
    ],
    bruteForce: {
      approach: "Filter alphanumeric, convert to lowercase, reverse and compare strings.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      code: `s = input()

# Brute Force: Filter, reverse, compare
cleaned = ''.join(c.lower() for c in s if c.isalnum())
if cleaned == cleaned[::-1]:
    print("YES")
else:
    print("NO")`
    },
    optimal: {
      approach: "Two-pointer approach: compare characters from both ends moving inward, skip non-alphanumeric.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `s = input()

# Optimal: Two-pointer, no extra string
left, right = 0, len(s) - 1
is_palindrome = True

while left < right:
    while left < right and not s[left].isalnum():
        left += 1
    while left < right and not s[right].isalnum():
        right -= 1
    if s[left].lower() != s[right].lower():
        is_palindrome = False
        break
    left += 1
    right -= 1

print("YES" if is_palindrome else "NO")`
    }
  },

  {
    id: 7,
    topic: "Sorting",
    title: "Sort Array of 0s, 1s and 2s",
    difficulty: "Medium",
    realWorldContext: "A factory sorts colored gems into three groups: Red (0), White (1), Blue (2). Sort them in a single pass without using extra space.",
    description: `Given an array of N integers containing only 0s, 1s, and 2s, sort it in ascending order in-place using a single pass.\n\nThis is the classic Dutch National Flag problem.`,
    constraints: [
      "1 ≤ N ≤ 10^6",
      "arr[i] ∈ {0, 1, 2}"
    ],
    inputFormat: `Line 1: N\nLine 2: N space-separated integers (0, 1, or 2)`,
    outputFormat: `N space-separated integers in sorted order`,
    examples: [
      {
        input: "6\n0 1 2 0 1 2",
        output: "0 0 1 1 2 2",
        explanation: "All 0s first, then 1s, then 2s."
      },
      {
        input: "5\n2 0 2 1 1",
        output: "0 1 1 2 2",
        explanation: "Sorted using Dutch National Flag algorithm."
      }
    ],
    testCases: [
      { input: "6\n0 1 2 0 1 2", expected: "0 0 1 1 2 2", hidden: false },
      { input: "5\n2 0 2 1 1", expected: "0 1 1 2 2", hidden: false },
      { input: "3\n2 1 0", expected: "0 1 2", hidden: true },
      { input: "4\n1 1 1 1", expected: "1 1 1 1", hidden: true },
      { input: "1\n2", expected: "2", hidden: true },
    ],
    bruteForce: {
      approach: "Use built-in sort or count sort: count 0s, 1s, 2s then reconstruct array.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Brute Force: Count sort
c0 = arr.count(0)
c1 = arr.count(1)
c2 = arr.count(2)

result = [0]*c0 + [1]*c1 + [2]*c2
print(*result)`
    },
    optimal: {
      approach: "Dutch National Flag: Three pointers (low, mid, high). Single pass O(N) time, O(1) space.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Optimal: Dutch National Flag (single pass)
low, mid, high = 0, 0, n - 1

while mid <= high:
    if arr[mid] == 0:
        arr[low], arr[mid] = arr[mid], arr[low]
        low += 1
        mid += 1
    elif arr[mid] == 1:
        mid += 1
    else:  # arr[mid] == 2
        arr[mid], arr[high] = arr[high], arr[mid]
        high -= 1

print(*arr)`
    }
  },

  {
    id: 8,
    topic: "Number Theory",
    title: "Find Missing Number in Array",
    difficulty: "Easy",
    realWorldContext: "A teacher has N-1 student roll numbers from 1 to N. One roll number is missing. Find the missing number efficiently.",
    description: `Given an array of N-1 integers containing distinct values from 1 to N, find the missing number.\n\nThe array contains no duplicates and exactly one number is missing.`,
    constraints: [
      "2 ≤ N ≤ 10^6",
      "1 ≤ arr[i] ≤ N",
      "Array has N-1 elements"
    ],
    inputFormat: `Line 1: N\nLine 2: N-1 space-separated integers`,
    outputFormat: `Single integer — the missing number`,
    examples: [
      {
        input: "5\n1 2 4 5",
        output: "3",
        explanation: "Numbers 1-5, missing is 3."
      },
      {
        input: "3\n1 3",
        output: "2",
        explanation: "Numbers 1-3, missing is 2."
      }
    ],
    testCases: [
      { input: "5\n1 2 4 5", expected: "3", hidden: false },
      { input: "3\n1 3", expected: "2", hidden: false },
      { input: "2\n1", expected: "2", hidden: true },
      { input: "6\n2 3 4 5 6", expected: "1", hidden: true },
      { input: "4\n1 2 3", expected: "4", hidden: true },
    ],
    bruteForce: {
      approach: "Sort the array, then iterate to find the gap between consecutive elements.",
      timeComplexity: "O(N log N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Brute Force: Sort and scan
arr.sort()
for i in range(len(arr)):
    if arr[i] != i + 1:
        print(i + 1)
        break
else:
    print(n)`
    },
    optimal: {
      approach: "Expected sum of 1 to N = N*(N+1)/2. Subtract actual sum to get missing number. O(N) time, O(1) space.",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      code: `n = int(input())
arr = list(map(int, input().split()))

# Optimal: Math formula
expected = n * (n + 1) // 2
actual = sum(arr)
print(expected - actual)`
    }
  }
];

const TOPICS = [
  { name: "Arrays", icon: "⚡", count: 3, color: "#00d4ff" },
  { name: "Strings", icon: "🔤", count: 2, color: "#ff6b6b" },
  { name: "Number Theory", icon: "🔢", count: 2, color: "#ffd93d" },
  { name: "Sorting", icon: "📊", count: 1, color: "#6bcb77" },
  { name: "Dynamic Programming", icon: "🧩", count: 1, color: "#c77dff" },
];