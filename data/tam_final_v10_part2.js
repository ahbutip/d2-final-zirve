window.examsData = window.examsData || {};

const v10Part2 = [
    // --- TIBBİ BİYOKİMYA (11 Soru) ---
    {
        "id": "v10_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Metabolizmada Pentoz Fosfat Yolu'nun esas biyokimyasal amacı aşağıdakilerden hangisidir?",
        "options": [
            "Hücrenin ATP ihtiyacının tamamını karşılamak",
            "Glukozdan laktat üreterek anaerobik enerji sağlamak",
            "Yağ asidi ve steroid sentezi için gerekli NADPH'ı ve nükleotid sentezi için gerekli Riboz-5-Fosfat'ı üretmek",
            "Glikojeni doğrudan glikoza çevirmek",
            "Üre döngüsüne amino grubu sağlamak"
        ],
        "answer": "Yağ asidi ve steroid sentezi için gerekli NADPH'ı ve nükleotid sentezi için gerekli Riboz-5-Fosfat'ı üretmek",
        "correctAnswer": 2,
        "explanation": "Pentoz fosfat yolu enerji (ATP) üreten veya harcayan bir yol değildir. Esas amacı indirgeyici eşdeğer olan NADPH'ı (yağ asidi/steroid sentezi ve antioksidan glutatyon redüksiyonu için) ve nükleik asitlerin (DNA/RNA) yapısına girecek olan 5 karbonlu Riboz-5-fosfat şekerini üretmektir."
    },
    {
        "id": "v10_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Mitokondride Elektron Taşıma Sistemi'nde, Kompleks I, III ve IV üzerinden hidrojenler zarlar arası boşluğa pompalanırken, elektronların Kompleks III'ten Kompleks IV'e taşınmasını sağlayan, suda çözünebilen ve mobil olan elektron taşıyıcısı protein hangisidir?",
        "options": [
            "Koenzim Q (Ubikinon)",
            "Sitokrom c",
            "FMN (Flavin mononükleotid)",
            "NADH",
            "Demir-sülfür (Fe-S) merkezleri"
        ],
        "answer": "Sitokrom c",
        "correctAnswer": 1,
        "explanation": "Sitokrom c, mitokondri iç zarının dış yüzeyine gevşekçe bağlı, suda çözünen küçük bir hemoproteindir. Elektronları Kompleks III'ten alıp Kompleks IV'e (Sitokrom oksidaz) taşır. Koenzim Q (Ubikinon) ise lipit yapılı mobil bir taşıyıcıdır ve Kompleks I/II'den Kompleks III'e taşır."
    },
    {
        "id": "v10_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki lipit fraksiyonlarından hangisi, kan dolaşımında en fazla 'Trigliserit' taşıyan ve yemeklerden sonra lenf yoluyla kana geçerek plazmanın bulanık görünmesine neden olan lipoproteindir?",
        "options": [
            "HDL (Yüksek yoğunluklu lipoprotein)",
            "LDL (Düşük yoğunluklu lipoprotein)",
            "Şilomikronlar",
            "VLDL (Çok düşük yoğunluklu lipoprotein)",
            "IDL (Ara yoğunluklu lipoprotein)"
        ],
        "answer": "Şilomikronlar",
        "correctAnswer": 2,
        "explanation": "Şilomikronlar, bağırsaklardan emilen diyet (ekzojen) trigliseritlerini taşıyan, hacimce en büyük, yoğunlukça en hafif lipoproteinlerdir. Yemekten sonra kana (lenf üzerinden) geçerek serumu bulanıklaştırırlar. VLDL ise karaciğerde sentezlenen endojen trigliseritleri taşır."
    },
    {
        "id": "v10_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Kolajen sentezinde, protein zincirindeki prolin ve lizin amino asitlerinin hidroksilasyonu çapraz bağların kurulması için şarttır. Bu hidroksilasyon reaksiyonlarında 'Prozil hidroksilaz' enzimine kofaktör olarak gereken ve eksikliğinde Skorbüt hastalığına yol açan vitamin hangisidir?",
        "options": [
            "A vitamini (Retinol)",
            "B1 vitamini (Tiamin)",
            "C vitamini (Askorbik asit)",
            "D vitamini (Kalsiferol)",
            "K vitamini (Menakinon)"
        ],
        "answer": "C vitamini (Askorbik asit)",
        "correctAnswer": 2,
        "explanation": "C vitamini (Askorbik asit), kolajen sentezinde prolin ve lizin kalıntılarının hidroksilasyonunu yapan enzimlerin (hidroksilazların) aktif merkezindeki demiri (Fe+2) indirgenmiş formda tutar. Eksikliğinde stabil kolajen yapılamaz; diş etlerinde kanama, zayıf yara iyileşmesi ve kemik anormallikleri (Skorbüt hastalığı) görülür."
    },
    {
        "id": "v10_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Karaciğerde amonyağın üreye dönüştürüldüğü Üre Döngüsü'nün hız kısıtlayıcı ana enzimi, allosterik olarak hangi molekül tarafından aktive edilir?",
        "options": [
            "N-Asetilglutamat (NAG)",
            "Ornitin",
            "Sitrüllin",
            "Arjinin",
            "Fumarat"
        ],
        "answer": "N-Asetilglutamat (NAG)",
        "correctAnswer": 0,
        "explanation": "Karbamoil Fosfat Sentetaz I (CPS-I), üre döngüsünün mitokondride gerçekleşen ilk ve hız kısıtlayıcı basamağıdır. Mutlak surette pozitif allosterik aktivatörü olan 'N-Asetilglutamat'a (NAG) ihtiyaç duyar. NAG olmadan CPS-I inaktiftir."
    },
    {
        "id": "v10_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Vücutta purin nükleotidlerinin yıkımının son ürünü olan ve kanda aşırı biriktiğinde eklemlerde kristalleşerek 'Gut Hastalığı'na neden olan molekül hangisidir?",
        "options": [
            "Üre",
            "Kreatinin",
            "Ürik asit",
            "Amonyak",
            "Hipoksantin"
        ],
        "answer": "Ürik asit",
        "correctAnswer": 2,
        "explanation": "İnsanlarda purin (AMP ve GMP) bazlarının yıkımı (ksantin oksidaz enzimi yardımıyla) 'Ürik Asit' (Ürat) oluşumuyla sonlanır. Ürik asit suda az çözünür; kanda artarsa (genelde böbrekten az atılmaya bağlı) eklem içi sıvıda monosodyum ürat kristalleri halinde çökerek akut inflamasyonlu Gut ataklarını başlatır."
    },
    {
        "id": "v10_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Eritrositlerin enerji üretmek için sahip oldukları TEK metabolik yol hangisidir?",
        "options": [
            "Aerobik glikoliz",
            "Krebs (TCA) döngüsü",
            "Anaerobik glikoliz",
            "Beta-oksidasyon (Yağ asidi yıkımı)",
            "Glukoneogenez"
        ],
        "answer": "Anaerobik glikoliz",
        "correctAnswer": 2,
        "explanation": "Olgun eritrositlerin mitokondrileri ve çekirdekleri yoktur. Bu nedenle Krebs döngüsü, ETS veya yağ asidi oksidasyonu yapamazlar. Tüm enerjilerini (ATP) sitoplazmadaki glukozun laktata kadar yıkıldığı 'Anaerobik glikoliz' yoluyla elde ederler."
    },
    {
        "id": "v10_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Glikoz moleküllerinin karaciğer ve kasta depo formu olan 'Glikojen' sentezlenirken, zinciri uzatmak için ortama glikoz moleküllerini ekleyen 'Glikojen Sentaz' enziminin kullandığı aktif glikoz molekülü aşağıdakilerden hangisidir?",
        "options": [
            "Glukoz-6-fosfat",
            "UDP-Glukoz (Üridin difosfat glukoz)",
            "Fruktoz-1,6-bifosfat",
            "Glukoz-1-fosfat",
            "ATP-Glukoz"
        ],
        "answer": "UDP-Glukoz (Üridin difosfat glukoz)",
        "correctAnswer": 1,
        "explanation": "Glikojen sentaz, glikoz moleküllerini var olan glikojen primerine alfa-1,4 glikozidik bağlarıyla eklerken, glikozun aktif şekli olan ve enerjice zengin 'UDP-Glukoz' molekülünü kullanır."
    },
    {
        "id": "v10_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Yağ asitlerinin beta-oksidasyonu için sitoplazmadan mitokondri matriksine taşınmaları gerekir. Uzun zincirli yağ asitlerini mitokondri iç zarından geçiren bu özel taşıyıcı molekül aşağıdakilerden hangisidir?",
        "options": [
            "Karnitin",
            "Sitrat",
            "Kreatin",
            "Malat",
            "Kolesistokinin"
        ],
        "answer": "Karnitin",
        "correctAnswer": 0,
        "explanation": "Uzun zincirli yağ asitleri (Açil-CoA formunda) mitokondri iç zarından doğrudan geçemezler. 'Karnitin mekiği' sistemi kullanılarak, Karnitin molekülüne bağlanıp (Açil-karnitin olarak) matrikse taşınırlar ve orada tekrar Açil-CoA'ya çevrilerek Beta-oksidasyona girerler."
    },
    {
        "id": "v10_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Açlıkta yağ asidi yıkımının artmasıyla karaciğerde sentezlenen ve beyin, kalp, kas gibi ekstrahepatik dokular tarafından enerji kaynağı olarak kullanılabilen keton cisimleri aşağıdakilerden hangileridir?",
        "options": [
            "Pirüvat, Laktat, Alanin",
            "Asetoasetat, Beta-hidroksibütirat, Aseton",
            "Asetil-CoA, Süksinil-CoA, Malonil-CoA",
            "Oksaloasetat, Malat, Sitrat",
            "Gliserol, Kolesterol, Safra asitleri"
        ],
        "answer": "Asetoasetat, Beta-hidroksibütirat, Aseton",
        "correctAnswer": 1,
        "explanation": "Ketojenez karaciğer mitokondrilerinde gerçekleşir. Üretilen üç keton cismi: Asetoasetat (ilk sentezlenen), Beta-hidroksibütirat (en bol bulunan, kanda dolaşan) ve Aseton'dur (biyolojik olarak kullanılamaz, uçucudur, nefesten atılır)."
    },
    {
        "id": "v10_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Hangi vitaminin eksikliğinde Wernicke-Korsakoff sendromu görülür ve bu vitamin eritrositlerde Transketolaz enziminin koenzimi olarak görev yapar?",
        "options": [
            "B1 Vitamini (Tiamin)",
            "B2 Vitamini (Riboflavin)",
            "B3 Vitamini (Niasin)",
            "B9 Vitamini (Folik asit)",
            "B12 Vitamini (Kobalamin)"
        ],
        "answer": "B1 Vitamini (Tiamin)",
        "correctAnswer": 0,
        "explanation": "B1 vitamini (Tiamin, TPP), Pirüvat dehidrogenaz, Alfa-ketoglutarat dehidrogenaz ve Pentoz fosfat yolundaki Transketolaz enzimlerinin koenzimidir. Kronik alkoliklerde emilimi bozulduğunda ciddi nörolojik bulgularla seyreden Wernicke-Korsakoff sendromuna (ve Beriberi'ye) neden olur."
    },

    // --- TIBBİ FARMAKOLOJİ (7 Soru) ---
    {
        "id": "v10_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Aspirin dışındaki Non-Steroid Anti-İnflamatuar İlaçlar, inflamasyon, ağrı ve ateş süreçlerinden sorumlu olan prostaglandinlerin sentezini hangi enzimi inhibe ederek durdururlar?",
        "options": [
            "Lipooksijenaz (LOX)",
            "Fosfolipaz A2",
            "Siklooksijenaz (COX-1 ve COX-2)",
            "Tromboksan Sentaz",
            "5-Alfa Redüktaz"
        ],
        "answer": "Siklooksijenaz (COX-1 ve COX-2)",
        "correctAnswer": 2,
        "explanation": "NSAİİ'lerin (Steroid olmayan anti-inflamatuarlar) temel etki mekanizması, araşidonik asitten prostaglandin ve tromboksan sentezini katalizleyen Siklooksijenaz (COX) enzimlerini (genellikle reversibl olarak) bloke etmeleridir. Sadece Fosfolipaz A2'yi inhibe edenler kortikosteroidlerdir."
    },
    {
        "id": "v10_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Farmakokinetik parametrelerden olan 'Yarılanma Ömrü', ilacın plazma konsantrasyonunun yarıya inmesi için geçen süredir. Sürekli ilaç kullanımında, ilacın kanda kararlı bir tedavi seviyesine ulaşması için ortalama KAC yarı ömür geçmesi gerekir?",
        "options": [
            "1 yarı ömür",
            "2 yarı ömür",
            "4 - 5 yarı ömür",
            "8 - 10 yarı ömür",
            "Hiç yarı ömür beklemeden ilk dozda ulaşılır"
        ],
        "answer": "4 - 5 yarı ömür",
        "correctAnswer": 2,
        "explanation": "Bir ilacın birinci derece kinetikle vücutta birikerek atılımıyla dengelenmesi (Steady-state konsantrasyonuna ulaşması) yaklaşık 4 ila 5 yarı ömür (%93.75 - %96.8) zaman alır. İlacın vücuttan tamamen atılması için de yine aynı süre (4-5 yarı ömür) gerekir."
    },
    {
        "id": "v10_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Organofosfatlı tarım ilaçları zehirlenmesinde, hasta salya sümük, ishal, idrar kaçırma, kas seğirmeleri ve daralmış göz bebekleri ile acile getirilir. Bu toksik tablonun nedeni hangi enzimin irreversibl olarak inhibe edilmesidir?",
        "options": [
            "Monoamin oksidaz (MAO)",
            "Kolin asetiltransferaz",
            "Asetilkolinesteraz (AChE)",
            "Tirozin hidroksilaz",
            "Siklooksijenaz (COX)"
        ],
        "answer": "Asetilkolinesteraz (AChE)",
        "correctAnswer": 2,
        "explanation": "Organofosfatlar (Parathion, Malathion, Sarin gazı) sinaptik aralıktaki Asetilkolin'i parçalayan Asetilkolinesteraz enzimini fosforilleyerek kalıcı (irreversibl) olarak bloke eder. Sonuçta sinapslarda devasa miktarda Asetilkolin birikir ve ölümcül kolinerjik krize (SLUDGE sendromu) yol açar."
    },
    {
        "id": "v10_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Mide ülseri tedavisinde kullanılan, mide paryetal hücrelerindeki asit sekresyonunun son basamağı olan H+/K+ ATPaz pompasını irreversibl olarak bloke eden ve en güçlü asit baskılayıcı olan ilaç grubu hangisidir?",
        "options": [
            "H2 reseptör blokerleri (Famotidin, Ranitidin)",
            "Antiasitler (Alüminyum hidroksit)",
            "Proton pompası inhibitörleri / PPİ (Omeprazol, Lansoprazol)",
            "Prostaglandin analogları (Misoprostol)",
            "Antimuskarinikler (Pirenzepin)"
        ],
        "answer": "Proton pompası inhibitörleri / PPİ (Omeprazol, Lansoprazol)",
        "correctAnswer": 2,
        "explanation": "Omeprazol, pantoprazol gibi '-prazol' son eki alan ilaçlar, Proton Pompası İnhibitörleridir (PPİ). Paryetal hücre lümenindeki asidik ortamda aktifleşerek enzime (H+/K+ ATPaz) kovalent (irreversibl) bağlanır ve asit salgısını kaynaktan (son basamaktan) %99 oranında keserler."
    },
    {
        "id": "v10_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Astım tedavisinde 'Kurtarıcı' ilaç olarak krizi anında çözmek amacıyla inhalasyon yoluyla kullanılan, kısa etkili Selektif Beta-2 adrenerjik agonist ilaç aşağıdakilerden hangisidir?",
        "options": [
            "Salbutamol (Albuterol)",
            "İpratropium",
            "Flutikazon (Kortikosteroid)",
            "Montelukast (Lökotrien reseptör blokeri)",
            "Teofilin"
        ],
        "answer": "Salbutamol (Albuterol)",
        "correctAnswer": 0,
        "explanation": "Salbutamol (kısa etkili beta-2 agonist / SABA), bronş düz kaslarındaki beta-2 reseptörlerini uyararak dakikalar içinde güçlü bir bronş gevşemesi (bronkodilatasyon) sağlar. Akut astım krizlerinde ilk tercih edilen kurtarıcı (semptom giderici) ilaçtır."
    },
    {
        "id": "v10_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "İdrar söktürücü ilaçlar arasında yer alan ve Henle kulbunun çıkan kalın kolundaki Na+/K+/2Cl- taşıyıcısını bloke ederek ÇOK GÜÇLÜ su ve tuz atılımı sağlayan, acil akciğer ödemi tedavisinde kullanılan ilaç hangisidir?",
        "options": [
            "Hidroklorotiyazid",
            "Spironolakton",
            "Asetazolamid",
            "Furosemid",
            "Mannitol"
        ],
        "answer": "Furosemid",
        "correctAnswer": 3,
        "explanation": "Furosemid, Henle kulbu (Loop) diüretiklerinin prototipidir. Henle kulbunun çıkan kolunda %25 sodyum geri emilimini durdurduğu için (tiyazidlere göre çok daha) güçlü diürez yapar (Kıvrım diüretiği). Kalp yetmezliğine bağlı akut akciğer ödeminin acil tedavisinde hayat kurtarıcıdır."
    },
    {
        "id": "v10_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Tıbbi terminolojide bir ilacın dozunu giderek artırsak bile, ilacın yaratabileceği MAKSİMUM etki gücünün daha fazla artamadığı noktaya ulaşıldığında bahsedilen farmakodinamik kavram aşağıdakilerden hangisidir?",
        "options": [
            "Potens (Güç)",
            "Efikasi (Etkililik / Efficacy)",
            "Terapötik indeks",
            "Biyoyararlanım",
            "Afine (İlgi)"
        ],
        "answer": "Efikasi (Etkililik / Efficacy)",
        "correctAnswer": 1,
        "explanation": "Efikasi (Efficacy / Etkililik / Maksimum etki), bir ilacın reseptörü doyurduğunda oluşturabildiği en büyük (maksimum) yanıttır (Emax). Potens ise ilacın o etkinin %50'sini oluşturmak için gereken doz (EC50) miktarıdır (az dozda yapan daha potenttir)."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    {
        "id": "v10_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojide, fertilizasyon Fallop tüplerinde ampulla bölgesinde gerçekleşir. Döllenen zigotun, mitoz bölünmelerle oluşturduğu ve 16-32 hücreli, dışı zona pellucida ile kaplı üzüm salkımı benzeri evreye ne ad verilir?",
        "options": [
            "Blastokist",
            "Morula",
            "Gastrula",
            "Blastosöl",
            "Trofloblast"
        ],
        "answer": "Morula",
        "correctAnswer": 1,
        "explanation": "Döllenmeden yaklaşık 3-4 gün sonra zigot arka arkaya yarıklanma (cleavage) mitozları geçirerek 16-32 hücreli (blastomerli) bir topa dönüşür. Böğürtlensi/Dut görünümlü bu katı hücre kitlesine 'Morula' denir. Morula rahme ulaştığında içine sıvı dolarak Blastokist'e dönüşür."
    },
    {
        "id": "v10_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Epitel doku hücreleri altındaki bağ dokusundan daima hücresel olmayan destekleyici bir tabaka ile ayrılır. Bu tabaka, epitelin tutunduğu ve besin alışverişinin difüzyonla gerçekleştiği yapı olan 'Bazal Lamina'dır. Bazal laminanın YAPISAL AĞINI oluşturan temel kolajen tipi hangisidir?",
        "options": [
            "Tip I Kolajen",
            "Tip II Kolajen",
            "Tip III Kolajen (Retiküler lif)",
            "Tip IV Kolajen",
            "Tip VII Kolajen"
        ],
        "answer": "Tip IV Kolajen",
        "correctAnswer": 3,
        "explanation": "Tip IV kolajen fibril oluşturmaz, birbirine bağlanarak düzlemsel bir 'tavuk kümesi teli' (ağ - network) modeli oluşturur ve sadece Bazal Lamina'nın (membranın) iskeletini teşkil eder. Laminin ve Nidogen gibi glikoproteinler bu ağa tutunur."
    },
    {
        "id": "v10_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kan dokusunda immün savunmadan sorumlu Lökositlerin granüllü olanlarından biridir. Çekirdekleri genellikle iki loblu olup alerjik reaksiyonlarda ve paraziter enfeksiyonlarda sayıları artan hücre aşağıdakilerden hangisidir?",
        "options": [
            "Nötrofil",
            "Eozinofil",
            "Bazofil",
            "Monosit",
            "Lenfosit"
        ],
        "answer": "Eozinofil",
        "correctAnswer": 1,
        "explanation": "Eozinofiller, kanda lökositlerin %1-4'ünü oluşturan, asidik Eozin boyasıyla parlak pembe-kırmızı granülleri boyanan hücrelerdir. Çekirdekleri (nükleus) 2 lobludur (bikonkav gözlük, telefon ahizesi). Özellikle helmint (parazit) öldürülmesinde ve alerjik reaksiyonların düzenlenmesinde (histaminaz ile) rol alırlar."
    },
    {
        "id": "v10_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Lenfatik sistemin bir organı olan ve lenfatik damar bağlantısı BULUNMAYAN, doğrudan kandan lenfositlerin olgunlaşması için bir okul/timik eğitim yeri olarak görev yapan primer lenfoid organ hangisidir?",
        "options": [
            "Dalak (Lien)",
            "Timus",
            "Lenf düğümü",
            "Tonsilla palatina (Bademcik)",
            "Peyer plakları"
        ],
        "answer": "Timus",
        "correctAnswer": 1,
        "explanation": "Timus bezi, T-lenfositlerin bağışıklık toleransını (kendinden olanı tanıma) öğrendiği ve olgunlaştığı (pozitif ve negatif seleksiyon) merkezi (primer) lenfoid organdır. Timusun afferent (getirici) lenf damarı yoktur, doğrudan kandan beslenir (Kan-Timus bariyeri vardır). Puberteden sonra küçülüp yağ dokusuna (involusyon) dönüşür."
    },
    {
        "id": "v10_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Solunum sisteminde mukoza epitelini oluşturan, yüzeyinde siller bulunan epitelin tam mikroskobik sınıflandırması aşağıdakilerden hangisidir?",
        "options": [
            "Çok katlı yassı keratinize epitel",
            "Tek katlı kübik epitel",
            "Tek katlı yassı (skuamöz) epitel",
            "Yalancı çok katlı prizmatik (silindirik) titrek tüylü (silli) epitel",
            "Değişici (Transizyonel - Ürotelyum) epitel"
        ],
        "answer": "Yalancı çok katlı prizmatik (silindirik) titrek tüylü (silli) epitel",
        "correctAnswer": 3,
        "explanation": "Solunum yolları (Trakea, primer bronşlar) epitelinin klasik adı 'Solunum epiteli'dir. Histolojik olarak bu, hücrelerin hepsinin bazal laminaya oturduğu ancak boyları farklı olduğu için çekirdeklerin üst üste çok katlıymış gibi göründüğü 'Yalancı çok katlı silli prizmatik epitel'dir. Aralarında mukus üreten kadeh (goblet) hücreleri bulunur."
    },
    {
        "id": "v10_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Karaciğerin mikroskobik yapısında, hepatosit kordonları arasında uzanan geniş kan damarları olan 'Sinüzoid'lerin lümeninde yerleşmiş olan ve kandan gelen yaşlı eritrositleri, bakterileri fagositozla yok eden karaciğere özgü makrofajlara ne ad verilir?",
        "options": [
            "Kupffer hücreleri",
            "Ito (Stellat) hücreleri",
            "Paneth hücreleri",
            "Clara hücreleri",
            "Langerhans hücreleri"
        ],
        "answer": "Kupffer hücreleri",
        "correctAnswer": 0,
        "explanation": "Kupffer hücreleri, karaciğer sinüzoidlerinin endotel döşemesinin parçası gibi oturan veya lümende asılı duran dalgalı yıldızsı şekilli hücrelerdir. Mononükleer fagositik sistemin (MPS) üyesidirler (makrofajdır) ve kandan gelen patojenleri ve ömrünü tamamlamış alyuvarları temizlerler."
    },
    {
        "id": "v10_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Pankreas bezinin Endokrin kısmını oluşturan, ekzokrin asinusların arasına soluk boyanan adacıklar şeklinde serpilmiş yapılara Langerhans Adacıkları denir. Bu adacıklarda bulunan B hücrelerinin salgıladığı ana hormon hangisidir?",
        "options": [
            "Glukagon",
            "Somatostatin",
            "Pankreatik Polipeptit (PP)",
            "İnsülin",
            "Amilin"
        ],
        "answer": "İnsülin",
        "correctAnswer": 3,
        "explanation": "Langerhans adacıklarındaki hücrelerin yaklaşık %70'ini oluşturan Beta hücreleri İnsülin (kan şekerini düşüren hormon) salgılar. Alfa hücreleri Glukagon (%20), Delta hücreleri ise Somatostatin (%5-10) salgılar."
    },
    {
        "id": "v10_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Mide mukozasında yer alan ve Gastrik Bezleri oluşturan hücrelerden hangisi, B12 vitamininin ince bağırsaklardan emilebilmesi için şart olan İntrinsik Faktörü ve Mide asidini salgılar?",
        "options": [
            "Esas (Şef / Zimojenik) hücreler",
            "Paryetal (Oksintik) hücreler",
            "Mukus boyun hücreleri",
            "Enteroendokrin (G) hücreler",
            "Kök (Rejeneratif) hücreler"
        ],
        "answer": "Paryetal (Oksintik) hücreler",
        "correctAnswer": 1,
        "explanation": "Paryetal (Oksintik) hücreler, mide bezlerinin boyun ve gövde kısmında bulunan, bol mitokondrili, pembe/kırmızı boyanan (eozinofilik) büyük hücrelerdir. Mide lümenine H+ iyonu pompalayarak Hidroklorik asidi (HCl) ve B12 emilimi için elzem olan İntrinsik faktörü salgılarlar."
    },
    {
        "id": "v10_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kadın üreme sisteminde ovaryum içinde yer alan folliküllerin gelişimi sırasında, oositin etrafını sıkıca saran ve sadece sperm başındaki akrozomal enzimlerle delinip geçilebilen zengin glikoprotein yapısındaki zara ne ad verilir?",
        "options": [
            "Corona radiata",
            "Zona pellucida",
            "Theca interna",
            "Theca externa",
            "Membrana granulosa"
        ],
        "answer": "Zona pellucida",
        "correctAnswer": 1,
        "explanation": "Primer oosit büyürken, oosit ve etrafındaki folikül hücreleri arasında, ZP1, ZP2 ve ZP3 glikoproteinlerinden oluşan şeffaf ve kalın bir zar (jelatinimsi tabaka) gelişir. Buna Zona pellucida denir. ZP3 proteini spermlerin bağlanması (sperm reseptörü) ve akrozom reaksiyonunu tetiklemesi için kritiktir."
    },
    {
        "id": "v10_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek nefronlarında, kandan süzülen suyun ve amino asitler, glukoz, sodyum gibi moleküllerin büyük çoğunluğunun vücuda GERİ EMİLDİĞİ, lümene bakan yüzünde çok yoğun mikrovilluslar bulunan tübül yapısı hangisidir?",
        "options": [
            "Glomerül (Bowman) kapsülü",
            "Henle kulbunun ince kolu",
            "Proksimal kıvrımlı tübül",
            "Distal kıvrımlı tübül",
            "Toplayıcı kanal"
        ],
        "answer": "Proksimal kıvrımlı tübül",
        "correctAnswer": 2,
        "explanation": "Proksimal tübül hücreleri böbreğin geri emilim merkezidir. Bu nedenle yüzey alanını artıran çok belirgin bir fırçamsı kenara (mikrovilluslara) ve aktif taşıma için devasa mitokondrilere sahiptir. Glukoz ve amino asitlerin %100'ü, su ve tuzların ise %65'i buradan emilir."
    },
    {
        "id": "v10_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Sinir dokusunda merkezi sinir sistemini saran miyelin kılıfını, birden fazla aksonun etrafına kollarını uzatarak sentezleyen ve nöronların elektriksel yalıtımını sağlayan glia hücresi hangisidir?",
        "options": [
            "Astrosit",
            "Mikroglia",
            "Ependim hücresi",
            "Oligodendrosit",
            "Schwann hücresi"
        ],
        "answer": "Oligodendrosit",
        "correctAnswer": 3,
        "explanation": "Merkezi sinir sisteminde (MSS) miyelin kılıfını OLİGODENDROSİTLER oluşturur (bir oligodendrosit birden fazla aksonu miyelinler). Periferik sinir sisteminde (PSS - kollar, bacaklar vs.) ise miyelini SCHWANN HÜCRELERİ yapar (bir Schwann sadece bir akson boğumunu miyelinler)."
    },
    {
        "id": "v10_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Bağ dokusu hücreleri içinde alerjik reaksiyonlarda IgE antikorları aracılığıyla uyarıldıklarında, içlerindeki Histamin ve Heparin dolu granülleri hızla dışarı boşaltarak kaşıntı, ödem ve vazodilatasyona neden olan hücre hangisidir?",
        "options": [
            "Plazma hücresi",
            "Mast hücresi",
            "Makrofaj",
            "Fibroblast",
            "Melanosit"
        ],
        "answer": "Mast hücresi",
        "correctAnswer": 1,
        "explanation": "Mast hücreleri, bağ dokusunda kan damarları çevresinde bulunan, sitoplazması bazofilik metakromatik granüllerle (histamin, heparin, lökotrien) dolu, IgE reseptörleri taşıyan alerji ve anafilaksi hücreleridir. Kanda dolaşan karşılığı Bazofildir."
    },
    {
        "id": "v10_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Erken embriyolojik dönemde, 3. haftada epiblast hücrelerinin primitive streak üzerinden içeri göç ederek oluşturduğu üç temel germ yaprağı olayına ne ad verilir?",
        "options": [
            "Yarıklanma (Cleavage)",
            "Blastulasyon",
            "Gastrulasyon",
            "Nörolasyon",
            "İmplantasyon"
        ],
        "answer": "Gastrulasyon",
        "correctAnswer": 2,
        "explanation": "Bilaminar (iki tabakalı) embriyonik diskin 3. haftada primitif çizginin oluşumuyla beraber hücre göçleri geçirerek Trilaminar (üç tabakalı) embriyonik diski (Ektoderm, Mezoderm, Endoderm) oluşturduğu bu hayati morfogenetik sürece Gastrulasyon denir."
    },

    // --- TIBBİ MİKROBİYOLOJİ (14 Soru) ---
    {
        "id": "v10_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Cilt enfeksiyonları, gıda zehirlenmesi, Toksik Şok Sendromu ve hastane enfeksiyonlarına neden olabilen, mikroskopta Gram üzüm salkımları şeklinde görülen ve 'Katalaz pozitif', 'Koagülaz pozitif' olan bakteri hangisidir?",
        "options": [
            "Streptococcus pyogenes",
            "Staphylococcus epidermidis",
            "Staphylococcus aureus",
            "Enterococcus faecalis",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Staphylococcus aureus",
        "correctAnswer": 2,
        "explanation": "Staphylococcus (üzüm salkımı demek) cinsi bakteriler katalaz pozitiftir (Streptokoklardan ayrım). Bu cins içinde patojenitesi en yüksek olan, altın sarısı koloniler yapan (aureus) ve Koagülaz enzimini üreterek plazmayı pıhtılaştıran (Koagülaz pozitif olan) tek majör tür Staphylococcus aureus'tur."
    },
    {
        "id": "v10_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Özellikle kış aylarında çocuklarda görülen 'A Grubu Beta Hemolitik Streptokok' kaynaklı akut bademcik iltihabı tedavi edilmezse, haftalar sonra otoimmün bir mekanizma ile kalpte kalıcı kapak hasarı yapabilen hangi hastalık komplikasyonuna yol açar?",
        "options": [
            "Akut Romatizmal Ateş (ARA)",
            "Kızıl (Scarlatina)",
            "Kuduz (Rabies)",
            "Boğmaca (Pertussis)",
            "Toksik Şok Sendromu"
        ],
        "answer": "Akut Romatizmal Ateş (ARA)",
        "correctAnswer": 0,
        "explanation": "A grubu beta hemolitik streptokokların (AGBHS) yüzeyindeki M proteinine karşı vücudun ürettiği antikorlar, moleküler benzerlik (molecular mimicry) nedeniyle yanlışlıkla kalp kapakçıklarına (özellikle mitral), eklemlere ve beyne saldırarak Romatizmal Kalp Hastalığı (Akut Romatizmal Ateş) tablosunu yaratır."
    },
    {
        "id": "v10_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Virüslerin nükleik asitini dış etkenlerden koruyan, protein alt birimlerinden oluşan simetrik dış kılıfa ne ad verilir?",
        "options": [
            "Zarf (Envelope)",
            "Kapsid",
            "Peptidoglikan",
            "Plasmid",
            "Prion"
        ],
        "answer": "Kapsid",
        "correctAnswer": 1,
        "explanation": "Kapsid, virüs genomunu çevreleyen sert protein tabakasıdır. Kapsid ve genomun birleşimine 'Nükleokapsid' denir. Zarf (envelope) ise bazı virüslerde kapsidin de dışında yer alan ve konakçı hücresinin zarından çalınan lipit yapılı en dış tabakadır."
    },
    {
        "id": "v10_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mikrobiyoloji laboratuvarında kullanılan Otoklav cihazının çalışma prensibi aşağıdakilerden hangisine dayanır?",
        "options": [
            "Ultraviyole (UV) ışınları ile sterilizasyon",
            "Kuru sıcak hava (160 derece) ile yakma",
            "Basınçlı doymuş su buharı (121°C, 1 Atm basınçta 15 dk) ile proteinleri koagüle ederek sterilizasyon",
            "Etilen oksit gazı ile kimyasal sterilizasyon",
            "Gama ışınları (İyonize radyasyon) ile sterilizasyon"
        ],
        "answer": "Basınçlı doymuş su buharı (121°C, 1 Atm basınçta 15 dk) ile proteinleri koagüle ederek sterilizasyon",
        "correctAnswer": 2,
        "explanation": "Otoklav (Nemli Isı Sterilizasyonu), suyun kaynama noktasını kapalı ve basınçlı bir ortamda yükselterek 121°C'lik doymuş buhar oluşturur. Bu yüksek nem ve ısı sayesinde mikroorganizmaların (ve hatta çok dirençli endosporların) proteinleri ve nükleik asitleri hızla denatüre olur (pıhtılaşır), kesin sterilizasyon sağlanır."
    },
    {
        "id": "v10_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Cinsel yolla bulaşan, ağrısız ve sert kenarlı ülser ile başlayan, ilerleyen yıllarda döküntü ve sinir sistemi/kalp tutulumuna neden olan Frengi hastalığının etkeni olan spiroket bakteri hangisidir?",
        "options": [
            "Neisseria gonorrhoeae",
            "Treponema pallidum",
            "Chlamydia trachomatis",
            "Haemophilus ducreyi",
            "Trichomonas vaginalis"
        ],
        "answer": "Treponema pallidum",
        "correctAnswer": 1,
        "explanation": "Sifiliz (Frengi) etkeni Treponema pallidum'dur. İnce, burgu (spiroket) şeklinde bir bakteridir. Kültürde üretilemez. Karanlık alan mikroskobu ile hareketli olarak izlenir. 1. Döneminde ağrısız sert ülser (Şankr) oluşturur (belsoğukluğu etkeni gonokok, ağrılı ülser yapan ise H. ducreyi'dir)."
    },
    {
        "id": "v10_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Barsaklarda doğal florada bulunmayan, antibiyotik kullanımı sonucu rakipleri ölünce hızla çoğalan ve ürettiği toksinlerle Pseudomembranöz Enterokolit yapan fırsatçı bakteri hangisidir?",
        "options": [
            "Clostridioides difficile (C. diff)",
            "Escherichia coli (EHEC)",
            "Vibrio cholerae",
            "Salmonella enterica",
            "Campylobacter jejuni"
        ],
        "answer": "Clostridioides difficile (C. diff)",
        "correctAnswer": 0,
        "explanation": "Geniş spektrumlu antibiyotikler bağırsak florasındaki faydalı bakterileri yok eder. Dirençli olan Clostridium (Clostridioides) difficile sporları bu boşlukta vejetatif hale geçip ürer ve A/B toksinleri salgılayarak bağırsak mukozasında fibrin, iltihap hücreleri ve ölü hücrelerden oluşan yalancı membranlar (pseudomembranöz enterokolit) oluşturur."
    },
    {
        "id": "v10_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Karaciğere yerleşerek siroz ve hepatosellüler karsinoma yol açabilen Hepatit B Virüsü, nükleik asit yapısı itibariyle diğer hepatit virüslerinden HANGİ yönüyle KESİN OLARAK ayrılır?",
        "options": [
            "Zarfsız olmasıyla",
            "Tek sarmallı RNA (ssRNA) içermesiyle",
            "Çift sarmallı DNA (dsDNA) içermesiyle",
            "Sadece fekal-oral (dışkı-ağız) yolla bulaşmasıyla",
            "Aşısının bulunmamasıyla"
        ],
        "answer": "Çift sarmallı DNA (dsDNA) içermesiyle",
        "correctAnswer": 2,
        "explanation": "İnsanda hepatit yapan tüm virüsler (Hepatit A, C, D, E) RNA virüsüdür. SADECE Hepatit B virüsü (Hepadnaviridae ailesi) sirküler, kısmi çift sarmallı bir DNA virüsüdür ve replikasyonu sırasında hücresel değil viral bir revers transkriptaz kullanır."
    },
    {
        "id": "v10_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sıtma hastalığına neden olan Plasmodium türü parazitlerin insanlara bulaşmasını sağlayan canlının ismi aşağıdakilerden hangisidir?",
        "options": [
            "Aedes sivrisineği",
            "Culex sivrisineği",
            "Anofel (Anopheles) cinsi dişi sivrisinek",
            "Tatarcık (Phlebotomus) sineği",
            "Çeçe sineği (Glossina)"
        ],
        "answer": "Anofel (Anopheles) cinsi dişi sivrisinek",
        "correctAnswer": 2,
        "explanation": "Sıtma hastalığının taşıyıcısı ve kesin konağı (parazitin eşeyli ürediği canılı) sadece Anopheles cinsi dişi sivrisineklerdir. İnsan (ara konak), sineğin kan emmesi sırasında parazitin tükürük bezlerinden sprozoit formunda vücuda girmesiyle enfekte olur."
    },
    {
        "id": "v10_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Hayvanlardan insanlara bulaşan, pastörize edilmemiş çiğ süt veya taze peynir tüketimiyle bulaşarak ateşin gün içinde inip çıkmasına, gece terlemelerine ve eklem ağrılarına neden olan hücre içi bakteri hangisidir?",
        "options": [
            "Bacillus anthracis (Şarbon)",
            "Brucella spp. (Bruselloz)",
            "Coxiella burnetii (Q humması)",
            "Francisella tularensis (Tularemi)",
            "Borrelia burgdorferi (Lyme)"
        ],
        "answer": "Brucella spp. (Bruselloz)",
        "correctAnswer": 1,
        "explanation": "Bruselloz (Malta Humması / Ondülan ateş); sığır, koyun ve keçilerin enfekte pastörize edilmemiş süt/süt ürünlerinin (özellikle peynir) tüketilmesiyle veya hayvancılıkla uğraşanlarda direkt temasla bulaşan Brucella türlerinin yaptığı zoonotik sistemik enfeksiyondur."
    },
    {
        "id": "v10_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerin hücre duvarını sentezlerken peptidoglikan zincirlerini birbirine bağlayan 'Transpeptidaz' enzimlerini geri dönüşümsüz olarak bloke eden ve bakteriyi patlatarak öldüren antibiyotik grubu hangisidir?",
        "options": [
            "Makrolidler (Eritromisin)",
            "Kinolonlar (Siprofloksasin)",
            "Beta-Laktamlar (Penisilinler, Sefalosporinler)",
            "Tetrasiklinler (Doksisiklin)",
            "Aminoglikozitler (Gentamisin)"
        ],
        "answer": "Beta-Laktamlar (Penisilinler, Sefalosporinler)",
        "correctAnswer": 2,
        "explanation": "Beta-laktam halkası içeren antibiyotikler (Penisilin, Sefalosporin, Karbapenem), bakterinin duvarındaki peptidoglikan tabakasının çapraz bağlarını (transpeptidasyon basamağını) kuran PBP'leri (Penicillin Binding Proteins) bloke eder. Duvarı zayıflayan bakteri ozmotik basınca dayanamaz ve patlar."
    },
    {
        "id": "v10_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mantarlar ile insan hücreleri arasındaki yapısal olarak en belirgin farklılıklardan biri hücre zarlarındaki sterol içeriğidir. Mantar hücre zarında bulunan ve birçok antifungal ilacın bağlandığı sterol hangisidir?",
        "options": [
            "Kolesterol",
            "Ergosterol",
            "Stigmasterol",
            "Mikolik asit",
            "Glikoprotein"
        ],
        "answer": "Ergosterol",
        "correctAnswer": 1,
        "explanation": "Mantar hücresinin membranı tıpkı insan gibi lipit çift tabakadır, ancak insanda zarı stabilize eden 'Kolesterol' bulunurken mantarlarda 'Ergosterol' bulunur. Antifungallerin çoğu (Poliyenler ergosterole bağlanıp delik açar, Azoller ise ergosterol sentezini inhibe eder) bu farkı kullanarak etki ederler."
    },
    {
        "id": "v10_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşırı duyarlılık reaksiyonlarından hangisi, kan uyuşmazlığı, yanlış kan transfüzyonu ve Otoimmün Hemolitik Anemi gibi durumlarda, hücre yüzeyindeki antijenlere karşı gelişen IgG/IgM antikorlarının Kompleman sistemini aktive ederek o hücreyi parçalaması olayını tanımlar?",
        "options": [
            "Tip I Aşırı Duyarlılık (Anafilaktik)",
            "Tip II Aşırı Duyarlılık (Sitotoksik)",
            "Tip III Aşırı Duyarlılık (İmmün Kompleks)",
            "Tip IV Aşırı Duyarlılık (Hücresel/Gecikmiş)",
            "Tip V Aşırı Duyarlılık"
        ],
        "answer": "Tip II Aşırı Duyarlılık (Sitotoksik)",
        "correctAnswer": 1,
        "explanation": "Tip II reaksiyonlarda antikor (IgG veya IgM), dolaşan bir hücrenin (alyuvarın) BİZZAT ZARINDAKİ bir antijene bağlanır. Bunu kompleman (MAC) fagositozu veya NK hücresi saldırısı izler. Kan transfüzyonu, Rh(D) anne-bebek uyuşmazlığı tip 2'ye klasik örnektir. Tip 1 alerjidir (IgE), Tip 3 biriken komplekslerdir (Lupus), Tip 4 ise antikorla değil T hücresiyle olur (Tüberküloz testi)."
    },
    {
        "id": "v10_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerin zorlu ortam koşullarında hayatta kalabilmek için hücre içindeki suyunu boşaltıp DNA'sını çok kalın bir kılıfla kaplayarak girdiği 'uykudaki dirençli formuna' ne ad verilir?",
        "options": [
            "Kapsül",
            "Spor (Endospor)",
            "Plazmid",
            "Biofilm",
            "Glikokaliks"
        ],
        "answer": "Spor (Endospor)",
        "correctAnswer": 1,
        "explanation": "Sadece bazı Gram pozitif basiller (Bacillus ve Clostridium cinsi) tarafından oluşturulan Endospor, bakterinin çoğalma değil KORUNMA formudur. Dışarısı yaşanmaz hale geldiğinde bakteri sporlanır ve yıllarca (100 derecede bile) yaşayabilir. Ortam güzelleşince tekrar canlı (vejetatif) formuna döner."
    },
    {
        "id": "v10_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Deri üzerinde yerleşen ve saç, tırnak, deri gibi dokulardaki 'Keratin' proteinini sindirerek beslenen, halk arasında 'Tinea' enfeksiyonlarına neden olan FUNGUS grubuna ne ad verilir?",
        "options": [
            "Dermatofitler",
            "Mayalar (Candida)",
            "Küfler (Aspergillus)",
            "Dimorfik mantarlar",
            "Zygomycetes"
        ],
        "answer": "Dermatofitler",
        "correctAnswer": 0,
        "explanation": "Dermatofitler (Microsporum, Trichophyton, Epidermophyton cinsi), sadece ölü boynuzsu tabakadaki (stratum corneum) veya saç/tırnak içindeki keratini sindirip tüketebilen (keratinaz enzimi olan) küf cinsi mantarlardır ve yüzeysel kütanöz mikozları (Tinea enfeksiyonlarını) yaparlar."
    },

    // --- DİĞER (Patoloji, Biyofizik, Toplum Sağlığı vb.) (12 Soru) ---
    {
        "id": "v10_diger_1",
        "subject": "Tıbbi Patoloji",
        "question": "Bir tümörün özelliklerini inceleyen patolog, hücrelerin tamamen diferansiye olduğunu, çevre dokuya yayılmadığını, kapsülle çevrili olduğunu ve yavaş büyüdüğünü raporlarsa bu tümör büyük olasılıkla nasıl sınıflandırılır?",
        "options": [
            "Karsinoma in situ",
            "Malign (Kötü huylu) epiteliyal tümör",
            "Benign (İyi huylu) tümör",
            "Sarkom (Bağ dokusu kanseri)",
            "Metastatik karsinom"
        ],
        "answer": "Benign (İyi huylu) tümör",
        "correctAnswer": 2,
        "explanation": "Benign (İyi huylu) tümörler genellikle iyi diferansiyedir (kök hücreye değil, sağlıklı dokuya benzerler), lokalize kalırlar, bağ dokudan iyi sınırlı bir kapsülle sarılırlar, çevreye invazyon (tecavüz) yapmazlar ve uzak organlara atlamazlar (metastaz yapmazlar)."
    },
    {
        "id": "v10_diger_2",
        "subject": "Tıbbi Patoloji",
        "question": "Geri dönüşümsüz hücre hasarında, bir hücrenin içerdiği lizozomal enzimlerle kendi kendini sindirmesi, zarının yırtılıp içeriğin dokuya dökülmesiyle DOKUDA HER ZAMAN İLTİHAP oluşturan 'patolojik' ölüm tipi hangisidir?",
        "options": [
            "Apoptoz (Programlı hücre ölümü)",
            "Otofaji",
            "Nekroz",
            "Kromatin kondensasyonu (Piknoz)",
            "Atrofi"
        ],
        "answer": "Nekroz",
        "correctAnswer": 2,
        "explanation": "Nekroz her zaman patolojiktir (iskemi, toksin vs.). Hücre şişer (onkozu) membran bütünlüğü kaybolur, hücre içeriği lizozomal enzimlerle dışarı DÖKÜLÜR ve bağışıklık sistemi bunu 'yabancı hasar' olarak görüp o bölgede İnflamasyon (iltihap) başlatır. Apoptoz (hücre intiharı) ise sessizdir, membran yırtılmaz, iltihap çekmez, fizyolojik olabilir."
    },
    {
        "id": "v10_diger_3",
        "subject": "Tıbbi Patoloji",
        "question": "Sigara içen bir kişinin solunum yolundaki silli prizmatik epitel hücrelerinin, kronik dumana dayanabilmek için zamanla daha dirençli olan 'Çok katlı yassı epitel' hücrelerine DÖNÜŞMESİ olayına ne ad verilir?",
        "options": [
            "Displazi",
            "Metaplazi",
            "Hiperplazi",
            "Anaplazi",
            "Neoplazi"
        ],
        "answer": "Metaplazi",
        "correctAnswer": 1,
        "explanation": "Metaplazi, kronik strese (örn: sigara dumanı) maruz kalan bir erişkin epitel veya mezenkimal dokusunun, o strese daha dayanıklı olan BAŞKA BİR erişkin hücre tipine (silindirikten yassıya) genetik reprogramlama ile 'geri dönüşümlü' olarak yer değiştirmesidir. Kanserin bir önceki sinyali olabilir ama kendisi kanser değildir."
    },
    {
        "id": "v10_diger_4",
        "subject": "Biyofizik",
        "question": "Miyopik bir gözde ışık ışınlarının kırılma fizyolojisi nasıldır ve düzeltmek için hangi tür mercek kullanılır?",
        "options": [
            "Işık retinanın önüne düşer / Kalın kenarlı (İraksak/Konkav) mercek kullanılır.",
            "Işık retinanın arkasına düşer / İnce kenarlı (Yakınsak/Konveks) mercek kullanılır.",
            "Işık retinada farklı iki noktaya düşer (Astigmat) / Silindirik mercek kullanılır.",
            "Göz uyumu yapılamaz (Presbiyopi) / Kalın kenarlı mercek kullanılır.",
            "Işık kornedan hiç geçemez / Prizmatik mercek kullanılır."
        ],
        "answer": "Işık retinanın önüne düşer / Kalın kenarlı (İraksak/Konkav) mercek kullanılır.",
        "correctAnswer": 0,
        "explanation": "Miyopide göz küresi normalden (ön-arka eksende) uzun veya kornea kırıcılığı fazla olduğu için uzaktan gelen ışınlar retinanın ÖNÜNDE (vitreus içinde) odaklanır (bulanık görür). Düzeltmek için ışığı dağıtıp arkaya (retina üzerine) itecek olan eksi dereceli, Konkav (kalın kenarlı/ıraksak) mercek takılır."
    },
    {
        "id": "v10_diger_5",
        "subject": "Biyofizik",
        "question": "Kanın damar içindeki akışını açıklayan Poiseuille Kanununa göre, damardan geçen kanın AKIM HIZI veya DEBİSİ, aşağıdakilerden hangisinin 'DÖRDÜNCÜ KUVVETİYLE' doğru orantılı olarak değişir?",
        "options": [
            "Damarın uzunluğu (L)",
            "Kanın vizkozitesi/kıvamı (n)",
            "Basınç farkı (ΔP)",
            "Damarın yarıçapı (r)",
            "Damarın toplam kesit alanı"
        ],
        "answer": "Damarın yarıçapı (r)",
        "correctAnswer": 3,
        "explanation": "Poiseuille kanununa [Q = (π.ΔP.r^4) / (8.n.L)] göre kan akımı, damarın YARIÇAPININ 4. kuvveti ile inanılmaz derecede yüksek oranda ilişkilidir. Yani bir damar genişleyip yarıçapı 2 katına çıkarsa, içinden geçen kanın direnci 16 kat düşer ve akım 16 kat ARTAR (2^4 = 16). Otonom sistem kan akışını sadece küçük daralma/genişlemelerle kontrol eder."
    },
    {
        "id": "v10_diger_6",
        "subject": "Toplum Sağlığı",
        "question": "Aşılamanın toplum sağlığındaki en büyük amacı, toplumun belirli bir yüzdesini bağışık hale getirerek, hastalığın o toplum içindeki bulaşma zincirini kırmak ve aşı olamayan bireyleri korumaktır. Bu kavrama ne ad verilir?",
        "options": [
            "Aktif bağışıklık",
            "Pasif bağışıklık",
            "Sürü bağışıklığı (Toplumsal immünite)",
            "Çapraz reaksiyon",
            "İzolasyon"
        ],
        "answer": "Sürü bağışıklığı (Toplumsal immünite)",
        "correctAnswer": 2,
        "explanation": "Bir toplumun çok büyük bir kısmı (%80-95'i hastalığa göre değişir) aşılanıp o hastalığa (örn. kızamık) karşı dirençli hale geldiğinde, virüs o toplumda tutunacak ve yayılacak kişi (konak) bulamaz. Böylece aşı olamamış (kemoterapi görenler vb.) o %5'lik savunmasız azınlık da dolaylı olarak SÜRÜ (Herd) Bağışıklığı tarafından korunmuş olur."
    },
    {
        "id": "v10_diger_7",
        "subject": "Toplum Sağlığı",
        "question": "Bir toplumda belirli bir zaman dilimi içinde 'YENİ ortaya çıkan' hastalık olgularının hızını belirten epidemiyolojik ölçüt aşağıdakilerden hangisidir?",
        "options": [
            "Prevalans",
            "İnsidans",
            "Mortalite hızı",
            "Morbidite oranı",
            "Kaba ölüm hızı"
        ],
        "answer": "İnsidans",
        "correctAnswer": 1,
        "explanation": "İnsidans, belli bir risk altındaki nüfusta, belirli bir SÜRE İÇERİSİNDE ortaya çıkan YENİ vakaların oranını (hızını) ölçer ve hastalığın yayılma riskini gösterir. Prevalans ise o AN'da var olan ESKİ + YENİ tüm hastaların oranını verir."
    },
    {
        "id": "v10_diger_8",
        "subject": "İletişim Becerileri",
        "question": "Hekimin hasta ile iletişim kurarken, kendi görüş, duygu ve değer yargılarını bir kenara bırakarak, kendini tam olarak 'hastanın yerine koyup' onun duygu ve düşüncelerini doğru anlamaya çalışması becerisine ne ad verilir?",
        "options": [
            "Sempatik olmak",
            "Apatik yaklaşım",
            "Empati kurmak",
            "Yansıtma",
            "Bilinçdışı özdeşleşim"
        ],
        "answer": "Empati kurmak",
        "correctAnswer": 2,
        "explanation": "Empati, hekimin objektifliğini kaybetmeden kendini hastanın psikolojik yerine koyması, onun açısından dünyayı görebilmesi ve bunu hastaya hissettirmesidir. Sempati ise hastanın acısını beraber yaşayıp ağlamak (objektifliği yitirmek) anlamına gelir ve tıpta istenmeyen bir durumdur."
    },
    {
        "id": "v10_diger_9",
        "subject": "Tıbbi Etik",
        "question": "Tedavisi mümkün olmayan, terminal dönemindeki kanserli bir hastanın dayanılmaz ağrılarını dindirmek için hekimin yüksek doz morfin uygulaması, bu dozun solunumu baskılayarak hastanın yaşamını kısaltma riskini bilmesine rağmen etik olarak kabul edilebilir. Bu durum 'Ağrıyı dindirme iyiliği, doğabilecek kötü sonuca üstündür' şeklindeki hangi doktrinle açıklanır?",
        "options": [
            "Helsinki Bildirgesi",
            "Çifte Etki (Double Effect) Doktrini",
            "Adalet ilkesi",
            "Aydınlatılmış onam",
            "Paternalizm"
        ],
        "answer": "Çifte Etki (Double Effect) Doktrini",
        "correctAnswer": 1,
        "explanation": "Çifte etki ilkesi, yapılan BİR eylemin öngörülen İKİ sonucu olabileceği (biri İYİ ağrının dinmesi, diğeri KÖTÜ solunumun durması) durumlarda; niyetin kesinlikle İYİ sonuca ulaşmak olduğu ve eylemin (ağrı kesici) orantılı bir iyilik sağladığı için eylemin ahlaken doğru (etik) kabul edilmesidir."
    },
    {
        "id": "v10_diger_10",
        "subject": "Bilimsel Araştırma",
        "question": "Kanıta dayalı tıpta kanıt düzeyi EN YÜKSEK olarak kabul edilen, daha önce aynı konuda yapılmış çok sayıdaki randomize kontrollü çalışmanın sonuçlarının birleştirilip matematiksel ve istatistiksel olarak yeniden analiz edildiği çalışma tipi hangisidir?",
        "options": [
            "Vaka takdimi (Case report)",
            "Uzman görüşü",
            "Hayvan deneyleri",
            "Meta-Analiz",
            "Kesitsel çalışma"
        ],
        "answer": "Meta-Analiz",
        "correctAnswer": 3,
        "explanation": "Bilimsel çalışmaların hiyerarşisinde en zayıf olan uzman görüşü/vaka takdimleridir. İlerledikçe Kohort, RCT'ler gelir. En güçlü, en güvenilir ve objektif kanıt ise yüzlerce yüksek kaliteli klinik araştırmanın verilerinin devasa bir havuzda birleştirilip bilgisayarda 'Meta-Analiz (ve Sistematik derleme)' yapılarak elde edilen sonuçtur."
    },
    {
        "id": "v10_diger_11",
        "subject": "İletişim Becerileri",
        "question": "Hastaya ciddi veya kötü bir haber verirken SPIKES protokolünün kullanılmasında hekimin uyması gereken temel yaklaşımlardan BİRİ DEĞİLDİR?",
        "options": [
            "Haberi verirken hastayı ayakta tutarak veya kapı eşiğinde söylemek",
            "Öncelikle hastanın ne bildiğini ve hastalığı nasıl algıladığını sormak",
            "Hastanın ne kadarını bilmek (duymak) istediğini sormak",
            "Haberi net, tıbbi terimlerden arınmış basit bir dille ve azar azar (uyarı atışı yaparak) söylemek",
            "Hastanın duygusal tepkilerine (ağlama vb.) sessizce katlanıp destek (empati) göstermek"
        ],
        "answer": "Haberi verirken hastayı ayakta tutarak veya kapı eşiğinde söylemek",
        "correctAnswer": 0,
        "explanation": "SPIKES (Setting, Perception, Invitation, Knowledge, Empathy, Strategy) protokolünde ilk kural (Setting/Ortam), kötü haber verilirken hekimin ve hastanın/yakınlarının mutlaka ÖZEL, sessiz bir odaya geçmeleri ve her iki tarafın da (hekim de dahil) OTURMASIDIR. Ayaküstü, asansörde, vizitte kalabalıkta kötü haber verilmez."
    },
    {
        "id": "v10_diger_12",
        "subject": "Toplum Sağlığı",
        "question": "Sağlıklı bireylere yapılan tarama testlerinde, 'Testin hasta olanları hasta olarak saptayabilme yeteneğine' ne ad verilir?",
        "options": [
            "Spesifisite (Seçicilik)",
            "Sensitivite (Duyarlılık)",
            "Pozitif Prediktif Değer (PPV)",
            "Negatif Prediktif Değer (NPV)",
            "Morbidite hızı"
        ],
        "answer": "Sensitivite (Duyarlılık)",
        "correctAnswer": 1,
        "explanation": "Sensitivite (Duyarlılık), toplumda gerçekten 'Hasta' olanların testte yüzde kaçının (+) çıktığıdır (A / A+C). Sensitivitesi çok yüksek testler tarama (screening) için harikadır çünkü hastayı kolay kolay gözden kaçırmaz (Yalancı negatifliği düşüktür). Spesifisite ise gerçek 'Sağlamları' bulma yeteneğidir."
    }
];

window.examsData['tam_kapsamli_final_v10'].questions.push(...v10Part2);
