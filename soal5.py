def jumlah_kombinasi():
    huruf = "naiplovyu"
    n = len(huruf) 
    total = 0
    for panjang in range(1, 7):  
        total += n ** panjang
    return total

print("Jumlah kombinasi username:", jumlah_kombinasi())
