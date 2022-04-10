def GCD(x, y) :
    '''
    x, y의 최대공약수를 반환하는 함수
    input: 1071 1029
    output: 21
    '''
    if y == 0:
        return x
    return GCD(y, x % y)

def main():
    data = input()

    x = int(data.split()[0])
    y = int(data.split()[1])

    print(GCD(x, y))
