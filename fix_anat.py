import json
import re

files = [
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v9_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v10_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v11_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v12_part1.js",
    r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v13_part1.js"
]

def replace_in_file(fpath, old_str, new_str):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Replaced in {fpath}")

replace_in_file(files[2], 
    "atriyumlar ile ventriküller arasındaki TEK elektriksel bağlantıyı sağlayan ve uyarıyı His demetine aktaran düğüm", 
    "atriyumlardan gelen elektriksel uyarıyı ventriküllere geçmeden önce kısa bir süre bekleten (geciktiren) ve ardından His demetine aktaran düğüm")

replace_in_file(files[2], 
    "arka boynuzun en tepe noktasında (Lamina II)", 
    "arka boynuzda (Lamina II seviyesinde)")

replace_in_file(files[2], 
    "Boyunda Foramen jugulare'den çıkarak", 
    "Kafatası tabanında Foramen jugulare'den çıkarak boyna geçen ve")

replace_in_file(files[2], 
    "Plexus lumbosacralis'in en kalın dalı olan", 
    "Plexus sacralis'in en kalın dalı olan")

print("V11 fixes applied.")
