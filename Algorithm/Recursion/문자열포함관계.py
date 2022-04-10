def strContain(A, B) :
    '''
    문자열 A의 알파벳이 문자열 B에 모두 포함되어 있으면 "Yes", 아니면 "No"를 반환
    input: mef
    myself
    output: Yes
    '''
    setA = set(list(A))
    setB = set(list(B))
    
    if setA & setB == setA:
        return "Yes"
    return "No"

def main():
    A = input()
    B = input()

    print(strContain(A, B))
