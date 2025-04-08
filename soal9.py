from collections import Counter

def anak_nakal(data):
    hitung = Counter(data)
    if not hitung:
        return "Semuanya anak baik"
    paling_banyak = hitung.most_common()
    jumlah_terbanyak = paling_banyak[0][1]
    hasil = []
    for nama, jumlah in paling_banyak:
        if jumlah == jumlah_terbanyak:
            hasil.append(f"{nama} Nackal")
    if hasil:
        return ", ".join(hasil)
    else:
        return "Semuanya anak baik"

data = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar", "Fajar"]
print(anak_nakal(data))

