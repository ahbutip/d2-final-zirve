import json
import re

files = [
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v9_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v10_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v11_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v12_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v13_part1.js"
]

all_anat = []

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the array content. Find the first '[' and then find ']' before '// --- FİZYOLOJİ'
    # Actually, we can just use regex to find objects with "subject": "Anatomi"
    matches = re.finditer(r'\{\s*"id":\s*"(v\d+_anat_\d+)"\s*,.*?"question":\s*"(.*?)"\s*,.*?"answer":\s*"(.*?)"\s*,.*?"explanation":\s*"(.*?)"\s*\}', content, re.DOTALL)
    
    for m in matches:
        all_anat.append({
            "id": m.group(1),
            "q": m.group(2).replace('\n', ' '),
            "a": m.group(3).replace('\n', ' '),
            "exp": m.group(4).replace('\n', ' ')
        })

with open(r"C:\Users\cagan\Desktop\d2-final-zirve\anat_review.json", "w", encoding="utf-8") as f:
    json.dump(all_anat, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(all_anat)} anatomy questions.")
