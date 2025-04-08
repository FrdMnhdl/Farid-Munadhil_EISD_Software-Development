def cek_palindrom(kalimat):
    kalimatt = kalimat.lower().replace(" ", "")
    if kalimatt == kalimatt[::-1]:
        return "eureeka!"
    else:
        return "suka blyat"

print(cek_palindrom("Aku Suka Kamu "))
print(cek_palindrom("Ibu Ratna antar ubi"))
