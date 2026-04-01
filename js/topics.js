// ============================================================
//  TOPICS REGISTRY
//  To add a new topic: add an entry here and create its folder
//  under questions/<topic-id>/
// ============================================================

const TOPICS = [
  {
    id: "arrays",
    name: "Arrays",
    icon: "⚡",
    color: "#00d4ff",
    description: "Most frequent in TCS NQT — two pointers, sliding window, prefix sums",
    questionFiles: [
      "questions/arrays/q1-move-zeroes.js",
      "questions/arrays/q02-second-largest-element.js",
      "questions/arrays/q03-missing-number.js",
      "questions/arrays/q04-two-sum.js",
      "questions/arrays/q05-rotate-array.js",
      "questions/arrays/q06-find-duplicate-number.js",
      "questions/arrays/q07-maximum-subarray-sum.js",
      "questions/arrays/q08-best-time-to-buy-and-sell-stock.js",
      "questions/arrays/q09-majority-element.js",
      "questions/arrays/q10-remove-duplicates-from-sorted-array.js",
      "questions/arrays/q11-leaders-in-array.js",
      "questions/arrays/q12-rearrange-array-alternately.js",
      "questions/arrays/q13-union-of-two-arrays.js",
      "questions/arrays/q14-intersection-of-two-arrays.js",
      "questions/arrays/q15-longest-consecutive-sequence.js",
      "questions/arrays/q16-subarray-with-given-sum.js",
      "questions/arrays/q17-count-pairs-with-given-sum.js",
      "questions/arrays/q18-equilibrium-index.js",
      "questions/arrays/q19-product-of-array-except-self.js",
      "questions/arrays/q20-missing-and-repeating-number.js",
    ]
  },
  {
    id: "strings",
    name: "Strings",
    icon: "🔤",
    color: "#ff6b6b",
    description: "Palindromes, anagrams, frequency maps — expect 1-2 questions",
    questionFiles: []
  },
  {
    id: "sorting",
    name: "Sorting",
    icon: "📊",
    color: "#6bcb77",
    description: "Dutch National Flag, custom comparators, merge sort variants",
    questionFiles: []
  },
  {
    id: "number-theory",
    name: "Number Theory",
    icon: "🔢",
    color: "#ffd93d",
    description: "Vehicle problems, AP/GP, prime, GCD/LCM — TCS loves word problems",
    questionFiles: []
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    icon: "🧩",
    color: "#c77dff",
    description: "Subset sum, knapsack variants — appears in advanced round",
    questionFiles: []
  },
];