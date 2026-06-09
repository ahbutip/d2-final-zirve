import os
import re

base_dir = r"C:\Users\cagan\Desktop\d2-final-zirve\data"
files = os.listdir(base_dir)

mapping = {
    "v4": "Zirve Deneme Sınavı 1 (Temel Kurul Dağılımı)",
    "v5": "Zirve Deneme Sınavı 2 (Alternatif Senaryo)",
    "v6": "Zirve Deneme Sınavı 3 (Ustalık Seviyesi)",
    "v7": "Zirve Deneme Sınavı 4 (Zirve Seviyesi)"
}

for filename in files:
    if not filename.endswith(".js"):
        continue
    filepath = os.path.join(base_dir, filename)
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for k, v in mapping.items():
        if f"_final_{k}" in filename or f"_final_{k}_" in filename or f"v4" in filename and k == "v4":
            # Match title line and replace it
            content = re.sub(r'"title":\s*".*?"', f'"title": "{v}"', content)
            
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("İsimler 1-2-3-4 olarak güncellendi.")
