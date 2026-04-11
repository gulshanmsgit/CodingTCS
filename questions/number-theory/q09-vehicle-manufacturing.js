const Q_NUMBER_9 = {
  id: "number-theory-09",
  title: "Vehicle Manufacturing Problem",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "An automobile company manufactures two-wheelers (TW) and four-wheelers (FW).",
  description: 
    "Given V (total vehicles) and W (total wheels), find how many of each type to produce. Print TW on line 1, FW on line 2. If no valid solution exists, print \"INVALID INPUT\".",
  constraints: [
    "1 ≤ V ≤ 10⁴",
    "1 ≤ W ≤ 4×10⁴"
  ],
  inputFormat: "Line 1: Integer V (total vehicles)\nLine 2: Integer W (total wheels)",
  outputFormat: "Line 1: Count of two-wheelers\nLine 2: Count of four-wheelers\nOR \"INVALID INPUT\"",
  examples: [
    {
      input: "4\n10",
      output: "3\n1",
      explanation: "3 TW * 2 wheels = 6. 1 FW * 4 wheels = 4. 6+4=10 wheels. Total vehicles 3+1=4."
    },
    {
      input: "2\n5",
      output: "INVALID INPUT",
      explanation: "No combination of 2s and 4s can sum to 5."
    }
  ],
  testCases: [
    { id: 1, input: "4\n10", expected: "3\n1", hidden: false },
    { id: 2, input: "2\n5", expected: "INVALID INPUT", hidden: false },
    { id: 3, input: "130\n400", expected: "60\n70", hidden: true },
    { id: 4, input: "200\n540", expected: "130\n70", hidden: true },
    { id: 5, input: "10\n100", expected: "INVALID INPUT", hidden: true }
  ],
  bruteForce: {
    approach: "Loop through possible number of TWs from 0 to V. If a combination matches W, print it.",
    timeComplexity: "O(V)",
    spaceComplexity: "O(1)",
    code: `v = int(input())
w = int(input())

ans_tw = -1
ans_fw = -1

for tw in range(v + 1):
    fw = v - tw
    if (tw * 2 + fw * 4) == w:
        ans_tw = tw
        ans_fw = fw
        break

if ans_tw == -1:
    print("INVALID INPUT")
else:
    print(ans_tw)
    print(ans_fw)`
  },
  optimal: {
    approach: "Solve the linear equations mathematically. Let TW=x, FW=y. x+y=V, 2x+4y=W. So y = (W - 2V)/2 and x = V - y. Valid if x >= 0, y >= 0, W is even, and 2V <= W <= 4V.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `v = int(input())
w = int(input())

if w % 2 != 0 or w < 2 * v or w > 4 * v:
    print("INVALID INPUT")
else:
    fw = (w - 2 * v) // 2
    tw = v - fw
    print(tw)
    print(fw)`
  }
};
