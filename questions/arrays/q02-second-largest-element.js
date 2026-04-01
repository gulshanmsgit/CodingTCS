// ============================================================
//  QUESTION: Second Largest Element
//  Topic   : Arrays
//  File    : questions/arrays/q02-second-largest-element.js
// ============================================================

const Q_ARRAYS_2 = {
  id: 'arrays-2',
  title: 'Second Largest Element',
  topic: 'Arrays',
  difficulty: 'Easy',

  realWorldContext:
    'A manufacturing plant compares daily output to find the runner-up value.',

  description:
    'Given an array of production counts, return the second largest distinct element or -1 if none.',

  constraints: [
    '2 ≤ N ≤ 10⁵',
  ],

  inputFormat:
    'First line: N\nNext N lines: arr[i]',

  outputFormat:
    'Single integer representing second largest value or -1',

  examples: [
    { input: '5\n1\n3\n4\n4\n2', output: '3' },
    { input: '3\n5\n5\n5', output: '-1' },
  ],

  testCases: [
    { id: 1, input: '5\n1\n3\n4\n4\n2', expected: '3', hidden: false },
    { id: 2, input: '3\n5\n5\n5', expected: '-1', hidden: true },
  ],

  bruteForce: {
    approach: 'Sort and scan distinct values.',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(N)',
    code: `n=int(input())\narr=[int(input()) for _ in range(n)]\narr=sorted(set(arr))\nprint(arr[-2] if len(arr)>1 else -1)`,
  },

  optimal: {
    approach: 'Single pass tracking top two values.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    code: `n=int(input())\narr=[int(input()) for _ in range(n)]\nfirst=second=-10**18\nfor x in arr:\n    if x>first:\n        second=first; first=x\n    elif x>second and x<first:\n        second=x\nprint(second if second!=-10**18 else -1)`,
  },
};

