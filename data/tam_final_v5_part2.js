window.examsData = window.examsData || {};

window.examsData['tam_kapsamli_final_v5'] = window.examsData['tam_kapsamli_final_v5'] || {
    "title": "Zirve Deneme Sınavı 2 (Alternatif Senaryo)",
    "description": "Özel istihbarat tüyolarının 2. alternatif versiyonudur. Ömer Hoca'nın farklı klinik vakaları, Ali Koray'ın farklı hormon senaryoları ve Senem Hoca'nın kesin tüyolarının farklı yorumları kullanılmıştır.",
    "questions": []
};

const v5Part2 = [
    // --- BİYOKİMYA (11 Soru) ---
    // Mustafa Bozkurt (4 Soru: Kan prot, KH, Pankreas, Adrenal)
    {
        "id": "v5_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Kan proteinlerinin elektroforetik ayrımında albumin bandından sonra gelen ve Akut Faz Reaktanlarını (Haptoglobin, Seruloplazmin, Alfa-1 Antitripsin vb.) içeren en büyük globulin fraksiyonları aşağıdakilerden hangileridir?",
        "options": [
            "Gama globulinler",
            "Beta globulinler",
            "Alfa-1 ve Alfa-2 globulinler",
            "Fibrinojen",
            "Prealbumin"
        ],
        "answer": "Alfa-1 ve Alfa-2 globulinler",
        "correctAnswer": 2,
        "explanation": "Alfa-1 (örn. a1-antitripsin) ve alfa-2 (örn. haptoglobin, seruloplazmin, a2-makroglobulin) bantları, akut doku hasarı ve inflamasyon durumlarında kanda ilk yükselen akut faz proteinlerinin çoğunu barındırır."
    },
    {
        "id": "v5_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Karbonhidrat metabolizmasında, kaslarda glikojenin glukoz-6-fosfata yıkılması ancak kanda serbest glukoz olarak verilememesinin (kası sadece kendi kullanması) sebebi hangi enzimin kas dokusunda bulunmamasıdır?",
        "options": [
            "Glukokinaz",
            "Glukoz-6-Fosfataz",
            "Hekzokinaz",
            "Fosfofruktokinaz-1",
            "Glikojen Fosforilaz"
        ],
        "answer": "Glukoz-6-Fosfataz",
        "correctAnswer": 1,
        "explanation": "Glukoz-6-fosfataz enzimi sadece karaciğer ve böbrekte bulunur (kaslarda yoktur). Bu nedenle kaslardaki glikojen kana glukoz olarak verilemez, sadece kasın kendi laktik asit veya enerji üretimi için kullanılır."
    },
    {
        "id": "v5_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Pankreas hormonlarından İnsülin'in hücre içi sinyal iletimi mekanizması aşağıdakilerden hangisidir?",
        "options": [
            "Hücre zarındaki G-protein kenetli reseptörlerle cAMP artışı",
            "Hücre içindeki nükleer reseptörlere bağlanarak gen transkripsiyonu",
            "Hücre zarında bulunan ve kendisi tirozin kinaz aktivitesine sahip olan bir reseptör",
            "cGMP artışına neden olan guanilat siklaz reseptörü",
            "Doğrudan sodyum kanallarını açarak hücreyi depolarize etmesi"
        ],
        "answer": "Hücre zarında bulunan ve kendisi tirozin kinaz aktivitesine sahip olan bir reseptör",
        "correctAnswer": 2,
        "explanation": "İnsülin reseptörü bir Tirozin Kinaz reseptörüdür (İntrinsik kinaz aktivitesi vardır). İnsülin bağlandığında reseptör kendini ve IRS proteinlerini fosforile eder."
    },
    {
        "id": "v5_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Adrenal korteks steroid hormon sentezinde, kolesterolün mitokondriye taşınmasını sağlayan ve hız kısıtlayıcı basamakta görevli olan taşıyıcı protein aşağıdakilerden hangisidir?",
        "options": [
            "Albumin",
            "Kolesterol desmolaz",
            "StAR (Steroidogenic Acute Regulatory) proteini",
            "Transkortin",
            "Apolipoprotein B-100"
        ],
        "answer": "StAR (Steroidogenic Acute Regulatory) proteini",
        "correctAnswer": 2,
        "explanation": "StAR proteini, kolesterolü dış mitokondriyal membrandan iç membrana taşır. Bu, tüm steroid hormonların sentezindeki ilk ve hız belirleyici basamaktır (Kolesterol desmolazdan bile önce)."
    },
    // Diğer Biyokimya (7 Soru)
    {
        "id": "v5_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Eritrositlerde glikolizin bir yan yolu olan Rapoport-Luebering şantı sonucunda oluşan ve oksijenin hemoglobinden ayrılmasını kolaylaştıran (eğriyi sağa kaydıran) metabolit hangisidir?",
        "options": [
            "Fruktoz 2,6-bisfosfat",
            "1,3-bisfosfogliserat",
            "2,3-bisfosfogliserat (2,3-BPG)",
            "Glukoz 1,6-bisfosfat",
            "Fosfoenolpirüvat"
        ],
        "answer": "2,3-bisfosfogliserat (2,3-BPG)",
        "correctAnswer": 2,
        "explanation": "Rapoport-Luebering şantı ile eritrositlerde 2,3-BPG (2,3-DPG) üretilir. Bu madde deoksihemoglobine bağlanarak oksijene afiniteyi düşürür ve dokulara O2 bırakılmasını kolaylaştırır."
    },
    {
        "id": "v5_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki lipit formlarından hangisi ateroskleroz (damar sertliği) gelişiminde en çok suçlanan, kanda oksidasyona uğrayarak makrofajlar tarafından köpük hücresine dönüştürülen ana lipoproteindir?",
        "options": [
            "Şilomikron",
            "VLDL",
            "HDL",
            "LDL",
            "Serbest yağ asitleri"
        ],
        "answer": "LDL",
        "correctAnswer": 3,
        "explanation": "LDL (Düşük Dansiteli Lipoprotein) 'kötü kolesterol' olarak bilinir. Damar duvarında okside olup makrofajlarca (çöpçü reseptörlerle) yutulur ve aterosklerotik plağın temelini oluşturan köpük hücrelerini (foam cell) oluşturur."
    },
    {
        "id": "v5_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Kanda ürik asit seviyesinin yükselmesiyle (hiperürisemi) eklem aralıklarında monosodyum ürat kristallerinin birikmesi sonucu oluşan hastalık aşağıdakilerden hangisidir?",
        "options": [
            "Romatoid Artrit",
            "Osteoartrit",
            "Gut hastalığı",
            "Sistemik Lupus Eritematozus (SLE)",
            "Lesch-Nyhan Sendromu"
        ],
        "answer": "Gut hastalığı",
        "correctAnswer": 2,
        "explanation": "Gut hastalığı, pürin metabolizmasının son ürünü olan ürik asidin kanda aşırı artması (hiperürisemi) ve eklemlerde (özellikle ayak başparmağında) iğne şeklinde ürat kristallerinin çökmesiyle oluşan inflamatuvar bir artrittir."
    },
    {
        "id": "v5_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "DNA'nın RNA'ya kopyalanması işlemine 'Transkripsiyon' adı verilir. Ökaryotlarda mesajcı RNA'yı (mRNA) sentezleyen enzim aşağıdakilerden hangisidir?",
        "options": [
            "DNA Polimeraz I",
            "RNA Polimeraz I",
            "RNA Polimeraz II",
            "RNA Polimeraz III",
            "Ters Transkriptaz"
        ],
        "answer": "RNA Polimeraz II",
        "correctAnswer": 2,
        "explanation": "Ökaryotlarda RNA Polimeraz I rRNA'yı, RNA Polimeraz II mRNA'yı, RNA Polimeraz III ise tRNA'yı sentezler."
    },
    {
        "id": "v5_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Triklorasetik Asit (TCA) Döngüsü (Krebs Çemberi), hücrenin mitokondrisinde gerçekleşir. Bu döngünün ilk basamağında Asetil-CoA ile Okzaloasetat birleşerek hangi molekülü oluşturur?",
        "options": [
            "Süksinat",
            "Sitrat",
            "Malat",
            "Alfa-ketoglutarat",
            "İzositrat"
        ],
        "answer": "Sitrat",
        "correctAnswer": 1,
        "explanation": "Krebs döngüsünün ilk reaksiyonunda Asetil-CoA (2 karbonlu) ile Okzaloasetat (4 karbonlu) sitrat sentaz enzimi katalizörlüğünde birleşerek Sitrat'ı (6 karbonlu) oluşturur."
    },
    {
        "id": "v5_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Açlık durumunda kan şekerini korumak için aminoasitlerden, laktattan veya gliserolden yeni glukoz sentezlenmesine ne ad verilir?",
        "options": [
            "Glikoliz",
            "Glikojenez",
            "Glukoneogenez",
            "Glikojenoliz",
            "Lipogenez"
        ],
        "answer": "Glukoneogenez",
        "correctAnswer": 2,
        "explanation": "Glukoneogenez (yeni glukoz yapımı), karbonhidrat olmayan kaynaklardan (aminoasitler, gliserol, pirüvat, laktat) karaciğerde glukoz sentezlenmesi işlemidir."
    },
    {
        "id": "v5_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Miyoglobin ve Hemoglobinin oksijen bağlama özellikleri karşılaştırıldığında aşağıdakilerden hangisi doğrudur?",
        "options": [
            "Miyoglobinin oksijene ilgisi (afinitesi) hemoglobinden daha düşüktür.",
            "Hemoglobinin oksijen ayrışma eğrisi hiperbolik, miyoglobininki ise sigmoidaldir.",
            "Hemoglobin dört alt birimden oluşurken (tetramer), miyoglobin tek alt birimden (monomer) oluşur.",
            "Miyoglobin kanda oksijeni dokulara taşır, hemoglobin ise kasta oksijen depolar.",
            "Miyoglobin 2,3-BPG'den hemoglobinden çok daha fazla etkilenir."
        ],
        "answer": "Hemoglobin dört alt birimden oluşurken (tetramer), miyoglobin tek alt birimden (monomer) oluşur.",
        "correctAnswer": 2,
        "explanation": "Hemoglobin 4 alt üniteli (tetramer) olduğu için kooperatif bağlanma gösterir ve eğrisi 'S' şeklindedir (sigmoidal). Miyoglobin ise monomerdir, eğrisi hiperboliktir ve O2 afinitesi daha yüksektir."
    },

    // --- FARMAKOLOJİ (7 Soru) ---
    // Yasemin Özatik (2 İlaç Etkileşimi)
    {
        "id": "v5_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Epilepsi tedavisinde kullanılan Fenitoin veya Karbamazepin gibi ilaçlar karaciğer mikrozomal enzimlerini (CYP450) indükler (çalışmasını hızlandırır). Bu hastalar aynı zamanda oral kontraseptif (doğum kontrol hapı) kullanırlarsa, farmakokinetik etkileşim sonucu aşağıdakilerden hangisi beklenir?",
        "options": [
            "Oral kontraseptiflerin kandaki düzeyi artar ve toksisite görülür.",
            "Oral kontraseptiflerin yıkımı hızlanacağı için etkinlikleri azalır ve istenmeyen gebelik riski oluşur.",
            "Fenitoin'in kanda birikmesine bağlı olarak nistagmus ve ataksi görülür.",
            "Kontraseptifler böbrekten hiç atılamaz.",
            "İlaçlar midede çökelti oluşturur."
        ],
        "answer": "Oral kontraseptiflerin yıkımı hızlanacağı için etkinlikleri azalır ve istenmeyen gebelik riski oluşur.",
        "correctAnswer": 1,
        "explanation": "Enzim indükleyiciler (Fenitoin, Karbamazepin, Rifampisin), karaciğerdeki CYP enzim miktarını artırır. Birlikte alınan diğer ilaçların (oral kontraseptifler, varfarin vb.) metabolizmasını hızlandırarak kandaki etkinliklerini yok ederler."
    },
    {
        "id": "v5_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Mide asidini baskılamak için kullanılan Simetidin veya mantar enfeksiyonlarında kullanılan Ketokonazol güçlü birer CYP450 enzim inhibitörüdür. Bu ilaçlar, terapötik indeksi dar olan Warfarin (kan sulandırıcı) ile birlikte kullanıldığında ne olması beklenir?",
        "options": [
            "Warfarin'in metabolizması hızlanacağı için kanda pıhtılaşma (tromboz) riski artar.",
            "Warfarin inaktif metabolite dönüşür ve atılır.",
            "Warfarin'in yıkımı engelleneceği için kan düzeyleri aşırı artar ve şiddetli kanama (hemoraji) riski ortaya çıkar.",
            "Her iki ilaç da birbirinin etkisini nötralize eder.",
            "Warfarin emilimi bağırsaklarda tamamen durur."
        ],
        "answer": "Warfarin'in yıkımı engelleneceği için kan düzeyleri aşırı artar ve şiddetli kanama (hemoraji) riski ortaya çıkar.",
        "correctAnswer": 2,
        "explanation": "Enzim inhibitörleri, eş zamanlı kullanılan ilaçların yıkımını engeller. Warfarin yıkılamayıp kanda birikirse INR değeri aşırı yükselir ve hastada ölümcül kanamalar görülebilir."
    },
    // Diğer Farma (5 Soru)
    {
        "id": "v5_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Lokal anestezik ajanlar (Lidokain, Bupivakain vb.) sinir iletimini bloke etmek için hücre zarındaki hangi kanalları kapatırlar?",
        "options": [
            "Voltaj kapılı kalsiyum kanalları",
            "Ligand kapılı potasyum kanalları",
            "Voltaj kapılı sodyum kanalları",
            "Klor kanalları (GABA reseptörleri)",
            "Na+/K+ ATPaz pompası"
        ],
        "answer": "Voltaj kapılı sodyum kanalları",
        "correctAnswer": 2,
        "explanation": "Lokal anestezikler, aksonlardaki voltaj duyarlı Sodyum (Na+) kanallarının iç kısımlarına (inaktif duruma) bağlanarak sodyum girişini ve dolayısıyla aksiyon potansiyelinin iletimini bloke ederler."
    },
    {
        "id": "v5_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Alerjik rinit semptomlarını gidermek isteyen uzun yol şoförü bir hastaya, kan-beyin bariyerini geçmediği için sedasyon (uyku hali) yapmayan ikinci kuşak H1 antihistaminiklerden hangisi reçete edilmelidir?",
        "options": [
            "Klorfeniramin",
            "Difenhidramin",
            "Dimenhidrinat",
            "Loratadin",
            "Hidroksizin"
        ],
        "answer": "Loratadin",
        "correctAnswer": 3,
        "explanation": "Loratadin, Setirizin, Feksofenadin gibi 2. kuşak antihistaminikler kan-beyin bariyerini aşamazlar ve uyku yapmazlar. Difenhidramin ve Klorfeniramin (1. kuşak) ise şiddetli uyku yapar."
    },
    {
        "id": "v5_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Otonom sinir sisteminde, Parasempatik sistemin (kolinerjik) nörotransmitteri olan Asetilkolin'i yıkan enzimi (Asetilkolinesteraz) bloke ederek ortamdaki asetilkolin miktarını artıran ve Myasthenia Gravis tedavisinde kullanılan ilaç aşağıdakilerden hangisidir?",
        "options": [
            "Atropin",
            "Neostigmin",
            "Adrenalin",
            "Skopolamin",
            "Propranolol"
        ],
        "answer": "Neostigmin",
        "correctAnswer": 1,
        "explanation": "Neostigmin ve Piridostigmin, asetilkolinesteraz inhibitörüdür. Kas kavşağındaki asetilkolini artırarak Myasthenia Gravis hastalığındaki kas güçsüzlüğünü tedavi ederler."
    },
    {
        "id": "v5_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Asetaminofen (Parasetamol) zehirlenmesinde (intoksikasyon), karaciğerde oluşan toksik metaboliti (NAPQI) nötralize edebilmek için vücudun glutatyon depolarını yenileyen spesifik antidot aşağıdakilerden hangisidir?",
        "options": [
            "Naloksan",
            "Flumazenil",
            "N-Asetilsistein (NAC)",
            "Protamin sülfat",
            "Atropin"
        ],
        "answer": "N-Asetilsistein (NAC)",
        "correctAnswer": 2,
        "explanation": "Parasetamol zehirlenmesinde karaciğer nekrozunu (ölümünü) önlemek için glutatyon prekürsörü olan N-Asetilsistein (NAC) verilir."
    },
    {
        "id": "v5_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Kalp yetmezliği tedavisinde kullanılan Digoksin ilacının etki mekanizması nedir?",
        "options": [
            "Beta-1 adrenerjik reseptörleri uyararak kalp hızını artırır.",
            "Kalsiyum kanallarını bloke ederek kalp kasını gevşetir.",
            "Na+/K+ ATPaz pompasını inhibe ederek hücre içi kalsiyum miktarını ve kasılma gücünü artırır.",
            "ACE enzimini bloke ederek damarları genişletir.",
            "Miyokardın oksijen tüketimini azaltır."
        ],
        "answer": "Na+/K+ ATPaz pompasını inhibe ederek hücre içi kalsiyum miktarını ve kasılma gücünü artırır.",
        "correctAnswer": 2,
        "explanation": "Digoksin (Kardiyak Glikozid), hücre zarındaki Sodyum-Potasyum pompasını durdurur. Hücrede sodyum artınca Na/Ca değiştiricisi ters çalışır ve hücre içi Kalsiyum artar, inotropik etki (güçlü kasılma) sağlanır."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    // Senem Hoca (4 Soru: Faringeal Arkus, Kalp tabakaları, Tiroid, Adenohipofiz)
    {
        "id": "v5_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojide yüz ve boyun gelişiminde, ikinci (2.) faringeal arkustan (Reichert kıkırdağı) gelişen ve N. Facialis tarafından uyarılan kas grubu hangisidir?",
        "options": [
            "Mimik kasları (Yüz ifadeleri)",
            "Çiğneme kasları",
            "Larynx (Gırtlak) kasları",
            "Pharynx (Yutak) kasları",
            "Dil kasları"
        ],
        "answer": "Mimik kasları (Yüz ifadeleri)",
        "correctAnswer": 0,
        "explanation": "2. faringeal arkusun siniri N. facialis'tir ve tüm mimik kasları (m. stapedius dahil) bu arkusun mezenkiminden gelişir. 1. arkus çiğneme kaslarını yapar."
    },
    {
        "id": "v5_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kalbin histolojik kesitlerinde, en kalın tabaka olan ve çizgili kas özelliklerine sahip, dallanmalar gösterip interkalar disklerle (disci intercalares) birbirine bağlanan doku tabakası hangisidir?",
        "options": [
            "Parietal perikardiyum",
            "Endokardiyum",
            "Miyokardiyum (Myocardium)",
            "Epikardiyum",
            "Subendokardiyal tabaka"
        ],
        "answer": "Miyokardiyum (Myocardium)",
        "correctAnswer": 2,
        "explanation": "Kalbin kasılmasını sağlayan en kalın kas tabakası miyokardiyumdur. Kalp kası hücreleri interkalar diskler ile bir fonksiyonel sinsityum (ağ) oluşturur."
    },
    {
        "id": "v5_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Tiroid bezinin histolojik incelemesinde, bezin büyük kısmını oluşturan tiroid foliküllerinin lümenini dolduran ve tiroid hormonlarının deposu olan asidofilik jelatinöz maddeye ne ad verilir?",
        "options": [
            "Kalsitonin",
            "Tiroglobulin içeren Kolloid",
            "Glikojen granülleri",
            "Lipofuskin pigmenti",
            "Hiyalin kıkırdak"
        ],
        "answer": "Tiroglobulin içeren Kolloid",
        "correctAnswer": 1,
        "explanation": "Tiroid foliküllerinin içi 'kolloid' denilen jelimsi madde ile doludur. Kolloid yapısının temel bileşeni, hormonların inaktif olarak depolandığı dev bir protein olan Tiroglobulindir."
    },
    {
        "id": "v5_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Hipofiz bezinin ön lobu (Adenohipofiz) histolojik boyanma özelliklerine göre hücrelere ayrıldığında, Prolaktin (PRL) ve Büyüme Hormonu (GH) salgılayan hücreler hangi grupta yer alır?",
        "options": [
            "Kromofob hücreler",
            "Asidofil (Eozinofilik) hücreler",
            "Bazofil hücreler",
            "Nörosekretuvar pituisept hücreleri",
            "Folikülostellat hücreler"
        ],
        "answer": "Asidofil (Eozinofilik) hücreler",
        "correctAnswer": 1,
        "explanation": "Adenohipofizde hormon salgılayan hücrelerden Asidofilik olanlar; Somatotroplar (GH) ve Laktotroplardır (Prolaktin). Bazofilik olanlar ise ACTH, TSH, FSH ve LH üreten hücrelerdir."
    },
    // Diğer Histo (9 Soru)
    {
        "id": "v5_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Mide mukozasında fundus bezlerinde (glandulae gastricae) bulunan, iri asidofilik (pembe) sitoplazmalı olan ve Mide Asidi (HCl) ile İntrinsik Faktör üreten hücre tipi hangisidir?",
        "options": [
            "Esas (Şef) hücreler",
            "Parietal (Oksintik) hücreler",
            "Mukus boyun hücreleri",
            "Enteroendokrin hücreler (G hücreleri)",
            "Paneth hücreleri"
        ],
        "answer": "Parietal (Oksintik) hücreler",
        "correctAnswer": 1,
        "explanation": "Parietal hücreler midede Hidroklorik asit (HCl) ve B12 vitamini emilimi için şart olan İntrinsik faktörü salgılar. Şef hücreler ise pepsinojen salgılar."
    },
    {
        "id": "v5_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Erkek üreme sisteminde, seminifer tübüllerin aralarındaki bağ dokusunda (interstisyumda) bulunan ve LH hormonu uyarısıyla testosteron salgılayan hücreler hangileridir?",
        "options": [
            "Sertoli hücreleri",
            "Leydig (İnterstisyel) hücreleri",
            "Spermatogoniumlar",
            "Miyoid hücreler",
            "Spermatositler"
        ],
        "answer": "Leydig (İnterstisyel) hücreleri",
        "correctAnswer": 1,
        "explanation": "Testosteron üreten hücreler interstisyel alanda yer alan Leydig hücreleridir. Sertoli hücreleri ise tübül içinde destek (kan-testis bariyeri) görevi görür."
    },
    {
        "id": "v5_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kadın üreme sisteminde uterus'un (rahim) iç yüzünü döşeyen, adet döngüsü (siklus) boyunca hormonların etkisiyle kalınlaşıp menstrüasyonla dökülen fonksiyonel tabakaya ne ad verilir?",
        "options": [
            "Perimetriyum",
            "Miyometriyum",
            "Endometriyum",
            "Tuba uterina",
            "Stratum basale"
        ],
        "answer": "Endometriyum",
        "correctAnswer": 2,
        "explanation": "Uterusun lümene bakan mukoza tabakası endometriyumdur. Stratum fonksiyonale adı verilen üst kısmı her ay kalınlaşır ve gebelik olmazsa adet kanamasıyla atılır."
    },
    {
        "id": "v5_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrekte tübül epitel hücreleri incelendiğinde, fırçamsı kenar (bol mikrovillus) yapısı sayesinde idrardaki su, glukoz, aminoasit gibi yararlı maddelerin çok büyük bir kısmını (%65-70) geri emen tübül bölümü hangisidir?",
        "options": [
            "Proksimal kıvrımlı tübül (Tubulus contortus proximalis)",
            "Distal kıvrımlı tübül",
            "Henle kulpu inen kolu",
            "Henle kulpu çıkan kalın kolu",
            "Toplayıcı kanallar"
        ],
        "answer": "Proksimal kıvrımlı tübül (Tubulus contortus proximalis)",
        "correctAnswer": 0,
        "explanation": "Proksimal tübül hücreleri, emilim yüzey alanını aşırı artıran fırçamsı kenara (mikrovilluslar) sahiptir ve filtratın asıl geri emilim merkezidir."
    },
    {
        "id": "v5_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Merkezi sinir sisteminde miyelin kılıfını üreterek sinir iletimini hızlandıran nöroglia hücreleri hangileridir?",
        "options": [
            "Astrositler",
            "Mikroglia",
            "Oligodendrositler",
            "Schwann hücreleri",
            "Ependim hücreleri"
        ],
        "answer": "Oligodendrositler",
        "correctAnswer": 2,
        "explanation": "MSS'de (beyin ve omurilik) miyelini Oligodendrositler yapar. Periferik sinir sisteminde (PSS) ise bu görevi Schwann hücreleri üstlenir."
    },
    {
        "id": "v5_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Gastrointestinal kanal histolojisinde ince bağırsaklara (özellikle duodenum ve jejunum) özgü olarak, epitellerin lümene doğru yaptığı parmak şeklindeki çıkıntılara ne ad verilir?",
        "options": [
            "Villus intestinalis",
            "Plica circulares (Kerckring)",
            "Ruga",
            "Lieberkühn kriptaları",
            "Peyer plakları"
        ],
        "answer": "Villus intestinalis",
        "correctAnswer": 0,
        "explanation": "Villuslar, lamina propria ve epitelin bağırsağa doğru uzattığı mikroskobik parmak benzeri yapılardır ve emilim alanını büyük ölçüde artırırlar."
    },
    {
        "id": "v5_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "İnce bağırsakların lümen epitelinde yer alan ve apikal sitoplazmalarında bol miktarda müsin granülü biriktirerek mukus salgılayan, bardağa benzeyen hücrelere ne ad verilir?",
        "options": [
            "Paneth hücreleri",
            "Kadeh (Goblet) hücreleri",
            "Enterositler",
            "M (Mikrofold) hücreleri",
            "Enteroendokrin hücreler"
        ],
        "answer": "Kadeh (Goblet) hücreleri",
        "correctAnswer": 1,
        "explanation": "Kadeh (Goblet) hücreleri tek hücreli bezlerdir, mukus salgılayarak bağırsak içeriğinin kayganlaşmasını ve mukozanın asitten korunmasını sağlarlar."
    },
    {
        "id": "v5_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Karaciğerin Kupfer hücreleri (karaciğere özgü makrofajlar) lobül içinde nerede yerleşmiştir?",
        "options": [
            "Safra kanaliküllerinin içinde",
            "Portal venin düz kas tabakasında",
            "Hepatositlerin çekirdeklerinin içinde",
            "Sinüzoidlerin iç yüzeyinde, endotel hücreleri arasında",
            "Glisson kapsülü bağ dokusunda"
        ],
        "answer": "Sinüzoidlerin iç yüzeyinde, endotel hücreleri arasında",
        "correctAnswer": 3,
        "explanation": "Kupffer hücreleri, karaciğer sinüzoidlerinin iç yüzeyinde (kanla doğrudan temas halinde) yerleşmiş doku makrofajlarıdır; yaşlı eritrositleri ve bakterileri fagosite ederler."
    },
    {
        "id": "v5_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Solunum sisteminde kıkırdak plakları, bezler (glandula) ve Goblet hücrelerinin tamamen kaybolduğu, duvarı düz kas ile çevrili terminal hava yolu bölgesi aşağıdakilerden hangisidir?",
        "options": [
            "Trachea",
            "Primer (Ana) bronşlar",
            "Sekonder (Lobar) bronşlar",
            "Bronşiyoller (Bronchiolus)",
            "Larynx"
        ],
        "answer": "Bronşiyoller (Bronchiolus)",
        "correctAnswer": 3,
        "explanation": "Bronş ağacı küçüldükçe kıkırdak ve bezler azalır. Çapı 1 mm'den küçük olan bronşiyollerde kıkırdak desteği ve bez bulunmaz, mukoza altı düz kastan ibarettir (astımda kasılan yer)."
    },

    // --- MİKROBİYOLOJİ (14 Soru) ---
    // Serpil Hoca (3 Soru: Antimikrobiyal, Mycoplasma, Vibrio)
    {
        "id": "v5_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerde penisilin bağlayan proteinlere (PBP) bağlanarak hücre duvarı (peptidoglikan) sentezini inhibe eden, bu yüzden sadece bölünen ve çoğalan bakterilere karşı bakterisidal etki gösteren en geniş antibiyotik grubu aşağıdakilerden hangisidir?",
        "options": [
            "Beta-Laktamlar (Penisilin, Sefalosporin)",
            "Aminoglikozitler",
            "Makrolidler",
            "Kinolonlar",
            "Tetrasiklinler"
        ],
        "answer": "Beta-Laktamlar (Penisilin, Sefalosporin)",
        "correctAnswer": 0,
        "explanation": "Beta-laktam grubu antibiyotikler hücre duvarındaki peptidoglikan çapraz bağlarını (transpeptidasyon) yıkarak bakterinin ozmotik şokla patlamasına neden olurlar."
    },
    {
        "id": "v5_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hücre içi zorunlu parazit olan, kene, bit veya pire gibi artropod vektörlerle insanlara bulaşarak 'Tifüs' veya 'Kayalık Dağlar Benekli Ateşi' gibi döküntülü hastalıklara yol açan bakteri cinsi hangisidir?",
        "options": [
            "Mycoplasma",
            "Rickettsia",
            "Chlamydia",
            "Vibrio",
            "Mycobacterium"
        ],
        "answer": "Rickettsia",
        "correctAnswer": 1,
        "explanation": "Rickettsia türleri çok küçük, zorunlu hücre içi bakterilerdir. Epidemik ve endemik Tifüs'ün etkenleridirler. Hücre dışında enerji (ATP) üretemezler."
    },
    {
        "id": "v5_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Çiğ veya az pişmiş deniz ürünleri (istiridye) yendikten sonra ortaya çıkan şiddetli gastroenterite (ishal) veya deniz suyunda yüzülmesine bağlı yara enfeksiyonlarına neden olan, halofilik (tuzu seven) gram negatif kıvrımlı bakteri hangisidir?",
        "options": [
            "Vibrio parahaemolyticus",
            "Escherichia coli",
            "Salmonella typhi",
            "Helicobacter pylori",
            "Clostridium botulinum"
        ],
        "answer": "Vibrio parahaemolyticus",
        "correctAnswer": 0,
        "explanation": "Vibrio cinsi tuzlu suları sever. Kolera etkeni haricindeki Vibrio parahaemolyticus ve V. vulnificus, deniz ürünleri tüketimiyle gastroenterit veya selülit yapar."
    },
    // Diğer Mikro (11 Soru)
    {
        "id": "v5_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki virüs gruplarından hangisi genetik materyalini (RNA) konağa girdikten sonra 'Revers Transkriptaz' enzimi kullanarak DNA'ya çevirir ve konak kromozomuna entegre olur?",
        "options": [
            "Picornaviridae (örn. Poliovirüs)",
            "Retroviridae (örn. HIV)",
            "Herpesviridae",
            "Paramyxoviridae",
            "Flaviviridae"
        ],
        "answer": "Retroviridae (örn. HIV)",
        "correctAnswer": 1,
        "explanation": "HIV'in dahil olduğu Retrovirüsler RNA genomludur, ancak sahip oldukları revers transkriptaz (ters kopyalama) enzimi ile önce DNA provirüsü oluşturup insan DNA'sına sızarlar."
    },
    {
        "id": "v5_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram negatif bakterilerin hücre duvarının dış membranında bulunan, bakterinin parçalanmasıyla açığa çıkarak insanda şiddetli ateş, şok ve koagülasyona (DIC) neden olan yapı (Endotoksin) aşağıdakilerden hangisidir?",
        "options": [
            "Lipopolisakkarit (LPS) yapısındaki Lipid A",
            "Peptidoglikan",
            "Teikoik asit",
            "Ekzotoksin A",
            "Kapsül polisakkariti"
        ],
        "answer": "Lipopolisakkarit (LPS) yapısındaki Lipid A",
        "correctAnswer": 0,
        "explanation": "Endotoksin, Gram negatif bakterilerin dış zarında yapısal olarak bulunan Lipopolisakkarittir (LPS). Toksik olan kısmı ise 'Lipid A'dır."
    },
    {
        "id": "v5_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sterilizasyon cihazı olan otoklavın etki mekanizması ve çalışma prensibi aşağıdakilerden hangisidir?",
        "options": [
            "160 derecede 2 saat kuru sıcak hava uygulamak.",
            "121 derecede, 1 atmosfer basınç altında 15-20 dakika buharla ısıtmak.",
            "Kimyasal etilen oksit gazı püskürtmek.",
            "Gama ışınları ile radyasyon yaymak.",
            "0.22 mikronluk filtrelerden süzmek."
        ],
        "answer": "121 derecede, 1 atmosfer basınç altında 15-20 dakika buharla ısıtmak.",
        "correctAnswer": 1,
        "explanation": "Otoklav, yüksek basınçlı buhar prensibiyle çalışır ve bu sayede su 100 derecede kaynamayıp 121 dereceye kadar çıkarak dirençli endosporları bile yok eder."
    },
    {
        "id": "v5_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Çocuklarda kış aylarında ortaya çıkan şiddetli ishallerin (gastroenterit) en sık görülen viral etkeni aşağıdakilerden hangisidir?",
        "options": [
            "Rotavirüs",
            "Kızamık virüsü",
            "Adenovirüs Tip 8",
            "Kuduz (Rabies) virüsü",
            "Hepatit A"
        ],
        "answer": "Rotavirüs",
        "correctAnswer": 0,
        "explanation": "Rotavirüs, fekal-oral yolla bulaşarak bebeklik ve erken çocukluk döneminde dehidratasyona (su kaybına) yol açan en yaygın viral ishal nedenidir."
    },
    {
        "id": "v5_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Fırsatçı bir mantar enfeksiyonu olan ve ağızda 'pamukçuk', kadınlarda 'vajinal akıntı' gibi mukozal hastalıkların yanında immün yetmezlikli hastalarda ölümcül sistemik hastalıklara yol açan maya mantarı hangisidir?",
        "options": [
            "Aspergillus fumigatus",
            "Candida albicans",
            "Cryptococcus neoformans",
            "Histoplasma capsulatum",
            "Trichophyton rubrum"
        ],
        "answer": "Candida albicans",
        "correctAnswer": 1,
        "explanation": "Candida türleri normal insan florasında bulunurlar ancak bağışıklık baskılandığında veya antibiyotik kullanımıyla bakteri florası yok edildiğinde fırsatçı patojen olarak hızla çoğalırlar."
    },
    {
        "id": "v5_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki parazitlerden hangisi anüs çevresinde şiddetli kaşıntı yapar (özellikle geceleri selofan bant yöntemi ile yumurtaları tespit edilen 'kıl kurdu')?",
        "options": [
            "Ascaris lumbricoides",
            "Taenia saginata",
            "Enterobius vermicularis",
            "Echinococcus granulosus",
            "Fasciola hepatica"
        ],
        "answer": "Enterobius vermicularis",
        "correctAnswer": 2,
        "explanation": "Halk arasında oksiyür veya kıl kurdu denilen Enterobius vermicularis, yumurtalarını gece perianal kıvrımlara bıraktığı için şiddetli anal kaşıntı yapar."
    },
    {
        "id": "v5_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gıdaların hazırlanması ve muhafazası sırasında bakteriyel üremeyi yavaşlatmak için dondurma veya soğutma yöntemleri kullanılır. Ancak buzdolabı sıcaklığında (+4 derece) bile çoğalarak süt ve peynir ürünlerinde besin zehirlenmesi veya menenjite neden olabilen psiko-toleran bakteri hangisidir?",
        "options": [
            "Listeria monocytogenes",
            "Staphylococcus aureus",
            "Vibrio cholerae",
            "Neisseria meningitidis",
            "Bordetella pertussis"
        ],
        "answer": "Listeria monocytogenes",
        "correctAnswer": 0,
        "explanation": "Listeria monocytogenes soğukta üreyebilme özelliğine (psikrofil) sahiptir. Pastörize edilmemiş süt/peynir ve sosis gibi gıdalarda buzdolabında üreyebilir."
    },
    {
        "id": "v5_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Kan veya cinsel temas yoluyla bulaşan, karaciğerde akut veya kronik enfeksiyon yapabilen, zarflı ve 'kısmi çift sarmallı dairesel DNA' taşıyan hepatit virüsü aşağıdakilerden hangisidir?",
        "options": [
            "Hepatit A Virüsü (HAV)",
            "Hepatit B Virüsü (HBV)",
            "Hepatit C Virüsü (HCV)",
            "Hepatit E Virüsü (HEV)",
            "Hepatit D Virüsü (HDV)"
        ],
        "answer": "Hepatit B Virüsü (HBV)",
        "correctAnswer": 1,
        "explanation": "Hepatit B virüsü (Hepadnaviridae) DNA virüsüdür, diğer hepatit virüsleri (A, C, D, E) ise RNA virüsleridir."
    },
    {
        "id": "v5_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Zorunlu anaerob olan (oksijenli ortamda ölen), toprakta bulunan sporlarının derin ve kirli yaralara bulaşması sonucu 'Tetanoz' hastalığına (kaslarda sürekli spazm) yol açan bakteri hangisidir?",
        "options": [
            "Clostridium tetani",
            "Bacillus anthracis",
            "Clostridium botulinum",
            "Streptococcus pyogenes",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Clostridium tetani",
        "correctAnswer": 0,
        "explanation": "C. tetani sporları kirli yaradan girer, oksijensiz ortamda açılarak tetanospazmin adlı nörotoksini üretir. Bu toksin inhibitör nörotransmitter (GABA/Glisin) salınımını durdurduğu için sürekli kasılma (spastik paralizi) oluşur."
    },
    {
        "id": "v5_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Laboratuvar teşhis yöntemlerinde, antijen-antikor reaksiyonunu tespit etmek için enzime bağlı bir sistemin kullanıldığı ve özellikle virüs taramalarında (örn. HIV taraması) ilk tercih edilen hassas testin adı nedir?",
        "options": [
            "Western Blot",
            "ELISA (Enzyme-Linked Immunosorbent Assay)",
            "PCR (Polimeraz Zincir Reaksiyonu)",
            "İmmünofloresan Mikroskopi",
            "Hemaglütinasyon"
        ],
        "answer": "ELISA (Enzyme-Linked Immunosorbent Assay)",
        "correctAnswer": 1,
        "explanation": "ELISA yöntemi, antikor veya antijene bağlı bir enzimin substratla reaksiyona girerek renk oluşturması temeline dayanır ve kanda enfeksiyon parametrelerinin araştırılmasında rutindir."
    },
    {
        "id": "v5_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Virüslerin konak hücre dışında bulunurken (ekstraselüler formdayken) sahip oldukları tam yapıdaki olgun enfeksiyöz partiküllerine ne ad verilir?",
        "options": [
            "Varyant",
            "Viryon",
            "Kapsid",
            "Nükleik asit",
            "Prion"
        ],
        "answer": "Viryon",
        "correctAnswer": 1,
        "explanation": "Viryon; bir virüsün genetik materyali, protein kılıfı (kapsid) ve varsa zarfıyla birlikte hücre dışında bulunabilen ve tam bir hastalık bulaştırma yeteneğine sahip partikül halidir."
    },

    // --- DİĞERLERİ (10 Soru) ---
    // Biyofizik (4 Soru)
    {
        "id": "v5_biyofizik_1",
        "subject": "Tıbbi Biyokimya",
        "question": "İnsan gözünün optik sisteminde kırıcılığı en fazla (dioptri değeri en yüksek) olan anatomik yapı aşağıdakilerden hangisidir?",
        "options": [
            "Kornea (Cornea)",
            "Göz Merceği (Lens)",
            "Ön kamara sıvısı (Aqueous humor)",
            "Camsı cisim (Corpus vitreum)",
            "Retina"
        ],
        "answer": "Kornea (Cornea)",
        "correctAnswer": 0,
        "explanation": "Gözün toplam kırma gücü yaklaşık 60 dioptridir. Bunun 40-45 dioptrilik aslan payını kırma indisi farkı nedeniyle kornea-hava arayüzü üstlenirken, lensin kırma gücü 15-20 dioptridir."
    },
    {
        "id": "v5_biyofizik_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Hücre zarından madde geçiş mekanizmaları düşünüldüğünde, Oksijen (O2) ve Karbondioksit (CO2) gibi gazların veya lipidlerde çözünen moleküllerin hiçbir enerji ve taşıyıcı kullanmadan çoktan aza geçişine ne ad verilir?",
        "options": [
            "Basit Difüzyon",
            "Kolaylaştırılmış Difüzyon",
            "Aktif Taşıma",
            "Osmoz",
            "Pinositoz"
        ],
        "answer": "Basit Difüzyon",
        "correctAnswer": 0,
        "explanation": "Gazlar ve küçük yağda çözünen maddeler hücre zarından basit difüzyon yoluyla taşıyıcı gerekmeden geçerler."
    },
    {
        "id": "v5_biyofizik_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Elektrokardiyogramda (EKG) ventrikül kasının (karıncık) depolarizasyonunu (uyarılmasını) temsil eden dalga kompleksi aşağıdakilerden hangisidir?",
        "options": [
            "P dalgası",
            "QRS kompleksi",
            "T dalgası",
            "U dalgası",
            "ST segmenti"
        ],
        "answer": "QRS kompleksi",
        "correctAnswer": 1,
        "explanation": "EKG'de P dalgası atriyumların depolarizasyonunu, QRS kompleksi ventriküllerin depolarizasyonunu, T dalgası ise ventriküllerin repolarizasyonunu gösterir."
    },
    {
        "id": "v5_biyofizik_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Sıvıların damar içindeki akışkanlığını inceleyen hemodinamikte, Poiseuille yasasına göre bir damardan geçen kanın akım hızı damarın yarıçapının kaçıncı kuvveti ile doğru orantılıdır?",
        "options": [
            "Birinci",
            "İkinci",
            "Üçüncü",
            "Dördüncü",
            "Ters orantılıdır"
        ],
        "answer": "Dördüncü",
        "correctAnswer": 3,
        "explanation": "Poiseuille yasasına göre Akım (Q) = (π·ΔP·r^4) / (8·η·L) formülüyle bulunur. Yani yarıçapın 2 kat artması, akımı 16 kat (2^4) artırır."
    },
    // Patoloji (2 Soru)
    {
        "id": "v5_patoloji_1",
        "subject": "Tıbbi Patoloji",
        "question": "Hücre içi birikimlerde, yaşlılığa veya hücredeki serbest radikal hasarına (oksidatif stres) bağlı olarak dokularda (özellikle kalp ve karaciğerde) biriken, kahverengi-sarımsı 'yaşlanma pigmenti' aşağıdakilerden hangisidir?",
        "options": [
            "Melanin",
            "Hemosiderin",
            "Lipofuskin",
            "Bilirubin",
            "Amiloid"
        ],
        "answer": "Lipofuskin",
        "correctAnswer": 2,
        "explanation": "Lipofuskin (wear-and-tear pigmenti); yıkılmış lipid ve protein polimerlerinin lizozomlarda kalmasıyla oluşan, yaşlanma ve atrofi göstergesi olan hücre içi birikimdir."
    },
    {
        "id": "v5_patoloji_2",
        "subject": "Tıbbi Patoloji",
        "question": "Akut inflamasyonun (iltihabın) en önemli hücresel elemanı olan, dokuya ilk göç eden (12-24 saat içinde) ve bakterileri fagosite ederek öldüren lökosit tipi hangisidir?",
        "options": [
            "Eozinofil",
            "Bazofil",
            "Lenfosit",
            "Nötrofil",
            "Makrofaj"
        ],
        "answer": "Nötrofil",
        "correctAnswer": 3,
        "explanation": "Akut inflamasyonun (örneğin bakteri enfeksiyonu) başrol oyuncusu Polimorfonükleer lökositler olan Nötrofillerdir. Kronik inflamasyonda ise lenfositler ve makrofajlar hakimdir."
    },
    // İletişim (2 Soru)
    {
        "id": "v5_iletisim_1",
        "subject": "İletişim Becerileri",
        "question": "Hasta görüşmesi sırasında hastanın sözünü kesmeden, onu onaylayan küçük baş sallamaları veya 'hımm, anlıyorum' gibi tepkilerle konuşmaya teşvik etmeye ne ad verilir?",
        "options": [
            "Yönlendirme",
            "Yansıtma",
            "Kolaylaştırma (Fasilitasyon)",
            "Özetleme",
            "Yüzleştirme"
        ],
        "answer": "Kolaylaştırma (Fasilitasyon)",
        "correctAnswer": 2,
        "explanation": "Kolaylaştırma, hastayı konuşmaya devam etmesi için sözel ('evet', 'anlatın lütfen') veya bedensel (baş sallama) tepkilerle cesaretlendirme tekniğidir."
    },
    {
        "id": "v5_iletisim_2",
        "subject": "İletişim Becerileri",
        "question": "Aşağıdakilerden hangisi hasta merkezli iletişim yaklaşımının temel özelliklerinden biri değildir?",
        "options": [
            "Hastanın hastalığı nasıl deneyimlediğine odaklanmak",
            "Hekimin tüm kararları tek başına verip hastayı sadece bilgilendirmesi",
            "Hastalık yerine hastanın (biyopsikososyal) bütününe odaklanmak",
            "Empati kurmak",
            "Hastayı tedavi planına ortak etmek"
        ],
        "answer": "Hekimin tüm kararları tek başına verip hastayı sadece bilgilendirmesi",
        "correctAnswer": 1,
        "explanation": "Hasta merkezli (paternalistik olmayan) modelde, kararlar doktor ile hastanın işbirliği (ortak karar verme) ile alınır. Kararların tek taraflı alınması Paternalistik (doktor odaklı) yaklaşımdır."
    },
    // Tarih/Etik (2 Soru)
    {
        "id": "v5_tarihetik_1",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Modern tıbbın ve cerrahinin kurucularından olan, 1543 yılında yazdığı 'De Humani Corporis Fabrica' (İnsan Bedeninin Yapısı Üzerine) adlı eseriyle Galen'in asırlık anatomik hatalarını düzelten Rönesans dönemi anatomisti kimdir?",
        "options": [
            "Andreas Vesalius",
            "Hipokrat",
            "William Harvey",
            "İbn-i Sina",
            "Louis Pasteur"
        ],
        "answer": "Andreas Vesalius",
        "correctAnswer": 0,
        "explanation": "Andreas Vesalius insan kadavraları üzerinde yaptığı detaylı disseksiyonlarla insan anatomisinin temelini atmış ve Rönesans tıbbının devrimini yapmıştır."
    },
    {
        "id": "v5_tarihetik_2",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Hekimin, hastasına uygulayacağı tedavi seçeneğinin hastaya zarar verme ihtimalini (riskini) gözeterek, yararın riskten fazla olmadığı durumlarda işlem yapmaktan kaçınması tıbbi etiğin hangi temel ilkesidir?",
        "options": [
            "Özerkliğe saygı",
            "Adalet",
            "Yararlılık",
            "Zarar vermeme (Non-maleficence)",
            "Doğruyu söyleme"
        ],
        "answer": "Zarar vermeme (Non-maleficence)",
        "correctAnswer": 3,
        "explanation": "'Primum non nocere' (Önce zarar verme) kuralı, tıbbi işlemlerin risklerini göz önünde bulundurup hastayı gereksiz zarardan korumayı amaçlayan en temel etik ilkelerden biridir."
    },
    // BAK (1 Soru)
    {
        "id": "v5_bak_1",
        "subject": "Bilimsel Araştırma",
        "question": "Bilimsel çalışmalarda, iki bağımsız grubun sayısal (sürekli) verilerinin (örneğin kontrol ve deney grubunun kan şekeri ortalamalarının) birbirinden anlamlı farklılık gösterip göstermediğini istatistiksel olarak karşılaştırmak için kullanılan test aşağıdakilerden hangisidir?",
        "options": [
            "Ki-kare testi (Chi-square)",
            "Student's T-testi (Bağımsız gruplar T-testi)",
            "Pearson korelasyon analizi",
            "Lojistik regresyon",
            "ANOVA (Tek yönlü varyans analizi)"
        ],
        "answer": "Student's T-testi (Bağımsız gruplar T-testi)",
        "correctAnswer": 1,
        "explanation": "İki grubun niceliksel ortalamalarını karşılaştırmada normal dağılım varsa bağımsız örneklem T-Testi kullanılır. İkiden fazla grup varsa ANOVA kullanılır."
    },
    // Toplum Sağlığı (1 Soru)
    {
        "id": "v5_toplum_1",
        "subject": "Toplum Sağlığı",
        "question": "Epidemiyolojide bir hastalığın belirli bir zaman kesitinde veya anında, o toplumda bulunan toplam hasta (eski ve yeni vakaların tümü) sayısının risk altındaki nüfusa oranına ne ad verilir?",
        "options": [
            "İnsidans (Hız)",
            "Prevalans",
            "Mortalite Hızı",
            "Fatalite Hızı",
            "Morbidite"
        ],
        "answer": "Prevalans",
        "correctAnswer": 1,
        "explanation": "Prevalans, mevcut olan BÜTÜN (eski+yeni) vakaların havuzunu ifade eder. İnsidans ise sadece o dönemde ortaya çıkan YENİ vakaların oranıdır."
    }
];

window.examsData['tam_kapsamli_final_v5'].questions.push(...v5Part2);
