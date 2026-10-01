import random
import re
from collections import Counter

class EuroforumCodeGenerator:
    def __init__(self, existing_codes):
        self.codes = [c for c in existing_codes if c.strip()]
        self.years = set()
        self.weeks_by_year = {}
        self.days = set()
        self.letter_pairs = []
        self.num_lengths = Counter()
        self.num_prefixes = Counter()
        
        for code in self.codes:
            match = re.match(r'^D(\d{2})(\d{2})(\d{3})([A-Z]{2})(\d+)$', code)
            if match:
                year, week, day, letters, numbers = match.groups()
                self.years.add(year)
                self.days.add(day)
                self.letter_pairs.append(letters)
                self.num_lengths[len(numbers)] += 1
                
                if year not in self.weeks_by_year:
                    self.weeks_by_year[year] = set()
                self.weeks_by_year[year].add(week)
                
                # Track number prefixes
                if len(numbers) >= 2:
                    self.num_prefixes[numbers[:2]] += 1
    
    def generate(self):
        # Pick a year from the range we've seen
        year = random.choice(list(self.years))
        
        # Generate a week - either existing or fill gaps
        existing_weeks = self.weeks_by_year.get(year, set())
        if existing_weeks:
            min_week = int(min(existing_weeks))
            max_week = int(max(existing_weeks))
            # Pick a week in the range, favoring existing weeks but allowing gaps
            if random.random() < 0.7:  # 70% chance existing week
                week = random.choice(list(existing_weeks))
            else:  # 30% chance fill a gap
                all_weeks = set(str(w).zfill(2) for w in range(min_week, max_week + 1))
                gaps = all_weeks - existing_weeks
                if gaps:
                    week = random.choice(list(gaps))
                else:
                    week = random.choice(list(existing_weeks))
        else:
            week = str(random.randint(1, 52)).zfill(2)
        
        # Generate day - similar to existing ones
        if random.random() < 0.8:
            day = random.choice(list(self.days))
        else:
            day = str(random.randint(1, 28)).zfill(2)
        
        # Generate letters - use existing pairs or create similar ones
        if random.random() < 0.6:
            letters = random.choice(self.letter_pairs)
        else:
            # Create new pair based on common letters
            all_letters = ''.join(self.letter_pairs)
            letter1 = random.choice(all_letters[::2])  # First letters
            letter2 = random.choice(all_letters[1::2])  # Second letters
            letters = letter1 + letter2
        
        # Generate numbers
        num_len = random.choices(list(self.num_lengths.keys()), 
                                weights=list(self.num_lengths.values()))[0]
        
        # Sometimes use existing number prefixes
        if random.random() < 0.5 and self.num_prefixes:
            prefix = random.choices(list(self.num_prefixes.keys()), 
                                   weights=list(self.num_prefixes.values()))[0]
            remaining = num_len - len(prefix)
            numbers = prefix + ''.join([str(random.randint(0, 9)) for _ in range(remaining)])
        else:
            numbers = str(random.randint(10**(num_len-1), 10**num_len-1))
        
        return f"D{year}{week}{day}{letters}{numbers}"


# Usage
existing_codes = [
    "D2600666AP19466", "D2600667GC00489", "D2600474ZK02171",
    "D2600440KY02658", "D2600354HZ05931", "D2600265SA16001",
    "D2600036CE08138", "D2600035UL01005", "D2502027DV10645",
    "D2502102KK15576", "D2500848VJ09025", "D2501989MA05157",
    "D2501937NA13901", "D2501717AP05393", "D2501374JA04754",
    "D2501103JJ12981", "D2500984YS01181", "D2500906LY09908",
    "D2500606WH02722", "D2301250WU15441", "D2500671UX01495",
    "D2500639UC01375", "D2401716WC13914", "D2401563QY00432",
    "D2401394GV00451", "D2401260TU09303", "D2401265LP08265",
    "D2401171DW04793", "D2400772EQ04397", "D2400941XN03296",
    "D2400540NG06140", "D2400628PT00860", "D2400565RG08018",
    "D2400546PG02414", "D2400514QM17707", "D2400457LZ08447",
    "D2400429NP08216", "D2400029NA13558", "D2301602RX02001",
    "D2301218DZ08052", "D2301116EN00615", "D2300891XM05545",
    "D2300891TT04092", "D2300895PA14013"
]

gen = EuroforumCodeGenerator(existing_codes)

# Generate and save
with open('results.txt', 'w') as f:
    for _ in range(1000):
        f.write(gen.generate() + '\n')

print("Generated 100 codes filling gaps between existing patterns - saved to results.txt")