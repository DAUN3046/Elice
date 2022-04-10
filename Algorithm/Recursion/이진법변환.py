def convertBinary(n) :
    '''
    input: 19
    output: "10011"
    '''
    temp = ""
    
    if n < 1:
        return temp
        
    if n % 2 == 0: return convertBinary(n//2) + "0"
    else: return convertBinary(n//2) + "1"

def main():
    n = int(input())
    print(convertBinary(n))
