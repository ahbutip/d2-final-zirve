import os
import re

filepath = r"C:\Users\cagan\Desktop\d2-final-zirve\index.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Insert after v7
v7_script = '<script src="data/tam_final_v7_part2.js"></script>'
new_scripts = '''<script src="data/tam_final_v8_part1.js"></script>
    <script src="data/tam_final_v8_part2.js"></script>'''

if "tam_final_v8_part1.js" not in content:
    content = content.replace(v7_script, v7_script + "\n    " + new_scripts)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("V8 eklendi")
else:
    print("Zaten var")
