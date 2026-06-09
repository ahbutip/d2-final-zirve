window.examsData = window.examsData || {};

window.examsData['tam_kapsamli_final_v7'] = window.examsData['tam_kapsamli_final_v7'] || {
    "title": "Zirve Deneme Sınavı 4 (Zirve Seviyesi)",
    "description": "Özel istihbarat tüyolarının 4. ve en zorlayıcı versiyonudur. Ömer Hoca'nın tüm klinik senaryo tipleri, Ali Koray'ın temel GİS tüyosu ve Senem Hoca'nın embriyoloji-histoloji entegrasyonları en üst seviyede harmanlanmıştır.",
    "questions": []
};

const v7Part2 = [
    // --- BİYOKİMYA (11 Soru) ---
    // Mustafa Bozkurt (4 Soru: Kan prot, KH, Pankreas, Adrenal)
    {
        "id": "v7_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki plazma proteinlerinden hangisi bakır taşınmasında görev alır ve Wilson hastalığında kan düzeyi belirgin olarak DÜŞER?",
        "options": [
            "Transferrin",
            "Haptoglobin",
            "Seruloplazmin",
            "Hemopeksin",
            "Prealbumin (Transtiretin)"
        ],
        "answer": "Seruloplazmin",
        "correctAnswer": 2,
        "explanation": "Seruloplazmin alfa-2 globulin fraksiyonundadır ve bakırın kanda taşındığı asıl proteindir. Wilson hastalığında bakır seruloplazmine bağlanamaz, dokulara çöker ve kanda seruloplazmin düşer."
    },
    {
        "id": "v7_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Karbonhidrat metabolizmasında Fruktozun karaciğerdeki yıkımı sırasında, eksikliği sonucu şiddetli 'Fruktoz İntoleransına' neden olan enzim hangisidir?",
        "options": [
            "Fruktokinaz",
            "Aldolaz B",
            "Hekzokinaz",
            "Trioz kinaz",
            "Galaktoz-1-fosfat üridil transferaz"
        ],
        "answer": "Aldolaz B",
        "correctAnswer": 1,
        "explanation": "Esansiyel fruktozüride fruktokinaz eksiktir (iyi huyludur). Ancak Aldolaz B eksikliğinde Fruktoz-1-fosfat karaciğerde birikerek ATP'yi tüketir ve şiddetli hipoglisemi/karaciğer hasarı yapar."
    },
    {
        "id": "v7_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Pankreas beta hücrelerinden insülin salgılanmasını tetikleyen temel hücresel mekanizmada, hücre içine giren glukozun ATP oranını artırması hücre zarındaki hangi iyon kanalının KAPANMASINA yol açarak depolarizasyonu başlatır?",
        "options": [
            "Voltaj kapılı kalsiyum kanalları",
            "Sodyum-Potasyum pompası",
            "ATP'ye duyarlı Potasyum (K_ATP) kanalları",
            "Klor kanalları",
            "Aquaporinler"
        ],
        "answer": "ATP'ye duyarlı Potasyum (K_ATP) kanalları",
        "correctAnswer": 2,
        "explanation": "Glukoz girip ATP artınca ATP-duyarlı Potasyum kanalları kapanır. K+ içeride birikerek zarı depolarize eder, bu da Ca+2 kanallarını açarak insülin veziküllerinin ekzositozunu sağlar."
    },
    {
        "id": "v7_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Adrenal medulladan salgılanan katekolaminlerin yıkımında görev alan temel enzimler COMT ve MAO'dur. Bu yıkımın sonucunda idrarla atılan ve feokromositoma tanısında ölçülen nihai son ürün hangisidir?",
        "options": [
            "Vanilmandelik asit (VMA)",
            "Homovanilik asit (HVA)",
            "5-Hidroksiindolasetik asit (5-HIAA)",
            "Metanefrin",
            "Ürik asit"
        ],
        "answer": "Vanilmandelik asit (VMA)",
        "correctAnswer": 0,
        "explanation": "Adrenalin ve Noradrenalinin son yıkım ürünü idrarda VMA'dır. Dopaminin yıkım ürünü HVA, Serotoninin yıkım ürünü ise 5-HIAA'dır."
    },
    // Diğer Biyokimya (7 Soru)
    {
        "id": "v7_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşırı amonyak beyin için son derece toksiktir. Beyin dokusu kandaki fazla amonyağı nötralize edip detoksifiye etmek için glutamat ile birleştirerek hangi molekülü sentezler?",
        "options": [
            "Üre",
            "Kreatinin",
            "Glutamin",
            "Alanin",
            "Ürik asit"
        ],
        "answer": "Glutamin",
        "correctAnswer": 2,
        "explanation": "Beyinde üre döngüsü yoktur. Beyin amonyağı detoksifiye etmek için astrositlerde Glutamatı Glutamin'e çevirir. Biriken aşırı glutamin beyin ödemine ve komaya neden olur."
    },
    {
        "id": "v7_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Uzun süreli alkol tüketimi sonucu gelişen B1 Vitamini eksikliğinde Wernicke-Korsakoff sendromu görülür. Tiamin pirofosfat hangi enzimin koenzimidir ve eksikliğinde ATP üretimi sekteye uğrar?",
        "options": [
            "Pirüvat Kinaz",
            "Süksinat Dehidrogenaz",
            "Pirüvat Dehidrogenaz",
            "Hekzokinaz",
            "Glukoz-6-fosfat dehidrogenaz"
        ],
        "answer": "Pirüvat Dehidrogenaz",
        "correctAnswer": 2,
        "explanation": "Pirüvatın Asetil-CoA'ya dönüşüp Krebs döngüsüne girmesini sağlayan Pirüvat Dehidrogenaz kompleksi için B1 (Tiamin) vitamini şarttır. Eksikliğinde pirüvat laktata döner ve laktik asidoz gelişir, beyin enerjisiz kalır."
    },
    {
        "id": "v7_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "DNA'nın çift sarmal yapısında Adenin ile Timin arasında kaç adet, Guanin ile Sitozin arasında kaç adet hidrojen bağı bulunur?",
        "options": [
            "A-T arasında 3, G-C arasında 2",
            "A-T arasında 2, G-C arasında 3",
            "Her ikisinde de 2",
            "Her ikisinde de 3",
            "A-T arasında 1, G-C arasında 2"
        ],
        "answer": "A-T arasında 2, G-C arasında 3",
        "correctAnswer": 1,
        "explanation": "Adenin-Timin eşleşmesinde 2 hidrojen bağı varken, Guanin-Sitozin eşleşmesinde 3 hidrojen bağı vardır. Bu yüzden GC oranı yüksek DNA bölgelerini eritmek (açmak) daha fazla ısı/enerji gerektirir."
    },
    {
        "id": "v7_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Lipitlerin sindirimi için gerekli olan Safra Asitleri karaciğerde kolesterolden sentezlenir. Bu sentez yolunun hız kısıtlayıcı basamağında görevli enzim aşağıdakilerden hangisidir?",
        "options": [
            "HMG-CoA redüktaz",
            "Kolesterol 7-alfa-hidroksilaz",
            "Lipoprotein lipaz",
            "Hormona duyarlı lipaz",
            "Safra tuzu eksport pompası"
        ],
        "answer": "Kolesterol 7-alfa-hidroksilaz",
        "correctAnswer": 1,
        "explanation": "Kolesterolden safra asidi (kolik asit, kenodeoksikolik asit) yapımında hız kısıtlayıcı enzim Kolesterol 7-alfa-hidroksilazdır. Reaksiyon için C vitamini gerekir."
    },
    {
        "id": "v7_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Yenidoğan sarılığı tedavisinde bebeğe uygulanan 'Fototerapi' tedavisinin fizyolojik/biyokimyasal amacı nedir?",
        "options": [
            "Bilirubini karaciğere geri döndürmek.",
            "Direkt bilirubini (konjuge) safra kanalına itmek.",
            "Toksik ve suda çözünmeyen indirekt bilirubini karaciğere (konjugasyona) ihtiyaç duymadan suda çözünür izomerlere (örn. Lumirubin) çevirip idrar/safra ile atılmasını sağlamak.",
            "Kırmızı kan hücrelerinin yıkımını (hemolizini) anında durdurmak.",
            "Alyuvar zarını güçlendirmek."
        ],
        "answer": "Toksik ve suda çözünmeyen indirekt bilirubini karaciğere (konjugasyona) ihtiyaç duymadan suda çözünür izomerlere (örn. Lumirubin) çevirip idrar/safra ile atılmasını sağlamak.",
        "correctAnswer": 2,
        "explanation": "Fototerapi, cilde vuran özel dalga boyundaki ışıkla indirekt bilirubinin kimyasal yapısını (konfigürasyonunu) değiştirerek, glukuronidasyona gerek kalmadan suda çözünen fotoizomerlere dönüştürür ve idrarla attırır."
    },
    {
        "id": "v7_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Açlık durumunda lipoliz ile açığa çıkan serbest yağ asitlerinin kanda taşınmasını sağlayan plazma proteini hangisidir?",
        "options": [
            "Albumin",
            "Transferrin",
            "Şilomikron",
            "VLDL",
            "Fibrinojen"
        ],
        "answer": "Albumin",
        "correctAnswer": 0,
        "explanation": "Serbest (esterleşmemiş) yağ asitleri kanda albümin proteinine hidrofobik olarak bağlanarak taşınırlar. Şilomikron ve VLDL ise trigliseritleri taşır."
    },
    {
        "id": "v7_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdakilerden hangisi glikolizin hız kısıtlayıcı enzimidir ve yüksek ATP/Sitrat seviyelerinde allosterik olarak inhibe olur?",
        "options": [
            "Hekzokinaz",
            "Fosfofruktokinaz-1 (PFK-1)",
            "Pirüvat Kinaz",
            "Fosfogliserat Mutaz",
            "Glukoz-6-Fosfataz"
        ],
        "answer": "Fosfofruktokinaz-1 (PFK-1)",
        "correctAnswer": 1,
        "explanation": "Glikolizin ana denetim noktası ve hız kısıtlayıcı enzimi PFK-1'dir. Hücrede bol ATP ve Sitrat varsa durur; AMP veya Fruktoz 2,6-bisfosfat artarsa hızlanır."
    },

    // --- FARMAKOLOJİ (7 Soru) ---
    // Yasemin Özatik (2 İlaç Etkileşimi)
    {
        "id": "v7_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Antidepresan ilaçlardan SSRI grubundan kullanan bir hastaya şiddetli baş ağrısı için bir MAO inhibitörü veya yüksek dozda Sumatriptan verilirse ortaya çıkabilecek ölümcül ilaç etkileşim tablosu hangisidir?",
        "options": [
            "Serotonin Sendromu (Hipertermi, rijidite, ajitasyon)",
            "Nöroleptik Malign Sendrom",
            "Tiramin reaksiyonu (Peynir reaksiyonu)",
            "Aşırı sedasyon ve koma",
            "Tardif diskinezi"
        ],
        "answer": "Serotonin Sendromu (Hipertermi, rijidite, ajitasyon)",
        "correctAnswer": 0,
        "explanation": "Sinaptik aralıkta serotonin miktarını aşırı artıran ilaçların (SSRI + MAOi + Triptan + Linezolid) bir arada kullanılması, yüksek ateş, kas kasılmaları ve bilinç bulanıklığıyla giden ölümcül Serotonin Sendromuna yol açar."
    },
    {
        "id": "v7_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Kardiyak aritmilerde veya tansiyonda kullanılan Kalsiyum Kanal Blokerleri ile Beta Blokerlerin birlikte reçete edilmesinin tehlikesi nedir?",
        "options": [
            "Kan basıncının aşırı yükselerek (Hipertansif kriz) beyin kanaması yapması.",
            "Kalp atım hızının çok fazla düşmesi (Şiddetli Bradikardi) ve AV tam blok (kalp durması) gelişmesi.",
            "Karaciğer yetmezliği yapması.",
            "Göz tansiyonunu (Glokom) artırması.",
            "Akciğer ödemi yapması."
        ],
        "answer": "Kalp atım hızının çok fazla düşmesi (Şiddetli Bradikardi) ve AV tam blok (kalp durması) gelişmesi.",
        "correctAnswer": 1,
        "explanation": "Her iki ilaç grubu da kalbin hızını yavaşlatır (negatif kronotrop) ve AV düğümden iletimi yavaşlatır (negatif dromotrop). Birlikte kullanımları kalbi tamamen durdurabilir (Asistoli veya Tam Blok)."
    },
    // Diğer Farma (5 Soru)
    {
        "id": "v7_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Diüretiklerden Henle kulpunun çıkan kalın kolundaki 'Na-K-2Cl' ko-transporterini bloke ederek en güçlü su atımını sağlayan 'Loop Diüretik' ilacı aşağıdakilerden hangisidir?",
        "options": [
            "Hidroklorotiyazid",
            "Furosemid",
            "Spironolakton",
            "Asetazolamid",
            "Mannitol"
        ],
        "answer": "Furosemid",
        "correctAnswer": 1,
        "explanation": "Furosemid (Kıvrım / Loop diüretiği) böbreğin idrarı konsantre etme mekanizmasını (Henle kulpunda) bozar ve en güçlü diürez yapan ilaçtır (Acil akciğer ödeminde hayat kurtarır)."
    },
    {
        "id": "v7_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Bakterilerde protein sentezini engelleyen antibiyotiklerden, ribozomun 30S alt birimine geri dönüşümsüz bağlanarak mRNA okuma hatasına neden olan ve nefrotoksisite/ototoksisite yan etkisi belirgin olan grup hangisidir?",
        "options": [
            "Aminoglikozitler (Örn. Gentamisin)",
            "Makrolidler (Örn. Eritromisin)",
            "Penisilinler (Örn. Amoksisilin)",
            "Tetrasiklinler (Örn. Doksisiklin)",
            "Kinolonlar (Örn. Levofloksasin)"
        ],
        "answer": "Aminoglikozitler (Örn. Gentamisin)",
        "correctAnswer": 0,
        "explanation": "Aminoglikozitler Gram negatif bakterilere etkili, 30S ribozomuna bağlanan bakterisidal ilaçlardır. Böbreklere (nefrotoksisite) ve iç kulağa (ototoksisite) zararları en meşhur yan etkileridir."
    },
    {
        "id": "v7_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Ağrı tedavisinde kullanılan NSAİİ ilaçların ortak etki mekanizması hangisidir?",
        "options": [
            "Fosfolipaz A2 enzimini inhibe ederek araşidonik asit salınımını durdurmak",
            "Siklooksijenaz (COX) enzimini inhibe ederek Prostaglandin sentezini durdurmak",
            "Lökotrien reseptörlerini bloke etmek",
            "Beyindeki opioid (Mü) reseptörlerini uyarmak",
            "Nerve Growth Factor (NGF) üretimini artırmak"
        ],
        "answer": "Siklooksijenaz (COX) enzimini inhibe ederek Prostaglandin sentezini durdurmak",
        "correctAnswer": 1,
        "explanation": "NSAİİ'ler (Ağrı kesici, ateş düşürücü, romatizma ilaçları) araşidonik asitten ağrı/ateş/inflamasyon medyatörü olan prostaglandinleri üreten COX (Siklooksijenaz) enzimini bloke ederler."
    },
    {
        "id": "v7_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Organofosfat zehirlenmesinde, hasta aşırı tükürük, gözyaşı, ishal, kas seğirmesi ve nefes darlığı yaşar. Bu zehirlenmede hayat kurtarıcı olarak kullanılan parasempatolitik ilaç aşağıdakilerden hangisidir?",
        "options": [
            "Atropin",
            "Naloksan",
            "Neostigmin",
            "Propranolol",
            "Flumazenil"
        ],
        "answer": "Atropin",
        "correctAnswer": 0,
        "explanation": "Organofosfatlar asetilkolinesteraz enzimini kalıcı bloke eder, vücutta asetilkolin taşar. Bu muskarinik aşırı uyarıyı antagonize eden (panzehir) ilaç Atropin'dir (ve enzimi kurtarmak için Pralidoksim verilir)."
    },
    {
        "id": "v7_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Diyabet tedavisinde insülin direncini kıran, karaciğerde glukoneogenezi baskılayan, ancak yan etki olarak kilo aldırmayan Tip 2 diyabetin ilk basamak ilacı hangisidir?",
        "options": [
            "Glibenklamid (Sülfonilüre)",
            "Metformin (Biguanid)",
            "Pioglitazon",
            "Akarboz",
            "Eksenatid"
        ],
        "answer": "Metformin (Biguanid)",
        "correctAnswer": 1,
        "explanation": "Metformin, Tip 2 diyabette en çok kullanılan, kilo aldırmayan (aksine iştah kesen) ve hipoglisemi yapma riski çok düşük olan en popüler oral antidiyabetiktir. Temel etkisi karaciğerin şekeri kana vermesini durdurmasıdır."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    // Senem Hoca (4 Soru: Faringeal Arkus, Kalp tabakaları, Tiroid, Adenohipofiz)
    {
        "id": "v7_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kıkırdak ve kas gelişimini sağlayan faringeal arkuslardan, hem Tirokortik kıkırdağı hem de Krikoid kıkırdağı oluşturan, ses tellerini yapan ve N. Vagus'un inerve ettiği arkus çifti hangisidir?",
        "options": [
            "1. ve 2. Faringeal Arkuslar",
            "2. ve 3. Faringeal Arkuslar",
            "4. ve 6. Faringeal Arkuslar",
            "Sadece 1. Arkus",
            "Sadece 3. Arkus"
        ],
        "answer": "4. ve 6. Faringeal Arkuslar",
        "correctAnswer": 2,
        "explanation": "Larynx'in kıkırdak ve kas yapılarının tümü 4. ve 6. faringeal arkuslardan gelişir. Her ikisinin de innervasyonu N. vagus (X) tarafından sağlanır (4. arkus N. laryngeus superior, 6. arkus N. laryngeus recurrens)."
    },
    {
        "id": "v7_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kalbin duvar katmanlarından olan Endokardiyum'un subendokardiyal tabakasında bulunan, normal kalp kası hücrelerinden daha büyük, daha soluk boyanan ve kalbin ileti sisteminde ventriküllere uyarının hızla dağılmasını sağlayan özelleşmiş hücreler hangileridir?",
        "options": [
            "Kardiyomiyositler",
            "Purkinje lifleri",
            "Fibroblastlar",
            "Mezotel hücreleri",
            "Düz kas hücreleri"
        ],
        "answer": "Purkinje lifleri",
        "correctAnswer": 1,
        "explanation": "Purkinje lifleri, kasılmadan ziyade elektriksel iletim için özelleşmiş dev kalp kası (miyokard) hücreleridir ve içteki endokardın hemen altında (subendokardiyal) yerleşmişlerdir."
    },
    {
        "id": "v7_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Tiroid bezinde, foliküllerin arasında yerleşen ve embriyolojik kökenini nöral krista hücrelerinden alan hücrelerin salgıladığı hormon nedir?",
        "options": [
            "Parathormon (PTH)",
            "Tiroksin (T4)",
            "Kalsitonin",
            "Tiroglobulin",
            "Tirotropin (TSH)"
        ],
        "answer": "Kalsitonin",
        "correctAnswer": 2,
        "explanation": "Tiroiddeki C hücreleri nöral krest kökenlidir (faringeal cep sistemiyle gelirler) ve kalsiyumu düşüren Kalsitonin hormonunu sentezlerler."
    },
    {
        "id": "v7_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Hipofiz bezi embriyolojik olarak iki farklı kökenden gelişir. Adenohipofiz Rathke kesesinden gelişirken, Nörohipofiz nereden gelişir?",
        "options": [
            "Faringeal kavis mezodermi",
            "Nöroektodermden (Diensefalonun aşağı uzantısı olan infundibulumdan)",
            "Endoderm (Ön bağırsak)",
            "Nöral krista",
            "Notokord"
        ],
        "answer": "Nöroektodermden (Diensefalonun aşağı uzantısı olan infundibulumdan)",
        "correctAnswer": 1,
        "explanation": "Nörohipofiz, doğrudan beynin hipotalamus kısmından (diensefalon) aşağıya sarkan nöral dokudur (nöroektoderm). Adenohipofiz ise ağız tavanından yukarı çıkan Rathke kesesidir."
    },
    // Diğer Histo (9 Soru)
    {
        "id": "v7_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojide döllenme tuba uterinanın ampulla bölgesinde gerçekleştikten sonra zigot bölünerek ilerler. Yaklaşık 5-6. günde uterusa ulaştığında içi sıvı dolu olan ve etrafı trofoblast hücreleriyle sarılı olan yapıya ne ad verilir?",
        "options": [
            "Morula",
            "Blastokist",
            "Gastrula",
            "Primer oosit",
            "Notokord"
        ],
        "answer": "Blastokist",
        "correctAnswer": 1,
        "explanation": "Döllenmeden sonra hücre topu morula adını alır. İçinde sıvı dolu bir boşluk oluştuğunda Blastokist adını alır ve endometriyuma gömülen form budur."
    },
    {
        "id": "v7_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Gastrulasyon döneminde embriyo üç germ yaprağına ayrılır. İskelet kasları, kemikler, kıkırdak ve dolaşım sistemi hangi yapraktan gelişir?",
        "options": [
            "Ektoderm",
            "Mezoderm",
            "Endoderm",
            "Nöral tüp",
            "Trofoblast"
        ],
        "answer": "Mezoderm",
        "correctAnswer": 1,
        "explanation": "Mezoderm (orta yaprak); tüm bağ dokusu, kıkırdak, kemik, kaslar, kan hücreleri, böbrekler ve kalp/damar sistemini oluşturur."
    },
    {
        "id": "v7_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "İnce bağırsağın histolojik tabakalarından biri olan Submukoza tabakasında yer alan, bazik mukus salgılayarak bağırsak duvarını mideden gelen asitten koruyan Brunner bezleri bağırsakların HANGİ BÖLÜMÜNDE bulunur?",
        "options": [
            "Duodenum",
            "Jejunum",
            "Ileum",
            "Caecum",
            "Colon"
        ],
        "answer": "Duodenum",
        "correctAnswer": 0,
        "explanation": "Brunner bezleri SADECE duodenumun submukozasında yer alır. Mideden gelen asidik kimusu nötralize etmek için bikarbonatlı mukus salgılarlar."
    },
    {
        "id": "v7_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Hücre zarı bağlantı komplekslerinden hangisi, hücreleri birbirine sıkıca dikerek epitel dokusunun apikal yüzeyinden madde sızmasını tamamen engeller ve kan-beyin gibi doku bariyerlerini oluşturur?",
        "options": [
            "Zonula adherens (Kuşak dezmozom)",
            "Macula adherens (Dezmozom)",
            "Zonula occludens (Sıkı bağlantı - Tight junction)",
            "Gap junction (Oluklu bağlantı)",
            "Hemidezmozom"
        ],
        "answer": "Zonula occludens (Sıkı bağlantı - Tight junction)",
        "correctAnswer": 2,
        "explanation": "Tight junction (Sıkı bağlantı), komşu hücrelerin zarlarını kaynaştırarak aralarından moleküllerin kaçmasını önleyen 'geçirimsizlik' mührüdür."
    },
    {
        "id": "v7_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Salgı bezlerinin tiplerinden olan Apokrin Salgılama mekanizması nasıldır?",
        "options": [
            "Salgı, hücre zarından ekzositozla atılır, hücre hiç zarar görmez. (Örn: Tükürük bezi)",
            "Salgı, hücrenin apikal (tepe) kısmında birikir ve hücrenin tepe kısmı koparak salgıyla atılır. (Örn: Süt bezi lipid salgısı)",
            "Hücrenin tamamı parçalanır ve ölen hücre salgının kendisi olur. (Örn: Yağ bezi - Sebase)",
            "Salgı kana verilir.",
            "Salgı kanallar aracılığıyla emilir."
        ],
        "answer": "Salgı, hücrenin apikal (tepe) kısmında birikir ve hücrenin tepe kısmı koparak salgıyla atılır. (Örn: Süt bezi lipid salgısı)",
        "correctAnswer": 1,
        "explanation": "Merokrin salgılamada hücre bütündür. Apokrin salgılamada apikal zarla birlikte hücreden bir parça kopar. Holokrin salgılamada (Sebase yağ bezleri) hücre tamamen parçalanıp ölür."
    },
    {
        "id": "v7_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kanda en fazla bulunan antikor sınıfı olup, plasentadan geçerek anne karnındaki fetüse bağışıklık sağlayan TEK antikor tipi hangisidir?",
        "options": [
            "IgM",
            "IgA",
            "IgG",
            "IgE",
            "IgD"
        ],
        "answer": "IgG",
        "correctAnswer": 2,
        "explanation": "IgG, kan serumunda en bol bulunan antikordur ve küçük molekül yapısı (ve Fc reseptörleri) sayesinde plasentayı geçebilen tek Ig'dir."
    },
    {
        "id": "v7_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Aşağıdaki hücrelerden hangisi bağ dokusunun temel hücresidir ve yara iyileşmesinde aşırı çoğalarak kollajen lif sentezini gerçekleştirir?",
        "options": [
            "Makrofaj",
            "Mast hücresi",
            "Plazma hücresi",
            "Fibroblast",
            "Adiposit"
        ],
        "answer": "Fibroblast",
        "correctAnswer": 3,
        "explanation": "Fibroblastlar bağ dokusunun yapı ustalarıdır; yara iyileşmesinde kollajen, elastin ve temel madde (glikozaminoglikanlar) sentezlerler."
    },
    {
        "id": "v7_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Erkek üreme sisteminde spermatidlerin kuyruklu, hareketli ve olgun spermatozoalara dönüşme evresine ne ad verilir?",
        "options": [
            "Spermatositogenez",
            "Spermiyogenez",
            "Mayoz bölünme",
            "Mitoz bölünme",
            "Kapasitasyon"
        ],
        "answer": "Spermiyogenez",
        "correctAnswer": 1,
        "explanation": "Spermatidlerin bölünme olmadan morfolojik değişim (akrozom gelişimi, kuyruk uzaması, sitoplazma atılması) geçirerek spermatozoaya dönüşmesine Spermiyogenez denir."
    },
    {
        "id": "v7_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek tübüllerinden Henle kulpunun Histolojik olarak en ince duvarlı olan, suya geçirgenliği en yüksek ve bu nedenle tek katlı yassı epitel ile döşeli kısmı hangisidir?",
        "options": [
            "Proksimal kıvrımlı tübül",
            "Henle kulpunun inen ince kolu (Pars descendens)",
            "Henle kulpunun çıkan kalın kolu (Pars ascendens)",
            "Distal kıvrımlı tübül",
            "Toplayıcı kanal"
        ],
        "answer": "Henle kulpunun inen ince kolu (Pars descendens)",
        "correctAnswer": 1,
        "explanation": "Henle kulpunun inen kolu incedir, epitel basık yassıdır ve pasif olarak çok miktarda suyun medullaya geri emilmesini (aquaporin-1 ile) sağlar."
    },

    // --- MİKROBİYOLOJİ (14 Soru) ---
    // Serpil Hoca (3 Soru: Antimikrobiyal, Mycoplasma, Vibrio)
    {
        "id": "v7_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hücre zarı fonksiyonunu bozarak etki eden antimikrobiyaller incelendiğinde; ergosterol sentezini veya ergosterole bağlanarak mantar hücresinin zar geçirgenliğini artıran ve hücreyi öldüren 'Sistemik Antifungal' ilaç grubu aşağıdakilerden hangisidir?",
        "options": [
            "Polienler (Amfoterisin B) ve Azoller (Flukonazol)",
            "Makrolidler (Eritromisin)",
            "Beta Laktamlar (Penisilin)",
            "Glikopeptidler (Vankomisin)",
            "Kinolonlar"
        ],
        "answer": "Polienler (Amfoterisin B) ve Azoller (Flukonazol)",
        "correctAnswer": 0,
        "explanation": "Amfoterisin B mantar zarındaki ergosterole bağlanarak por açar. Azoller ise ergosterol sentezini durdurur. Bunlar mantar (antifungal) ilaçlarıdır."
    },
    {
        "id": "v7_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mycoplasma cinsinin özellikleri düşünüldüğünde, hastane kaynaklı zatürre tedavilerinde çok sık kullanılan ve peptidoglikan yıkımına dayanan Sefalosporinler neden Mycoplasma enfeksiyonunda etkisiz kalır?",
        "options": [
            "Mycoplasma'nın hücre duvarının bulunmaması",
            "Hücrenin etrafında yıkılmaz bir mumsu kapsül olması",
            "Mycoplasma'nın enzimlerinin Sefalosporini anında parçalaması",
            "Mycoplasma'nın hücre içine gizlenmesi",
            "Mycoplasma'nın ribozomlarının yapısının farklı olması"
        ],
        "answer": "Mycoplasma'nın hücre duvarının bulunmaması",
        "correctAnswer": 0,
        "explanation": "Mycoplasmaların (ve Ureaplasmaların) doğuştan hücre duvarı (peptidoglikan) YOKTUR. Bu yüzden hücre duvarını hedef alan tüm Beta-laktam (Penisilin, Sefalosporin) ilaçlarına doğal olarak dirençlidirler."
    },
    {
        "id": "v7_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Kolera toksini bağırsak epitel hücresinde hangi mekanizmayı kullanarak şiddetli ve bol sulu ishale neden olur?",
        "options": [
            "Hücre zarını delerek (Por oluşumu) kanamaya yol açar.",
            "Protein sentezini durdurarak epitel hücresini öldürür.",
            "G proteinine bağlı Adenilat Siklaz enzimini kalıcı olarak aktifleştirip hücre içi cAMP'yi aşırı artırarak klor ve suyun lümene fışkırmasına neden olur.",
            "Sodyum-Potasyum pompasını durdurur.",
            "RNA transkripsiyonunu engeller."
        ],
        "answer": "G proteinine bağlı Adenilat Siklaz enzimini kalıcı olarak aktifleştirip hücre içi cAMP'yi aşırı artırarak klor ve suyun lümene fışkırmasına neden olur.",
        "correctAnswer": 2,
        "explanation": "Kolera toksini hücre içindeki Gs proteinini ADP-ribozile ederek sürekli 'açık' kalmasını sağlar. Artan cAMP, klor (CFTR) kanallarını açar, klor bağırsak boşluğuna akar ve arkasından bolca sodyum ve su çekerek litrelerce ishal yapar."
    },
    // Diğer Mikro (11 Soru)
    {
        "id": "v7_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sifiliz hastalığının etkeni olan, spiroket yapısındaki helezonik bakteri aşağıdakilerden hangisidir?",
        "options": [
            "Neisseria gonorrhoeae",
            "Chlamydia trachomatis",
            "Treponema pallidum",
            "Haemophilus ducreyi",
            "Borrelia burgdorferi"
        ],
        "answer": "Treponema pallidum",
        "correctAnswer": 2,
        "explanation": "Sifiliz etkeni Treponema pallidum'dur. Gramla boyanmaz, karanlık alan mikroskobunda tirbuşon (helezon) şeklinde hareketli görülür."
    },
    {
        "id": "v7_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Tüberküloz hastalığında PPD testi pozitifliği, bağışıklık sisteminin hangi tür aşırı duyarlılık reaksiyonunu kullandığını gösterir?",
        "options": [
            "Tip I (Anafilaktik, IgE aracılı)",
            "Tip II (Sitotoksik, Antikor aracılı)",
            "Tip III (İmmün kompleks aracılı)",
            "Tip IV (Gecikmiş Tip, T-hücre aracılı)",
            "Tip V (Reseptör aracılı)"
        ],
        "answer": "Tip IV (Gecikmiş Tip, T-hücre aracılı)",
        "correctAnswer": 3,
        "explanation": "PPD (Mantoux) testi, Tip IV gecikmiş aşırı duyarlılık reaksiyonudur. Koldaki şişlik/kızarıklık 48-72 saatte maksimuma ulaşır, antikorlarla değil T lenfositleri (CD4+) ve makrofajlarla oluşur."
    },
    {
        "id": "v7_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Viral hepatitler içinde, dışkı-ağız yoluyla bulaşan ve KESİNLİKLE kronikleşmeyen, çocuklarda sadece akut sarılık yapan hepatit virüsü hangisidir?",
        "options": [
            "Hepatit B",
            "Hepatit C",
            "Hepatit D",
            "Hepatit A",
            "Tümü"
        ],
        "answer": "Hepatit A",
        "correctAnswer": 3,
        "explanation": "Hepatit A ve Hepatit E virüsleri bağırsak yoluyla (su ve gıdalarla) bulaşır ve kronik (kalıcı) taşıyıcılık bırakmazlar. HBV, HCV ve HDV kan ve cinsel yolla bulaşır, kronikleşir ve siroz/kanser yapabilir."
    },
    {
        "id": "v7_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Epstein-Barr Virüsünün etken olduğu, lise/üniversite çağındaki gençlerde tükürükle bulaşan, ateş, şiddetli boğaz ağrısı, yaygın lenf bezi büyümesi ve dalak büyüklüğüyle giden hastalık hangisidir?",
        "options": [
            "İnfeksiyöz Mononükleoz",
            "Suçiçeği (Varicella)",
            "5. Hastalık (Eritema İnfeksiyozum)",
            "Kızamık",
            "Zona"
        ],
        "answer": "İnfeksiyöz Mononükleoz",
        "correctAnswer": 0,
        "explanation": "EBV'nin neden olduğu İnfeksiyöz Mononükleoz'da (öpüşme hastalığı) B lenfositler enfekte olur, kan yaymasında 'atipik T lenfositleri' (Downey hücreleri) görülür ve lenf bezleri/dalak şişer."
    },
    {
        "id": "v7_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki bakterilerden hangisi 'Soğuk zenginleştirme' yapılarak dışkıdan izole edilen ve kanlı ishalin yanında sağ alt kadran ağrısıyla Apandisiti taklit eden enterik bakteridir?",
        "options": [
            "Shigella dysenteriae",
            "Yersinia enterocolitica",
            "Campylobacter jejuni",
            "Salmonella typhi",
            "Escherichia coli"
        ],
        "answer": "Yersinia enterocolitica",
        "correctAnswer": 1,
        "explanation": "Yersinia enterocolitica (Listeria gibi) buzdolabı ısısında (psikrofil) yaşar. Çoğunlukla domuz eti ve süt ürünlerinden bulaşarak mezenterik lenfadenit (yalancı apandisit) yapar."
    },
    {
        "id": "v7_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mantarlar ile ilgili genel özelliklerden hangisi YANLIŞTIR?",
        "options": [
            "Tamamı ökaryotik hücre yapısındadır.",
            "Hücre duvarlarında peptidoglikan bulunur ve penisiline duyarlıdırlar.",
            "Hücre zarlarında kolesterol yerine ergosterol vardır.",
            "Klorofilleri yoktur, fotosentez yapamazlar (Heterotrofturlar).",
            "Hem maya (tek hücreli) hem de küf (çok hücreli/hifli) formlarında bulunabilirler."
        ],
        "answer": "Hücre duvarlarında peptidoglikan bulunur ve penisiline duyarlıdırlar.",
        "correctAnswer": 1,
        "explanation": "Mantarların hücre duvarında peptidoglikan YOKTUR. Kitin, glukan ve mannan vardır. Bu yüzden antibakteriyel ilaçlar (penisilin vb.) mantarlara etki etmez."
    },
    {
        "id": "v7_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sıtma hastalığının kesin konağı ve vektörü olan böcek aşağıdakilerden hangisidir?",
        "options": [
            "Anopheles (Anofel) cinsi dişi sivrisinek",
            "Aedes cinsi sivrisinek",
            "Culex cinsi sivrisinek",
            "Çeçe Sineği (Glossina)",
            "Tatarcık (Phlebotomus) sineği"
        ],
        "answer": "Anopheles (Anofel) cinsi dişi sivrisinek",
        "correctAnswer": 0,
        "explanation": "Sıtma paraziti (Plasmodium), dişi anofel sivrisineğinde seksüel olarak çoğalır (kesin konak sivrisinek, ara konak insandır). Çeçe sineği Afrika uyku hastalığını, Tatarcık leishmaniasisi, Aedes ise sarı humma/dang ateşini taşır."
    },
    {
        "id": "v7_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Laboratuvarda kültür plağında, Staphylococcus aureus'un kanlı agarda yaptığı hemoliz zonunun çevresinde, başka bir bakterinin S. aureus'a doğru daha gür üreyip kolonilerinin onun etrafında toplanması olayına ne ad verilir?",
        "options": [
            "Sinerjizm",
            "Aglütinasyon",
            "Satellitizm (Uydu fenomeni)",
            "Transformasyon",
            "Transdüksiyon"
        ],
        "answer": "Satellitizm (Uydu fenomeni)",
        "correctAnswer": 2,
        "explanation": "Haemophilus influenzae kandan sadece X faktörünü (Hemin) bulur, ancak V faktörünü (NAD) S.aureus kana salgılar. Bu yüzden H. influenzae sadece S. aureus'un dibinde uydu (satellit) gibi ürer."
    },
    {
        "id": "v7_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram pozitif, üzüm salkımı şeklinde kümelenen ve plazmayı pıhtılaştırma testi POZİTİF olan, apseler ve hastane enfeksiyonlarının en sık etkeni olan bakteri hangisidir?",
        "options": [
            "Staphylococcus epidermidis",
            "Staphylococcus saprophyticus",
            "Staphylococcus aureus",
            "Streptococcus pyogenes",
            "Streptococcus agalactiae"
        ],
        "answer": "Staphylococcus aureus",
        "correctAnswer": 2,
        "explanation": "S. aureus, stafilokoklar içinde Koagülaz pozitif (pıhtılaştırıcı) TEK önemli türdür ve son derece patojendir (MRSA direnci vs.). Diğer Stafilokoklar koagülaz negatiftir."
    },
    {
        "id": "v7_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki virüs gruplarından hangisi zarfsızdır ve bu sayede sabun, alkol ve asitlere karşı son derece DİRENÇLİDİR?",
        "options": [
            "Coronavirus",
            "Influenza (Grip) virüsü",
            "Poliovirus (Picornaviridae)",
            "Hepatit B virüsü",
            "HIV"
        ],
        "answer": "Poliovirus (Picornaviridae)",
        "correctAnswer": 2,
        "explanation": "Zarfsız (Çıplak) virüsler (Polio, Adeno, Rota, Hepatit A) mide asidini ve safra tuzlarını kolayca geçerler ve dışkı-ağız yoluyla bulaşırlar. Zarflı virüslerin (Grip, Korona, HIV) lipid kılıfı ise alkol veya sabunla hemen parçalanır."
    },
    {
        "id": "v7_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşırı duyarlılık reaksiyonlarından Tip I mekanizmasında, allerjen ile birleşerek Mast hücrelerinden Histamin patlamasına neden olan yüzey antikoru hangisidir?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE",
            "IgD"
        ],
        "answer": "IgE",
        "correctAnswer": 3,
        "explanation": "Tip 1 alerjilerde (Saman nezlesi, Arı sokması anafilaksisi), alerjene karşı aşırı üretilen IgE antikorları Mast hücrelerinin ve Bazofillerin zarına tutunur ve çapraz bağlandıklarında içlerindeki histamini ortama salarlar."
    },

    // --- DİĞERLERİ (10 Soru) ---
    // Biyofizik (4 Soru)
    {
        "id": "v7_biyofizik_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Hücre zarının dinlenim membran potansiyelinin hüce içinin eksi yüklü olmasından asıl sorumlu olan mekanizma / iyon sızıntısı aşağıdakilerden hangisidir?",
        "options": [
            "Sodyumun sızma kanallarından hücreye sızması",
            "Potasyumun (K+) sızma kanallarından sürekli hücre dışına sızması ve içeride eksi yüklü proteinleri bırakması",
            "Sodyum-Potasyum (Na/K) pompasının 3 sodyumu alıp 2 potasyumu atması",
            "Kalsiyum pompası aktivitesi",
            "Aksiyon potansiyelinin pik (zirve) yapması"
        ],
        "answer": "Potasyumun (K+) sızma kanallarından sürekli hücre dışına sızması ve içeride eksi yüklü proteinleri bırakması",
        "correctAnswer": 1,
        "explanation": "İstirahat halinde zardaki sızma kanallarının Potasyuma olan geçirgenliği, Sodyuma göre 100 kat daha fazladır. Artı yüklü K'lar dışarı kaçtıkça içeride dev (-) yüklü proteinler kalarak hücre içini eksi (-90mV) yapar."
    },
    {
        "id": "v7_biyofizik_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Radyoaktivite ile ilgili olarak, bir atomun çekirdeğinden aynı anda 2 proton ve 2 nötron fırlatması şeklindeki ışıma türü hangisidir?",
        "options": [
            "Alfa ışıması",
            "Beta (elektron) ışıması",
            "Gama ışıması",
            "Nötron saçılması",
            "X-Işını"
        ],
        "answer": "Alfa ışıması",
        "correctAnswer": 0,
        "explanation": "Alfa partikülü (ışıması) 2 proton ve 2 nötrondan (Helyum çekirdeği) oluşur. Çok ağırdır, kağıdı bile geçemez ama yutulduğunda dokuya çok hasar verir."
    },
    {
        "id": "v7_biyofizik_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Göz optiğinde uzağı net göremeyen hastalarda, göz küresi normalden UZUN olduğu için görüntü retinanın neresine odaklanır ve bu durumu düzeltmek için hangi tür mercek kullanılır?",
        "options": [
            "Retinanın arkasına odaklanır / İnce kenarlı (Dışbükey) mercek",
            "Retinanın arkasına odaklanır / Kalın kenarlı (İçbükey) mercek",
            "Retinanın önüne odaklanır / Kalın kenarlı (İçbükey / Konkav) mercek",
            "Retinanın önüne odaklanır / İnce kenarlı (Dışbükey / Konveks) mercek",
            "Tam retinaya odaklanır / Silindirik mercek"
        ],
        "answer": "Retinanın önüne odaklanır / Kalın kenarlı (İçbükey / Konkav) mercek",
        "correctAnswer": 2,
        "explanation": "Miyopide göz küresi uzundur veya lens fazla kırıcıdır, görüntü retinanın ÖNÜNDE kalır. Işınları saçarak görüntüyü geriye (retinaya) atmak için Kalın Kenarlı (Konkav / Iraksak) mercek takılır. (Astigmatizmada silindirik mercek takılır)."
    },
    {
        "id": "v7_biyofizik_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Kan dolaşımı fiziğinde akışkanlar mekaniği kullanıldığında, daralmış bir kalp kapağından geçen kanın HIZI çok fazla artar, ancak akım sırasında oluşturduğu YAN BASINÇ kanalda düşer. Bu durum kanın girdap yapmasına ve 'üfürüm' duyulmasına sebep olur. Bu olguyu açıklayan fiziksel yasa hangisidir?",
        "options": [
            "Ohm Yasası",
            "Bernoulli İlkesi",
            "Poiseuille Yasası",
            "Hooke Yasası",
            "Boyle-Mariotte Yasası"
        ],
        "answer": "Bernoulli İlkesi",
        "correctAnswer": 1,
        "explanation": "Bernoulli ilkesine göre, bir boruda akışkanın hızı artarsa çeperlere yaptığı basınç (potansiyel enerji) düşer. Darlık bölgesinde hız fırlar, basınç düşer."
    },
    // Patoloji (2 Soru)
    {
        "id": "v7_patoloji_1",
        "subject": "Tıbbi Patoloji",
        "question": "Kanser hücresinin özellikleri incelendiğinde, normal hücrenin aksine sınırsız bölünme yeteneğine sahip olmasını sağlayan ve kromozom uçlarındaki telomerlerin kısalmasını önleyen enzim aşağıdakilerden hangisidir?",
        "options": [
            "Kaspaz-3",
            "DNA Polimeraz",
            "Telomeraz",
            "Endonükleaz",
            "p53 geni"
        ],
        "answer": "Telomeraz",
        "correctAnswer": 2,
        "explanation": "Telomeraz, kromozomların ucu olan telomerleri sentezleyerek hücrenin yaşlanmasını önler. Çoğu insan hücresinde bu enzim kapalıdır ancak kanser hücrelerinde aktiftir."
    },
    {
        "id": "v7_patoloji_2",
        "subject": "Tıbbi Patoloji",
        "question": "Doku ölümü formlarından 'Apoptoz' ile 'Nekroz' arasındaki temel patolojik FARK aşağıdakilerden hangisidir?",
        "options": [
            "Nekroz hücresel büzülmeyle giderken, apoptozda hücre şişip patlar.",
            "Apoptozda hücre içeriği dışarı dökülür ve şiddetli iltihap (inflamasyon) başlar.",
            "Apoptoz enerji (ATP) gerektiren aktif bir süreçken ve inflamasyona yol açmazken; Nekroz enerji eksikliğinden olur, hücre patlar ve dokuda inflamasyon/yangı görülür.",
            "Apoptoz sadece beyinde görülür.",
            "Nekroz embriyolojik gelişimde parmak aralarının açılmasını sağlar."
        ],
        "answer": "Apoptoz enerji (ATP) gerektiren aktif bir süreçken ve inflamasyona yol açmazken; Nekroz enerji eksikliğinden olur, hücre patlar ve dokuda inflamasyon/yangı görülür.",
        "correctAnswer": 2,
        "explanation": "Apoptoz (intihar); sessiz, temiz ve ATP kullanan kontrollü bir işlemdir (etraf iltihaplanmaz). Nekroz (cinayet); travma, enfarktüs gibi hasarlarla hücrenin şişip patlamasıdır ve çevre doku iltihaplanır."
    },
    // İletişim (2 Soru)
    {
        "id": "v7_iletisim_1",
        "subject": "İletişim Becerileri",
        "question": "Bir hastanın tanısını veya tedavinin gidişatını duyduğunda yaşadığı yoğun duygusal stres karşısında, hekimin hastanın duygularını algılaması ve 'Şu an çok kaygılı hissettiğinizi görebiliyorum, bu çok doğal' şeklinde yaklaşması iletişimin hangi bileşenidir?",
        "options": [
            "Sempati duymak",
            "Empati kurmak",
            "Yönlendirmek",
            "Özetlemek",
            "Paternalizm"
        ],
        "answer": "Empati kurmak",
        "correctAnswer": 1,
        "explanation": "Empati; kişinin dünyasını, duygularını sanki onun içindeymiş gibi algılayıp bu algıyı ona iletmektir ('Objektif olarak anlıyorum'). Sempati ise onunla beraber aynı acıyı çekmek, ağlamaktır ('Ben de çok üzüldüm, kahroldum')."
    },
    {
        "id": "v7_iletisim_2",
        "subject": "İletişim Becerileri",
        "question": "Ölümcül bir hastalık tanısı konulan veya kötü bir tıbbi haber verilecek olan hastaya, hangi yaklaşımın sergilenmesi TIBBİ İLETİŞİM AÇISINDAN YANLIŞTIR?",
        "options": [
            "Haberi verirken hastanın ne kadar bilgi öğrenmek istediğini baştan sormak.",
            "Oturarak, sessiz ve özel bir odada konuşmayı gerçekleştirmek.",
            "Hastanın umutsuzluğa kapılmaması için hastalığın adını saklamak ve 'tamamen iyileşeceksin' diyerek sahte (yalan) umut vermek.",
            "Sessizliğe zaman tanımak ve hastanın duygusal tepki vermesine izin vermek.",
            "Tıbbi jargondan uzak, anlaşılır kelimeler kullanmak."
        ],
        "answer": "Hastanın umutsuzluğa kapılmaması için hastalığın adını saklamak ve 'tamamen iyileşeceksin' diyerek sahte (yalan) umut vermek.",
        "correctAnswer": 2,
        "explanation": "Hekim dürüst olmalıdır. Sahte umut (False hope) vermek, hastanın otonomisine ve geleceği planlama hakkına yapılan bir saygısızlıktır ve güven ilişkisini yıkar."
    },
    // Tarih/Etik (2 Soru)
    {
        "id": "v7_tarihetik_1",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Tarihte hastalıklara kötü ruhların değil doğa olaylarının neden olduğunu savunan, hastaya zarar vermemeyi ilke edinen, tıbbı büyü ve felsefeden ayıran ve 'Tıbbın Babası' kabul edilen antik Yunan hekimi kimdir?",
        "options": [
            "Galenos",
            "Hipokrat (Hippocrates)",
            "Aristoteles",
            "Lokman Hekim",
            "Andreas Vesalius"
        ],
        "answer": "Hipokrat (Hippocrates)",
        "correctAnswer": 1,
        "explanation": "Hipokrat, İstanköy (Kos) adasında yaşamış ve tıbbı rasyonel/bilimsel bir temele oturtarak tanrıların gazabından arındırmıştır."
    },
    {
        "id": "v7_tarihetik_2",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Hekimin, hastasına ilişkin öğrendiği sırları, yasal bir zorunluluk veya başkalarının hayatına yönelik açık bir tehdit olmadıkça kimseyle paylaşmaması yükümlülüğüne ne ad verilir?",
        "options": [
            "Sadakat ilkesi",
            "Aydınlatılmış onam",
            "Tıbbi Gizlilik (Mahremiyet ve Sır Saklama)",
            "Özerkliğe saygı",
            "Dürüstlük ilkesi"
        ],
        "answer": "Tıbbi Gizlilik (Mahremiyet ve Sır Saklama)",
        "correctAnswer": 2,
        "explanation": "Tıbbi gizlilik kuralı hastanın güveninin temelidir. Sır sadece yasal ve toplumsal yüksek yarar gerektiren çok spesifik durumlarda bozulabilir."
    },
    // BAK (1 Soru)
    {
        "id": "v7_bak_1",
        "subject": "Bilimsel Araştırma",
        "question": "Bilimsel araştırmalarda 'Körleme' yönteminin temel amacı nedir?",
        "options": [
            "İstatiksel anlamlılığı artırmak",
            "Araştırmacının ve hastanın hangi ilacı/plaseboyu aldığını bilmesini engelleyerek, sonuçlar üzerindeki psikolojik veya yönlendirici 'Taraf tutma (Bias)' hatalarını önlemek",
            "Daha az hasta sayısıyla çalışabilmek",
            "Klinik çalışmanın maliyetini düşürmek",
            "Etik kurullardan daha hızlı onay almak"
        ],
        "answer": "Araştırmacının ve hastanın hangi ilacı/plaseboyu aldığını bilmesini engelleyerek, sonuçlar üzerindeki psikolojik veya yönlendirici 'Taraf tutma (Bias)' hatalarını önlemek",
        "correctAnswer": 1,
        "explanation": "Çift kör (Double-blind) çalışmalarında, ne ilacı veren hekim ne de hasta gerçek ilaç mı yoksa boş hap (plasebo) mı aldığını bilir. Bu sayede plasebo etkisi ve ölçüm hatası (Bias) minimuma iner."
    },
    // Toplum Sağlığı (1 Soru)
    {
        "id": "v7_toplum_1",
        "subject": "Toplum Sağlığı",
        "question": "Halk sağlığında koruyucu sağlık hizmetleri seviyelere ayrılır. Hastalık ortaya ÇIKMADAN ÖNCE, hastalığı engellemek için yapılan aşılama, el yıkama, temiz su sağlama gibi temel uygulamalar hangi düzey korumadır?",
        "options": [
            "Birincil (Primer) Koruma",
            "İkincil (Sekonder) Koruma",
            "Üçüncül (Tersiyer) Koruma",
            "Rehabilitasyon",
            "Palyatif Bakım"
        ],
        "answer": "Birincil (Primer) Koruma",
        "correctAnswer": 0,
        "explanation": "Primer (Birincil) koruma hastalığı engellemek içindir (Aşı). Sekonder koruma, hastalık belirti vermeden önce erken tanı (Kanser Taramaları) içindir. Tersiyer koruma ise sakatlıkları/komplikasyonları önlemek (Rehabilitasyon) içindir."
    }
];

window.examsData['tam_kapsamli_final_v7'].questions.push(...v7Part2);
