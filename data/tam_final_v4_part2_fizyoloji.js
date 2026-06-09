window.examsData = window.examsData || {};

// V4 PART 2 - FİZYOLOJİ (29 SORU)
// Dağılım:
// Ali Koray Kaya: 9 Soru (3 GİS, 6 Endokrin - 1 GİS Hormon, 1 Genital Garanti. Vücut etkileri odaklı)
// Hatice Solak: 9 Soru (Dolaşım ve Böbrek)
// Raziye Akcılar: 8 Soru (Nörofizyoloji ve Solunum)
// Esra Tekin: 3 Soru (Çıkmış/Klasik sorular)

window.examsData['tam_kapsamli_final_v4'] = window.examsData['tam_kapsamli_final_v4'] || {
    "title": "Zirve Deneme Sınavı 1 (Temel Kurul Dağılımı)",
    "description": "Tüm hocaların 2024-2025 çıkmış soru analizlerine, hoca-konu eşleştirmelerine ve bizzat hocaların kendi ağzından verdikleri tüyolara dayanılarak hazırlanan 120 soruluk KESİN FİNAL SİMÜLASYONU.",
    "questions": []
};

const fizyolojiQuestions = [
    // --- ALİ KORAY KAYA (9 Soru: 3 GİS, 6 Endokrin) ---
    // GİS Hormonu Garanti Soru
    {
        "id": "v4_fizyo_1",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Mide asit salgısı üzerine etki eden gastrointestinal hormonlar ve vücuda etkileri ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Gastrin, paryetal hücreleri uyararak mide asit salgısını artırır.",
            "Sekretin, pankreastan bikarbonat salgısını uyararak asidi nötralize eder.",
            "Kolesistokinin (CCK), mide boşalmasını hızlandırıcı etkiye sahiptir.",
            "Somatostatin, gastrin salgısını inhibe ederek asit üretimini baskılar.",
            "Histamin, H2 reseptörleri üzerinden mide asit salgısını güçlü bir şekilde uyarır."
        ],
        "answer": "Kolesistokinin (CCK), mide boşalmasını hızlandırıcı etkiye sahiptir.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "CCK, mide boşalmasını yavaşlatır (inhibe eder) ki yağlı içerik duodenuma çok hızlı geçmesin ve sindirim için zaman kazanılsın."
    },
    // GİS Diğer
    {
        "id": "v4_fizyo_2",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "İnce bağırsaklarda besin maddelerinin emilimi ve vücuda etkileri ile ilgili olarak aşağıdakilerden hangisi söylenemez?",
        "options": [
            "Demir emilimi büyük oranda duodenumdan gerçekleşir.",
            "B12 vitamini emilimi terminal ileumda, intrinsik faktör varlığında olur.",
            "Safra tuzları, terminal ileumdan emilerek enterohepatik sirkülasyona katılır.",
            "Fruktoz, bağırsak epitelinden aktif transport ile (SGLT1) kana geçer.",
            "Yağ asitleri, misel oluşturarak epitel hücresine difüzyonla girer."
        ],
        "answer": "Fruktoz, bağırsak epitelinden aktif transport ile (SGLT1) kana geçer.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Fruktoz, bağırsak epitelinden GLUT-5 taşıyıcısı ile 'kolaylaştırılmış difüzyon' (aktif transport değil) yoluyla emilir. Glukoz ve galaktoz SGLT1 ile aktif emilir."
    },
    // GİS Diğer
    {
        "id": "v4_fizyo_3",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Gastrointestinal motilite reflekslerinden olan ve midedeki gerilmenin ileum motilitesini artırarak ileoçekal sfinkteri gevşettiği refleks aşağıdakilerden hangisidir?",
        "options": [
            "Gastrokolik refleks",
            "Enterogastrik refleks",
            "Gastroileal refleks",
            "Koloileal refleks",
            "Defekasyon refleksi"
        ],
        "answer": "Gastroileal refleks",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Gastroileal refleks; midede besin birikimi ile uyarılır, ileumun kasılmasını ve ileoçekal kapağın açılarak içeriğin çekuma geçmesini sağlar."
    },
    // Endokrin (Genital Garanti)
    {
        "id": "v4_fizyo_4",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Menstrüel siklus sırasında vücutta meydana gelen hormonal değişimlerin etkileri ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Foliküler fazda (ilk yarı) baskın hormon olan östrojen, endometriyumda proliferasyona yol açar.",
            "Ovulasyonu (yumurtlamayı) tetikleyen temel olay, siklus ortasındaki ani LH pikidir.",
            "Luteal fazda korpus luteumdan yoğun şekilde salgılanan progesteron, bazal vücut sıcaklığını artırır.",
            "Östrojen, servikal mukusu kalınlaştırarak ve yapışkan hale getirerek sperm geçişini zorlaştırır.",
            "Progesteron, endometriyumda sekretuvar değişiklikler yaparak embriyo implantasyonuna hazırlar."
        ],
        "answer": "Östrojen, servikal mukusu kalınlaştırarak ve yapışkan hale getirerek sperm geçişini zorlaştırır.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Tam tersine östrojen, servikal mukusu ince, sulu ve sperm geçişine çok uygun (fern/eğrelti otu manzarası) hale getirir. Progesteron ise mukusu kalınlaştırarak geçişi zorlaştırır."
    },
    // Endokrin Diğer 5
    {
        "id": "v4_fizyo_5",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Kan kalsiyum regülasyonu ve hormonların vücuda etkileri incelendiğinde, aşağıdakilerden hangisi Parathormon'un etkilerinden biri değildir?",
        "options": [
            "Böbreklerden kalsiyum geri emilimini artırmak.",
            "Böbreklerden fosfat atılımını artırmak (fosfatüri).",
            "Kemiklerde osteoklastik aktiviteyi uyararak kemik rezorpsiyonunu artırmak.",
            "D vitamininin böbreklerde aktif formuna (1,25-dihidroksikolekalsiferol) dönüşümünü engellemek.",
            "Bağırsaklardan kalsiyum emilimini (aktif D vitamini üzerinden) dolaylı olarak artırmak."
        ],
        "answer": "D vitamininin böbreklerde aktif formuna (1,25-dihidroksikolekalsiferol) dönüşümünü engellemek.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "PTH, böbreklerde 1-alfa hidroksilaz enzimini aktive ederek D vitamininin aktif forma dönüşümünü uyarır, engellemez."
    },
    {
        "id": "v4_fizyo_6",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Tiroid hormonlarının vücut metabolizmasına olan sistemik etkileri ile ilgili aşağıdakilerden hangisi söylenemez?",
        "options": [
            "Bazal metabolizma hızını (BMR) ve ısı üretimini belirgin şekilde artırırlar.",
            "Kalp hızını ve kalp kasının kasılma gücünü (beta adrenerjik reseptör sayısını artırarak) artırırlar.",
            "Kan kolesterol seviyesini artırarak hiperkolesterolemiye yol açarlar.",
            "Çocuklarda normal beyin ve iskelet gelişimi için mutlak gereklidirler.",
            "Gastrointestinal sistemin motilitesini ve sindirim salgılarını artırırlar."
        ],
        "answer": "Kan kolesterol seviyesini artırarak hiperkolesterolemiye yol açarlar.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Tiroid hormonları karaciğerde LDL reseptör sayısını artırarak kandan kolesterolün temizlenmesini hızlandırır; yani kan kolesterolünü düşürürler. (Hipotiroidide kolesterol yükselir)."
    },
    {
        "id": "v4_fizyo_7",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Sürrenal korteks hormonlarından kortizolün vücuda etkileri ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Karaciğerde glukoneogenezi uyararak kan şekerini yükseltir.",
            "Protein katabolizmasını (yıkımını) artırarak kaslarda zayıflamaya neden olabilir.",
            "Stres durumlarında vücudun direncini sağlamada kritik rol oynar.",
            "İnflamasyon ve immün yanıtı güçlü bir şekilde baskılar (immünosupresif etki).",
            "Böbreklerde sodyum atılımını ve potasyum tutulumunu güçlü bir şekilde artırır."
        ],
        "answer": "Böbreklerde sodyum atılımını ve potasyum tutulumunu güçlü bir şekilde artırır.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Sodyum atıp potasyum tutan değil, tam tersi (mineralokortikoid etki ile) sodyum tutup potasyum atan etki gösterir. Bu etki asıl olarak Aldosteron'a aittir, ancak yüksek doz kortizol de sodyum tutulumu yapar."
    },
    {
        "id": "v4_fizyo_8",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Hipotalamus-Hipofiz aksında yer alan hormonların hedef dokularındaki etkileri düşünüldüğünde, Oksitosin hormonu için hangisi doğrudur?",
        "options": [
            "Böbrek toplayıcı kanallarında suyun geri emilimini sağlar.",
            "Meme bezlerinde süt yapımını (sentezini) doğrudan uyarır.",
            "Uterusta düz kasların kasılmasını sağlayarak doğuma yardımcı olur.",
            "Adenohipofizden salgılanan bir hormondur.",
            "Erkeklerde testosteron salgısını baskılayıcı rolü vardır."
        ],
        "answer": "Uterusta düz kasların kasılmasını sağlayarak doğuma yardımcı olur.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Oksitosin nörohipofizden salınır, uterusta kasılmayı uyarır ve memede sütün kanallara fışkırmasını (süt ejeksiyonunu) sağlar. (Süt yapımını prolaktin sağlar)."
    },
    {
        "id": "v4_fizyo_9",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Kan şekerinin düzenlenmesinde rol oynayan pankreas adacık hormonları ve etkileri hakkında aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "İnsülin, çizgili kas ve yağ dokusuna glukoz girişini (GLUT-4 aracılığıyla) artırır.",
            "Glukagon, karaciğerde glikojenoliz ve glukoneogenezi uyararak kan şekerini artırır.",
            "İnsülin, hücre içine potasyum (K+) girişini uyararak kanda hipokalemiye neden olabilir.",
            "Somatostatin, hem insülin hem de glukagon salgısını inhibe edici etki gösterir.",
            "Glukagon, kas hücrelerindeki glikojeni doğrudan yıkarak kana glukoz olarak verilmesini sağlar."
        ],
        "answer": "Glukagon, kas hücrelerindeki glikojeni doğrudan yıkarak kana glukoz olarak verilmesini sağlar.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Kas hücrelerinde glukoz-6-fosfataz enzimi olmadığı için, kasta yıkılan glikojen kana glukoz olarak geçemez (kas glikojeni sadece kendi enerjisi için kullanılır). Glukagon kan şekerini karaciğer glikojenini yıkarak artırır."
    },

    // --- HATİCE SOLAK (9 Soru: Dolaşım ve Böbrek) ---
    {
        "id": "v4_fizyo_10",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Kardiyak siklus sırasında sol ventrikül basınç-hacim değişiklikleri incelendiğinde, İzovolümetrik Kontraksiyon evresi için hangisi doğrudur?",
        "options": [
            "Bu evrede mitral kapak açık, aort kapağı kapalıdır.",
            "Ventrikül içindeki kanın hacmi hızla azalır.",
            "Kalp kası kasılmakta, ancak tüm kapaklar kapalı olduğu için ventrikül basıncı hızla yükselmektedir.",
            "Bu evrenin başlangıcında 2. kalp sesi (S2) duyulur.",
            "Aortik kapak açıldığı anda bu evre sona erer ve izovolümetrik relaksasyon başlar."
        ],
        "answer": "Kalp kası kasılmakta, ancak tüm kapaklar kapalı olduğu için ventrikül basıncı hızla yükselmektedir.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "İzovolümetrik kontraksiyon fazında hem AV (mitral) kapak hem de semilunar (aort) kapak kapalıdır. Kan bir yere gidemediği için hacim sabit kalır (izovolümetrik), kasılma nedeniyle basınç hızla artar."
    },
    {
        "id": "v4_fizyo_11",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Sağlıklı bir insanda Frank-Starling kalp yasasının temel fizyolojik anlamı aşağıdakilerden hangisidir?",
        "options": [
            "Kalp hızı arttıkça koroner kan akımının azalmasıdır.",
            "Kalbe venöz dönüş (preload) arttıkça, ventrikül kasının daha fazla gerilmesi ve bir sonraki atımda daha güçlü kasılarak artan hacmi fırlatmasıdır.",
            "Arteriyel kan basıncı (afterload) arttıkça, kalbin atım hacminin otomatik olarak yükselmesidir.",
            "Kalbin parasempatik uyarı ile yavaşlatılma yeteneğidir.",
            "Oksijen yetersizliğinde miyokardın kasılma gücünün düşmesidir."
        ],
        "answer": "Kalbe venöz dönüş (preload) arttıkça, ventrikül kasının daha fazla gerilmesi ve bir sonraki atımda daha güçlü kasılarak artan hacmi fırlatmasıdır.",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Frank-Starling yasası: Miyokard lifleri diyastolde ne kadar gerilirse (end-diyastolik volüm ne kadar artarsa), kasılma o kadar güçlü olur."
    },
    {
        "id": "v4_fizyo_12",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Elektrokardiyografi dalgaları ile kardiyak olaylar eşleştirildiğinde aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "P dalgası: Atriyumların depolarizasyonu.",
            "QRS kompleksi: Ventriküllerin depolarizasyonu.",
            "T dalgası: Ventriküllerin repolarizasyonu.",
            "PR aralığı: AV düğümdeki iletim gecikmesini yansıtır.",
            "ST segmenti: Atriyumların repolarizasyonunu yansıtır."
        ],
        "answer": "ST segmenti: Atriyumların repolarizasyonunu yansıtır.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Atriyum repolarizasyonu QRS kompleksi içine gizlenmiştir. ST segmenti ventriküllerin depolarize durumda kaldığı (plato fazı) izoelektrik dönemdir."
    },
    {
        "id": "v4_fizyo_13",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Kapiller düzeyde dokulara sıvı geçişini düzenleyen Starling kuvvetleri düşünüldüğünde, aşağıdakilerden hangisi dokular arası mesafeye sıvı kaçışını kolaylaştırır?",
        "options": [
            "Kapiller hidrostatik basıncın (Pc) azalması.",
            "Plazma kolloid ozmotik basıncının (Πc) artması.",
            "Lenfatik drenajın hızlanması.",
            "Doku (İnterstisyel sıvı) kolloid ozmotik basıncının (Πi) artması.",
            "Doku hidrostatik basıncının (Pi) artması."
        ],
        "answer": "Doku (İnterstisyel sıvı) kolloid ozmotik basıncının (Πi) artması.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "İnterstisyel kolloid ozmotik basınç (Πi), sıvıyı damar dışına (dokuya) çeken bir kuvvettir. Artması ödemi kolaylaştırır. Plazma proteinlerinin (albümin) dokuya kaçtığı enflamasyon durumlarında görülür."
    },
    {
        "id": "v4_fizyo_14",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Normal şartlarda Glomerüler Filtrasyon Hızı'nı belirleyen kuvvetlerden hangisi filtrasyonu engelleyici bir basınç oluşturur?",
        "options": [
            "Glomerüler kapiller hidrostatik basınç",
            "Bowman kapsülü kolloid ozmotik basıncı (Normalde sıfıra yakındır)",
            "Glomerüler kapiller kolloid ozmotik (onkötik) basınç",
            "Sistemik arteriyel sistolik basınç",
            "Renal kan akımının plazma fraksiyonu"
        ],
        "answer": "Glomerüler kapiller kolloid ozmotik (onkötik) basınç",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Glomerüler kapiller içindeki proteinlerin oluşturduğu kolloid ozmotik basınç, sıvıyı kapiller içinde tutmaya (Bowman boşluğuna geçmesini engellemeye) çalışır. Bowman kapsülü hidrostatik basıncı da engelleyicidir."
    },
    {
        "id": "v4_fizyo_15",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Renin-Anjiyotensin-Aldosteron Sistemi ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Renin, jukstaglomerüler aparat tarafından kan basıncı veya böbrek kan akımı azaldığında salgılanır.",
            "Anjiyotensin dönüştürücü enzim (ACE), akciğer kapiller endotelinde yoğun olarak bulunur.",
            "Anjiyotensin II, afferent arteriyolü efferent arteriyole göre çok daha güçlü kasar.",
            "Anjiyotensin II, sürrenal korteksten aldosteron salınımını uyarır.",
            "Aldosteron, toplayıcı kanallarda sodyum geri emilimini artırır."
        ],
        "answer": "Anjiyotensin II, afferent arteriyolü efferent arteriyole göre çok daha güçlü kasar.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Anjiyotensin II, düşük konsantrasyonlarda öncelikle EFFERENT arteriyolü kasar. Bu sayede glomerüler basınç artar ve kan basıncı düştüğünde bile GFR korunmaya çalışılır."
    },
    {
        "id": "v4_fizyo_16",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Böbrek tubüllerinde gerçekleşen geri emilim işlemleri incelendiğinde, glukozun ve aminoasitlerin %100'e yakını nefronun hangi bölümünden geri emilir?",
        "options": [
            "Proksimal kıvrımlı tübül",
            "Henle kulpu inen kolu",
            "Henle kulpu çıkan kalın kolu",
            "Distal kıvrımlı tübül",
            "Toplayıcı kanallar"
        ],
        "answer": "Proksimal kıvrımlı tübül",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Sağlıklı bir kişide filtre edilen glukoz ve aminoasitlerin tamamına yakını proksimal tübülde sodyuma bağımlı sekonder aktif transport ile geri emilir."
    },
    {
        "id": "v4_fizyo_17",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Henle kulpunun ters akım çoğaltıcı mekanizması ile ilgili hangisi doğrudur?",
        "options": [
            "İnen kol suya kesinlikle geçirgen değildir.",
            "Çıkan kalın kol sodyum, potasyum ve kloru aktif olarak geri emer ancak suya geçirgen değildir.",
            "Ters akım mekanizması medüller interstisyumu izotonik (300 mOsm/L) tutmaya yarar.",
            "Vasa recta, ters akım çoğaltıcısını oluşturan değil, bozan bir damar sistemidir.",
            "İnen kol boyunca tübül sıvısının ozmolaritesi giderek azalır."
        ],
        "answer": "Çıkan kalın kol sodyum, potasyum ve kloru aktif olarak geri emer ancak suya geçirgen değildir.",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Henle çıkan kalın kolu suya geçirgen değildir ve Na-K-2Cl pompası ile tuzu medüller interstisyuma pompalar. Bu sayede medüller hiperozmolarite (konsantrasyon gradyanı) yaratılır."
    },
    {
        "id": "v4_fizyo_18",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Vücutta asit-baz dengesini korumaya yönelik böbrek kompansasyonu sırasında, asidoz durumunda böbrekler aşağıdakilerden hangisini yapar?",
        "options": [
            "Bikarbonat (HCO3-) atılımını artırır.",
            "Tübüler hidrojen (H+) atılımını durdurur.",
            "Amonyak (NH3) sentezini ve amonyum (NH4+) atılımını artırır.",
            "Titre edilebilir asit atılımını sıfıra indirir.",
            "Solunum hızını artırarak CO2 atılımını sağlar."
        ],
        "answer": "Amonyak (NH3) sentezini ve amonyum (NH4+) atılımını artırır.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Asidozda böbrekler fazla asidi (H+) idrara atmak zorundadır. Bunu serbest H+ olarak çok atamayacağı için idrardaki tamponlara (Fosfat) ve kendi sentezlediği amonyağa bağlayarak amonyum (NH4+) şeklinde atar."
    },

    // --- RAZİYE AKCILAR (8 Soru: Nörofizyoloji ve Solunum) ---
    {
        "id": "v4_fizyo_19",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Motor kontrol yollarından Üst Motor Nöron ve Alt Motor Nöron lezyonlarının klinik bulguları karşılaştırıldığında aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Üst motor nöron lezyonlarında spastik paralizi görülür.",
            "Alt motor nöron lezyonlarında kas atrofisi belirgin ve hızlıdır.",
            "Üst motor nöron lezyonlarında derin tendon refleksleri (DTR) hiperaktiftir.",
            "Alt motor nöron lezyonlarında Babinski bulgusu tipik olarak pozitiftir.",
            "Alt motor nöron lezyonlarında fasikülasyonlar (kas seğirmeleri) gözlenebilir."
        ],
        "answer": "Alt motor nöron lezyonlarında Babinski bulgusu tipik olarak pozitiftir.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Pozitif Babinski bulgusu (ayak tabanı çizildiğinde başparmağın ekstansiyonu) Üst Motor Nöron lezyonunun (kortikospinal yol hasarının) en karakteristik bulgusudur."
    },
    {
        "id": "v4_fizyo_20",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Uyku fizyolojisinde Non-REM ve REM uykusu özellikleri için hangisi doğrudur?",
        "options": [
            "REM uykusu süresince iskelet kası tonusu en yüksek seviyesindedir.",
            "Rüyaların büyük çoğunluğu NREM evre 3'te görülür ve rahatlıkla hatırlanır.",
            "REM uykusu sırasında EEG (elektroensefalografi) uyanıklık benzeri hızlı ve düşük voltajlı beta dalgaları gösterir.",
            "Yaş ilerledikçe toplam uyku süresi içinde REM uykusunun oranı artar.",
            "Uyurgezerlik ve gece terörü (pavor nocturnus) tipik olarak REM uykusu sırasında gerçekleşir."
        ],
        "answer": "REM uykusu sırasında EEG (elektroensefalografi) uyanıklık benzeri hızlı ve düşük voltajlı beta dalgaları gösterir.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "REM uykusu, 'paradoksal uyku' olarak da bilinir. Kişi derin uykudadır, kaslar felç halindedir ama beyin (EEG) uyanıkmış gibi aktiftir."
    },
    {
        "id": "v4_fizyo_21",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Akciğer hacim ve kapasiteleri düşünüldüğünde, zorlu ve maksimum bir ekspirasyondan sonra akciğerlerde kalan hava miktarına ne ad verilir?",
        "options": [
            "Tidal volüm",
            "Vital kapasite",
            "Fonksiyonel rezidüel kapasite (FRC)",
            "Ekspiratuvar yedek volüm (ERV)",
            "Rezidüel volüm (RV)"
        ],
        "answer": "Rezidüel volüm (RV)",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Kişi ne kadar zorlarsa zorlasın akciğerleri tamamen boşaltamaz. Maksimum ekspirasyon sonrası kalan bu havaya Rezidüel Volüm denir ve spirometre ile doğrudan ölçülemez."
    },
    {
        "id": "v4_fizyo_22",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Solunum gazlarının kan yoluyla taşınması ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Kandaki oksijenin büyük çoğunluğu (%97) hemoglobin ile kimyasal olarak bağlı taşınır.",
            "Kandaki karbondioksitin (CO2) en büyük kısmı plazmada bikarbonat (HCO3-) formunda taşınır.",
            "Bohr etkisine göre; kanda pCO2 ve hidrojen iyonu (asidite) artışı, hemoglobinin oksijene afinitesini azaltarak oksijenin dokulara bırakılmasını kolaylaştırır.",
            "Haldane etkisine göre; oksijenin hemoglobine bağlanması, hemoglobinin CO2 taşıma kapasitesini artırır.",
            "Eritrositlerdeki karbonik anhidraz enzimi, CO2'nin suya katılarak karbonik asit oluşturmasını hızlandırır."
        ],
        "answer": "Haldane etkisine göre; oksijenin hemoglobine bağlanması, hemoglobinin CO2 taşıma kapasitesini artırır.",
        "correctAnswer": 3,
        "correctAnswer": 3,
        "explanation": "Haldane etkisine göre; akciğerlerde oksijenin hemoglobine bağlanması, hemoglobinin CO2'ye olan afinitesini AZALTIR (artırmaz). Bu sayede CO2 hemoglobinden ayrılarak akciğerlere bırakılır."
    },
    {
        "id": "v4_fizyo_23",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Santral ve periferik kemoreseptörlerin solunumun düzenlenmesindeki rolleri için hangisi doğrudur?",
        "options": [
            "Santral kemoreseptörler kandaki pO2 düşüklüğüne (hipoksiye) karşı çok duyarlıdır.",
            "Periferik kemoreseptörler sadece karotid cisimde bulunur, aortik cisimde bulunmaz.",
            "Santral kemoreseptörler kan-beyin bariyerini geçebilen CO2'nin BOS'ta (beyin omurilik sıvısı) oluşturduğu H+ artışına duyarlıdır.",
            "Arteriyel pO2 60 mmHg'nin altına düştüğünde solunumu asıl uyaran merkez, santral kemoreseptörlerdir.",
            "Periferik kemoreseptörler arteriyel pH değişikliklerine yanıt vermezler."
        ],
        "answer": "Santral kemoreseptörler kan-beyin bariyerini geçebilen CO2'nin BOS'ta (beyin omurilik sıvısı) oluşturduğu H+ artışına duyarlıdır.",
        "correctAnswer": 2,
        "correctAnswer": 2,
        "explanation": "Kandaki H+ iyonları kan-beyin bariyerini iyi geçemez, ancak CO2 rahatlıkla geçer. BOS'a geçen CO2 burada H+ oluşturur ve santral kemoreseptörleri doğrudan uyararak solunumu artırır. Oksijen düşüklüğünü sezen asıl yapı periferik kemoreseptörlerdir."
    },
    {
        "id": "v4_fizyo_24",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Akciğer yüzey gerilimini azaltan Sürfaktan maddesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "Alveollerin tip II pnömosit hücreleri tarafından sentezlenir.",
            "Ana bileşeni bir fosfolipid olan dipalmitoilfosfatidilkolin'dir (DPPC).",
            "Alveollerin ekspirasyon sırasında çökmesini (kollapsını) engeller.",
            "Akciğer kompliyansını (esneyebilirliğini) artırarak solunum işini kolaylaştırır.",
            "Prematüre bebeklerde sürfaktan üretiminin yetersiz olması intraplevral basıncı artırarak pnömotoraksa neden olur."
        ],
        "answer": "Prematüre bebeklerde sürfaktan üretiminin yetersiz olması intraplevral basıncı artırarak pnömotoraksa neden olur.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Sürfaktan eksikliği prematüre bebeklerde Yenidoğan Respiratuvar Distres Sendromuna (RDS / Hyalin membran hastalığı) neden olur. Alveoller kollabe olur (çöker), pnömotoraks temel bulgu değildir."
    },
    {
        "id": "v4_fizyo_25",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Solunumun nöral kontrol merkezi beyin sapında bulunur. N. vagus üzerinden akciğerlerdeki gerilme reseptörlerinden gelen inhibitör sinyallerle inspirasyonu sonlandıran ve akciğerlerin aşırı şişmesini önleyen mekanizma hangisidir?",
        "options": [
            "Hering-Breuer enflasyon refleksi",
            "Bainbridge refleksi",
            "Cushing refleksi",
            "Baroreseptör refleks",
            "Apnöstik merkez aktivasyonu"
        ],
        "answer": "Hering-Breuer enflasyon refleksi",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Hering-Breuer refleksi, tidal volüm 1.5 litreyi aştığında akciğerlerdeki gerilme reseptörlerinin uyarılması ve vagus üzerinden inspirasyonun kesilmesi refleksidir."
    },
    {
        "id": "v4_fizyo_26",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Egzersiz sırasında solunum sistemindeki fizyolojik değişiklikler ile ilgili hangisi söylenemez?",
        "options": [
            "Solunum hızı ve derinliği artarak dakika ventilasyonu yükselir.",
            "Kandaki pO2 seviyesi ciddi şekilde düşer ve bu durum solunum artışının temel nedenidir.",
            "Oksijenin dokulara bırakılması artan ısı ve laktik asit nedeniyle kolaylaşır (Sağa kayma).",
            "Kassal aktivitenin motor korteksten gelen kollaterallerle solunum merkezini öngörüsel olarak uyarması etkilidir.",
            "V/Q (Ventilasyon/Perfüzyon) oranı akciğerin genelinde normale ve dengeye daha çok yaklaşır."
        ],
        "answer": "Kandaki pO2 seviyesi ciddi şekilde düşer ve bu durum solunum artışının temel nedenidir.",
        "correctAnswer": 1,
        "correctAnswer": 1,
        "explanation": "Normal bir kişide ağır egzersiz sırasında bile arteriyel pO2 ve pCO2 seviyeleri neredeyse normal sınırlar içinde kalır. Solunumun artmasının nedeni kanda oksijenin düşmesi değil, motor korteks kollateralleri ve eklem propriyoseptörlerinden gelen nöral sinyallerdir."
    },

    // --- ESRA TEKİN (3 Soru: Çıkmış Sorular/Duyu) ---
    {
        "id": "v4_fizyo_27",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Fotoreseptörlerin karanlık ve aydınlık adaptasyonu mekanizmaları ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?",
        "options": [
            "Karanlıkta fotoreseptör hücrenin membranında cGMP düzeyleri yüksektir.",
            "Aydınlıkta rodopsinin ışığı soğurmasıyla transdusin proteini aktive olur.",
            "Aydınlıkta cGMP fosfodiesteraz enzimi aktifleşir ve hücre içi cGMP azalır.",
            "Karanlıkta sodyum kanalları açık olduğu için fotoreseptör hücre depolarize durumdadır.",
            "Işık uyarısı fotoreseptör hücrede sodyum kanallarını açarak aksiyon potansiyeli başlatır."
        ],
        "answer": "Işık uyarısı fotoreseptör hücrede sodyum kanallarını açarak aksiyon potansiyeli başlatır.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Görmenin en büyük istisnası (paradoksu): Fotoreseptörler (basil ve koniler) KARANLIKTA depolarizedir (sodyum kanalları açıktır). Işık vurunca cGMP azalır, kanallar KAPANIR ve hücre HİPERPOLARİZE olur."
    },
    {
        "id": "v4_fizyo_28",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "İç kulakta ses dalgalarının iletimi sırasında, havadan gelen ses dalgalarının sıvı dolu kokleaya geçerken enerji kaybını önleyen 'empedans eşleşmesi' mekanizması temel olarak nasıl sağlanır?",
        "options": [
            "Timpanik zarın yüzey alanının, oval pencere alanından yaklaşık 17 kat büyük olmasıyla.",
            "İç tüy hücrelerinin endolenf içindeki potasyum iyonlarını dışarı atmasıyla.",
            "M. stapedius kasının kasılarak stapes kemikçiğinin titreşimini azaltmasıyla.",
            "Yuvarlak pencerenin oval pencere ile zıt yönlü titreşmesiyle.",
            "Dış kulak yolunun rezonans etkisiyle sesi 2000-4000 Hz bandında yükseltmesiyle."
        ],
        "answer": "Timpanik zarın yüzey alanının, oval pencere alanından yaklaşık 17 kat büyük olmasıyla.",
        "correctAnswer": 0,
        "correctAnswer": 0,
        "explanation": "Orta kulaktaki kemikçikler kaldıraç sistemi oluşturur ancak asıl empedans eşleşmesi (basınç artışı), geniş bir alan olan kulak zarından toplanan enerjinin çok daha küçük bir alan olan oval pencereye odaklanmasıyla sağlanır."
    },
    {
        "id": "v4_fizyo_29",
        "subject": "Fizyoloji",
        "subject": "Fizyoloji",
        "question": "Ağrı duyusunun iletimi ve modülasyonu ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": [
            "A-delta lifleri hızlı, keskin ve iyi lokalize edilen ağrıyı iletir.",
            "C lifleri yavaş, künt ve yanıcı tarzda ağrıyı ileten miyelinsiz liflerdir.",
            "Ağrı sinyalleri omurilikte tractus spinothalamicus lateralis yoluyla talamusa taşınır.",
            "Endojen opioidler (endorfin, enkefalin) ağrı yollarında presinaptik inhibisyon yaparak ağrıyı keser.",
            "Kalp krizi sırasındaki ağrının sol kolda hissedilmesi (yansıyan ağrı) C liflerinin hızlı iletimine bağlıdır."
        ],
        "answer": "Kalp krizi sırasındaki ağrının sol kolda hissedilmesi (yansıyan ağrı) C liflerinin hızlı iletimine bağlıdır.",
        "correctAnswer": 4,
        "correctAnswer": 4,
        "explanation": "Yansıyan ağrı (referred pain), iç organlardan gelen viseral ağrı liflerinin (C lifleri) ve deriden gelen somatik ağrı liflerinin omurilikte aynı ikinci sıra nöronunda (dermatomal kural) sinaps yapmasından kaynaklanan bir lokalizasyon hatasıdır. Hızlı iletimle ilgisi yoktur."
    }
];

window.examsData['tam_kapsamli_final_v4'].questions.push(...fizyolojiQuestions);
