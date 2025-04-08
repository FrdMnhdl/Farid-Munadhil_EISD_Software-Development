def ringkasan_rating(data_rating):
    terendah = min(data_rating)
    tertinggi = max(data_rating)
    rata_rata = round(sum(data_rating) / len(data_rating), 1)
    return [terendah, tertinggi, rata_rata]

print(ringkasan_rating([5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]))