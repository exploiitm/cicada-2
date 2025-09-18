n: int = 1
enc_d: int = 1
enc_phi: int = 1
enc_flag: int = 1

exec(open("output.txt").read())

e = 3

from Crypto.Util.number import long_to_bytes

for k in range(1, 5):
    phi = ((9 * enc_d - k * k * enc_phi - 1) * pow(2 * k, -1, n)) % n

    if (k * phi + 1) % e != 0:
        continue

    d = (k * phi + 1) // e
    if pow(d, 2, n) != enc_d:
        continue

    print(k)
    print(long_to_bytes(pow(enc_flag, d, n)).decode())
    break
