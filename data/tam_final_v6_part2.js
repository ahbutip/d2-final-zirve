window.examsData = window.examsData || {};

window.examsData['tam_kapsamli_final_v6'] = window.examsData['tam_kapsamli_final_v6'] || {
    "title": "Zirve Deneme Sınavı 3 (Ustalık Seviyesi)",
    "description": "Özel istihbarat tüyolarının 3. versiyonudur. Ömer Hoca'nın tuzaklı vakaları, Ali Koray'ın detaylı GİS soruları ve Senem Hoca'nın tüyolarının 3. varyasyonu eklenmiştir.",
    "questions": []
};

const v6Part2 = [
    // --- BİYOKİMYA (11 Soru) ---
    // Mustafa Bozkurt (4 Soru: Kan prot, KH, Pankreas, Adrenal)
    {
        "id": "v6_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Multipl Miyelom tanısı alan bir hastanın kan serum elektroforezinde, normalde geniş ve yayvan olması gereken bölgesinde dar tabanlı, çok sivri ve yüksek bir 'Monoklonal Pik (M piki)' saptanmıştır. Bu sivri pik elektroforezin hangi bandında (fraksiyonunda) oluşur?",
        "options": [
            "Albumin bandında",
            "Alfa-1 globulin bandında",
            "Alfa-2 globulin bandında",
            "Beta globulin bandında",
            "Gama globulin bandında"
        ],
        "answer": "Gama globulin bandında",
        "correctAnswer": 4,
        "explanation": "Multipl Miyelom, plazma hücrelerinin kontrolsüz çoğalarak tek tip (monoklonal) immünoglobulin (antikor) ürettiği bir kanserdir. Antikorlar Gama bölgesinde yürüdükleri için bu bölgede sivri bir M piki gözlenir."
    },
    {
        "id": "v6_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Karbonhidrat metabolizmasında Pentoz Fosfat Yolu'nun (Hegzoz Monofosfat Şantı) hücre için sağladığı en önemli iki temel ürün aşağıdakilerden hangisidir?",
        "options": [
            "ATP ve Pirüvat",
            "NADH ve FADH2",
            "NADPH ve Riboz-5-Fosfat",
            "Glikojen ve Laktat",
            "Asetil-CoA ve Oksaloasetat"
        ],
        "answer": "NADPH ve Riboz-5-Fosfat",
        "correctAnswer": 2,
        "explanation": "Pentoz fosfat yolunun temel amacı enerji (ATP) üretmek DEĞİLDİR. Amacı yağ asidi sentezi ve antioksidan savunma için NADPH ile nükleotid/DNA sentezi için Riboz-5-fosfat üretmektir."
    },
    {
        "id": "v6_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Pankreas hormonlarından İnsülin sentezlenirken, proinsülinden koparılarak insülinle birlikte eşit (equimolar) miktarda kana salgılanan ve diyabet hastalarında pankreasın endojen insülin rezervini ölçmek için kullanılan peptit hangisidir?",
        "options": [
            "A Zinciri",
            "B Zinciri",
            "C-Peptit",
            "Amilin",
            "Glukagon"
        ],
        "answer": "C-Peptit",
        "correctAnswer": 2,
        "explanation": "Proinsülinin insüline (A ve B zincirleri) dönüşmesi için aradaki C-peptit koparılır. Dışarıdan enjeksiyonla alınan insülinde C-peptit bulunmadığı için, hastanın kendi ürettiği insülini ölçmede C-peptit kullanılır."
    },
    {
        "id": "v6_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Adrenal korteks (böbreküstü bezi kabuğu) enzim eksiklikleri (Konjenital Adrenal Hiperplazi) incelendiğinde, en sık görülen ve hem kortizol hem de aldosteron sentezinin durup tüm öncüllerin androjen (testosteron) üretimine kaydığı enzim eksikliği hangisidir?",
        "options": [
            "21-Alfa Hidroksilaz",
            "11-Beta Hidroksilaz",
            "17-Alfa Hidroksilaz",
            "Kolesterol desmolaz",
            "Aromataz"
        ],
        "answer": "21-Alfa Hidroksilaz",
        "correctAnswer": 0,
        "explanation": "21-alfa hidroksilaz eksikliği KAH'ın %90'ından fazlasını oluşturur. Kortizol ve aldosteron sentezlenemez (tuz kaybı), biriken prekürsörler androjenlere kayarak kız bebeklerde virilizasyona (erkekleşme) neden olur."
    },
    // Diğer Biyokimya (7 Soru)
    {
        "id": "v6_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Açlık durumunda beynin enerji ihtiyacını karşılamak için karaciğerde yağ asitlerinin yıkılmasıyla sentezlenen ancak karaciğerin kendi mitokondrisinde tiyoforaz enzimi olmadığı için KULLANAMADIĞI enerji kaynağı (Keton cismi) hangisidir?",
        "options": [
            "Asetoasetat",
            "Laktat",
            "Glukoz",
            "Palmitat",
            "Pirüvat"
        ],
        "answer": "Asetoasetat",
        "correctAnswer": 0,
        "explanation": "Karaciğer asetoasetat ve beta-hidroksibutirat (keton cisimleri) sentezler ancak bunları yıkarak enerji elde edemez, kana verir. Çünkü keton yıkımı için gerekli tiyoforaz (süksinil CoA:asetoasetat CoA transferaz) enzimi karaciğerde yoktur."
    },
    {
        "id": "v6_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Krebs (TCA) döngüsünün enzimlerinden hangisi mitokondriyal matrikste SERBEST OLARAK BULUNMAZ ve aynı zamanda Elektron Transport Zinciri'nin (ETZ) Kompleks II'sini oluşturur?",
        "options": [
            "Sitrat Sentaz",
            "İzositrat Dehidrogenaz",
            "Süksinat Dehidrogenaz",
            "Malat Dehidrogenaz",
            "Alfa-Ketoglutarat Dehidrogenaz"
        ],
        "answer": "Süksinat Dehidrogenaz",
        "correctAnswer": 2,
        "explanation": "Süksinat dehidrogenaz enzimi, mitokondri iç zarına sıkıca bağlıdır (TCA döngüsünün zardaki tek enzimidir) ve ETZ'de elektronları FADH2'den koenzim Q'ya aktaran Kompleks II olarak görev yapar."
    },
    {
        "id": "v6_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Kanda demir taşınmasında görev alan ve bir molekülü 2 adet Fe+3 (ferrik) iyonu bağlayabilen spesifik plazma taşıyıcı proteini aşağıdakilerden hangisidir?",
        "options": [
            "Ferritin",
            "Transferrin",
            "Hemosiderin",
            "Seruloplazmin",
            "Haptoglobin"
        ],
        "answer": "Transferrin",
        "correctAnswer": 1,
        "explanation": "Demir kanda transferrin (Beta globulin fraksiyonu) aracılığıyla taşınır. Ferritin ise demirin hücre içindeki ana depo formudur."
    },
    {
        "id": "v6_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Kolesterol sentezinin hız kısıtlayıcı basamağı olan ve Statin grubu (Lipitor vb.) kolesterol düşürücü ilaçlar tarafından inhibe edilen enzim hangisidir?",
        "options": [
            "HMG-CoA Sentaz",
            "HMG-CoA Redüktaz",
            "Squalen Epoksidaz",
            "Asetil CoA Karboksilaz",
            "Tiyolaz"
        ],
        "answer": "HMG-CoA Redüktaz",
        "correctAnswer": 1,
        "explanation": "Kolesterol sentezinde hız kısıtlayıcı basamak HMG-CoA'nın HMG-CoA Redüktaz ile Mevalonat'a dönüştürülmesidir. Statinler bu enzimi kompetitif inhibe ederler."
    },
    {
        "id": "v6_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Glikojen yıkım (Glikojenoliz) hastalıklarından olan Von Gierke Hastalığı (Tip I Glikojen Depo Hastalığı), karaciğer ve böbrekte hangi enzimin doğuştan eksikliğine bağlı olarak şiddetli açlık hipoglisemisine neden olur?",
        "options": [
            "Asit maltaz (Lizozomal alfa 1-4 glukozidaz)",
            "Glikojen debranching (dal yıkıcı) enzim",
            "Kas glikojen fosforilazı",
            "Glukoz-6-Fosfataz",
            "Fosfofruktokinaz"
        ],
        "answer": "Glukoz-6-Fosfataz",
        "correctAnswer": 3,
        "explanation": "Tip 1 Glikojen Depo Hastalığı (Von Gierke), karaciğerdeki glukoz-6-fosfataz enziminin eksikliğiyle oluşur. Karaciğer glikojeni yıkar ama serbest glukoza dönüştürüp kana veremez (şiddetli hipoglisemi)."
    },
    {
        "id": "v6_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Üre döngüsünün ilk ve hız kısıtlayıcı enzimi olan ve Karbamoil Fosfat sentezleyen (Karbamoil Fosfat Sentetaz I - CPS-I) enzimin hücre mitokondrisinde mutlak allosterik aktivatörü (o olmadan çalışamayan maddesi) aşağıdakilerden hangisidir?",
        "options": [
            "N-Asetilglutamat (NAG)",
            "Sitrat",
            "Fruktoz 2,6-bisfosfat",
            "ATP",
            "Ornitin"
        ],
        "answer": "N-Asetilglutamat (NAG)",
        "correctAnswer": 0,
        "explanation": "CPS-I enziminin çalışabilmesi için N-Asetilglutamat'ın allosterik olarak bağlanması şarttır. Bu mekanizma yüksek proteinli diyet sonrası üre döngüsünü hızlandırır."
    },
    {
        "id": "v6_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Yağ asitlerinin beta-oksidasyonu (yıkımı) için sitoplazmadan mitokondri matriksine taşınmasını sağlayan mekik (taşıyıcı) sistem hangisidir?",
        "options": [
            "Gliserol-3-fosfat mekiği",
            "Malat-Aspartat mekiği",
            "Karnitin mekiği",
            "Sitrat mekiği",
            "Ornitin taşıyıcısı"
        ],
        "answer": "Karnitin mekiği",
        "correctAnswer": 2,
        "explanation": "Uzun zincirli yağ asitleri iç mitokondriyel membranı kendiliklerinden geçemezler; Karnitin-Palmitoil Transferaz (CPT) sistemi ile karnitine bağlanarak matrikse taşınırlar."
    },

    // --- FARMAKOLOJİ (7 Soru) ---
    // Yasemin Özatik (2 İlaç Etkileşimi)
    {
        "id": "v6_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Eritromisin (Makrolid) veya Ketokonazol gibi güçlü CYP3A4 enzim inhibitörü kullanan bir hastaya, antihiperlipidemik olarak Atorvastatin veya Simvastatin verilirse ortaya çıkabilecek en tehlikeli ilaç etkileşimi yan etkisi aşağıdakilerden hangisidir?",
        "options": [
            "Statinlerin yıkımı engelleneceği için kanda birikerek rabdomiyoliz (şiddetli kas yıkımı) ve miyopatiye neden olması.",
            "Statinlerin etkisi sıfıra ineceği için hastanın kalp krizi geçirmesi.",
            "Eritromisin'in etkisinin artarak ölümcül ishal yapması.",
            "İlaçların midede emilimlerinin birbirini bozması.",
            "Mide kanaması riskinin 10 kat artması."
        ],
        "answer": "Statinlerin yıkımı engelleneceği için kanda birikerek rabdomiyoliz (şiddetli kas yıkımı) ve miyopatiye neden olması.",
        "correctAnswer": 0,
        "explanation": "Statinlerin önemli bir yan etkisi miyopatidir (kas ağrısı/yıkımı). CYP3A4 inhibitörleri ile birlikte kullanılırlarsa statin yıkılamaz, plazma düzeyi fırlar ve rabdomiyoliz riski artar."
    },
    {
        "id": "v6_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Parkinson tedavisinde Levadopa ile birlikte kullanılan Karbidopa'nın (periferik dekarboksilaz inhibitörü) tedaviye eklenmesinin farmakolojik amacı nedir?",
        "options": [
            "Levadopa'nın beyinde daha fazla dopamin reseptörüne bağlanmasını sağlamak.",
            "Levadopa'nın kan-beyin bariyerini geçmeden önce periferde (çevresel dokularda) dopamine dönüşmesini engelleyerek hem beyne ulaşan miktarını artırmak hem de bulantı/çarpıntı gibi yan etkilerini azaltmak.",
            "Levadopa'nın idrarla atılımını hızlandırmak.",
            "Levadopa'nın mide asidinden parçalanmasını önlemek.",
            "Beyindeki dopamin yıkıcı MAO enzimlerini inhibe etmek."
        ],
        "answer": "Levadopa'nın kan-beyin bariyerini geçmeden önce periferde (çevresel dokularda) dopamine dönüşmesini engelleyerek hem beyne ulaşan miktarını artırmak hem de bulantı/çarpıntı gibi yan etkilerini azaltmak.",
        "correctAnswer": 1,
        "explanation": "Dopamin kan-beyin bariyerini geçemez, Levadopa geçer. Ancak Levadopa kanda gezerken DDC enzimi ile dopamine dönüşürse boşa gider (ve yan etki yapar). Karbidopa bu enzimi sadece periferde bloke eder (beyne giremez)."
    },
    // Diğer Farma (5 Soru)
    {
        "id": "v6_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Astım krizinde kurtarıcı (reliever) olarak kullanılan Salbutamol'ün etki mekanizması hangisidir?",
        "options": [
            "Muskarinik (M3) reseptör antagonisti",
            "Alfa-1 adrenerjik reseptör agonisti",
            "Beta-2 adrenerjik reseptör agonisti",
            "Beta-1 adrenerjik reseptör agonisti",
            "Lökotrien reseptör antagonisti"
        ],
        "answer": "Beta-2 adrenerjik reseptör agonisti",
        "correctAnswer": 2,
        "explanation": "Salbutamol, akciğer bronş düz kasındaki Beta-2 reseptörlerini uyararak güçlü ve hızlı bronkodilatasyon yapar (Astım krizinde ilk tercih)."
    },
    {
        "id": "v6_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Otonom Sinir Sistemi ilaçlarından olan Atropin (Muskarinik Antagonist) kullanıldığında aşağıdakilerden hangisinin görülmesi BEKLENMEZ?",
        "options": [
            "Göz bebeklerinde büyüme (Midriyazis) ve uyum felci (Siklopleji)",
            "Ağız kuruluğu",
            "Bağırsak hareketlerinde yavaşlama (Konstipasyon)",
            "Kalp hızında artış (Taşikardi)",
            "Bronşlarda daralma (Bronkokonstriksiyon) ve sekresyon artışı"
        ],
        "answer": "Bronşlarda daralma (Bronkokonstriksiyon) ve sekresyon artışı",
        "correctAnswer": 4,
        "explanation": "Atropin parasempatik (kolinerjik) sistemi bloke eder. Parasempatik sistem bronşları daraltır; dolayısıyla Atropin bronşları daraltmaz, GENİŞLETİR (ve sekresyonları kurutur)."
    },
    {
        "id": "v6_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Peptik ülser tedavisinde kullanılan Omeprazol veya Pantoprazol gibi ilaçların mide asidini sıfıra yakın düşürmelerinin asıl mekanizması nedir?",
        "options": [
            "H2 (Histamin) reseptörlerini bloke etmek.",
            "Muskarinik (M1) reseptörleri bloke etmek.",
            "Parietal hücrelerdeki H+/K+ ATPaz (Proton) pompasını geri dönüşümsüz inhibe etmek.",
            "Mide mukozasını bir bariyer gibi kaplamak.",
            "Gastrin hormonunun reseptörünü bloke etmek."
        ],
        "answer": "Parietal hücrelerdeki H+/K+ ATPaz (Proton) pompasını geri dönüşümsüz inhibe etmek.",
        "correctAnswer": 2,
        "explanation": "PPI (Proton Pompa İnhibitörleri) olan omeprazol vd., asit sekresyonunun son basamağı olan proton pompasını bloke eder. H2 blokerleri (Famotidin) ise daha zayıftır."
    },
    {
        "id": "v6_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Anksiyete ve uyku bozukluklarının tedavisinde kullanılan Benzodiazepinler (Örn. Diazepam), santral sinir sisteminde hangi reseptör üzerinden inhibitör etki gösterir?",
        "options": [
            "GABA-A reseptöründeki klor (Cl-) kanallarının açılma frekansını artırarak",
            "Glutamat (NMDA) reseptörlerini bloke ederek",
            "Dopamin (D2) reseptörlerini bloke ederek",
            "Serotonin (5-HT) geri alımını inhibe ederek",
            "Sodyum kanallarını bloke ederek"
        ],
        "answer": "GABA-A reseptöründeki klor (Cl-) kanallarının açılma frekansını artırarak",
        "correctAnswer": 0,
        "explanation": "Benzodiazepinler, GABA'nın reseptörüne daha iyi bağlanmasını sağlar ve Klor kanallarının daha SIK açılmasına (frekans artışı) neden olarak nöronu hiperpolarize (inhibe) eder."
    },
    {
        "id": "v6_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Hipertansiyon ve Anjina Pektoris tedavisinde kullanılan Beta Blokerlerden (Örn. Propranolol) birini kullanması, aşağıdaki eşlik eden hastalığı olan hastalardan hangisinde KESİNLİKLE kontrendikedir (yasaktır)?",
        "options": [
            "Taşikardisi (Çarpıntısı) olan hasta",
            "Migreni olan hasta",
            "Astım veya KOAH hastası",
            "Hipertiroidi hastası",
            "Esansiyel tremoru olan hasta"
        ],
        "answer": "Astım veya KOAH hastası",
        "correctAnswer": 2,
        "explanation": "Özellikle Propranolol gibi non-selektif beta blokerler (Beta-2'yi de bloke ederler), bronşlardaki genişletici Beta-2 etkisini ortadan kaldırıp ölümcül bronkospazma yol açabileceğinden Astım/KOAH'ta kontrendikedir."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    // Senem Hoca (4 Soru: Faringeal Arkus, Kalp tabakaları, Tiroid, Adenohipofiz)
    {
        "id": "v6_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kranial sinirlerden N. Glossopharyngeus'un uyardığı M. Stylopharyngeus kası ve dilin 1/3 arka kısmının embriyolojik kökenini oluşturan faringeal arkus hangisidir?",
        "options": [
            "1. Faringeal Arkus",
            "2. Faringeal Arkus",
            "3. Faringeal Arkus",
            "4. Faringeal Arkus",
            "6. Faringeal Arkus"
        ],
        "answer": "3. Faringeal Arkus",
        "correctAnswer": 2,
        "explanation": "3. Faringeal arkus mezenkiminden stylopharyngeus kası gelişir ve bu arkusun siniri N. glossopharyngeus'tur (IX. sinir)."
    },
    {
        "id": "v6_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kalbin dış yüzeyini çevreleyen Epikardiyum (Lamina visceralis pericardii serosi) tabakası histolojik olarak değerlendirildiğinde, en dış kısmını döşeyen epitel dokunun tipi aşağıdakilerden hangisidir?",
        "options": [
            "Tek katlı kübik epitel",
            "Tek katlı yassı epitel (Mezotelyum)",
            "Çok katlı yassı epitel",
            "Çok katlı prizmatik epitel",
            "Yalancı çok katlı silli epitel"
        ],
        "answer": "Tek katlı yassı epitel (Mezotelyum)",
        "correctAnswer": 1,
        "explanation": "Vücut boşluklarını (perikard, plevra, periton) döşeyen seröz zarlar, 'Mezotelyum' adı verilen tek katlı yassı epitel hücrelerinden oluşur. Epikardın dışı da mezotelyumdur."
    },
    {
        "id": "v6_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Tiroid bezinin mikroskobik yapısında, folikül lümenindeki inaktif kolloid maddenin (tiroglobulin) hücre içine alınarak aktif T3 ve T4 hormonlarına parçalandığı hücresel organel aşağıdakilerden hangisidir?",
        "options": [
            "Granülsüz Endoplazmik Retikulum",
            "Lizozom",
            "Golgi Aygıtı",
            "Mitokondri",
            "Peroksizom"
        ],
        "answer": "Lizozom",
        "correctAnswer": 1,
        "explanation": "Endositozla hücreye alınan kolloid vezikülleri, lizozomlarla birleşir. Lizozomal proteaz enzimleri tiroglobulini parçalayarak serbest T3 ve T4 moleküllerini açığa çıkarır."
    },
    {
        "id": "v6_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Hipofiz bezi (Glandula pituitaria) hücrelerinde sentezlenen hormonlardan hangisi Adenohipofiz'de ÜRETİLMEZ, sadece arka hipofizden (Nörohipofizden) kana verilir?",
        "options": [
            "Adrenokortikotropik Hormon (ACTH)",
            "Prolaktin",
            "Oksitosin",
            "Tiroid Uyarıcı Hormon (TSH)",
            "Büyüme Hormonu (GH)"
        ],
        "answer": "Oksitosin",
        "correctAnswer": 2,
        "explanation": "Oksitosin ve ADH hipotalamusta (Paraventriküler ve Supraoptik nükleuslar) üretilir ve aksonlar yoluyla taşınarak arka hipofizden (Nörohipofiz) kana salınır. Adenohipofizde ise (ACTH, TSH, GH, PRL, FSH, LH) üretilir."
    },
    // Diğer Histo (9 Soru)
    {
        "id": "v6_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Lenf düğümünün (Nodus lymphaticus) histolojik incelemesinde, B-lenfositlerinin yoğun olarak bulunduğu ve antijenle karşılaşınca çoğalarak 'Germinal Merkez' oluşturdukları foliküller hangi anatomik bölgesinde yer alır?",
        "options": [
            "Korteks (Dış Korteks)",
            "Parakorteks (Derin Korteks)",
            "Medulla",
            "Subkapsüler sinüs",
            "Medüller kordonlar"
        ],
        "answer": "Korteks (Dış Korteks)",
        "correctAnswer": 0,
        "explanation": "Lenf düğümünün dış korteksi B-lenfositlerin (lenfoid foliküller/germinal merkezler) bölgesidir. Parakorteks ise T-lenfosit bölgesidir (timusa bağımlı alan)."
    },
    {
        "id": "v6_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Dalak mikroskobisinde, dalağın bağışıklık fonksiyonunu yürüten ve etrafında bir 'PALS (Periarteriolar Lenfoid Kılıf)' bulunduran beyaz pulpanın (Pulpa alba) temel hücreleri hangileridir?",
        "options": [
            "Eritrositler",
            "T ve B Lenfositleri",
            "Kupffer hücreleri",
            "Hassal korpüskülleri",
            "Megakaryositler"
        ],
        "answer": "T ve B Lenfositleri",
        "correctAnswer": 1,
        "explanation": "Beyaz pulpa dalağın bağışıklık dokusudur ve lenfositlerden (Santral arteri saran PALS T-lenfosittir, yanındaki foliküller B-lenfosittir) oluşur. Kırmızı pulpa ise kanı süzer."
    },
    {
        "id": "v6_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Göz retinasının yapısında bulunan ve siyah-beyaz / loş ışıkta görmeden sorumlu olan 'Rod (Çomak)' reseptör hücreleri, retinanın hangi tabakasında yer alır?",
        "options": [
            "Gangliyon hücre tabakası",
            "İç nükleer tabaka",
            "Dış nükleer tabaka",
            "Fotoreseptör tabakası",
            "Pigment epitel tabakası"
        ],
        "answer": "Fotoreseptör tabakası",
        "correctAnswer": 3,
        "explanation": "Retinadaki Rod ve Koni hücrelerinin dış segmentleri fotoreseptör tabakasında, çekirdekleri ise Dış Nükleer Tabakada yer alır. Işığı algılayan kısımlar fotoreseptör katmanındadır."
    },
    {
        "id": "v6_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek nefronlarında makula densa, jukstaglomerüler (JG) hücreler ve ekstraglomerüler mezangiyal hücrelerin oluşturduğu Jukstaglomerüler Aparat (JGA) hangi damarın duvarı ile distal tübül arasında yer alır?",
        "options": [
            "Efferent arteriyol",
            "Afferent arteriyol",
            "Peritübüler kapillerler",
            "Vasa recta",
            "Vena arcuata"
        ],
        "answer": "Afferent arteriyol",
        "correctAnswer": 1,
        "explanation": "JG aparat, distal tübülün kendi nefronunun yumağına (Glomerül) giren afferent arteriyole dokunduğu noktada yer alır (JG hücreler afferent damar duvarındaki değişmiş düz kaslardır)."
    },
    {
        "id": "v6_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kemik dokusunda, kemik matriksinin (osteoid) kalsifiye olmamış organik kısmını (özellikle Tip I kollajen) sentezleyen hücreler hangileridir?",
        "options": [
            "Osteoklastlar",
            "Osteositler",
            "Osteoblastlar",
            "Osteoprogenitör hücreler",
            "Kondrositler"
        ],
        "answer": "Osteoblastlar",
        "correctAnswer": 2,
        "explanation": "Osteoblastlar kemik yapan hücrelerdir. Organik matriksi (osteoid) sentezler ve ardından içine kalsiyum pompalayarak kemikleşmesini sağlarlar."
    },
    {
        "id": "v6_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Solunum sisteminde Trakea'nın iç yüzeyini döşeyen 'Yalancı çok katlı prizmatik (Silli) epitel' yapısında en sık bulunan ve solunum yollarındaki partikülleri silleriyle yukarı iten hücre tipi hangisidir?",
        "options": [
            "Silli (Titrek tüylü) kolumnar hücreler",
            "Kadeh (Goblet) hücreleri",
            "Fırçamsı (Brush) hücreler",
            "Bazal hücreler",
            "Kulchitsky (Nöroendokrin) hücreler"
        ],
        "answer": "Silli (Titrek tüylü) kolumnar hücreler",
        "correctAnswer": 0,
        "explanation": "Solunum epitelinin çoğunluğunu Silli (Ciliated) kolumnar hücreler oluşturur. Bu siller, goblet hücrelerinin ürettiği mukusa yapışan tozları yutağa doğru (mukosiliyer asansör) süpürür."
    },
    {
        "id": "v6_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Tükürük bezlerinden Parotis bezi (Glandula parotidea) histolojik olarak ne tür bir salgı yapar?",
        "options": [
            "Sadece Muköz salgı",
            "Seromuköz (Karışık, muköz ağırlıklı)",
            "Sadece Seröz (Sulu, enzimden zengin)",
            "Sebase (Yağlı) salgı",
            "Sadece ter salgısı"
        ],
        "answer": "Sadece Seröz (Sulu, enzimden zengin)",
        "correctAnswer": 2,
        "explanation": "Parotis bezi saf seröz salgı yapar (bol amilaz içerir). Submandibular bez seromuköz (seröz ağırlıklı), Sublingual bez ise seromuköz (muköz ağırlıklı) salgı yapar."
    },
    {
        "id": "v6_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kalın bağırsak (Colon) histolojisinin ince bağırsaktan ayrılan en karakteristik özelliği aşağıdakilerden hangisidir?",
        "options": [
            "Villus yapılarının OLMAMASI",
            "Kadeh (Goblet) hücrelerinin tamamen kaybolması",
            "Peyer plaklarının bulunması",
            "Muskularis eksterna tabakasının hiç olmaması",
            "Lieberkühn kriptalarının (bezlerinin) kaybolması"
        ],
        "answer": "Villus yapılarının OLMAMASI",
        "correctAnswer": 0,
        "explanation": "Kalın bağırsakta emilim azaldığı için villuslar yoktur (yüzey düzdür). Ancak kriptalar uzundur ve dışkıyı kayganlaştırmak için Goblet hücre sayısı çok daha fazladır."
    },
    {
        "id": "v6_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kadın üreme sisteminde oogenez sırasında Mayoz-I'in tamamlanması (ve ilk kutup cisimciğinin atılması) ne zaman gerçekleşir?",
        "options": [
            "Doğumdan hemen önce (Fetal hayatta)",
            "Puberteden önce",
            "Siklus sırasında Ovulasyon'dan (Yumurtlamadan) hemen önce LH piki ile",
            "Sperm ile döllenme anında",
            "Menopoz sırasında"
        ],
        "answer": "Siklus sırasında Ovulasyon'dan (Yumurtlamadan) hemen önce LH piki ile",
        "correctAnswer": 2,
        "explanation": "Primer oosit mayoz-1'in profazında (diktiyoten) bekler. Her ay ovulasyondan hemen önce (LH pikiyle) mayoz-1 biter ve sekonder oosit oluşur. Mayoz-2 ise DÖLLENME ile biter."
    },

    // --- MİKROBİYOLOJİ (14 Soru) ---
    // Serpil Hoca (3 Soru: Antimikrobiyal, Mycoplasma, Vibrio)
    {
        "id": "v6_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Antimikrobiyal ilaçlardan DNA Jiraz (Topoizomeraz II) ve Topoizomeraz IV enzimlerini inhibe ederek bakteriyel DNA replikasyonunu durduran, özellikle üriner sistem enfeksiyonlarında sık kullanılan antibiyotik grubu hangisidir?",
        "options": [
            "Kinolonlar (örn. Siprofloksasin)",
            "Sefalosporinler (örn. Seftriakson)",
            "Makrolidler (örn. Azitromisin)",
            "Aminoglikozitler (örn. Amikasin)",
            "Sülfonamidler (örn. TMP-SMX)"
        ],
        "answer": "Kinolonlar (örn. Siprofloksasin)",
        "correctAnswer": 0,
        "explanation": "Florokinolon grubu antibiyotikler, bakteride DNA sarmalını açan DNA Jiraz enzimini inhibe ederek bakterisidal (öldürücü) etki gösterirler."
    },
    {
        "id": "v6_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hücre duvarı olmayan atipik bakteri Mycoplasma pneumoniae tanısında 'Soğuk Aglütinasyon' testinin pozitif çıkması hangi sınıf antikorların eritrositleri soğukta çökeltmesine bağlıdır?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE",
            "IgD"
        ],
        "answer": "IgM",
        "correctAnswer": 2,
        "explanation": "Mycoplasma enfeksiyonunda hastaların %50'sinde I (büyük ı) antijenine karşı oto-antikorlar (IgM yapısında) oluşur ve bu antikorlar kan +4 dereceye soğutulduğunda eritrositleri aglütine eder (Soğuk aglütinin)."
    },
    {
        "id": "v6_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Kolera etkeni Vibrio cholerae'nın laboratuvar tanısında (dışkı kültüründe) hızlı ve seçici üreme sağlamak için aşağıdaki besiyerlerinden (kültür ortamı) hangisi kullanılır?",
        "options": [
            "Kanlı agar",
            "TCBS (Tiyosülfat Sitrat Safra Tuzları Sükroz) agarı",
            "Löwenstein-Jensen besiyeri",
            "Eozin Metilen Mavisi (EMB) agarı",
            "Çikolata agar"
        ],
        "answer": "TCBS (Tiyosülfat Sitrat Safra Tuzları Sükroz) agarı",
        "correctAnswer": 1,
        "explanation": "Vibrio cinsi tuzlu ve bazik ortamları sever. TCBS agarı yüksek pH'lı (8.6) ve tuzlu yapısıyla Vibriolar için son derece spesifiktir. V. cholerae burada sükrozu fermente edip SARI koloniler oluşturur."
    },
    // Diğer Mikro (11 Soru)
    {
        "id": "v6_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Şarbon (Anthrax) hastalığının etkeni olan Bacillus anthracis bakterisinin mikroskobik morfolojisi aşağıdakilerden hangisidir?",
        "options": [
            "Gram negatif diplokok",
            "Gram pozitif, sporsuz, çomak",
            "Gram pozitif, büyük, uçları kesik bambu kamışı şeklinde, sporlu basil",
            "Gram negatif, martı kanadı şeklinde kıvrımlı basil",
            "Aside dirençli basil"
        ],
        "answer": "Gram pozitif, büyük, uçları kesik bambu kamışı şeklinde, sporlu basil",
        "correctAnswer": 2,
        "explanation": "Bacillus anthracis, gram pozitif, oldukça büyük, zincir oluşturan (bambu kamışı görünümü) ve merkezde endospor içeren bir bakteridir."
    },
    {
        "id": "v6_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hücre zarı (Plazmalemma) yapısında normalde bakterilerde bulunmayan sterolleri bulunduran bakteri Mycoplasma iken, hücre duvarında Gram boyası almasını engelleyen 'Mikolik asit (Mycolic acid)' gibi kalın mumsu lipidler bulunduran aside dirençli bakteri hangisidir?",
        "options": [
            "Treponema pallidum",
            "Mycobacterium tuberculosis",
            "Corynebacterium diphtheriae",
            "Neisseria gonorrhoeae",
            "Legionella pneumophila"
        ],
        "answer": "Mycobacterium tuberculosis",
        "correctAnswer": 1,
        "explanation": "Mycobacterium cinsinin hücre duvarının %60'ı mikolik asitten (mumsu lipit) oluşur. Bu yüzden normal Gram boyası işe yaramaz, asit-alkol ile yıkamaya direnç gösterdiği için 'Ehrlich-Ziehl-Neelsen (EZN)' boyası ile aside dirençli boyanır."
    },
    {
        "id": "v6_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mantar enfeksiyonlarının (Mikoz) tanısında, doku örneklerindeki keratinize yapıları eriterek (saç, deri, tırnak) mantar hiflerinin (iplikçiklerinin) mikroskop altında net görülmesini sağlayan kimyasal madde hangisidir?",
        "options": [
            "Gram Boyası",
            "%10-20 Potasyum Hidroksit (KOH)",
            "Çini Mürekkebi",
            "Gümüşleme Boyası",
            "Lugol İyot çözeltisi"
        ],
        "answer": "%10-20 Potasyum Hidroksit (KOH)",
        "correctAnswer": 1,
        "explanation": "Dermatofit (deri mantarı) tanısında kazıntı örneği lama alınır ve üzerine %10-20 KOH damlatılır. KOH insan hücresi kalıntılarını (keratini) eritirken, kitin yapılı mantar duvarına zarar vermez ve hifler net görülür."
    },
    {
        "id": "v6_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Dünya Sağlık Örgütü tarafından tamamen yok edildiği (Eradike edildiği) ilan edilen insanlık tarihindeki İLK ve TEK viral hastalık aşağıdakilerden hangisidir?",
        "options": [
            "Çocuk Felci (Poliomyelit)",
            "Kızamık (Rubeola)",
            "Çiçek hastalığı (Variola)",
            "Kuduz (Rabies)",
            "Sarı Humma"
        ],
        "answer": "Çiçek hastalığı (Variola)",
        "correctAnswer": 2,
        "explanation": "Çiçek hastalığı (Smallpox), Poxviridae ailesinden Variola virüsünün etken olduğu ölümcül bir hastalıktır. 1980 yılında yoğun aşı kampanyaları sonucu dünya üzerinden tamamen silinmiştir."
    },
    {
        "id": "v6_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Köpek, kedi veya yarasa ısırması sonucu bulaşan, beyne ulaştığında negri cisimcikleri (Negri bodies) oluşturan ve ensefalit tablosuyla (su korkusu vb.) kesin ölümle sonuçlanan virüs hangisidir?",
        "options": [
            "Kuduz (Rabies) Virüsü",
            "Batı Nil Virüsü",
            "Kırım Kongo Kanamalı Ateşi Virüsü",
            "Ebola Virüsü",
            "Zika Virüsü"
        ],
        "answer": "Kuduz (Rabies) Virüsü",
        "correctAnswer": 0,
        "explanation": "Kuduz virüsü (Rhabdoviridae), mermi şeklindedir ve enfekte memelinin tükürüğünden kas içine girer, periferik sinirlerden retrograd yolla beyne ulaşarak ölümcül ensefalit (hidrofobi) yapar."
    },
    {
        "id": "v6_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bağırsak parazitlerinden, çıplak ayakla toprakta yürürken larvalarının (filariform larva) ciltten içeri girerek insanı enfekte ettiği ve kancalarıyla bağırsağa tutunarak kan emdiği (anemi yapan) 'Kancalı kurt' aşağıdakilerden hangisidir?",
        "options": [
            "Ascaris lumbricoides",
            "Ancylostoma duodenale / Necator americanus",
            "Trichuris trichiura",
            "Taenia solium",
            "Enterobius vermicularis"
        ],
        "answer": "Ancylostoma duodenale / Necator americanus",
        "correctAnswer": 1,
        "explanation": "Kancalı kurtlar, enfektif larvalarının doğrudan ayak/bacak cildini delerek vücuda girmesiyle bulaşır. İnce bağırsağa yerleşip kan emerek 'Demir eksikliği anemisi' yaparlar."
    },
    {
        "id": "v6_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sıtma (Malaria) tanısı koymak için ateşli dönemdeki hastadan alınan kan örneğinin mikroskobik incelemesinde eritrositlerin (kırmızı kan hücreleri) içinde 'Taşlı yüzük (Ring form)' görünümü veren parazit hangisidir?",
        "options": [
            "Leishmania tropica",
            "Trypanosoma brucei",
            "Plasmodium falciparum",
            "Toxoplasma gondii",
            "Giardia lamblia"
        ],
        "answer": "Plasmodium falciparum",
        "correctAnswer": 2,
        "explanation": "Sıtma etkeni Plasmodium türlerinin teşhisi kalın/ince kan yayması ile yapılır. Eritrosit içindeki erken trofozoit dönemine mikroskopta taşlı yüzük (ring form) görünümü denir."
    },
    {
        "id": "v6_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram negatif çomak (basil) olan ve hastanelerde yatan yoğun bakım hastalarının solunum cihazlarında (ventilatör) veya yanık yaralarında kolonize olarak antibiyotiklere çok dirençli ölümcül enfeksiyonlar yapan, kültürde 'yeşil/mavi pigment' oluşturan ve 'üzüm/ıhlamur kokulu' bakteri hangisidir?",
        "options": [
            "Escherichia coli",
            "Klebsiella pneumoniae",
            "Pseudomonas aeruginosa",
            "Acinetobacter baumannii",
            "Proteus mirabilis"
        ],
        "answer": "Pseudomonas aeruginosa",
        "correctAnswer": 2,
        "explanation": "Pseudomonas aeruginosa; zorunlu aerobik, çoklu ilaç direnci gösteren fırsatçı bir hastane mikrobudur. Piyosiyanin adı verilen mavi-yeşil pigmenti çok karakteristiktir."
    },
    {
        "id": "v6_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Vücudumuzdaki normal mikrobiyotanın (flora) özellikleri hakkında aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Deride en bol bulunan bakterilerden biri Staphylococcus epidermidis'tir.",
            "Normal flora, dışarıdan gelen hastalık yapıcı (patojen) bakterilerle yer ve besin rekabetine girerek onları engeller.",
            "Kalın bağırsakta en çok bulunan bakteriler zorunlu anaeroblar (Bacteroides vd.) ve E. coli'dir.",
            "Vajina florasında laktobasillerin (Döderlein basilleri) asit üretmesi patojenleri engeller.",
            "Kan dolaşımında ve beyin omurilik sıvısında bol miktarda koruyucu flora bakterisi bulunur."
        ],
        "answer": "Kan dolaşımında ve beyin omurilik sıvısında bol miktarda koruyucu flora bakterisi bulunur.",
        "correctAnswer": 4,
        "explanation": "Sağlıklı bir insanda Kan dolaşımı, BOS (Beyin Omurilik Sıvısı), eklem sıvıları ve iç organ dokuları (karaciğer, dalak vb.) TAMAMEN STERİLDİR. Flora ancak dış ortama açılan mukozalarda bulunur."
    },
    {
        "id": "v6_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Deri mantarlarından (Dermatofitler) saç, deri ve tırnaklarda enfeksiyon (Tinea) yapabilen 3 cinsten hangisi mikrokonidya oluşturmaz, ancak büyük sosis veya mekik şeklinde makrokonidyaları vardır?",
        "options": [
            "Trichophyton",
            "Microsporum",
            "Epidermophyton",
            "Candida",
            "Malassezia"
        ],
        "answer": "Epidermophyton",
        "correctAnswer": 2,
        "explanation": "Dermatofitler 3 cinstir: Trichophyton (deri, tırnak, saç), Microsporum (deri, saç) ve Epidermophyton (deri, tırnak - saça bulaşmaz, mikrokonidyası yoktur)."
    },
    {
        "id": "v6_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Kızamık, Kabakulak ve Kızamıkçık virüslerine karşı yapılan (MMR) aşı türü aşağıdakilerden hangisidir?",
        "options": [
            "Canlı atenüe (zayıflatılmış) viral aşı",
            "İnaktif (Ölü) viral aşı",
            "Toksoid aşı",
            "Rekombinant protein aşısı",
            "mRNA aşısı"
        ],
        "answer": "Canlı atenüe (zayıflatılmış) viral aşı",
        "correctAnswer": 0,
        "explanation": "Kızamık (Measles), Kabakulak (Mumps) ve Kızamıkçık (Rubella) aşısı olan MMR aşısı canlı zayıflatılmış virüsler içerir. Bu yüzden bağışıklığı baskılanmış kişilere ve gebelere YAPILMAZ."
    },

    // --- DİĞERLERİ (10 Soru) ---
    // Biyofizik (4 Soru)
    {
        "id": "v6_biyofizik_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Hücre zarının biyofiziksel elektriksel modeli bir kondansatöre (kapasitör) benzetilir. Hücre zarının 'Kapasitans' değerinin (yük depolama kapasitesi) miyelin kılıf ile kaplandığında azalmasının sinir iletimine etkisi nedir?",
        "options": [
            "Aksiyon potansiyeli genliğini sıfıra indirir.",
            "Aksiyon potansiyelinin akson boyunca iletim hızını ciddi oranda artırır.",
            "Membranı tamamen yalıtkan yapıp iletimi durdurur.",
            "Sadece ağrı duyusunun geçmesini sağlar.",
            "Refrakter (Duyarsız) periyodu uzatır."
        ],
        "answer": "Aksiyon potansiyelinin akson boyunca iletim hızını ciddi oranda artırır.",
        "correctAnswer": 1,
        "explanation": "Miyelin kılıf, akson zarının membran kapasitansını (Cm) düşürür ve membran direncini (Rm) artırır. Böylece elektriksel yük zarın altına sızmaz ve düğümden düğüme atlayarak hızla ilerler (Sıçrayıcı iletim)."
    },
    {
        "id": "v6_biyofizik_2",
        "subject": "Tıbbi Biyokimya",
        "question": "X-Işınlarının (Röntgen) maddeden geçerken dokuların yoğunluğuna göre soğurulması prensibinde, aşağıdaki yapılardan hangisi radyografide (röntgen filminde) EN BEYAZ (radyoopak) görünür?",
        "options": [
            "Akciğerlerdeki hava",
            "Derialtı yağ dokusu",
            "Kas dokusu",
            "Kan sıvısı",
            "Kemik (Kalsiyum)"
        ],
        "answer": "Kemik (Kalsiyum)",
        "correctAnswer": 4,
        "explanation": "Atom numarası ve yoğunluk arttıkça X-ışını soğurulması (absorbsiyon) artar ve film üzerinde beyaz (radyoopak) görüntü oluşur. En yoğun doku Kemiktir. Hava ise siyah (radyolusent) görünür."
    },
    {
        "id": "v6_biyofizik_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Sıvıların yüzey gerilimi ile basınç arasındaki ilişkiyi açıklayan Laplace Yasasına (P = 2T / r) göre, akciğer alveolleri gibi küresel yapılarda alveol yarıçapı küçüldükçe içindeki basınç ne olur?",
        "options": [
            "Azalır",
            "Değişmez",
            "Artar",
            "Önce azalır sonra artar",
            "Sıfıra iner"
        ],
        "answer": "Artar",
        "correctAnswer": 2,
        "explanation": "Laplace yasasına göre küre içindeki basınç yarıçapla (r) TERS orantılıdır. Yarıçap küçüldükçe büzme kuvveti/basınç ARTAR. Küçük alveolün kendi içine sönmesini sürfaktan önler."
    },
    {
        "id": "v6_biyofizik_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Tıbbi cihazlardan Ultrasonografinin (USG) görüntü oluşturma prensibi aşağıdakilerden hangisine dayanır?",
        "options": [
            "Vücuttaki hidrojen protonlarının manyetik rezonansı",
            "Pozitron ışıması yapan radyoaktif ajanların kullanılması",
            "Yüksek frekanslı (işitilemeyen) ses dalgalarının dokulardan yansıması (eko)",
            "Yüksek voltajlı elektronların dokuya çarpması",
            "Vücudun yaydığı kızılötesi (ısı) dalgalarının algılanması"
        ],
        "answer": "Yüksek frekanslı (işitilemeyen) ses dalgalarının dokulardan yansıması (eko)",
        "correctAnswer": 2,
        "explanation": "USG (Ultrason), vücuda gönderilen 2-15 MHz frekansındaki yüksek ses dalgalarının farklı akustik empedansa sahip doku sınırlarından yansıyarak (Eko) prop tarafından algılanmasına dayanır. Radyasyon yoktur."
    },
    // Patoloji (2 Soru)
    {
        "id": "v6_patoloji_1",
        "subject": "Tıbbi Patoloji",
        "question": "Hücresel adaptasyon mekanizmalarından biri olan 'Hipertrofi'nin tanımı aşağıdakilerden hangisidir?",
        "options": [
            "Hücre sayısının artması",
            "Hücre boyutlarının (hacminin) artarak organın büyümesi",
            "Hücre boyutlarının küçülmesi",
            "Olgun bir hücrenin başka bir olgun hücreye dönüşmesi",
            "Hücrelerin kontrolsüzce kanserleşmesi"
        ],
        "answer": "Hücre boyutlarının (hacminin) artarak organın büyümesi",
        "correctAnswer": 1,
        "explanation": "Hipertrofi, hücrelerin boyut olarak büyümesidir (örn. haltercilerin kaslarının büyümesi veya hipertansiyonda sol ventrikül hipertrofisi). Hücre sayısının artması ise Hiperplazi'dir."
    },
    {
        "id": "v6_patoloji_2",
        "subject": "Tıbbi Patoloji",
        "question": "Nekroz türlerinden olan ve beyin dokusu gibi proteinden fakir / lipitten zengin organların iskemisinde (enfarktüs) ölü dokunun enzimatik yıkımla sıvılaşarak kistik bir boşluğa dönüştüğü nekroz tipi hangisidir?",
        "options": [
            "Koagülasyon nekrozu",
            "Kazeifikasyon nekrozu",
            "Sıvılaşma (Likuifaksiyon) nekrozu",
            "Yağ nekrozu",
            "Fibrinoid nekroz"
        ],
        "answer": "Sıvılaşma (Likuifaksiyon) nekrozu",
        "correctAnswer": 2,
        "explanation": "Beyin enfarktüslerinde (felç) veya apselerde (bakteriyel enfeksiyonlarda proteolitik enzim salgısına bağlı) ölü doku sıvılaşır (Likuifaksiyon nekrozu). Kalp ve böbrek enfarktüslerinde ise Koagülasyon nekrozu görülür."
    },
    // İletişim (2 Soru)
    {
        "id": "v6_iletisim_1",
        "subject": "İletişim Becerileri",
        "question": "Hekimin, hastasına herhangi bir tıbbi girişim yapmadan önce işlemin yararları, riskleri ve alternatifleri hakkında anlaşılır bilgi vermesi ve hastanın işlemi kabul ettiğine dair gönüllü onayını almasına ne ad verilir?",
        "options": [
            "Tıbbi endikasyon",
            "Defansif Tıp",
            "Aydınlatılmış Onam (Rıza)",
            "Tıbbi Malpraktis",
            "Konsültasyon"
        ],
        "answer": "Aydınlatılmış Onam (Rıza)",
        "correctAnswer": 2,
        "explanation": "Aydınlatılmış Onam, hastanın kendi bedeni üzerindeki hakkının (Otonomi) korunmasını sağlar ve hekimin yasal/etik güvencesidir."
    },
    {
        "id": "v6_iletisim_2",
        "subject": "İletişim Becerileri",
        "question": "Aşağıdakilerden hangisi hasta iletişiminde kullanılan 'Açık Uçlu Soru'lara bir örnektir?",
        "options": [
            "Dün akşam ateşin yükseldi mi?",
            "Ağrın koluna vuruyor mu?",
            "Şikayetlerin ne zaman başladı?",
            "Bana ağrının tam olarak nasıl bir his olduğunu anlatır mısın?",
            "İlacını düzenli kullanıyor musun?"
        ],
        "answer": "Bana ağrının tam olarak nasıl bir his olduğunu anlatır mısın?",
        "correctAnswer": 3,
        "explanation": "Açık uçlu sorular 'evet' veya 'hayır' diye yanıtlanamayan, hastanın kendi hikayesini detaylandırmasına izin veren 'Nasıl', 'Neler hissediyorsun' kalıplarındaki sorulardır."
    },
    // Tarih/Etik (2 Soru)
    {
        "id": "v6_tarihetik_1",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Roma döneminin en ünlü hekimi olan, anatomi ve fizyoloji bilgilerini domuz ve maymun disseksiyonlarına dayandıran, bu nedenle insan anatomisinde bin yıldan fazla sürecek bazı temel yanlışları başlatan tıp alimi kimdir?",
        "options": [
            "Hipokrat",
            "Galenos (Galen)",
            "Paracelsus",
            "İbn-i Sina",
            "Vesalius"
        ],
        "answer": "Galenos (Galen)",
        "correctAnswer": 1,
        "explanation": "Bergamalı Galenos, antik çağın Hipokrat'tan sonraki en büyük tıp otoritesidir. Ancak insan diseksiyonu yasak olduğu için hayvanları incelemiş ve bazı hatalı yargılar (örn. kalpte delik olması) üretmiştir."
    },
    {
        "id": "v6_tarihetik_2",
        "subject": "Tıp Tarihi ve Etik",
        "question": "Bir hekimin acil servise getirilen kanamalı ve durumu kritik bir hastaya, hastanın kimliğine, sosyal veya ekonomik statüsüne bakmaksızın anında tıbbi müdahalede bulunması tıbbi etiğin en çok hangi ilkesiyle ilişkilidir?",
        "options": [
            "Otonomi (Özerklik)",
            "Yararlılık (Beneficence) ve Adalet",
            "Gerçeği söyleme",
            "Sır saklama",
            "Malpraktis"
        ],
        "answer": "Yararlılık (Beneficence) ve Adalet",
        "correctAnswer": 1,
        "explanation": "Yararlılık, hekimin hastaya yardım etme yükümlülüğüdür. Adalet ise tıbbi yardımın kişinin sınıfına bakılmaksızın ihtiyacı olana eşit ve acil olarak sunulmasını ifade eder."
    },
    // BAK (1 Soru)
    {
        "id": "v6_bak_1",
        "subject": "Bilimsel Araştırma",
        "question": "Tıbbi araştırmalarda 'P-değeri (P-value)' neyi ifade eder?",
        "options": [
            "İlacın hastayı iyileştirme gücünün kesinliğini",
            "Araştırmada bulunan sonucun şans eseri ortaya çıkma olasılığını",
            "İki grup arasındaki farkın büyüklüğünü",
            "Korelasyonun (ilişkinin) negatif veya pozitif olduğunu",
            "Denek sayısını"
        ],
        "answer": "Araştırmada bulunan sonucun şans eseri ortaya çıkma olasılığını",
        "correctAnswer": 1,
        "explanation": "P-değeri, test edilen hipotezde bulunan sonucun tamamen rastlantısal (tesadüfi) olarak ortaya çıkma ihtimalidir. Tıpta genellikle P<0.05 olması (şans eseri olma ihtimalinin %5'ten küçük olması) sonucun 'istatistiksel olarak anlamlı' kabul edilmesini sağlar."
    },
    // Toplum Sağlığı (1 Soru)
    {
        "id": "v6_toplum_1",
        "subject": "Toplum Sağlığı",
        "question": "Bir toplumda belirli bir hastalığın (Örn: Hipertansiyon) ne kadar sık görüldüğünü saptamak için hastalığın o anki Taramasının (fotoğrafının çekilmesinin) yapıldığı, sebep ve sonucun aynı anda değerlendirildiği araştırma tipi hangisidir?",
        "options": [
            "Vaka-Kontrol (Case-Control) Çalışması",
            "Kohort Çalışması",
            "Kesitsel (Cross-Sectional) Çalışma",
            "Deneysel Çalışma",
            "Ekolojik Araştırma"
        ],
        "answer": "Kesitsel (Cross-Sectional) Çalışma",
        "correctAnswer": 2,
        "explanation": "Kesitsel çalışmalar, tıpkı toplumun o andaki bir fotoğrafının çekilmesi gibidir (Prevalans araştırmaları). Hastalık ve maruziyet aynı anda sorgulanır, zaman içinde takip yapılmaz."
    }
];

window.examsData['tam_kapsamli_final_v6'].questions.push(...v6Part2);
