#I said, I dont think sage can solve this 😎 and my friend nodded.


from secrets import a, b
from collections import namedtuple
from Crypto.Util.number import inverse, bytes_to_long




FLAG = b"<REDACTED>"


coordinate = namedtuple("coordinate", "x y")

o = 'inf'


def check(P):
    if P == o:
        return True
    else:
        return (P.y**2 - (P.x**3 + a*P.x + b)) % p == 0 and 0 <= P.x < p and 0 <= P.y < p


def pinverse(P):
    if P == o:
        return P
    return coordinate(P.x, -P.y % p)


def addition(P, Q):
    if P == o:
        return Q
    elif Q == o:
        return P
    elif Q == pinverse(P):
        return o
    else:
        if P == Q:
            l = (3*P.x**2 + a)*inverse(2*P.y, p)
            l%= p
        else:
            l= (Q.y - P.y) * inverse((Q.x - P.x), p)
            l%= p
    Sx = (l**2 - P.x - Q.x) % p
    Sy = (l*(P.x - Sx) - P.y) % p
    S = coordinate(Sx, Sy)
    assert check(S)
    return S


def dbl(P, n):
    Q = P
    S = o
    while n > 0:
        if n % 2 == 1:
            S = addition(S, Q)
        Q = addition(Q, Q)
        n = n // 2
    assert check(S)
    return S


def public_key():
    d = bytes_to_long(FLAG)
    return dbl(G, d)

p=8027944432202837970016382166567613248055695684315346001687786051508079095211
# a and b are hidden :(


gx =2105875689926932895143196884562047110500169848659102540268132432000998177662
gy = 229423364975599771276867046437732535419264207423006298355584008095715972502
G = coordinate(gx, gy)
Q = public_key()

print(Q)
