def reverseString(s):
    s = list(s)

    start = 0
    end = len(s)-1

    while(start < end):
        s[start] , s[end] = s[end], s[start]

    return s


inputstring = "input"

ans = reverseString(inputstring)
print(ans)