from Crypto.Util.number import getPrime, inverse, bytes_to_long
import random
import math

FLAG = b'<REDACTED>'


def keys():
    p = getPrime(1024)
    u = int(math.sqrt(p // 2))
    l = int(math.sqrt(p // 4))
    f = random.randint(2, u)
    while True:
        g = random.randint(l, u)
        if math.gcd(f, g) == 1:
            break
    h = (inverse(f, p)*g) % p
    return (p, h), (f, g)


def encrypt(p, h, m):
    assert m < int(math.sqrt(p // 2))
    r = random.randint(2, int(math.sqrt(p// 2)))
    e = (r*h + m) % p
    return e

pub, pri = keys()
p, h = pub
f, g = pri

m = bytes_to_long(FLAG)
e = encrypt(p, h, m)

print(f'Public key Is: {(p,h)}')
print(f'Encrypted Flag Is: {e}')

