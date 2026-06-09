window.examsData = window.examsData || {};

// V4 PART 1 - ANATOMİ (34 SORU)
// Dağılım:
// Ömer Can Kızılay: 8 Soru (Klinik/Hikayeli vakalar)
// Cem Kopuz: 9 Soru (Yüzeyel, direkt bilgi)
// Ufuk Çorumlu: 9 Soru (Yüzeyel, direkt bilgi)
// Sezer Akçer: 8 Soru (Yüzeyel, direkt bilgi)

window.examsData['tam_kapsamli_final_v4'] = window.examsData['tam_kapsamli_final_v4'] || {
    "title": "Zirve Deneme Sınavı 1 (Temel Kurul Dağılımı)",
    "description": "Tüm hocaların 2024-2025 çıkmış soru analizlerine, hoca-konu eşleştirmelerine ve bizzat hocaların kendi ağzından verdikleri tüyolara (örn: Ali Koray Hoca'nın 3 GİS 6 Endokrin dağılımı, Ömer Hoca'nın klinik vakaları, diğer anatomi hocalarının yüzeyselliği) dayanılarak hazırlanan 120 soruluk KESİN FİNAL SİMÜLASYONU.",
    "questions": []
};

const anatomiQuestions = [
    // --- ÖMER CAN KIZILAY (8 Soru) - Klinik / Hikayeli ---
    {
        "id": "v4_anat_1",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "45 yaşında bir kadın hasta, boynundaki şişlik nedeniyle tiroidektomi ameliyatına alınıyor. Ameliyat sırasında a. thyroidea inferior bağlanırken hemen komşuluğundan geçen bir sinir yanlışlıkla zedeleniyor. Ameliyat sonrası hastanın sesinin kısık olduğu fark ediliyor. \nBu hastada zedelenen sinir aşağıdakilerden hangisidir?",
        "options": [
            "N. laryngeus superior",
            "N. laryngeus recurrens",
            "N. vagus",
            "N. hypoglossus",
            "N. glossopharyngeus"
        ],
        "answer": "N. laryngeus recurrens",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "A. thyroidea inferior, n. laryngeus recurrens ile yakın komşuluktadır. Tiroidektomide bu arter bağlanırken sinirin zedelenmesi ses kısıklığına (vokal kord paralizisi) yol açar."
    },
    {
        "id": "v4_anat_2",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Acil servise şiddetli karın ağrısı ile getirilen 30 yaşındaki erkek hastaya akut apandisit teşhisi konuluyor. Ameliyata alınan hastanın appendix vermiformis'inin peritonun bir çıkmazında yer aldığı ve enfeksiyonun bu alanda hapsolduğu görülüyor. \nÖzellikle retroçekal yerleşimli apandisitlerde enfeksiyonun yayıldığı bu periton çıkmazı hangisidir?",
        "options": [
            "Recessus duodenalis superior",
            "Recessus retrocecalis",
            "Recessus intersigmoideus",
            "Excavatio rectovesicalis",
            "Bursa omentalis"
        ],
        "answer": "Recessus retrocecalis",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Appendix vermiformis sıklıkla (%64) retroçekal yerleşimlidir ve inflamasyonu recessus retrocecalis içinde lokalize olabilir."
    },
    {
        "id": "v4_anat_3",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Çocukluk çağında geçirdiği bir yabancı cisim aspirasyonu vakası sonrası hastaneye getirilen 5 yaşındaki çocuğun çekilen akciğer röntgeninde, yabancı cismin sağ akciğere kaçtığı görülüyor. \nYabancı cisimlerin genellikle sağ ana bronşa kaçmasının temel anatomik nedeni aşağıdakilerden hangisidir?",
        "options": [
            "Sağ ana bronşun sola göre daha dar olması",
            "Sağ ana bronşun sola göre daha uzun olması",
            "Sağ ana bronşun daha dikey (geniş, kısa ve dik) seyretmesi",
            "Trachea'nın sağa doğru eğimli olması",
            "Sağ akciğerin hacminin daha küçük olması"
        ],
        "answer": "Sağ ana bronşun daha dikey (geniş, kısa ve dik) seyretmesi",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Bronchus principalis dexter; daha geniş, daha kısa ve daha dik seyirlidir. Bu nedenle aspire edilen yabancı cisimler sağ akciğere gitmeye eğilimlidir."
    },
    {
        "id": "v4_anat_4",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Göğüs ağrısı şikayetiyle kardiyoloji polikliniğine başvuran 55 yaşındaki hastanın koroner anjiyografisinde, kalbin apex'ini ve ventriculus sinister'in ön yüzünü besleyen koroner arter dalında %90 tıkanıklık saptanıyor. \nBu hastada tıkanıklık saptanan arter aşağıdakilerden hangisidir?",
        "options": [
            "Ramus circumflexus",
            "Ramus interventricularis posterior (PDA)",
            "A. coronaria dextra",
            "Ramus marginalis dexter",
            "Ramus interventricularis anterior (LAD)"
        ],
        "answer": "Ramus interventricularis anterior (LAD)",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "LAD (Left Anterior Descending - R. interventricularis anterior), sol ventrikül ön duvarını, septumun ön 2/3'ünü ve apeksi besler. Kalp krizlerinin en sık görüldüğü damardır."
    },
    {
        "id": "v4_anat_5",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Hipertansiyon krizleri ve çarpıntı şikayetleri ile tetkik edilen hastanın MR görüntülemesinde glandula suprarenalis'in medulla kısmından kaynaklanan bir tümör tespit ediliyor. Ameliyat planlanan hastada, sağ böbrek üstü bezinin veninin doğrudan nereye döküldüğünün bilinmesi cerrahi için önemlidir. \nV. suprarenalis dextra aşağıdakilerden hangisine dökülür?",
        "options": [
            "V. renalis dextra",
            "V. cava inferior",
            "V. portae hepatis",
            "V. mesenterica superior",
            "V. phrenica inferior"
        ],
        "answer": "V. cava inferior",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Sol v. suprarenalis sol renal vene dökülürken, sağ v. suprarenalis doğrudan v. cava inferior'a açılır."
    },
    {
        "id": "v4_anat_6",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Boyun bölgesinden kesici aletle yaralanan bir hastada, trachea'nın kıkırdak halkaları seviyesinde bir kesi olduğu saptanıyor. Kanamanın trachea'nın hemen önünden geçtiği bilinen bir venöz pleksustan kaynaklandığı düşünülüyor. \nTrachea'nın alt kısmının önünde yer alan ve kanamaya sebep olabilecek bu ven ağı aşağıdakilerden hangisidir?",
        "options": [
            "Plexus venosus pharyngeus",
            "V. jugularis externa",
            "Plexus venosus pterygoideus",
            "Plexus thyroideus impar",
            "V. retromandibularis"
        ],
        "answer": "Plexus thyroideus impar",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Plexus thyroideus impar, tiroid bezinden çıkar ve trachea'nın ön yüzünden aşağıya doğru inerek v. brachiocephalica sinistra'ya dökülür. Trakeostomilerde kanama riski taşır."
    },
    {
        "id": "v4_anat_7",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Karaciğer sirozu nedeniyle portal hipertansiyon gelişen hastada, portal ven ile sistemik venler arasındaki anastomozların açılması sonucu özofagus varis kanamaları meydana gelmektedir. \nBu klinik tabloya yol açan özofageal porto-kaval anastomoz hangi iki ven arasında gerçekleşir?",
        "options": [
            "V. gastrica sinistra - V. azygos / V. hemiazygos sistemi",
            "V. splenica - V. renalis sinistra",
            "Vv. paraumbilicales - Vv. epigastricae",
            "V. rectalis superior - V. rectalis media/inferior",
            "V. mesenterica superior - V. cava inferior"
        ],
        "answer": "V. gastrica sinistra - V. azygos / V. hemiazygos sistemi",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Özofagusun alt 1/3'lük kısmında v. portae hepatis'e açılan v. gastrica sinistra ile v. cava superior sistemine giden v. azygos sistemi arasında porto-kaval anastomoz bulunur."
    },
    {
        "id": "v4_anat_8",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Kadın doğum uzmanı, zorlu bir doğum eylemi sırasında pelvis tabanını desteklemek ve perinenin kontrolsüz yırtılmasını önlemek amacıyla epizyotomi uygulamaya karar veriyor. \nPelvis döşemesini oluşturan ve epizyotomide kesilme ihtimali olan temel kas aşağıdakilerden hangisidir?",
        "options": [
            "M. obturatorius internus",
            "M. levator ani",
            "M. piriformis",
            "M. gluteus maximus",
            "M. sphincter urethrae externus"
        ],
        "answer": "M. levator ani",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Diaphragma pelvis'in büyük kısmını m. levator ani oluşturur (diğer kas m. coccygeus'tur). Pelvik organları destekleyen temel kas grubudur."
    },

    // --- CEM KOPUZ (9 Soru) - Yüzeyel / Klasik ---
    {
        "id": "v4_anat_9",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdaki kranial sinirlerden hangisinin motor lifi bulunmaz?",
        "options": [
            "N. oculomotorius",
            "N. trochlearis",
            "N. abducens",
            "N. vestibulocochlearis",
            "N. hypoglossus"
        ],
        "answer": "N. vestibulocochlearis",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "N. vestibulocochlearis (8. kranial sinir) tamamen duyusal (Özel Somatik Afferent) bir sinirdir, motor lif içermez."
    },
    {
        "id": "v4_anat_10",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi diaphragma'nın üzerinden geçen oluşumlardan biri değildir?",
        "options": [
            "Aorta",
            "V. cava inferior",
            "Oesophagus",
            "Trachea",
            "Ductus thoracicus"
        ],
        "answer": "Trachea",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Trachea boyun ve göğüs bölgesinde yer alır, bifurcatio tracheae (T4-T5 seviyesi) ile akciğerlere dallanır ve diaphragma'yı geçmez."
    },
    {
        "id": "v4_anat_11",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Larynx kıkırdaklarından hangisi tam bir yüzük şeklindedir?",
        "options": [
            "Cartilago thyroidea",
            "Cartilago cricoidea",
            "Cartilago arytenoidea",
            "Cartilago epiglottica",
            "Cartilago corniculata"
        ],
        "answer": "Cartilago cricoidea",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Cartilago cricoidea, solunum yollarında tam bir halka şeklinde olan tek kıkırdaktır."
    },
    {
        "id": "v4_anat_12",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi erkek üreme sistemine ait bir eklenti bezidir?",
        "options": [
            "Epididymis",
            "Ductus deferens",
            "Testis",
            "Vesicula seminalis",
            "Funiculus spermaticus"
        ],
        "answer": "Vesicula seminalis",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Vesicula seminalis (glandula vesiculosa), prostata ve glandula bulbourethralis erkek eklenti bezleridir."
    },
    {
        "id": "v4_anat_13",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi perineum'un sınırlarını oluşturan kemik yapılardan biri değildir?",
        "options": [
            "Symphysis pubica",
            "Tuber ischiadicum",
            "Os coccygis",
            "Spina iliaca anterior superior",
            "Ramus ischiopubicus"
        ],
        "answer": "Spina iliaca anterior superior",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Perinenin ön sınırını symphysis pubica, yanlarını tuber ischiadicum, arka sınırını os coccygis oluşturur. SIAS pelvis majör sınırındadır."
    },
    {
        "id": "v4_anat_14",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Waldeyer'in lenfatik halkasında aşağıdaki bademciklerden hangisi bulunmaz?",
        "options": [
            "Tonsilla pharyngealis",
            "Tonsilla palatina",
            "Tonsilla lingualis",
            "Tonsilla tubaria",
            "Tonsilla laryngea"
        ],
        "answer": "Tonsilla laryngea",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Waldeyer halkası; pharyngealis (adenoid), palatina, lingualis ve tubaria tonsillerinden oluşur. Laryngea diye bir tonsil yoktur."
    },
    {
        "id": "v4_anat_15",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "N. facialis cranium'u hangi delikten geçerek terk eder?",
        "options": [
            "Foramen ovale",
            "Foramen jugulare",
            "Foramen rotundum",
            "Foramen stylomastoideum",
            "Foramen spinosum"
        ],
        "answer": "Foramen stylomastoideum",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "N. facialis meatus acusticus internus'tan kemiğe girip canalis facialis'i geçer ve foramen stylomastoideum'dan cranium'u terk eder."
    },
    {
        "id": "v4_anat_16",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Ductus deferens, canalis inguinalis'e girmeden önce aşağıdaki yapılardan hangisinin içinden geçer?",
        "options": [
            "Funiculus spermaticus",
            "Rete testis",
            "Ductus ejaculatorius",
            "Prostata",
            "Vesicula seminalis"
        ],
        "answer": "Funiculus spermaticus",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Ductus deferens, skrotumdan kasık kanalına kadar funiculus spermaticus adı verilen kordon yapısının içinde ilerler."
    },
    {
        "id": "v4_anat_17",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Diaphragma'nın motor siniri aşağıdakilerden hangisidir?",
        "options": [
            "N. vagus",
            "N. intercostalis",
            "N. phrenicus",
            "N. splanchnicus major",
            "N. laryngeus recurrens"
        ],
        "answer": "N. phrenicus",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Diaphragma'nın motor innervasyonu C3, C4 ve C5 spinal sinirlerinden oluşan n. phrenicus tarafından sağlanır."
    },

    // --- UFUK ÇORUMLU (9 Soru) - Yüzeyel / Klasik ---
    {
        "id": "v4_anat_18",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Kalpte atrium dextrum ile ventriculus dexter arasında hangi kapak bulunur?",
        "options": [
            "Valva bicuspidalis (Mitral)",
            "Valva tricuspidalis",
            "Valva trunci pulmonalis",
            "Valva aortae",
            "Valvula venae cavae inferioris"
        ],
        "answer": "Valva tricuspidalis",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Sağ atrium ile sağ ventrikül arasında 3 küspisli triküspit kapak yer alır."
    },
    {
        "id": "v4_anat_19",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdaki paranasal sinüslerden hangisi meatus nasi medius'a açılmaz?",
        "options": [
            "Sinus maxillaris",
            "Sinus frontalis",
            "Cellulae ethmoidales anteriores",
            "Sinus sphenoidalis",
            "Cellulae ethmoidales mediae"
        ],
        "answer": "Sinus sphenoidalis",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Sinus sphenoidalis recessus sphenoethmoidalis'e açılır. Diğerleri meatus nasi medius'a açılır."
    },
    {
        "id": "v4_anat_20",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Dalak ile ilgili aşağıdaki anatomik komşuluklardan hangisi yanlıştır?",
        "options": [
            "İç (visseral) yüzünde midenin fundusu ile komşudur.",
            "Sol böbrek ile komşuluğu vardır.",
            "Facies diaphragmatica yüzü diyaframa yaslanır.",
            "Cauda pancreatis (pankreas kuyruğu) hilum splenicum'a uzanır.",
            "Sağ kenarı lobus caudatus hepatis ile komşudur."
        ],
        "answer": "Sağ kenarı lobus caudatus hepatis ile komşudur.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Dalak sol hipokondriak bölgededir, karaciğer (hepar) ile komşuluğu yoktur."
    },
    {
        "id": "v4_anat_21",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Pankreasın en geniş ve kalın olan baş kısmı aşağıdaki anatomik yapılardan hangisinin kavsi içine oturmuştur?",
        "options": [
            "Jejunum",
            "Ileum",
            "Mide (Gaster)",
            "Duodenum",
            "Caecum"
        ],
        "answer": "Duodenum",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Pankreas başı, duodenum'un oluşturduğu \"C\" şeklindeki konkavitenin içine tam olarak oturur."
    },
    {
        "id": "v4_anat_22",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Kadın iç genital organlarından uterus'un normal anatomik duruşu hangisidir?",
        "options": [
            "Retroverted ve retroflexed",
            "Anteverted ve anteflexed",
            "Retroverted ve anteflexed",
            "Anteverted ve retroflexed",
            "Düz (horizontal) pozisyon"
        ],
        "answer": "Anteverted ve anteflexed",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Uterus pelviste normalde öne doğru yatık (anteverted) ve kendi üzerine bükük (anteflexed) konumdadır."
    },
    {
        "id": "v4_anat_23",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Böbreklerin dış yüzeyini doğrudan saran ve koruyan bağ dokusu kılıfı aşağıdakilerden hangisidir?",
        "options": [
            "Fascia renalis (Gerota fasyası)",
            "Capsula fibrosa",
            "Capsula adiposa",
            "Peritoneum",
            "Fascia transversalis"
        ],
        "answer": "Capsula fibrosa",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Böbrek parankimini en içte doğrudan saran ince zarsı tabaka capsula fibrosa'dır."
    },
    {
        "id": "v4_anat_24",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Kalbin kendi dokusunu besleyen arteria coronaria'lar aortun hangi kısmından başlangıç alırlar?",
        "options": [
            "Arcus aortae",
            "Aorta descendens",
            "Aorta thoracica",
            "Pars ascendens aortae",
            "Truncus brachiocephalicus"
        ],
        "answer": "Pars ascendens aortae",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Koroner arterler, aort kapağının hemen üzerinden, pars ascendens aortae'daki sinus aortae'lardan (Valsalva sinüsleri) çıkarlar."
    },
    {
        "id": "v4_anat_25",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi tuba uterina'nın bölümlerinden biri değildir?",
        "options": [
            "Infundibulum",
            "Ampulla",
            "Isthmus",
            "Cervix",
            "Pars uterina"
        ],
        "answer": "Cervix",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Cervix, uterus'un (rahim) boyun kısmıdır. Tuba uterina'nın bölümleri: Infundibulum, Ampulla, Isthmus, Pars uterina."
    },
    {
        "id": "v4_anat_26",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Üreterler, böbrekten çıktıktan sonra pelvise doğru inerken aşağıdaki kaslardan hangisinin ön yüzünde seyrederler?",
        "options": [
            "M. quadratus lumborum",
            "M. psoas major",
            "M. iliacus",
            "M. transversus abdominis",
            "M. rectus abdominis"
        ],
        "answer": "M. psoas major",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Üreterler karın arka duvarında, m. psoas major kasının ön yüzünde aşağıya doğru inerler."
    },

    // --- SEZER AKÇER (8 Soru) - Yüzeyel / Klasik ---
    {
        "id": "v4_anat_27",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Sağ akciğerde bulunup, sol akciğerde bulunmayan anatomik yapı aşağıdakilerden hangisidir?",
        "options": [
            "Fissura obliqua",
            "Fissura horizontalis",
            "Lobus superior",
            "Lobus inferior",
            "Lingula"
        ],
        "answer": "Fissura horizontalis",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Fissura horizontalis sadece sağ akciğerde bulunur ve üst lobu orta lobdan ayırır. Sol akciğerde orta lob ve fissura horizontalis yoktur (Lingula sol akciğere aittir)."
    },
    {
        "id": "v4_anat_28",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi mide yatağında bulunan anatomik yapılardan biri değildir?",
        "options": [
            "Pankreas gövdesi",
            "Sol böbrek",
            "Dalak",
            "Lobus caudatus hepatis",
            "Glandula suprarenalis sinistra"
        ],
        "answer": "Lobus caudatus hepatis",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Karaciğerin caudat lobu midenin sağ arka üstünde kalır, mide yatağı (arka yüz komşulukları) yapıları arasında pankreas, sol böbrek, sol üstböbrek bezi, dalak ve colon transversum yer alır."
    },
    {
        "id": "v4_anat_29",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi karaciğerin alt yüzünde yer alan yapılardan biridir?",
        "options": [
            "Vesica biliaris (Safra kesesi)",
            "Ligamentum falciforme",
            "Facies diaphragmatica",
            "Impressio cardiaca",
            "Area nuda"
        ],
        "answer": "Vesica biliaris (Safra kesesi)",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Safra kesesi, karaciğerin visseral (alt/arka) yüzündeki fossa vesicae biliaris'te yer alır."
    },
    {
        "id": "v4_anat_30",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Beyinde bazal gangliyonlar sistemine ait olan ve nucleus lentiformis'i oluşturan iki çekirdek aşağıdakilerden hangileridir?",
        "options": [
            "Nucleus caudatus ve Putamen",
            "Putamen ve Globus pallidus",
            "Globus pallidus ve Substantia nigra",
            "Nucleus subthalamicus ve Claustrum",
            "Amygdala ve Nucleus accumbens"
        ],
        "answer": "Putamen ve Globus pallidus",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Putamen ve globus pallidus anatomik olarak birlikte 'nucleus lentiformis' (merceksi çekirdek) olarak adlandırılırlar."
    },
    {
        "id": "v4_anat_31",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Hipofiz bezi cranium'da hangi kemiğin üzerindeki fossa hypophysialis içine yerleşmiştir?",
        "options": [
            "Os frontale",
            "Os ethmoidale",
            "Os temporale",
            "Os sphenoidale",
            "Os occipitale"
        ],
        "answer": "Os sphenoidale",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Hipofiz bezi, sfenoid kemiğin korpusunda bulunan sella turcica (Türk eyeri) çukuru içine oturur."
    },
    {
        "id": "v4_anat_32",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Oesophagus'un mideye girdiği bölgeye ne ad verilir?",
        "options": [
            "Fundus gastricus",
            "Cardia",
            "Incisura angularis",
            "Pylorus",
            "Antrum pyloricum"
        ],
        "answer": "Cardia",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Yemek borusunun mideye açıldığı ilk dar bölüme pars cardiaca (cardia) denir. Pylorus ise mideden duodenuma geçiş kısmıdır."
    },
    {
        "id": "v4_anat_33",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Aşağıdakilerden hangisi alt ekstremitenin venöz dönüşünü sağlayan derin venlerden biridir?",
        "options": [
            "V. saphena magna",
            "V. saphena parva",
            "V. poplitea",
            "V. basilica",
            "V. cephalica"
        ],
        "answer": "V. poplitea",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "V. poplitea derin bir vendir. V. saphena magna ve parva alt ekstremitenin yüzeysel venleri; v. basilica ve cephalica üst ekstremitenin venleridir."
    },
    {
        "id": "v4_anat_34",
        "subject": "Anatomi",
        "subject": "Anatomi",
        "question": "Karaciğere giren ve karaciğerden çıkan yapıların bulunduğu, karaciğerin alt yüzündeki bölgeye ne ad verilir?",
        "options": [
            "Ligamentum teres hepatis",
            "Porta hepatis",
            "Fossa vesicae biliaris",
            "Sulcus venae cavae",
            "Lobus quadratus"
        ],
        "answer": "Porta hepatis",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Porta hepatis, karaciğerin kapısıdır; buraya v. portae hepatis, a. hepatica propria girer ve safra kanalları çıkar."
    }
];

window.examsData['tam_kapsamli_final_v4'].questions.push(...anatomiQuestions);
