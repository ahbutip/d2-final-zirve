window.examsData = window.examsData || {};

// V4 PART 3 - BİYOKİMYA & FARMAKOLOJİ (18 SORU)
// Dağılım:
// BİYOKİMYA (11 Soru):
// Mustafa Bozkurt: 4 Soru (Kan proteinleri, KH metab., Pankreas horm., Adrenal horm.)
// Fatih Kar: 2 Soru (Çıkmış/Klasik)
// Said Altıkat: 2 Soru
// Fatmagül Can: 2 Soru
// Ayşe Koçak Sezgin: 1 Soru
// FARMAKOLOJİ (7 Soru):
// Yasemin Tekşen: 3 Soru
// Yasemin Özatik: 2 Soru (İlaç etkileşimleri/mekanizmaları vurgulu)
// Ulya: 2 Soru

window.examsData['tam_kapsamli_final_v4'] = window.examsData['tam_kapsamli_final_v4'] || {
    "title": "Zirve Deneme Sınavı 1 (Temel Kurul Dağılımı)",
    "description": "Tüm hocaların 2024-2025 çıkmış soru analizlerine, hoca-konu eşleştirmelerine ve bizzat hocaların kendi ağzından verdikleri tüyolara dayanılarak hazırlanan 120 soruluk KESİN FİNAL SİMÜLASYONU.",
    "questions": []
};

