window.examsData = window.examsData || {};

const v11Part2 = [
    // --- TIBBİ BİYOKİMYA (11 Soru) ---
    {
        "id": "v11_biyo_1",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşağıdaki metabolik olaylardan hangisi SADECE mitokondri matriksinde gerçekleşen bir reaksiyondur?",
        "options": [
            "Glikoliz",
            "Pentoz Fosfat Yolu",
            "TCA (Krebs) Döngüsü",
            "Yağ asidi sentezi (Lipogenez)",
            "Glikojenoliz"
        ],
        "answer": "TCA (Krebs) Döngüsü",
        "correctAnswer": 2,
        "explanation": "Hücrede enerji metabolizmasının kavşak noktası olan TCA (Trikarboksilik Asit / Krebs) döngüsü tamamen mitokondri matriksinde gerçekleşir (Süksinat dehidrogenaz enzimi mitokondri iç zarına tutunmuştur). Glikoliz, Pentoz fosfat yolu ve yağ asidi sentezi ise sitoplazmada gerçekleşir."
    },
    {
        "id": "v11_biyo_2",
        "subject": "Tıbbi Biyokimya",
        "question": "Glikoliz reaksiyonlarında üretilen pirüvatın, mitokondriye girerek TCA döngüsüne katılabilmesi için Pirüvat Dehidrogenaz Kompleksi tarafından geri dönüşümsüz olarak hangi moleküle dönüştürülmesi gerekir?",
        "options": [
            "Oksaloasetat",
            "Asetil-CoA",
            "Laktat",
            "Sitrat",
            "Süksinil-CoA"
        ],
        "answer": "Asetil-CoA",
        "correctAnswer": 1,
        "explanation": "Glikolizin son ürünü pirüvat, mitokondride PDH kompleksi tarafından oksidatif dekarboksilasyona uğrayarak 2 karbonlu 'Asetil-CoA'ya dönüştürülür. Asetil-CoA daha sonra Oksaloasetat ile birleşerek Sitrat oluşturur ve Krebs döngüsünü başlatır."
    },
    {
        "id": "v11_biyo_3",
        "subject": "Tıbbi Biyokimya",
        "question": "DNA replikasyonunda ana görevi üstlenen, kalıp zinciri okuyarak yeni DNA ipliğini 5' -> 3' yönünde sentezleyen enzim aşağıdakilerden hangisidir?",
        "options": [
            "DNA Helikaz",
            "DNA Ligaz",
            "RNA Polimeraz",
            "DNA Polimeraz",
            "Topoizomeraz"
        ],
        "answer": "DNA Polimeraz",
        "correctAnswer": 3,
        "explanation": "DNA Polimeraz enzimi, replikasyon sırasında yeni zincire karşılık gelen deoksiribonükleotidleri ekleyerek DNA'nın kopyalanmasını (5'-3' yönünde) sağlayan ana sentez enzimidir. Helikaz sarmalı açar, Ligaz parçaları birleştirir."
    },
    {
        "id": "v11_biyo_4",
        "subject": "Tıbbi Biyokimya",
        "question": "Metiyonin amino asidinin metabolizması sırasında oluşan, metil grubu bağışlayıcısı olarak görev yaptıktan sonra ortaya çıkan ara ürün olan HANGİ MOLEKÜLÜN kanda yüksek seviyelerde bulunması, artmış kardiyovasküler hastalık ve tromboz riskinin önemli bir göstergesidir?",
        "options": [
            "Sistein",
            "Homosistein",
            "Kreatin",
            "Tirozin",
            "Triptofan"
        ],
        "answer": "Homosistein",
        "correctAnswer": 1,
        "explanation": "Metiyonin yıkımı sırasında oluşan 'Homosistein', kanda yükseldiğinde damar endotelini bozar ve damar sertliği (ateroskleroz), pıhtılaşma ve kalp krizi riskini bağımsız olarak artıran toksik bir ara metabolittir. B12, B6 ve Folik asit bu molekülü zararsız hale çevirir."
    },
    {
        "id": "v11_biyo_5",
        "subject": "Tıbbi Biyokimya",
        "question": "Kolesterol molekülü vücutta hangi bileşiklerin sentezi için ÖNCÜL bir madde olarak KULLANILMAZ?",
        "options": [
            "Safra asitleri",
            "Kortizol (Glukokortikoidler)",
            "Tiroid hormonları (T3, T4)",
            "Testosteron ve Östrojen",
            "D vitamini"
        ],
        "answer": "Tiroid hormonları (T3, T4)",
        "correctAnswer": 2,
        "explanation": "Tiroid hormonları (T3 ve T4), kolesterolden (steroid halkasından) değil, bir amino asit olan 'Tirozin'in iyotlanmasıyla sentezlenir. Kolesterol ise safra asitleri, D vitamini ve tüm steroid yapılı hormonların (kortizol, aldosteron, seks hormonları) zorunlu öncülüdür."
    },
    {
        "id": "v11_biyo_6",
        "subject": "Tıbbi Biyokimya",
        "question": "Aşırı açlık durumunda, kas proteinlerinin yıkılmasıyla açığa çıkan amino gruplarını kas dokusundan karaciğere toksik olmayan bir şekilde taşıyan en önemli amino asit aşağıdakilerden hangisidir?",
        "options": [
            "Alanin",
            "Valin",
            "Sistein",
            "Serin",
            "Lizin"
        ],
        "answer": "Alanin",
        "correctAnswer": 0,
        "explanation": "Kasta dallı zincirli amino asitlerin yıkımıyla oluşan toksik amonyak, pirüvat ile birleştirilerek 'Alanin'e dönüştürülür. Alanin kanla güvenli bir şekilde karaciğere gider. Karaciğerde azot kısmını üre döngüsüne verirken, karbon iskeleti glukoneogenez ile tekrar glikoza çevrilir (Glukoz-Alanin Döngüsü/Cahill Siklusu)."
    },
    {
        "id": "v11_biyo_7",
        "subject": "Tıbbi Biyokimya",
        "question": "Hemoglobinin yıkımı sonucu retiküloendotelyal sistemde oluşan, suda çözünmeyen, zeytin yeşili/sarımsı renkteki İLK temel yıkım ürünü aşağıdakilerden hangisidir?",
        "options": [
            "Ürobilinojen",
            "Konjuge Bilirubin (Direkt)",
            "Ankonjuge Bilirubin (İndirekt)",
            "Ürik Asit",
            "Biliverdin"
        ],
        "answer": "Ankonjuge Bilirubin (İndirekt)",
        "correctAnswer": 2,
        "explanation": "Makrofajlarda Hem molekülünden ayrılan porfirin halkası, önce Hem oksijenaz ile Biliverdine (yeşil), sonra Biliverdin redüktaz ile Ankonjuge (İndirekt) Bilirubine (sarı-turuncu) çevrilir. Bu madde suda çözünmez ve kana geçip albümine tutunarak karaciğere taşınır."
    },
    {
        "id": "v11_biyo_8",
        "subject": "Tıbbi Biyokimya",
        "question": "Hücre zarlarının ana yapısal lipidleri olan Fosfolipidlerin moleküler yapısında, gliserol iskeletine bağlı olarak normalde kaç adet yağ asidi zinciri bulunur?",
        "options": [
            "1",
            "2",
            "3",
            "4",
            "Hiç bulunmaz"
        ],
        "answer": "2",
        "correctAnswer": 1,
        "explanation": "Fosfolipidlerin yapısında bir gliserol molekülü (3 karbonlu), buna ester bağıyla bağlı İKİ adet (biri doymuş, diğeri doymamış) yağ asidi kuyruğu, bir fosfat grubu ve (kolin/inositol gibi) hidrofilik bir baş grubu bulunur. Trigliseritlerde ise ÜÇ adet yağ asidi bulunur."
    },
    {
        "id": "v11_biyo_9",
        "subject": "Tıbbi Biyokimya",
        "question": "Proteinlerin üç boyutlu yapılarının bozulmasına, katlanmalarının açılarak biyolojik aktivitelerini kaybetmelerine ne ad verilir?",
        "options": [
            "Renatürasyon",
            "Denatürasyon",
            "Translasyon",
            "Fosforilasyon",
            "Aminasyon"
        ],
        "answer": "Denatürasyon",
        "correctAnswer": 1,
        "explanation": "Denatürasyon, proteinin aşırı ısı, asit-baz (pH uçları) veya kimyasal maddeler (üre, deterjan) nedeniyle üç boyutlu konformasyonunu (ikincil ve üçüncül yapısındaki zayıf bağların kopmasını) kaybederek işlevsiz bir polipeptit zincirine dönüşmesidir. Peptit bağları (birincil yapı) ise denatürasyonda kırılmaz."
    },
    {
        "id": "v11_biyo_10",
        "subject": "Tıbbi Biyokimya",
        "question": "İnsülin hormonu reseptörüne bağlandığında, hücre içinde mesajın iletilmesini sağlayan ve doğrudan reseptörün kendi sitoplazmik kuyruğunda bulunan enzim aktivitesi aşağıdakilerden hangisidir?",
        "options": [
            "Adenilat Siklaz",
            "Fosfolipaz C",
            "Tirozin Kinaz",
            "Guanilat Siklaz",
            "Serin/Treonin Kinaz"
        ],
        "answer": "Tirozin Kinaz",
        "correctAnswer": 2,
        "explanation": "İnsülin (ve bazı büyüme faktörleri), 'Reseptör Tirozin Kinaz' (RTK) tipi zardan geçen reseptörleri kullanır. İnsülin reseptörüne bağlandığında, reseptörün iç (sitoplazmik) kısımları birbirini tirozin amino asitlerinden fosforilleyerek (otofosforilasyon) hücresel anabolik kaskadı başlatır."
    },
    {
        "id": "v11_biyo_11",
        "subject": "Tıbbi Biyokimya",
        "question": "Yeni doğanlarda topuk kanı ile taraması yapılan, Fenilalanin hidroksilaz enzim eksikliği nedeniyle fenilalaninin tirozine çevrilemediği ve beyinde birikerek şiddetli zeka geriliğine yol açan kalıtsal hastalık hangisidir?",
        "options": [
            "Fenilketonüri (PKU)",
            "Akçaağaç şurubu idrar hastalığı (MSUD)",
            "Galaktozemi",
            "Alkaptonüri",
            "Kistik fibrozis"
        ],
        "answer": "Fenilketonüri (PKU)",
        "correctAnswer": 0,
        "explanation": "Fenilketonüri (PKU), fenilalanin hidroksilaz enzim eksikliğidir. Biriken fenilalanin beyin gelişimini zehirleyerek kalıcı mental retardasyona (zeka geriliğine) neden olur. Doğumdan hemen sonra saptanıp fenilalaninden kısıtlı diyet verilirse çocuk tamamen normal gelişir."
    },

    // --- TIBBİ FARMAKOLOJİ (7 Soru) ---
    {
        "id": "v11_farma_1",
        "subject": "Tıbbi Farmakoloji",
        "question": "Aşağıdaki ilaç uygulama yollarından hangisi ile verilen bir ilacın 'İlk Geçiş Etkisine' maruz kalması EN FAZLADIR?",
        "options": [
            "İntravenöz (Damar içi - IV)",
            "Sublingual (Dil altı)",
            "Oral (Ağızdan yutarak)",
            "İntramüsküler (Kas içi - IM)",
            "Transdermal (Cilt üzerine yama)"
        ],
        "answer": "Oral (Ağızdan yutarak)",
        "correctAnswer": 2,
        "explanation": "Oral (ağız yoluyla) alınan ilaçlar mide-bağırsaktan emilir ve portal ven aracılığıyla doğrudan karaciğere gider. Karaciğer enzimlerince (özellikle CYP450) daha sistemik dolaşıma katılamadan büyük oranda parçalanmasına 'İlk Geçiş Etkisi' denir. Dil altı (Sublingual) veya IV yollar doğrudan sistemik dolaşıma girdiği için ilk geçiş etkisinden kaçarlar."
    },
    {
        "id": "v11_farma_2",
        "subject": "Tıbbi Farmakoloji",
        "question": "Şiddetli alerjik reaksiyonların ve anafilaktik şokun ACİL tedavisinde ilk seçenek olan, epipen olarak da bilinen ve bronşları açıp tansiyonu yükselten sempatomimetik ilaç hangisidir?",
        "options": [
            "Atropin",
            "Adrenalin (Epinefrin)",
            "Dopamin",
            "Asetilkolin",
            "Lidokain"
        ],
        "answer": "Adrenalin (Epinefrin)",
        "correctAnswer": 1,
        "explanation": "Adrenalin (Epinefrin), anafilaktik şokta hayat kurtaran ve mutlaka İntramüsküler (İM - uyluk dış kısmına) yapılması gereken ilk ilaçtır. Çok güçlü bir vazokonstriktör (alfa-1) etkiyle tansiyonu hızla yükseltir ve çok güçlü bir bronkodilatör (beta-2) etkiyle hava yollarını açar."
    },
    {
        "id": "v11_farma_3",
        "subject": "Tıbbi Farmakoloji",
        "question": "Kalp yetmezliğinde kullanılan, kalp kasının kasılma gücünü artıran ancak Na+/K+ ATPaz pompasını bloke ederek hücre içi kalsiyumu yükselttiği için Terapötik İndeksi çok dar olan bitkisel kökenli kardiyak glikozid ilaç hangisidir?",
        "options": [
            "Digoksin",
            "Amiodaron",
            "Diltiazem",
            "Captopril",
            "Metoprolol"
        ],
        "answer": "Digoksin",
        "correctAnswer": 0,
        "explanation": "Digoksin, Digitalis bitkisinden elde edilen çok eski bir kalp ilacıdır. Na+/K+ pompasını durdurur, içerde biriken sodyum, kalsiyumun dışarı çıkmasını engeller (Na/Ca değişimini bozar). İçeride kalsiyum patlaması yaşanır ve kalp güçlü kasılır. Ancak zehirli dozu ile tedavi dozu birbirine çok yakındır (Dar Terapötik İndeks)."
    },
    {
        "id": "v11_farma_4",
        "subject": "Tıbbi Farmakoloji",
        "question": "Farmakokinetik biliminde bir ilacın 'Dağılım Hacmi' büyükse, bu durum o ilacın vücutta nerede daha fazla bulunduğunu gösterir?",
        "options": [
            "Kan plazması içinde hapsolduğunu",
            "Sadece böbreklere gittiğini",
            "Dokulara (yağ, kas, organlar) ve hücre içlerine yüksek oranda yayıldığını",
            "Beyne hiç geçemediğini",
            "Sadece idrarla atıldığını"
        ],
        "answer": "Dokulara (yağ, kas, organlar) ve hücre içlerine yüksek oranda yayıldığını",
        "correctAnswer": 2,
        "explanation": "Dağılım Hacmi (Vd), vücuda giren ilacın kanda ne kadar seyrelip dokulara sızdığını gösteren sanal bir rakamdır. Eğer ilacın Vd'si çok yüksekse (örn: 500 Litre), ilaç kanda kalmamış, lipofilik olduğu için vücudun tüm yağ ve kas dokularına nüfuz etmiştir (örn. Antidepresanlar)."
    },
    {
        "id": "v11_farma_5",
        "subject": "Tıbbi Farmakoloji",
        "question": "Parkinson hastalığı tedavisinde kullanılan, kan-beyin bariyerini geçebilen ve beyinde dekarboksilaz enzimiyle eksik olan Dopamine dönüşerek etki gösteren ana ilaç hangisidir?",
        "options": [
            "Haloperidol",
            "Levodopa (L-Dopa)",
            "Karbamazepin",
            "Fluoksetin",
            "Donepezil"
        ],
        "answer": "Levodopa (L-Dopa)",
        "correctAnswer": 1,
        "explanation": "Dopamin bizzat kendisi kan-beyin bariyerini geçemez. Parkinson'da eksik olan dopamini yerine koymak için bariyeri geçebilen öncül amino asit olan Levodopa verilir. Levodopa beyne geçince dopaminerjik nöronlarda L-aminoasit dekarboksilaz ile dopamine dönüşür."
    },
    {
        "id": "v11_farma_6",
        "subject": "Tıbbi Farmakoloji",
        "question": "Opioid ağrı kesiciler çok güçlü ağrı kesici olmakla birlikte ölüme neden olabilen yan etkilere sahiptir. Opioid doz aşımında HASTAYI ÖLDÜREN en önemli yan etki aşağıdakilerden hangisidir?",
        "options": [
            "Mide kanaması",
            "Solunum depresyonu (Solunumun durması)",
            "Şiddetli ishal",
            "Kalp kası yırtılması (Rüptür)",
            "Aşırı uyanıklık ve epileptik nöbet"
        ],
        "answer": "Solunum depresyonu (Solunumun durması)",
        "correctAnswer": 1,
        "explanation": "Morfin türevi opioidlerin en tehlikeli, doza bağımlı ve ölümcül yan etkisi beynin solunum merkezini (Mü / μ reseptörleri üzerinden) baskılamalarıdır. Aşırı dozda hasta nefes almayı unutur, koma ve ölüm gelişir. Panzehiri 'Naloksan'dır."
    },
    {
        "id": "v11_farma_7",
        "subject": "Tıbbi Farmakoloji",
        "question": "Klinikte çok sık reçete edilen, kolesterol yüksekliği tedavisinde kullanılan 'Statinler' karaciğerde hangi enzimi bloke ederek hücre içi kolesterol yapımını durdururlar?",
        "options": [
            "Siklooksijenaz",
            "HMG-CoA Redüktaz",
            "Lipoprotein Lipaz (LPL)",
            "Kolesterol 7-alfa hidroksilaz",
            "Monoamin oksidaz (MAO)"
        ],
        "answer": "HMG-CoA Redüktaz",
        "correctAnswer": 1,
        "explanation": "Statin grubu ilaçlar, karaciğerde kolesterol sentezinin ilk ve hız kısıtlayıcı basamağı olan 'HMG-CoA Redüktaz' enziminin yarışmalı inhibitörleridir. Kolesterol yapılamayınca, karaciğer kandan LDL'yi (kötü kolesterolü) çekmek için daha çok reseptör üretir ve kan kolesterolü düşer."
    },

    // --- HİSTOLOJİ VE EMBRİYOLOJİ (13 Soru) ---
    {
        "id": "v11_histo_1",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Erkek üreme sisteminde spermatogenez süreci testislerde gerçekleşir. Mitoz ve Mayoz bölünmeler sırasında sitoplazma bölünmesinin tamamlanmaması nedeniyle hücrelerin birbirine ince sitoplazmik köprülerle bağlı kalmasının FİZYOLOJİK/HİSTOLOJİK amacı nedir?",
        "options": [
            "Bağışıklık sisteminden gizlenmek",
            "Gelişen tüm sperm hücrelerinin aynı evrede (senkronize) ve eşzamanlı olgunlaşmasını sağlamak",
            "Kan testis bariyerini delmek",
            "Testosteron üretimini hızlandırmak",
            "Apoptozu engellemek"
        ],
        "answer": "Gelişen tüm sperm hücrelerinin aynı evrede (senkronize) ve eşzamanlı olgunlaşmasını sağlamak",
        "correctAnswer": 1,
        "explanation": "Spermatogonyumdan spermatazoaya kadar giden yolda hücreler (klonlar) tam olarak kopmaz, aralarında sitoplazmik köprüler kalır. Bu sayede hücreler arası moleküler (RNA, protein) iletişim sürer ve tek bir kök hücreden gelen milyonlarca spermatazoa dalgası tamamen aynı anda, koro halinde (senkronize) gelişir."
    },
    {
        "id": "v11_histo_2",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kadın üreme sisteminde, her adet döngüsünde kalınlaşıp döllenme olmazsa kanamayla atılan uterus mukozasına 'Endometrium' denir. Endometriumun menstrüasyon sırasında ATILAN ve döngüye göre kalınlığı değişen üst tabakasına ne ad verilir?",
        "options": [
            "Stratum basale",
            "Stratum functionale (Fonksiyonel tabaka)",
            "Myometrium",
            "Tunica serosa",
            "Stratum granulosum"
        ],
        "answer": "Stratum functionale (Fonksiyonel tabaka)",
        "correctAnswer": 1,
        "explanation": "Endometrium iki histolojik tabakadan oluşur. Altta kalan 'Stratum basale' dökülmez ve her ay yenilenmeyi sağlayan kök hücreleri barındırır. Üstteki kalın olan 'Stratum functionale' ise (spiral arterlerle beslenir) hormonların etkisiyle büyüyüp gelişir ve gebelik olmazsa dökülerek kanar (adet kanaması)."
    },
    {
        "id": "v11_histo_3",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kemik iliğinde bulunan, megakaryosit adı verilen dev hücrelerin sitoplazmasından koparak oluşan, çekirdeği olmayan ve pıhtılaşmada görevli hücresel eleman aşağıdakilerden hangisidir?",
        "options": [
            "Eritrosit",
            "Nötrofil",
            "Trombosit (Platelet)",
            "Monosit",
            "Retikülosit"
        ],
        "answer": "Trombosit (Platelet)",
        "correctAnswer": 2,
        "explanation": "Trombositler (Plateletler) gerçek bir hücre değillerdir, çekirdekleri yoktur. Kemik iliğindeki dev boyutlu poliploid Megakaryosit hücrelerinin sitoplazmik uzantılarının kandan geçerken parçalanıp kopmasıyla oluşan, pıhtılaşmanın ana oyuncusu olan disk şeklindeki küçük pulcuklardır."
    },
    {
        "id": "v11_histo_4",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Kıkırdak dokusu, hücreleri ve hücre dışı matriksten oluşur. Histolojik preparatlarda kondrositlerin matrikste içinde bulundukları küçük oyuklara ne ad verilir?",
        "options": [
            "Laküna (Lacuna)",
            "Havers kanalı",
            "Volkmann kanalı",
            "Sinüzoid",
            "Kanalikül (Canaliculi)"
        ],
        "answer": "Laküna (Lacuna)",
        "correctAnswer": 0,
        "explanation": "Kıkırdak (ve kemik) hücreleri, kendilerinin sentezlediği sert/sıkı matriksin içine hapsolurlar. Bu hücrelerin matrikste yerleştikleri bu küçük boşluk (oyuk) yapılarına 'Laküna' denir. Bir laküna içinde birden fazla kondrosit birikmesine ise İzojen Grup denir."
    },
    {
        "id": "v11_histo_5",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Gastrointestinal sistem mukozasının histolojik katmanlarından biri olan ve kendi içindeki kasılmasıyla villusları hareket ettirip emilim yüzeyini dalgalandıran 'çok ince' düz kas tabakası hangisidir?",
        "options": [
            "Tunica muscularis",
            "Muscularis mucosae",
            "Lamina propria",
            "Tela submucosa",
            "Serosa"
        ],
        "answer": "Muscularis mucosae",
        "correctAnswer": 1,
        "explanation": "GİS duvarı genel olarak içten dışa; Mukoza (Epitel + Lamina propria + Muscularis mucosa), Submukoza, Muscularis Externa (kalın peristaltik kas) ve Seroza'dan oluşur. Mukoza tabakasının en altındaki Muscularis mucosae, sadece o bölgenin mukozasını (villusları) hareket ettirerek emilime yardımcı olur."
    },
    {
        "id": "v11_histo_6",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Sinir dokusunun destekleyici hücreleri olan Glialar, merkezi sinir sisteminde onarım oluşturan, kapiller damarlara ayaklarını uzatarak Kan-Beyin Bariyeri'nin oluşumuna katkıda bulunan hücre tipi hangisidir?",
        "options": [
            "Mikroglia",
            "Ependim hücreleri",
            "Oligodendrosit",
            "Astrosit",
            "Schwann hücreleri"
        ],
        "answer": "Astrosit",
        "correctAnswer": 3,
        "explanation": "Astrositler yıldız şeklindeki en büyük glia hücreleridir. Kılcal damarları ayaklarıyla (perivasküler son ayak) sıkıca sararak kan-beyin bariyerinin oluşmasını sağlarlar, hücre dışı iyon (K+) dengesini kurarlar ve MSS'de bir hasar olduğunda çoğalarak nedbe (glial skar) dokusunu oluştururlar."
    },
    {
        "id": "v11_histo_7",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Embriyolojik gelişimde kalp ve dolaşım sistemi hangi germ yaprağından köken alarak gelişmeye başlar?",
        "options": [
            "Ektoderm",
            "Yüzey ektodermi",
            "Nöroektoderm",
            "Endoderm",
            "Splanik (Visseral) Mezoderm"
        ],
        "answer": "Splanik (Visseral) Mezoderm",
        "correctAnswer": 4,
        "explanation": "Tüm kardiyovasküler sistem (kalp taslağı, anjiyogenez ile kan damarları ve kan adacıkları) Splanik (visseral) mezoderm tabakasından gelişir. Mezoderm ayrıca kas ve kemiklerin de genel kökenidir."
    },
    {
        "id": "v11_histo_8",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Böbrek nefronunda Jukstaglomerüler Aparat tansiyon kontrolünden sorumludur. JGA içinde afferent arteriyolün duvarında yerleşmiş olan ve kan basıncı düştüğünde 'Renin' enzimini sentezleyip kana salgılayan hücreler hangileridir?",
        "options": [
            "Macula densa hücreleri",
            "Ekstraglomerüler mesangial hücreler",
            "Granüler (Jukstaglomerüler / JG) hücreler",
            "Podositler",
            "İnterkalar hücreler"
        ],
        "answer": "Granüler (Jukstaglomerüler / JG) hücreler",
        "correctAnswer": 2,
        "explanation": "JGA kompleksinin üç üyesi vardır. 1) Tuz sensörü Macula densa. 2) İletişimci Extraglomerüler mesangial hücreler. 3) Modifiye düz kas hücresi olan, kan basıncını baroreseptör gibi hisseden ve keseciklerinden kana RENİN salgılayan Granüler (JG) hücreler."
    },
    {
        "id": "v11_histo_9",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Derinin hücresel yapısında, taban katmanlarında yerleşen, nöral krista kökenli olan ve ürettiği pigmentleri keratinositlere aktararak deriyi UV radyasyonundan koruyan hücre hangisidir?",
        "options": [
            "Langerhans hücresi",
            "Merkel hücresi",
            "Keratinosit",
            "Melanosit",
            "Fibroblast"
        ],
        "answer": "Melanosit",
        "correctAnswer": 3,
        "explanation": "Melanositler melanin pigmenti üreten hücrelerdir. Kolları (dendritleri) ile bu pigment granüllerini (melanozom) komşu keratinositlerin içine enjekte ederler. Keratinositler bu pigmenti nükleuslarının üzerine bir güneş şemsiyesi (şapka) gibi dizerek DNA'yı güneşin zararlı ışınlarından korurlar."
    },
    {
        "id": "v11_histo_10",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Timus bezi, lobçuklardan oluşur. Her lobülün koyu boyanan bir korteksi, açık boyanan bir medullası vardır. Sadece timus 'medulla'sında bulunan, keratinize epiteloretiküler hücrelerin soğan zarı gibi eş merkezli yuvarlak yapılar oluşturmasıyla oluşan, yaşla birlikte sayıları artan dejeneratif cisimciklere ne ad verilir?",
        "options": [
            "Hassall korpüskülleri (Timik cisimcikler)",
            "Malpighi cisimcikleri",
            "Pacini cisimcikleri",
            "Ruffini sonlanmaları",
            "Peyer plakları"
        ],
        "answer": "Hassall korpüskülleri (Timik cisimcikler)",
        "correctAnswer": 0,
        "explanation": "Hassall cisimcikleri (Corpusculum thymicum), histolojik preparatta Timus'u diğer lenfoid organlardan (dalak, lenf nodu) AYIRT ETTİREN en karakteristik yapıdır. Tip VI epiteloretiküler hücrelerin merkezde keratinleşerek ölmesiyle oluşan soğan dilimi şeklindeki kıvrımlardır ve sadece Medullada bulunurlar."
    },
    {
        "id": "v11_histo_11",
        "subject": "Histoloji ve Embriyoloji",
        "question": "İskelet kası hücrelerinin kasılmasını sağlayan fonksiyonel, yapısal ve mikroskobik en küçük kasılma birimi aşağıdakilerden hangisidir?",
        "options": [
            "Sarkolemma",
            "Sarkoplazmik retikulum",
            "Sarkomer",
            "Fasikül",
            "Miyofibril"
        ],
        "answer": "Sarkomer",
        "correctAnswer": 2,
        "explanation": "Sarkomer, iskelet ve kalp kasının en küçük kasılma ünitesidir. İki komşu Z çizgisi (Z diski) arasındaki kısımdır. Kasılma sırasında aktin ve miyozin flamanları birbirinin üzerinde kayarken Z çizgileri birbirine yaklaşır ve sarkomer boyu (dolayısıyla kasın boyu) kısalır."
    },
    {
        "id": "v11_histo_12",
        "subject": "Histoloji ve Embriyoloji",
        "question": "İnce bağırsağın histolojik kısımlarından Duodenum'u diğerlerinden ayıran en spesifik histolojik özellik, submukoza tabakasında yer alan asit nötralize edici mukus salgılayan bezlerdir. Bu bezlerin adı nedir?",
        "options": [
            "Lieberkühn kriptaları",
            "Peyer plakları",
            "Brunner bezleri",
            "Meissner pleksusu",
            "Gastrik çukurlar"
        ],
        "answer": "Brunner bezleri",
        "correctAnswer": 2,
        "explanation": "Brunner bezleri sadece Duodenum'un submukozasında yer alır. Mideden gelen asidik (pH 2) kimusun bağırsağı yakmaması için alkali (bikarbonatlı) bol miktarda mukus salgılayarak pH'yı 7 civarına yükseltirler."
    },
    {
        "id": "v11_histo_13",
        "subject": "Histoloji ve Embriyoloji",
        "question": "Bir hücre iskeleti elemanı olan Mikrotübüller, hücre bölünmesi sırasında kromozomları çeken iğ ipliklerini ve sillerin/kamçıların hareketini sağlarlar. Mikrotübüller aşağıdaki hangi protein alt birimlerinin polimerleşmesiyle oluşur?",
        "options": [
            "Aktin",
            "Miyozin",
            "Tübülin (Alfa ve Beta)",
            "Keratin",
            "Vimentin"
        ],
        "answer": "Tübülin (Alfa ve Beta)",
        "correctAnswer": 2,
        "explanation": "Mikrotübüller (Tüpçükler), alfa ve beta tübülin heterodimerlerinin (yapı taşlarının) uç uca ve yan yana gelerek oluşturduğu 13 protoflamandan meydana gelen sert, boru şeklindeki içi boş iskelet proteinleridir. Aktin ise ince flamanları oluşturur."
    },

    // --- TIBBİ MİKROBİYOLOJİ (14 Soru) ---
    {
        "id": "v11_mikro_1",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Genetik materyali RNA olan, havayla solunarak bulaşan ve bağışıklık sistemi T hücrelerini enfekte ederek yıllar içinde tamamen çökmelerine neden olan virüs aşağıdakilerden hangisidir?",
        "options": [
            "İnsan Papilloma Virüsü (HPV)",
            "Ebola Virüsü",
            "Human Immunodeficiency Virus (HIV)",
            "Kızamık Virüsü",
            "Hepatit B Virüsü (HBV)"
        ],
        "answer": "Human Immunodeficiency Virus (HIV)",
        "correctAnswer": 2,
        "explanation": "HIV (İnsan İmmün Yetmezlik Virüsü), bir Retrovirüstür. Spesifik olarak CD4+ T Yardımcı (Helper) lenfositlerin üzerindeki CD4 reseptörüne bağlanarak içine girer. Yıllar süren sessiz replikasyondan sonra T hücre sayısının <200 mm3 altına inmesiyle AIDS (Kazanılmış İmmün Yetmezlik Sendromu) ölümcül evresi başlar."
    },
    {
        "id": "v11_mikro_2",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki mikroorganizmalardan hangisi, insanlarda 'Lyme Hastalığı'na neden olan ve keneler aracılığıyla bulaşan bir spiroket bakteridir?",
        "options": [
            "Rickettsia rickettsii",
            "Treponema pallidum",
            "Borrelia burgdorferi",
            "Leptospira interrogans",
            "Yersinia pestis"
        ],
        "answer": "Borrelia burgdorferi",
        "correctAnswer": 2,
        "explanation": "Lyme hastalığı, geyik kenesi (Ixodes türleri) ısırmasıyla insana geçen 'Borrelia burgdorferi' adlı sarmal (spiroket) bir bakteri tarafından oluşturulur. Isırık yerinde boğa gözü / hedef tahtası (Erythema chronica migrans) şeklinde kızarıklık tipiktir."
    },
    {
        "id": "v11_mikro_3",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gıda zehirlenmelerinde, ısıtılsa bile bozulmayan ısıya çok dirençli bir enterotoksin üreten ve bozuk yemeğin yenmesinden sadece 2-6 saat sonra hızla fışkırır tarzda kusma başlatan etken hangisidir?",
        "options": [
            "Salmonella enterica",
            "Escherichia coli (EHEC)",
            "Staphylococcus aureus",
            "Listeria monocytogenes",
            "Campylobacter jejuni"
        ],
        "answer": "Staphylococcus aureus",
        "correctAnswer": 2,
        "explanation": "Stafilokoksik gıda zehirlenmesi, bakterinin kendisinin değil, gıda (özellikle krema, pasta, mayonezli patates) oda sıcaklığında beklerken ürettiği Toksinin yenmesiyle oluşur (İntoksikasyon). Toksin ısıya (kaynatmaya) dirençlidir. Çok kısa kuluçka süresi (1-6 saat) vardır ve şiddetli bulantı/kusma ön plandadır."
    },
    {
        "id": "v11_mikro_4",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Çocuk felci hastalığına neden olan Poliovirüs'ün insan vücuduna temel giriş yolu hangisidir?",
        "options": [
            "Damlacık (Solunum) yoluyla",
            "Fekal-oral (Dışkı-ağız) yolla sindirim sisteminden",
            "Kan nakliyle",
            "Cinsel temasla",
            "Sivrisinek ısırığıyla"
        ],
        "answer": "Fekal-oral (Dışkı-ağız) yolla sindirim sisteminden",
        "correctAnswer": 1,
        "explanation": "Poliovirüs bir Enterovirüs'tür. Mide asidine dayanıklı zarfsız bir RNA virüsüdür. Kontamine yiyecek ve suyun yutulmasıyla (fekal-oral) ince bağırsağa girer ve lenf dokularında (Peyer plakları) çoğalır. Sonra kana karışıp omuriliğin ön boynuz motor nöronlarına ulaşarak gevşek felç (çocuk felci) yapar."
    },
    {
        "id": "v11_mikro_5",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Gram boyama yönteminde, Gram negatif bakterilerin hücre duvarındaki ince peptidoglikan tabakasından dolayı ilk boyayı tutamayıp alkolle yıkandıktan sonra zıt boya ile boyanarak mikroskop altında HANGİ RENKTE görünmeleri beklenir?",
        "options": [
            "Koyu mor / Mavi",
            "Pembe / Kırmızı",
            "Yeşil",
            "Sarı",
            "Renksiz"
        ],
        "answer": "Pembe / Kırmızı",
        "correctAnswer": 1,
        "explanation": "Gram Pozitif hücrelerin duvarı çok kalın peptidoglikandır ve ilk damlatılan Kristal Viyole-İyot kompleksini sımsıkı hapseder (Mor boyanır). Gram Negatiflerde duvar incedir, alkolle yıkayınca mor boya uçar gider, daha sonra damlatılan zıt boyayı (Safranin) alarak Pembe-Kırmızı boyanırlar."
    },
    {
        "id": "v11_mikro_6",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bakteriyel genetik aktarım mekanizmalarından biri olan 'Konjugasyon'da, gen aktarımının gerçekleşmesi için verici ile alıcı bakteri arasında fiziksel bir köprü kurmayı sağlayan hücresel uzantıya ne ad verilir?",
        "options": [
            "Flajella (Kamçı)",
            "Seks pilusu",
            "Kapsül",
            "Fimbria (Adezyon pilusu)",
            "Aksiyal flaman"
        ],
        "answer": "Seks pilusu",
        "correctAnswer": 1,
        "explanation": "Konjugasyon, bakteriler arası plazmid (özellikle F plazmidi - doğurganlık faktörü) aktarımıdır ve hücresel temas ŞARTTIR. Bu temas F plazmidi tarafından kodlanan 'Seks pilusu' isimli tüp şeklindeki yapı sayesinde kurulur. DNA bu köprü üzerinden aktarılır."
    },
    {
        "id": "v11_mikro_7",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşağıdaki parazitlerden hangisi, genellikle anal bölgede kaşıntıya neden olan, çocuklarda çok sık görülen, halk arasında 'kıl kurdu' olarak bilinen ve tanısı için 'selofan bant' kullanılan nematoddur?",
        "options": [
            "Ascaris lumbricoides",
            "Taenia saginata",
            "Enterobius vermicularis",
            "Giardia lamblia",
            "Toxoplasma gondii"
        ],
        "answer": "Enterobius vermicularis",
        "correctAnswer": 2,
        "explanation": "Enterobius vermicularis (Kıl kurdu), kalın bağırsağa yerleşir. Geceleyin dişi erişkinler anüsten dışarı çıkıp perianal bölgeye (anüs çevresi) binlerce yumurta bırakır, bu da şiddetli kaşıntı yapar (otoinfeksiyon döngüsü başlar). Teşhisi dışkıda aramakla değil, sabah uyanınca anüse yapıştırılan şeffaf bant (selofan) üzerindeki yumurtaların mikroskopta görülmesiyle konur."
    },
    {
        "id": "v11_mikro_8",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Antibiyotiklere direnç geliştirmede çok becerikli olan ve yara, yanık, idrar yolu enfeksiyonlarında en korkulan etkenlerden olan MRSA, hangi genetik mekanizmayla tüm beta-laktam antibiyotiklere karşı dirençli hale gelmiştir?",
        "options": [
            "Hücre zarına porin kanalları ekleyerek antibiyotiği dışarı atması (Efflux)",
            "Beta-laktamaz (Penisilinaz) enzimi üreterek ilacı parçalaması",
            "MecA geni ile yeni ve antibiyotiğin bağlanamadığı farklı bir Penisilin Bağlayan Protein (PBP2a) sentezlemesi",
            "Hücre duvarını (Peptidoglikanı) tamamen yok ederek L-formuna geçmesi",
            "Antibiyotiğin yapısındaki tuzu kendine bağlaması"
        ],
        "answer": "MecA geni ile yeni ve antibiyotiğin bağlanamadığı farklı bir Penisilin Bağlayan Protein (PBP2a) sentezlemesi",
        "correctAnswer": 2,
        "explanation": "Normal Stafilokoklar penisilini yıkan beta-laktamaz enzimi üreterek direnç kazanır (Metisilin bu enzime dayanıklı bir antibiyotiktir). Ancak MRSA'nın direnç stratejisi tamamen farklıdır: Kromozomuna aldığı 'mecA' geni sayesinde, metisilinin tutunup bloke edemeyeceği YEPYENİ şekilli bir hedef protein (PBP2a) üretir."
    },
    {
        "id": "v11_mikro_9",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Virüslerin, konak hücresine girdikten sonra zarflarını ve protein kılıflarını atarak sadece genetik materyalleriyle serbest kaldıkları ve etrafta hiç virüs partikülünün görünmediği replikasyon döngüsü evresine ne ad verilir?",
        "options": [
            "Tutunma (Attachment)",
            "Girme (Penetration)",
            "Kılıf soyulması (Uncoating) ve Tutulma (Eklips) fazı",
            "Tomurcuklanma (Budding)",
            "Hücre Lizi (Burst)"
        ],
        "answer": "Kılıf soyulması (Uncoating) ve Tutulma (Eklips) fazı",
        "correctAnswer": 2,
        "explanation": "Virüs hücreye girdikten sonra kılıfını soyar (uncoating) ve çıplak nükleik asiti kalır. Yeni virüs parçalarının üretildiği ancak henüz hiçbirleşmedikleri (ortada tam virüs formunun sıfır olduğu) bu gizli/karanlık döneme Eklips (Tutulma) Fazı denir."
    },
    {
        "id": "v11_mikro_10",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Soğuk zincir veya buzdolabı ısısında bile çoğalabilen ve hamilelerde düşüklere veya yenidoğanlarda menenjite neden olan bakteriyel gıda zehirlenmesi etkeni hangisidir?",
        "options": [
            "Bacillus cereus",
            "Listeria monocytogenes",
            "Salmonella typhi",
            "Vibrio parahaemolyticus",
            "Clostridium botulinum"
        ],
        "answer": "Listeria monocytogenes",
        "correctAnswer": 1,
        "explanation": "Listeria monocytogenes (Sarküteri, yumuşak peynir, sosis vb.) çok soğuk ısılarda (buzdolabında) bile yaşayabilen ve üreyebilen (cold-enrichment) çok tehlikeli hücre içi bir bakteridir. Sağlıklı insanda ishal yaparken, gebelerde (plasentayı geçerek) abartılı fetal ölüm/düşük, yenidoğanda ve yaşlılarda ölümcül menenjit yapar."
    },
    {
        "id": "v11_mikro_11",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Bağışıklık sisteminde, T hücrelerini aktive eden Antijen Sunan Hücreler işledikleri antijenleri yüzeylerindeki HANGİ moleküller ile sergileyerek T-Lenfositlerine 'sunarlar'?",
        "options": [
            "CD4 ve CD8",
            "MHC Sınıf I ve Sınıf II (Major Histocompatibility Complex)",
            "Toll-like reseptörler (TLR)",
            "Kompleman (C3b)",
            "IgG antikorları"
        ],
        "answer": "MHC Sınıf I ve Sınıf II (Major Histocompatibility Complex)",
        "correctAnswer": 1,
        "explanation": "T lenfositleri sadece kendi başlarına boşluktaki bir antijeni TANIYAMAZLAR. Mutlaka bir Makrofaj, Dendritik hücre veya B hücresinin (Antijen sunucu hücreler) o antijeni parçalayıp, yüzeyindeki Gümüş Tepsi olarak bilinen MHC moleküllerine (Sınıf 1 veya 2) koyarak T hücresine sunması şarttır (MHC Kısıtlılığı)."
    },
    {
        "id": "v11_mikro_12",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Aşırı duyarlılık reaksiyonlarından hangisi antikorlarla değil de T-lenfositleri ve makrofajlar aracılığıyla geliştiği için temastan 48-72 saat sonra ortaya çıkar?",
        "options": [
            "Tip I Hipersensitivite",
            "Tip II Hipersensitivite",
            "Tip III Hipersensitivite",
            "Tip IV Hipersensitivite",
            "Atopik Alerji"
        ],
        "answer": "Tip IV Hipersensitivite",
        "correctAnswer": 3,
        "explanation": "Tip IV (Gecikmiş Tip) Aşırı Duyarlılık, humoral bağışıklıkla (Antikorlarla) DEĞİL, Hücresel bağışıklıkla (T-Lenfositler) oluşur. T hücrelerinin aktive olup o bölgeye göç etmesi zaman aldığı için reaksiyon (kızarıklık/kabarma) maruziyetten 2-3 gün (48-72 saat) sonra doruğa ulaşır (PPD testi, kontakt dermatit/zehirli sarmaşık)."
    },
    {
        "id": "v11_mikro_13",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Sterilizasyon işlemlerinde kontrol amacıyla kullanılan ve en dirençli bakteri sporu aşağıdakilerden hangisidir?",
        "options": [
            "Escherichia coli",
            "Geobacillus stearothermophilus sporu",
            "Bacillus anthracis sporu",
            "Mycobacterium tuberculosis",
            "Staphylococcus aureus"
        ],
        "answer": "Geobacillus stearothermophilus sporu",
        "correctAnswer": 1,
        "explanation": "Otoklavın (basınçlı buhar) istenilen sterilizasyonu yapıp yapmadığını en kesin kanıtlayan Biyolojik Kontrol testlerinde Geobacillus stearothermophilus bakterisinin (çok yüksek ısıya bile direnen) sporları bir tüp içinde cihazda ısıtılır. İşlem bitince ekim yapılır, üreme olmazsa cihaz doğru çalışmıştır."
    },
    {
        "id": "v11_mikro_14",
        "subject": "Tıbbi Mikrobiyoloji",
        "question": "Kedi dışkısı ile veya az pişmiş etlerdeki doku kistlerinin yenmesiyle bulaşan, sağlıklı insanda grip gibi geçip giden ancak hamile bir kadının ilk kez alması durumunda fötusta körlük, beyinde kalsifikasyon ve hidrosefali gibi ağır doğumsal defektlere neden olan parazit hangisidir?",
        "options": [
            "Leishmania donovani",
            "Plasmodium falciparum",
            "Toxoplasma gondii",
            "Trypanosoma cruzi",
            "Echinococcus granulosus"
        ],
        "answer": "Toxoplasma gondii",
        "correctAnswer": 2,
        "explanation": "Toxoplasma gondii, kedi bağırsaklarında seksüel olarak üreyen ve dışkıyla bulaşan bir protozoondur. Gebe kadın enfekte olursa (Konjenital Toksoplazmozis) parazit plasentadan fetüse geçerek nörolojik ve göz sisteminde ağır kalıcı hasarlara (Sabin-Feldman triadı) neden olur."
    },

    // --- DİĞER (Patoloji, Toplum, Etik, Biyofizik vb.) (12 Soru) ---
    {
        "id": "v11_diger_1",
        "subject": "Tıbbi Patoloji",
        "question": "Doku tamiri ve yara iyileşmesi süreçlerinde, hasarlı dokunun yerini yoğun kollajen birikimi ile birlikte pembemsi, granüler, çok zengin damar ağı içeren bir doku alır. Bu geçici ve iyileşmeyi sağlayan tamir dokusunun patolojideki adı nedir?",
        "options": [
            "Granülom",
            "Granülasyon dokusu",
            "Keloid",
            "Nekrotik doku",
            "Apsidal doku"
        ],
        "answer": "Granülasyon dokusu",
        "correctAnswer": 1,
        "explanation": "Yara iyileşmesinin 3-5. günlerinde yara yüzeyi yeni ve kırılgan kılcal damarların ve fibroblastların oluşturduğu yumuşak, pembe, tanecikli (granüler) 'Granülasyon Dokusu' ile kaplanır. Bu doku zamanla sertleşip kolajene dönüşerek skar (nedbe/iz) dokusunu oluşturur. Granülom ise tüberküloz vb. kronik iltihaptaki nodüldür, isim benzerliği tuzaktır."
    },
    {
        "id": "v11_diger_2",
        "subject": "Tıbbi Patoloji",
        "question": "Neoplazide tümörlerin derecelendirilmesi ve evrelendirilmesi klinik için çok önemlidir. Hastanın sağkalımını ve tedavisini belirleyen EVRELENDİRME esas olarak neye dayanır?",
        "options": [
            "Tümör hücresinin mikroskopta ne kadar bozuk/anaplastik göründüğüne (Diferansiyasyon derecesi)",
            "Tümörün büyüklüğüne (T), lenf nodlarına yayılımına (N) ve uzak organ metastazına (M)",
            "Tümörün sadece DNA mutasyon oranına",
            "Hücrelerin mitoz hızına",
            "Tümörün sadece çap büyüklüğüne"
        ],
        "answer": "Tümörün büyüklüğüne (T), lenf nodlarına yayılımına (N) ve uzak organ metastazına (M)",
        "correctAnswer": 1,
        "explanation": "Tümörün klinik yaygınlığına (vücutta nerelere gittiğine) Evre (Staging) denir ve prognozu belirleyen en güçlü göstergedir (TNM sistemi: Tümör boyutu, Nod yayılımı, Metastaz). Tümörün histolojik görüntüsüne, yabanileşmesine ve hücrelerin diferansiyasyonuna ise Derece (Grading) denir."
    },
    {
        "id": "v11_diger_3",
        "subject": "Tıbbi Patoloji",
        "question": "Vücutta kan pulcuklarının sayısının çok azalması veya fonksiyonunun bozulması durumunda deride izlenen, 1-2 mm çapında ve basmakla solmayan, toplu iğne başı büyüklüğündeki küçük kanamalara ne ad verilir?",
        "options": [
            "Hematom",
            "Purpura",
            "Peteşi",
            "Ekimoz (Morluk)",
            "Telenjiektazi"
        ],
        "answer": "Peteşi",
        "correctAnswer": 2,
        "explanation": "Deri veya mukozalarda meydana gelen 1-2 mm boyutundaki, toplu iğne ucu şeklindeki en küçük kılcal damar kanamalarına Peteşi denir. 3 mm ile 1 cm arasındakilere Purpura, daha büyük (morluk/çürük) şeklindeki kanamalara ise Ekimoz denir."
    },
    {
        "id": "v11_diger_4",
        "subject": "Toplum Sağlığı",
        "question": "Toplumda bir hastalığın engellenmesinde 'Sekonder Koruma' yaklaşımının temel amacı aşağıdakilerden hangisidir?",
        "options": [
            "Hastalık risk faktörlerini ortadan kaldırarak hiç hasta olunmamasını sağlamak (Aşılama, eğitim)",
            "Hastalığın erken tanısını (tarama testleriyle) koyarak, henüz semptom vermeden hastalığı yakalayıp ilerlemesini durdurmak",
            "Sakatlık gelişmiş bir hastayı rehabilite etmek ve topluma kazandırmak (Tersiyer koruma)",
            "Hastaneye yatışı engelleyecek çoklu ilaç tedavisini başlatmak",
            "Salgın durumunda karantina uygulamak"
        ],
        "answer": "Hastalığın erken tanısını (tarama testleriyle) koyarak, henüz semptom vermeden hastalığı yakalayıp ilerlemesini durdurmak",
        "correctAnswer": 1,
        "explanation": "Primer (Birincil) koruma hastalığın çıkmasını engeller (Aşı, maske). Sekonder (İkincil) koruma hastalık henüz sessizken onu TARAMA testleriyle ERKEN yakalayıp kökünden tedavi eder (Örn: Mammografi ile meme Ca taraması, Smear testi). Tersiyer (Üçüncül) koruma ise hastalık yerleşmişse sakatlığı (komplikasyonu) önlemeye çalışır."
    },
    {
        "id": "v11_diger_5",
        "subject": "Toplum Sağlığı",
        "question": "Herhangi bir testte, kişinin o hastalığa sahip olup olmadığını belirlerken 'Gerçekten hasta olmayanlara testin doğru şekilde NEGATİF deme oranını' gösteren istatistiksel değere ne ad verilir?",
        "options": [
            "Spesifisite (Seçicilik / Özgüllük)",
            "Sensitivite (Duyarlılık)",
            "Pozitif Prediktif Değer",
            "Göreceli (Rölatif) Risk",
            "Atfedilen Risk"
        ],
        "answer": "Spesifisite (Seçicilik / Özgüllük)",
        "correctAnswer": 0,
        "explanation": "Spesifisite (D/B+D), toplumdaki gerçekten sağlıklı kişilerin yüzde kaçının testte (-) çıktığıdır. Testin 'Yalancı pozitif' sonuç verme ihtimali düşükse spesifisitesi yüksektir. Tarama testlerinde (+) çıkan kişilerin gerçekten hasta olduğunu DOĞRULAMAK (teşhis koymak) için kullanılır."
    },
    {
        "id": "v11_diger_6",
        "subject": "Tıp Tarihi",
        "question": "Osmanlı döneminde tıp eğitimi için açılan modern tıp okulunun adı olan ve 14 Mart Tıp Bayramı'nın kutlanmasına vesile olan kurum aşağıdakilerden hangisidir?",
        "options": [
            "Darülfünun Tıp Fakültesi",
            "Tıbhane-i Amire ve Cerrahhane-i Mamure (14 Mart 1827)",
            "Gülhane Askeri Tıp Akademisi",
            "Haseki Tıp Şifahanesi",
            "Mekteb-i Tıbbiye-i Şahane"
        ],
        "answer": "Tıbhane-i Amire ve Cerrahhane-i Mamure (14 Mart 1827)",
        "correctAnswer": 1,
        "explanation": "II. Mahmut döneminde, 14 Mart 1827'de kurulan Tıbhane-i Amire (ve Cerrahhane), modern anlamda Türkiye'deki tıp eğitiminin başlangıcı sayılır ve her yıl 14 Mart Tıp Bayramı olarak bu kuruluşu onurlandırmak için kutlanır."
    },
    {
        "id": "v11_diger_7",
        "subject": "Bilimsel Araştırma",
        "question": "Yeni üretilen bir ilacın klinik araştırmaları sırasında, ilacın SAĞLIKLI GÖNÜLLÜLERDE sadece 'güvenilirliğinin ve farmakokinetiğinin' test edildiği çok az kişiyle yapılan İLK aşama hangisidir?",
        "options": [
            "Faz 1 çalışmaları",
            "Faz 2 çalışmaları",
            "Faz 3 çalışmaları",
            "Faz 4 çalışmaları (Piyasaya çıkış sonrası)",
            "Klinik öncesi (Preklinik / Hayvan) çalışmaları"
        ],
        "answer": "Faz 1 çalışmaları",
        "correctAnswer": 0,
        "explanation": "Klinik araştırmaların evrelerinde; Faz 1 çalışmasında ilaç ilk defa İNSANA (20-100 kadar sağlıklı, hasta olmayan gönüllüye) verilir ve sadece 'Bu ilaç insanda zehirli mi (Güvenlik) ve maksimum doz ne?' sorusu araştırılır. İlaca 'Etkili mi (Hasta tedavi edici mi)?' sorusu Faz 2 ve 3'te hastalar üzerinde sorulur."
    },
    {
        "id": "v11_diger_8",
        "subject": "Tıbbi Etik",
        "question": "Hastanın kendisine yapılacak tıbbi bir müdahaleyi reddetme hakkı, Tıbbi Etiğin hangi temel prensibinin zorunlu bir sonucudur?",
        "options": [
            "Yararlılık",
            "Adalet",
            "Özerklik (Otonomi)",
            "Sır saklama (Gizlilik)",
            "Aydınlatılmış Onam"
        ],
        "answer": "Özerklik (Otonomi)",
        "correctAnswer": 2,
        "explanation": "Özerklik (Otonomi) ilkesi, zihinsel yeterliliği olan ve doğru bilgilendirilmiş her bireyin kendi bedeni ve tedavisi (veya tedaviyi reddi) hakkında son kararı özgürce kendisinin verebilmesi hakkıdır."
    },
    {
        "id": "v11_diger_9",
        "subject": "İletişim Becerileri",
        "question": "Hekim ile hasta arasındaki iletişimde, hastanın anlatımını kesmeden, göz teması kurarak, baş sallayarak ve uygun beden dili kullanarak söylenenleri dikkatle dinlemeye ve cesaretlendirmeye ne ad verilir?",
        "options": [
            "Yansıtma (Özetleme)",
            "Aktif (Etkin) Dinleme",
            "Açık uçlu soru sorma",
            "Sessizliği kullanma",
            "Savunmacı iletişim"
        ],
        "answer": "Aktif (Etkin) Dinleme",
        "correctAnswer": 1,
        "explanation": "Aktif (etkin) dinleme; hekimin pasif bir alıcı olmak yerine, tüm dikkatini (jestler, mimikler ve asgari teşviklerle) hastaya vererek onu anladığını ve onunla ilgilendiğini gösterdiği, hastayı konuşturmaya motive eden iletişim sürecidir."
    },
    {
        "id": "v11_diger_10",
        "subject": "Biyofizik",
        "question": "Ultrasonografi cihazı vücudun iç organlarını görüntülemek için HANGİ fiziksel prensipten faydalanır?",
        "options": [
            "İyonlaştırıcı Radyasyon (X-ışınları)",
            "Manyetik alan içindeki Hidrojen rezonansı",
            "Yüksek frekanslı (işitilemeyen) mekanik ses dalgalarının yansıması (Yankı/Eko)",
            "Kızılötesi (Termal) ısının ölçülmesi",
            "Radyoaktif (Nükleer tıp) maddelerin saçılımı"
        ],
        "answer": "Yüksek frekanslı (işitilemeyen) mekanik ses dalgalarının yansıması (Yankı/Eko)",
        "correctAnswer": 2,
        "explanation": "Ultrason (USG), kristal probları (Piezoelektrik etki) kullanarak insan kulağının duyamayacağı (>20.000 Hz) yüksek frekanslı ses dalgaları üretir. Bu dalgalar dokulara çarparak proba geri döner (Yankı - Eko) ve bilgisayar bu sesin hız/süre farkına göre görüntü oluşturur. Radyasyon (X ışını) içermez."
    },
    {
        "id": "v11_diger_11",
        "subject": "Biyofizik",
        "question": "Işığın veya radyasyonun madde ile etkileşiminde, fotonun maddenin yörüngesindeki elektronuna çarparak elektronu koparması ve kendisinin tamamen yutulması olayına ne ad verilir?",
        "options": [
            "Compton Saçılması",
            "Çift Oluşum",
            "Fotoelektrik Olay",
            "Koherent (Klasik) Saçılma",
            "Bremsstrahlung"
        ],
        "answer": "Fotoelektrik Olay",
        "correctAnswer": 2,
        "explanation": "Fotoelektrik olayda, gelen foton tüm enerjisini atomun iç yörüngesindeki elektrona verir, foton yok olur ve elektron (fotoelektron) büyük bir hızla dışarı fırlar (iyonizasyon). X-ışını görüntülemesinde dokular (kemik) arası kontrast farkını yaratan (ve hastanın dozu almasına neden olan) temel etkileşim budur."
    },
    {
        "id": "v11_diger_12",
        "subject": "Toplum Sağlığı",
        "question": "İçme ve kullanma sularının dezenfeksiyonu için klorlama işleminde, suya katılan klor miktarından, sudaki organik maddelerle reaksiyona girip tükenen kısmın çıkartılmasıyla geriye kalan, asıl mikropları öldürmeye devam eden aktif kısma ne ad verilir?",
        "options": [
            "Klor ihtiyacı",
            "Serbest (bakiye / rezidüel) klor",
            "Toplam klor",
            "Bağlı klor",
            "Koliform bakteri ölçütü"
        ],
        "answer": "Serbest (bakiye / rezidüel) klor",
        "correctAnswer": 1,
        "explanation": "Sulara klor katıldığında bir kısmı sudaki kirlerle (organik maddeler) birleşir. Suyu dezenfekte ettikten sonra, su şebekede (borularda) akarken olası yeni kirlenmelere karşı savaşması için her zaman az miktarda 'Serbest (Bakiye/Rezidüel) Klor' bırakılmalıdır (yaklaşık 0.5 ppm). Koruyuculuğu bu sağlar."
    }
];

window.examsData['tam_kapsamli_final_v11'].questions.push(...v11Part2);
