window.examsData = window.examsData || {};

const v8Part2 = [
    // --- TIBBİ BİYOKİMYA (11 Soru) ---
    {
        "id": "v8_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Obezite kliniğinde takip edilen bir hastanın laboratuvar sonuçlarında hiperkolesterolemi saptanıyor. Kolesterol biyosentezinde hız kısıtlayıcı olan ve statin grubu ilaçların hedef aldığı enzim aşağıdakilerden hangisidir?",
        "options": [
            "HMG-CoA sentaz",
            "Squalen epoksidaz",
            "HMG-CoA redüktaz",
            "Asetil-CoA karboksilaz",
            "Tiyolaz"
        ],
        "answer": "HMG-CoA redüktaz",
        "correctAnswer": 2,
        "explanation": "Kolesterol sentezindeki ana hız kısıtlayıcı adım, HMG-CoA'nın mevalonata dönüştürülmesidir ve bu reaksiyonu HMG-CoA redüktaz katalizler. Statinler bu enzimi kompetitif olarak inhibe eder."
    },
    {
        "id": "v8_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Açlık durumunda karaciğerde sentezlenerek kana verilen ve kanda en yüksek oranda bulunan keton cismi aşağıdakilerden hangisidir?",
        "options": [
            "Aseton",
            "Asetoasetat",
            "Beta-hidroksibütirat",
            "Asetil-CoA",
            "Süksinil-CoA"
        ],
        "answer": "Beta-hidroksibütirat",
        "correctAnswer": 2,
        "explanation": "Açlık veya diyabetik ketoasidozda asetoasetat enzimatik olarak NADH kullanılarak büyük oranda beta-hidroksibütirata dönüştürülür. Bu nedenle dolaşımda en çok bulunan keton cismi beta-hidroksibütirattır."
    },
    {
        "id": "v8_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Yeni doğan bir bebekte fenilalanin hidroksilaz (PAH) enzim eksikliği saptanıyor (Fenilketonüri - PKU). Bu enzim eksikliğinde vücutta sentezi azalan ve fenilalanin diyetten kısıldığında esansiyel (dışarıdan alınması zorunlu) hale gelen amino asit hangisidir?",
        "options": [
            "Tirozin",
            "Triptofan",
            "Sistein",
            "Metiyonin",
            "Alanin"
        ],
        "answer": "Tirozin",
        "correctAnswer": 0,
        "explanation": "Normalde tirozin, fenilalaninin hidroksilasyonuyla sentezlenir. Fenilketonüride bu enzim çalışmadığı için tirozin sentezlenemez ve diyete eklenmesi gereken esansiyel bir amino aside dönüşür."
    },
    {
        "id": "v8_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Pürin nükleotidlerinin (Adenin, Guanin) yıkımı sonucunda oluşan son ürün hangisidir?",
        "options": [
            "Üre",
            "Amonyak",
            "Ürik asit",
            "Allantoin",
            "Kreatinin"
        ],
        "answer": "Ürik asit",
        "correctAnswer": 2,
        "explanation": "İnsanda ve bazı primatlarda pürin yıkımının son ürünü ürik asittir (ksantin oksidaz enzimi ile oluşur). Ürik asidin kanda birikmesi gut (damla) hastalığına neden olur."
    },
    {
        "id": "v8_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "DNA replikasyonu sırasında çift sarmalın açılmasını (hidrojen bağlarının kırılmasını) sağlayarak replikasyon çatalını oluşturan enzim aşağıdakilerden hangisidir?",
        "options": [
            "DNA polimeraz",
            "DNA ligaz",
            "Topoisomeraz",
            "DNA helikaz",
            "Primaz"
        ],
        "answer": "DNA helikaz",
        "correctAnswer": 3,
        "explanation": "DNA helikaz, ATP hidrolizi enerjisiyle DNA'nın iki zincirini birbirine bağlayan hidrojen bağlarını kopararak sarmalı açar."
    },
    {
        "id": "v8_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Eritrositlerin enerji metabolizmasında (Glikoliz) sadece bu hücre tipine özgü olan ve oksijenin hemoglobine afinitesini azaltan 'Rapoport-Luebering döngüsü'nün ara ürünü hangisidir?",
        "options": [
            "1,3-Bifosfogliserat (1,3-BPG)",
            "2,3-Bifosfogliserat (2,3-BPG)",
            "Fosfoenolpirüvat (PEP)",
            "Glikoz 6-fosfat",
            "Fruktoz 1,6-bifosfat"
        ],
        "answer": "2,3-Bifosfogliserat (2,3-BPG)",
        "correctAnswer": 1,
        "explanation": "Eritrositlerde glikoliz sırasında 1,3-BPG'nin bir kısmı bisfosfogliserat mutaz ile 2,3-BPG'ye dönüştürülür. 2,3-BPG, hemoglobinin oksijen afinitesini düşürerek dokulara oksijen salınımını kolaylaştırır."
    },
    {
        "id": "v8_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Karbonmonoksit (CO) veya Siyanür (CN-) zehirlenmelerinde, mitokondrideki elektron taşıma sisteminin (ETS) hangi kompleksi inhibe olarak hücresel solunum durur?",
        "options": [
            "Kompleks I (NADH dehidrogenaz)",
            "Kompleks II (Süksinat dehidrogenaz)",
            "Kompleks III (Sitokrom bc1)",
            "Kompleks IV (Sitokrom c oksidaz)",
            "Kompleks V (ATP sentaz)"
        ],
        "answer": "Kompleks IV (Sitokrom c oksidaz)",
        "correctAnswer": 3,
        "explanation": "Siyanür (CN-), karbonmonoksit (CO) ve hidrojen sülfür (H2S), ETS'nin son elemanı olan Kompleks IV'ü (Sitokrom c oksidaz) inhibe ederek oksijenin suya indirgenmesini engeller ve ATP üretimini durdurur."
    },
    {
        "id": "v8_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Hangi lipoprotein türü, periferik dokulardaki fazla kolesterolü toplayıp karaciğere geri taşıyarak (Ters Kolesterol Transportu) aterosklerozdan koruyucu etki gösterir?",
        "options": [
            "Şilomikron",
            "VLDL (Çok düşük yoğunluklu lipoprotein)",
            "IDL (Ara yoğunluklu lipoprotein)",
            "LDL (Düşük yoğunluklu lipoprotein)",
            "HDL (Yüksek yoğunluklu lipoprotein)"
        ],
        "answer": "HDL (Yüksek yoğunluklu lipoprotein)",
        "correctAnswer": 4,
        "explanation": "HDL (İyi kolesterol), periferik dokulardan ve makrofajlardan (ABCA1 ve LCAT enzimi yardımıyla) kolesterolü alır ve atılmak üzere karaciğere taşır (Reverse kolesterol transportu)."
    },
    {
        "id": "v8_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Amonyak toksisitesinden korunmak için vücutta oluşan ürenin sentez (Üre döngüsü) basamakları hangi hücre içi kompartmanlarda gerçekleşir?",
        "options": [
            "Tamamı sitoplazmada",
            "Tamamı mitokondride",
            "İlk iki enzim mitokondride, geri kalanı sitoplazmada",
            "İlk enzim sitoplazmada, geri kalanı mitokondride",
            "İlk enzim çekirdekte, geri kalanı lizozomda"
        ],
        "answer": "İlk iki enzim mitokondride, geri kalanı sitoplazmada",
        "correctAnswer": 2,
        "explanation": "Üre döngüsünün ilk iki reaksiyonu (Karbamoil fosfat sentetaz I ve Ornitin transkarbamoilaz) mitokondri matriksinde, son üç reaksiyonu (Arjininosüksinat sentetaz, Arjininosüksinaz, Arjinaz) ise sitoplazmada gerçekleşir."
    },
    {
        "id": "v8_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Tip 1 Diabetes Mellituslu bir hastada insülin eksikliğine bağlı olarak karaciğerde glikoliz yavaşlarken glukoneogenez artar. Bu durumda fruktoz 1,6-bifosfatı, fruktoz 6-fosfata çeviren anahtar glukoneogenez enzimi hangisidir?",
        "options": [
            "Hekzokinaz",
            "Fosfofruktokinaz-1 (PFK-1)",
            "Fosfoenolpirüvat karboksikinaz (PEPCK)",
            "Fruktoz 1,6-bifosfataz",
            "Glikoz 6-fosfataz"
        ],
        "answer": "Fruktoz 1,6-bifosfataz",
        "correctAnswer": 3,
        "explanation": "Fruktoz 1,6-bifosfataz, PFK-1'in tersi yönünde çalışan, glukoneogenezin önemli bir düzenleyici (hız kısıtlayıcı) enzimidir. İnsülin bunu inhibe ederken, glukagon uyarır."
    },
    {
        "id": "v8_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Asit-baz dengesini değerlendirmede kullanılan kan gazı analizinde; pH: 7.25, pCO2: 60 mmHg, HCO3-: 26 mEq/L saptanan bir hastanın asit-baz bozukluğu tanısı nedir?",
        "options": [
            "Metabolik Asidoz",
            "Metabolik Alkaloz",
            "Respiratuar Asidoz",
            "Respiratuar Alkaloz",
            "Mikst Asidoz"
        ],
        "answer": "Respiratuar Asidoz",
        "correctAnswer": 2,
        "explanation": "pH 7.35'in altında olduğu için asidoz vardır. pCO2'nin yüksek (normali 35-45) olması, sorunun solunumsal (respiratuar) olduğunu gösterir. HCO3- (normali 22-26) henüz telafi (kompanse) etmemiştir. Tanı: Akut Respiratuar Asidoz."
    },

    // --- TIBBİ FARMAKOLOJİ (7 Soru) ---
    {
        "id": "v8_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Kalp yetmezliği tedavisinde kullanılan ve Na+/K+ ATPaz pompasını inhibe ederek hücre içi kalsiyum miktarını artıran, böylece pozitif inotropik (kasılma gücünü artırıcı) etki gösteren kardiyak glikozid aşağıdakilerden hangisidir?",
        "options": [
            "Digoksin",
            "Verapamil",
            "Lidokain",
            "Amiodaron",
            "Dopamin"
        ],
        "answer": "Digoksin",
        "correctAnswer": 0,
        "explanation": "Digoksin (Dijitalis), Na+/K+ pompasını bloke eder. Hücre içi Na+ artar, bu da Na+/Ca++ değiştiricisini yavaşlatır, böylece sarkoplazmik retikuluma daha çok Ca++ pompalanır ve kasılma gücü (pozitif inotropik etki) artar."
    },
    {
        "id": "v8_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Mide asit salgısını baskılamak amacıyla kullanılan ve paryetal hücredeki H+/K+ ATPaz (proton) pompasını geri dönüşümsüz olarak (kovalent bağla) inhibe eden ilaç grubu aşağıdakilerden hangisidir?",
        "options": [
            "Antiasitler (Alüminyum hidroksit)",
            "H2 reseptör blokerleri (Ranitidin, Famotidin)",
            "Proton pompa inhibitörleri - PPI (Omeprazol, Lansoprazol)",
            "Antikolinerjikler (Pirenzepin)",
            "Prostaglandin analogları (Misoprostol)"
        ],
        "answer": "Proton pompa inhibitörleri - PPI (Omeprazol, Lansoprazol)",
        "correctAnswer": 2,
        "explanation": "Proton pompa inhibitörleri (Omeprazol vb.), mide paryetal hücresindeki H+/K+ ATPaz enzimini sülfhidril gruplarına kovalent bağlanarak irreverzibl inhibe eder ve asit sekresyonunu en güçlü şekilde baskılayan ilaçlardır."
    },
    {
        "id": "v8_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Asetilkolinesteraz enzimini inhibe ederek (geri dönüşümlü veya dönüşümsüz) sinaptik aralıkta asetilkolin miktarını artıran ilaçlar (örn: Neostigmin, Organofosfatlar), aşağıdakilerden hangisinde kullanılmaz (veya kontrendikedir)?",
        "options": [
            "Myasthenia gravis tedavisi",
            "Glokom (göziçi basıncı) tedavisi",
            "Alzheimer hastalığı semptomatik tedavisi",
            "Bronşiyal astım atakları",
            "Kürar (nondepolarizan kas gevşetici) zehirlenmesi"
        ],
        "answer": "Bronşiyal astım atakları",
        "correctAnswer": 3,
        "explanation": "Asetilkolinesteraz inhibitörleri kolinerjik aktiviteyi artırır. Solunum yollarındaki M3 reseptörleri üzerinden şiddetli bronkokonstriksiyon ve sekresyon artışı yaparlar. Bu yüzden astım ve KOAH'ta kontrendikedirler."
    },
    {
        "id": "v8_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Epinefrin (Adrenalin), anafilaktik şokta hayat kurtarıcı olan ve ilk tercih edilen ilaçtır. Epinefrinin anafilaksi tedavisindeki hangi etkisi Beta-2 (β2) reseptörler aracılığıyla gerçekleşir?",
        "options": [
            "Kan basıncını yükseltmesi (Vazokonstriksiyon)",
            "Kalp hızını (kronotropik) ve kasılma gücünü (inotropik) artırması",
            "Bronş düz kaslarını gevşetmesi (Bronkodilatasyon)",
            "Pupillaları genişletmesi (Midriyazis)",
            "İdrar sfinkterini kasması"
        ],
        "answer": "Bronş düz kaslarını gevşetmesi (Bronkodilatasyon)",
        "correctAnswer": 2,
        "explanation": "Epinefrin, bronşlardaki Beta-2 reseptörlerini uyararak güçlü bir bronkodilatasyon sağlar ve havayolu tıkanıklığını giderir. Kan basıncını artırması Alfa-1, kalbi uyarması Beta-1 reseptörleri üzerinden olur."
    },
    {
        "id": "v8_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Farmakokinetik parametrelerden biri olan 'Yarı ömür (t1/2)', bir ilacın plazma konsantrasyonunun yarıya inmesi için geçen süredir. İlacın vücuttan %94-%97 oranında atılması (veya kararlı duruma -steady state- ulaşması) için kural olarak yaklaşık kaç yarı ömür geçmesi gerekir?",
        "options": [
            "1-2 yarı ömür",
            "4-5 yarı ömür",
            "8-10 yarı ömür",
            "15 yarı ömür",
            "Yarı ömür sayısına bağlı değildir, atılım hızına bağlıdır"
        ],
        "answer": "4-5 yarı ömür",
        "correctAnswer": 1,
        "explanation": "Birinci derece kinetikle atılan bir ilacın yaklaşık %95-97'sinin vücuttan atılması (veya sürekli infüzyonda kararlı kan düzeyine ulaşması) için 4 ila 5 yarı ömür geçmesi gerektiği kabul edilir (1 t1/2: %50, 2 t1/2: %75, 3 t1/2: %87.5, 4 t1/2: %93.75, 5 t1/2: %96.8)."
    },
    {
        "id": "v8_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Siklooksijenaz (COX) enzimini inhibe eden NSAİİ'ler (Non-steroid antiinflamatuvar ilaçlar) prostaglandin sentezini azaltır. Sadece mide-bağırsak mukozasında yan etkilere yol açmamak için selektif olarak inflamasyon bölgesindeki COX-2'yi bloke edip, mideyi koruyan COX-1'e dokunmayan ilaç aşağıdakilerden hangisidir?",
        "options": [
            "Aspirin (Asetilsalisilik asit)",
            "İbuprofen",
            "Diklofenak",
            "Selekoksib",
            "İndometazin"
        ],
        "answer": "Selekoksib",
        "correctAnswer": 3,
        "explanation": "Selekoksib, rofekoksib vb. 'koksib' grubu ilaçlar, selektif COX-2 inhibitörleridir. Mide mukozasını koruyan (COX-1 aracılı) prostaglandinlere dokunmadıkları için gastrointestinal yan etkileri klasik NSAİİ'lere göre düşüktür."
    },
    {
        "id": "v8_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Hangi diüretik ilaç, Henle kulbunun çıkan kalın kolundaki Na-K-2Cl (NKCC2) taşıyıcısını bloke ederek etki eden çok güçlü bir 'kıvrım (loop) diüretiği'dir?",
        "options": [
            "Tiazid (Hidroklorotiazid)",
            "Furosemid",
            "Spironolakton",
            "Asetazolamid",
            "Mannitol"
        ],
        "answer": "Furosemid",
        "correctAnswer": 1,
        "explanation": "Furosemid, bumetanid, torsemid gibi loop (kıvrım) diüretikleri böbrekte Henle kulbunun çıkan kalın kolundaki Na-K-2Cl taşıyıcısını inhibe eder. Vücuttaki en güçlü (yüksek tavanlı) diüretiklerdir."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    {
        "id": "v8_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Epitel dokusunda hücrelerin birbirine sıkıca tutunmasını sağlayan, hücreler arası sızmayı engelleyen (kan-beyin, kan-testis bariyerlerini oluşturan) ve 'zonula occludens' olarak da bilinen bağlantı kompleksi hangisidir?",
        "options": [
            "Desmozom (Macula adherens)",
            "Hemidesmozom",
            "Tight junction (Sıkı bağlantı)",
            "Gap junction (Oluklu bağlantı)",
            "Zonula adherens"
        ],
        "answer": "Tight junction (Sıkı bağlantı)",
        "correctAnswer": 2,
        "explanation": "Zonula occludens (Sıkı bağlantı / Tight junction), hücrelerin apikal kısımlarında yer alarak iki komşu hücre zarını fermuar gibi birbirine kaynaştırır. Maddelerin hücreler arasından sızmasını (parasellüler yolu) engeller."
    },
    {
        "id": "v8_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kıkırdak dokusu kan damarı içermez (avaskülerdir). Kıkırdak dokusunun beslenmesi kıkırdak zarı aracılığıyla difüzyonla gerçekleşir. Kıkırdak zarına ne ad verilir?",
        "options": [
            "Periosteum",
            "Perikondriyum",
            "Endosteum",
            "Epimisyum",
            "Perinöryum"
        ],
        "answer": "Perikondriyum",
        "correctAnswer": 1,
        "explanation": "Kıkırdak dokusunu (hiyalik ve elastik kıkırdak) saran, onu besleyen, kan damarı ve sinir içeren bağ dokusu kılıfına Perikondriyum denir (Fibröz kıkırdakta bulunmaz)."
    },
    {
        "id": "v8_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kas dokusu incelemesinde sarkomer adı verilen kasılma birimi hangi iki çizgi arasında yer alır?",
        "options": [
            "İki A bandı arası",
            "İki M çizgisi arası",
            "İki Z çizgisi arası",
            "İki H bandı arası",
            "İki I bandı arası"
        ],
        "answer": "İki Z çizgisi arası",
        "correctAnswer": 2,
        "explanation": "Sarkomer, iskelet ve kalp kasının fonksiyonel kasılma birimidir ve elektron mikroskobunda iki Z çizgisi (Z diski) arasında kalan bölge olarak tanımlanır."
    },
    {
        "id": "v8_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Merkezi Sinir Sisteminde (MSS) nöronların miyelin kılıfını oluşturan nöroglia hücresi aşağıdakilerden hangisidir?",
        "options": [
            "Schwann hücresi",
            "Astrosit",
            "Oligodendrosit",
            "Mikroglia",
            "Ependim hücresi"
        ],
        "answer": "Oligodendrosit",
        "correctAnswer": 2,
        "explanation": "Miyelin kılıfı Merkezi Sinir Sisteminde (beyin, omurilik) Oligodendrositler; Çevresel Sinir Sisteminde ise Schwann hücreleri tarafından oluşturulur."
    },
    {
        "id": "v8_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Sindirim sisteminde mide mukozasını asitten koruyan mukusu salgılayan ve asit (HCl) salgılayan pariyetal hücrelerin bulunduğu mide bezleri (glandulae gastricae) en çok midenin hangi bölgesinde bulunur?",
        "options": [
            "Kardiya",
            "Fundus ve Korpus",
            "Pilor antrumu",
            "Pilor kanalı",
            "Duodenum ampullası"
        ],
        "answer": "Fundus ve Korpus",
        "correctAnswer": 1,
        "explanation": "Esas asit salgılayan pariyetal (oksintik) hücreler ve pepsinojen salgılayan esas (chief) hücreler, midenin Fundus ve Korpus bölgelerindeki bezlerde yoğun olarak bulunur."
    },
    {
        "id": "v8_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Solunum sisteminde, soluk borusunun (trachea) iç yüzünü döşeyen epitelin tipi aşağıdakilerden hangisidir?",
        "options": [
            "Çok katlı yassı epitel",
            "Tek katlı kübik epitel",
            "Yalancı çok katlı silli prizmatik (silindirik) epitel",
            "Çok katlı değişici (transizyonel) epitel",
            "Tek katlı yassı epitel"
        ],
        "answer": "Yalancı çok katlı silli prizmatik (silindirik) epitel",
        "correctAnswer": 2,
        "explanation": "Solunum yollarının (nazal kavite, trachea, bronşlar) büyük kısmını döşeyen epitel 'Solunum epiteli' olarak bilinen Yalancı çok katlı, silli, goblet hücreli prizmatik epiteldir."
    },
    {
        "id": "v8_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Karaciğerin mikroskobik yapısında, kanın portal ven ve hepatik arter dallarından hepatik venüle doğru aktığı, endotel ile döşeli genişlemiş kılcal damar ağlarına ne ad verilir?",
        "options": [
            "Kupffer hücreleri",
            "Hepatik sinüzoidler",
            "Safra kanalikülleri",
            "Disse aralığı (Space of Disse)",
            "Portal triad"
        ],
        "answer": "Hepatik sinüzoidler",
        "correctAnswer": 1,
        "explanation": "Karaciğerde portal alanlardan gelen kan, hepatosit kordonları arasında uzanan çok genişlemiş ve delikli (fenestralı) kılcal damarlar olan hepatik sinüzoidler içinden geçerek vena centralis'e (merkez ven) ulaşır."
    },
    {
        "id": "v8_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojik gelişimde, implantasyonun gerçekleştiği blastokist evresinde, embriyoyu (bebeği) oluşturacak olan hücre kitlesine ne ad verilir?",
        "options": [
            "Trofoblast",
            "Sinsityotrofoblast",
            "Embriyoblast (İç hücre kitlesi)",
            "Hipoblast",
            "Epiblast"
        ],
        "answer": "Embriyoblast (İç hücre kitlesi)",
        "correctAnswer": 2,
        "explanation": "Blastokist yapısı dışta plasentayı oluşturacak olan trofoblastlar ve içte embriyoyu (fetusu) oluşturacak olan embriyoblastlardan (iç hücre kitlesi / inner cell mass) oluşur."
    },
    {
        "id": "v8_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojik dönemin 3. haftasında üç germ yaprağının (Ektoderm, Mezoderm, Endoderm) oluştuğu sürece ne ad verilir?",
        "options": [
            "Klivaj (Bölünme)",
            "Kavitasyon",
            "Gastrulasyon",
            "Nörülasyon",
            "Organogenez"
        ],
        "answer": "Gastrulasyon",
        "correctAnswer": 2,
        "explanation": "Gastrulasyon, primitif çizginin oluşumuyla başlayan ve epiblast hücrelerinin göç ederek trilaminar embriyonik diski (ektoderm, mezoderm, endoderm) oluşturduğu embriyolojik dönüm noktasıdır."
    },
    {
        "id": "v8_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek tübüllerinde su geri emilimini kolaylaştıran Aquaporin kanalları ağırlıklı olarak hangi epitel tipinden oluşan yapılarda eksprese edilir?",
        "options": [
            "Tek katlı yassı ve Tek katlı kübik epitel",
            "Çok katlı yassı epitel",
            "Değişici (Transizyonel) epitel",
            "Yalancı çok katlı epitel",
            "Kübik ve çok katlı prizmatik"
        ],
        "answer": "Tek katlı yassı ve Tek katlı kübik epitel",
        "correctAnswer": 0,
        "explanation": "Böbrek tübülleri (Proksimal tübül, distal tübül, toplayıcı borular) tek katlı kübik epitelle; Henle inen ve çıkan ince kolları tek katlı yassı epitelle döşelidir. Suyun geçişi bu epitel katmanlarındaki kanallardan (Aquaporin) olur."
    },
    {
        "id": "v8_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Lenf düğümlerinin mikroskobik yapısında, B lenfositlerinin yoğun olarak bulunduğu, antijenik uyarı sonrası germinal merkezlerin (çoğalma odakları) oluştuğu bölge neresidir?",
        "options": [
            "Medulla (Öz)",
            "Parakorteks",
            "Korteksin dış yüzeyindeki foliküller (Nodüller)",
            "Subkapsüler sinüs",
            "Medüller kordonlar"
        ],
        "answer": "Korteksin dış yüzeyindeki foliküller (Nodüller)",
        "correctAnswer": 2,
        "explanation": "Lenf düğümünün dış korteksinde lenf folikülleri (nodülleri) bulunur. Bu bölgeler B lenfositlerinden zengindir (B-bağımlı bölge). Parakorteks ise T lenfositlerin bulunduğu T-bağımlı bölgedir."
    },
    {
        "id": "v8_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Bağ dokusunun temel hücresi olan, kolajen, elastin liflerini ve hücreler arası temel maddeyi (ekstrasellüler matriks) sentezleyen hücre hangisidir?",
        "options": [
            "Makrofaj",
            "Mast hücresi",
            "Fibroblast",
            "Plazma hücresi",
            "Adiposit"
        ],
        "answer": "Fibroblast",
        "correctAnswer": 2,
        "explanation": "Fibroblastlar bağ dokusunun esas hücresi olup, ekstrasellüler matriksteki kolajen, retiküler, elastik liflerin ve glikozaminoglikan gibi amorf maddelerin sentezinden sorumludur."
    },
    {
        "id": "v8_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Eritrosit (kırmızı kan hücresi) yapımı kemik iliğinde gerçekleşir. Olgunlaşma serisinde, çekirdeğin atılmasından hemen sonra oluşan, periferik kanda da %1-2 oranında bulunan ve RNA kalıntıları içerdiği için supravital boyalarla retiküler ağ şeklinde boyanan genç eritrosite ne ad verilir?",
        "options": [
            "Proeritroblast",
            "Bazofilik eritroblast",
            "Polikromatofilik eritroblast",
            "Ortokromatofilik eritroblast (Normoblast)",
            "Retikülosit"
        ],
        "answer": "Retikülosit",
        "correctAnswer": 4,
        "explanation": "Normoblast (ortokromatofilik eritroblast) evresinde hücre çekirdeğini dışarı atar. Çekirdeksiz ancak içinde az miktarda poliribozom/RNA ağı bulunduran bu genç eritrositlere Retikülosit denir."
    },

    // --- TIBBİ MİKROBİYOLOJİ (14 Soru) ---
    {
        "id": "v8_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakteri hücre duvarının yapısında yer alan ve Gram boyama ile mor/mavi boyanmayı sağlayan en önemli kalın tabaka aşağıdakilerden hangisidir?",
        "options": [
            "Lipopolisakkarit (LPS)",
            "Peptidoglikan (Murein)",
            "Teikoik asit",
            "Dış membran",
            "Kapsül"
        ],
        "answer": "Peptidoglikan (Murein)",
        "correctAnswer": 1,
        "explanation": "Gram pozitif bakterilerin hücre duvarında çok kalın (yaklaşık 40 tabaka) bir Peptidoglikan tabakası vardır. Bu kalın yapı, kristal viyole boyasının hücre içinde tutulmasını (mor renk) sağlar."
    },
    {
        "id": "v8_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram negatif bakterilerin dış membranında bulunan, lipid A ve O-spesifik polisakkarit kısımlarından oluşan ve endotoksin etkisi (ateş, şok) gösteren molekül hangisidir?",
        "options": [
            "Lipopolisakkarit (LPS)",
            "Porin proteinleri",
            "Lipoteikoik asit",
            "M proteini",
            "Ekzotoksin"
        ],
        "answer": "Lipopolisakkarit (LPS)",
        "correctAnswer": 0,
        "explanation": "Lipopolisakkarit (LPS), Gram negatif bakterilerin dış membranında yer alır. İçindeki Lipid A kısmı, bakterinin parçalanmasıyla açığa çıkarak immün sistemi aşırı uyarır ve sepsis/şok (Endotoksik şok) tablolarına neden olur."
    },
    {
        "id": "v8_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Zorunlu hücre içi paraziti olan, üremek için canlı hücreye (hücre kültürü veya doku) ihtiyaç duyan ve ışık mikroskobuyla genellikle görülemeyen mikroorganizma grubu hangisidir?",
        "options": [
            "Mantarlar",
            "Parazitler (Helmintler)",
            "Virüsler",
            "Bakteriler (Çoğu tür)",
            "Mayalar"
        ],
        "answer": "Virüsler",
        "correctAnswer": 2,
        "explanation": "Virüsler, kendi metabolik aygıtları (ribozom, enzim vb.) olmadığından zorunlu hücre içi parazitidirler. Sadece canlı hücrelerin (konak hücre) içinde replike olabilirler ve elektron mikroskobu ile görülebilirler."
    },
    {
        "id": "v8_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mikrobiyolojide penisilin ve sefalosporin gibi beta-laktam antibiyotiklerin bakterilerdeki hedefi nedir?",
        "options": [
            "30S ribozom alt birimi",
            "DNA giraz enzimi",
            "RNA polimeraz enzimi",
            "Hücre duvarı sentez enzimleri (PBP - Penisilin Bağlayan Proteinler)",
            "Hücre zarı sterolleri"
        ],
        "answer": "Hücre duvarı sentez enzimleri (PBP - Penisilin Bağlayan Proteinler)",
        "correctAnswer": 3,
        "explanation": "Beta-laktam antibiyotikler (penisilinler, sefalosporinler vb.), peptidoglikan zincirlerinin çapraz bağlanmasını sağlayan transpeptidazlara (Penisilin Bağlayan Proteinler - PBP) bağlanarak hücre duvarı sentezini durdurur ve bakteriyi öldürür (bakterisidal)."
    },
    {
        "id": "v8_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hastanede yatan hastalarda sıklıkla üriner kateter ve damar içi kateter enfeksiyonlarına neden olan, koagülaz negatif, metisilin direncine sık rastlanan ve biyofilm oluşturma (slime faktör) yeteneği çok yüksek olan stafilokok türü hangisidir?",
        "options": [
            "Staphylococcus aureus",
            "Staphylococcus epidermidis",
            "Staphylococcus saprophyticus",
            "Streptococcus pyogenes",
            "Enterococcus faecalis"
        ],
        "answer": "Staphylococcus epidermidis",
        "correctAnswer": 1,
        "explanation": "Staphylococcus epidermidis, normal deri florasında bulunur. Yabancı cisimlerin (kateter, protez, kalp kapakçığı) yüzeyine tutunarak biyofilm tabakası oluşturur. Bu tabaka hem antibiyotiklerin geçişini engeller hem de immün sistemden korur."
    },
    {
        "id": "v8_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki virüslerden hangisi bağışıklık sisteminin CD4+ T lenfositlerini enfekte edip yıkarak zamanla Kazanılmış İmmün Yetmezlik Sendromuna (AIDS) neden olur?",
        "options": [
            "Epstein-Barr Virüsü (EBV)",
            "Sitomegalovirüs (CMV)",
            "İnsan Papilloma Virüsü (HPV)",
            "İnsan İmmünyetmezlik Virüsü (HIV)",
            "Hepatit B Virüsü (HBV)"
        ],
        "answer": "İnsan İmmünyetmezlik Virüsü (HIV)",
        "correctAnswer": 3,
        "explanation": "HIV, yüzeyindeki gp120 proteini ile CD4+ T hücrelerindeki CD4 reseptörüne (ve CCR5/CXCR4 koreseptörlerine) tutunur. Bu hücreleri yıkarak vücudun savunma mekanizmasını çökertir (AIDS)."
    },
    {
        "id": "v8_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Boğaz enfeksiyonu (farenjit/tonsillit) sonrasında, bakterinin antijenlerine karşı oluşan antikorların kalp kapakçıkları veya böbreklerle çapraz reaksiyona girmesi sonucu Akut Romatizmal Ateş (ARA) veya Akut Glomerülonefrit (AGN) gibi komplikasyonlara neden olan bakteri hangisidir?",
        "options": [
            "Streptococcus pneumoniae",
            "Streptococcus pyogenes (Grup A Beta-Hemolitik Streptokok)",
            "Staphylococcus aureus",
            "Corynebacterium diphtheriae",
            "Haemophilus influenzae"
        ],
        "answer": "Streptococcus pyogenes (Grup A Beta-Hemolitik Streptokok)",
        "correctAnswer": 1,
        "explanation": "Grup A Streptokoklar (S. pyogenes), içerdikleri M proteini nedeniyle kalp ve böbrek dokularıyla antijenik benzerlik gösterir. Enfeksiyon sonrası gelişen otoimmün yanıt ARA (Romatizmal kalp hastalığı) veya Post-streptokoksik Glomerülonefrit tablosuna yol açabilir."
    },
    {
        "id": "v8_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Cinsel yolla bulaşan ve ağrısız sert ülser (şankr) tablosu ile başlayan frengi (sifiliz) hastalığının etkeni olan spiroket aşağıdakilerden hangisidir?",
        "options": [
            "Neisseria gonorrhoeae",
            "Treponema pallidum",
            "Chlamydia trachomatis",
            "Trichomonas vaginalis",
            "Haemophilus ducreyi"
        ],
        "answer": "Treponema pallidum",
        "correctAnswer": 1,
        "explanation": "Treponema pallidum, Sifiliz (Frengi) etkenidir. Gram boyasıyla boyanamayan, ancak karanlık alan mikroskobuyla veya serolojik testlerle (VDRL, RPR, TPHA) teşhis edilen ince yapılı bir spirokettir."
    },
    {
        "id": "v8_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Candida albicans gibi mantarların hücre zarı yapısında bulunan ve sistemik mantar tedavisinde kullanılan amfoterisin B ile azol grubu ilaçların hedeflediği ana molekül hangisidir?",
        "options": [
            "Kolesterol",
            "Ergosterol",
            "Peptidoglikan",
            "Kitin",
            "Beta-glukan"
        ],
        "answer": "Ergosterol",
        "correctAnswer": 1,
        "explanation": "Mantarların hücre zarında, memeli hücrelerinde bulunan kolesterol yerine Ergosterol bulunur. Antifungal ilaçların çoğu (Amfoterisin B, flukonazol vb.) mantar zarını seçici olarak bozmak için ergosterolü hedefler veya sentezini engeller."
    },
    {
        "id": "v8_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki parazitlerden hangisi sıtma (malarya) hastalığının etkenidir ve sivrisinek (Anofel) sokmasıyla bulaşır?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium falciparum",
            "Leishmania donovani",
            "Trypanosoma brucei",
            "Entamoeba histolytica"
        ],
        "answer": "Plasmodium falciparum",
        "correctAnswer": 1,
        "explanation": "Plasmodium türleri (falciparum, vivax, ovale, malariae) sıtma etkenidir. Dişi Anofel sivrisineği ısırmasıyla bulaşır ve eritrositleri enfekte ederek patlatır (ateş nöbetleri)."
    },
    {
        "id": "v8_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşılama ile dünyadan tamamen eradike (yok) edildiği kabul edilen ve artık doğada görülmeyen tek insan virüsü hangisidir?",
        "options": [
            "Polio (Çocuk felci) virüsü",
            "Variola (Çiçek) virüsü",
            "Kızamık virüsü",
            "Kuduz virüsü",
            "Hepatit B virüsü"
        ],
        "answer": "Variola (Çiçek) virüsü",
        "correctAnswer": 1,
        "explanation": "Variola virüsü, çiçek hastalığının (smallpox) etkenidir. Dünya Sağlık Örgütü'nün başarılı aşı kampanyası sayesinde 1980 yılında dünya üzerinden tamamen eradike edildiği resmen ilan edilmiştir."
    },
    {
        "id": "v8_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerde DNA'nın serbest olarak bulunduğu sitoplazmik bölgeye ne ad verilir?",
        "options": [
            "Çekirdek",
            "Nükleolus (Çekirdekçik)",
            "Nükleoid",
            "Plazmid",
            "Mezozom"
        ],
        "answer": "Nükleoid",
        "correctAnswer": 2,
        "explanation": "Bakteriler prokaryotik canlılardır ve gerçek bir çekirdek zarları yoktur. Kromozomal DNA'nın sitoplazmada yoğunlaşmış olarak bulunduğu alana nükleoid denir."
    },
    {
        "id": "v8_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerin zorlu ortam koşullarında (besin kıtlığı, kuraklık, aşırı sıcak vb.) hayatta kalmasını sağlayan, metabolik olarak inaktif, ısıya ve kimyasallara çok dirençli yapı hangisidir?",
        "options": [
            "Kapsül",
            "Fimbria (Pilus)",
            "Endospor",
            "Flagella",
            "Biyofilm"
        ],
        "answer": "Endospor",
        "correctAnswer": 2,
        "explanation": "Bacillus ve Clostridium cinsi gibi bazı Gram pozitif bakteriler, ortam şartları kötüleştiğinde sporülasyona giderek endospor adı verilen dayanıklı formlar oluşturur. Sterilizasyon işleminin temel amacı bu endosporları yok etmektir."
    },
    {
        "id": "v8_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki sterilizasyon yöntemlerinden hangisi ameliyathane malzemelerinin, sıvılarının ve besiyerlerinin sterilizasyonunda en sık kullanılan basınçlı buhar yöntemidir?",
        "options": [
            "Kuru sıcak hava (Pastör fırını)",
            "Otoklav",
            "Filtrasyon",
            "Ultraviyole (UV) ışınlama",
            "Etilen oksit gazı"
        ],
        "answer": "Otoklav",
        "correctAnswer": 1,
        "explanation": "Otoklav, 121°C'de 1 atmosfer basınçlı su buharı ile 15-20 dakikada tüm canlı mikroorganizmaların ve dirençli endosporların ölümünü sağlayan en güvenilir ve yaygın sterilizasyon yöntemidir."
    },

    // --- DİĞER (Patoloji, Biyofizik vb.) (12 Soru) ---
    {
        "id": "v8_diger_1",
        "subject": "Tıbbi Patoloji",
        "question": "Kronik sigara içimi sonucu, solunum yollarındaki normal 'Yalancı çok katlı silli prizmatik' epitelin, daha dayanıklı olan 'Çok katlı yassı' (skuamöz) epitele dönüşmesi şeklindeki adaptasyon sürecine patolojide ne ad verilir?",
        "options": [
            "Atrofi",
            "Hipertrofi",
            "Hiperplazi",
            "Metaplazi",
            "Displazi"
        ],
        "answer": "Metaplazi",
        "correctAnswer": 3,
        "explanation": "Bir olgun erişkin hücre tipinin (epiteliyal veya mezenkimal) stres sonucu yerini başka bir olgun hücre tipine bırakmasına metaplazi denir. En bilinen örneği sigara içenlerde solunum yolunda görülen skuamöz metaplazidir."
    },
    {
        "id": "v8_diger_2",
        "subject": "Tıbbi Patoloji",
        "question": "Hücre ölümü mekanizmalarından apoptoz ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
        "options": [
            "Apoptoz, programlanmış hücre ölümüdür.",
            "Apoptozda hücre büzüşür ve küçülür (şrinkaj).",
            "Hücre zarı bütünlüğü bozulmaz, içeriğini dışarıya sızdırmaz.",
            "Apoptoz çevrede şiddetli bir inflamatuar (iltihabi) yanıta neden olur.",
            "DNA düzenli parçalara (fragmanlara) bölünür."
        ],
        "answer": "Apoptoz çevrede şiddetli bir inflamatuar (iltihabi) yanıta neden olur.",
        "correctAnswer": 3,
        "explanation": "Apoptozda hücre zarı bütünlüğü korunur, hücre apoptotik cisimciklere ayrılır ve makrofajlar tarafından sessizce fagosite edilir. İçerik dışarı sızmadığı için etrafta inflamasyon (iltihap) OLUŞMAZ. İnflamasyon, nekrozun tipik özelliğidir."
    },
    {
        "id": "v8_diger_3",
        "subject": "Tıbbi Patoloji",
        "question": "Dokularda geri dönüşümsüz iskemik hasar sonucu gelişen ölüm olayında proteinlerin pıhtılaşmasıyla hücre şeklinin (hayalet görünümünün) birkaç gün korunduğu nekroz tipi hangisidir?",
        "options": [
            "Kazeifikasyon nekrozu",
            "Koagülasyon nekrozu",
            "Sıvılaşma (Likuifaksiyon) nekrozu",
            "Yağ nekrozu",
            "Gangrenöz nekroz"
        ],
        "answer": "Koagülasyon nekrozu",
        "correctAnswer": 1,
        "explanation": "Koagülasyon nekrozu, genellikle iskemik hasar (miyokard enfarktüsü vb.) sonucu oluşur. Enzimler de denatüre olduğu için hücreler hemen parçalanamaz ve bir süre çekirdeksiz hayalet hücre (ghost cell) şeklinde mimarilerini korurlar. (Beyin enfarktüsü hariç, beyinde sıvılaşma nekrozu görülür)."
    },
    {
        "id": "v8_diger_4",
        "subject": "Biyofizik",
        "question": "Bir sinir hücresinde aksiyon potansiyelinin oluşumunda, depolarizasyon evresini (zar potansiyelinin pozitif değerlere çıkmasını) sağlayan asıl iyon hareketi nedir?",
        "options": [
            "Potasyumun (K+) hücre dışına çıkması",
            "Sodyumun (Na+) hücre içine girmesi",
            "Kalsiyumun (Ca++) hücre dışına çıkması",
            "Klorun (Cl-) hücre içine girmesi",
            "Na+/K+ pompasının ATP harcaması"
        ],
        "answer": "Sodyumun (Na+) hücre içine girmesi",
        "correctAnswer": 1,
        "explanation": "Aksiyon potansiyelinin depolarizasyon fazı, voltaj kapılı sodyum (Na+) kanallarının hızla açılması ve hücre içine çok miktarda Na+ girmesi ile oluşur. Repolarizasyon (geri dönüş) fazını ise potasyumun (K+) hücre dışına çıkışı sağlar."
    },
    {
        "id": "v8_diger_5",
        "subject": "Biyofizik",
        "question": "Elektromanyetik spektrumda yer alan ve tıbbi görüntülemede (Röntgen ve Tomografi) kullanılan X ışınları, maddenin atomları ile etkileştiğinde aşağıdaki olaylardan hangisine neden olurlar?",
        "options": [
            "Sadece ısı artışına (Termal etki)",
            "Moleküllerde rezonans titreşime",
            "İyonizasyona (elektron kopararak iyon oluşturma)",
            "Hücre zarını kalınlaştırmaya",
            "Sadece su moleküllerini buharlaştırmaya"
        ],
        "answer": "İyonizasyona (elektron kopararak iyon oluşturma)",
        "correctAnswer": 2,
        "explanation": "X ışınları ve Gama ışınları 'iyonizan radyasyon' grubundadır. Yüksek enerjileri nedeniyle atomların yörüngelerinden elektron kopararak onları iyonize ederler. Bu durum DNA hasarı gibi biyolojik etkilere (radyasyon hasarına) yol açar."
    },
    {
        "id": "v8_diger_6",
        "subject": "Biyofizik",
        "question": "Hemodinamikte sıvı akışına karşı oluşan 'Direnç (Resistance)', Poiseuille yasasına göre damarın yarıçapı ile nasıl bir ilişki içindedir?",
        "options": [
            "Yarıçapın kendisiyle doğru orantılıdır.",
            "Yarıçapın karesiyle doğru orantılıdır.",
            "Yarıçapın küpüyle ters orantılıdır.",
            "Yarıçapın dördüncü kuvvetiyle ters orantılıdır.",
            "Yarıçap ile hiçbir bağlantısı yoktur, sadece viskoziteye bağlıdır."
        ],
        "answer": "Yarıçapın dördüncü kuvvetiyle ters orantılıdır.",
        "correctAnswer": 3,
        "explanation": "Poiseuille yasasına göre (R = 8ηL / πr^4) damar direnci, damar yarıçapının 4. kuvveti ile ters orantılıdır. Yani damar yarıçapı yarıya düşerse (daralırsa), direnç 16 kat artar. Bu nedenle kan basıncı kontrolünde en etkili yol damar çapının değiştirilmesidir."
    },
    {
        "id": "v8_diger_7",
        "subject": "Toplum Sağlığı",
        "question": "Bir toplumda belirli bir zaman diliminde mevcut olan (hem yeni tanı almış hem de eskiden beri hastalıklı olan) tüm hastaların sayısının, risk altındaki toplam nüfusa oranına epidemiyolojide ne ad verilir?",
        "options": [
            "İnsidans",
            "Prevalans",
            "Mortalite",
            "Fatalite",
            "Atak hızı"
        ],
        "answer": "Prevalans",
        "correctAnswer": 1,
        "explanation": "Prevalans, belirli bir anda toplumdaki toplam hasta (eski + yeni) sayısını verir ve hastalığın toplumdaki 'yaygınlığını' gösterir. İnsidans ise sadece 'yeni' ortaya çıkan vakaların görülme hızıdır."
    },
    {
        "id": "v8_diger_8",
        "subject": "Bilimsel Araştırma",
        "question": "Tıbbi araştırmalarda, nedensellik (sebep-sonuç) ilişkisini kanıtlamak ve bir ilacın etkinliğini test etmek için kullanılan 'altın standart' araştırma tasarımı aşağıdakilerden hangisidir?",
        "options": [
            "Vaka-kontrol çalışması",
            "Kesitsel (Cross-sectional) çalışma",
            "Retrospektif kohort çalışması",
            "Randomize Kontrollü Klinik Deney (Çalışma)",
            "Olgu sunumu (Case report)"
        ],
        "answer": "Randomize Kontrollü Klinik Deney (Çalışma)",
        "correctAnswer": 3,
        "explanation": "Nedensellik ve etkinlik değerlendirmesinde en güçlü kanıt seviyesini 'Randomize Kontrollü Çift Kör Çalışmalar' (RCT) sağlar. Hastaların rastgele (random) iki gruba (ilaç/plasebo) ayrıldığı bu yöntem, taraf tutmayı (bias) engeller."
    },
    {
        "id": "v8_diger_9",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Hekimlik etiğinde, hastanın kendi tıbbi tedavisi hakkında bilgilendirilerek, özgür iradesiyle karar verme hakkını ifade eden temel ahlaki prensip aşağıdakilerden hangisidir?",
        "options": [
            "Yararlılık (Beneficence)",
            "Zarar vermeme (Non-maleficence)",
            "Özerklik (Otonomi)",
            "Adalet (Justice)",
            "Sır saklama (Gizlilik)"
        ],
        "answer": "Özerklik (Otonomi)",
        "correctAnswer": 2,
        "explanation": "Özerklik (Otonomi), hastanın kendi bedeni ve sağlığı üzerinde karar verme hakkıdır. 'Aydınlatılmış Onam' (Informed Consent) uygulamasının temelini oluşturan etik ilkedir."
    },
    {
        "id": "v8_diger_10",
        "subject": "İletişim Becerileri",
        "question": "Klinik görüşme sırasında hekimin hastayı sadece sözleriyle değil, beden diliyle, göz temasıyla ve onu yargılamadan anlamaya çalışarak dinlemesine iletişimde ne ad verilir?",
        "options": [
            "Sempati duymak",
            "Aktif (Etkin) Dinleme",
            "Yönlendirici konuşma",
            "Empatik yüzleşme",
            "Pasif onaylama"
        ],
        "answer": "Aktif (Etkin) Dinleme",
        "correctAnswer": 1,
        "explanation": "Aktif (Etkin) dinleme; göz teması kurma, baş sallama, hastanın sözünü kesmeme ve ara sıra söylenenleri özetleyerek hastaya 'seni anlıyorum' mesajını verme sürecidir."
    },
    {
        "id": "v8_diger_11",
        "subject": "İletişim Becerileri",
        "question": "Ağır ve ölümcül bir hastalık tanısı (kötü haber) verilirken hekimin uygulaması gereken en doğru yaklaşım aşağıdakilerden hangisidir?",
        "options": [
            "Hastayı üzmemek için tanıyı gizlemek ve sadece ailesine söylemek",
            "Gerçeği bir çırpıda, tüm tıbbi detaylarıyla hızlıca aktarmak",
            "Hastanın ne kadarını bilmek istediğini anlayıp (SPIKES modeli gibi), uygun ortamda empati kurarak adım adım vermek",
            "Hastalığın seyrini umut vermek amacıyla abartılı derecede iyi göstermek",
            "Haberi verirken duygusal bağ kurmamak için tamamen soğuk ve mesafeli davranmak"
        ],
        "answer": "Hastanın ne kadarını bilmek istediğini anlayıp (SPIKES modeli gibi), uygun ortamda empati kurarak adım adım vermek",
        "correctAnswer": 2,
        "explanation": "Kötü haber vermede altın standart SPIKES protokolüdür. Uygun ortam sağlanır, hastanın ne bildiği ve ne bilmek istediği sorulur, haber azar azar verilir, duygularına empatiyle yaklaşılır ve plan yapılır."
    },
    {
        "id": "v8_diger_12",
        "subject": "Toplum Sağlığı",
        "question": "Aşı ile önlenebilir hastalıklara karşı toplumun büyük bir kısmının aşılanması (veya hastalığı geçirmesi) sonucunda, aşılanmamış veya aşı tutmamış bireylerin de hastalığa yakalanma riskinin azalması durumuna ne ad verilir?",
        "options": [
            "Bireysel bağışıklık",
            "Pasif bağışıklık",
            "Kitle (Sürü) bağışıklığı (Herd immunity)",
            "Hücresel bağışıklık",
            "Doğal bağışıklık"
        ],
        "answer": "Kitle (Sürü) bağışıklığı (Herd immunity)",
        "correctAnswer": 2,
        "explanation": "Kitle (sürü) bağışıklığı; toplumun belli bir yüzdesi bağışık hale geldiğinde, hastalığın etkeni zinciri kırılarak bulaşma şansı bulamaz, böylece aşı olmamış zayıf bireyler de korunmuş olur."
    }
];

window.examsData['tam_kapsamli_final_v8'].questions.push(...v8Part2);
