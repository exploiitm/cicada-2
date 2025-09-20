#!/usr/bin/python3

import os
import signal
import sys

from aes import AES


def tle_handler(*_):
    print("SIKE too late")
    sys.exit(0)


def challenge():
    k = os.urandom(16)
    aes = AES(k)

    # I will encrypt 15 messages for you, that's it :)
    for _ in range(15):
        try:
            m = bytes.fromhex(input("MSG: "))
        except:
            raise Exception(
                "Bruh do you know what hex bytes are?\nEven length 0-9, a-f"
            )
        c = aes.encrypt(m)
        print("ENC: ", c.hex())

    _k = bytes.fromhex(input("KEY: "))
    if k != _k:
        raise Exception("incorrect guess!\nByeee loser")


def main():
    signal.signal(signal.SIGALRM, tle_handler)
    signal.alarm(300)

    with open("flag.txt", "r") as f:
        flag = f.read()

    try:
        challenge()
        print("Good job browski")
        print(flag)
    except Exception as e:
        print(e.args[0])


if __name__ == "__main__":
    main()
