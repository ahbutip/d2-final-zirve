import json
import re

filepath = r"C:\Users\cagan\Desktop\d2-final-zirve\data\tam_final_v8_part1.js"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace questions 9-15 (which are embryology) with new pure anatomy questions
replacement_qs = [
    {
        "id": "v8_anat_9",
        "subject": "Anatomi",
        "question": "Böbreklerin (Ren) anatomisi incelendiğinde, böbreğin kan damarları, sinirleri ve üreterin giriş-çıkış yaptığı hilum renale bölgesinde, önden arkaya doğru yapıların sıralanışı (V-A-U kuralı) aşağıdakilerden hangisidir?",
        "options": [
            "Arteria renalis - Vena renalis - Pelvis renalis (Üreter)",
            "Vena renalis - Arteria renalis - Pelvis renalis (Üreter)",
            "Pelvis renalis - Vena renalis - Arteria renalis",
            "Arteria renalis - Pelvis renalis - Vena renalis",
            "Vena renalis - Pelvis renalis - Arteria renalis"
        ],
        "answer": "Vena renalis - Arteria renalis - Pelvis renalis (Üreter)",
        "correctAnswer": 1,
        "explanation": "Böbrek hilumunda yapılar önden arkaya doğru sırasıyla Vena renalis (V), Arteria renalis (A) ve Pelvis renalis (Üreter - U) şeklinde sıralanır."
    },
    {
        "id": "v8_anat_10",
        "subject": "Anatomi",
        "question": "Erkek genital sisteminde, testislerde üretilen spermlerin depolandığı ve hareket yeteneği (motilite) kazandığı, testisin arka kenarına tutunmuş virgül şeklindeki organ hangisidir?",
        "options": [
            "Ductus deferens",
            "Vesicula seminalis",
            "Epididymis",
            "Prostat",
            "Ductus ejaculatorius"
        ],
        "answer": "Epididymis",
        "correctAnswer": 2,
        "explanation": "Epididymis, spermlerin depolandığı, olgunlaştığı ve hareketlilik kazandığı kanallardan oluşan virgül şeklindeki organdır."
    },
    {
        "id": "v8_anat_11",
        "subject": "Anatomi",
        "question": "Pelvis diyaframını (diaphragma pelvis) oluşturan en önemli kas grubu olan Musculus levator ani, aşağıdaki kaslardan hangisini İÇERMEZ?",
        "options": [
            "M. pubococcygeus",
            "M. puborectalis",
            "M. iliococcygeus",
            "M. coccygeus (M. ischiococcygeus)",
            "Yukarıdakilerin hepsi M. levator ani'nin parçasıdır"
        ],
        "answer": "M. coccygeus (M. ischiococcygeus)",
        "correctAnswer": 3,
        "explanation": "Diaphragma pelvis, M. levator ani ve M. coccygeus kaslarından oluşur. Ancak M. coccygeus, M. levator ani'nin bir alt parçası değildir, ondan ayrı bir kastır. Levator ani üç parçadan oluşur: Puborectalis, Pubococcygeus ve Iliococcygeus."
    },
    {
        "id": "v8_anat_12",
        "subject": "Anatomi",
        "question": "Kadın iç genital organlarından Tuba uterina'nın (Fallop tüpü) yumurtalığa (ovariuma) en yakın olan ve saçaklı (fimbrialı) ucunun bulunduğu huni şeklindeki bölümüne ne ad verilir?",
        "options": [
            "İsthmus",
            "Ampulla",
            "Infundibulum",
            "Pars uterina",
            "Cervix"
        ],
        "answer": "Infundibulum",
        "correctAnswer": 2,
        "explanation": "Tuba uterina'nın kısımları dıştan içe (uterusa) doğru: Infundibulum (fimbrialı kısım), Ampulla (döllenmenin en sık olduğu geniş kısım), Isthmus (dar kısım) ve Pars uterina'dır."
    },
    {
        "id": "v8_anat_13",
        "subject": "Anatomi",
        "question": "Mesanenin (Vesica urinaria) iç yüzeyinde bulunan, düzgün yüzeyli ve kasılmayan üçgen şeklindeki bölgeye (Trigonum vesicae) hangi yapılar açılır?",
        "options": [
            "İki üreter ve bir urethra",
            "İki urethra ve bir üreter",
            "Sadece üreterler",
            "Ductus deferens ve urethra",
            "Urethra ve prostat kanalları"
        ],
        "answer": "İki üreter ve bir urethra",
        "correctAnswer": 0,
        "explanation": "Trigonum vesicae'nin üst iki köşesine üreterler (ostium ureteris), alt köşesine ise urethra (ostium urethrae internum) açılır. Bu bölge mukoza kıvrımı içermez ve daima düzdür."
    },
    {
        "id": "v8_anat_14",
        "subject": "Anatomi",
        "question": "Perine bölgesinde, centrum tendineum perinei'ye (perineal cisim) tutunmayan kas aşağıdakilerden hangisidir?",
        "options": [
            "M. bulbospongiosus",
            "M. transversus perinei superficialis",
            "M. sphincter ani externus",
            "M. ischiocavernosus",
            "M. transversus perinei profundus"
        ],
        "answer": "M. ischiocavernosus",
        "correctAnswer": 3,
        "explanation": "Perineal cisim (centrum tendineum perinei), perine kaslarının kesişim noktasıdır. M. ischiocavernosus crus penis/clitoridis üzerine tutunur ve perineal cisme katılmaz."
    },
    {
        "id": "v8_anat_15",
        "subject": "Anatomi",
        "question": "Beyin sapında bulunan ve solunum, kalp atışı, kan basıncı gibi hayati otonomik merkezleri içeren bölüm aşağıdakilerden hangisidir?",
        "options": [
            "Mesencephalon",
            "Pons",
            "Medulla oblongata (Bulbus)",
            "Diencephalon",
            "Cerebellum"
        ],
        "answer": "Medulla oblongata (Bulbus)",
        "correctAnswer": 2,
        "explanation": "Medulla oblongata (Bulbus), solunum, dolaşım ve sindirim gibi yaşamsal fonksiyonları düzenleyen merkezleri barındırır. Bu bölgenin hasarı ölümcüldür."
    }
]

# We will use regex to replace the entire object for v8_anat_9 through v8_anat_15
for item in replacement_qs:
    qid = item["id"]
    # We find the block using regex
    pattern = r'\{\s*"id":\s*"' + qid + r'".*?"explanation":\s*".*?"\s*\}'
    
    # Format the new item
    new_block = '{\n        "id": "%s",\n        "subject": "%s",\n        "question": "%s",\n        "options": [\n            "%s",\n            "%s",\n            "%s",\n            "%s",\n            "%s"\n        ],\n        "answer": "%s",\n        "correctAnswer": %s,\n        "explanation": "%s"\n    }' % (
        item["id"], item["subject"], item["question"].replace('"', '\\"'),
        item["options"][0].replace('"', '\\"'), item["options"][1].replace('"', '\\"'),
        item["options"][2].replace('"', '\\"'), item["options"][3].replace('"', '\\"'),
        item["options"][4].replace('"', '\\"'),
        item["answer"].replace('"', '\\"'), item["correctAnswer"], item["explanation"].replace('"', '\\"')
    )
    
    content = re.sub(pattern, new_block, content, flags=re.DOTALL)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Anatomi bölümündeki embriyoloji soruları gerçek anatomi soruları ile değiştirildi.")
