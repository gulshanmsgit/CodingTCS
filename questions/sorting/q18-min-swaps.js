const Q_SORTING_18 = {
  id: "sorting-18",
  title: "Minimum Swaps to Sort Array",
  topic: "Sorting",
  difficulty: "Hard",
  realWorldContext: "A robotic shelf organiser calculates the minimum number of non-adjacent swaps needed to arrange items in order.",
  description: 
    "Given an array of N distinct integers, find the minimum number of swaps required to sort it.",
  constraints: [
    "1 ≤ N ≤ 10⁵",
    "1 ≤ arr[i] ≤ N (distinct)"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated distinct integers",
  outputFormat: "Single integer — minimum swaps",
  examples: [
    {
      input: "5\n4 3 1 2 5",
      output: "3",
      explanation: "Swap 1&4 -> 1 3 4 2 5. Swap 2&3 -> 1 2 4 3 5. Swap 3&4 -> 1 2 3 4 5."
    }
  ],
  testCases: [
    { id: 1, input: "5\n4 3 1 2 5", expected: "3", hidden: false },
    { id: 2, input: "4\n4 3 2 1", expected: "2", hidden: false },
    { id: 3, input: "3\n1 2 3", expected: "0", hidden: true },
    { id: 4, input: "6\n2 3 4 5 6 1", expected: "5", hidden: true }
  ],
  bruteForce: {
    approach: "Create a copy array, sort it, trace elements using index mapping. Time bounded by element lookup via list.index().",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))

ans = 0
sorted_arr = sorted(arr)

def get_idx(val):
    for i in range(n):
        if arr[i] == val:
            return i

for i in range(n):
    if arr[i] != sorted_arr[i]:
        ans += 1
        curr_idx = get_idx(sorted_arr[i])
        arr[i], arr[curr_idx] = arr[curr_idx], arr[i]
        
print(ans)`
  },
  optimal: {
    approach: "Graph cyclic tracing: Store array visually matching indices. Count graph component circles lengths.",
    timeComplexity: "O(N log N) dominated by sorting",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))

# Since array items can be random distinct nums, pair them with positions
arr_pos = [(arr[i], i) for i in range(n)]

# Sort the array by element values to find their target positions
arr_pos.sort(key=lambda it: it[0])

vis = {i: False for i in range(n)}
ans = 0

for i in range(n):
    # Already visited or already at correct position
    if vis[i] or arr_pos[i][1] == i:
        continue
        
    cycle_size = 0
    j = i
    
    # Trace the cycle
    while not vis[j]:
        vis[j] = True
        j = arr_pos[j][1]
        cycle_size += 1
        
    # If cycle size > 1, add (size - 1) swaps to total
    if cycle_size > 0:
        ans += (cycle_size - 1)
        
print(ans)`
  }
};
