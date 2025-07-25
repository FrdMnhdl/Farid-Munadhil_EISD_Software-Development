def ada_duplikat(data):
    return len(data) != len(set(data))

print(ada_duplikat([1, 2, 3, 4, 2, 6, 7, 2, 3, 1, 2]))  