const biyoFarmaQuestions = [
    // --- BİYOKİMYA ---
    // Mustafa Bozkurt (4 Soru)
    {
        "id": "v4_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Kan proteinlerinin elektroforetik ayrımında, gama (γ) globulin bandının monoklonal bir artış gösterdiği (M bandı piki) durum aşağıdakilerden hangisidir?",
        "options": [
            "Akut faz reaksiyonu (Enflamasyon)",
            "Nefrotik sendrom",
            "Multiple Miyelom",
            "Karaciğer sirozu",
            "Demir eksikliği anemisi"
        ],
        "answer": "Multiple Miyelom",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Multiple miyelomda tek bir plazma hücresi klonunun aşırı çoğalmasına bağlı olarak gama bölgesinde sivri, dar bir pik (M proteini/M bandı) görülür. Sirozda beta-gama köprüleşmesi olur."
    },
    {
        "id": "v4_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Uzun süreli açlık veya kontrolsüz diyabet durumunda, karbonhidrat metabolizmasının enerji ihtiyacını karşılayamaması sonucu kanda artan ve idrarla atılan (ketonüri) asidik bileşikler (keton cisimleri) öncelikle hangi metabolitten sentezlenir?",
        "options": [
            "Laktat",
            "Asetil-CoA",
            "Pirüvat",
            "Oksaloasetat",
            "Gliserol"
        ],
        "answer": "Asetil-CoA",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Hücrede Oksaloasetat yetersizliği olduğunda (TCA siklusu durduğunda), yağ asidi yıkımından gelen Asetil-CoA molekülleri birleşerek keton cisimlerine (asetoasetat, beta-hidroksibütirat, aseton) dönüşür."
    },
    {
        "id": "v4_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Pankreas adacıklarından sentezlenen peptid yapılı bir hormon olan insülinin biyokimyasal yapısı ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "A ve B olmak üzere iki polipeptid zincirinden oluşur.",
            "Zincirler birbirine disülfit bağları ile bağlıdır.",
            "Proinsülinden insülin oluşurken C-peptid (bağlayıcı peptid) koparılarak kana verilir.",
            "Yarı ömrü kanda çok uzundur (yaklaşık 2-3 gün).",
            "Hedef hücre membranındaki reseptörü bir tirozin kinazdır."
        ],
        "answer": "Yarı ömrü kanda çok uzundur (yaklaşık 2-3 gün).",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "İnsülinin kanda yarı ömrü çok kısadır (yaklaşık 3-5 dakika). Bu nedenle endojen insülin salınımını değerlendirmek için yarı ömrü daha uzun olan C-peptide bakılır."
    },
    {
        "id": "v4_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Adrenal kortekste kolesterolden steroid hormon sentezlenirken, tüm steroid hormonların öncülü olan ve kolesterolün yan zincirinin koparılmasıyla oluşan ilk ortak ara bileşik (progestajen) aşağıdakilerden hangisidir?",
        "options": [
            "Pregnenolon",
            "Dehidroepiandrosteron (DHEA)",
            "Aldosteron",
            "Kortizol",
            "Progesteron"
        ],
        "answer": "Pregnenolon",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Kolesterolden desmolaz (CYP11A1) enzimi ile yan zincir koparılır ve 21 karbonlu pregnenolon sentezlenir. Pregnenolon tüm steroid hormonların ortak anasıdır."
    },

    // Fatih Kar (2 Soru - Çıkmış tarzı)
    {
        "id": "v4_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Karaciğer fonksiyon testleri (KFT) değerlendirilirken, özellikle safra yollarında tıkanıklık (kolestaz) durumlarında kanda düzeyi en belirgin artan ve kemik yapımında da görev alan enzim hangisidir?",
        "options": [
            "Alanin aminotransferaz (ALT)",
            "Alkalen fosfataz (ALP)",
            "Aspartat aminotransferaz (AST)",
            "Kreatin kinaz (CK)",
            "Laktat dehidrogenaz (LDH)"
        ],
        "answer": "Alkalen fosfataz (ALP)",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "ALP (Alkalen Fosfataz), safra kanaliküllerinin apikal zarında bulunur ve kolestazda (safra yolları tıkanıklığı) GGT ile birlikte belirgin artar. Ayrıca kemik büyümesi/kırık iyileşmesinde de artar."
    },
    {
        "id": "v4_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Hem yıkımı (katabolizması) sonucu oluşan bilirubinin, karaciğerde suda çözünürlüğünün artırılması (konjugasyonu) için aşağıdaki asitlerden hangisi ile birleşmesi gerekir?",
        "options": [
            "Sülfürik asit",
            "Asetik asit",
            "Glukuronik asit",
            "Folik asit",
            "Askorbik asit"
        ],
        "answer": "Glukuronik asit",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "İndirekt (anjonjuge) bilirubin, karaciğerde UDP-glukuronil transferaz enzimi ile glukuronik asitle konjuge edilerek direkt (konjuge) suda çözünen bilirubine dönüştürülür."
    },

    // Said Altıkat (2 Soru)
    {
        "id": "v4_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Tiroid hormonlarının (T3 ve T4) sentez aşamalarında, tiroglobulin yapısındaki tirozin kalıntılarına iyot moleküllerinin eklenmesini (organifikasyon) ve iyodotirozinlerin birleşmesini (kenetlenme) katalize eden enzim aşağıdakilerden hangisidir?",
        "options": [
            "Tiroid peroksidaz (TPO)",
            "5'-Deiyodinaz",
            "Tirozin hidroksilaz",
            "Sodyum-İyot simporteri (NIS)",
            "Tiroglobulin proteaz"
        ],
        "answer": "Tiroid peroksidaz (TPO)",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Tiroid peroksidaz (TPO); iyodürün oksidasyonu, iyodun tirozine bağlanması (organifikasyon) ve MIT ile DIT'in birleşerek T3/T4 oluşturması (kenetlenme) adımlarının hepsini katalize eder."
    },
    {
        "id": "v4_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Eritrositlerin enerji metabolizması düşünüldüğünde, mature (olgun) eritrositlerin mitokondrisi olmadığı için tek enerji üretim yolları glikolizdir. Glikoliz yolunda yer alan ve eksikliğinde en sık herediter nonsferositik hemolitik anemiye yol açan enzim aşağıdakilerden hangisidir?",
        "options": [
            "Glukoz-6-fosfat dehidrogenaz (G6PD)",
            "Pirüvat kinaz",
            "Hekzokinaz",
            "Fosfofruktokinaz-1",
            "Laktat dehidrogenaz"
        ],
        "answer": "Pirüvat kinaz",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Glikoliz yolundaki (mitokondri gerektirmeyen) en sık enzim eksikliği Pirüvat kinaz eksikliğidir ve ATP yetersizliğine bağlı hemoliz yapar. G6PD eksikliği ise Pentoz fosfat yolundadır."
    },

    // Fatmagül Can (2 Soru)
    {
        "id": "v4_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Vücutta demir metabolizması ve taşınmasında rol alan proteinlerden hangisi, plazmada kanda demiri taşıyan (ferrik formda bağlayan) ana proteindir?",
        "options": [
            "Ferritin",
            "Hemosiderin",
            "Transferrin",
            "Hepsidin",
            "Serüloplazmin"
        ],
        "answer": "Transferrin",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Transferrin, plazmada demiri (Fe+3 formunda) taşıyan temel proteindir. Ferritin ise hücre içinde demirin ana depo şeklidir."
    },
    {
        "id": "v4_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Biyokimyasal tampon sistemlerinden biri olan solunum sistemi, asit-baz dengesizliği durumunda dakikalar içinde devreye girerek kompanzasyon sağlar. Metabolik asidoz gelişen bir hastada solunum sisteminin kompanze edici yanıtı aşağıdakilerden hangisidir?",
        "options": [
            "Solunum hızını ve derinliğini artırarak pCO2'yi düşürmek (Hiperventilasyon)",
            "Solunumu yavaşlatarak pCO2'yi yükseltmek (Hipoventilasyon)",
            "Böbreklerden bikarbonat atılımını artırmak",
            "Kandaki oksijen basıncını (pO2) artırmak",
            "Alveollerde karbonik anhidraz enzimini inhibe etmek"
        ],
        "answer": "Solunum hızını ve derinliğini artırarak pCO2'yi düşürmek (Hiperventilasyon)",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Metabolik asidozda (H+ yüksek, HCO3 düşük) vücut bu fazla asiditeyi kırmak için asit özelliği taşıyan CO2'yi nefes yoluyla hızla dışarı atmaya çalışır. Buna Kussmaul solunumu (hiperventilasyon) denir."
    },

    // Ayşe Koçak Sezgin (1 Soru)
    {
        "id": "v4_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki vitamin eksikliklerinin hangisinde kanda ve idrarda metilmalonik asit düzeyi artar ve buna bağlı olarak sinir sisteminde miyelin sentezi bozulduğu için nörolojik bulgular (örn. subakut kombine dejenerasyon) ortaya çıkar?",
        "options": [
            "Folik asit (B9)",
            "Kobalamin (B12)",
            "Tiamin (B1)",
            "Niasin (B3)",
            "Pridoksin (B6)"
        ],
        "answer": "Kobalamin (B12)",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Metilmalonil-CoA mutaz enzimi için B12 vitamini kofaktördür. B12 eksikliğinde metilmalonik asit birikir ve miyelin sentezi bozularak geri dönüşümsüz nörolojik hasar gelişir. Folik asit eksikliğinde sadece homosistein artar, metilmalonik asit artmaz."
    },

    // --- FARMAKOLOJİ ---
    // Yasemin Tekşen (3 Soru)
    {
        "id": "v4_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Farmakokinetik süreçlerden biri olan 'Biyoyararlanım' kavramının tanımı aşağıdakilerden hangisidir?",
        "options": [
            "İlacın vücutta metabolize edilme hızıdır.",
            "İlacın karaciğerden ilk geçişte uğradığı yıkım miktarıdır.",
            "Uygulanan ilacın değişmeden sistemik dolaşıma geçen fraksiyonudur (oranıdır).",
            "İlacın böbreklerden atılım hızıdır.",
            "İlacın plazma proteinlerine bağlanma yüzdesidir."
        ],
        "answer": "Uygulanan ilacın değişmeden sistemik dolaşıma geçen fraksiyonudur (oranıdır).",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Biyoyararlanım (bioavailability), bir ilacın uygulandıktan sonra sistemik dolaşıma değişmeden (bozulmadan) ve aktif olarak ulaşabilme yüzdesidir. İntravenöz (İV) uygulamada biyoyararlanım %100'dür."
    },
    {
        "id": "v4_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Otonom sinir sistemi farmakolojisinde, parasempatik sistemin (kolinerjik) aktivasyonuna bağlı olarak gelişen 'Muskarinik' etkiler arasında aşağıdakilerden hangisi yer almaz?",
        "options": [
            "Miyozis (göz bebeğinin küçülmesi)",
            "Bronkokonstriksiyon (bronşlarda daralma)",
            "Bradikardi (kalp hızının yavaşlaması)",
            "Gastrointestinal motilitede artış",
            "Sfinkterlerde kasılma (idrar retansiyonu)"
        ],
        "answer": "Sfinkterlerde kasılma (idrar retansiyonu)",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Kolinerjik (parasempatik) stimülasyon mesane detrusor kasını kasar ancak sfinkterleri GEVŞETİR, yani idrar yapmayı (miksiyonu) kolaylaştırır."
    },
    {
        "id": "v4_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Asetilkolinesteraz enzimini geri dönüşümsüz (irreversible) olarak inhibe eden ve tarım ilacı (organofosfat) zehirlenmelerine neden olan gruptaki ajanların zehirlenmesinde antidot olarak hangi ilaçlar birlikte kullanılır?",
        "options": [
            "Atropin ve Pralidoksim (PAM)",
            "Neostigmin ve Edrofonyum",
            "Fizostigmin ve Pilokarpin",
            "Adrenalin ve Dopamin",
            "Skopolamin ve Metoklopramid"
        ],
        "answer": "Atropin ve Pralidoksim (PAM)",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Organofosfat zehirlenmesinde muskarinik etkileri bloke etmek için (hayat kurtarıcı olarak) Atropin, enzimi yeniden aktifleştirmek (nikotinik kas felcini önlemek) için ise kolinesteraz reaktivatörü olan Pralidoksim (PAM) kullanılır."
    },

    // Yasemin Özatik (2 Soru - Etkileşimler / Mekanizmalar)
    {
        "id": "v4_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Karaciğerde sitokrom P450 (CYP) enzim sistemini indükleyen (enzim miktarını artıran) bir ilaç (örneğin fenitoin veya karbamazepin) kullanan hastaya, aynı enzimle metabolize olan ikinci bir ilaç verildiğinde aşağıdakilerden hangisinin olması beklenir?",
        "options": [
            "İkinci ilacın kan düzeyi toksik boyutlara ulaşır.",
            "İkinci ilacın metabolizması hızlanır ve kan düzeyi ile terapötik etkisi azalır.",
            "İkinci ilacın biyoyararlanımı artar.",
            "İkinci ilacın böbreklerden atılımı tamamen durur.",
            "İki ilaç birbirinin reseptörüne bağlanarak yarışmalı antagonizma yapar."
        ],
        "answer": "İkinci ilacın metabolizması hızlanır ve kan düzeyi ile terapötik etkisi azalır.",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Enzim indüksiyonu, ilacı yıkan enzimlerin artmasına neden olur. Bu durumda o enzimle yıkılan diğer ilaçların metabolizması (yıkımı) hızlanır, kan düzeyleri düşer ve etkileri azalır (terapötik başarısızlık)."
    },
    {
        "id": "v4_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Lokal anestezik ajanların etki mekanizması incelendiğinde, bu ilaçlar sinir liflerinde aksiyon potansiyeli oluşumunu hangi iyon kanalını bloke ederek engellerler?",
        "options": [
            "Voltaj kapılı kalsiyum (Ca+2) kanalları",
            "Voltaj kapılı sodyum (Na+) kanalları",
            "Ligand kapılı potasyum (K+) kanalları",
            "GABA-A reseptörüne bağlı klor (Cl-) kanalları",
            "Sodyum-Potasyum pompası (Na+/K+ ATPaz)"
        ],
        "answer": "Voltaj kapılı sodyum (Na+) kanalları",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Lokal anestezikler, hücre içinden voltaj kapılı Sodyum (Na+) kanallarına bağlanıp onları bloke ederek depolarizasyonu (aksiyon potansiyelini) engeller ve ağrı iletimini durdururlar."
    },

    // Ulya (2 Soru)
    {
        "id": "v4_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Adrenerjik reseptör antagonistleri (Beta blokerler) astımlı hastalarda kullanıldığında, bronşlarda bulunan hangi reseptörün bloke olması sonucu tehlikeli bir bronkospazma (bronş daralması) neden olurlar?",
        "options": [
            "Alfa-1 reseptör",
            "Alfa-2 reseptör",
            "Beta-1 reseptör",
            "Beta-2 reseptör",
            "Beta-3 reseptör"
        ],
        "answer": "Beta-2 reseptör",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Bronş düz kaslarında Beta-2 reseptörler bulunur ve uyarılmaları bronkodilatasyon yapar. Non-selektif beta blokerler (örn. propranolol) bu reseptörü bloke ederek astım krizini tetikleyebilir (bronkospazm)."
    },
    {
        "id": "v4_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "subject": "Tıbbi Farmakoloji",
        "question": "Kalp yetmezliği tedavisinde kullanılan Kardiyak Glikozidlerin (örneğin Digoksin) hücresel düzeydeki temel etki mekanizması aşağıdakilerden hangisidir?",
        "options": [
            "Miyokard hücre membranındaki Na+/K+ ATPaz pompasını inhibe etmek",
            "Hücre içi cAMP düzeyini fosfodiesteraz enzimini inhibe ederek artırmak",
            "Voltaj kapılı kalsiyum kanallarını bloke ederek hücre içi kalsiyumu azaltmak",
            "Beta-1 reseptörlerini doğrudan uyararak (agonist etki) kontraktiliteyi artırmak",
            "Anjiyotensin dönüştürücü enzimi (ACE) bloke etmek"
        ],
        "answer": "Miyokard hücre membranındaki Na+/K+ ATPaz pompasını inhibe etmek",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Digoksin, Na+/K+ ATPaz pompasını inhibe eder. Hücrede sodyum birikir, bu durum Na+/Ca+2 değiştiricisini tersine çalıştırarak hücre içine kalsiyum dolmasına yol açar ve kalp kasılma gücünü (pozitif inotropik etki) artırır."
    }
];

window.examsData['tam_kapsamli_final_v4'].questions.push(...biyoFarmaQuestions);
