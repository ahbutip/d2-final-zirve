import json
import os
import re

directories = [
    r"C:\Users\cagan\Desktop\d2-final-zirve\data",
    r"C:\Users\cagan\Desktop\Yeni klasör\D2_Final_Quiz\data"
]

files = [
    "tam_final_v5_part1.js",
    "tam_final_v5_part2.js",
    "tam_final_v6_part1.js",
    "tam_final_v6_part2.js",
    "tam_final_v7_part1.js",
    "tam_final_v7_part2.js"
]

subject_map = {
    "_anat": "Anatomi",
    "_fiz": "Fizyoloji",
    "_biyo_": "Tıbbi Biyokimya",
    "_biyo": "Tıbbi Biyokimya",
    "_farma": "Tıbbi Farmakoloji",
    "_histo": "Histoloji ve Embriyoloji",
    "_mikro": "Tıbbi Mikrobiyoloji",
    "_biyofizik": "Biyofizik",
    "_patoloji": "Tıbbi Patoloji",
    "_iletisim": "İletişim Becerileri",
    "_tarihetik": "Tıp Tarihi ve Etik",
    "_bak": "Bilimsel Araştırma",
    "_toplum": "Toplum Sağlığı"
}

for base_dir in directories:
    for filename in files:
        filepath = os.path.join(base_dir, filename)
        if not os.path.exists(filepath):
            continue
        
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        def process_block(match):
            block = match.group(0)
            
            # SUBJECT ASSIGNMENT
            if '"subject"' not in block:
                id_match = re.search(r'"id":\s*"(.*?)"', block)
                if id_match:
                    qid = id_match.group(1)
                    assigned_sub = "Genel"
                    for k, v in subject_map.items():
                        if k in qid:
                            assigned_sub = v
                            break
                    block = re.sub(r'("id":\s*".+?",)', r'\1\n        "subject": "' + assigned_sub + '",', block)

            # CORRECT ANSWER ASSIGNMENT
            if '"correctAnswer"' not in block:
                options_match = re.search(r'"options":\s*\[(.*?)\]', block, re.DOTALL)
                if options_match:
                    options_str = options_match.group(1)
                    opts = re.findall(r'"(.*?)"', options_str)
                    
                    answer_match = re.search(r'"answer":\s*"(.*?)"', block)
                    if answer_match:
                        answer_val = answer_match.group(1)
                        try:
                            correct_idx = opts.index(answer_val)
                        except ValueError:
                            print(f"ERROR: answer not found in {filename}. Answer: {answer_val}")
                            correct_idx = 0
                            
                        block = re.sub(r'("answer":\s*".*?",)', r'\1\n        "correctAnswer": ' + str(correct_idx) + ',', block)
            
            return block

        new_content = re.sub(r'\{\s*"id":.*?"explanation":\s*".*?"\s*\}', process_block, content, flags=re.DOTALL)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

print("V5, V6 ve V7 için subject ve correctAnswer bilgileri başarıyla eklendi.")
