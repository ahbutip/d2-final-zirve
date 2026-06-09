window.examsData = window.examsData || {};

const v12Part2 = [
    // --- TIBBİ BİYOKİMYA (11 Soru) ---
    {
        "id": "v12_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki metabolik olaylardan hangisi, kanda glukoz seviyesi düştüğünde karaciğerde glukoz ÜRETİLMESİNİ sağlayan de novo sentez yoludur?",
        "options": [
            "Glikoliz",
            "Glukoneogenez",
            "Glikojenez",
            "Glikojenoliz",
            "Pentoz Fosfat Yolu"
        ],
        "answer": "Glukoneogenez",
        "correctAnswer": 1,
        "explanation": "Glukoneogenez, karbonhidrat olmayan (Laktat, Gliserol, Glukojenik Amino Asitler) öncül maddelerden yeni glukoz moleküllerinin sentezlenmesi işlemidir. Açlığın erken dönemlerinde glikojen depoları (Glikojenoliz) kan şekerini korurken, uzun süren açlıklarda beynin tek besin kaynağı Glukoneogenez ile üretilir."
    },
    {
        "id": "v12_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Mitokondrideki Elektron Transfer Zincirinde, elektronları Kompleks I ve Kompleks II'den alıp Kompleks III'e taşıyan LİPİT yapısındaki hareketli elektron taşıyıcısı aşağıdakilerden hangisidir?",
        "options": [
            "Sitokrom c",
            "Koenzim Q (Ubikinon)",
            "NADH",
            "FADH2",
            "ATP Sentaz"
        ],
        "answer": "Koenzim Q (Ubikinon)",
        "correctAnswer": 1,
        "explanation": "Elektron Transport Zincirindeki (Solunum zinciri) iki hareketli taşıyıcıdan biri Ubikinon (Koenzim Q), diğeri Sitokrom C'dir. Sitokrom c, zarlar arası boşlukta bulunan küçük bir proteinken; Koenzim Q mitokondri iç zarının lipid tabakası içinde yüzebilen yağ yapılı (izoprenoid) tek elektron taşıyıcısıdır."
    },
    {
        "id": "v12_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "DNA dizisinden mRNA'nın sentezlenmesi olayına 'Transkripsiyon' denir. Ökaryotik hücrelerde bu işlemi gerçekleştiren, inhibitör olarak 'Alfa-Amanitin' tarafından güçlü bir şekilde bloke edilen enzim hangisidir?",
        "options": [
            "DNA Polimeraz I",
            "RNA Polimeraz II",
            "RNA Polimeraz I",
            "RNA Polimeraz III",
            "Telomeraz"
        ],
        "answer": "RNA Polimeraz II",
        "correctAnswer": 1,
        "explanation": "Ökaryotlarda proteinleri kodlayan mRNA'nın sentezini 'RNA Polimeraz II' gerçekleştirir. Ölümcül Köy Göçüren (Amanita phalloides) mantarının toksini olan alfa-amanitin, özellikle RNA Pol II'ye bağlanıp onu bloke eder, hücre protein üretemez ve karaciğer yetmezliğinden ölüm gerçekleşir."
    },
    {
        "id": "v12_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşırı pürin yıkımına veya atılımının bozulmasına bağlı olarak, eklemlerde 'Ürik Asit' kristallerinin birikmesiyle karakterize edilen inflamatuar hastalık aşağıdakilerden hangisidir?",
        "options": [
            "Romatoid Artrit",
            "Osteoartrit",
            "Gut Hastalığı",
            "Lesh-Nyhan Sendromu",
            "Kalsiyum Pirofosfat Artriti (Yalancı Gut)"
        ],
        "answer": "Gut Hastalığı",
        "correctAnswer": 2,
        "explanation": "Gut hastalığı, nükleik asitlerin (Adenin ve Guanin) son yıkım ürünü olan Ürik Asidin kanda aşırı yükselmesi (Hiperürisemi) sonucu, eklem içi (sinovyal sıvı) ve yumuşak dokularda kristalleşerek şiddetli mikrokristalin artrit (iltihap) yapmasıdır."
    },
    {
        "id": "v12_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Vücutta kolesterolün büyük bir kısmı lipoproteinler içinde taşınır. Karaciğerden çevre dokulara kolesterol TAŞIYAN ve fazlalığı ateroskleroza neden olduğu için 'kötü kolesterol' olarak bilinen lipoprotein hangisidir?",
        "options": [
            "Şilomikron",
            "VLDL",
            "LDL (Düşük Dansiteli Lipoprotein)",
            "HDL (Yüksek Dansiteli Lipoprotein)",
            "IDL"
        ],
        "answer": "LDL (Düşük Dansiteli Lipoprotein)",
        "correctAnswer": 2,
        "explanation": "LDL (Kötü Kolesterol), taşıdığı yüksek kolesterol yükünü (büyük bir kısmı kolesterol esteridir) çevre dokulara ve maalesef damar duvarı endotelinin altına bırakarak plak oluşumuna (ateroskleroz) neden olur. HDL (İyi Kolesterol) ise damardaki bu kolesterolü süpürerek (tersine kolesterol taşıması) karaciğere safra yapımı için geri götürür."
    },
    {
        "id": "v12_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Klinik biyokimyada, kandaki Üre düzeyini ölçen ve böbrek fonksiyonunu değerlendirmede kullanılan 'BUN' değerindeki azot kaynağı metabolik olarak HANGİ bileşiklerden gelir?",
        "options": [
            "Yağ asitleri",
            "Glikoz ve Galaktoz",
            "Amino asitler",
            "Kolesterol",
            "Pürinler"
        ],
        "answer": "Amino asitler",
        "correctAnswer": 2,
        "explanation": "Üre, vücuttaki proteinlerin ve amino asitlerin yıkımı (deaminasyonu) sonucu ortaya çıkan çok zehirli Amonyağın (NH3), karaciğerdeki Üre Döngüsü ile zehirsiz (suda eriyen) hale getirilmiş şeklidir. Yani idrardaki/kandaki ürenin asıl kaynağı protein/amino asit yıkımıdır."
    },
    {
        "id": "v12_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Yeni doğanlarda sıklıkla görülen ve fototerapi ile tedavi edilen 'Yenidoğan Sarılığı'nda, derinin sararmasına neden olan bilirubin TİPİ genellikle hangisidir?",
        "options": [
            "Konjuge (Direkt) Bilirubin",
            "Ankonjuge (İndirekt) Bilirubin",
            "Ürobilinojen",
            "Sterkobilin",
            "Biliverdin"
        ],
        "answer": "Ankonjuge (İndirekt) Bilirubin",
        "correctAnswer": 1,
        "explanation": "Yenidoğanda karaciğerin UDP-Glukuronil transferaz enzimi henüz tam olgunlaşmamıştır (fizyolojik immatürite). Bebek alyuvarları (HbF) hızlı parçalanınca oluşan 'Ankonjuge (İndirekt)' bilirubin karaciğerde işlenemez (konjuge edilemez) ve kanda birikir. Bu indirekt bilirubin yağda çözünür olduğu için beyne geçme (Kernikterus) tehlikesi vardır, bu yüzden mavi ışıkla (fototerapiyle) suda eriyen izomerlerine parçalanır."
    },
    {
        "id": "v12_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Diyabetik hastalarda uzun dönem kan şekeri kontrolünü değerlendirmek için kan tahlilinde ölçülen ve glukozun hemoglobine enzimatik OLMAYAN bir şekilde bağlandığı parametrenin adı nedir?",
        "options": [
            "Fruktozamin",
            "HbA1c (Glikozile Hemoglobin)",
            "C-Peptid",
            "Oral Glukoz Tolerans Testi (OGTT)",
            "Açlık Kan Şekeri (AKŞ)"
        ],
        "answer": "HbA1c (Glikozile Hemoglobin)",
        "correctAnswer": 1,
        "explanation": "Kanda yüksek seyreden glukoz, hemoglobinin N-terminalindeki valin amino asidine non-enzimatik (kendiliğinden) olarak bağlanır. Buna Glikozile (veya Glikatlanmış) Hemoglobin (HbA1c) denir. Eritrositin ömrü yaklaşık 120 gün olduğu için, bu değer hastanın son 2-3 aydaki ortalama şeker kontrolünün tartışmasız en güvenilir göstergesidir."
    },
    {
        "id": "v12_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Klinik enzimolojide, Prostat kanserinin tanısında ve tedavisinin takibinde kandaki seviyesi en çok kullanılan 'Tümör Belirteci' enzimi aşağıdakilerden hangisidir?",
        "options": [
            "Alkali Fosfataz (ALP)",
            "Alanin Aminotransferaz (ALT)",
            "Prostat Spesifik Antijen (PSA)",
            "Amilaz",
            "Kreatin Kinaz (CK-MB)"
        ],
        "answer": "Prostat Spesifik Antijen (PSA)",
        "correctAnswer": 2,
        "explanation": "PSA (Prostat Spesifik Antijen), aslında seminal sıvının vizkozitesini çözen bir proteaz enzimidir (Glikoprotein). Prostat hastalıklarında (kanser, hiperplazi, enfeksiyon) kana karışır. Prostat kanserinde yüksek oranda kanda artar ve hem taramada hem de tedavi sonrası hastalığın nüksetmesini (tekrarlamasını) izlemede kullanılır."
    },
    {
        "id": "v12_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "Asit-Baz bozukluklarında, aşırı kusma veya idrar söktürücü ilaç kullanımı sonucu kan pH'ının YÜKSELMESİ tablosuna ne ad verilir?",
        "options": [
            "Solunumsal Asidoz",
            "Metabolik Asidoz",
            "Solunumsal Alkaloz",
            "Metabolik Alkaloz",
            "Ketoasidoz"
        ],
        "answer": "Metabolik Alkaloz",
        "correctAnswer": 3,
        "explanation": "Mide suyunda bol miktarda Hidrojen (H+) ve Klor (Cl-) bulunur. Aşırı şiddetli kusmalarda vücut çok fazla asit kaybeder, kan bazikleşir (pH > 7.45) ve kanda Bikarbonat yükselir. Bu tabloya böbrek/metabolizma kaynaklı bir asit kaybı olduğu için 'Metabolik Alkaloz' denir."
    },
    {
        "id": "v12_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşırı miktarda alkol tüketimi sonucunda karaciğerde 'Alkol Dehidrogenaz' ve 'Aldehit Dehidrogenaz' enzimleri tam kapasiteyle çalışır. Bu yıkım işlemi sırasında Hücre içindeki HANGİ KOENZİMİN aşırı derecede ARTMASI, karaciğerde yağlanmaya ve hipoglisemiye neden olur?",
        "options": [
            "NAD+",
            "NADH",
            "FAD",
            "ATP",
            "Koenzim A"
        ],
        "answer": "NADH",
        "correctAnswer": 1,
        "explanation": "Etanol karaciğerde metabolize edilirken, elektronları alınarak Asetaldehite ve Asetata dönüştürülür. Bu elektronlar NAD+ tarafından alınır ve kucak dolusu 'NADH' üretilir. Hücrede NADH/NAD+ oranının felaket derecede yükselmesi, NAD+ bekleyen diğer yolları kilitler: Laktat pirüvata dönemez (Laktik asidoz ve Hipoglisemi), yağ asitleri yıkılamaz (Karaciğer yağlanması)."
    },

    // --- TIBBİ FARMAKOLOJİ (7 Soru) ---
    {
        "id": "v12_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Farmakodinamikte, bir reseptöre bağlanan ancak o reseptörü UYARMAYAN, aksine reseptörü İŞGAL EDEREK doğal vücut maddelerinin oraya bağlanmasını ENGELLEYEN ilaca ne ad verilir?",
        "options": [
            "Agonist",
            "Parsiyel Agonist",
            "Antagonist (Blokör)",
            "Ters (İnvers) Agonist",
            "Allosterik Modülatör"
        ],
        "answer": "Antagonist (Blokör)",
        "correctAnswer": 2,
        "explanation": "Antagonistlerin (Blokörlerin) reseptöre bağlanma ilgisi (Afinite) vardır ANCAK içsel etkinlikleri (Efikasite) SIFIRDIR. Kapıdaki kilide (reseptör) girerler ama anahtarı döndürmezler (işlem yapmazlar), üstelik kilidin içinde kırılıp (veya bekleyip) gerçek anahtarın da (agonist) oraya girmesini engellerler. (Örn: Beta-blokörler)."
    },
    {
        "id": "v12_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Hipertansiyon tedavisinde kullanılan ve böbreklerde idrar çıkışını artırarak vücuttan tuz/su atılımını sağlayan ilaç grubuna genel olarak ne ad verilir?",
        "options": [
            "Diüretikler",
            "Kalsiyum Kanal Blokörleri",
            "Beta Blokörler",
            "ACE İnhibitörleri",
            "Vazodilatörler"
        ],
        "answer": "Diüretikler",
        "correctAnswer": 0,
        "explanation": "Diüretikler (İdrar söktürücüler), böbrek tübüllerinde sodyum (ve dolayısıyla su) geri emilimini engelleyerek idrar hacmini artıran, vücudun kan hacmini (volümü) düşürerek tansiyonu indiren ve ödemi çözen temel ilaçlardır (Örn: Furosemid, Tiazid)."
    },
    {
        "id": "v12_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Zehirli mantar zehirlenmelerinde veya tarım ilacı zehirlenmelerinde ortaya çıkan aşırı parasempatik uyarılmayı DURDURMAK İÇİN kullanılan hayat kurtarıcı Antimuskarinik ilaç hangisidir?",
        "options": [
            "Adrenalin",
            "Atropin",
            "Propranolol",
            "Neostigmin",
            "Diazepam"
        ],
        "answer": "Atropin",
        "correctAnswer": 1,
        "explanation": "Organofosfat (tarım ilacı), asetilkolinesteraz enzimini yıkarak vücutta devasa bir Asetilkolin birikimine neden olur (SLUDGE sendromu: Salivasyon, Lakrimasyon, Urinasyon, Defekasyon). Bu krizdeki hastaya derhal 'Atropin' (Muskarinik reseptörlerin en temel kompetitif blokörü - Güzelavrat otundan elde edilir) verilerek reseptörler kapatılır."
    },
    {
        "id": "v12_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Ağrı, ateş ve inflamasyon tedavisinde kullanılan Non-Steroid Anti-İnflamatuvar İlaçların ortak etki mekanizması HANGİ ENZİMİ BLOKE ETMELERİDİR?",
        "options": [
            "Lipoksijenaz (LOX)",
            "Fosfolipaz A2",
            "Siklooksijenaz (COX-1 ve COX-2)",
            "Tromboz Sentaz",
            "Monoamin Oksidaz (MAO)"
        ],
        "answer": "Siklooksijenaz (COX-1 ve COX-2)",
        "correctAnswer": 2,
        "explanation": "Tüm NSAİ (Steroid olmayan iltihap giderici) ilaçlar (Aspirin dahil), Arakidonik asidi Prostaglandinlere dönüştüren Siklooksijenaz (COX) enzimlerini inhibe ederler. Prostaglandin üretimi durunca ateş düşer, ağrı kesilir ve iltihap (ödem) azalır. Aynı sebeple mideyi koruyan prostaglandinler de azaldığı için mide kanaması yan etkisi yaparlar."
    },
    {
        "id": "v12_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Astım krizlerinin tedavisinde kullanılan, solunum yollarındaki düz kasları gevşeterek nefes darlığını açan ilaçlar hangi otonom reseptörü UYARARAK etki ederler?",
        "options": [
            "Alfa-1 Adrenerjik",
            "Beta-1 Adrenerjik",
            "Beta-2 Adrenerjik",
            "Muskarinik-3 (M3)",
            "Nikotinik"
        ],
        "answer": "Beta-2 Adrenerjik",
        "correctAnswer": 2,
        "explanation": "Akciğer bronşlarında Beta-2 reseptörler bulunur ve uyarıldıklarında düz kası GEVŞETİRLER. Astım krizinde (örn: Salbutamol inhaleri - Ventolin) kullanılan ilaçlar 'Beta-2 Agonist'tir, hava yollarını genişleterek (bronkodilatasyon) hastanın rahat nefes almasını sağlarlar."
    },
    {
        "id": "v12_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Mide ülseri tedavisinde, mide asit salgısını hücre seviyesinde en son basamakta, tamamen ve en güçlü şekilde bloke eden ilaç grubu aşağıdakilerden hangisidir?",
        "options": [
            "H2 Reseptör Blokörleri (Örn: Famotidin)",
            "Antasitler (Örn: Magnezyum hidroksit)",
            "Proton Pompa İnhibitörleri (PPI - Örn: Omeprazol, Pantoprazol)",
            "Antikolinerjikler (Örn: Pirenzepin)",
            "Prostaglandin Analogları (Örn: Mizoprostol)"
        ],
        "answer": "Proton Pompa İnhibitörleri (PPI - Örn: Omeprazol, Pantoprazol)",
        "correctAnswer": 2,
        "explanation": "Proton Pompa İnhibitörleri (-prazoller), parietal hücredeki H+/K+ ATPaz (Proton pompasını) enzimine kovalent (irreversibl) bağlanarak asit üretiminin SONDURAK basamağını felç ederler. Ne asetilkolin, ne gastrin ne de histamin bu hücreden artık asit çıkartamaz. En güçlü asit baskılayıcılardır."
    },
    {
        "id": "v12_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Bir bakteriyel enfeksiyonda, antibiyotik seçimi yapılırken hastanın 'Penisilin' alerjisi olduğu öğrenilirse, penisilin ile ÇAPRAZ ALERJİ gösterme riski çok yüksek olan diğer Beta-Laktam antibiyotik grubu hangisidir?",
        "options": [
            "Makrolidler (Eritromisin)",
            "Sefalosporinler (Sefazolin, Seftriakson)",
            "Aminoglikozitler (Gentamisin)",
            "Florokinolonlar (Siprofloksasin)",
            "Tetrasiklinler"
        ],
        "answer": "Sefalosporinler (Sefazolin, Seftriakson)",
        "correctAnswer": 1,
        "explanation": "Hem Penisilinler hem de Sefalosporinler 'Beta-Laktam' halkasına sahip hücre duvarı sentez inhibitörleridir. Moleküler yapıları çok benzediği için penisiline anafilaksi (şiddetli alerji) geçiren bir hastaya Sefalosporin verildiğinde de (%5-10 ihtimalle) aynı alerjik şok (çapraz reaksiyon) yaşanabilir, kontrendikedir."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    {
        "id": "v12_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kan hücrelerinin yapımı embriyolojik dönemde çeşitli aşamalardan geçer. Birinci aydan itibaren başlayarak gebeliğin sonuna kadar KESİNTİSİZ olarak kan yapımına katılan organ hangisidir?",
        "options": [
            "Yolk sac (Vitellüs kesesi)",
            "Karaciğer",
            "Dalak",
            "Timus",
            "Kemik iliği"
        ],
        "answer": "Karaciğer",
        "correctAnswer": 1,
        "explanation": "Hemopoez evreleri: 1) Mezoblastik evre (Yolk sac - ilk 2 ay), 2) Hepatik evre (Karaciğer - 6. haftada başlar doğuma kadar devam eder, tepe noktası 3-6. aylardır), 3) Dalak ve Timus evresi (2-4. aylar), 4) Miyeloid evre (Kemik iliği - 5. ayda başlar, ömür boyu sürer). En kesintisiz çalışan (azalarak da olsa doğuma dek) Karaciğerdir."
    },
    {
        "id": "v12_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kadın üreme sisteminde ovülasyon sonrası yumurtalıklarda kalan folikül hücrelerinin farklılaşarak oluşturduğu, gebeliğin ilk aylarında uterusu desteklemek için yoğun PROGESTERON hormonu salgılayan SARI renkli geçici endokrin yapıya ne ad verilir?",
        "options": [
            "Corpus albicans",
            "Corpus luteum",
            "Folikül kisti",
            "Zona pellucida",
            "Corona radiata"
        ],
        "answer": "Corpus luteum",
        "correctAnswer": 1,
        "explanation": "Ovülasyonla Oosit atıldıktan sonra geride kalan Granüloza ve Teka hücreleri LH hormonunun etkisiyle içlerine lipid (sarı pigment) depolayarak büyür ve 'Corpus Luteum'u (Sarı Cisim) oluştururlar. Amacı bolca Progesteron üreterek rahmi olası bir gebeliğe hazırlamaktır. Gebelik olmazsa dejenere olup beyaz renkli 'Corpus albicans'a döner."
    },
    {
        "id": "v12_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Epitel doku hücreleri bir bazal membran üzerine otururlar. Epitel hücrelerini ALTTAN bazal membrandaki kolajen liflere perçinleyen hücre zarı bağlantı kompleksi hangisidir?",
        "options": [
            "Zonula occludens (Sıkı bağlantı)",
            "Zonula adherens",
            "Desmozom (Macula adherens)",
            "Hemidesmozom",
            "Gap junction (Oluklu bağlantı)"
        ],
        "answer": "Hemidesmozom",
        "correctAnswer": 3,
        "explanation": "Desmozomlar (Macula adherens) hücreyi KENDİ YAN KOMŞU hücresine yapıştırırken; Hemidesmozomlar (Yarım desmozom) epitel hücresinin tabanını altındaki BAZAL MEMBRANA (bağ dokusuna) integrinler aracılığıyla zımbalar. Bu koparsa ciltte bül (su toplanması/kabarcık) yapan otoimmün hastalıklar (Örn: Büllöz pemfigoid) oluşur."
    },
    {
        "id": "v12_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Gastrointestinal sistemde kalın bağırsak mukozasını ince bağırsak mukozasından histolojik olarak AYIRT ETMEYİ sağlayan en karakteristik özellik nedir?",
        "options": [
            "Peyer plaklarının devasa boyutta olması",
            "Villusların TAMAMEN BULUNMAMASI ve düz bir epitel yüzeyinin olması",
            "Brunner bezlerinin aşırı artması",
            "Çok katlı yassı epitel ile örtülü olması",
            "Mide çukurlarının (Foveola gastrica) bulunması"
        ],
        "answer": "Villusların TAMAMEN BULUNMAMASI ve düz bir epitel yüzeyinin olması",
        "correctAnswer": 1,
        "explanation": "İnce bağırsağın işi emilim olduğu için yüzeyini milyarlarca parmak şekilli 'Villus' ile büyütmüştür. Kalın bağırsağın asıl işi suyu çekip dışkıyı depolamak olduğu için VİLLUSLARI YOKTUR. Düz bir yüzeyi, derin aşağıya inen bezleri (Lieberkühn kriptaları) ve kayganlığı sağlamak için çok bol miktarda 'Goblet (Mukus) hücresi' vardır."
    },
    {
        "id": "v12_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Lenfatik sistemin kanı filtre eden tek organı olan Dalak, beyaz pulpa ve kırmızı pulpa olarak ikiye ayrılır. Beyaz pulpada, dalağa giren küçük atardamarların etrafını kılıf gibi saran T-Lenfositlerin oluşturduğu silindirik yapıya ne ad verilir?",
        "options": [
            "Peyer plağı",
            "Hassall cisimciği",
            "PALS (Periarteriyoler Lenfatik Kılıf)",
            "Billroth kordonları",
            "Lenf folikülü (B-hücre bölgesi)"
        ],
        "answer": "PALS (Periarteriyoler Lenfatik Kılıf)",
        "correctAnswer": 2,
        "explanation": "Dalaktaki Beyaz pulpa (bağışıklık dokusu), santral arteri bir kol gibi saran T lenfositlerin oluşturduğu Periarteriyoler Lenfatik Kılıf (PALS) ve bunun üzerine tutunmuş B lenfositlerin oluşturduğu Lenf Foliküllerinden meydana gelir. Yaşlı alyuvarların parçalandığı yer ise Kırmızı pulpadaki Billroth kordonlarıdır."
    },
    {
        "id": "v12_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Aksiyon potansiyelini hızlandıran 'Miyelin kılıf'ı, Merkezi Sinir Sisteminde hangi glia hücresi oluştururken; Periferik Sinir Sisteminde hangi glia hücresi oluşturur?",
        "options": [
            "Merkezde Astrosit / Periferde Schwann",
            "Merkezde Oligodendrosit / Periferde Schwann",
            "Merkezde Mikroglia / Periferde Ependim",
            "Merkezde Schwann / Periferde Oligodendrosit",
            "Merkezde Oligodendrosit / Periferde Satellit hücresi"
        ],
        "answer": "Merkezde Oligodendrosit / Periferde Schwann",
        "correctAnswer": 1,
        "explanation": "Miyelinasyonun patronları iki tanedir. Kafatasının ve omurganın İÇİNDE (MSS'de) ahtapot gibi kollarıyla birden fazla aksonu aynı anda saran hücre 'Oligodendrosit'tir. Sinir sisteminin DIŞINDAKİ vücut bölgelerinde (PSS'de) ise aksonlara sarılarak kılıfı oluşturan hücre 'Schwann' hücreleridir (Her Schwann tek bir boğum sarar)."
    },
    {
        "id": "v12_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kıkırdak dokusu kan damarı, sinir ve lenf damarı İÇERMEYEN bir dokudur. Bu nedenle zedelenmelerde çok zor iyileşir. Kıkırdak hücreleri besin ve oksijeni NASIL temin ederler?",
        "options": [
            "Sinir uzantılarından doğrudan emerek",
            "Kendileri fotosentez yaparak",
            "Matrikste serbest akan kandan",
            "Kıkırdağın dışındaki kılıf olan Perikondriyumdaki damarlardan (veya sinovyal sıvıdan) DİFÜZYON yoluyla",
            "Doğrudan kemik iliği boşluğundan"
        ],
        "answer": "Kıkırdağın dışındaki kılıf olan Perikondriyumdaki damarlardan (veya sinovyal sıvıdan) DİFÜZYON yoluyla",
        "correctAnswer": 3,
        "explanation": "Kıkırdak matrikste damar yoktur. Besinler ve oksijen, kıkırdağı dıştan saran yoğun bağ dokusu zarı olan 'Perikondriyum'daki damarlardan sızarak (difüzyonla) matriksin su molekülleri arasından süzülüp hücrelere ulaşır. (Eklem yüzündeki kıkırdakta perikondriyum yoktur, o besinini doğrudan içindeki sinovyal eklem sıvısından difüzyonla alır)."
    },
    {
        "id": "v12_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kalp kası dokusunu, çizgili iskelet kasından AYIRAN histolojik ve fonksiyonel en temel görünüm özellikleri nelerdir?",
        "options": [
            "Hücrelerin tek çekirdekli, dallanmış yapıda (çatal) olması ve aralarında uyarıyı ileten 'Discus intercalatus (Ara disk)'ların bulunması",
            "Hücrelerin çok çekirdekli (sinsityal) dev düz silindirler şeklinde olması",
            "Kasılma için aktin-miyozin çizgilenmelerinin (Sarkomer) bulunmaması",
            "Motor son plak ile doğrudan somatik sinirlerce kasılması",
            "Miyoglobin içermemesi"
        ],
        "answer": "Hücrelerin tek çekirdekli, dallanmış yapıda (çatal) olması ve aralarında uyarıyı ileten 'Discus intercalatus (Ara disk)'ların bulunması",
        "correctAnswer": 0,
        "explanation": "Kalp kası mikroskopta şöyle tanınır: 1) Çizgilidir (sarkomerleri vardır), 2) İskelet kası gibi dümdüz boru değildir, pantolon paçası gibi uçlarından DALLANIR, 3) Çekirdekleri kenarda değil hücrenin TAM ORTASINDADIR (genelde tek), 4) Hücrelerin birleştiği yerlerde kalın merdiven basamağı gibi Discus intercalatus'lar (İnterkale disk / Gap junction) bulunur."
    },
    {
        "id": "v12_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyo gelişiminde 'Plasenta'nın anneye ait olan parçasını, uterusun gebelikte dönüşmüş endometriyumu oluşturur. Bu anne parçasına ne ad verilir?",
        "options": [
            "Chorion frondosum (Koryon)",
            "Amnion kesesi",
            "Decidua basalis (Desidua)",
            "Sinsityotrofoblast",
            "Trofoblast tabakası"
        ],
        "answer": "Decidua basalis (Desidua)",
        "correctAnswer": 2,
        "explanation": "Plasenta iki kısımdan oluşur: Bebeğe ait (fetal) kısım 'Koryon (Chorion frondosum)' iken, Anneye ait (maternal) kısım uterus duvarının kalınlaşmasıyla oluşan 'Decidua basalis'tir. Bebeğin villusları (kökleri), annenin desiduasındaki kan havuzlarına dalarak alışverişi gerçekleştirir."
    },
    {
        "id": "v12_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek tübüllerinin en son kısmı olan ve idrarın toplandığı, ADH hormonu etkisiyle suyu geri emen 'Toplayıcı Kanallar'ın iç yüzeyini hangi tip epitel döşer?",
        "options": [
            "Tek katlı yassı epitel (Skuamöz)",
            "Çok katlı yassı epitel",
            "Transizyonel (Değişici / Ürotelyum) epitel",
            "Tek katlı kübik epitel (Aşağı indikçe prizmatikleşen)",
            "Yalancı çok katlı silli epitel"
        ],
        "answer": "Tek katlı kübik epitel (Aşağı indikçe prizmatikleşen)",
        "correctAnswer": 3,
        "explanation": "Böbrek tübüllerinin genel kuralı, salgılama ve emilim yaptıkları için Tek Katlı Kübik (Küp) epitel olmalarıdır. Toplayıcı kanallar da başlangıçta tek katlı kübik hücrelerden (Esas/Principal ve İnterkalar hücreler) oluşur, ancak lümene/papillaya yaklaştıkça daha da uzayarak tek katlı prizmatik (silindirik) epitele dönüşürler. (Not: İdrar yolunun devamı olan mesane ise Transizyonel / Ürotelyum ile örtülüdür)."
    },
    {
        "id": "v12_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Endokrin sistemin en önemli bezlerinden olan Hipofiz Bezinin arka lobu, aslında bez epitelinden değil, embriyolojik olarak Diensefalon'un aşağı sarkmasıyla oluşur. Bu nedenle nörohipofizde hormon SENTEZLENMEZ. Arka hipofizin histolojik yapısını ağırlıklı olarak ne oluşturur?",
        "options": [
            "Kübik epitelyal hücre kordonları",
            "Tiroid benzeri kolloid dolu foliküller",
            "Kromofob ve kromofil (asidofil/bazofil) hücre kümeleri",
            "Hipotalamustan inen miyelinsiz sinir aksonları ve destekleyici Pituisef hücreleri (Glia)",
            "Yoğun kollajen lif demetleri"
        ],
        "answer": "Hipotalamustan inen miyelinsiz sinir aksonları ve destekleyici Pituisef hücreleri (Glia)",
        "correctAnswer": 3,
        "explanation": "Ön hipofiz (Adenohipofiz) gerçek bir bez epitelidir ve ağız tavanından (Rathke kesesi) köken alır (asidofil/bazofil). Arka hipofiz (Nörohipofiz) ise beyin dokusunun uzantısıdır; hipotalamusta (N. supraopticus ve paraventricularis) sentezlenen hormonları (Oksitosin/ADH) taşıyan uzun aksonların uçlarını (Herring cisimcikleri) ve glia benzeri pituisef hücrelerini içerir."
    },
    {
        "id": "v12_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kemik dokusunun inorganik matriksini oluşturan, kemiğe sertliğini veren ve vücuttaki kalsiyum ile fosfatın en büyük depolanma formu olan mineral kristallerinin adı nedir?",
        "options": [
            "Osteoid",
            "Hidroksiapatit kristalleri",
            "Kalsiyum oksalat",
            "Hyalüronik asit",
            "Kalsiyum karbonat"
        ],
        "answer": "Hidroksiapatit kristalleri",
        "correctAnswer": 1,
        "explanation": "Kemiğin kuru ağırlığının %65'ini kalsiyum ve fosfatın özel bir kristal yapıda dizilmesiyle oluşan 'Hidroksiapatit kristalleri' [Ca10(PO4)6(OH)2] oluşturur. Bu inorganik yapı kemiğe asıl sağlamlığını ve direncini verir."
    },
    {
        "id": "v12_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kan tahlili preparatında, lökositler içinde sayıca EN FAZLA olan, bakteriyel enfeksiyonlarda olay yerine İLK GÖÇ EDEN, çekirdeği 3-5 parçalı fagositoz uzmanı hücre hangisidir?",
        "options": [
            "Lenfosit",
            "Monosit",
            "Nötrofil (Polimorfonüveli Lökosit - PNL)",
            "Eozinofil",
            "Bazofil"
        ],
        "answer": "Nötrofil (Polimorfonüveli Lökosit - PNL)",
        "correctAnswer": 2,
        "explanation": "Nötrofiller (PNL), kandaki akyuvarların en kalabalık grubudur. Bir yerimiz kesilip bakteriler girdiğinde olay yerine en hızlı giden, bakterileri yiyip onlarla birlikte ölen (İrini/İltihabı oluşturan) öncü piyadelerdir. Çekirdekleri çok parçalıdır (3-5 loblu)."
    },

    // --- TIBBİ MİKROBİYOLOJİ (14 Soru) ---
    {
        "id": "v12_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Mide mukozasında asidik ortama rağmen yaşayabilen, ürettiği yüksek 'Üreaz' enzimi ile etrafında bazik bir amonyak bulutu oluşturup kendini koruyan ve mide ülseri ile mide kanserine neden olduğu kesinleşen bakteri hangisidir?",
        "options": [
            "Escherichia coli",
            "Helicobacter pylori",
            "Campylobacter jejuni",
            "Salmonella typhi",
            "Vibrio cholerae"
        ],
        "answer": "Helicobacter pylori",
        "correctAnswer": 1,
        "explanation": "H. pylori, asit deryasında hayatta kalabilen tek bakteridir. Bunu güçlü Üreaz enzimiyle üreyi amonyağa (bazik) parçalayıp kendini asitten izole ederek yapar. Gastritin, mide/duodenum ülserlerinin ve mide kanserinin %90'ından sorumludur. Üre-Nefes Testi ile tanısı konur."
    },
    {
        "id": "v12_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bağışıklık sisteminde hücre yüzeyine tutunan virüslere veya tümör hücrelerine karşı antijene ÖZGÜL OLMAYAN şekilde savaşan, hedef hücreye perforin/granzim sıkarak apoptoza sokan Doğal Bağışıklık lenfositi aşağıdakilerden hangisidir?",
        "options": [
            "CD8+ Sitotoksik T Lenfosit",
            "Doğal Öldürücü (Natural Killer - NK) Hücreler",
            "B Lenfosit (Plazma hücresi)",
            "Nötrofil",
            "Eozinofil"
        ],
        "answer": "Doğal Öldürücü (Natural Killer - NK) Hücreler",
        "correctAnswer": 1,
        "explanation": "NK (Doğal Öldürücü) hücreler lenfosit olmalarına rağmen Antijene Spesifik DEĞİLLERDİR. Timusta eğitilmezler. Görevleri kanda devriye gezip, yüzeyinde 'Ben Kendindenim (MHC Sınıf I)' kimliğini kaybeden (virüs girmiş veya kanserleşmiş) tüm hücreleri vurup yok etmektir."
    },
    {
        "id": "v12_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Dışarıdan hazır antikorların, serumların veya antitoksinlerin hastaya verilmesi vücutta nasıl bir bağışıklık tipi oluşturur?",
        "options": [
            "Aktif Doğal Bağışıklık",
            "Aktif Yapay (Suni) Bağışıklık",
            "Pasif Bağışıklık (Pasif İmmünite)",
            "Kalıcı (Ömür boyu) Bağışıklık",
            "Gecikmiş Bağışıklık"
        ],
        "answer": "Pasif Bağışıklık (Pasif İmmünite)",
        "correctAnswer": 2,
        "explanation": "Pasif bağışıklıkta; vücudun bağışıklık sistemi ÇALIŞMAZ, kendisi antikor üretmez. Antikorlar DIŞARIDAN hazır olarak verilir (Serum, antitoksin, anne sütündeki IgA veya anne kanındaki IgG). Bu koruma ANINDADIR (hemen başlar) ancak KISA SÜRELİDİR (haftalar-aylar içinde antikor yıkılınca biter), hafıza (bellek) bırakmaz."
    },
    {
        "id": "v12_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "DNA virüsleri genellikle nükleusta, RNA virüsleri ise sitoplazmada replike olur. Bu genel kurala uymayarak, SİTOPLAZMADA replike olan TEK ve EN BÜYÜK DNA virüsü ailesi aşağıdakilerden hangisidir?",
        "options": [
            "Herpesviridae (Herpes)",
            "Adenoviridae (Adenovirüs)",
            "Papillomaviridae (HPV)",
            "Poxviridae (Çiçek Virüsü Ailesi)",
            "Hepadnaviridae (Hepatit B)"
        ],
        "answer": "Poxviridae (Çiçek Virüsü Ailesi)",
        "correctAnswer": 3,
        "explanation": "Poxvirüs ailesi (Çiçek virüsü / Variola, Suçiçeği DEĞİLDİR), insanları enfekte eden EN BÜYÜK ve EN KARMAŞIK virüstür. Kendi RNA polimerazı ve tüm kopyalama aletleri içinde hazır olduğu için (tuğla şeklinde bir çekirdeği vardır) hücre çekirdeğine girmesine gerek kalmaz, çoğalmasını sitoplazmada tamamlar."
    },
    {
        "id": "v12_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Antibiyotiklerden olan Penisilinlerin bakterileri öldürme mekanizması aşağıdakilerden hangisidir?",
        "options": [
            "Bakteri ribozomunda 50S alt birimine bağlanarak protein sentezini durdurmak",
            "Bakteri DNA Giraz enzimi inhibisyonu",
            "Folik asit sentezi inhibisyonu",
            "Peptidoglikan zincirler arasındaki çapraz bağları (Transpeptidasyon) kuran enzimleri (PBP) bağlayıp hücre duvarı sentezini durdurmak (Bakteri patlar)",
            "Hücre zarı geçirgenliğini artırarak eritmek"
        ],
        "answer": "Peptidoglikan zincirler arasındaki çapraz bağları (Transpeptidasyon) kuran enzimleri (PBP) bağlayıp hücre duvarı sentezini durdurmak (Bakteri patlar)",
        "correctAnswer": 3,
        "explanation": "Penisilinler ve tüm Beta-laktamlar 'Hücre Duvarı Sentez İnhibitörleridir'. Bakterinin çoğalırken kalın hücre duvarı (peptidoglikan ağı) örmesini sağlayan 'Transpeptidaz' (Penisilin Bağlayan Proteinler - PBP) enzimini bloke ederler. Zırhı oluşamayan bakteri hücresi içine su dolarak (ozmotik basınçla) patlar."
    },
    {
        "id": "v12_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki sterilizasyon / dezenfeksiyon yöntemlerinden hangisinde malzemenin üzerinde tek bir virüs veya bakteri sporu BİLE KALMADIĞI KESİN kabul edilir?",
        "options": [
            "100°C'de (Kaynar suda) 30 dakika kaynatmak",
            "Alkol (%70 Etil alkol) ile iyice silmek",
            "Otoklav cihazında, 121°C'de 1 Atmosfer basınçlı doymuş su buharında 15-20 dakika tutmak",
            "Povidon İyot (Baticon) içinde bekletmek",
            "Pastörizasyon yapmak (Sütü 72 derecede 15 saniye ısıtmak)"
        ],
        "answer": "Otoklav cihazında, 121°C'de 1 Atmosfer basınçlı doymuş su buharında 15-20 dakika tutmak",
        "correctAnswer": 2,
        "explanation": "Sterilizasyon: Cansız bir ortamdaki, çok dirençli bakteri sporları DAHİL olmak üzere TÜM mikroorganizmaların kesinlikle öldürülmesi (yok edilmesi) işlemidir (%100 temizlik). Bunun altın standardı (ve ameliyathane gereçleri için kullanılan) basınçlı su buharı yaratan OTOKLAV cihazıdır. Kaynatma veya kimyasallar sporları öldüremez (Dezenfeksiyondur)."
    },
    {
        "id": "v12_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Üreme çağındaki sağlıklı kadınların vajina florasında EN BOL bulunan, laktik asit üreterek ortamın pH'ını asidik tutan ve böylece mantar / patojen enfeksiyonları engelleyen dost bakteri aşağıdakilerden hangisidir?",
        "options": [
            "Gardnerella vaginalis",
            "Lactobacillus türleri (Döderlein basili)",
            "Candida albicans",
            "Escherichia coli",
            "Neisseria gonorrhoeae"
        ],
        "answer": "Lactobacillus türleri (Döderlein basili)",
        "correctAnswer": 1,
        "explanation": "Kadın genital sisteminin bekçisi Döderlein Basili (Lactobacillus acidophilus)'dir. Östrojenin etkisiyle vajinaya dökülen glikojeni parçalayarak laktik asit üretir. Bu güçlü asit, diğer zararlı organizmaların (özellikle mantarların) yaşamasını engeller. Antibiyotik kullanımı bu dost bakterileri öldürdüğünde hemen mantar enfeksiyonu başlar."
    },
    {
        "id": "v12_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşırı sulu, günde 10-15 litreye varan 'pirinç suyu' görünümünde ishale neden olan, hiç kanama yapmamasına rağmen çok şiddetli dehidrasyonla saatler içinde hastayı şoka sokarak öldürebilen 'Vibrio cholerae' mikrobunun toksini hücresel düzeyde ne yapar?",
        "options": [
            "Bağırsak epitelini parçalayarak yara açar",
            "Adenilat Siklaz enzimini sürekli AKTİF tutarak hücre içi cAMP'yi aşırı artırır, böylece lümene klor ve litrelerce su sızdırır",
            "G-proteinini durdurur",
            "Peptidoglikanı sentezler",
            "Kasları felç eder"
        ],
        "answer": "Adenilat Siklaz enzimini sürekli AKTİF tutarak hücre içi cAMP'yi aşırı artırır, böylece lümene klor ve litrelerce su sızdırır",
        "correctAnswer": 1,
        "explanation": "Kolera toksini (A-B yapısında bir toksindir), bağırsak epitel hücresine girince Gs proteinini (Uyarıcı G proteini) sürekli AÇIK konumda kilitler. Adenilat siklaz durmaksızın cAMP üretir. Artan cAMP, klor (CFTR) kanallarını açar, lümene klor akar, arkasından sodyum ve SU çekilir (Salgısal İshal). Toksin hücreyi öldürmez, sadece sekresyon şelalesi başlatır."
    },
    {
        "id": "v12_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sıtma hastalığına neden olan Plasmodium parazitinin insan vücuduna girdikten sonra ilk kuluçkaya yattığı ve yıllar sonra tekrarlayan nöbetlerin kaynağı olan İLK ORGAN hangisidir?",
        "options": [
            "Dalak",
            "Karaciğer",
            "Kemik iliği",
            "Kırmızı kan hücreleri (Eritrositler)",
            "Beyin"
        ],
        "answer": "Karaciğer",
        "correctAnswer": 1,
        "explanation": "Anofel türü dişi sivrisinek kan emerken 'Sporozoit'leri kana verir. Bu sporozoitler 30-60 dakika içinde hızla KARACİĞERE gider ve hepatositleri işgal eder (Karaciğer dönemi). Orada gizlice çoğalıp on binlerce Merozoit olarak kana/Eritrositlere saldırırlar. Asıl ateş nöbeti alyuvarlar patladığında (kan döneminde) başlar."
    },
    {
        "id": "v12_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram bakterilerin hücre duvarında enine gömülü halde bulunan, antijenik özelliği çok yüksek olan, makrofajları aktive ederek şiddetli inflamasyona neden olan duvar yapıtaşı aşağıdakilerden hangisidir?",
        "options": [
            "Lipopolisakkarit (LPS / Endotoksin)",
            "Teikoik Asit / Lipoteikoik Asit",
            "Kapsül",
            "Glikokaliks",
            "Flajellin"
        ],
        "answer": "Teikoik Asit / Lipoteikoik Asit",
        "correctAnswer": 1,
        "explanation": "Gram Negatiflerde toksik şoku (Endotoksin) yapan zarın dışındaki 'LPS' iken; Gram POZİTİFLERDE LPS bulunmaz, onların yerine hücre duvarının (peptidoglikanın) içine saplanmış çubuk şeklindeki 'Teikoik Asit ve Lipoteikoik asitler' bağışıklık sistemini uyararak toksik etki yapar."
    },
    {
        "id": "v12_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bağışıklık sisteminde ilk savunma hattını oluşturan, mukoza yüzeylerinde çok yoğun bulunan, mikropların hücreye tutunmasını engelleyen antikor sınıfı hangisidir?",
        "options": [
            "IgG",
            "IgA (Sekretuvar IgA)",
            "IgM",
            "IgE",
            "IgD"
        ],
        "answer": "IgA (Sekretuvar IgA)",
        "correctAnswer": 1,
        "explanation": "IgA (Özellikle salgısal/Sekretuvar IgA), dimerik (ikili) yapıdadır ve vücudun dış dünyayla buluştuğu MUKOZA zarlarının (solunum, sindirim, ürogenital) ve salgıların (anne sütü, gözyaşı) bekçisidir. Bebeği anneden koruyan sütün içindeki ana antikordur."
    },
    {
        "id": "v12_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Klinikte 'Fırsatçı' mantar enfeksiyonlarının en sık nedeni olan, normalde ağız ve vajinada zararsız florada bulunurken bağışıklık düştüğünde invaziv enfeksiyona neden olan, kültürde 'Germ tüpü' oluşturması ile tanınan mayamsı mantar hangisidir?",
        "options": [
            "Aspergillus fumigatus",
            "Cryptococcus neoformans",
            "Candida albicans",
            "Histoplasma capsulatum",
            "Mucor"
        ],
        "answer": "Candida albicans",
        "correctAnswer": 2,
        "explanation": "Candida albicans normal insan florasının (ağız, vajina, bağırsak) parçası olan 'dimorfik' bir mayadır. Antibiyotik kullanımı veya immün yetmezlik (AIDS) durumlarında dokulara saldırır. İnsan serumuna ekildiğinde 37 derecede 2 saatte kuyruk çıkarması ('Germ tüpü' testi / Çimlenme Borusu) tanıda %100 spesifiktir."
    },
    {
        "id": "v12_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakterilerin birbirleriyle iletişim kurmasını, yüzeylere sıkıca yapışmasını ve antibiyotiklerin içeri sızmasını tamamen MÜKEMMEL BİR ZIRH GİBİ engelleyen, bakterilerin ortaklaşa ürettiği yapışkan tabakaya ne ad verilir?",
        "options": [
            "Porin kanalları",
            "Biyofilm (Biofilm)",
            "Kapsül",
            "Endospor",
            "Plasmid ağı"
        ],
        "answer": "Biyofilm (Biofilm)",
        "correctAnswer": 1,
        "explanation": "Biyofilm (Slime faktörü / Glikokaliks), bakterilerin organize olarak salgıladıkları sümüksü, hücre dışı matriks ağıdır. Bir katetere (veya dişe plak olarak) yerleşen bakteriler biyofilm örterek bağışıklık sisteminden ve antibiyotiklerden %100'e yakın korunurlar. Genellikle tedavi için protezin/kateterin VÜCUTTAN ÇIKARILMASI gerekir."
    },
    {
        "id": "v12_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Tüberküloza yol açan 'Mycobacterium tuberculosis' bakterisinin Gram Boyama ile boyanamamasının temel nedeni, hücre duvarında aşırı miktarda bulunan ve bakteriyi çok dirençli kılan hangi maddedir?",
        "options": [
            "Peptidoglikan",
            "Mikolik Asit (Çok uzun zincirli yağ/mumsu tabaka)",
            "Lipopolisakkarit",
            "Protein kılıf",
            "Ergosterol"
        ],
        "answer": "Mikolik Asit (Çok uzun zincirli yağ/mumsu tabaka)",
        "correctAnswer": 1,
        "explanation": "Mycobacterium türleri (Verem, Cüzzam), hücre duvarlarında çok yoğun oranda (%60) Mikolik Asit (mumsu, hidrofobik devasa bir lipid tabakası) içerir. Boyalar bu mumu aşıp içeri giremez, girse de çıkamaz. Bu yüzden ARB (Asidorezistan / aside dirençli - Ehrlich-Ziehl-Neelsen) özel boyama ile Kırmızı boyanarak tespit edilirler."
    },

    // --- DİĞER (Patoloji, Toplum, Etik, Biyofizik vb.) (12 Soru) ---
    {
        "id": "v12_diger_1",
        "subject": "Tıbbi Patoloji",
        "question": "Hücresel zedelenmede Apoptoz ile Nekroz arasındaki en temel ve belirleyici FARK aşağıdakilerden hangisidir?",
        "options": [
            "Nekrozda hücre şişip parçalanır ve çevre dokuda iltihap (inflamasyon) yaratır, Apoptozda ise hücre büzüşüp paketlenir ve iltihap yaratmaz.",
            "Nekroz fizyolojik bir olaydır, apoptoz ise daima hastalıklarda olur.",
            "Apoptoz sırasında hücrenin DNA'sı tamamen korunur, hiç hasar görmez.",
            "Nekrozda hücre zarı sağlam kalır.",
            "Apoptoz her zaman doku kanlanmasının (iskemi) durmasıyla olur."
        ],
        "answer": "Nekrozda hücre şişip parçalanır ve çevre dokuda iltihap (inflamasyon) yaratır, Apoptozda ise hücre büzüşüp paketlenir ve iltihap yaratmaz.",
        "correctAnswer": 0,
        "explanation": "Nekroz hücrenin patlamasıyla içindeki enzimlerin etrafa saçılarak (cinayet gibi) bölgede yoğun bir inflamasyon (iltihap/yangı) başlatmasıdır (daima patolojiktir). Apoptoz ise hücrenin kendi kendini küçük zarlı paketlere (intihar) bölmesi ve sessizce makrofajlara yutturmasıdır, etrafta KESİNLİKLE İLTİHAP OLUŞMAZ (fizyolojik veya patolojik olabilir)."
    },
    {
        "id": "v12_diger_2",
        "subject": "Tıbbi Patoloji",
        "question": "Kronik reflü hastalarında, yemek borusunun alt kısmındaki normal 'Çok katlı yassı epitel'in, aside dayanabilmek için 'Tek katlı prizmatik epitele' DÖNÜŞMESİNE patolojide ne ad verilir?",
        "options": [
            "Hipertrofi",
            "Displazi",
            "Atrofi",
            "Metaplazi (Barrett Özofagusu)",
            "Anaplazi"
        ],
        "answer": "Metaplazi (Barrett Özofagusu)",
        "correctAnswer": 3,
        "explanation": "Metaplazi, kronik bir tahrişe (stres, asit, sigara) maruz kalan bir bölgedeki olgun epitelin, o tahrişe DAHA DAYANIKLI olan BİR BAŞKA olgun epitele genetik olarak TİP DEĞİŞTİRMESİDİR. Reflüde skuamöz epitelin kolumnar (kadeh hücreli/bağırsak) epitele dönmesine Barrett Özofagusu (intestinal metaplazi) denir. Kanser öncüsü bir durumdur."
    },
    {
        "id": "v12_diger_3",
        "subject": "Tıbbi Patoloji",
        "question": "Tümörlerin isimlendirilmesinde bir kural vardır. Kötü huylu bağ/kıkırdak/kas dokusu kökenli tümörlerin sonuna hangi SON EK getirilir?",
        "options": [
            "-Oma",
            "-Karsinoma (Carcinoma)",
            "-Sarkoma (Sarcoma)",
            "-Adenoma",
            "-Plazi"
        ],
        "answer": "-Sarkoma (Sarcoma)",
        "correctAnswer": 2,
        "explanation": "Tümör terminolojisinde: İyi huylular (Benign) köken fark etmeksizin -Oma (Lipoma, Adenoma) eki alır. Kötü huylularda (Malign) ise köken epitel (yüzey/bez) ise -Karsinoma (Adenokarsinom, Skuamöz hücreli karsinom); köken bağ/kas/kemik (Mezenkimal) ise -Sarkoma (Osteosarkom, Liposarkom) eki kullanılır."
    },
    {
        "id": "v12_diger_4",
        "subject": "Toplum Sağlığı",
        "question": "Bir hastane polikliniğine belirli bir günde veya bir yıl içinde YENİ BAŞVURAN vakaların oranını gösteren epidemiyolojik terim aşağıdakilerden hangisidir?",
        "options": [
            "Prevalans (Yaygınlık)",
            "İnsidans (Hastalığa yakalanma hızı)",
            "Mortalite (Ölüm) hızı",
            "Letalite hızı",
            "Saldırı hızı"
        ],
        "answer": "İnsidans (Hastalığa yakalanma hızı)",
        "correctAnswer": 1,
        "explanation": "İnsidans (Yeni vaka hızı); belirli bir zaman diliminde risk altındaki bir toplumda görülen YENİ hastaların (yeni teşhis alanların) oranıdır (Hastalığın bulaşma riskini gösterir). Prevalans (Yaygınlık) ise o an toplumda YENİ VE ESKİ tüm hastaların toplam oranıdır (Hastalığın toplumdaki yükünü gösterir)."
    },
    {
        "id": "v12_diger_5",
        "subject": "Toplum Sağlığı",
        "question": "Epidemiyolojik çalışmalarda, bir hastalığın risk faktörünü bulmak için SAĞLIKLI kişilerin gruplara ayrılarak YILLARCA İLERİYE DÖNÜK izlendiği ve hastalananların kaydedildiği araştırma tipi hangisidir?",
        "options": [
            "Vaka-Kontrol Araştırması",
            "Kesitsel (Cross-sectional) Araştırma",
            "Kohort Araştırması (İzlemsel / İleriye dönük)",
            "Klinik Deney",
            "Vaka Serisi"
        ],
        "answer": "Kohort Araştırması (İzlemsel / İleriye dönük)",
        "correctAnswer": 2,
        "explanation": "Kohort araştırmalarında kişiler çalışmanın başında SAĞLIKLIDIR. Risk faktörüne maruz kalanlar ve kalmayanlar olarak ayrılırlar ve yıllar boyu TAKİP EDİLİRLER (İzlem), sonuçta hastalığın kimde çıktığına bakılır (Neden -> Sonuç). En güvenilir gözlemsel araştırmadır (İnsidans hesabı yapılabilir). Vaka-kontrol ise hastalar üzerinden geriye (geçmişe) doğru bakılmasıdır."
    },
    {
        "id": "v12_diger_6",
        "subject": "Bilimsel Araştırma",
        "question": "Bilimsel bir çalışmada, ölçülen iki farklı değer arasındaki 'İlişkinin yönünü ve şiddetini' gösteren, her zaman -1 ile +1 arasında değer alan istatistiksel analiz yöntemine ne ad verilir?",
        "options": [
            "T-Testi",
            "ANOVA (Varyans analizi)",
            "Korelasyon (Pearson / Spearman)",
            "Ki-kare testi",
            "Lojistik Regresyon"
        ],
        "answer": "Korelasyon (Pearson / Spearman)",
        "correctAnswer": 2,
        "explanation": "Korelasyon analizi, iki değişkenin (Örn: Kilo arttıkça tansiyon ne oluyor?) birlikte nasıl hareket ettiğini ölçer. Çıkan 'r' değeri (Korelasyon katsayısı) her zaman -1 ile +1 arasındadır. +1 Mükemmel doğru orantı (Biri artarsa diğeri de aynı oranda artar), -1 mükemmel ters orantı, 0 ise hiç ilişki yok demektir."
    },
    {
        "id": "v12_diger_7",
        "subject": "Tıp Tarihi",
        "question": "Tıp tarihinde ilk kez kan dolaşımının bilimsel ve anatomik ispatını 'De Motu Cordis' isimli eseriyle yapan İngiliz hekim kimdir?",
        "options": [
            "Galen",
            "İbn-i Sina (Avicenna)",
            "William Harvey",
            "Vesalius",
            "Hipokrat"
        ],
        "answer": "William Harvey",
        "correctAnswer": 2,
        "explanation": "Tıp tarihinde modern fizyolojinin babası sayılan William Harvey (1628'de basılan eseriyle), o güne kadar geçerli olan Galen'in 'kan karaciğerde üretilip dokularda yok olur' dogmasını yıkarak kanın KALP tarafından pompalandığını ve kapalı bir devrede (sirkülasyon) DOLAŞTIĞINI ispatlamıştır."
    },
    {
        "id": "v12_diger_8",
        "subject": "Tıbbi Etik",
        "question": "Hekimin, hastasına herhangi bir tıbbi müdahalede bulunmadan önce ONAY alabilmesi için, hastayı işlemin riskleri, faydaları ve alternatifleri konusunda ANLAYABİLECEĞİ BİR DİLDE detaylıca bilgilendirmesi zorunluluğuna tıbbi etikte ne ad verilir?",
        "options": [
            "Hekim Sırrı",
            "Paternalizm",
            "Aydınlatılmış Onam (Rıza)",
            "Konsültasyon",
            "Endikasyon"
        ],
        "answer": "Aydınlatılmış Onam (Rıza)",
        "correctAnswer": 2,
        "explanation": "Aydınlatılmış onam (Informed Consent); kişinin özerkliğine saygının gereğidir. Geçerli bir onam için üç şart vardır: Hastanın karar verme kapasitesine (akli melekelerine) sahip olması, hekim tarafından detaylı aydınlatılması (Bilgi) ve hastanın kararı tamamen özgür (Baskısız) bir iradeyle Gönüllü olarak vermesidir."
    },
    {
        "id": "v12_diger_9",
        "subject": "İletişim Becerileri",
        "question": "Kötü haberin hastaya ve yakınlarına verilmesinde dünyaca kabul edilen ve 6 adımdan oluşan iletişim protokolünün 'S' aşaması olan İLK ADIMINDA neye dikkat edilir?",
        "options": [
            "Haberi hemen telefonla bildirmek",
            "Görüşme için uygun, sessiz, kesintiye uğramayacak özel bir ortam (Setting) ayarlamak ve oturmak",
            "Hastanın bilgi seviyesini sormak (Perception)",
            "Hastanın ne kadar bilmek istediğini sormak (Invitation)",
            "Empati kurmak (Empathy)"
        ],
        "answer": "Görüşme için uygun, sessiz, kesintiye uğramayacak özel bir ortam (Setting) ayarlamak ve oturmak",
        "correctAnswer": 1,
        "explanation": "SPIKES protokolünün ilk adımı S (Setting - Ortamın ayarlanması) aşamasıdır. Kötü haber asla koridorda, ayaküstü veya telefonda verilmez. Hekim sessiz, özel bir odaya geçmeli, hasta ve (istiyorsa) yakınıyla birlikte oturmalı, göz teması kurmalı ve rahatsız edilmeyeceğinden (telefonun sessizde olduğundan) emin olmalıdır."
    },
    {
        "id": "v12_diger_10",
        "subject": "Biyofizik",
        "question": "Manyetik Rezonans Görüntüleme cihazının görüntü oluşturma prensibi insan vücudundaki HANGİ ATOMUN nükleer spin özelliklerine dayanır?",
        "options": [
            "Oksijen",
            "Kalsiyum",
            "Demir",
            "Hidrojen (Su içindeki protonlar)",
            "Karbon"
        ],
        "answer": "Hidrojen (Su içindeki protonlar)",
        "correctAnswer": 3,
        "explanation": "İnsan vücudunun %60-70'i sudur ve milyarlarca Hidrojen atomu (proton) barındırır. MR cihazı dev bir mıknatıstır; bu hidrojen protonlarını tek bir sıraya (manyetik alana) dizer, sonra radyofrekans (RF) dalgasıyla onları devirip tekrar ayağa kalkmalarını (rezonans) ölçerek muazzam bir doku görüntüsü oluşturur. Radyasyon KULLANMAZ."
    },
    {
        "id": "v12_diger_11",
        "subject": "Biyofizik",
        "question": "Göz optiğinde miyop kırma kusurunun FİZİKSEL nedeni ve düzeltilmesinde kullanılan mercek türü eşleştirmesi hangisidir?",
        "options": [
            "Göz küresi ön-arka çapı NORMALDEN KISADIR, Görüntü retinanın arkasına düşer / İnce kenarlı (Dışbükey - Konveks) mercekle düzeltilir",
            "Göz küresi ön-arka çapı NORMALDEN UZUNDUR, Görüntü retinanın ÖNÜNE (içine) düşer / Kalın kenarlı (İçbükey - Konkav / Iraksak) mercekle düzeltilir",
            "Kornea kırıcılığı düzensizdir (Silindirik hata) / Silindirik mercekle düzeltilir (Astigmatizm)",
            "Lens esnekliğini kaybetmiştir (Yaşlılık) / İnce kenarlı mercekle düzeltilir (Presbiyopi)",
            "Göz kasları zayıftır / Prizmatik mercekle düzeltilir"
        ],
        "answer": "Göz küresi ön-arka çapı NORMALDEN UZUNDUR, Görüntü retinanın ÖNÜNE (içine) düşer / Kalın kenarlı (İçbükey - Konkav / Iraksak) mercekle düzeltilir",
        "correctAnswer": 1,
        "explanation": "Miyopide (Yakını iyi, uzağı kötü görme) göz küresi adeta öne doğru uzun (büyük) olduğu için dışarıdan gelen ışınlar (merceğin kırıcılığı da fazla ise) retinaya ulaşamadan gözün ÖNÜNDE (boşlukta) odaklanır. Bu ışınları biraz dağıtıp uzağa (retinaya) fırlatmak için 'Konkav (Kalın kenarlı / Iraksak)' mercek kullanılır. Tam tersi Hipermetropidir."
    },
    {
        "id": "v12_diger_12",
        "subject": "İlk Yardım",
        "question": "Erişkin bir hastada ani kalp durması durumunda, olay yerinde uygulanan Temel Yaşam Desteği sırasında Göğüs Basısı ile Suni Solunum ORANI ne olmalıdır?",
        "options": [
            "15 Bası / 2 Nefes",
            "30 Bası / 2 Nefes",
            "5 Bası / 1 Nefes",
            "Sadece sürekli kesintisiz nefes verme",
            "100 Bası / 5 Nefes"
        ],
        "answer": "30 Bası / 2 Nefes",
        "correctAnswer": 1,
        "explanation": "Uluslararası Kılavuzlara (AHA vb.) göre, tek kurtarıcı (hekim veya sivil) ile erişkin, çocuk veya bebekte (yenidoğan hariç) Temel Yaşam Desteği döngüsü 30 göğüs kompresyonu (basısı) ve ardından 2 kurtarıcı soluk (30:2) şeklinde, dakikada 100-120 bası hızında ve göğsü en az 5 cm çöktürecek kalitede yapılmalıdır."
    }
];

window.examsData['tam_kapsamli_final_v12'].questions.push(...v12Part2);
