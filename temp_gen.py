import os
base = os.path.join(os.getcwd(), 'questions', 'arrays')
questions = [
    (1, 'Move Zeroes to End', 'Easy'),
    (2, 'Second Largest Element', 'Easy'),
    (3, 'Missing Number', 'Easy'),
    (4, 'Two Sum', 'Easy'),
    (5, 'Rotate Array', 'Easy'),
    (6, 'Find Duplicate Number', 'Medium'),
    (7, 'Maximum Subarray Sum', 'Easy'),
    (8, 'Best Time to Buy and Sell Stock', 'Easy'),
    (9, 'Majority Element', 'Easy'),
    (10, 'Remove Duplicates from Sorted Array', 'Easy'),
    (11, 'Leaders in Array', 'Medium'),
    (12, 'Rearrange Array Alternately', 'Medium'),
    (13, 'Union of Two Arrays', 'Easy'),
    (14, 'Intersection of Two Arrays', 'Easy'),
    (15, 'Longest Consecutive Sequence', 'Medium'),
    (16, 'Subarray with Given Sum', 'Medium'),
    (17, 'Count Pairs with Given Sum', 'Medium'),
    (18, 'Equilibrium Index', 'Hard'),
    (19, 'Product of Array Except Self', 'Hard'),
    (20, 'Missing and Repeating Number', 'Hard'),
]

def python_code(id):
    if id==1:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nwrite=0\nfor i in range(n):\n    if arr[i]!=0:\n        arr[write]=arr[i]; write+=1\nfor i in range(write,n):\n    arr[i]=0\nprint(*arr)'
    if id==2:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nif n<2: print(-1); exit()\nfirst=second=-10**18\nfor x in arr:\n    if x>first:\n        second=first; first=x\n    elif x>second and x!=first:\n        second=x\nprint(second if second!=-10**18 else -1)'
    if id==3:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nprint((n*(n+1)//2)-sum(arr))'
    if id==4:
        return 'n=int(input()); target=int(input()); arr=[int(input()) for _ in range(n)]\nseen={}\nfor i,x in enumerate(arr):\n    r=target-x\n    if r in seen:\n        print(seen[r], i); break\n    seen[x]=i'
    if id==5:
        return 'n=int(input()); k=int(input())\narr=[int(input()) for _ in range(n)]\nk%=n\narr=arr[-k:]+arr[:-k] if n else arr\nprint(*arr)'
    if id==6:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nseen=set()\nfor x in arr:\n    if x in seen:\n        print(x); break\n    seen.add(x)'
    if id==7:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nmax_ending=max_so_far=arr[0]\nfor x in arr[1:]:\n    max_ending=max(x, max_ending+x)\n    max_so_far=max(max_so_far, max_ending)\nprint(max_so_far)'
    if id==8:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nmin_price=10**18; max_profit=0\nfor p in arr:\n    min_price=min(min_price,p)\n    max_profit=max(max_profit,p-min_price)\nprint(max_profit)'
    if id==9:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\ncount={}\nfor x in arr: count[x]=count.get(x,0)+1\nfor x,v in count.items():\n    if v>n//2: print(x); break\nelse: print(-1)'
    if id==10:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nif n==0: print(0); exit()\nwrite=1\nfor i in range(1,n):\n    if arr[i]!=arr[i-1]:\n        arr[write]=arr[i]; write+=1\nprint(write)'
    if id==11:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nres=[]; max_r=-10**18\nfor x in reversed(arr):\n    if x>max_r: res.append(x); max_r=x\nprint(*reversed(res))'
    if id==12:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nres=[None]*n\nlo,hi=0,n-1\nfor i in range(n):\n    res[i]=arr[hi] if i%2==0 else arr[lo]\n    if i%2==0: hi-=1\n    else: lo+=1\nprint(*res)'
    if id==13:
        return 'n=int(input())\narr=list(map(int,input().split()))\nm=int(input())\nb=list(map(int,input().split()))\nprint(*sorted(set(arr)|set(b)))'
    if id==14:
        return 'n=int(input())\narr=list(map(int,input().split()))\nm=int(input())\nb=list(map(int,input().split()))\nprint(*sorted(set(arr)&set(b)))'
    if id==15:
        return 'n=int(input())\narr=list(map(int,input().split()))\nsetA=set(arr); best=0\nfor x in setA:\n    if x-1 not in setA:\n        cur=x\n        while cur+1 in setA:\n            cur+=1\n        best=max(best,cur-x+1)\nprint(best)'
    if id==16:
        return 'n=int(input()); target=int(input()); arr=[int(input()) for _ in range(n)]\nleft=0; s=0\nfor right in range(n):\n    s+=arr[right]\n    while s>target and left<=right:\n        s-=arr[left]; left+=1\n    if s==target: print(left, right); break\nelse: print(-1,-1)'
    if id==17:
        return 'n=int(input())\ntarget=int(input()); arr=[int(input()) for _ in range(n)]\ncount={}; ans=0\nfor x in arr:\n    required=target-x\n    ans+=count.get(required,0)\n    count[x]=count.get(x,0)+1\nprint(ans)'
    if id==18:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\ntotal=sum(arr); left=0\nfor i,x in enumerate(arr):\n    if left==total-left-x:\n        print(i); break\n    left+=x\nelse: print(-1)'
    if id==19:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nres=[1]*n; prefix=1\nfor i in range(n):\n    res[i]=prefix; prefix*=arr[i]\nsuffix=1\nfor i in range(n-1,-1,-1):\n    res[i]*=suffix; suffix*=arr[i]\nprint(*res)'
    if id==20:
        return 'n=int(input())\narr=[int(input()) for _ in range(n)]\nseen=[False]*(n+2); dup=-1\nfor x in arr:\n    if seen[x]: dup=x; break\n    seen[x]=True\nmiss=-1\nfor i in range(1,n+1):\n    if not seen[i]: miss=i; break\nprint(miss, dup)'
    return ''

for num,title,difficulty in questions:
    if num==1:
        fname='q1-move-zeroes.js'
    else:
        slug=title.lower().replace(' ','-').replace('&','and').replace('>','').replace('/','').replace(':','')
        fname=f'q{num:02d}-{slug}.js'
    path=os.path.join(base,fname)
    if num==1 and os.path.exists(path):
        continue
    qid=f'arrays-{num}'
    code_text = python_code(num)
    content = f"""// ============================================================\n//  QUESTION: {title}\n//  Topic   : Arrays\n//  File    : questions/arrays/{fname}\n// ============================================================\n\nconst Q_ARRAYS_{num} = {{\n  id: '{qid}',\n  title: '{title}',\n  topic: 'Arrays',\n  difficulty: '{difficulty}',\n\n  realWorldContext: 'Auto-generated from prompt',\n  description: 'Auto-generated problem description from user list.',\n  constraints: ['1 = N = 105'],\n  inputFormat: 'As per problem statement',\n  outputFormat: 'As per problem statement',\n  examples: [{{ input: '...', output: '...' }}],\n  testCases: [{{ id: 1, input: '...', expected: '...', hidden: false }}],\n  bruteForce: {{ approach: 'Brute force approach', timeComplexity: 'O(N^2)', spaceComplexity: 'O(1)', code: '{code_text}' }},\n  optimal: {{ approach: 'Optimal approach', timeComplexity: 'O(N)', spaceComplexity: 'O(1)', code: '{code_text}' }},\n}};\n"""
    with open(path,'w',encoding='utf-8') as f:
        f.write(content)
print('generated', len(questions), 'files')
