// Jami 188 ta savol
const ALL_QUESTIONS = [
  {
    "d": 2,
    "q": "Psixologiya fan sifatida nimani oʻrganadi?",
    "opts": [
      "Ongning xususiyati sifatida psixikaning dalillarini, qonuni va mexanizmlarini oʻrganadi",
      "Bizning sezgilarimiz, fikrlarimiz, hissiyot va xulq-atvorimizni oʻrganadi.",
      "Inson ruhiy holatini va kechinmalarini oʻrganadigan fan.",
      "Oʻng jarayonlarni va uning qonuniyatlarini oʻrganadi."
    ]
  },
  {
    "d": 2,
    "q": "“Pedagogika” fanining mustaqil fan sifatida rivojlanishiga qaysi olim hissa qoʻshgan?",
    "opts": [
      "Ya.A. Komenskiy",
      "Suxomlenskiy",
      "Alisher Navoiy",
      "Forobiy"
    ]
  },
  {
    "d": 2,
    "q": "Psixika deb nimaga aytiladi?",
    "opts": [
      "Yuksak darajada tashkil topgan materiyaning xususiyati boʻlib, u tashqi olamni oʻziga xos yoʻsinda aks ettirilishi.",
      "Miyannig mahsuli boʻlib, asab tizimining vazifasidir.",
      "Insonning ruhi, uning ruhiy holati.",
      "Sezgi, fikr, hissiyotdir."
    ]
  },
  {
    "d": 2,
    "q": "Leksiya, praktikumlar, laboratoriya mashg‘ulotlari, seminarlar, konsultatsiyalar ta’limni tashkil etishning qaysi shakliga misol bo‘la oladi?",
    "opts": [
      "Asosiy",
      "Qo‘shimcha",
      "Frontal",
      "Guruhiy"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik navotorlik – bu qanday xodisa?",
    "opts": [
      "Yashirin, ijtimoiy-ruhiy xodisa",
      "Yuksak – ahloqiy g‘oyalar",
      "Keskin, murakkab, uzundan-uzun pedagogik kurash",
      "Irodaviy ta’sir ko‘rsatish"
    ]
  },
  {
    "d": 2,
    "q": "Bola shaxsi necha yoshdan shakllananadi?",
    "opts": [
      "3 yoshdan shakllananadi",
      "5 yoshdan shakllananadi",
      "6 yoshdan shakllananadi",
      "10 yoshdan shakllananadi"
    ]
  },
  {
    "d": 2,
    "q": "O`quvchi intellekti – bu ...?",
    "opts": [
      "O`quvchining aqliy salohiyatidir",
      "O`quvchining ta`limdagi muvaffaqiyatidir",
      "O`quvchining sezgirligidir",
      "O`quvchining xulqidir"
    ]
  },
  {
    "d": 2,
    "q": "Shaxslararo munosabatlar bu -……?",
    "opts": [
      "Odamlar o’rtasida faoliyat va guruhlardagi muloqot jarayonida kelib chiqadigan munosabatlardir.",
      "Rahbar va unga bo’ysunuvchilar o’rtasidagi munosabatdir.",
      "Tarbiyachi va tarbiyalanuvchilar o’rtasidagi munosabatdir.",
      "Faoliyat jarayonida shaxslar o’rtasidagi dialog jarayonidir."
    ]
  },
  {
    "d": 2,
    "q": "O‘quvchining xotirasi bu-……?",
    "opts": [
      "O’quvchining o’tmish tajribalarini esda olib qolish, esda saqlash va qayta tiklash va unutish bilan bogliq bo’lgan psixik jarayondir",
      "Avvalgi egallangan tajribalarni amaliy faoliyatda qo’llashdan iborat psixik jarayon.",
      "Odamning sezgi va idrokiga asoslangan o’z tajribalarini qayta tiklay olish qobiliyati.",
      "Avvalgi egallangan bilimlarni esda saqlash."
    ]
  },
  {
    "d": 2,
    "q": "Sotsiometrik metod qanday usulda qo‘llaniladi?",
    "opts": [
      "Anketa, savol- javob",
      "test",
      "savol",
      "suxbat"
    ]
  },
  {
    "d": 2,
    "q": "Shas komilligini belgilovchi sifatlarga nimalar kiradi?",
    "opts": [
      "Jismoniy salomatlik, ahloqiy poklik, aqliy etuklik",
      "Ahloqiy poklik",
      "Aqliy etuklik",
      "Jismoniy salomatlik"
    ]
  },
  {
    "d": 2,
    "q": "Tiflopedagogika qaysi tipdagi nogiron bolalarni oʻqitadi?",
    "opts": [
      "Koʻzi ojiz bolalarni oʻqitish",
      "Nutqi yaxshi rivojlanmagan bolalarni oʻqitish",
      "Soqov bolalarni oʻqitish",
      "D.Koʻzi ojiz va Soqov bolalarni oʻqitish"
    ]
  },
  {
    "d": 2,
    "q": "Ijtimoiy xodisa sifatida tarbiyaning mohiyati nimadan iborat?",
    "opts": [
      "Insoniyat toʻplagan ijtimoiy – maʼnaviy tajribalarni yosh avlodga oʻrgatish orqali ularni hayotga, mehnatga tayyorlash.",
      "Inson shaxsini har tomonlam rivojlantirish, oʻstirish, parvarish qilish.",
      "Yosh avlodga eng yaxshi umuminsoniy sifatlarni singdirish.",
      "Yosh avlodni ijtimoiy munosabatlarga tayyorlash."
    ]
  },
  {
    "d": 2,
    "q": "“Tarbiya bizlar uchun yo hayot - yo mamot, yo najot -yo xaloqat, yo saodat, yo faloqat masalasidir”. Yuqoridagi fikrlar kimning fikrlari?",
    "opts": [
      "Abdulla Avloniy",
      "Abu ali ibn Sino",
      "Alisher Navoiy",
      "Amir Temur"
    ]
  },
  {
    "d": 2,
    "q": "Psixologiyada asosiy metodlarga qaysi metodldr kiradi?",
    "opts": [
      "Kuzatish va eksperiment metodi",
      "Test metodi",
      "So‘roq metodi",
      "Inson faoliyatining mahsulotlarini oʻrganish metodi"
    ]
  },
  {
    "d": 2,
    "q": "Tarbiyaning tarixiy xarakteri deganda nima tushunasiz?",
    "opts": [
      "Jamiyatning ijtimoiy – iqtisodiy taraqqiyoti bilan bogʻliq holda tarbiya xarakteri, mazmuni, vazifalari, metodlarining oʻzgarib borishi.",
      "Oʻquvchilarni har bir xalqning tarixiy anʼanalari ruhida tarbiyalashni tushunamiz",
      "Inson tarbiyasini u yashagan tarixiy sharoit bilan bogʻliq xolda amalga oshirilishi",
      "Tarbiyaning tarixiy rivojlanish bilan, tarix fani blan bogʻliqligini tushunamiz"
    ]
  },
  {
    "d": 2,
    "q": "Umuminsoniy tarbiyaviy qadriyatlarga nimalar kiradi?",
    "opts": [
      "Barcha xalqlar uchun umumiy boʻlgan ilgʻor tarbiyaviy gʻoyalar, anʼnalar",
      "Butun insoniyatning taʼlim – tarbiya sohasidagi tajribalari",
      "Tarbiyada archa insonlarning qadr – qimmatini hurmat qilish",
      "Barcha millatlarga xos axloqiy normalar"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining asosiy tushunchalari qaysilar?",
    "opts": [
      "Tarbiya, taʼlim, maʼlumot. Rivojlanish, shakllanish",
      "Oʻqitish, tarbiyalash, oʻqituvchi, maʼlumot",
      "Taʼlim, didaktika, maʼlumot, metod",
      "Oʻqituvchi, taʼlim – tarbiya"
    ]
  },
  {
    "d": 2,
    "q": "Qobiliyatni nima tashkil etadi?",
    "opts": [
      "Layoqat, iqtidor, iste’dod",
      "Iqtidor",
      "Layoqat",
      "Iste’dod"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik xodisa sifatida tarbiyaning mohiyati nimadan iborat?",
    "opts": [
      "Shaxsni ijtimoiy tajribani egallash boʻyicha faoliyatini tashkil etishdan iborat va maqsadga qara tilgan ongli ravish da amalga oshiriladi gan pedagogik jarayon",
      "Maktab, oila. Jamoatchilikning hamkorlikda oʻquvchilarni tarbiyalashi",
      "Oʻqtuvchi – murabbiylarning taʼlim – tarbiyaviy ishlarni amalga oshirishi.",
      "Oʻquvchilarga milliy istiqlol gʻoyalarini, vatanga muhabbatni singdirish"
    ]
  },
  {
    "d": 2,
    "q": "Taʼlim deb nimaga aytiladi?",
    "opts": [
      "Bu oʻquvchilarni bilim, koʻnikma malakalarni egallashi, ijodiy qobiliyatlar ini oʻstirish",
      "Taʼlim bu – oʻquvchi – talabalarni bilim, koʻnikma, malakalar bilan qurollantirish",
      "Bu oʻquvchilarga maʼlumot berish maqsadida oʻqtuvchi va oʻquvchilarning oʻzaro xamkorligidir",
      "Taʼlim bu – oʻqituvchining oʻquvchi talabalarga taʼlim – tarbiya berish jarayonidir"
    ]
  },
  {
    "d": 2,
    "q": "“Jadid” soʻzining maʼnosi qanday maʼnoni bildiradi?",
    "opts": [
      "“Jadid” soʻzi arabcha soʻz boʻlib,”yangi” degan maʼnoni bildiradi",
      "“Jadid” soʻzi lotincha soʻz bshlib,”yuksalish” degan maʼnoni bildiradi",
      "“Jadid” soʻzi grekcha soʻz boʻlib, “yangilik” degan maʼnoni bildiradi",
      "“Jadid” soʻzi arabcha soʻz bshlib, “oʻzgarish” degan maʼnoni bildiradi"
    ]
  },
  {
    "d": 2,
    "q": "Kuzatish metodi qanday qo‘llaniladi?",
    "opts": [
      "Oddiy tabiiy sharoitda qo‘llaniladi",
      "Maxsus xonada qo‘llaniladi",
      "Laboratoriya xonasida qo‘llaniladi",
      "Inson faoliyati jarayonida qo‘llaniladi"
    ]
  },
  {
    "d": 2,
    "q": "Yosh davrlari psixologiyasi nimalarni o‘rganadi?",
    "opts": [
      "Har bir yosh davrlari bosqichlarini o‘rganadi",
      "O‘smirlir davrlari bosqichlarini o‘rganadi",
      "O‘spirinlik davrlari bosqichlarini o‘rganadi",
      "Qarilik davrlari bosqichlarini o‘rganadi"
    ]
  },
  {
    "d": 2,
    "q": "Psixologiyada tadqiqot tajribalar avvalo kimlarda o‘tkaziladi?",
    "opts": [
      "Hayvonlarda ya’ni it, sichqon, parrandalarda o‘tkaziladi",
      "Itlarda o‘tkaziladi",
      "Parrandalarda o‘tkaziladi",
      "Sichqon, parrandalarda o‘tkaziladi"
    ]
  },
  {
    "d": 2,
    "q": "Taʼlimning mazmuni qanday manbalarda aks ettiriladi?",
    "opts": [
      "Taʼlimning mazmuni: oʻquv rejalarida, dasturlarda va darsliklarda aks ettiriladi.",
      "Taʼlimning mazmuni oʻquv materiallarida aks ettiriladi.",
      "Taʼlimning mazmuni darsliklarda aks ettiriladi",
      "Taʼlimning mazmunida"
    ]
  },
  {
    "d": 2,
    "q": "Hayvonlar psixologiyasini psixologiyaning fan sifatida rivojlangan qaysi tarmog’i o‘rganadi?",
    "opts": [
      "Hayvonlar psixologiyasi",
      "Ijtimoiy psixologiya",
      "Pedagogik psixologiya",
      "Yosh davrlari psixologiyasi"
    ]
  },
  {
    "d": 2,
    "q": "Oʻquv fan dasturi deganda nimani tushunasiz?",
    "opts": [
      "Taʼlim mazmuni uning talabalar tomonidan oʻzlashtirilishining eng maqbul usullari, axborot manbalari ko‘rsatilgan meʼyoriy hujjat",
      "Bakalavr yoki magistr oʻzlashtirishi lozim bshlgan mavzular roʻyxati",
      "Faqat nazariy bilimlar mavzulari roʻyxati",
      "Faqat amaliy bilimlar, laboratoriya ishlari mavzulari roʻyxati"
    ]
  },
  {
    "d": 2,
    "q": "Anketa metodi orqali ma’lumotlar to‘liq olinadimi?",
    "opts": [
      "Qisman olinadi",
      "To‘liq olinadi",
      "Umuman to‘liq olinadi",
      "To‘liq olinmaydi"
    ]
  },
  {
    "d": 2,
    "q": "Qaysi yosh davrlarida bolada mantiqiy xotira kuchli bo‘ladi?",
    "opts": [
      "Bog’cha yoshi davrlarida",
      "Boshlang’ich sinf davrlarida",
      "O‘rta sinf davrlarida",
      "Yuqori sinf davrlarida"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining asosiy oʻrganish obektlarini aniqlang?",
    "opts": [
      "Odamni anatomik – fiziologik jihatdan oʻsishida, psixikasida, bilish qobiliyati, xulqi, ijtimoiy – siyosiy qarashlari da roʻy beradigan miqdor va sifat oʻzgarishlar jarayoni.",
      "Bolalarning jismoniy va ruxiy jihatdan oʻsishi, shakllanishi.",
      "Kishining aqliy, axloqiy – maʼnaviy jihatdan kamol topishi.",
      "Rivojlanish bu – inson shaxsining tarkib topish jarayonidir."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining asosiy tarmoqlarini aniqlang?",
    "opts": [
      "Umumiy pedagogika, maktabgacha tarbiya pedagogikasi, oʻrta maktab pedagogikasi, maxsus pedagogika.",
      "Umumiy pedagogika, oila pedagogikasi, filosofiya, metodika. Xarbiy pedagogika.",
      "Oliy maktab pedagogikasi, maxsus pedagogika, pediatriya, maktabgacha tarbiya pedagogikasi.",
      "Umumiy pedagogika, didaktika, psixologiya, logopediya."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik ilmiy – tadqiqot metodlari qaysilar?",
    "opts": [
      "Kuzatish. Suxbat, anketa, maktab xujjatlarini oʻrganish.",
      "Kuzatish, ishontirsh, mashq. Suhbat.",
      "Kuzatish, xikoya, suhbat, leksiya, anketa.",
      "Kuzatish, anketa, labaratoriya, ekskursiya, illyustratsiya."
    ]
  },
  {
    "d": 2,
    "q": "Odamning u yoki bu ehtiyojlarini qondiradigan faol xatti-harakatlariga nima deyiladi?",
    "opts": [
      "Faoliyat deyiladi",
      "Odamning tashqi olam bilan oʻzaro taʼsiri deb aytiladi",
      "Har qanday impulsiv xatti-harakat faoliyat deb ataladi",
      "Har qanday harakat faoliyatdir"
    ]
  },
  {
    "d": 2,
    "q": "Shaxsning irsiyat, muhit, tarbiya ta’sirida shakllanishiga nima deyiladi?",
    "opts": [
      "Shaxs rivojlanishi va tarkib topishning asosiy omillari deyiladi",
      "Irsiyat, tabiiy muhit, kattalar namunasi deyiladi",
      "Muhit, tarbiyalovchi jamoa, adabiyot, sanʼat ta’siri deyiladi",
      "Oila, maktab, moddiy turmush sharoiti deyiladi"
    ]
  },
  {
    "d": 2,
    "q": "Shaxslarapo munosabatlarni psixologiyaning fan sifatida rivojlangan qaysi tarmog’i o‘rganadi?",
    "opts": [
      "Ijtimoiy psixologiya",
      "Pedagogik psixologiya",
      "Yosh davrlari psixologiyasi",
      "Pedagogik psixologiya"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining metodologik asoslari deganda nimani tushinasiz?",
    "opts": [
      "Oliy pedagogik xodisalarni tadqiq qilishda qoʻllanma boʻladigan ilmiy – falsafiy gʻoyalar, ilmiy meros.",
      "Ilmiy meros, taʼlim – tarbiya metodlari, pedago gik hodisalar, oʻqituvchilarning tajribalari.",
      "Taʼlim – tarbiyada qoʻllaniladigan metodlar, amal qiladigan fikr – gʻoyalar, qoʻllanmalar.",
      "Taʼlim – tarbiyaning umumiy qoidalari, tarbiya haqidagi gʻoyalar, prinsiplari."
    ]
  },
  {
    "d": 2,
    "q": "Diqqat tushinchasiga berilgan to‘gri javobni toping?",
    "opts": [
      "Ongning biron bir predmet, hodisa yoki faoliyatga qaratilishi hamda toʻplanishidir.",
      "Organizmning maʻlum analizatorlar taʻsirida turishi.",
      "Narsa va hodisani tanlab idrok qilish.",
      "Biron narsaga kuchli diqqat bilan qarashga aytiladi."
    ]
  },
  {
    "d": 2,
    "q": "Taʼlim tushinchasiga berilgan to‘gri javobni toping?",
    "opts": [
      "Taʼlim - maʼlum maqsadga yoʻnaltirilgan, rejali ravishda amalga oshiriladigan pedagog-talaba-pedagog muloqotidir",
      "Taʼlim - oʻquv faoliyati natijasi",
      "Taʼlim - pedagog va talabaning oʻzaro muloqoti",
      "Rejali ravishda amalga oshiriladigan pedagog-talaba-pedagog muloqotidir"
    ]
  },
  {
    "d": 2,
    "q": "Abu Ali Ibn Sino bola tarbiyasini qaysi yoshdan boshlash lozim deb aytgan?",
    "opts": [
      "Go‘daklik davridan",
      "8 yoshdan",
      "10 yoshdan",
      "Balog’at yoshidan"
    ]
  },
  {
    "d": 2,
    "q": "Oʻqitish jarayonida nazoratning rivojlantiruvchi funksiyasi qaysilar?",
    "opts": [
      "Oʻz-oʻzini nazorat qilish va baholash;",
      "Talabalarda barqaror diqqatni vujudga keltirish;.",
      "Xotirani mustah¬kamlash;",
      "Diqqatni vujudga keltirish;."
    ]
  },
  {
    "d": 2,
    "q": "Sezgi tushinchasiga berilgan to‘gri javobni toping?",
    "opts": [
      "Tashqi taʼsirlarni tegishli retseptorlar orqali markaziy nerv sistemasiga borishi va undan qaytadigan javob reaksiyasiga aytiladi.",
      "Bosh miyaning tashqi olamdagi narsa va hodisalarning ayrim xususiyatlariga reaksiyasi.",
      "Har qanday tashqi olamni xis etish sezgilaridir.",
      "Eng sodda psixik jarayonlar sezgilardir."
    ]
  },
  {
    "d": 2,
    "q": "Ekologiya so‘si qanday ma’noni anglatadi?",
    "opts": [
      "Uy, uyning tomi degan ma’noni anglatadi",
      "Tabiat degan ma’noni anglatadi",
      "Biologik hayot degan ma’noni anglatadi",
      "Yashil o‘rmon degan ma’noni anglatadi"
    ]
  },
  {
    "d": 2,
    "q": "Idrok deb nimaga aytiladi?",
    "opts": [
      "Sezgi aʼzolarimizga taʼsir etayotgan narsa va hodisalarning miyamizda yaxlit holicha aks etishiga aytiladi.",
      "Tashqi olamdagi narsalarni aks ettirishda sezgilar yiqindisi.",
      "Biror sezgi aʻzoimizga taʻsir etgan narsa hodisalarning miyada aks ettirishga idrok deb ataladi.",
      "Predmetlarning xususiyat va sifatlarini birgalikda aks ettirish."
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchi va o‘quvchi o‘rtasidagi ikki tomonlama jarayonga nima deyiladi?",
    "opts": [
      "Tarbiya jarayonining oʻziga xos xususiyatlari deyiladi",
      "Tarbiyaning oʻziga xos xususiyati uning oʻquvchilarni tarbiyalashga qaratilganligi deyiladi",
      "Tarbiyaning oʻziga xos xususiyati uning ikki tomonlama jarayon ekanligi va bolaga xulq qoidalarini oʻrgatish deyiladi",
      "Tarbiyaning oʻziga xos xususiyati uning darsdan tashqari vaqtida amalga oshirilishi deyiladi"
    ]
  },
  {
    "d": 2,
    "q": "Tarbiya jarayoni qanday bosqichlardan iborat?",
    "opts": [
      "Oʻquvchilarni umumiy talab va meʼyorlar bilan tanishtirish, qarash va eʼtiqodlarni shakllantirish, amaliy koʻnikma va malakalarni tarkib toptirish.",
      "Tarbiyaviy ishlarni rejalashtirish va amalga oshirish.",
      "Tarbiyaviy vazifalarni idrok qilish, tushunish, umumlashtirish, amalda qoʻllash bosqichlari.",
      "Tarbiyachi avval tarbiyaviy vazifa ni belgilaydi, uning mazmunini, amalga oshirish shak, metodlari ni aniqlaydi, natijalarni tahlil qiladi."
    ]
  },
  {
    "d": 2,
    "q": "Oʻquvchining tarbiyalanganlik darajasini nimalarga qarab bilish mumkin?",
    "opts": [
      "Oʻquvchida tarbiyaga tegishli bilimlar mavjudligida, bu bilimlarni o‘z faoli yati va hatti – harakatlarida ko‘rsata olishida",
      "Oʻqish, mehnatg munosabatga qarab",
      "Amaliy bilim, koʻnikmalariga qarab",
      "Oʻquvchining xulqi, xatti – xarakatiga qarab"
    ]
  },
  {
    "d": 2,
    "q": "“Texnologiya” tushunchasining to‘gri taʼrifini toping?",
    "opts": [
      "Texnologiya - tayyor maxsulot olish uchun ishlab chiqarish jarayonlarida qoʻllaniladigan usul va metodlar majmui",
      "Texnologiya - buyumni tayyorlash metodlari majmui.",
      "Texnologiya - tayyor maxsulot olish usuli.",
      "Texnologiya - ishlab chiqarish jarayoni."
    ]
  },
  {
    "d": 2,
    "q": "Tarbiya prinsiplari deb nimaga aytiladi?",
    "opts": [
      "Tarbiyachi tarbiyaviy ishda amal qilishi zarur boʻlgan asosiy qoidalarga aytiladi.",
      "Tarbiyaviy ishni tayyorlash va oʻtkazish tartibiga aytiladi.",
      "Taʼlim – tarbiya sohasida davlat siyosatining asosiy prinsiplariga aytiladi.",
      "Tarbiyachining oʻz shaxsiy tajribasidan kelib chiqib tarbiyaviy ishga yondashuviga aytiladi."
    ]
  },
  {
    "d": 2,
    "q": "Milliy tarbiya deganda nimani tushinasiz?",
    "opts": [
      "Xar bir xalqning oʻz milliy madaniyati. tili, tarixi, urf – odatlari, milliy me’rosi",
      "Xar bir mamlakatning oʻz ona tilida taʼlim tarbiya ishlarini olib borish.",
      "Oʻquvchilarni tarbiyalashda har bir xalqning tarbiya toʻgʻrisidagi fikrlaridan foydalanish.",
      "Toʻgʻri javob yoʻq"
    ]
  },
  {
    "d": 2,
    "q": "Taʼlim-tarbiya jarayonida biz oʻquvchi talabalar ongi, qalbiga qaysi gʻoyalarni singdiramiz?",
    "opts": [
      "Hammasi toʻgʻri",
      "Mustaqillik, ozodlik",
      "Tinchlik,adolat birdamlik, maʼrifatparvarlik",
      "Milliy istiqlol gʻoyalari."
    ]
  },
  {
    "d": 2,
    "q": "Xotira deb nimaga aytiladi?",
    "opts": [
      "Oʻtmish tajribamizni esda olib qolish, esda saqlash va unitish jarayoniga aytiladi",
      "Oʻtmish tajribamizda nimaiki hodisa yuz bergan boʻlsa, shularni esda olib qolish.",
      "Oʻqigan narsalarni esda olib qolish.",
      "Ilgarigi amaliy faoliyatda shakllangan tajribalardan foydalanish."
    ]
  },
  {
    "d": 2,
    "q": "“Fozil odamjar shaxri” azari qaysi allomaga tegishli?",
    "opts": [
      "Farobiy",
      "Ibn Sino",
      "Al Xorazmiy",
      "Beruniy"
    ]
  },
  {
    "d": 2,
    "q": "Tafakkur deb nimaga aytiladi?",
    "opts": [
      "Voqelikni taxlil qilib va sintezlashda uni bavosita, umumlashtirib aks ettirish jarayonidir.",
      "Tashqi olamning alohidagi xususiyatlarining miyamizda aks etishi.",
      "Voqelikni nutq orqali bevosita aks ettirish jarayonidir.",
      "Tafakkur bu – aql."
    ]
  },
  {
    "d": 2,
    "q": "Dunyoqarash deb nimaga aytiladi?",
    "opts": [
      "Kishilarning tevarak-atrofdagi voqelika munosabatini belgilovchi bilimlari, qarashlari, eʼtiqodlari va ideallar tizimiga aytiladi.",
      "Kishilarning tabiat va jamiyat haqidagi bilimlariga aytiladi.",
      "Kishilarning dunyoning tuzilishi haqidagi bilim, kunikmalariga aytiladi.",
      "Insonning tevarak-atrofdagi narsa-xodisalar haqidagi tasavvurlariga aytiladi."
    ]
  },
  {
    "d": 2,
    "q": "Huquqiy tarbiyaning vazifalari nimalardan iborat?",
    "opts": [
      "Oʻquvchilarni Oʻzbekiston Konstitutsiyasi, qonunlari bilan tanishtirishularga amal qilishga urgatishdan iborat.",
      "Oʻquvchi talabalarni jamiyat taraqqiyoti bilan tanishtirish.",
      "Bolalarni huquqni ximoya qiluvchi organlar faoliyati bilan tanishishi.",
      "Oʻquvchi talabalarini oʻz huquqlari, burchlari bilan tanishtiruvdan iborat."
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchining akademik qobiliyati nima?",
    "opts": [
      "O‘z fanini chuqur va keng hajmda bilish va darsda predmetlararo bog`lanishlarni amalga oshirish.",
      "O‘quvchilarning dars jarayonini o`zlashtirishini ta`minlash.",
      "Muayyan soatga mo’ljallangan darsni o’z vaqtida to`liq va aniq o`ta olish.",
      "O‘z pedagogik harakatlari natijasini oldindan ko`ra olish."
    ]
  },
  {
    "d": 2,
    "q": "Nutq deb nimaga aytiladi?",
    "opts": [
      "Kishilarning til vositasidagi oʻzaro munosabatda boʻlish jarayoni.",
      "Nimanidir aytish ehtiyoji.",
      "Kishilir oʻrtasidagi munosabatda vujudga keladigan jarayon.",
      "Biror kishi bilan aloqa oʻrnatish vositasi."
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchining kommunikativ qobiliyati nima?",
    "opts": [
      "O‘quvchilar bilan til topisha olish, o`z suhbati va so`zlari bilan ularni qiziqtira olish va jalb eta olish.",
      "His- tuyg`u orqali o‘quvchilarga ta’sir o’tkaza olish.",
      "Noan’anaviy darsni tashkil qila olish.",
      "Har bir mashg`ulot uchun o’quv- tarbiyaviy ishlarni samarali rejalashtirish."
    ]
  },
  {
    "d": 2,
    "q": "Hayol deb nimaga aytiladi?",
    "opts": [
      "Ilgari idrok qilmagan predmet va hodisalarni yaratishdan iborat psixik jarayon.",
      "Orzu, istak.",
      "Ijtimoiy ahamiyatga ega boʻlgan muhim bir yangilik yaratish faoliyatidir.",
      "Narsa va hodisalar obrazlarining miyada gavdalanishi"
    ]
  },
  {
    "d": 2,
    "q": "Hissiyot tushunchasiga berilgan to‘gri javobni toping?",
    "opts": [
      "Odamlarning oʻzi bilayotgan va bajarayotgan narsaga oʻz munosabatini boshdan kechirishi.",
      "Kishining oʻz ehtiyojlariga boʻlgan munosabatini boshdan kechirishi.",
      "Bizning sezishimiz, his qilishimiz bu his – tuygʻudur.",
      "Kishilarning tevarak-atrofga boʻlgan munosabatlari."
    ]
  },
  {
    "d": 2,
    "q": "Abdulla Avloniy qachon va qayerda oʻzining yangi usuldagi oʻquv muassasasiini ochdi?",
    "opts": [
      "1907-yilda Toshkentning “Mirobod” maʼallasida;",
      "1903-yilda Fargonada “Tegirmonchi” maʼallasida;",
      "1908-yilda Namanganda”Oktepa” maʼallasida",
      "1900-yilda Samarqandda “Registon” maʼallasida"
    ]
  },
  {
    "d": 2,
    "q": "Iroda tushunchasiga berilgan to‘gri javobni toping?",
    "opts": [
      "Kishining oʻz oldiga qoʻygan maqsadga erishish uchun toʻsiqlarni harakat yordamida yengish vaqtida vujudga keladigan psixik jarayon.",
      "Impulsiv va ixtiyoriy harakatlar irodaviy harakatlar deyiladi.",
      "Odamning taʼsurot taʼsirida harakatlanishi",
      "Faqat holis niyatli tavakkalchilik bilan erishilgan harakatlar irodaga kiradi."
    ]
  },
  {
    "d": 2,
    "q": "Oʻquvchilarda hosil boʻladigan motivlarning kuchli yoki kuchsiz boʻlishi nimaga bogʻliq?",
    "opts": [
      "Oʻqituvchining pedagogik mahoratiga bogʻliq",
      "Darsning mavzusiga bogʻliq",
      "Oʻquvchining bilimiga bogʻliq",
      "Oʻqituvchiningbi lim darajasiga bogʻliq"
    ]
  },
  {
    "d": 2,
    "q": "Temperamentning qanday tiplari mavjud?",
    "opts": [
      "Xolerik, sangvinik, melanxolik, flegmatik",
      "Xolerik, sangvinik",
      "Sangvinik, melanxolik",
      "Sangvinik, melanxolik, flegmatik"
    ]
  },
  {
    "d": 2,
    "q": "Xarakter tushunchasiga berilgan to‘gri lavjoni toping?",
    "opts": [
      "Kishining hulq-atvorida namoyon boʻladigan tugʻma xususiyat.",
      "Shaxsning hulq-atvorida va hatti-harakatida namoyon boʻladigan oliy asab faoliyatining tugʻma xususiyatidir.",
      "Kishilarning jamiyatda qabul qilingan ahloq meʼyoriga muvofiq harakat qilishi.",
      "Kishilarning jamiyatda qabul qilingan ahloq meʼyoriga muvofiq harakat qilishi."
    ]
  },
  {
    "d": 2,
    "q": "Hadis ilmining rivojiga katta hissa qoʻshgan muhaddislarni aniqlang?",
    "opts": [
      "Muborak al-Marvaziy, Imom al-Buxoriy, Imom at-Termiziy.",
      "Imom al-Buxoriy, A.Navoiy, Ahmad Donish",
      "Imom Ismoil al-Buxoriy, Muborak al-Marvaziy, Musa al-Xorazmiy.",
      "Imom Ismoil al-Buxoriy, Imom at-Terimiziy, Qayqovus."
    ]
  },
  {
    "d": 2,
    "q": "Qobiliyat tushunchasiga berilgan to‘gri jlavobni toping?",
    "opts": [
      "Bilimlarni, koʻnikma va malakalarni nisbatan osonlik bilan egallab oladigan va biror faoliyat bilan muvaffaqiyatli shuqullanish mumkin boʻlgan individual psixologik xususiyatdir.",
      "Kishining oʻzi haqida qandaydir fikr yuritishga yordam beruvchi xatti-harakati va faoliyatidir.",
      "Shaxsning babrasidan kelib chiqqan individual xususiyatidir.",
      "Qobiliyat, tugʻma xususiyat."
    ]
  },
  {
    "d": 2,
    "q": "Ya.A Kamenskiy didaktikani qanday taʼriflagan?",
    "opts": [
      "“ Hammani hamma narsaga universal oʻqitish sanʼati”",
      "Zamonaviy oʻqitish tizimi”",
      "“Toʻliq tafakkur akti”",
      "“Tarbiya pridmeti”"
    ]
  },
  {
    "d": 2,
    "q": "Bilish jarayonlarini koʻrsatib bering?",
    "opts": [
      "Sezgi, diqqat, xotira, idrok, tafakkur, nutq, xayol",
      "Diqqat, faollik, tafakkur",
      "Diqqat, xotira, sezgi, idrok, tafakkur.",
      "Hissiyot, xayol, idrok, sezgi."
    ]
  },
  {
    "d": 2,
    "q": "Turkistonda jadidchilik harakatining yirik vakillari kimlar?",
    "opts": [
      "M.Behbudiy, Munavvar Qori Abdurashidov, Ibrat, A.Avloniy, Cho‘lpon",
      "M.Behbudiy, Munavvar Qori Abdurashidov,Fitrat, Gʻ.Gʻulom.",
      "S.Ayiniy, M.Behbudiy, A.Avloniy, Mirzo Rahimov",
      "Behbudiy,Fitrat, S.Ayniy, Oybek."
    ]
  },
  {
    "d": 2,
    "q": "XX asr boshlarida Pedagogika qaysi fanlar tizimidan fan sifatida ajralib chiqqan?",
    "opts": [
      "Falsafa",
      "Matematika",
      "Tarix",
      "Fizika"
    ]
  },
  {
    "d": 2,
    "q": "Ta`lim va tarbiya jarayonini yaxlitlikda qaysi fan o‘rganadi?",
    "opts": [
      "Pedagogika",
      "Mantiq",
      "Falsafa",
      "Tarbiya"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogikaning maxsus tarmogʻi tiflopedagogika kimlar bilan shugʻullanadi?",
    "opts": [
      "koʻzi ojiz tarbiyalanuvchilar taʼlim-tarbiyasi bilan shugʻullanuvchi",
      "kar va gung tarbiyalanuvchilar taʼlim-tarbiyasi bilan shugʻullanuvchi",
      "aqli ojizlar taʼlim- tarbiyasi bilan shuullanuvchi.",
      "qonuniyatlarini oʻrganadi."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining obyekti qaysi qatorda keltirilgan?",
    "opts": [
      "Yaxlit pedagogik jarayon",
      "Yosh avlodni har tomonlama xulq- atvori va dunyo-qarashini tarkib toptirish jarayoni.",
      "O‘quvchilami nazariy bilim, amaliy ko`nikma va malakalar bilan qurollantirish.",
      "Ta`lim-tarbiya jarayoni, mazmuni, qonuniyatlari, tamoyillari, metod va vositalari."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika fanining predmeti nimadan iborat?",
    "opts": [
      "Ta`lim-tarbiya jarayoni, mazmuni, qonuniyatlari, tamoyillari, shakl, metod va vositalari.",
      "Muayyan, aniq maqsad hamda ijtimoiy-tarixiy tajriba asosida yosh avlodni har tomonlama o`stirish,",
      "Yaxlit pedagogik jarayon",
      "O‘quvchilami nazariy bilim, amaliy ko`nikma va malakalar bilan qurollantirish."
    ]
  },
  {
    "d": 2,
    "q": "Shaxsning rivojlanishiga taʼsir etuvchi omillar qaysilar?",
    "opts": [
      "Irsiyat, tashqi muhit, taʼlim-tarbiya.",
      "Irsiyat, tashqi muhit.",
      "Tashqi muhit, taʼlim-tarbiya.",
      "Irsiyat, taʼlim-tarbiya"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik muhit deganda nimani tushunasiz?",
    "opts": [
      "Pedagogik muhit – pedagogik maqsadlarga muvofiq ravishda maxsus tuzilgan shaxslararo munosabatlar tizimidir.",
      "Pedagogik muhit – pedagog va talaba oʻrtasidagi munosabatlar yiindisi",
      "Pedagogik muhit – dars jarayonidir",
      "Pedagogik muhit-shaxslararo munosabatlar tizimidir."
    ]
  },
  {
    "d": 2,
    "q": "Maktabgacha yoshdagi bolaning asosiy faoliyati asosan qaysi faoliyat turidan iborat?",
    "opts": [
      "Oʻyin.",
      "Predmetli harakat.",
      "Qurish-yasash.",
      "Hissiy munosabat"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogikanig asosiy kategoriyalaridan biri bo‘lgan tarbiyaga qaysi qatorda to‘g’ri ta’rif berilgan?",
    "opts": [
      "O‘quvchilami nazariy bilim, amaliy ko`nikma va malakalar bilan qurollantirish, kompetentlikni tarkib toptirishga yo'naltirilgan jarayon.",
      "Yaxlit pedagogik jarayon.",
      "Aniq maqsad hamda ijtimoiy-tarixiy tajriba asosida yosh avlodni har tomonlama o`stirish, uning ongi, xulq- atvori va dunyo-qarashini tarkib toptirish jarayoni.",
      "Ta`lim-tarbiya jarayoni, mazmuni, qonuniyatlari, tamoyillari, shakl, metod va vositalari."
    ]
  },
  {
    "d": 2,
    "q": "Muayyan harakat yoki faoliyatni bajarishning avtomatlashtirilgan shakliga nima deyiladi?",
    "opts": [
      "Malaka",
      "Bilim",
      "Ko‘nikma",
      "Ma`lumot"
    ]
  },
  {
    "d": 2,
    "q": "Bilim deb nimaga aytiladi?",
    "opts": [
      "Oʻquvchilar taʼlim jarayonida oʻzlashtirishi lozim boʻlagn oʻquv material lariga aytiladi.",
      "Oʻquvchilarning taʼlim jarayonida oʻzlashtiradigan va amalda qoʻllaydigan tabiat va jamiyat xaqidagi maʼlumot lar va faktlar.",
      "Oʻquvchilar tushungan esda qoldirilgan, amalda qoʻllay oladigan ilmiy faktlar tushuncha qoidalar jamiyat aytiladi.",
      "Kishilarning tabiat va jimiyat xaqidagi tushunchalariga aytiladi."
    ]
  },
  {
    "d": 2,
    "q": "Koʻnikma deb nimaga aytiladi?",
    "opts": [
      "Oʻquvchilarning oʻzlashtirgan bilimlarini amalda qoʻllash usullarini egallashlariga aytiladi.",
      "Oʻquvchilarni taʼlim ishining muayyan tartiblariga odatlanishlariga aytiladi.",
      "Oʻquvchilarning oʻquv sharoitiga koʻnikib ketishlariga aytiladi.",
      "Oʻquvchilarni taʼlim jarayonida oʻzlashtirgan bilimlariga aytiladi."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik qobiliyatga ta’rif berilgan to‘gri javobni toping?",
    "opts": [
      "Didaktik, akademik nutq, tashkilotchilik, kommunikativ, pedagogik xayol, diqqqatni taqsimlay olish, avtoritar qobiliyat..",
      "Didaktik, akademik, pedagogik xayol, diqqqatni taqsimlay olish.",
      "Nutq madaniyati, diqqqatni taqsimlay olish, avtoritar qobiliyat",
      "Tashkilotchilik, kommunikativ qobiliyat."
    ]
  },
  {
    "d": 2,
    "q": "Taʼlim jarayoning tarkibiy qismlariga nimalar kiradi?",
    "opts": [
      "Oʻquv materialini idrok qilish, uni tushunish, umulashtirish, amalda qo’llash",
      "Taʼlim maqsadini belgilash, bilimga ehtiyoj motivlar hosil qilish talim mazmunini metodlarini belgilash oʻquvchilarning oʻquv bilish faoliyatini yoʻlga qoʻyish.",
      "Uy vazifalarini soʻrash, baholash, yangi materialni bayon qilish, mustaxkamlash",
      "Analiz, sintez, taqqoslash, umumiylashtirish, xulosa."
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchining asosiy vazifalariga nimalar kiradi?",
    "opts": [
      "Ta’lim, tarbiya, rivojlanish, shakllantirish jarayonini boshqarish",
      "O‘qitish va o‘rgatish",
      "O‘qitish va tarbiyalash",
      "Rivojlanish, shakllantirish jarayonini boshqarishdir"
    ]
  },
  {
    "d": 2,
    "q": "Ta'limning tashkiliy shakllarini aniqlang?",
    "opts": [
      "Dars, va ta'lim shakli, oila, maktab va darsdan tashqari ta'lim.",
      "Dars, ekskursiya, uy ishi, fakul'tativ mashg‘ulot, maslahat, praktikum, olimpiada",
      "O‘quvchilar bilan yakka ishlash, dars, tabaqalashtirilgan ta'lim, uy ishi.",
      "Suhbat, munozara lar, kitob ustida ishlash, adabiy kecha, konferensiya."
    ]
  },
  {
    "d": 2,
    "q": "Ta`lim-tarbiya natijasida o`zlashtirilgan va tizimlashtirilgan bilim, hosil qilingan ko`nikma va malakalar hamda tarkib topgan dunyoqarash majmuiga nima deyiladi?",
    "opts": [
      "Ma’lumot",
      "Ko’nikma",
      "Bilim",
      "Malaka"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogikaning boshqa fanlar bilan aloqadorligi mavjud bo`lmagan fan qaysi qatorda keltirilgan?",
    "opts": [
      "Mantiq",
      "Etika",
      "Estetika",
      "Ta`lim menejmenti"
    ]
  },
  {
    "d": 2,
    "q": "Psixikaning namoyon boʻlish shakllariga nimalar kiradi?",
    "opts": [
      "Psixik jarayonlar, psixik holatlar va shaxsning individual xususiyatlari",
      "Sezgi, idrok, xotira, tafakkur, hayol",
      "Maqsadga intiluvchanlik, xarakter",
      "Temperament, qobiliyat, qiziquvchanlik"
    ]
  },
  {
    "d": 2,
    "q": "Bolalar psixologiyasi fanida eng ko‘p qaysi metod qo‘llaniladi?",
    "opts": [
      "Bolalar ijodini o`rganish test metodi",
      "Bolalar ijodini o`rganish",
      "Pedagogik kuzatish",
      "Pedagogik tahlil qilish"
    ]
  },
  {
    "d": 2,
    "q": "Test metodi orqali nimalar aniqlanadi?",
    "opts": [
      "Qisqa vaqt ichida bajarilishi lozim boʻlgan vazifa boʻlib uning bajarilishi baʼzi bir vazifalar mukammalligining koʻrsatgichi aniqlanadi",
      "Shaxslararo birgalikdagi faoliyat jarayonida guruh, jamoadagi oʻzaro munosabatlarni aniqlash metodidir",
      "Psixologik dalilni aniq namoyon qilishga yordam beradigan sharoitni yuzaga keltirish maqsadida tadqiqotchining tekshiriluvchi faoliyatiga aktiv aralashishini taqozo etadi",
      "Psixik hodisalarning tashqi alomatlarini tasvirlash bilan cheklanib qolmay, balki bu hodisalarning psixologik tabiatini ilmiy ravishda tushuntirib beradi."
    ]
  },
  {
    "d": 2,
    "q": "Kuzatish metodi orqali nimalar aniqlanadi?",
    "opts": [
      "Psixologik dalilni aniq namoyon qilishga yordam beradigan sharoitni yuzaga keltirish maqsadida tadqiqotchining tekshiriluvchi faoliyati aniqlanadi",
      "Tashqi alomatlarini tasvirlash bilan cheklanib qolmay, balki bu hodisalarning psixologik tabiatini ilmiy ravishda tushuntirib beradi",
      "Qisqa vaqt ichida bajarilishi lozim bo‘lgan vazifa bo‘lib uning bajarilishi ba'zi bir psixik vazifalar mukammalligining ko‘rsatgichi bo‘lib xizmat qiladi.",
      "Shaxslararo bargalikdagi faoliyat jarayonida guruh va jamoadagi o‘zaro munosabatlarni aniqlash metodidir."
    ]
  },
  {
    "d": 2,
    "q": "“Agar pedagog odamni har jihatdan tarbiyalashni istar ekan, u eng avvalo o‘sha tarbiyalanadigan odamni har tomonlama bilmog‘i kerak”- bu fikr kimga mansub?",
    "opts": [
      "K. D. Ushinskiy.",
      "S. Makarenko.",
      "Ya. A. Komenskiy.",
      "Alisher Navoiy."
    ]
  },
  {
    "d": 2,
    "q": "O‘quvchilarning ijodiy faoliyatini tashkil etishda qanday metodlardan foydalanish maqsadga muofiq?",
    "opts": [
      "Ilmiy-tadqiqot metodi",
      "O‘qitish metodlari.",
      "Shasiy namuna ko‘rsatish metodi.",
      "Ma'ruza, suhbat, ko‘rgazmalilik metodlari"
    ]
  },
  {
    "d": 2,
    "q": "«Shaxsning ijtimoiylashuv jarayoni» deb nimaga aytiladi?",
    "opts": [
      "Inson tomonidan ijtimoiy tajribani egallash va hayot - faoliyat jarayonida uni faol tarzida o‘zlashtirish jagrayoni.",
      "Tashqi muhitni insonga ta'sir ko‘rsatishi",
      "Tashqi muhit va boshqa kishilar tomonidan insonga maqsadli ravishda ta'sir ko‘rsatish",
      "Bunday termin mavjud emas"
    ]
  },
  {
    "d": 2,
    "q": "“Inson kamolotida uch narsa – irsiyat, muhit, tarbiya muhim rol to‘ynaydi” degan fikrlar muallifi kim?",
    "opts": [
      "Ibn Sino",
      "Yusuf Xos Hojib",
      "Forobiy",
      "Beruniy"
    ]
  },
  {
    "d": 2,
    "q": "Faoliyat mahsulini o‘rganish metodi orqali nimalar aniqlanadi?",
    "opts": [
      "Inson faoliyatining o‘sish ko‘rsatkichi aniqlanadi",
      "Psixologik dalilni aniq namoyon qilishga yordam beradigan sharoit aniqlanadi",
      "Psixik hodisalarning psixologik tabiati ilmiy ravishda tushuntirib beriladi",
      "Shaxslararo birgalikdagi faoliyat jarayonida guruh va jamoadagi o‘zaro munosabatlarni aniqlanadi"
    ]
  },
  {
    "d": 2,
    "q": "Anketa metodi orqali nimalar aniqlanadi?",
    "opts": [
      "Yozma ravishda berilgan savollarga javob olish va uning natijasini tahlil qilinadi va aniqlanadi",
      "Psixologik dalilni aniq namoyon qilishga yordam beradigan sharoit aniqlanadi",
      "Qisqa vaqt ichida bajarilishi lozim bo‘lgan vazifa belgilanadi",
      "Sshaxslararo birgalikdagi faoliyat jarayonida guruh va jamoadagi o‘zaro munosabatlarni aniqlanadi"
    ]
  },
  {
    "d": 2,
    "q": "Faoliyat turlari nimalardan iborat?",
    "opts": [
      "O‘yin, o‘qish, mehnat.",
      "Tafakkur, mehnat.",
      "Axborot qidiruvi, mehnat, muomala.",
      "Tafakkur, axborot qidiruvi, mexnat."
    ]
  },
  {
    "d": 2,
    "q": "Ta'lim-tarbiyaga tadqiqiy ijodiy yondashuvning maqsadi nimadan iborat?",
    "opts": [
      "Bu yondashuv ta'limning maqsadi, talabada biror muammoni yechish qobiliyatini o‘stirish, yangi bilimni mustaqil o‘zlashtirish, harakatning yangi usullarini topish, shaxsning tashabbus ko‘rsatishi",
      "Talaba o‘z ilmiy ishlarini, natijalarini hayotga tatbiq etilishiga erishish",
      "Talabalar ijodiy ishlarini, natijalarini rahbarlariga topshirishi.",
      "mustaqil o‘zlashtirish, harakatning yangi usullarini topish, shaxsning tashabbus ko‘rsatishi"
    ]
  },
  {
    "d": 2,
    "q": "Faoliyat tushinchasi nimalarni o‘z ichiga oladi?",
    "opts": [
      "Odamning u yoki bu ehtiyojlarini qondiradigan faol xatti-harakatni",
      "Odam organizmining faol vositasini",
      "Odamning tashqi olam bilan o‘zaro ta'sirini",
      "Har qanday impul'siv xatti-harakat faoliyat deb ataladi"
    ]
  },
  {
    "d": 2,
    "q": "An'anaviy ta'limning asosiy kamchiligini ko‘rsating?",
    "opts": [
      "Talabaning aqliy, ijodiy, kommutativ bilim olishini yetarlicha ta'minlanmaydi.",
      "Ta'lim faqat darslik va to‘quv qto‘llanmalarga asoslanadi;",
      "Zamonaviy ta'limning talablariga butunlay javob bermaydi;",
      "Ta'limda to‘quvchining maqsadlari inobatga olinmaydi;"
    ]
  },
  {
    "d": 2,
    "q": "Shaxs tushunchasiga to‘gri javobni toping?",
    "opts": [
      "ijtimoiy munosabatlarga kirishuvchi va ijtimoiy taraqqiyotda faol qatnashuvchi odam.",
      "o‘zining ongi, tili bilan hayvonlardan farq qiluvchi odam shaxsdir",
      "har qanday zot shaxs deb ataladi",
      "insonlik jinsiga mansublik faktiga shaxs deb ataladi"
    ]
  },
  {
    "d": 2,
    "q": "Diqqatning asosiy xususiyatlari nimalardan iborat?",
    "opts": [
      "Diqqatning barqarorligi, ko‘lami, taqsimlanishi va kuchi",
      "Diqqatning ko‘chishi",
      "Diqqatning bo‘linishi va parishonligini",
      "Diqqatning ko‘lamini"
    ]
  },
  {
    "d": 2,
    "q": "Idrok xususiyatlari nimalardan iborat?",
    "opts": [
      "javoblarning barchasi toʻgri",
      "predmetlik",
      "yaxlitlik",
      "barqarorlik va anglanilganlik"
    ]
  },
  {
    "d": 2,
    "q": "Bola to‘g‘ri yurishni, muloqotga kirishishni, predmetli faoliyatni egallash xususiyatlarni qaysi davrda egallaydi?",
    "opts": [
      "Ilk bog’cha yoshi davrida",
      "Chaqaloqlik davrida",
      "Kichik maktab yoshida",
      "Maktabgacha yoshda"
    ]
  },
  {
    "d": 2,
    "q": "Nutq deb nimaga aytiladi?",
    "opts": [
      "Kishilarning til vositasidagi o‘zaro munosabatda bo‘lish jarayoni",
      "Biror kishi bilan aloqa o‘rnatish vositasi",
      "Nimanidir aytish ehtiyoji",
      "Kishilar o‘rtasidagi munosabatda vujudga keladigan jarayon"
    ]
  },
  {
    "d": 2,
    "q": "O‘quv faoliyati – bu shunday faoliyatki,………..?",
    "opts": [
      "Unda shaxsning psixik jarayonlari shakllanadi va rivojlanadi, uning asosida yangi faoliyatlar yuzaga keladi",
      "U bevosita, kishilarni ijod qilishga, mehnat bilan shug‘ullanishga undaydi;",
      "U kelajakka yo‘naltirilgan rivojini belgilaydi",
      "O‘rganish,egallash,yaratishdir"
    ]
  },
  {
    "d": 2,
    "q": "Temperament tushunchasiga berilgan to‘gri javob qaysi?",
    "opts": [
      "Shaxsning xulq-atvorida va hatti-harakatida namoyon bo‘ladigan oliy asab faoliyatining tug‘ma xususiyatidir",
      "Kishining xulq-atvorida namoyon bo‘ladigan tug‘ma xususiyat",
      "Odam asab tizimining holati uning boshqa odamlarga bo‘lgan munosabati",
      "Odam tanasidagi «suvlarning» miqdoriga, ularning nisbatiga qarab odamlarni tiplariga ajratish"
    ]
  },
  {
    "d": 2,
    "q": "Sezgi a'zolari axborotni…...?",
    "opts": [
      "Saralaydi, jamlaydi, miyaga etkazadi",
      "Inson miyasida jamlaydi",
      "Ruh va jonni rivojlantiradi",
      "Insonni rivojlantiradi"
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchining asosiy vazisini kursating?",
    "opts": [
      "Maqsadga yo‘naltirish",
      "Boshqarish",
      "Tashkollishtirish",
      "Baxolash"
    ]
  },
  {
    "d": 2,
    "q": "Sezgi psixik hodisalarning qaysi guruhiga mansub?",
    "opts": [
      "Psixik jarayonlarga",
      "Psixik xolatlarga",
      "Psixik xususiyatlarga",
      "Parapsixologik hodisalarga"
    ]
  },
  {
    "d": 2,
    "q": "O‘quv qo‘lanmasining darslikdan farq qiluvchi jihatini toping?",
    "opts": [
      "Muayyan mavzularni darslikka nisbatan kengroq yoritadi",
      "Ular to‘rtasida farq bo‘lmaydi",
      "Darslikning dastlabki nusxasi",
      "O‘quv qo‘llanma ma'ruzalar matnidan iborat"
    ]
  },
  {
    "d": 2,
    "q": "Psixologiya fanining asosiy tadqiqot metodlari qaysilar?",
    "opts": [
      "Kuzatish, eksperiment, anketa, test, sotsiometriya, suhbat, labaratoriya",
      "Kuzatish metodi, labaratoriya metodi",
      "Ma'lumotlarni qayta ishlash, psixologik-pedagogik eksperiment,",
      "Psixologik – pedagogik eksperiment"
    ]
  },
  {
    "d": 2,
    "q": "Individual ta'lim deganda nimani tushinasiz?",
    "opts": [
      "Pedagog bir talaba individual yondashgan holda ta'limni tashkil etishi",
      "Yaxshi o‘zlashtirgan talabalarni jamlab o‘kaziladigan ta'lim",
      "Gurularda o‘tkaziladigan ta'lim",
      "Ta'limni tashkil etish"
    ]
  },
  {
    "d": 2,
    "q": "O‘quv faoliyatining elementlarini to‘g‘ri belgilang?",
    "opts": [
      "O‘quv motivlari, o‘quv topshiriqlari, o‘quv harakatlari, o‘qituvchinig nazorati, o‘qituvchinig baxolashi",
      "Ma'lumot usullari, o‘quv motivlari, o‘qituvchining baxolashi",
      "Motivasiya, xotira, o‘quv topshiriqlari, o‘qituvchining nazorati",
      "D.Oo‘quv motivlari, o‘qituvchining nazorati."
    ]
  },
  {
    "d": 2,
    "q": "Ideal o‘qituvchidagi sifatlarni ko‘psating?",
    "opts": [
      "Har tomonlama namunali darajada darsni olib boruvchi o‘qituvchi",
      "O‘qituvchining mahorati",
      "Aniq ilmiy g‘oyalarga ega ega bo‘lgan o‘qituvchi",
      "Sinfda yuqori darajada intizomni yuzaga keltirgan o‘qituvchi"
    ]
  },
  {
    "d": 2,
    "q": "Motiv deb nimaga aytiladi?",
    "opts": [
      "Inson xulq – atvorining ichki barqarorligi harakatga undovchi kushga",
      "Insonning faolligiga",
      "Mayillarga",
      "Maqsadni ko‘zlab ish tutishga"
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchi va o‘quvchi muloqotini bog‘lovchi asosiy vosita?",
    "opts": [
      "So‘z",
      "Nutq",
      "Dialog",
      "Muloqot"
    ]
  },
  {
    "d": 2,
    "q": "Inson ko‘nikma va malakalarining avtomatlashuviga nima deb aytiladi?",
    "opts": [
      "Professional faoliyat",
      "Malakalarning shakllanganligi",
      "Ko‘nikmalarning faollashuvi",
      "Harakatlar tezligi"
    ]
  },
  {
    "d": 2,
    "q": "O‘quvchilarni qobiliyatlari, qiziqishlari va iste'dodlarini rivojlantirish asosan nimaga bog‘liq?",
    "opts": [
      "Maqsadga muvofiq o‘quv-tarbiyaviy jarayonini tashkilashtirish va amalga oshirishga",
      "Tabiiy layoqat nishonalariga",
      "Egallangan bilim, malakalarning xajmiga",
      "Tengdoshlari bilan muloqotda bo‘lishiga"
    ]
  },
  {
    "d": 2,
    "q": "Malaka deb nimaga aytiladi?",
    "opts": [
      "Maqsadga muofiq xatti-xarakalarningt muvaffaqiyatli amalga oshirilishi",
      "Mashq qilish natijasida yuzaga kelgan xatti-xarakatlarning avtomatlashuvi",
      "Inson xulq –atvorining ichki barqarorligi va xarakati",
      "Bilimlarning rivojlanishi"
    ]
  },
  {
    "d": 2,
    "q": "Muloqotning shaxslararo munosabatlarda bir-birlarini idrok etishlari va tushunishlari muliqotning qaysi turiga kiradi?",
    "opts": [
      "Perseptiv",
      "Kommunikativ",
      "Interaktiv",
      "Refleksiv"
    ]
  },
  {
    "d": 2,
    "q": "Tarbiya tushinchasiga berilgan to‘g‘ri javobni belgilang?",
    "opts": [
      "Bu shaxsning ijtimoiy, ma'naviy, ahloqiy, aqliy, jismoniy kamolotga erishishi",
      "Kishilarni ijod qilishga, mehnat qilishgashga undaydigan jarayondir",
      "Bilim, ko‘nikma va malakalarni shakllanishi",
      "Kishilarni mehnat bilan shug‘ullanishga undaydigan jarayon."
    ]
  },
  {
    "d": 2,
    "q": "Shaxsdagi tug‘malik alomatlari bor individual sifatlar qaysi?",
    "opts": [
      "layoqat, iqtidor, iste'dod, qobiliyat",
      "layoqat, iste'dod",
      "Iste'dod",
      "Iqtidor"
    ]
  },
  {
    "d": 2,
    "q": "Nima orqali o‘quvchilarda ta'limga bo‘lgan munosabat yanada faol namoyon bo‘ladi?",
    "opts": [
      "Dunyoqarash orqali",
      "Qiziqish orqali",
      "Layoqat orqali",
      "E'tiqot orqali"
    ]
  },
  {
    "d": 2,
    "q": "Darsning texnologik xaritasi nima uchun xizmat qiladi?",
    "opts": [
      "O‘qituvchi va talaba faoliyati hamda unga taqsimlangan vaqt me'yorini har bir bosqich bo‘yicha to‘g‘ri belgilashga",
      "Mashg‘ulotni me'yorida tashkil etishga",
      "Vaqt me'yorini belgilash, bilim va ko‘nikmalarni egallashga",
      "Talabalar faoliyatini faollashtirishga"
    ]
  },
  {
    "d": 2,
    "q": "O‘quvchilarda mantiqiy tafakkurni rivojlantirish uchun……?",
    "opts": [
      "Xotira jarayonini takomillashtirish kerak.",
      "Bilish va fikrlash xususiyatlarini shakllantirish zarur.",
      "Individual psixologik xususiyatlarni rivojlantirish lozim",
      "Idrokni o‘stirish kerak."
    ]
  },
  {
    "d": 2,
    "q": "Shaxsning o‘qiganlari asosida mushohada qilgan bilim va g‘oyalari asosida yuritadigan fikrlash jarayoni……..?",
    "opts": [
      "Mantiqiy tafakkur",
      "Ijodiy tafakkur",
      "Nazariy tafakkur",
      "Amaliy tafakkur"
    ]
  },
  {
    "d": 2,
    "q": "Tarbiyasi qiyin o‘smirlarni keltirib chiqaruvchi sababhlaroni aniqlang?",
    "opts": [
      "Shaxsning biologik nuqsonlari, psixik kamolotdagi kamchiliklar, shaxsning tarbiyasidagi nuqsonlar, bilim olish faoliyatidagi kamchiliklar, maktab ta'limi va tarbiyasida kamchiliklar, maktabdan tashqari muhitdagi nuqsonlar",
      "Shaxsning psixik o‘sishdagi kamchiliklar, aql-idrokning zaifligi, irodaning bo‘shligi, xissiyotning kuchsizligi, zarur ehtiyoj va qiziqish-larning mavjud emasligi",
      "Maktabdan tashqari muhitning ta'siridagi nuqsonlar, chunonchi, oilada pedagogig-psixologik bilimlarning yetishmasligi, oilaviy nizolar, ajralish, ota-onaning ichkilikka berilishi, teng-qurlarning ta'siri",
      "Psixik kamolotdagi kamchiligi, bilim olish faoliyatidagi kamchiliklar, maktab ta'limi va tarbiyasida kamchiliklar, maktabdan tashqari muhitdagi nuqsonlar"
    ]
  },
  {
    "d": 2,
    "q": "Laboratoriya mashg‘ulotlarining tavsifi keltirilgan javobni belgilan?",
    "opts": [
      "Talabalar mustaqil ravishda vazifalarni bajaradilar yoki eksperiment o‘tkazadilar",
      "Talabalar mustaqil amaliy ishlarni bajaradi",
      "Tematik bog‘langan muntazam kurs chuqur o‘rganiladi",
      "Bilimlarni mustaqil o‘zlashtiradi"
    ]
  },
  {
    "d": 2,
    "q": "Ta'limga psixologik tayyorgarlik deganda nima nazarda tutiladi?",
    "opts": [
      "Ta'limning metodlari, usullari va pedagogik muloqot usullari",
      "Ta'lim beruvchi, ma'lumot usullari, o‘quv motivlari,",
      "Bolaning obektiv va subektiv jihatdan maktab talabiga munosibligi",
      "Ma'lumot usullari, o‘quv motivlari, ta'limning metodlari,usullari"
    ]
  },
  {
    "d": 2,
    "q": "Talaba shaxsining asosiy faoliyati qaysi?",
    "opts": [
      "O‘qish",
      "O‘yin.",
      "Mexnat",
      "Hissiy munosabat"
    ]
  },
  {
    "d": 2,
    "q": "O‘qituvchiga xos bo‘lgan shaxsiy xislatlarini to‘g‘ri belgilang?",
    "opts": [
      "O‘qituvchining kuzatuvchanligi, o‘z diqqat e’tiborini taqsimlay olishi, o‘ziga tanqidiy munosabatda bo‘lishi, pedagogik takt, nutqning emosional ifodalanishi",
      "Bolalarni yaxshi ko‘rishi, mehnatsevarlik, mexribonlik, kamtarlik,",
      "Bolalar jamoasini uyushtira bilishi, turli sharoitlarda bolalar jamoasini boshqara olish",
      "O‘qituvchi o‘ziga tanqidiy munosabatda bo‘lishi"
    ]
  },
  {
    "d": 2,
    "q": "Yosh davrlarini to‘g‘ri belgilang?",
    "opts": [
      "Chaqaloqlik, go‘daklik, bolalik, kichik maktab yoshi, o‘smirlik, o‘spirinlik, yetuklik, keksalik davri",
      "Chaqaloqlik, kichik maktabgacha davr, o‘smirlik davri,",
      "Bolalik, bog‘cha yoshi, maktabgacha davr, ilk o‘spirinlik davri,",
      "Chaqaloqlik, bolalik, o‘smirlik, ilk o‘spirinlik, o‘spirinlik davri"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik qobiliyatlarga nimalar kiradi?",
    "opts": [
      "Didaktik qobiliyatlar, akademik qobiliyatlar, perseptiv qobiliyatlar, nutq qobiliyati, tashkilotchilik qobiliyati, avtoritar qobiliyati, kommunikativ qobiliyati, pedagogik hayol, diqqatni taqsimlay olish qobiliyati",
      "Bolalarni yaxshi ko‘rishi, mexnasevarlik, mehribonlik, kamtarlik,",
      "O‘qituvchilarning kuzatuvchanligi, o‘z diqqat e'tiborini taqsimlay olishi,",
      "Bolalarni yaxshi ko‘rishi, mexnasevarlik, mehribonlik,"
    ]
  },
  {
    "d": 2,
    "q": "Nutqning qanday turlari mavjud?",
    "opts": [
      "Og’zaki, ichki,yozma, tashqi nutq",
      "Og’zaki, ichki nutq",
      "Ichki,yozma nutq",
      "Yozma, tashqi nutq"
    ]
  },
  {
    "d": 2,
    "q": "Ta'lim-tarbiyaga tadqiqiy ijodiy yondashuv nimalardan iborat?",
    "opts": [
      "Bu yondashuv ta'limning maqsadi, talabada biror muammoni yechish qobiliyatini o‘stirish, yangi bilimni mustaqil o‘zlashtirish, harakatning yangi usullarini topish, shaxsan tashabbus ko‘rsatish",
      "Talaba o‘z ilmiy ishlarini, natijalarini hayotga tatbiq etilishiga erishish.",
      "Talabalar ijodiy ishlarini, natijalarini ra'barlariga topshirishi.",
      "Mustaqil o‘zlashtirish, harakatning yangi usullarini topish"
    ]
  },
  {
    "d": 2,
    "q": "Akademik qobiliyatlarga ega bo‘lgan o‘qituvchi qanday bo‘lishi kerak?",
    "opts": [
      "Matematika, fizika , biologiya, ona tili, adabiyot, tarix kabi fanlar sohasiga xos qobiliyatlarga ega bo‘lishi kerak",
      "O‘quvchilarga bevosita emosional-irodaviy ta'sir etib, ularda obro‘ orttira bilishdan iborat qobiliyatlarga ega bo‘lishi kerak",
      "Kishining o‘z his tuyg‘ularini nutq yordamida, shu bilan birga mimika va pontomima yordamida aniq va ravshan qilib ifodalab berish qobiliyatiga ega bo‘lishi kerak",
      "Mimika va pontomima yordamida aniq va ravshan qilib ifodalab berish qobiliyatiga ega bo‘lishi kerak"
    ]
  },
  {
    "d": 2,
    "q": "Kadrlar tayyorlash tizimining bosh subyekti va obyekti qaysi qatorda keltirilgan?",
    "opts": [
      "Shaxs",
      "Inson",
      "Odam",
      "Individ"
    ]
  },
  {
    "d": 2,
    "q": "Tafakkur hosil bo‘lishi uchun qanday fikr yuritish jarayonlari muhim deb hisoblaysiz?",
    "opts": [
      "Fnaliz- sintez, taqqoslash, umumlashtirish, xulosa qilish",
      "Taqqoslash va mavhumlash",
      "Konkretlashtirish, taxlil qilish va sintezlash.",
      "Umumlashtirish va taqqoslash"
    ]
  },
  {
    "d": 2,
    "q": "Faqat qaysi sohada yoshlarni huquqiy tarbiyasida muvafaqqiyatga erishish mumkin?",
    "opts": [
      "Huquqiy Tarbiya",
      "Tarbiya",
      "Ta’lim tarbiyaviy",
      "Ta’lim."
    ]
  },
  {
    "d": 2,
    "q": "Mexnat jarayonida kishining individual - psixologik hususiyatlarining yuzaga chiqishini psixologiya fanining qaysi soxasi o‘rganadi?",
    "opts": [
      "Mehnat psixologiyasi",
      "Injenerlik psixologiyasi",
      "Ta'lim psixologiyasi",
      "Umumiy psixologiya"
    ]
  },
  {
    "d": 2,
    "q": "Qobiliyatni ilk va boshlang‘ich tarkibiy qismini toping?",
    "opts": [
      "iste’dod",
      "faoliyat",
      "qiziqish",
      "ziyraklik."
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik psixologiya nimalarni o‘rganadi?",
    "opts": [
      "Ta'lim tarbiyaning psixologik qonuniyatlari va mexanizmlarini o‘rganadi",
      "Psixik taraqqiyotning umumiy qonuniyatlarni o‘rganadi",
      "Inson uzoq umr ko‘rishni o‘rganadi",
      "Psixik rivojlanishni o‘rganadi"
    ]
  },
  {
    "d": 2,
    "q": "“Ekologiya” terminini fanga qaysi olim birinchi bo‘lib kiritgan?",
    "opts": [
      "Nemis olimi Ernest Gekkel",
      "Rus pedagogi Makarenko",
      "O‘zbek olimi A. Abduqodirov",
      "Rus pedagogi O.Akulova"
    ]
  },
  {
    "d": 2,
    "q": "Ta'lim jarayonining muvaffaqiyoti nimalarga bog‘liq?",
    "opts": [
      "Ta'limning metodlari, usullari va pedagogik muloqot usullari, ta'lim beruvchi va o‘quvchi munosabatlariga",
      "Motivasiya, ma'lumot usullari, ma'lumotning tushunarliligi, xotira, ma'lumotni qo‘llashga",
      "Ta'lim beruvchi, ma'lumot usullari, o‘quv motivlari, o‘qituvchining baholash mezonlariga",
      "O‘qituvchinig nazorati, motivasiya, xotira, ta'lim beruvchiga"
    ]
  },
  {
    "d": 2,
    "q": "Paralingvistik muloqotga nimalar kiradi?",
    "opts": [
      "Tovush, imo-ishora, pantomimika",
      "Imo-ishora",
      "Pantomimika",
      "Tovush"
    ]
  },
  {
    "d": 2,
    "q": "O‘quv faoliyati motivasiyasining manbalari qaysilar?",
    "opts": [
      "Ichki motivlar, tashqi motivlar va shaxsiy motivlar",
      "Bilim ko‘nikma va malaka",
      "Ustanovka,qadriyat,ortirilgan qobiliyat",
      "Qobiliyat, ko‘nikma, malaka,shaxsiy motivlar"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogik mahorat bu nima?",
    "opts": [
      "O‘qituvchilami pedagogik faoliyatga tayyorlash taktikasi, pedagogik qobiliyatlami shakllantirish, pedagogik madaniyat va texnikani tarkib toptirish hamda nutq texnikasini egallash yo'llarini o`rganadi",
      "Maktabgacha ta`lim yoshidagi bolalami tarbiyalash, ulami intellektual, ma’naviy-axloqiy va jismoniy jihatdan kamolotga yetkazish masalalarini o`rganadi.",
      "Pedagogikaning konseplual masalalari va amaliy jihatlarini tadqiq etish.",
      "Pedagogikaning umumnazariy masalalari, qonuniyatlarini o‘rganadi."
    ]
  },
  {
    "d": 2,
    "q": "Psixologiya fani qaysi fan negisida yuzaga kelgan?",
    "opts": [
      "Falsafa",
      "Siyosatshunoslik",
      "Pedagogika",
      "Anatomiya"
    ]
  },
  {
    "d": 2,
    "q": "Bola tarbiyasida eng muhim ijtimoiy nazorat instituti nima?",
    "opts": [
      "oila",
      "bolalar uyi",
      "maktab",
      "mahalla"
    ]
  },
  {
    "d": 2,
    "q": "Tarbiya qachon vujudga kelgan?",
    "opts": [
      "Kishilik jamiyati paydo bo‘lishi bilan",
      "Asrimiz boshlarida",
      "Uyg‘onish davrida",
      "Quldorlik tuzumi davrida"
    ]
  },
  {
    "d": 2,
    "q": "Narsa va hodisalarni fikran qismlarga ajratish bilan bog‘liq bo‘lgan tafakkur jarayonifa nima deyiladi?",
    "opts": [
      "Analiz",
      "Sintez",
      "Hulosa chiqarish",
      "Deduksiya"
    ]
  },
  {
    "d": 2,
    "q": "Tushuntirish,suhbat,namuna usullari tarbiya metodlarining qaysi guruhiga mansub?",
    "opts": [
      "shaxs ongini shakllantiruvchi metodlar.",
      "Faoliyatni tashkil etish va xulq-atvor tajribalarini shakllantirish metodlari.",
      "Xulq-atvorni va faoliyatni rag`batlantirish metodlari.",
      "An’anaviy ta’lim metodlari"
    ]
  },
  {
    "d": 2,
    "q": "“Men” obrazi deganda nimani tushinasiz?",
    "opts": [
      "O‘z – o‘zini anglash, o‘zidagi mavjud sifatlarni baholash",
      "O‘zini anglash",
      "Inson o‘zini mavjudligini anglashi",
      "O‘ziga baho berish"
    ]
  },
  {
    "d": 2,
    "q": "Narsa va hodisalar ularning hususiyatlarini maqsad qo‘ymagan holda irodali zo‘riqishsiz esda olib qolish, esga tushirish, esda saqlashga nima geyiladi?",
    "opts": [
      "Ixtiyorsiz hotira",
      "Ixtiyoriy hotira",
      "Eydetik hotira",
      "Obrazli hotira"
    ]
  },
  {
    "d": 2,
    "q": "Ijtimoiylashuv deganda nimani tushinasiz?",
    "opts": [
      "Inson tomonidan ijtimoiy tajribani egallash, jamiyatga qo‘shilish",
      "Jamiyatga qo‘shilish",
      "Odamlar o‘rtasidagi muloqot",
      "Shaxsning ichki ruhiyati"
    ]
  },
  {
    "d": 2,
    "q": "Idrok deb nimaga aytiladi?",
    "opts": [
      "Sezgi a'zolarimizga ta'sir etayotgan narsa va hodisalarning miyamizda yaxlit o‘brazini aks etishiga aytiladi",
      "Biror sezgi a'zoimizga ta'sir etgan narsa hodisalarga aytiladi",
      "Tashqi olamdagi narsalarni aks ettirishda sezgilar yig‘indisi",
      "Predmetlarning xususiyat va sifatlarini birgalikda aks ettirish"
    ]
  },
  {
    "d": 2,
    "q": "To‘garaklar, klublar, olimpiadalar, viktorinalar, ko‘rgazmalar, ekspeditsiyalar va hokazolar ta’limni tashkil etishning qaysi shakliga misol bo‘la oladi?",
    "opts": [
      "Yordamchi",
      "Frontal",
      "Asosiy",
      "Guruhiy"
    ]
  },
  {
    "d": 2,
    "q": "“Individ” tushincasi qanday ma’noni anglatadi?",
    "opts": [
      "Tirik biologik mavjudot",
      "Tirik hayvon",
      "O‘simliklar dunyosi",
      "Tirik odam"
    ]
  },
  {
    "d": 2,
    "q": "Inson faolligi qanday turlarga bo‘linadi?",
    "opts": [
      "Tashqi va ichki faollikga",
      "Harakatning faolligiga",
      "Tashqi faollikga",
      "Ichki faollikga"
    ]
  },
  {
    "d": 2,
    "q": "Quyidagi oliy nerv faoliyati tipining qaysi temperamentga to‘g‘ri kelishini ko‘rsating: kuchli, muvozanatli , inert, tormozlanish qo‘zg‘alishdan ustun?",
    "opts": [
      "Xolerik",
      "Sangvinik",
      "Melanxolik",
      "Flegmatik"
    ]
  },
  {
    "d": 2,
    "q": "Markaziy nerv sistemasiga nima orqali ma’lymot yetib boradi?",
    "opts": [
      "Analizatorlar orqali",
      "Nerv tolalar orqali",
      "Neyronlar orqali",
      "Nerv hujayralari orqali"
    ]
  },
  {
    "d": 2,
    "q": "Inson hulq-atvori va faolligini tushintirib beruvchi psixologik sabablar majmuiga nima deyiladi?",
    "opts": [
      "Motivasiya",
      "Motiv",
      "Harakatlar",
      "Hulq-atvor"
    ]
  },
  {
    "d": 2,
    "q": "”Individuallik” tushincasi qanday ma’noni anglatadi?",
    "opts": [
      "Konkret odamni boshqa odamdan ajratib turuvchi o‘ziga xos xususiyatlar majmui",
      "Konkret odamni",
      "Shaxs",
      "Muhit"
    ]
  },
  {
    "d": 2,
    "q": "Shaxs ongining psixik bir tomonfa yo‘nalganligiga nima deyiladi?",
    "opts": [
      "Diqqat",
      "Idrok",
      "Tafakkur",
      "Xotira"
    ]
  },
  {
    "d": 2,
    "q": "Qobiliyatdagi orttirillan sifatlar shaxsda nimani ta’minlab beradi?",
    "opts": [
      "Muvaffaqiyatni",
      "Faoliyatni",
      "Ish - harakatni",
      "Faollikni"
    ]
  },
  {
    "d": 2,
    "q": "Nasldan-naslga o‘tuvchi, biologik ehtiyojlarni qondirishga yo‘naltirilgan, shartsiz reflekslarga asoslangan murakkab tug‘ma xatti harakat shakllariga nima deyiladi?",
    "opts": [
      "Instinktlar",
      "Ko‘nikmalar",
      "Reflekslar",
      "odatlar"
    ]
  },
  {
    "d": 2,
    "q": "Insonning biologik mohiyatini o‘zida aks ettiruvchi sifatga nima deyiladi?",
    "opts": [
      "Individ",
      "Individuallik",
      "Shaxs",
      "Inson"
    ]
  },
  {
    "d": 2,
    "q": "Biror sezgi organini kuzatganda ikkinchi sezgi organiga xos sezgining hosil bo‘lishiga nima deyiladi?",
    "opts": [
      "Sinesteziya",
      "Adaptasiya",
      "Appersepsiya",
      "Sensibilizasiya"
    ]
  },
  {
    "d": 2,
    "q": "XXI asrda axborotlarning ko‘pligi nimani o‘zgartiradi?",
    "opts": [
      "Axborotlar uzatilishi va tempini o‘zgartiradi",
      "Axborotni o‘zgartiradi",
      "Muloqotni o‘zgartiradi",
      "Harakatni o‘zgartiradi"
    ]
  },
  {
    "d": 2,
    "q": "Sezgilarning turlari: ekstrioseptiv, introseptiv, …. tushib qoldirilganini toping?",
    "opts": [
      "Proprioseptiv",
      "Ko‘rish",
      "Malaka",
      "Hid bilish"
    ]
  },
  {
    "d": 2,
    "q": "Shaxsdagi fikrlash elementlariga yangilik, noyoblik, qaytarilmaslik qo‘shilgandagi tafakkurga nima deyiladi?",
    "opts": [
      "Amaliy tafakkur",
      "Nazariy tafakkur",
      "Reproduktiv tafakkur",
      "Ijodiy tafakkur"
    ]
  },
  {
    "d": 2,
    "q": "Faoliyatning maqsadiga ko‘ra xotira turlarini aniqlang?",
    "opts": [
      "Ixtiyorsiz va ixtiyoriy",
      "So‘z- mantiqiy va harakat",
      "So‘z- mantiqiy va harakat",
      "Qisqa muuddatli va uzoq muuddatli"
    ]
  },
  {
    "d": 2,
    "q": "Pedagogika qaysi fanlar bilan ozaro bog’liq‘?",
    "opts": [
      "Psixologiya, biologiya, matematika, falsafa, tarix",
      "Biologiya, matematika",
      "Matematika, falsafa",
      "Falsafa, tarix"
    ]
  },
  {
    "d": 2,
    "q": "Tafakkur mantiqiy shakllari qaysilar?",
    "opts": [
      "Tushuncha, hukm, xulosa",
      "Mulohoza, nutq, xulosa",
      "Tushuncha, so‘z, hukm",
      "Xulosa, fikr, hukm"
    ]
  },
  {
    "d": 2,
    "q": "Amaliy psixologiyaning asosiy yo‘nalishlariga nimalar kiradi?",
    "opts": [
      "Oila, sanoat psixologiyasi, ishlab chiqarish cohalari",
      "Marketing xizmatlari",
      "Oila, sanoat psixologiyasi",
      "Ishlab chiqarish cohalari"
    ]
  },
  {
    "d": 2,
    "q": "Modellashtirish metodiga nimalar kiradi?",
    "opts": [
      "Matematik, mantiqiy, texnik, kibernetik",
      "Mantiqiy, texnik",
      "Texnik, kibernetik",
      "Matematik, mantiqiy"
    ]
  },
  {
    "d": 2,
    "q": "Perseptiv qobiliyat nima?",
    "opts": [
      "Qisqa daqiqalarda auditoriya holatini idrok qilish.",
      "O‘z fanini chuqur va keng hajmda bilish va darsda predmetlararo bog`lanishlarni amalga oshirish.",
      "Tashkiliy ishlarni uyushtirish va unga rahbarlik qilish.",
      "Barcha o`quvchilar e`tiborini bir maqsadga yo’naltira olish qobilyati"
    ]
  },
  {
    "d": 2,
    "q": "Psixikaning bilish jarayonlarini ko‘rsatib bering?",
    "opts": [
      "diqqat, xotira, sezgi, idrok, tafakkur",
      "xayol, adaptasiya, iroda, qiziqish",
      "sezgi, diqqat, faollik, tafakkur",
      "hissiyot, xayol, idrok"
    ]
  },
  {
    "d": 2,
    "q": "Boshqaruv psixologiyasining qanday turlari mavjud?",
    "opts": [
      "Avtoritar, demokratik, , liberal",
      "Liberal",
      "Demokratik",
      "Avtoritar"
    ]
  },
  {
    "d": 2,
    "q": "Markaziy nerv sistemasiga nima kiradi?",
    "opts": [
      "Bosh miya yarim sharlari va orqa miya",
      "Orqa miya va neyron",
      "perefirik nerv tizimi",
      "Vegitativ nerv tizimi"
    ]
  },
  {
    "d": 2,
    "q": "O‘zbekistonda pedagogika fanining rivojlanish davrlarini ko‘rsating?",
    "opts": [
      "Oktyabr to‘ntarishigacha bo‘lgan davr, sho‘rolar davri, mustakillik davri",
      "Sho‘rolar davri,",
      "Mustakillik davri",
      "Oktyabr to‘ntarishigacha bo‘lgan davr"
    ]
  },
  {
    "d": 2,
    "q": "Hissiy holatlarga nimalar kiradi?",
    "opts": [
      "Kayfiyat, affekt, stress, jiddiylik,",
      "Chidamlilik, qo‘rquv, sabir-toqat",
      "Mustaqilliq, qo‘rquv, stress",
      "Mardlik, burch, g‘azab"
    ]
  },
  {
    "d": 2,
    "q": "Hayolning qanday turlari mavjud?",
    "opts": [
      "Ixtiyoriy, ixtiyorsiz, qayta tiklovchi, ijodiy, aktiv, passiv",
      "Obrazli, qayta tiklovchi, nazariy, obrazli, fantastik",
      "Ixtiyorsiz, ijodiy, orzu, aktiv, passiv,",
      "Passiv, ixtiyorsiz, fantastik, korgazmali"
    ]
  },
  {
    "d": 2,
    "q": "Amir Temurning tugilgan yili, oyi, kuni qaysi bandda to‘ri ko‘rsatilgan?",
    "opts": [
      "1336 yil 9 aprel",
      "1236 yil 17 may",
      "1336 yil 19 aprel",
      "1300 yil 29 aprel"
    ]
  }
];
