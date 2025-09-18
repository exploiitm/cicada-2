from Crypto.Util.number import bytes_to_long, getStrongPrime

if __name__ == "__main__":
    with open("flag.txt", "rb") as f:
        flag = f.read()
    assert len(flag) == 156

    e = 3
    p = getStrongPrime(1024, e=e)
    q = getStrongPrime(1024, e=e)
    n = p * q

    phi = (p - 1) * (q - 1)
    d = pow(e, -1, phi)
    enc_d = pow(d, 2, n)
    enc_phi = pow(phi, 2, n)
    enc_flag = pow(bytes_to_long(flag), e, n)

    print(f"{n = }")
    print(f"{enc_d = }")
    print(f"{enc_phi = }")
    print(f"{enc_flag = }")
