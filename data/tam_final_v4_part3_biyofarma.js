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
                "subject": "Tıbbi Biyokimya",
                "question": "Oral glukoz tolerans testi yapılan bir hastada, ağızdan verilen glukozun, damardan (intravenöz) verilen aynı miktar glukoza göre çok daha fazla insülin salınımına yol açtığı gözleniyor. Bu 'inkretin etkisinden' sorumlu olan ve bağırsak K hücrelerinden salgılanan hormon hangisidir?",
                "options": [
                        "GIP (Glukoza Bağımlı İnsülinotropik Peptid)",
                        "Kolesistokinin",
                        "Glukagon",
                        "Sekretin",
                        "Motilin"
                ],
                "answer": "GIP (Glukoza Bağımlı İnsülinotropik Peptid)",
                "correctAnswer": 0,
                "explanation": "Ağızdan glukoz alımında insülin salgısını artıran inkretin etkisinden K hücrelerinden salgılanan GIP (Glukoza Bağımlı İnsülinotropik Peptid) sorumludur.",
                "id": "v4_biyo_1"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Şiddetli bir enfeksiyon tablosuyla hastaneye yatırılan hastanın laboratuvar testlerinde akut faz reaktanları inceleniyor. Aşağıdaki plazma proteinlerinden hangisinin bu hastada inflamasyona yanıt olarak kan düzeyinin artması beklenmez?",
                "options": [
                        "C-Reaktif Protein (CRP)",
                        "Haptoglobin",
                        "Fibrinojen",
                        "Albumin",
                        "Ferritin"
                ],
                "answer": "Albumin",
                "correctAnswer": 3,
                "explanation": "Albumin bir negatif akut faz reaktanıdır; inflamasyon, enfeksiyon veya doku hasarı durumunda sentezi azalır. CRP, Haptoglobin, Fibrinojen ve Ferritin pozitif akut faz reaktanlarıdır.",
                "id": "v4_biyo_2"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Şiddetli baş ağrısı, çarpıntı ve terleme atakları ile acil servise başvuran hastada adrenal medulla kaynaklı bir tümör olan feokromositoma şüpheleniliyor. Bu hastada tanıyı kesinleştirmek için 24 saatlik idrarda bakılması gereken katekolamin yıkım son ürünü aşağıdakilerden hangisidir?",
                "options": [
                        "5-HIAA",
                        "VMA (Vanilmandelik asit)",
                        "Homojentisik asit",
                        "Ürik asit",
                        "Kreatinin"
                ],
                "answer": "VMA (Vanilmandelik asit)",
                "correctAnswer": 1,
                "explanation": "Katekolaminlerin (adrenalin, noradrenalin) MAO ve COMT enzimleri ile yıkımları sonucunda idrarla atılan son yıkım ürünleri VMA (Vanilmandelik asit) ve metanefrinlerdir. Feokromositoma tanısında ölçülürler.",
                "id": "v4_biyo_3"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Otoimmün tiroiditi olan bir hastada boyun cerrahisi sonrası kaslarda kasılma (tetani) ve karıncalanma saptanıyor. Laboratuvarda kanda kalsiyum düzeyi düşük bulunuyor. PTH (Parathormon) düzeyinin de sıfıra yakın olduğu bu hastada, böbreklerden kalsiyum geri emiliminin durması dışında, kemiklerden kalsiyumun kana geçişini sağlayan hangi hücrenin aktivitesi durmuştur?",
                "options": [
                        "Osteoblast",
                        "Osteosit",
                        "Osteoklast",
                        "Kondrosit",
                        "Parafolliküler C hücresi"
                ],
                "answer": "Osteoklast",
                "correctAnswer": 2,
                "explanation": "Parathormon (PTH) kan kalsiyumu düştüğünde kemikten kalsiyum ve fosforu kana geçirmek için osteoklast aktivitesini uyarır. PTH yokluğunda bu kemik yıkım mekanizması durur.",
                "id": "v4_biyo_4"
        },

    // Fatih Kar (2 Soru - Çıkmış tarzı)
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Vücuda alınan toksik bir ksenobiyotik, karaciğerde mikrozomal enzimler tarafından inaktive edilmek isteniyor. Bu sürecin Faz I reaksiyonlarında, moleküle bir oksijen atomu eklenerek hidroksilasyon yapan ve ilacı Faz II'ye hazırlayan temel enzim sistemi hangisidir?",
                "options": [
                        "UDP-Glukuronil Transferaz",
                        "Sitokrom P450 (CYP)",
                        "Glutatyon S-Transferaz (GST)",
                        "Monoamin Oksidaz (MAO)",
                        "Sülfotransferaz"
                ],
                "answer": "Sitokrom P450 (CYP)",
                "correctAnswer": 1,
                "explanation": "Faz I reaksiyonları (modifikasyon, hidroksilasyon vb.) çoğunlukla mikrozomal Sitokrom P450 (CYP) enzim sistemi tarafından gerçekleştirilir. Amaç moleküle reaktif fonksiyonel bir grup eklemektir.",
                "id": "v4_biyo_5"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "İki aylık kız bebek, gelişme geriliği ve nöbet geçirme şikayetiyle değerlendiriliyor. Ailesi bebeğin bezinden ağır bir fare küfü kokusu geldiğini fark ediyor. Bebeğin saçları yaşıtlarına göre çok daha sarı, gözleri mavidir. Bu hastada fenilalanin tirozine dönüşemediği için birikmektedir. Eksik olan enzim aşağıdakilerden hangisidir?",
                "options": [
                        "Homojentisik asit oksidaz",
                        "Tirozinaz",
                        "Dallı zincirli alfa-keto asit dehidrogenaz",
                        "Sistatiyonin beta-sentaz",
                        "Fenilalanin Hidroksilaz"
                ],
                "answer": "Fenilalanin Hidroksilaz",
                "correctAnswer": 4,
                "explanation": "Fenilketonüride (PKU) Fenilalanin Hidroksilaz enzimi eksiktir. İdrarda küf/fare kokusu, zihinsel gerilik ve hipopigmentasyon (melanin azlığına bağlı sarı saç/mavi göz) karakteristiktir.",
                "id": "v4_biyo_6"
        },

    // Said Altıkat (2 Soru)
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Nükleer hormon reseptörlerinin genetik dizilimi araştırılıyor. Reseptörün DNA üzerinde bağlanacağı bölgeyi tanıması ve spesifik gen sekanslarına tutunması, reseptör yapısındaki hangi bölge veya yapı sayesinde gerçekleşir?",
                "options": [
                        "Hormon Yanıt Elemanı (HRE)",
                        "Çinko parmak (Zinc-finger) yapıları içeren DNA bağlayıcı bölge",
                        "N-Terminal AF-1 transaktivasyon alanı",
                        "G proteini alfa alt birimi",
                        "Ligand bağlayıcı bölge (LBD)"
                ],
                "answer": "Çinko parmak (Zinc-finger) yapıları içeren DNA bağlayıcı bölge",
                "correctAnswer": 1,
                "explanation": "Hücre içi (nükleer/sitoplazmik) reseptörlerin DNA bağlayıcı bölgeleri (DBD), 'çinko parmak' yapıları içerir ve DNA'nın spesifik dizilerine bağlanmayı sağlar.",
                "id": "v4_biyo_7"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Akromegali şüphesiyle değerlendirilen bir hastada Büyüme Hormonunun (GH) hücre içi sinyal yolağını kullanma biçimi inceleniyor. Kendi içsel tirozin kinaz aktivitesi olmayan ancak hücre içinde hedefine ulaşmak için sitoplazmik non-reseptör kinazları kullanan bu hormonun aktivasyon yolağı aşağıdakilerden hangisidir?",
                "options": [
                        "cAMP / Protein Kinaz A",
                        "IP3 / Kalsiyum",
                        "JAK-STAT yolağı",
                        "cGMP / Protein Kinaz G",
                        "Fosfolipaz A2"
                ],
                "answer": "JAK-STAT yolağı",
                "correctAnswer": 2,
                "explanation": "Büyüme hormonu ve prolaktin, sitokin reseptör ailesindendir. Kendi tirozin kinaz aktiviteleri yoktur, hücre içinde JAK-STAT yolağını aktive ederek etki gösterirler.",
                "id": "v4_biyo_8"
        },

    // Fatmagül Can (2 Soru)
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Safra asitleri karaciğerde kolesterolden sentezlenerek safranın en önemli katabolik yolunu oluştururlar. Kolesterolün primer safra asitlerine (kolik asit ve kenodeoksikolik asit) dönüşümünde hız kısıtlayıcı olan ve C vitamini kofaktörlüğüne ihtiyaç duyan enzim hangisidir?",
                "options": [
                        "HMG-CoA Redüktaz",
                        "Kolesterol esteraz",
                        "Kolesterol 7-alfa-hidroksilaz",
                        "7-alfa-dehidroksilaz",
                        "Siklooksijenaz"
                ],
                "answer": "Kolesterol 7-alfa-hidroksilaz",
                "correctAnswer": 2,
                "explanation": "Primer safra asitlerinin (kolik asit) sentezindeki hız kısıtlayıcı basamak Kolesterol 7-alfa-hidroksilaz enzimidir (Sitokrom P450 ailesinden bir enzimdir).",
                "id": "v4_biyo_9"
        },
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Safra yolları tamamen tıkanmış (tıkanma sarılığı) bir hastanın idrar tetkikinde makroskobik olarak idrarın çay renginde olduğu gözleniyor. İdrar dipstick testinde aşağıdaki bulgulardan hangisinin saptanması bu tanıyı destekler?",
                "options": [
                        "Sadece indirekt (anjuge olmayan) bilirubin pozitifliği",
                        "Keton cisimlerinde artış",
                        "Sadece konjuge (direkt) bilirubin pozitifliği",
                        "Ürobilinojen seviyesinde belirgin artış",
                        "Nitrit pozitifliği"
                ],
                "answer": "Sadece konjuge (direkt) bilirubin pozitifliği",
                "correctAnswer": 2,
                "explanation": "Tıkanma sarılığında safranın bağırsağa akışı durur, kanda artan suda çözünür konjuge (direkt) bilirubin idrara geçer. Ürobilinojen ise bağırsakta oluşamadığı için idrarda azalır/yoktur.",
                "id": "v4_biyo_10"
        },

    // Ayşe Koçak Sezgin (1 Soru)
    {
                "subject": "Tıbbi Biyokimya",
                "question": "Doğum indüksiyonu için oksitosin infüzyonu yapılan bir hastanın uterus kontraksiyonları düzenleniyor. Doğum sürecinde oksitosin haricinde, doğum kanalının ve pelvik bağların (simfizis pubis) biyokimyasal olarak gevşemesini (relaksasyon) sağlayarak fötusun geçişini kolaylaştıran hormon hangisidir?",
                "options": [
                        "Prolaktin",
                        "Relaksin",
                        "Progesteron",
                        "Östradiol",
                        "Koryonik Somatomammotropin"
                ],
                "answer": "Relaksin",
                "correctAnswer": 1,
                "explanation": "Doğum anında bağ dokusu ve pelvik eklemlerin gevşemesini, serviksin açılmasını kolaylaştıran hormon Relaksin'dir.",
                "id": "v4_biyo_11"
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
        "question": "Otonom sinir sistemi farmakolojisinde, parasempatik sistemin aktivasyonuna bağlı olarak gelişen 'Muskarinik' etkiler arasında aşağıdakilerden hangisi yer almaz?",
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
        "question": "Asetilkolinesteraz enzimini geri dönüşümsüz olarak inhibe eden ve tarım ilacı zehirlenmelerine neden olan gruptaki ajanların zehirlenmesinde antidot olarak hangi ilaçlar birlikte kullanılır?",
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
        "question": "Karaciğerde sitokrom P450 enzim sistemini indükleyen bir ilaç kullanan hastaya, aynı enzimle metabolize olan ikinci bir ilaç verildiğinde aşağıdakilerden hangisinin olması beklenir?",
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
        "question": "Adrenerjik reseptör antagonistleri astımlı hastalarda kullanıldığında, bronşlarda bulunan hangi reseptörün bloke olması sonucu tehlikeli bir bronkospazma neden olurlar?",
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
        "question": "Kalp yetmezliği tedavisinde kullanılan Kardiyak Glikozidlerin hücresel düzeydeki temel etki mekanizması aşağıdakilerden hangisidir?",
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
