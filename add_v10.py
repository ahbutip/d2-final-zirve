import os

filepath = r"C:\Users\cagan\Desktop\d2-final-zirve\index.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

v9_script = '<script src="data/tam_final_v9_part2.js"></script>'
new_scripts = '''<script src="data/tam_final_v10_part1.js"></script>
    <script src="data/tam_final_v10_part2.js"></script>'''

if "tam_final_v10_part1.js" not in content:
    content = content.replace(v9_script, v9_script + "\n    " + new_scripts)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("V10 eklendi")
else:
    print("Zaten var")
