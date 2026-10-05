/**
 * Extra AI Score locale packs (all ConsultLang codes except en/el).
 * Imported by scripts/generate-ai-score-locales.mjs
 */
export const EXTRA_LOCALES = {
  bg: {
    assessmentLanguage: 'Език на оценката',
    quizTitle: 'Оценка',
    quizSubtitle:
      'Изберете отговора, който най-добре описва бизнеса ви днес — честността е по-важна от оптимизма.',
    step: 'Въпрос {current} от {total}',
    progressAria: 'Напредък: въпрос {current} от {total}',
    back: 'Назад',
    next: 'Напред',
    seeResults: 'Виж резултата ми',
    dim: {
      strategy: 'Стратегия и случаи на употреба',
      data: 'Готовност на данните',
      people: 'Хора и умения',
      process: 'Процеси и операции',
      tech: 'Технологии и интеграция',
      governance: 'Управление и промяна',
    },
    questions: {
      strategy_use_cases: {
        q: 'Идентифицирали ли сте конкретни бизнес проблеми, при които ИИ може да помогне?',
        a: [
          'Все още не — все още проучваме идеята за ИИ.',
          'Имаме кратък списък с идеи, но нищо не е приоритизирано.',
          'Имаме 1–2 ясни случая на употреба, свързани с бизнес цел.',
          'Имаме приоритизирана пътна карта на случаи за ИИ със собственици.',
        ],
      },
      strategy_roi: {
        q: 'Как мислите за възвръщаемостта на инвестициите в ИИ?',
        a: [
          'Все още не сме дефинирали метрики за успех.',
          'Очакваме спестявания, но без числа или срокове.',
          'Имаме приблизителни оценки разходи/ползи за пилот.',
          'Проследяваме ROI с ясни KPI и правило стоп/продължи.',
        ],
      },
      data_location: {
        q: 'Къде се намират критичните ви бизнес данни днес?',
        a: [
          'Предимно електронни таблици, имейли и хартия — трудно се намират.',
          'В няколко системи, които не си комуникират.',
          'Централни инструменти покриват повечето операции, с някои пропуски.',
          'Данните са централизирани, достъпни и до голяма степен интегрирани.',
        ],
      },
      data_quality: {
        q: 'Колко надеждни са данните, които бихте подали на ИИ?',
        a: [
          'Често непълни, дублирани или остарели.',
          'Използваеми за хора, но хаотични за автоматизация.',
          'Предимно чисти за основните ни работни потоци; нужна е известна почистка.',
          'Документирани, валидирани и надеждни за решения.',
        ],
      },
      people_ownership: {
        q: 'Кой би притежавал инициатива за ИИ във вашия бизнес?',
        a: [
          'Никой — бихме разчитали изцяло на доставчик.',
          'Някой заинтересован, но без отделено време.',
          'Именуван собственик, който може да отделя част от седмицата си.',
          'Ясна вътрешна собственост с капацитет и право на решения.',
        ],
      },
      people_skills: {
        q: 'Колко запознат е екипът ви с инструменти за ИИ?',
        a: [
          'Малко или никакъв практически опит.',
          'Няколко души използват ChatGPT/Copilot отвреме навреме.',
          'Членовете на екипа редовно използват ИИ в ежедневната работа.',
          'Можем сами да оценяваме, конфигурираме и подобряваме инструменти за ИИ.',
        ],
      },
      process_visibility: {
        q: 'Документирани и измерими ли са ключовите ви работни потоци?',
        a: [
          'Живеят в главите на хората — малко е записано.',
          'Има някои SOP, но са непълни или остарели.',
          'Основните работни потоци са документирани с базови метрики.',
          'Процесите са картографирани, измерени и редовно преглеждани.',
        ],
      },
      process_bottlenecks: {
        q: 'Знаете ли къде се губят време или пари в операциите?',
        a: [
          'Усещаме проблеми, но не можем да посочим конкретни тесни места.',
          'Знаем няколко болезнени точки от оплаквания или извънреден труд.',
          'Идентифицирали сме тесни места с голям обем и повторяемост.',
          'Измерваме процента на изключения и цената на забавянията по процес.',
        ],
      },
      tech_integration: {
        q: 'Могат ли текущите ви системи да се свързват с нови инструменти чрез API или експорти?',
        a: [
          'Предимно затворени/наследени системи с ръчно копиране-поставяне.',
          'Някои CSV/експорт опции; ограничени живи интеграции.',
          'Ключовите системи имат API или доказани пътища за интеграция.',
          'Стек с приоритет на API и надеждни интеграции вече в употреба.',
        ],
      },
      tech_stack: {
        q: 'Колко модерен е ежедневният ви технологичен стек?',
        a: [
          'Силна зависимост от хартия, телефон и несвързани инструменти.',
          'Микс от по-стар софтуер и няколко облачни инструмента.',
          'Предимно облачни/SaaS инструменти, покриващи основните операции.',
          'Модерен облачен стек с вече работеща автоматизация.',
        ],
      },
      governance_leadership: {
        q: 'Как ръководството подхожда към приемането на ИИ?',
        a: [
          'Скептично или незаинтересовано.',
          'Любопитно, но още няма спонсор или мандат.',
          'Изпълнителен спонсор подкрепя първи проект.',
          'Ръководството активно води ИИ с бюджет и планове за промяна.',
        ],
      },
      governance_risk: {
        q: 'Обсъждали ли сте поверителност на данните, съгласие на клиенти и риск от ИИ?',
        a: [
          'Въобще не е обсъждано.',
          'Неформална осведоменост — без писмени правила.',
          'Основни насоки кой може да използва ИИ и какви данни са позволени.',
          'Писмени политики за поверителност, достъп и използване на доставчици.',
        ],
      },
    },
    resultsTitle: 'Вашият резултат за готовност за ИИ',
    resultsSubtitle:
      'Моментални резултати — след това ни кажете дали искате персонализирано ИИ решение около най-слабите ви области.',
    dimensionsTitle: 'Резултат по измерение',
    gapsTitle: 'Вероятни неефективности за оправяне първо',
    ctaRequest: 'Заявете персонализирано ИИ решение',
    ctaCustom: 'Научете за персонализирани ИИ инструменти',
    ctaRetake: 'Повторете оценката',
    band: {
      red: {
        label: 'Все още не сте готови',
        desc: 'Основите са слаби. Фокусирайте се върху един ясен случай на употреба, по-чисти данни и вътрешен собственик преди голям разход за ИИ.',
      },
      amber: {
        label: 'Частично готови',
        desc: 'Имате база, върху която да градите. Затворете първо най-слабите пропуски, после пуснете фокусиран пилот с измерими цели.',
      },
      green: {
        label: 'Готови за ИИ',
        desc: 'В силна позиция сте да приемете или мащабирате ИИ. Приоритизирайте производствени случаи и поддържайте силно управление.',
      },
    },
    rec: {
      strategy:
        'Назовете един процес с голямо въздействие и дефинирайте успеха в числа преди да купувате инструменти.',
      data: 'Консолидирайте данните за основния си работен поток — ако ИИ няма чисти входове, проектите спират.',
      people:
        'Назначете вътрешен собственик със седмичен капацитет; проекти само с доставчик рядко се задържат.',
      process:
        'Документирайте и измерете тясното място, което искате ИИ да оправи — обем, време и процент изключения.',
      tech: 'Потвърдете API или надеждни експорти от системите, към които ИИ трябва да се свърже.',
      governance:
        'Осигурете спонсорство от ръководството и основни правила за данни, поверителност и въздействие върху клиентите.',
    },
    contactIntro:
      'Попълних оценката за готовност за ИИ и бих искал/а да обсъдим персонализирано ИИ решение.',
    contactScoreLine: 'Общ резултат: {score}/100',
    contactBandLine: 'Зона: {band}',
    contactGapsIntro: 'Най-слаби области:',
    contactGapLine: '{name} ({score}/100)',
  },

  hr: {
    assessmentLanguage: 'Jezik procjene',
    quizTitle: 'Procjena',
    quizSubtitle:
      'Odaberite odgovor koji najbolje odgovara vašem poslovanju danas — iskrenost je bolja od optimizma.',
    step: 'Pitanje {current} od {total}',
    progressAria: 'Napredak: pitanje {current} od {total}',
    back: 'Natrag',
    next: 'Dalje',
    seeResults: 'Pogledaj moj rezultat',
    dim: {
      strategy: 'Strategija i slučajevi uporabe',
      data: 'Spremnost podataka',
      people: 'Ljudi i vještine',
      process: 'Procesi i operacije',
      tech: 'Tehnologija i integracija',
      governance: 'Upravljanje i promjena',
    },
    questions: {
      strategy_use_cases: {
        q: 'Jeste li identificirali konkretne poslovne probleme u kojima bi AI mogao pomoći?',
        a: [
          'Još ne — još istražujemo ideju o AI-ju.',
          'Imamo uži popis ideja, ali ništa nije prioritetizirano.',
          'Imamo 1–2 jasna slučaja uporabe vezana uz poslovni cilj.',
          'Imamo prioritetiziranu mapu puta AI slučajeva s vlasnicima.',
        ],
      },
      strategy_roi: {
        q: 'Kako razmišljate o povratu ulaganja u AI?',
        a: [
          'Još nismo definirali metrike uspjeha.',
          'Očekujemo uštede, ali bez brojeva ili vremenskog okvira.',
          'Imamo grube procjene troškova/koristi za pilot.',
          'Pratimo ROI jasnim KPI-jevima i pravilom zaustavi/nastavi.',
        ],
      },
      data_location: {
        q: 'Gdje danas žive vaši kritični poslovni podaci?',
        a: [
          'Uglavnom proračunske tablice, e-pošta i papir — teško ih je pronaći.',
          'U nekoliko sustava koji međusobno ne komuniciraju.',
          'Središnji alati pokrivaju većinu operacija, uz neke praznine.',
          'Podaci su centralizirani, dostupni i uglavnom integrirani.',
        ],
      },
      data_quality: {
        q: 'Koliko su pouzdani podaci koje biste davali AI-ju?',
        a: [
          'Često nepotpuni, duplicirani ili zastarjeli.',
          'Upotrebljivi za ljude, ali neuredni za automatizaciju.',
          'Uglavnom čisti za glavne tijekove rada; potrebno je malo čišćenja.',
          'Dokumentirani, validirani i pouzdani za odluke.',
        ],
      },
      people_ownership: {
        q: 'Tko bi bio vlasnik AI inicijative unutar vašeg poslovanja?',
        a: [
          'Nitko — u potpunosti bismo se oslanjali na dobavljača.',
          'Netko zainteresiran, ali bez posvećenog vremena.',
          'Imenovani vlasnik koji može dijeliti tjedan na to.',
          'Jasno interno vlasništvo s kapacitetom i pravom odlučivanja.',
        ],
      },
      people_skills: {
        q: 'Koliko je vaš tim upoznat s AI alatima?',
        a: [
          'Malo ili nimalo praktičnog iskustva.',
          'Nekoliko ljudi povremeno koristi ChatGPT/Copilot.',
          'Članovi tima redovito koriste AI u svakodnevnom radu.',
          'Možemo sami procjenjivati, konfigurirati i poboljšavati AI alate.',
        ],
      },
      process_visibility: {
        q: 'Jesu li vaši ključni tijekovi rada dokumentirani i mjerljivi?',
        a: [
          'Žive u glavama ljudi — malo je zapisano.',
          'Postoje neki SOP-ovi, ali su nepotpuni ili zastarjeli.',
          'Glavni tijekovi rada dokumentirani su s osnovnim metrikama.',
          'Procesi su mapirani, mjereni i redovito pregledavani.',
        ],
      },
      process_bottlenecks: {
        q: 'Znate li gdje se u operacijama gubi vrijeme ili novac?',
        a: [
          'Osjećamo probleme, ali ne možemo ukazati na konkretna uska grla.',
          'Znamo nekoliko bolnih točaka iz pritužbi ili prekovremenog rada.',
          'Identificirali smo uska grla velikog volumena i ponavljanja.',
          'Mjerimo stope iznimki i trošak kašnjenja po procesu.',
        ],
      },
      tech_integration: {
        q: 'Mogu li se vaši trenutni sustavi povezati s novim alatima putem API-ja ili izvoza?',
        a: [
          'Uglavnom zatvoreni/naslijeđeni sustavi s ručnim kopiranjem.',
          'Neke CSV/opcije izvoza; ograničene žive integracije.',
          'Ključni sustavi imaju API-je ili dokazane putove integracije.',
          'Stog usmjeren na API s pouzdanim integracijama već u uporabi.',
        ],
      },
      tech_stack: {
        q: 'Koliko je moderan vaš svakodnevni tehnološki stog?',
        a: [
          'Veliko oslanjanje na papir, telefon i nepovezane alate.',
          'Mješavina starijeg softvera i nekoliko cloud alata.',
          'Uglavnom cloud/SaaS alati koji pokrivaju osnovne operacije.',
          'Moderan cloud stog s automatizacijom koja već radi.',
        ],
      },
      governance_leadership: {
        q: 'Kako vodstvo pristupa usvajanju AI-ja?',
        a: [
          'Skeptično ili nije uključeno.',
          'Znatiželjno, ali još nema sponzora ni mandata.',
          'Izvršni sponzor podržava prvi projekt.',
          'Vodstvo aktivno vodi AI s proračunom i planovima promjene.',
        ],
      },
      governance_risk: {
        q: 'Jeste li razgovarali o privatnosti podataka, pristanku kupaca i riziku AI-ja?',
        a: [
          'Uopće nije razgovarano.',
          'Neformalna svijest — bez pisanih pravila.',
          'Osnovne smjernice tko može koristiti AI i koji su podaci dopušteni.',
          'Pisane politike o privatnosti, pristupu i korištenju dobavljača.',
        ],
      },
    },
    resultsTitle: 'Vaš rezultat spremnosti za AI',
    resultsSubtitle:
      'Trenutačni rezultati — zatim nam recite želite li prilagođeno AI rješenje oko najslabijih područja.',
    dimensionsTitle: 'Rezultat po dimenziji',
    gapsTitle: 'Vjerojatne neučinkovitosti za prvo rješavanje',
    ctaRequest: 'Zatražite prilagođeno AI rješenje',
    ctaCustom: 'Saznajte više o prilagođenim AI alatima',
    ctaRetake: 'Ponovite procjenu',
    band: {
      red: {
        label: 'Još niste spremni',
        desc: 'Temelji su tanki. Usredotočite se na jedan jasan slučaj uporabe, čišće podatke i internog vlasnika prije velikog AI troška.',
      },
      amber: {
        label: 'Djelomično spremni',
        desc: 'Imate bazu na kojoj možete graditi. Prvo zatvorite najslabije praznine, zatim pokrenite fokusirani pilot s mjerljivim ciljevima.',
      },
      green: {
        label: 'Spremni za AI',
        desc: 'U jakoj ste poziciji za usvajanje ili skaliranje AI-ja. Prioritetizirajte produkcijske slučajeve i držite upravljanje čvrstim.',
      },
    },
    rec: {
      strategy:
        'Imenujte jedan proces velikog utjecaja i definirajte uspjeh u brojkama prije kupnje alata.',
      data: 'Konsolidirajte podatke za glavni tijek rada — ako AI nema čiste ulaze, projekti staje.',
      people:
        'Dodijelite internog vlasnika s tjednim kapacitetom; projekti samo s dobavljačem rijetko ostaju.',
      process:
        'Dokumentirajte i izmjerite usko grlo koje želite da AI riješi — volumen, vrijeme i stopu iznimki.',
      tech: 'Potvrdite API-je ili pouzdane izvoze iz sustava s kojima se AI treba povezati.',
      governance:
        'Osigurajte sponzorstvo vodstva i osnovna pravila za podatke, privatnost i utjecaj na kupce.',
    },
    contactIntro:
      'Ispunio/la sam procjenu spremnosti za AI i želio/la bih razgovarati o prilagođenom AI rješenju.',
    contactScoreLine: 'Ukupni rezultat: {score}/100',
    contactBandLine: 'Pojas: {band}',
    contactGapsIntro: 'Najslabija područja:',
    contactGapLine: '{name} ({score}/100)',
  },

  cs: {
    assessmentLanguage: 'Jazyk hodnocení',
    quizTitle: 'Hodnocení',
    quizSubtitle:
      'Vyberte odpověď, která dnes nejlépe odpovídá vašemu podnikání — upřímnost je lepší než optimismus.',
    step: 'Otázka {current} z {total}',
    progressAria: 'Průběh: otázka {current} z {total}',
    back: 'Zpět',
    next: 'Další',
    seeResults: 'Zobrazit mé skóre',
    dim: {
      strategy: 'Strategie a případy použití',
      data: 'Připravenost dat',
      people: 'Lidé a dovednosti',
      process: 'Procesy a provoz',
      tech: 'Technologie a integrace',
      governance: 'Řízení a změna',
    },
    questions: {
      strategy_use_cases: {
        q: 'Identifikovali jste konkrétní obchodní problémy, kde by AI mohla pomoci?',
        a: [
          'Ještě ne — stále zkoumáme myšlenku AI.',
          'Máme užší seznam nápadů, ale nic není prioritizováno.',
          'Máme 1–2 jasné případy použití vázané na obchodní cíl.',
          'Máme prioritizovaný plán AI případů s vlastníky.',
        ],
      },
      strategy_roi: {
        q: 'Jak přemýšlíte o návratnosti investice do AI?',
        a: [
          'Ještě jsme nedefinovali metriky úspěchu.',
          'Očekáváme úspory, ale bez čísel nebo časového rámce.',
          'Máme hrubé odhady nákladů/přínosů pro pilot.',
          'Sledujeme ROI jasnými KPI a pravidlem zastavit/pokračovat.',
        ],
      },
      data_location: {
        q: 'Kde dnes žijí vaše kritická obchodní data?',
        a: [
          'Většinou tabulky, e-maily a papír — těžko se hledají.',
          'V několika systémech, které spolu nekomunikují.',
          'Centrální nástroje pokrývají většinu provozu, s některými mezerami.',
          'Data jsou centralizovaná, dostupná a z velké části integrovaná.',
        ],
      },
      data_quality: {
        q: 'Jak spolehlivá jsou data, která byste AI předávali?',
        a: [
          'Často neúplná, duplicitní nebo zastaralá.',
          'Použitelná pro lidi, ale chaotická pro automatizaci.',
          'Většinou čistá pro hlavní pracovní postupy; potřeba částečného úklidu.',
          'Dokumentovaná, ověřená a důvěryhodná pro rozhodování.',
        ],
      },
      people_ownership: {
        q: 'Kdo by vlastnil AI iniciativu ve vašem podnikání?',
        a: [
          'Nikdo — spoléhali bychom se zcela na dodavatele.',
          'Někdo zainteresovaný, ale bez vyhrazeného času.',
          'Jmenovaný vlastník, který tomu může věnovat část týdne.',
          'Jasné interní vlastnictví s kapacitou a rozhodovacími právy.',
        ],
      },
      people_skills: {
        q: 'Jak dobře váš tým zná nástroje AI?',
        a: [
          'Málo nebo žádná praktická zkušenost.',
          'Několik lidí příležitostně používá ChatGPT/Copilot.',
          'Členové týmu pravidelně používají AI v každodenní práci.',
          'Dokážeme sami hodnotit, konfigurovat a zlepšovat nástroje AI.',
        ],
      },
      process_visibility: {
        q: 'Jsou vaše klíčové pracovní postupy zdokumentované a měřitelné?',
        a: [
          'Žijí v hlavách lidí — málo je zapsáno.',
          'Některé SOP existují, ale jsou neúplné nebo zastaralé.',
          'Hlavní pracovní postupy jsou zdokumentovány se základními metrikami.',
          'Procesy jsou zmapované, měřené a pravidelně přezkoumávané.',
        ],
      },
      process_bottlenecks: {
        q: 'Víte, kde se v provozu ztrácí čas nebo peníze?',
        a: [
          'Cítíme problémy, ale neumíme ukázat konkrétní úzká místa.',
          'Známe několik bolestivých bodů ze stížností nebo přesčasů.',
          'Identifikovali jsme úzká místa s vysokým objemem a opakováním.',
          'Měříme míru výjimek a náklady zpoždění podle procesu.',
        ],
      },
      tech_integration: {
        q: 'Mohou se vaše současné systémy připojit k novým nástrojům přes API nebo exporty?',
        a: [
          'Většinou uzavřené/legacy systémy s ručním kopírováním.',
          'Některé CSV/export možnosti; omezené živé integrace.',
          'Klíčové systémy mají API nebo ověřené cesty integrace.',
          'Stack zaměřený na API se spolehlivými integracemi již v provozu.',
        ],
      },
      tech_stack: {
        q: 'Jak moderní je váš každodenní technologický stack?',
        a: [
          'Silná závislost na papíru, telefonu a nepropojených nástrojích.',
          'Mix staršího softwaru a několika cloudových nástrojů.',
          'Většinou cloud/SaaS nástroje pokrývající klíčový provoz.',
          'Moderní cloudový stack s již běžící automatizací.',
        ],
      },
      governance_leadership: {
        q: 'Jak vedení přistupuje k přijetí AI?',
        a: [
          'Skepticky nebo není zapojeno.',
          'Zvědavě, ale zatím bez sponzora nebo mandátu.',
          'Výkonný sponzor podporuje první projekt.',
          'Vedení aktivně řídí AI s rozpočtem a plány změn.',
        ],
      },
      governance_risk: {
        q: 'Diskutovali jste o ochraně dat, souhlasu zákazníků a riziku AI?',
        a: [
          'Vůbec se o tom nediskutovalo.',
          'Neformální povědomí — bez písemných pravidel.',
          'Základní pokyny, kdo může používat AI a jaká data jsou povolena.',
          'Písemné politiky o ochraně soukromí, přístupu a používání dodavatelů.',
        ],
      },
    },
    resultsTitle: 'Vaše skóre připravenosti na AI',
    resultsSubtitle:
      'Okamžité výsledky — pak nám řekněte, zda chcete vlastní AI řešení kolem vašich nejslabších oblastí.',
    dimensionsTitle: 'Skóre podle dimenze',
    gapsTitle: 'Pravděpodobné neefektivity k řešení jako první',
    ctaRequest: 'Požádat o vlastní AI řešení',
    ctaCustom: 'Zjistit více o vlastních AI nástrojích',
    ctaRetake: 'Opakovat hodnocení',
    band: {
      red: {
        label: 'Zatím nepřipraveni',
        desc: 'Základy jsou slabé. Zaměřte se na jeden jasný případ použití, čistší data a interního vlastníka před velkým výdajem na AI.',
      },
      amber: {
        label: 'Částečně připraveni',
        desc: 'Máte základ, na kterém stavět. Nejdřív uzavřete nejslabší mezery, pak spusťte cílený pilot s měřitelnými cíli.',
      },
      green: {
        label: 'Připraveni na AI',
        desc: 'Jste v silné pozici přijmout nebo škálovat AI. Prioritizujte produkční případy a udržujte pevné řízení.',
      },
    },
    rec: {
      strategy:
        'Pojmenujte jeden proces s velkým dopadem a definujte úspěch v číslech před nákupem nástrojů.',
      data: 'Konsolidujte data pro hlavní pracovní postup — pokud AI nemá čisté vstupy, projekty se zastaví.',
      people:
        'Přiřaďte interního vlastníka s týdenní kapacitou; projekty jen s dodavatelem zřídka vydrží.',
      process:
        'Zdokumentujte a změřte úzké místo, které má AI opravit — objem, čas a míru výjimek.',
      tech: 'Potvrďte API nebo spolehlivé exporty ze systémů, ke kterým se AI potřebuje připojit.',
      governance:
        'Získejte sponzorství vedení a základní pravidla pro data, soukromí a dopad na zákazníky.',
    },
    contactIntro:
      'Dokončil/a jsem hodnocení připravenosti na AI a rád/a bych diskutoval/a o vlastním AI řešení.',
    contactScoreLine: 'Celkové skóre: {score}/100',
    contactBandLine: 'Pásmo: {band}',
    contactGapsIntro: 'Nejslabší oblasti:',
    contactGapLine: '{name} ({score}/100)',
  },

  da: {
    assessmentLanguage: 'Sprog for vurderingen',
    quizTitle: 'Vurdering',
    quizSubtitle:
      'Vælg det svar, der bedst matcher din virksomhed i dag — ærlighed slår optimisme.',
    step: 'Spørgsmål {current} af {total}',
    progressAria: 'Fremskridt: spørgsmål {current} af {total}',
    back: 'Tilbage',
    next: 'Næste',
    seeResults: 'Se min score',
    dim: {
      strategy: 'Strategi og use cases',
      data: 'Dataparathed',
      people: 'Mennesker og færdigheder',
      process: 'Processer og drift',
      tech: 'Teknologi og integration',
      governance: 'Styring og forandring',
    },
    questions: {
      strategy_use_cases: {
        q: 'Har I identificeret konkrete forretningsproblemer, hvor AI kan hjælpe?',
        a: [
          'Ikke endnu — vi udforsker stadig ideen om AI.',
          'Vi har en shortlist af ideer, men intet er prioriteret.',
          'Vi har 1–2 klare use cases knyttet til et forretningsmål.',
          'Vi har et prioriteret roadmap over AI-use cases med ejere.',
        ],
      },
      strategy_roi: {
        q: 'Hvordan tænker I om afkast af AI-investering?',
        a: [
          'Vi har endnu ikke defineret succesmetrikker.',
          'Vi forventer besparelser, men uden tal eller tidslinje.',
          'Vi har grove omkostnings-/nytteestimater for et pilotprojekt.',
          'Vi tracker ROI med klare KPI’er og en stop/fortsæt-regel.',
        ],
      },
      data_location: {
        q: 'Hvor ligger jeres kritiske forretningsdata i dag?',
        a: [
          'Primært regneark, e-mail og papir — svære at finde.',
          'I nogle få systemer, der ikke taler sammen.',
          'Centrale værktøjer dækker det meste af driften, med nogle huller.',
          'Data er centraliserede, tilgængelige og i høj grad integrerede.',
        ],
      },
      data_quality: {
        q: 'Hvor pålidelige er de data, I ville give til AI?',
        a: [
          'Ofte ufuldstændige, duplikerede eller forældede.',
          'Brugbare for mennesker, men rodede til automatisering.',
          'Stort set rene for vores vigtigste workflows; noget oprydning nødvendig.',
          'Dokumenterede, validerede og betroede til beslutninger.',
        ],
      },
      people_ownership: {
        q: 'Hvem ville eje et AI-initiativ i jeres virksomhed?',
        a: [
          'Ingen — vi ville stole helt på en leverandør.',
          'Nogen interesseret, men uden dedikeret tid.',
          'En navngiven ejer, der kan bruge en del af ugen på det.',
          'Klar intern ejerskab med kapacitet og beslutningsret.',
        ],
      },
      people_skills: {
        q: 'Hvor bekendt er jeres team med AI-værktøjer?',
        a: [
          'Lidt eller ingen praktisk erfaring.',
          'Nogle få bruger ChatGPT/Copilot lejlighedsvis.',
          'Teammedlemmer bruger regelmæssigt AI i det daglige arbejde.',
          'Vi kan selv evaluere, konfigurere og forbedre AI-værktøjer.',
        ],
      },
      process_visibility: {
        q: 'Er jeres vigtigste workflows dokumenterede og målbare?',
        a: [
          'De lever i folks hoveder — lidt er skrevet ned.',
          'Nogle SOP’er findes, men de er ufuldstændige eller forældede.',
          'Hovedworkflows er dokumenteret med grundlæggende metrikker.',
          'Processer er kortlagt, målt og regelmæssigt gennemgået.',
        ],
      },
      process_bottlenecks: {
        q: 'Ved I, hvor tid eller penge går tabt i driften?',
        a: [
          'Vi mærker problemer, men kan ikke pege på specifikke flaskehalse.',
          'Vi kender nogle smertepunkter fra klager eller overarbejde.',
          'Vi har identificeret flaskehalse med højt volumen og gentagelse.',
          'Vi måler undtagelsesrater og omkostninger ved forsinkelser pr. proces.',
        ],
      },
      tech_integration: {
        q: 'Kan jeres nuværende systemer forbinde til nye værktøjer via API’er eller eksporter?',
        a: [
          'Primært lukkede/legacy-systemer med manuel kopi-indsæt.',
          'Nogle CSV/eksportmuligheder; begrænsede live-integrationer.',
          'Nøglesystemer har API’er eller dokumenterede integrationsveje.',
          'API-først stack med pålidelige integrationer allerede i brug.',
        ],
      },
      tech_stack: {
        q: 'Hvor moderne er jeres daglige teknologistack?',
        a: [
          'Stor afhængighed af papir, telefon og frakoblede værktøjer.',
          'Mix af ældre software og nogle cloudværktøjer.',
          'Primært cloud/SaaS-værktøjer, der dækker kerneoperationer.',
          'Moderne cloudstack med automatisering, der allerede kører.',
        ],
      },
      governance_leadership: {
        q: 'Hvordan forholder ledelsen sig til AI-adoption?',
        a: [
          'Skeptisk eller ikke engageret.',
          'Nysgerrig, men endnu ingen sponsor eller mandat.',
          'En executive sponsor støtter et første projekt.',
          'Ledelsen driver aktivt AI med budget og forandringsplaner.',
        ],
      },
      governance_risk: {
        q: 'Har I drøftet databeskyttelse, kundeinformeret samtykke og AI-risiko?',
        a: [
          'Slet ikke drøftet.',
          'Uformel bevidsthed — ingen skrevne regler.',
          'Grundlæggende retningslinjer for, hvem der må bruge AI, og hvilke data der er tilladt.',
          'Skrevne politikker om privatliv, adgang og leverandørbrug.',
        ],
      },
    },
    resultsTitle: 'Jeres AI-parathedsscore',
    resultsSubtitle:
      'Øjeblikkelige resultater — fortæl os derefter, om I vil have en skræddersyet AI-løsning omkring jeres svageste områder.',
    dimensionsTitle: 'Score pr. dimension',
    gapsTitle: 'Sandsynlige ineffektiviteter at rette først',
    ctaRequest: 'Anmod om en skræddersyet AI-løsning',
    ctaCustom: 'Lær om skræddersyede AI-værktøjer',
    ctaRetake: 'Tag vurderingen igen',
    band: {
      red: {
        label: 'Ikke klar endnu',
        desc: 'Fundamentet er tyndt. Fokusér på ét klart use case, renere data og en intern ejer før et stort AI-forbrug.',
      },
      amber: {
        label: 'Delvist klar',
        desc: 'I har et grundlag at bygge på. Luk først de svageste huller, og kør derefter et fokuseret pilotprojekt med målbare mål.',
      },
      green: {
        label: 'AI-klar',
        desc: 'I er i en stærk position til at adoptere eller skalere AI. Prioritér produktions-use cases og hold styringen stram.',
      },
    },
    rec: {
      strategy:
        'Navngiv én proces med høj effekt, og definer succes i tal, før I køber værktøjer.',
      data: 'Konsolider dataene til jeres vigtigste workflow — hvis AI ikke får rene inputs, går projekter i stå.',
      people:
        'Udpeg en intern ejer med ugentlig kapacitet; projekter kun med leverandør hænger sjældent ved.',
      process:
        'Dokumentér og mål den flaskehals, I vil have AI til at løse — volumen, tid og undtagelsesrate.',
      tech: 'Bekræft API’er eller pålidelige eksporter fra de systemer, AI skal forbinde til.',
      governance:
        'Få ledelsessponsorat og grundlæggende regler for databrug, privatliv og kundepåvirkning.',
    },
    contactIntro:
      'Jeg har gennemført AI-parathedsscoren og vil gerne drøfte en skræddersyet AI-løsning.',
    contactScoreLine: 'Samlet score: {score}/100',
    contactBandLine: 'Bånd: {band}',
    contactGapsIntro: 'Svageste områder:',
    contactGapLine: '{name} ({score}/100)',
  },

  nl: {
    assessmentLanguage: 'Taal van de assessment',
    quizTitle: 'Assessment',
    quizSubtitle:
      'Kies het antwoord dat het best bij uw bedrijf past vandaag — eerlijkheid wint van optimisme.',
    step: 'Vraag {current} van {total}',
    progressAria: 'Voortgang: vraag {current} van {total}',
    back: 'Terug',
    next: 'Volgende',
    seeResults: 'Bekijk mijn score',
    dim: {
      strategy: 'Strategie & use cases',
      data: 'Datagereedheid',
      people: 'Mensen & vaardigheden',
      process: 'Processen & operaties',
      tech: 'Tech & integratie',
      governance: 'Governance & verandering',
    },
    questions: {
      strategy_use_cases: {
        q: 'Heeft u concrete bedrijfsproblemen geïdentificeerd waar AI kan helpen?',
        a: [
          'Nog niet — we verkennen nog het idee van AI.',
          'We hebben een shortlist van ideeën, maar niets is geprioriteerd.',
          'We hebben 1–2 duidelijke use cases gekoppeld aan een bedrijfsdoel.',
          'We hebben een geprioriteerde roadmap van AI-use cases met eigenaren.',
        ],
      },
      strategy_roi: {
        q: 'Hoe denkt u over rendement op AI-investering?',
        a: [
          'We hebben nog geen succesmetrics gedefinieerd.',
          'We verwachten besparingen, maar zonder cijfers of tijdlijn.',
          'We hebben ruwe kosten/baten-schattingen voor een pilot.',
          'We volgen ROI met duidelijke KPI’s en een stop/doorgaan-regel.',
        ],
      },
      data_location: {
        q: 'Waar bevinden uw kritieke bedrijfsgegevens zich vandaag?',
        a: [
          'Vooral spreadsheets, e-mail en papier — moeilijk te vinden.',
          'In een paar systemen die niet met elkaar praten.',
          'Centrale tools dekken de meeste operaties, met enkele gaten.',
          'Data is gecentraliseerd, toegankelijk en grotendeels geïntegreerd.',
        ],
      },
      data_quality: {
        q: 'Hoe betrouwbaar zijn de data die u aan AI zou geven?',
        a: [
          'Vaak onvolledig, gedupliceerd of verouderd.',
          'Bruikbaar voor mensen, maar rommelig voor automatisering.',
          'Meestal schoon voor onze hoofdworkflows; enige opschoning nodig.',
          'Gedocumenteerd, gevalideerd en betrouwbaar voor beslissingen.',
        ],
      },
      people_ownership: {
        q: 'Wie zou een AI-initiatief binnen uw bedrijf bezitten?',
        a: [
          'Niemand — we zouden volledig op een leverancier steunen.',
          'Iemand geïnteresseerd, maar zonder toegewezen tijd.',
          'Een benoemde eigenaar die er een deel van de week aan kan besteden.',
          'Duidelijk intern eigenaarschap met capaciteit en beslissingsrechten.',
        ],
      },
      people_skills: {
        q: 'Hoe bekend is uw team met AI-tools?',
        a: [
          'Weinig tot geen praktische ervaring.',
          'Enkele mensen gebruiken ChatGPT/Copilot af en toe.',
          'Teamleden gebruiken regelmatig AI in het dagelijks werk.',
          'We kunnen AI-tools zelf evalueren, configureren en verbeteren.',
        ],
      },
      process_visibility: {
        q: 'Zijn uw belangrijkste workflows gedocumenteerd en meetbaar?',
        a: [
          'Ze zitten in de hoofden van mensen — weinig staat op papier.',
          'Er bestaan enkele SOP’s, maar die zijn onvolledig of verouderd.',
          'Hoofdworkflows zijn gedocumenteerd met basismetrics.',
          'Processen zijn in kaart gebracht, gemeten en regelmatig beoordeeld.',
        ],
      },
      process_bottlenecks: {
        q: 'Weet u waar tijd of geld verloren gaat in de operatie?',
        a: [
          'We voelen problemen, maar kunnen geen specifieke knelpunten aanwijzen.',
          'We kennen enkele pijnpunten uit klachten of overuren.',
          'We hebben knelpunten met hoog volume en herhaling geïdentificeerd.',
          'We meten uitzonderingspercentages en kosten van vertragingen per proces.',
        ],
      },
      tech_integration: {
        q: 'Kunnen uw huidige systemen verbinden met nieuwe tools via API’s of exports?',
        a: [
          'Vooral gesloten/legacy-systemen met handmatig kopiëren-plakken.',
          'Enkele CSV/exportopties; beperkte live-integraties.',
          'Belangrijke systemen hebben API’s of bewezen integratiepaden.',
          'API-first stack met betrouwbare integraties al in gebruik.',
        ],
      },
      tech_stack: {
        q: 'Hoe modern is uw dagelijkse technologiestack?',
        a: [
          'Sterke afhankelijkheid van papier, telefoon en losse tools.',
          'Mix van oudere software en een paar cloudtools.',
          'Vooral cloud/SaaS-tools die kernoperaties dekken.',
          'Moderne cloudstack met automatisering die al draait.',
        ],
      },
      governance_leadership: {
        q: 'Hoe benadert het leiderschap AI-adoptie?',
        a: [
          'Sceptisch of niet betrokken.',
          'Nieuwsgierig, maar nog geen sponsor of mandaat.',
          'Een executive sponsor ondersteunt een eerste project.',
          'Leiderschap drijft AI actief met budget en veranderplannen.',
        ],
      },
      governance_risk: {
        q: 'Heeft u dataprivacy, klanttoestemming en AI-risico besproken?',
        a: [
          'Helemaal niet besproken.',
          'Informele bewustwording — geen geschreven regels.',
          'Basisrichtlijnen wie AI mag gebruiken en welke data is toegestaan.',
          'Geschreven beleid over privacy, toegang en leveranciersgebruik.',
        ],
      },
    },
    resultsTitle: 'Uw AI-gereedheidsscore',
    resultsSubtitle:
      'Directe resultaten — vertel ons daarna of u een op maat gemaakte AI-oplossing wilt rond uw zwakste gebieden.',
    dimensionsTitle: 'Score per dimensie',
    gapsTitle: 'Waarschijnlijke inefficiënties om eerst aan te pakken',
    ctaRequest: 'Vraag een op maat gemaakte AI-oplossing aan',
    ctaCustom: 'Meer over op maat gemaakte AI-tools',
    ctaRetake: 'Assessment opnieuw doen',
    band: {
      red: {
        label: 'Nog niet klaar',
        desc: 'De basis is dun. Focus op één duidelijke use case, schonere data en een interne eigenaar vóór een grote AI-uitgave.',
      },
      amber: {
        label: 'Gedeeltelijk klaar',
        desc: 'U heeft een basis om op te bouwen. Sluit eerst de zwakste gaten, voer daarna een gerichte pilot met meetbare doelen.',
      },
      green: {
        label: 'AI-klaar',
        desc: 'U bent in een sterke positie om AI te adopteren of op te schalen. Prioriteer productie-use cases en houd governance strak.',
      },
    },
    rec: {
      strategy:
        'Noem één proces met hoge impact en definieer succes in cijfers vóór u tools koopt.',
      data: 'Consolideer de data voor uw belangrijkste workflow — zonder schone input stagneren AI-projecten.',
      people:
        'Wijs een interne eigenaar met wekelijkse capaciteit toe; projecten alleen via leveranciers blijven zelden hangen.',
      process:
        'Documenteer en meet het knelpunt dat AI moet oplossen — volume, tijd en uitzonderingspercentage.',
      tech: 'Bevestig API’s of betrouwbare exports van de systemen waarmee AI moet verbinden.',
      governance:
        'Krijg sponsorschap van het leiderschap en basisregels voor datagebruik, privacy en klantimpact.',
    },
    contactIntro:
      'Ik heb de AI-gereedheidsscore afgerond en wil graag een op maat gemaakte AI-oplossing bespreken.',
    contactScoreLine: 'Totale score: {score}/100',
    contactBandLine: 'Band: {band}',
    contactGapsIntro: 'Zwakste gebieden:',
    contactGapLine: '{name} ({score}/100)',
  },

  et: {
    assessmentLanguage: 'Hindamise keel',
    quizTitle: 'Hindamine',
    quizSubtitle:
      'Valige vastus, mis sobib teie ettevõttega täna kõige paremini — ausus on parem kui optimism.',
    step: 'Küsimus {current}/{total}',
    progressAria: 'Edenemine: küsimus {current}/{total}',
    back: 'Tagasi',
    next: 'Edasi',
    seeResults: 'Vaata minu skoori',
    dim: {
      strategy: 'Strateegia ja kasutusjuhtumid',
      data: 'Andmete valmisolek',
      people: 'Inimesed ja oskused',
      process: 'Protsessid ja tegevus',
      tech: 'Tehnoloogia ja integratsioon',
      governance: 'Juhtimine ja muutus',
    },
    questions: {
      strategy_use_cases: {
        q: 'Kas olete tuvastanud konkreetsed äriprobleemid, kus AI saaks aidata?',
        a: [
          'Veel mitte — uurime alles AI ideed.',
          'Meil on ideede lühinimekiri, kuid midagi pole prioriseeritud.',
          'Meil on 1–2 selget kasutusjuhtumit seotud ärieesmärgiga.',
          'Meil on prioriseeritud AI kasutusjuhtumite teekaart omanikega.',
        ],
      },
      strategy_roi: {
        q: 'Kuidas mõtlete AI investeeringu tasuvusele?',
        a: [
          'Pole veel edu mõõdikuid määratlenud.',
          'Ootame sääste, kuid ilma numbrite või ajakavata.',
          'Meil on ligikaudsed kulu/kasu hinnangud piloodi jaoks.',
          'Jälgime ROI-d selgete KPI-de ja peata/jätka reegliga.',
        ],
      },
      data_location: {
        q: 'Kus elavad teie kriitilised äriandmed täna?',
        a: [
          'Peamiselt tabelites, e-kirjas ja paberil — raske leida.',
          'Mõnes süsteemis, mis omavahel ei suhtle.',
          'Keskseid tööriistu katab enamiku tegevust, mõne lüngaga.',
          'Andmed on tsentraliseeritud, kättesaadavad ja suuresti integreeritud.',
        ],
      },
      data_quality: {
        q: 'Kui usaldusväärsed on andmed, mida AI-le annaksite?',
        a: [
          'Sageli puudulikud, dubleeritud või vananenud.',
          'Inimestele kasutatavad, kuid automatiseerimiseks segased.',
          'Peamiselt puhtad peamiste töövoogude jaoks; vaja on veidi puhastust.',
          'Dokumenteeritud, valideeritud ja otsuste jaoks usaldusväärsed.',
        ],
      },
      people_ownership: {
        q: 'Kes omaks AI algatust teie ettevõttes?',
        a: [
          'Keegi — toetuksime täielikult tarnijale.',
          'Keegi huvitatud, kuid ilma pühendatud ajata.',
          'Nimetatud omanik, kes saab sellele osa nädalast pühendada.',
          'Selge sisemine omamine koos võimsuse ja otsustusõigusega.',
        ],
      },
      people_skills: {
        q: 'Kui tuttav on teie meeskond AI tööriistadega?',
        a: [
          'Vähe või pole praktilist kogemust.',
          'Mõned inimesed kasutavad ChatGPT/Copilot’i juhuslikult.',
          'Meeskonnaliikmed kasutavad AI-d regulaarselt igapäevases töös.',
          'Saame ise AI tööriistu hinnata, konfigureerida ja parandada.',
        ],
      },
      process_visibility: {
        q: 'Kas teie peamised töövood on dokumenteeritud ja mõõdetavad?',
        a: [
          'Need elavad inimeste peades — vähe on kirja pandud.',
          'Mõned SOP-id on olemas, kuid puudulikud või vananenud.',
          'Peamised töövood on dokumenteeritud põhimeetrikatega.',
          'Protsessid on kaardistatud, mõõdetud ja regulaarselt üle vaadatud.',
        ],
      },
      process_bottlenecks: {
        q: 'Kas teate, kus tegevuses kaob aega või raha?',
        a: [
          'Tunnetame probleeme, kuid ei saa konkreetseid pudelikaelu näidata.',
          'Teame mõnda valupunkti kaebustest või ületundidest.',
          'Oleme tuvastanud suure mahu ja korduvad pudelikaelad.',
          'Mõõdame erandite määra ja viivituste kulu protsessi kohta.',
        ],
      },
      tech_integration: {
        q: 'Kas teie praegused süsteemid saavad ühenduda uute tööriistadega API-de või eksportide kaudu?',
        a: [
          'Peamiselt suletud/pärandsüsteemid käsitsi kopeeri-kleebiga.',
          'Mõned CSV/ekspordivalikud; piiratud reaalajas integratsioonid.',
          'Peamistel süsteemidel on API-d või tõestatud integratsiooniteed.',
          'API-eelistusega stack usaldusväärsete integratsioonidega juba kasutusel.',
        ],
      },
      tech_stack: {
        q: 'Kui kaasaegne on teie igapäevane tehnoloogiastack?',
        a: [
          'Tugev tuginemine paberile, telefonile ja lahti ühendatud tööriistadele.',
          'Vanema tarkvara ja mõne pilvetööriista segu.',
          'Peamiselt pilve/SaaS tööriistad, mis katavad põhitegevust.',
          'Kaasaegne pilvepõhine stack juba töötava automatiseerimisega.',
        ],
      },
      governance_leadership: {
        q: 'Kuidas juhtkond suhtub AI kasutuselevõttu?',
        a: [
          'Skeptiline või mitte seotud.',
          'Uudishimulik, kuid pole veel sponsorit ega mandaati.',
          'Juhtiv sponsor toetab esimest projekti.',
          'Juhtkond juhib AI-d aktiivselt eelarve ja muutusplaanidega.',
        ],
      },
      governance_risk: {
        q: 'Kas olete arutanud andmekaitset, kliendi nõusolekut ja AI riski?',
        a: [
          'Üldse mitte arutatud.',
          'Mitteametlik teadlikkus — kirjalikke reegleid pole.',
          'Põhijuhised, kes tohib AI-d kasutada ja millised andmed on lubatud.',
          'Kirjalikud poliitikad privaatsuse, juurdepääsu ja tarnija kasutuse kohta.',
        ],
      },
    },
    resultsTitle: 'Teie AI valmisoleku skoor',
    resultsSubtitle:
      'Kohesed tulemused — seejärel öelge, kas soovite kohandatud AI lahendust oma nõrgimate valdkondade ümber.',
    dimensionsTitle: 'Skoor dimensiooni järgi',
    gapsTitle: 'Tõenäolised ebatõhusused, mida esimesena parandada',
    ctaRequest: 'Taotle kohandatud AI lahendust',
    ctaCustom: 'Lisateave kohandatud AI tööriistade kohta',
    ctaRetake: 'Tee hindamine uuesti',
    band: {
      red: {
        label: 'Pole veel valmis',
        desc: 'Alused on õhukesed. Keskenduge ühele selgele kasutusjuhtumile, puhtamatele andmetele ja sisemisele omanikule enne suurt AI kulutust.',
      },
      amber: {
        label: 'Osaliselt valmis',
        desc: 'Teil on baas, millele ehitada. Sulgege esmalt nõrgimad lüngad, seejärel käivitage fokuseeritud piloot mõõdetavate eesmärkidega.',
      },
      green: {
        label: 'AI-valmis',
        desc: 'Olete tugevas positsioonis AI kasutuselevõtuks või skaleerimiseks. Prioriseerige tootmiskasutusjuhtumeid ja hoidke juhtimine range.',
      },
    },
    rec: {
      strategy:
        'Nimetage üks suure mõjuga protsess ja määratlege edu numbrites enne tööriistade ostmist.',
      data: 'Konsolideerige andmed peamise töövoo jaoks — kui AI-l pole puhtaid sisendeid, projektid peatuvad.',
      people:
        'Määrake sisemine omanik nädalase võimsusega; ainult tarnija projektid jäävad harva püsima.',
      process:
        'Dokumenteerige ja mõõtke pudelikael, mida AI peab parandama — maht, aeg ja erandite määr.',
      tech: 'Kinnitage API-d või usaldusväärsed ekspordid süsteemidest, millega AI peab ühenduma.',
      governance:
        'Saage juhtkonna sponsorlus ja põhireeglid andmekasutuse, privaatsuse ja kliendimõju jaoks.',
    },
    contactIntro:
      'Lõpetasin AI valmisoleku skoori ja soovin arutada kohandatud AI lahendust.',
    contactScoreLine: 'Üldskoor: {score}/100',
    contactBandLine: 'Vahemik: {band}',
    contactGapsIntro: 'Nõrgimad valdkonnad:',
    contactGapLine: '{name} ({score}/100)',
  },

  fi: {
    assessmentLanguage: 'Arvioinnin kieli',
    quizTitle: 'Arviointi',
    quizSubtitle:
      'Valitse vastaus, joka kuvaa parhaiten yritystäsi tänään — rehellisyys voittaa optimismiin.',
    step: 'Kysymys {current}/{total}',
    progressAria: 'Edistyminen: kysymys {current}/{total}',
    back: 'Takaisin',
    next: 'Seuraava',
    seeResults: 'Näytä pisteeni',
    dim: {
      strategy: 'Strategia ja käyttötapaukset',
      data: 'Datan valmius',
      people: 'Ihmiset ja taidot',
      process: 'Prosessit ja toiminta',
      tech: 'Teknologia ja integraatio',
      governance: 'Hallinto ja muutos',
    },
    questions: {
      strategy_use_cases: {
        q: 'Oletteko tunnistaneet konkreettisia liiketoimintaongelmia, joissa tekoäly voisi auttaa?',
        a: [
          'Ei vielä — tutkimme edelleen tekoälyn ideaa.',
          'Meillä on ideoiden shortlist, mutta mitään ei ole priorisoitu.',
          'Meillä on 1–2 selkeää käyttötapausta sidottuna liiketoimintatavoitteeseen.',
          'Meillä on priorisoitu tekoälyn käyttötapausten tiekartta omistajineen.',
        ],
      },
      strategy_roi: {
        q: 'Miten ajattelette tekoälyinvestoinnin tuottoa?',
        a: [
          'Emme ole vielä määritelleet menestysmittareita.',
          'Odotamme säästöjä, mutta ilman lukuja tai aikataulua.',
          'Meillä on karkeat kustannus/hyötyarviot pilottia varten.',
          'Seuraamme ROI:ta selkeillä KPI:illä ja lopeta/jatka-säännöllä.',
        ],
      },
      data_location: {
        q: 'Missä kriittiset liiketoimintatietonne elävät tänään?',
        a: [
          'Enimmäkseen taulukoissa, sähköpostissa ja paperilla — vaikea löytää.',
          'Muutamassa järjestelmässä, jotka eivät keskustele keskenään.',
          'Keskushyödykkeet kattavat suurimman osan toiminnasta, joillain aukoilla.',
          'Data on keskitettyä, saatavilla ja suurelta osin integroitua.',
        ],
      },
      data_quality: {
        q: 'Kuinka luotettavaa on data, jota antaisitte tekoälylle?',
        a: [
          'Usein puutteellista, päällekkäistä tai vanhentunutta.',
          'Käyttökelpoista ihmisille, mutta sotkuista automaatiolle.',
          'Enimmäkseen puhdasta päätyövirroillemme; jonkin verran siivousta tarvitaan.',
          'Dokumentoitua, validoitua ja luotettavaa päätöksentekoon.',
        ],
      },
      people_ownership: {
        q: 'Kuka omistaisi tekoälyaloitteen yrityksessänne?',
        a: [
          'Ei kukaan — tukeutuisimme täysin toimittajaan.',
          'Joku kiinnostunut, mutta ilman erillistä aikaa.',
          'Nimetty omistaja, joka voi käyttää siihen osan viikostaan.',
          'Selkeä sisäinen omistajuus kapasiteetilla ja päätösoikeuksilla.',
        ],
      },
      people_skills: {
        q: 'Kuinka tuttuja tekoälytyökalut ovat tiimillenne?',
        a: [
          'Vähän tai ei lainkaan käytännön kokemusta.',
          'Muutama henkilö käyttää ChatGPT/Copilot’ia satunnaisesti.',
          'Tiimin jäsenet käyttävät tekoälyä säännöllisesti päivittäisessä työssä.',
          'Voimme arvioida, konfiguroida ja parantaa tekoälytyökaluja itse.',
        ],
      },
      process_visibility: {
        q: 'Ovatko keskeiset työnkulkunne dokumentoituja ja mitattavia?',
        a: [
          'Ne elävät ihmisten päissä — vähän on kirjoitettu ylös.',
          'Joitain SOP:ita on, mutta ne ovat puutteellisia tai vanhentuneita.',
          'Päätyönkulut on dokumentoitu perusmittareilla.',
          'Prosessit on kartoitettu, mitattu ja säännöllisesti katselmoitu.',
        ],
      },
      process_bottlenecks: {
        q: 'Tiedättekö, missä aikaa tai rahaa katoaa toiminnassa?',
        a: [
          'Aistimme ongelmia, mutta emme voi osoittaa tiettyjä pullonkauloja.',
          'Tiedämme muutamia kipupisteitä valituksista tai ylityöstä.',
          'Olemme tunnistaneet suuren volyymin, toistuvia pullonkauloja.',
          'Mittaamme poikkeusasteita ja viiveiden kustannuksia prosessittain.',
        ],
      },
      tech_integration: {
        q: 'Voivatko nykyiset järjestelmänne yhdistyä uusiin työkaluihin API:iden tai vientien kautta?',
        a: [
          'Enimmäkseen suljettuja/perinteisiä järjestelmiä manuaalisella kopioi-liitä.',
          'Joitain CSV/vientivaihtoehtoja; rajalliset live-integraatiot.',
          'Avainjärjestelmillä on API:t tai todistetut integraatiopolut.',
          'API-ensin stack luotettavilla integraatioilla jo käytössä.',
        ],
      },
      tech_stack: {
        q: 'Kuinka moderni päivittäinen teknologiapinonne on?',
        a: [
          'Vahva riippuvuus paperista, puhelimesta ja irrallisista työkaluista.',
          'Sekoitus vanhempaa ohjelmistoa ja muutamia pilvityökaluja.',
          'Enimmäkseen pilvi/SaaS-työkaluja, jotka kattavat ydintoiminnan.',
          'Moderni pilvipohjainen stack, jossa automaatio jo käynnissä.',
        ],
      },
      governance_leadership: {
        q: 'Miten johto suhtautuu tekoälyn käyttöönottoon?',
        a: [
          'Epäilevästi tai ei sitoutunut.',
          'Utelias, mutta ei vielä sponsoria tai mandaattia.',
          'Johtava sponsori tukee ensimmäistä projektia.',
          'Johto ajaa tekoälyä aktiivisesti budjetilla ja muutos suunnitelmilla.',
        ],
      },
      governance_risk: {
        q: 'Oletteko keskustelleet tietosuojasta, asiakkaan suostumuksesta ja tekoälyriskistä?',
        a: [
          'Ei ole keskusteltu lainkaan.',
          'Epävirallinen tietoisuus — ei kirjallisia sääntöjä.',
          'Perusohjeet siitä, kuka saa käyttää tekoälyä ja mitä dataa sallitaan.',
          'Kirjalliset käytännöt yksityisyydestä, pääsystä ja toimittajien käytöstä.',
        ],
      },
    },
    resultsTitle: 'Tekoälyvalmiutenne pisteet',
    resultsSubtitle:
      'Välittömät tulokset — kerro sitten, haluatko räätälöidyn tekoälyratkaisun heikoimpien alueidesi ympärille.',
    dimensionsTitle: 'Pisteet ulottuvuuksittain',
    gapsTitle: 'Todennäköiset tehottomuudet korjattavaksi ensin',
    ctaRequest: 'Pyydä räätälöityä tekoälyratkaisua',
    ctaCustom: 'Lisätietoja räätälöidyistä tekoälytyökaluista',
    ctaRetake: 'Tee arviointi uudelleen',
    band: {
      red: {
        label: 'Ei vielä valmis',
        desc: 'Perusta on ohut. Keskity yhteen selkeään käyttötapaukseen, puhtaampaan dataan ja sisäiseen omistajaan ennen suurta tekoälykulua.',
      },
      amber: {
        label: 'Osittain valmis',
        desc: 'Teillä on pohja, jolle rakentaa. Sulje heikoimmat aukot ensin, sitten aja kohdennettu pilotti mitattavilla tavoitteilla.',
      },
      green: {
        label: 'Tekoälyvalmis',
        desc: 'Olette vahvassa asemassa ottaa käyttöön tai skaalata tekoälyä. Priorisoikaa tuotantokäyttötapaukset ja pitäkää hallinto tiukkana.',
      },
    },
    rec: {
      strategy:
        'Nimeä yksi korkean vaikutuksen prosessi ja määrittele menestys numeroina ennen työkalujen ostamista.',
      data: 'Konsolidoi data tärkeimmälle työnkululle — jos tekoälyllä ei ole puhtaita syötteitä, projektit pysähtyvät.',
      people:
        'Nimeä sisäinen omistaja viikoittaisella kapasiteetilla; vain toimittajan projektit harvoin juurtuvat.',
      process:
        'Dokumentoi ja mittaa pullonkaula, jonka tekoälyn pitäisi korjata — volyymi, aika ja poikkeusaste.',
      tech: 'Vahvista API:t tai luotettavat viennit järjestelmistä, joihin tekoälyn täytyy yhdistyä.',
      governance:
        'Hanki johdon sponsorointi ja perussäännöt datan käytölle, yksityisyydelle ja asiakasvaikutukselle.',
    },
    contactIntro:
      'Suoritin tekoälyvalmiuden arvioinnin ja haluaisin keskustella räätälöidystä tekoälyratkaisusta.',
    contactScoreLine: 'Kokonaispisteet: {score}/100',
    contactBandLine: 'Vyöhyke: {band}',
    contactGapsIntro: 'Heikoimmat alueet:',
    contactGapLine: '{name} ({score}/100)',
  },

  fr: {
    assessmentLanguage: "Langue de l'évaluation",
    quizTitle: 'Évaluation',
    quizSubtitle:
      "Choisissez la réponse qui correspond le mieux à votre entreprise aujourd'hui — l'honnêteté vaut mieux que l'optimisme.",
    step: 'Question {current} sur {total}',
    progressAria: 'Progression : question {current} sur {total}',
    back: 'Retour',
    next: 'Suivant',
    seeResults: 'Voir mon score',
    dim: {
      strategy: "Stratégie et cas d'usage",
      data: 'Préparation des données',
      people: 'Personnes et compétences',
      process: 'Processus et opérations',
      tech: 'Tech et intégration',
      governance: 'Gouvernance et changement',
    },
    questions: {
      strategy_use_cases: {
        q: "Avez-vous identifié des problèmes métier concrets où l'IA pourrait aider ?",
        a: [
          "Pas encore — nous explorons encore l'idée de l'IA.",
          "Nous avons une shortlist d'idées, mais rien n'est priorisé.",
          "Nous avons 1–2 cas d'usage clairs liés à un objectif métier.",
          "Nous avons une feuille de route priorisée de cas d'usage IA avec des responsables.",
        ],
      },
      strategy_roi: {
        q: "Comment pensez-vous le retour sur investissement de l'IA ?",
        a: [
          "Nous n'avons pas encore défini de métriques de succès.",
          'Nous attendons des économies, mais sans chiffres ni calendrier.',
          'Nous avons des estimations approximatives coûts/bénéfices pour un pilote.',
          'Nous suivons le ROI avec des KPI clairs et une règle stop/continuer.',
        ],
      },
      data_location: {
        q: "Où vivent aujourd'hui vos données métier critiques ?",
        a: [
          'Surtout des tableurs, e-mails et papier — difficiles à trouver.',
          'Dans quelques systèmes qui ne communiquent pas entre eux.',
          'Des outils centraux couvrent la plupart des opérations, avec des lacunes.',
          'Les données sont centralisées, accessibles et largement intégrées.',
        ],
      },
      data_quality: {
        q: "Quelle est la fiabilité des données que vous donneriez à l'IA ?",
        a: [
          'Souvent incomplètes, dupliquées ou obsolètes.',
          "Utilisables pour les humains, mais désordonnées pour l'automatisation.",
          'Globalement propres pour nos flux principaux ; un peu de nettoyage nécessaire.',
          'Documentées, validées et fiables pour les décisions.',
        ],
      },
      people_ownership: {
        q: "Qui serait propriétaire d'une initiative IA dans votre entreprise ?",
        a: [
          "Personne — nous dépendrions entièrement d'un prestataire.",
          'Quelqu’un d’intéressé, mais sans temps dédié.',
          'Un responsable nommé qui peut y consacrer une partie de sa semaine.',
          'Une propriété interne claire avec capacité et droits de décision.',
        ],
      },
      people_skills: {
        q: "À quel point votre équipe connaît-elle les outils d'IA ?",
        a: [
          'Peu ou pas d’expérience pratique.',
          'Quelques personnes utilisent ChatGPT/Copilot occasionnellement.',
          'Les membres de l’équipe utilisent régulièrement l’IA au quotidien.',
          'Nous pouvons évaluer, configurer et améliorer les outils IA nous-mêmes.',
        ],
      },
      process_visibility: {
        q: 'Vos flux de travail clés sont-ils documentés et mesurables ?',
        a: [
          'Ils vivent dans la tête des gens — peu est écrit.',
          'Certaines SOP existent, mais elles sont incomplètes ou obsolètes.',
          'Les flux principaux sont documentés avec des métriques de base.',
          'Les processus sont cartographiés, mesurés et régulièrement revus.',
        ],
      },
      process_bottlenecks: {
        q: 'Savez-vous où le temps ou l’argent se perd dans les opérations ?',
        a: [
          'Nous sentons des problèmes, mais ne pouvons pas pointer de goulots précis.',
          'Nous connaissons quelques points de douleur via plaintes ou heures sup.',
          'Nous avons identifié des goulots à fort volume et répétitifs.',
          'Nous mesurons les taux d’exception et le coût des retards par processus.',
        ],
      },
      tech_integration: {
        q: 'Vos systèmes actuels peuvent-ils se connecter à de nouveaux outils via API ou exports ?',
        a: [
          'Surtout des systèmes fermés/legacy avec copier-coller manuel.',
          'Quelques options CSV/export ; intégrations live limitées.',
          'Les systèmes clés ont des API ou des chemins d’intégration éprouvés.',
          'Stack API-first avec des intégrations fiables déjà en place.',
        ],
      },
      tech_stack: {
        q: 'À quel point votre stack technologique quotidienne est-elle moderne ?',
        a: [
          'Forte dépendance au papier, au téléphone et à des outils déconnectés.',
          'Mélange de logiciels plus anciens et de quelques outils cloud.',
          'Surtout des outils cloud/SaaS couvrant les opérations principales.',
          'Stack cloud moderne avec automatisation déjà en marche.',
        ],
      },
      governance_leadership: {
        q: "Comment la direction aborde-t-elle l'adoption de l'IA ?",
        a: [
          'Sceptique ou non engagée.',
          'Curieuse, mais pas encore de sponsor ni de mandat.',
          'Un sponsor exécutif soutient un premier projet.',
          "La direction pilote activement l'IA avec budget et plans de changement.",
        ],
      },
      governance_risk: {
        q: "Avez-vous discuté de la confidentialité des données, du consentement client et du risque IA ?",
        a: [
          'Pas du tout discuté.',
          'Sensibilisation informelle — pas de règles écrites.',
          'Lignes directrices de base sur qui peut utiliser l’IA et quelles données sont autorisées.',
          'Politiques écrites sur la confidentialité, l’accès et l’usage des prestataires.',
        ],
      },
    },
    resultsTitle: 'Votre score de maturité IA',
    resultsSubtitle:
      'Résultats instantanés — dites-nous ensuite si vous voulez une solution IA sur mesure autour de vos points faibles.',
    dimensionsTitle: 'Score par dimension',
    gapsTitle: "Inefficacités probables à corriger en premier",
    ctaRequest: 'Demander une solution IA sur mesure',
    ctaCustom: 'En savoir plus sur les outils IA sur mesure',
    ctaRetake: "Refaire l'évaluation",
    band: {
      red: {
        label: 'Pas encore prêt',
        desc: "Les fondations sont minces. Concentrez-vous sur un cas d'usage clair, des données plus propres et un responsable interne avant un gros budget IA.",
      },
      amber: {
        label: 'Partiellement prêt',
        desc: "Vous avez une base sur laquelle construire. Fermez d'abord les lacunes les plus faibles, puis lancez un pilote ciblé avec des objectifs mesurables.",
      },
      green: {
        label: 'Prêt pour l’IA',
        desc: "Vous êtes en bonne position pour adopter ou scaler l'IA. Priorisez les cas de production et gardez une gouvernance stricte.",
      },
    },
    rec: {
      strategy:
        "Nommez un processus à fort impact et définissez le succès en chiffres avant d'acheter des outils.",
      data: "Consolidez les données de votre flux principal — si l'IA n'a pas d'entrées propres, les projets stagnent.",
      people:
        "Désignez un responsable interne avec capacité hebdomadaire ; les projets uniquement chez un prestataire tiennent rarement.",
      process:
        "Documentez et mesurez le goulot que l'IA doit corriger — volume, temps et taux d'exception.",
      tech: "Confirmez les API ou exports fiables des systèmes auxquels l'IA doit se connecter.",
      governance:
        "Obtenez le sponsoring de la direction et des règles de base sur les données, la confidentialité et l'impact client.",
    },
    contactIntro:
      "J'ai terminé le score de maturité IA et souhaite discuter d'une solution IA sur mesure.",
    contactScoreLine: 'Score global : {score}/100',
    contactBandLine: 'Bande : {band}',
    contactGapsIntro: 'Points les plus faibles :',
    contactGapLine: '{name} ({score}/100)',
  },

  de: {
    assessmentLanguage: 'Sprache der Bewertung',
    quizTitle: 'Bewertung',
    quizSubtitle:
      'Wählen Sie die Antwort, die heute am besten zu Ihrem Unternehmen passt — Ehrlichkeit schlägt Optimismus.',
    step: 'Frage {current} von {total}',
    progressAria: 'Fortschritt: Frage {current} von {total}',
    back: 'Zurück',
    next: 'Weiter',
    seeResults: 'Mein Ergebnis anzeigen',
    dim: {
      strategy: 'Strategie & Use Cases',
      data: 'Datenbereitschaft',
      people: 'Menschen & Fähigkeiten',
      process: 'Prozesse & Betrieb',
      tech: 'Tech & Integration',
      governance: 'Governance & Wandel',
    },
    questions: {
      strategy_use_cases: {
        q: 'Haben Sie konkrete Geschäftsprobleme identifiziert, bei denen KI helfen könnte?',
        a: [
          'Noch nicht — wir prüfen die Idee von KI noch.',
          'Wir haben eine Shortlist an Ideen, aber nichts priorisiert.',
          'Wir haben 1–2 klare Use Cases an ein Geschäftsziel gebunden.',
          'Wir haben eine priorisierte Roadmap von KI-Use-Cases mit Verantwortlichen.',
        ],
      },
      strategy_roi: {
        q: 'Wie denken Sie über die Rendite von KI-Investitionen?',
        a: [
          'Wir haben noch keine Erfolgsmetriken definiert.',
          'Wir erwarten Einsparungen, aber ohne Zahlen oder Zeitplan.',
          'Wir haben grobe Kosten-/Nutzen-Schätzungen für einen Pilot.',
          'Wir tracken ROI mit klaren KPIs und einer Stopp/Weiter-Regel.',
        ],
      },
      data_location: {
        q: 'Wo liegen Ihre kritischen Geschäftsdaten heute?',
        a: [
          'Vor allem Tabellen, E-Mail und Papier — schwer zu finden.',
          'In einigen Systemen, die nicht miteinander sprechen.',
          'Zentrale Tools decken den Großteil ab, mit einigen Lücken.',
          'Daten sind zentralisiert, zugänglich und weitgehend integriert.',
        ],
      },
      data_quality: {
        q: 'Wie zuverlässig sind die Daten, die Sie der KI geben würden?',
        a: [
          'Oft unvollständig, dupliziert oder veraltet.',
          'Für Menschen nutzbar, aber unordentlich für Automatisierung.',
          'Größtenteils sauber für unsere Hauptworkflows; etwas Cleanup nötig.',
          'Dokumentiert, validiert und für Entscheidungen vertrauenswürdig.',
        ],
      },
      people_ownership: {
        q: 'Wer würde eine KI-Initiative in Ihrem Unternehmen verantworten?',
        a: [
          'Niemand — wir würden uns vollständig auf einen Anbieter verlassen.',
          'Jemand Interessiertes, aber ohne feste Zeit.',
          'Ein benannter Owner, der einen Teil der Woche dafür hat.',
          'Klare interne Ownership mit Kapazität und Entscheidungsrechten.',
        ],
      },
      people_skills: {
        q: 'Wie vertraut ist Ihr Team mit KI-Tools?',
        a: [
          'Wenig bis keine praktische Erfahrung.',
          'Einige nutzen ChatGPT/Copilot gelegentlich.',
          'Teammitglieder nutzen KI regelmäßig im Alltag.',
          'Wir können KI-Tools selbst bewerten, konfigurieren und verbessern.',
        ],
      },
      process_visibility: {
        q: 'Sind Ihre Schlüsselworkflows dokumentiert und messbar?',
        a: [
          'Sie leben in den Köpfen der Leute — wenig ist aufgeschrieben.',
          'Einige SOPs gibt es, aber sie sind unvollständig oder veraltet.',
          'Hauptworkflows sind mit Basismetriken dokumentiert.',
          'Prozesse sind kartiert, gemessen und regelmäßig überprüft.',
        ],
      },
      process_bottlenecks: {
        q: 'Wissen Sie, wo in den Abläufen Zeit oder Geld verloren geht?',
        a: [
          'Wir spüren Probleme, können aber keine konkreten Engpässe nennen.',
          'Wir kennen einige Schmerzpunkte aus Beschwerden oder Überstunden.',
          'Wir haben Engpässe mit hohem Volumen und Wiederholung identifiziert.',
          'Wir messen Ausnahmequoten und Verzögerungskosten pro Prozess.',
        ],
      },
      tech_integration: {
        q: 'Können Ihre aktuellen Systeme neue Tools über APIs oder Exporte anbinden?',
        a: [
          'Vor allem geschlossene/Legacy-Systeme mit manuellem Copy-Paste.',
          'Einige CSV/Export-Optionen; begrenzte Live-Integrationen.',
          'Schlüsselsysteme haben APIs oder bewährte Integrationswege.',
          'API-first Stack mit zuverlässigen Integrationen bereits im Einsatz.',
        ],
      },
      tech_stack: {
        q: 'Wie modern ist Ihr täglicher Technologie-Stack?',
        a: [
          'Starke Abhängigkeit von Papier, Telefon und getrennten Tools.',
          'Mix aus älterer Software und einigen Cloud-Tools.',
          'Vor allem Cloud/SaaS-Tools für Kernprozesse.',
          'Moderner Cloud-Stack mit bereits laufender Automatisierung.',
        ],
      },
      governance_leadership: {
        q: 'Wie geht die Führung mit KI-Adoption um?',
        a: [
          'Skeptisch oder nicht eingebunden.',
          'Neugierig, aber noch kein Sponsor oder Mandat.',
          'Ein Executive Sponsor unterstützt ein erstes Projekt.',
          'Die Führung treibt KI aktiv mit Budget und Change-Plänen voran.',
        ],
      },
      governance_risk: {
        q: 'Haben Sie Datenschutz, Kundeneinwilligung und KI-Risiko besprochen?',
        a: [
          'Überhaupt nicht besprochen.',
          'Informelles Bewusstsein — keine schriftlichen Regeln.',
          'Grundregeln, wer KI nutzen darf und welche Daten erlaubt sind.',
          'Schriftliche Richtlinien zu Privatsphäre, Zugang und Anbieter-Nutzung.',
        ],
      },
    },
    resultsTitle: 'Ihr KI-Bereitschaftsscore',
    resultsSubtitle:
      'Sofortige Ergebnisse — sagen Sie uns danach, ob Sie eine maßgeschneiderte KI-Lösung um Ihre schwächsten Bereiche wollen.',
    dimensionsTitle: 'Score nach Dimension',
    gapsTitle: 'Wahrscheinliche Ineffizienzen zuerst beheben',
    ctaRequest: 'Maßgeschneiderte KI-Lösung anfragen',
    ctaCustom: 'Mehr über maßgeschneiderte KI-Tools',
    ctaRetake: 'Bewertung wiederholen',
    band: {
      red: {
        label: 'Noch nicht bereit',
        desc: 'Die Grundlagen sind dünn. Fokussieren Sie einen klaren Use Case, sauberere Daten und einen internen Owner vor großen KI-Ausgaben.',
      },
      amber: {
        label: 'Teilweise bereit',
        desc: 'Sie haben eine Basis. Schließen Sie zuerst die schwächsten Lücken, dann starten Sie einen fokussierten Pilot mit messbaren Zielen.',
      },
      green: {
        label: 'KI-bereit',
        desc: 'Sie sind stark aufgestellt, um KI einzuführen oder zu skalieren. Priorisieren Sie Produktions-Use-Cases und halten Sie Governance eng.',
      },
    },
    rec: {
      strategy:
        'Benennen Sie einen Prozess mit hoher Wirkung und definieren Sie Erfolg in Zahlen, bevor Sie Tools kaufen.',
      data: 'Konsolidieren Sie die Daten für Ihren Top-Workflow — ohne saubere Inputs stocken KI-Projekte.',
      people:
        'Benennen Sie einen internen Owner mit wöchentlicher Kapazität; reine Anbieterprojekte bleiben selten hängen.',
      process:
        'Dokumentieren und messen Sie den Engpass, den KI beheben soll — Volumen, Zeit und Ausnahmequote.',
      tech: 'Bestätigen Sie APIs oder zuverlässige Exporte der Systeme, an die KI anbinden muss.',
      governance:
        'Holen Sie Führungs-Sponsoring und Grundregeln zu Datennutzung, Privatsphäre und Kundenwirkung.',
    },
    contactIntro:
      'Ich habe den KI-Bereitschaftsscore abgeschlossen und möchte eine maßgeschneiderte KI-Lösung besprechen.',
    contactScoreLine: 'Gesamtscore: {score}/100',
    contactBandLine: 'Band: {band}',
    contactGapsIntro: 'Schwächste Bereiche:',
    contactGapLine: '{name} ({score}/100)',
  },

  he: {
    assessmentLanguage: 'שפת ההערכה',
    quizTitle: 'הערכה',
    quizSubtitle:
      'בחרו את התשובה שמתאימה ביותר לעסק שלכם היום — כנות עדיפה על אופטימיות.',
    step: 'שאלה {current} מתוך {total}',
    progressAria: 'התקדמות: שאלה {current} מתוך {total}',
    back: 'חזרה',
    next: 'הבא',
    seeResults: 'הצג את הציון שלי',
    dim: {
      strategy: 'אסטרטגיה ומקרי שימוש',
      data: 'מוכנות נתונים',
      people: 'אנשים ומיומנויות',
      process: 'תהליכים ותפעול',
      tech: 'טכנולוגיה ואינטגרציה',
      governance: 'ממשל ושינוי',
    },
    questions: {
      strategy_use_cases: {
        q: 'האם זיהיתם בעיות עסקיות קונקרטיות שבהן AI יכול לעזור?',
        a: [
          'עדיין לא — אנחנו עדיין בוחנים את רעיון ה-AI.',
          'יש לנו רשימה קצרה של רעיונות, אבל שום דבר לא מתועדף.',
          'יש לנו 1–2 מקרי שימוש ברורים הקשורים ליעד עסקי.',
          'יש לנו מפת דרכים מתועדפת של מקרי שימוש ב-AI עם בעלים.',
        ],
      },
      strategy_roi: {
        q: 'איך אתם חושבים על החזר השקעה ב-AI?',
        a: [
          'עדיין לא הגדרנו מדדי הצלחה.',
          'אנחנו מצפים לחיסכון, אבל בלי מספרים או לוח זמנים.',
          'יש לנו הערכות גסות של עלות/תועלת לפיילוט.',
          'אנחנו עוקבים אחרי ROI עם KPI ברורים וכלל עצור/המשך.',
        ],
      },
      data_location: {
        q: 'איפה נמצאים כיום הנתונים העסקיים הקריטיים שלכם?',
        a: [
          'בעיקר גיליונות, אימייל ונייר — קשה למצוא.',
          'בכמה מערכות שלא מדברות זו עם זו.',
          'כלים מרכזיים מכסים את רוב התפעול, עם פערים מסוימים.',
          'הנתונים מרכזיים, נגישים ובעיקר משולבים.',
        ],
      },
      data_quality: {
        q: 'כמה אמינים הנתונים שתזינו ל-AI?',
        a: [
          'לעיתים קרובות חסרים, כפולים או מיושנים.',
          'שמישים לבני אדם, אבל מבולגנים לאוטומציה.',
          'בעיקר נקיים לזרימות העבודה העיקריות; נדרש ניקוי מסוים.',
          'מתועדים, מאומתים ואמינים להחלטות.',
        ],
      },
      people_ownership: {
        q: 'מי יהיה הבעלים של יוזמת AI בתוך העסק שלכם?',
        a: [
          'אף אחד — נסתמך לחלוטין על ספק.',
          'מישהו מעוניין, אבל בלי זמן מוקדש.',
          'בעלים ממונה שיכול להקדיש חלק מהשבוע לכך.',
          'בעלות פנימית ברורה עם קיבולת וסמכויות החלטה.',
        ],
      },
      people_skills: {
        q: 'עד כמה הצוות שלכם מכיר כלי AI?',
        a: [
          'מעט או אין ניסיון מעשי.',
          'כמה אנשים משתמשים ב-ChatGPT/Copilot מדי פעם.',
          'חברי הצוות משתמשים ב-AI באופן קבוע בעבודה היומיומית.',
          'אנחנו יכולים להעריך, להגדיר ולשפר כלי AI בעצמנו.',
        ],
      },
      process_visibility: {
        q: 'האם זרימות העבודה המרכזיות שלכם מתועדות ומדידות?',
        a: [
          'הן חיות בראשי האנשים — מעט כתוב.',
          'קיימים כמה SOP, אבל הם חלקיים או מיושנים.',
          'זרימות העבודה העיקריות מתועדות עם מדדים בסיסיים.',
          'התהליכים ממופים, נמדדים ונבדקים באופן קבוע.',
        ],
      },
      process_bottlenecks: {
        q: 'האם אתם יודעים איפה הולכים לאיבוד זמן או כסף בתפעול?',
        a: [
          'אנחנו חשים בעיות, אבל לא יכולים להצביע על צווארי בקבוק ספציפיים.',
          'אנחנו מכירים כמה נקודות כאב מתלונות או שעות נוספות.',
          'זיהינו צווארי בקבוק בנפח גבוה וחוזרים.',
          'אנחנו מודדים שיעורי חריגות ועלות עיכובים לפי תהליך.',
        ],
      },
      tech_integration: {
        q: 'האם המערכות הנוכחיות שלכם יכולות להתחבר לכלים חדשים דרך API או ייצוא?',
        a: [
          'בעיקר מערכות סגורות/ישנות עם העתק-הדבק ידני.',
          'יש אפשרויות CSV/ייצוא; אינטגרציות חיות מוגבלות.',
          'למערכות המרכזיות יש API או נתיבי אינטגרציה מוכחים.',
          'סטאק מוכוון API עם אינטגרציות אמינות כבר בשימוש.',
        ],
      },
      tech_stack: {
        q: 'עד כמה מודרני סטאק הטכנולוגיה היומיומי שלכם?',
        a: [
          'תלות חזקה בנייר, טלפון וכלים מנותקים.',
          'תערובת של תוכנה ישנה וכמה כלי ענן.',
          'בעיקר כלי ענן/SaaS המכסים את ליבת התפעול.',
          'סטאק ענן מודרני עם אוטומציה שכבר רצה.',
        ],
      },
      governance_leadership: {
        q: 'איך ההנהלה מתייחסת לאימוץ AI?',
        a: [
          'ספקנית או לא מעורבת.',
          'סקרנית, אבל עדיין אין ספונסר או מנדט.',
          'ספונסר בכיר תומך בפרויקט ראשון.',
          'ההנהלה מובילה AI באופן פעיל עם תקציב ותוכניות שינוי.',
        ],
      },
      governance_risk: {
        q: 'האם דנתם בפרטיות נתונים, הסכמת לקוחות וסיכון AI?',
        a: [
          'לא נדון בכלל.',
          'מודעות לא פורמלית — בלי כללים כתובים.',
          'הנחיות בסיסיות מי יכול להשתמש ב-AI ואילו נתונים מותרים.',
          'מדיניות כתובה על פרטיות, גישה ושימוש בספקים.',
        ],
      },
    },
    resultsTitle: 'ציון מוכנות ה-AI שלכם',
    resultsSubtitle:
      'תוצאות מיידיות — אחר כך ספרו לנו אם אתם רוצים פתרון AI מותאם סביב האזורים החלשים ביותר.',
    dimensionsTitle: 'ציון לפי ממד',
    gapsTitle: 'חוסרי יעילות סבירים לתקן קודם',
    ctaRequest: 'בקשו פתרון AI מותאם',
    ctaCustom: 'למדו על כלי AI מותאמים',
    ctaRetake: 'עשו את ההערכה מחדש',
    band: {
      red: {
        label: 'עדיין לא מוכנים',
        desc: 'היסודות דקים. התמקדו במקרה שימוש אחד ברור, נתונים נקיים יותר ובעלים פנימי לפני הוצאה גדולה על AI.',
      },
      amber: {
        label: 'מוכנים חלקית',
        desc: 'יש לכם בסיס לבנות עליו. סגרו קודם את הפערים החלשים ביותר, ואז הריצו פיילוט ממוקד עם יעדים מדידים.',
      },
      green: {
        label: 'מוכנים ל-AI',
        desc: 'אתם בעמדה חזקה לאמץ או להרחיב AI. תעדפו מקרי שימוש בייצור ושמרו על ממשל הדוק.',
      },
    },
    rec: {
      strategy:
        'תנו שם לתהליך אחד בעל השפעה גבוהה והגדירו הצלחה במספרים לפני רכישת כלים.',
      data: 'רכזו את הנתונים לזרימת העבודה העיקרית — אם ל-AI אין קלטים נקיים, פרויקטים נתקעים.',
      people:
        'מנו בעלים פנימי עם קיבולת שבועית; פרויקטים של ספק בלבד נדירים שנשארים.',
      process:
        'תעדו ומדדו את צוואר הבקבוק ש-AI צריך לתקן — נפח, זמן ושיעור חריגות.',
      tech: 'אשרו API או ייצואים אמינים מהמערכות שאליהן AI צריך להתחבר.',
      governance:
        'השיגו חסות הנהלה וכללים בסיסיים לשימוש בנתונים, פרטיות והשפעה על לקוחות.',
    },
    contactIntro:
      'השלמתי את ציון מוכנות ה-AI ואשמח לדון בפתרון AI מותאם.',
    contactScoreLine: 'ציון כולל: {score}/100',
    contactBandLine: 'רמה: {band}',
    contactGapsIntro: 'האזורים החלשים ביותר:',
    contactGapLine: '{name} ({score}/100)',
  },

  hu: {
    assessmentLanguage: 'Az értékelés nyelve',
    quizTitle: 'Értékelés',
    quizSubtitle:
      'Válassza azt a választ, amely ma a legjobban illik a vállalkozására — a őszinteség jobb az optimizmusnál.',
    step: '{current}. kérdés / {total}',
    progressAria: 'Haladás: {current}. kérdés / {total}',
    back: 'Vissza',
    next: 'Következő',
    seeResults: 'Eredményem megtekintése',
    dim: {
      strategy: 'Stratégia és felhasználási esetek',
      data: 'Adatkészültség',
      people: 'Emberek és készségek',
      process: 'Folyamatok és működés',
      tech: 'Technológia és integráció',
      governance: 'Irányítás és változás',
    },
    questions: {
      strategy_use_cases: {
        q: 'Azonosítottak-e konkrét üzleti problémákat, ahol a mesterséges intelligencia segíthet?',
        a: [
          'Még nem — még csak az MI ötletét vizsgáljuk.',
          'Van egy rövid lista ötletekről, de semmi nincs priorizálva.',
          'Van 1–2 egyértelmű felhasználási eset üzleti célhoz kötve.',
          'Van priorizált MI felhasználási esetek ütemterve felelősökkel.',
        ],
      },
      strategy_roi: {
        q: 'Hogyan gondolkodnak az MI-befektetés megtérüléséről?',
        a: [
          'Még nem határoztunk meg siker-metrikákat.',
          'Megtakarítást várunk, de számok és ütemterv nélkül.',
          'Vannak durva költség/haszon becsléseink egy pilóta projektre.',
          'ROI-t követünk egyértelmű KPI-kkel és stop/folytatás szabállyal.',
        ],
      },
      data_location: {
        q: 'Hol élnek ma a kritikus üzleti adataik?',
        a: [
          'Főleg táblázatokban, e-mailben és papíron — nehéz megtalálni.',
          'Néhány rendszerben, amelyek nem beszélnek egymással.',
          'Központi eszközök a legtöbb működést lefedik, néhány hiányossággal.',
          'Az adatok központosítottak, hozzáférhetők és nagyrészt integráltak.',
        ],
      },
      data_quality: {
        q: 'Mennyire megbízhatóak az adatok, amelyeket az MI-nek adnának?',
        a: [
          'Gyakran hiányosak, duplikáltak vagy elavultak.',
          'Embereknek használhatók, de automatizáláshoz rendezetlenek.',
          'Főleg tiszták a fő munkafolyamatokhoz; némi tisztítás kell.',
          'Dokumentáltak, validáltak és döntésekhez megbízhatók.',
        ],
      },
      people_ownership: {
        q: 'Ki birtokolna egy MI-kezdeményezést a vállalkozásukban?',
        a: [
          'Senki — teljes mértékben egy szállítóra támaszkodnánk.',
          'Valaki érdeklődik, de dedikált idő nélkül.',
          'Egy megnevezett felelős, aki a hete egy részét ráfordíthatja.',
          'Egyértelmű belső tulajdonláskapacitással és döntési jogokkal.',
        ],
      },
      people_skills: {
        q: 'Mennyire ismeri a csapatuk az MI-eszközöket?',
        a: [
          'Kevés vagy semmi gyakorlati tapasztalat.',
          'Néhányan alkalmanként használják a ChatGPT/Copilotot.',
          'A csapattagok rendszeresen használnak MI-t a napi munkában.',
          'Magunk tudjuk értékelni, konfigurálni és javítani az MI-eszközöket.',
        ],
      },
      process_visibility: {
        q: 'Dokumentáltak és mérhetők a kulcsfontosságú munkafolyamataik?',
        a: [
          'Az emberek fejében élnek — kevés van leírva.',
          'Vannak SOP-ok, de hiányosak vagy elavultak.',
          'A fő munkafolyamatok alapmetrikákkal dokumentáltak.',
          'A folyamatok feltérképezettek, mértek és rendszeresen felülvizsgáltak.',
        ],
      },
      process_bottlenecks: {
        q: 'Tudják, hol veszik el az idő vagy a pénz a működésben?',
        a: [
          'Érzünk problémákat, de nem tudunk konkrét szűk keresztmetszeteket megjelölni.',
          'Ismerünk néhány fájdalompontot panaszokból vagy túlórából.',
          'Azonosítottunk nagy volumenű, ismétlődő szűk keresztmetszeteket.',
          'Mérjük a kivételarányt és a késések költségét folyamatonként.',
        ],
      },
      tech_integration: {
        q: 'Kapcsolódhatnak-e jelenlegi rendszereik új eszközökhöz API-kon vagy exportokon keresztül?',
        a: [
          'Főleg zárt/legacy rendszerek manuális másolás-beillesztéssel.',
          'Néhány CSV/export lehetőség; korlátozott élő integrációk.',
          'A kulcsrendszereknek van API-ja vagy igazolt integrációs útja.',
          'API-első stack megbízható integrációkkal már használatban.',
        ],
      },
      tech_stack: {
        q: 'Mennyire modern a mindennapi technológiai stackjük?',
        a: [
          'Erős támaszkodás papírra, telefonra és szétválasztott eszközökre.',
          'Régebbi szoftver és néhány felhőeszköz keveréke.',
          'Főleg felhő/SaaS eszközök a magműveletekre.',
          'Modern felhőalapú stack már futó automatizálással.',
        ],
      },
      governance_leadership: {
        q: 'Hogyan közelíti meg a vezetés az MI bevezetését?',
        a: [
          'Szkeptikus vagy nem elkötelezett.',
          'Kíváncsi, de még nincs szponzor vagy megbízás.',
          'Egy vezetői szponzor támogat egy első projektet.',
          'A vezetés aktívan hajtja az MI-t költségvetéssel és változástervekkel.',
        ],
      },
      governance_risk: {
        q: 'Megbeszélték az adatvédelmet, az ügyfél hozzájárulását és az MI-kockázatot?',
        a: [
          'Egyáltalán nem beszéltük meg.',
          'Informális tudatosság — nincsenek írott szabályok.',
          'Alapvető irányelvek, ki használhat MI-t és milyen adatok engedélyezettek.',
          'Írott szabályzatok a magánéletről, hozzáférésről és szállítóhasználatról.',
        ],
      },
    },
    resultsTitle: 'Az Ön MI-készültségi pontszáma',
    resultsSubtitle:
      'Azonnali eredmények — majd mondja el, ha egyedi MI-megoldást szeretne a leggyengébb területei köré.',
    dimensionsTitle: 'Pontszám dimenziónként',
    gapsTitle: 'Valószínű hatékonysághiányok, amiket először javítson',
    ctaRequest: 'Egyedi MI-megoldás kérése',
    ctaCustom: 'Tudjon meg többet az egyedi MI-eszközökről',
    ctaRetake: 'Értékelés újra',
    band: {
      red: {
        label: 'Még nem kész',
        desc: 'Az alapok gyengék. Egyértelmű felhasználási esetre, tisztább adatokra és belső felelősre fókuszáljon nagy MI-költés előtt.',
      },
      amber: {
        label: 'Részben kész',
        desc: 'Van alap, amire építhet. Először zárja a leggyengébb hiányokat, majd futtasson célzott pilótát mérhető célokkal.',
      },
      green: {
        label: 'MI-kész',
        desc: 'Erős helyzetben van az MI bevezetéséhez vagy skálázásához. Priorizálja a termelési eseteket és tartsa szorosnak az irányítást.',
      },
    },
    rec: {
      strategy:
        'Nevezzen meg egy nagy hatású folyamatot, és határozza meg a sikert számokban eszközvásárlás előtt.',
      data: 'Konszolidálja a fő munkafolyamat adatait — ha az MI nem kap tiszta bemenetet, a projektek elakadnak.',
      people:
        'Jelöljön ki belső felelőst heti kapacitással; csak szállítós projektek ritkán maradnak meg.',
      process:
        'Dokumentálja és mérje a szűk keresztmetszetet, amit az MI-nek javítania kell — volumen, idő és kivételarány.',
      tech: 'Erősítse meg az API-kat vagy megbízható exportokat azokból a rendszerekből, amelyekhez az MI-nek csatlakoznia kell.',
      governance:
        'Szerezzen vezetői szponzorálást és alapvető szabályokat az adatkezelésre, adatvédelemre és ügyfélhatásra.',
    },
    contactIntro:
      'Elvégeztem az MI-készültségi értékelést, és szeretnék egyedi MI-megoldásról beszélni.',
    contactScoreLine: 'Összpontszám: {score}/100',
    contactBandLine: 'Sáv: {band}',
    contactGapsIntro: 'Leggyengébb területek:',
    contactGapLine: '{name} ({score}/100)',
  },

  ga: {
    assessmentLanguage: 'Teanga an mheasúnaithe',
    quizTitle: 'Measúnú',
    quizSubtitle:
      'Roghnaigh an freagra is fearr a oireann do do ghnó inniu — is fearr macántacht ná dóchas.',
    step: 'Ceist {current} as {total}',
    progressAria: 'Dul chun cinn: ceist {current} as {total}',
    back: 'Ar ais',
    next: 'Ar aghaidh',
    seeResults: 'Féach ar mo scór',
    dim: {
      strategy: 'Straitéis & cásanna úsáide',
      data: 'Ullmhacht sonraí',
      people: 'Daoine & scileanna',
      process: 'Próisis & oibríochtaí',
      tech: 'Teicneolaíocht & comhtháthú',
      governance: 'Rialachas & athrú',
    },
    questions: {
      strategy_use_cases: {
        q: 'An bhfuil fadhbanna gnó nithiúla aitheanta agat ina bhféadfadh AI cabhrú?',
        a: [
          'Níl fós — táimid fós ag iniúchadh an smaoinimh faoi AI.',
          'Tá gearrliosta smaointe againn, ach níl aon rud tosaíochtithe.',
          'Tá 1–2 chás úsáide soiléire againn ceangailte le sprioc ghnó.',
          'Tá treochlár tosaíochtithe de chásanna úsáide AI againn le húinéirí.',
        ],
      },
      strategy_roi: {
        q: 'Conas a smaoiníonn tú ar fhilleadh ar infheistíocht AI?',
        a: [
          'Níl méadrachtaí ratha sainmhínithe againn fós.',
          'Táimid ag súil le coigilteas, ach gan uimhreacha ná amlíne.',
          'Tá meastacháin garbha costas/sochair againn do phíolóta.',
          'Rianaímid ROI le KPI soiléire agus riail stop/lean.',
        ],
      },
      data_location: {
        q: 'Cá bhfuil do shonraí gnó criticiúla ina gcónaí inniu?',
        a: [
          'Spreadsheets, ríomhphost agus páipéar den chuid is mó — deacair a aimsiú.',
          'I gcóras beagán, ach ní labhraíonn siad lena chéile.',
          'Clúdaíonn uirlisí lárnacha an chuid is mó d’oibríochtaí, le bearnaí áirithe.',
          'Tá sonraí lárnaithe, inrochtana agus comhtháite den chuid is mó.',
        ],
      },
      data_quality: {
        q: 'Cé chomh hiontaofa atá na sonraí a chuirfeá isteach in AI?',
        a: [
          'Neamhiomlán, dúbláilte nó as dáta go minic.',
          'Inúsáidte do dhaoine, ach mí-eagraithe don uathoibriú.',
          'Glan den chuid is mó do na príomhshreafaí oibre; glanadh áirithe ag teastáil.',
          'Doiciméadaithe, bailíochtaithe agus iontaofa do chinntí.',
        ],
      },
      people_ownership: {
        q: 'Cé a bheadh ina úinéir ar thionscnamh AI laistigh de do ghnó?',
        a: [
          'Duine ar bith — bheimis ag brath go hiomlán ar sholáthraí.',
          'Duine éigin suimiúil, ach gan am tiomnaithe.',
          'Úinéir ainmnithe a fhéadfaidh cuid den tseachtain a chaitheamh air.',
          'Úinéireacht inmheánach shoiléir le toilleadh agus cearta cinntí.',
        ],
      },
      people_skills: {
        q: 'Cé chomh eolach atá d’fhoireann ar uirlisí AI?',
        a: [
          'Beagán nó gan aon taithí phraiticiúil.',
          'Úsáideann daoine beaga ChatGPT/Copilot ó am go chéile.',
          'Úsáideann baill foirne AI go rialta sa obair laethúil.',
          'Is féidir linn uirlisí AI a mheas, a chumrú agus a fheabhsú sinn féin.',
        ],
      },
      process_visibility: {
        q: 'An bhfuil do phríomhshreafaí oibre doiciméadaithe agus intomhaiste?',
        a: [
          'Tá siad i gceann daoine — is beag atá scríofa síos.',
          'Tá SOP-anna ann, ach tá siad neamhiomlán nó as dáta.',
          'Tá na príomhshreafaí doiciméadaithe le bunmhéadrachtaí.',
          'Tá próisis mapáilte, tomhaiste agus athbhreithnithe go rialta.',
        ],
      },
      process_bottlenecks: {
        q: 'An bhfuil a fhios agat cá gcailltear am nó airgead in oibríochtaí?',
        a: [
          'Braithimid fadhbanna, ach ní féidir linn scrogaill shonracha a chur in iúl.',
          'Tá cúpla pointe pian againn ó ghearáin nó ragobair.',
          'Tá scrogaill ard-toirte, athchleachtacha aitheanta againn.',
          'Tomhaisimid rátaí eisceachta agus costas moilleanna de réir próisis.',
        ],
      },
      tech_integration: {
        q: 'An féidir le do chórais reatha nascadh le huirlisí nua trí APIanna nó easpórtálacha?',
        a: [
          'Córais dúnta/oidhreachta den chuid is mó le cóipeáil-ghreamú láimhe.',
          'Roghanna CSV/easpórtála áirithe; comhtháthú beo teoranta.',
          'Tá APIanna nó cosáin comhtháthaithe cruthaithe ag na príomhchórais.',
          'Stack API-ar-dtús le comhtháthú iontaofa cheana in úsáid.',
        ],
      },
      tech_stack: {
        q: 'Cé chomh nua-aimseartha atá do stack teicneolaíochta laethúil?',
        a: [
          'Spleáchas trom ar pháipéar, teileafón agus uirlisí dícheangailte.',
          'Meascán de bhogearraí níos sine agus cúpla uirlis néal.',
          'Uirlisí néal/SaaS den chuid is mó a chlúdaíonn croí-oibríochtaí.',
          'Stack néalbhunaithe nua-aimseartha le huathoibriú ag rith cheana.',
        ],
      },
      governance_leadership: {
        q: 'Conas a ghlacann ceannaireacht le glacadh AI?',
        a: [
          'Amhrasach nó gan baint.',
          'Fiosrach, ach gan urra ná sainordú fós.',
          'Tacaíonn urra feidhmiúcháin le chéad tionscadal.',
          'Tiomáineann ceannaireacht AI go gníomhach le buiséad agus pleananna athraithe.',
        ],
      },
      governance_risk: {
        q: 'An bhfuil plé déanta agaibh ar phríobháideachas sonraí, toiliú custaiméirí agus riosca AI?',
        a: [
          'Níor pléadh ar chor ar bith.',
          'Feasacht neamhfhoirmiúil — gan rialacha scríofa.',
          'Treoirlínte bunúsacha maidir le cé atá in ann AI a úsáid agus cad iad na sonraí atá ceadaithe.',
          'Beartais scríofa ar phríobháideachas, rochtain agus úsáid soláthraithe.',
        ],
      },
    },
    resultsTitle: 'Do Scór Ullmhachta AI',
    resultsSubtitle:
      'Torthaí láithreacha — ansin inis dúinn más mian leat réiteach AI saincheaptha timpeall do limistéir is laige.',
    dimensionsTitle: 'Scór de réir toise',
    gapsTitle: 'Éifeachtúlachtaí dóchúla le réiteach ar dtús',
    ctaRequest: 'Iarr réiteach AI saincheaptha',
    ctaCustom: 'Foghlaim faoi uirlisí AI saincheaptha',
    ctaRetake: 'Déan an measúnú arís',
    band: {
      red: {
        label: 'Níl réidh fós',
        desc: 'Tá na bunsraitheanna tanaí. Dírigh ar chás úsáide soiléir amháin, sonraí níos glaine, agus úinéir inmheánach sula ndéantar caiteachas mór AI.',
      },
      amber: {
        label: 'Réidh go páirteach',
        desc: 'Tá bunús agat le tógáil air. Dún na bearnaí is laige ar dtús, ansin rith píolóta dírithe le spriocanna intomhaiste.',
      },
      green: {
        label: 'Réidh le AI',
        desc: 'Tá tú i riocht láidir AI a ghlacadh nó a scála. Tabhair tosaíocht do chásanna táirgeachta agus coinnigh an rialachas daingean.',
      },
    },
    rec: {
      strategy:
        'Ainmnigh próiseas ard-tionchair amháin agus sainmhínigh cad is rath ann i bhfigiúirí sula gceannaíonn tú uirlisí.',
      data: 'Comhdhlúthaigh na sonraí do do phríomhshreabhadh oibre — mura bhfuil ionchuir ghlana ag AI, stopann tionscadail.',
      people:
        'Sann úinéir inmheánach le toilleadh seachtainiúil; is annamh a fhanann tionscadail soláthraithe amháin.',
      process:
        'Doiciméadaigh agus tomhais an scrogall ar mhaith leat AI a shocrú — toirt, am, agus ráta eisceachta.',
      tech: 'Deimhnigh APIanna nó easpórtálacha iontaofa ó na córais a mbeadh ar AI nascadh leo.',
      governance:
        'Faigh urraíocht ceannaireachta agus rialacha bunúsacha maidir le húsáid sonraí, príobháideachas, agus tionchar custaiméirí.',
    },
    contactIntro:
      'Chríochnaigh mé an Scór Ullmhachta AI agus ba mhaith liom réiteach AI saincheaptha a phlé.',
    contactScoreLine: 'Scór foriomlán: {score}/100',
    contactBandLine: 'Banda: {band}',
    contactGapsIntro: 'Na limistéir is laige:',
    contactGapLine: '{name} ({score}/100)',
  },

  it: {
    assessmentLanguage: "Lingua della valutazione",
    quizTitle: 'Valutazione',
    quizSubtitle:
      'Scegli la risposta che meglio descrive la tua azienda oggi — l’onestà batte l’ottimismo.',
    step: 'Domanda {current} di {total}',
    progressAria: 'Avanzamento: domanda {current} di {total}',
    back: 'Indietro',
    next: 'Avanti',
    seeResults: 'Vedi il mio punteggio',
    dim: {
      strategy: 'Strategia e casi d’uso',
      data: 'Preparazione dei dati',
      people: 'Persone e competenze',
      process: 'Processi e operazioni',
      tech: 'Tech e integrazione',
      governance: 'Governance e cambiamento',
    },
    questions: {
      strategy_use_cases: {
        q: 'Avete individuato problemi di business concreti in cui l’IA potrebbe aiutare?',
        a: [
          'Non ancora — stiamo ancora esplorando l’idea di IA.',
          'Abbiamo una shortlist di idee, ma nulla è prioritizzato.',
          'Abbiamo 1–2 casi d’uso chiari legati a un obiettivo di business.',
          'Abbiamo una roadmap prioritizzata di casi d’uso IA con responsabili.',
        ],
      },
      strategy_roi: {
        q: 'Come pensate al ritorno sull’investimento in IA?',
        a: [
          'Non abbiamo ancora definito metriche di successo.',
          'Aspettiamo risparmi, ma senza numeri o tempistiche.',
          'Abbiamo stime approssimative costi/benefici per un pilota.',
          'Monitoriamo il ROI con KPI chiari e una regola stop/continua.',
        ],
      },
      data_location: {
        q: 'Dove vivono oggi i vostri dati di business critici?',
        a: [
          'Soprattutto fogli di calcolo, email e carta — difficili da trovare.',
          'In alcuni sistemi che non parlano tra loro.',
          'Strumenti centrali coprono la maggior parte delle operazioni, con alcune lacune.',
          'I dati sono centralizzati, accessibili e in gran parte integrati.',
        ],
      },
      data_quality: {
        q: 'Quanto sono affidabili i dati che dareste all’IA?',
        a: [
          'Spesso incompleti, duplicati o obsoleti.',
          'Usabili per le persone, ma disordinati per l’automazione.',
          'Per lo più puliti per i flussi principali; serve un po’ di pulizia.',
          'Documentati, validati e affidabili per le decisioni.',
        ],
      },
      people_ownership: {
        q: 'Chi sarebbe responsabile di un’iniziativa IA nella vostra azienda?',
        a: [
          'Nessuno — ci affideremmo interamente a un fornitore.',
          'Qualcuno interessato, ma senza tempo dedicato.',
          'Un responsabile nominato che può dedicarci parte della settimana.',
          'Ownership interna chiara con capacità e diritti decisionali.',
        ],
      },
      people_skills: {
        q: 'Quanto è familiare il vostro team con gli strumenti di IA?',
        a: [
          'Poca o nessuna esperienza pratica.',
          'Alcune persone usano ChatGPT/Copilot occasionalmente.',
          'I membri del team usano regolarmente l’IA nel lavoro quotidiano.',
          'Possiamo valutare, configurare e migliorare gli strumenti IA da soli.',
        ],
      },
      process_visibility: {
        q: 'I vostri flussi di lavoro chiave sono documentati e misurabili?',
        a: [
          'Vivono nelle teste delle persone — poco è scritto.',
          'Esistono alcune SOP, ma sono incomplete o obsolete.',
          'I flussi principali sono documentati con metriche di base.',
          'I processi sono mappati, misurati e rivisti regolarmente.',
        ],
      },
      process_bottlenecks: {
        q: 'Sapete dove si perdono tempo o denaro nelle operazioni?',
        a: [
          'Percepiamo problemi, ma non possiamo indicare colli di bottiglia specifici.',
          'Conosciamo alcuni punti di dolore da reclami o straordinari.',
          'Abbiamo individuato colli di bottiglia ad alto volume e ripetitivi.',
          'Misuriamo i tassi di eccezione e il costo dei ritardi per processo.',
        ],
      },
      tech_integration: {
        q: 'I vostri sistemi attuali possono collegarsi a nuovi strumenti via API o export?',
        a: [
          'Soprattutto sistemi chiusi/legacy con copia-incolla manuale.',
          'Alcune opzioni CSV/export; integrazioni live limitate.',
          'I sistemi chiave hanno API o percorsi di integrazione collaudati.',
          'Stack API-first con integrazioni affidabili già in uso.',
        ],
      },
      tech_stack: {
        q: 'Quanto è moderno il vostro stack tecnologico quotidiano?',
        a: [
          'Forte dipendenza da carta, telefono e strumenti scollegati.',
          'Mix di software più vecchio e alcuni strumenti cloud.',
          'Soprattutto strumenti cloud/SaaS che coprono le operazioni core.',
          'Stack cloud moderno con automazione già in funzione.',
        ],
      },
      governance_leadership: {
        q: 'Come affronta la leadership l’adozione dell’IA?',
        a: [
          'Scettica o non coinvolta.',
          'Curiosa, ma ancora senza sponsor o mandato.',
          'Uno sponsor esecutivo supporta un primo progetto.',
          'La leadership guida attivamente l’IA con budget e piani di change.',
        ],
      },
      governance_risk: {
        q: 'Avete discusso privacy dei dati, consenso dei clienti e rischio IA?',
        a: [
          'Non discusso affatto.',
          'Consapevolezza informale — nessuna regola scritta.',
          'Linee guida di base su chi può usare l’IA e quali dati sono ammessi.',
          'Policy scritte su privacy, accesso e uso dei fornitori.',
        ],
      },
    },
    resultsTitle: 'Il tuo punteggio di preparazione all’IA',
    resultsSubtitle:
      'Risultati istantanei — poi dicci se vuoi una soluzione IA su misura intorno alle aree più deboli.',
    dimensionsTitle: 'Punteggio per dimensione',
    gapsTitle: 'Inefficienze probabili da risolvere per prime',
    ctaRequest: 'Richiedi una soluzione IA su misura',
    ctaCustom: 'Scopri gli strumenti IA su misura',
    ctaRetake: 'Rifai la valutazione',
    band: {
      red: {
        label: 'Non ancora pronti',
        desc: 'Le basi sono sottili. Concentratevi su un caso d’uso chiaro, dati più puliti e un owner interno prima di una grande spesa IA.',
      },
      amber: {
        label: 'Parzialmente pronti',
        desc: 'Avete una base su cui costruire. Chiudete prima le lacune più deboli, poi lanciate un pilota mirato con obiettivi misurabili.',
      },
      green: {
        label: 'Pronti per l’IA',
        desc: 'Siete in una posizione forte per adottare o scalare l’IA. Prioritizzate i casi di produzione e tenete stretta la governance.',
      },
    },
    rec: {
      strategy:
        'Nominate un processo ad alto impatto e definite il successo in numeri prima di comprare strumenti.',
      data: 'Consolidate i dati del flusso principale — se l’IA non ha input puliti, i progetti si fermano.',
      people:
        'Assegnate un owner interno con capacità settimanale; i progetti solo presso il fornitore raramente restano.',
      process:
        'Documentate e misurate il collo di bottiglia che volete che l’IA risolva — volume, tempo e tasso di eccezione.',
      tech: 'Confermate API o export affidabili dai sistemi a cui l’IA dovrebbe collegarsi.',
      governance:
        'Ottenete lo sponsorship della leadership e regole di base su dati, privacy e impatto sui clienti.',
    },
    contactIntro:
      'Ho completato il punteggio di preparazione all’IA e vorrei discutere una soluzione IA su misura.',
    contactScoreLine: 'Punteggio complessivo: {score}/100',
    contactBandLine: 'Fascia: {band}',
    contactGapsIntro: 'Aree più deboli:',
    contactGapLine: '{name} ({score}/100)',
  },

  lv: {
    assessmentLanguage: 'Novērtējuma valoda',
    quizTitle: 'Novērtējums',
    quizSubtitle:
      'Izvēlieties atbildi, kas šodien vislabāk atbilst jūsu uzņēmumam — godīgums ir labāks par optimismu.',
    step: 'Jautājums {current} no {total}',
    progressAria: 'Progress: jautājums {current} no {total}',
    back: 'Atpakaļ',
    next: 'Tālāk',
    seeResults: 'Skatīt manu rezultātu',
    dim: {
      strategy: 'Stratēģija un lietošanas gadījumi',
      data: 'Datu gatavība',
      people: 'Cilvēki un prasmes',
      process: 'Procesi un operācijas',
      tech: 'Tehnoloģija un integrācija',
      governance: 'Pārvaldība un pārmaiņas',
    },
    questions: {
      strategy_use_cases: {
        q: 'Vai esat identificējuši konkrētas biznesa problēmas, kurās MI varētu palīdzēt?',
        a: [
          'Vēl nē — joprojām izpētām MI ideju.',
          'Mums ir ideju īssaraksts, bet nekas nav prioritizēts.',
          'Mums ir 1–2 skaidri lietošanas gadījumi, saistīti ar biznesa mērķi.',
          'Mums ir prioritizēts MI lietošanas gadījumu ceļvedis ar īpašniekiem.',
        ],
      },
      strategy_roi: {
        q: 'Kā jūs domājat par MI ieguldījuma atdevi?',
        a: [
          'Vēl neesam definējuši veiksmes metriku.',
          'Gaidām ietaupījumus, bet bez skaitļiem vai termiņiem.',
          'Mums ir aptuvenas izmaksu/ieguvumu aplēses pilotam.',
          'Izsekojam ROI ar skaidriem KPI un stop/turpināt noteikumu.',
        ],
      },
      data_location: {
        q: 'Kur šodien atrodas jūsu kritiskie biznesa dati?',
        a: [
          'Galvenokārt izklājlapās, e-pastā un papīrā — grūti atrast.',
          'Dažās sistēmās, kas savā starpā nesazinās.',
          'Centrālie rīki sedz lielāko daļu operāciju, ar dažām nepilnībām.',
          'Dati ir centralizēti, pieejami un lielā mērā integrēti.',
        ],
      },
      data_quality: {
        q: 'Cik uzticami ir dati, ko jūs iesniegtu MI?',
        a: [
          'Bieži nepilnīgi, dublēti vai novecojuši.',
          'Lietojami cilvēkiem, bet nekārtīgi automatizācijai.',
          'Galvenokārt tīri galvenajām darbplūsmām; nepieciešama neliela tīrīšana.',
          'Dokumentēti, validēti un uzticami lēmumiem.',
        ],
      },
      people_ownership: {
        q: 'Kurš būtu MI iniciatīvas īpašnieks jūsu uzņēmumā?',
        a: [
          'Neviens — mēs pilnībā paļautos uz piegādātāju.',
          'Kāds ieinteresēts, bet bez veltīta laika.',
          'Nosaukts īpašnieks, kas var tam veltīt daļu nedēļas.',
          'Skaidra iekšējā īpašumtiesība ar kapacitāti un lēmumu tiesībām.',
        ],
      },
      people_skills: {
        q: 'Cik labi jūsu komanda pārzina MI rīkus?',
        a: [
          'Maz vai nav praktiskas pieredzes.',
          'Daži cilvēki gadījuma pēc lieto ChatGPT/Copilot.',
          'Komandas locekļi regulāri lieto MI ikdienas darbā.',
          'Varam paši novērtēt, konfigurēt un uzlabot MI rīkus.',
        ],
      },
      process_visibility: {
        q: 'Vai jūsu galvenās darbplūsmas ir dokumentētas un mērāmas?',
        a: [
          'Tās dzīvo cilvēku galvās — maz ir pierakstīts.',
          'Pastāv daži SOP, bet tie ir nepilnīgi vai novecojuši.',
          'Galvenās darbplūsmas ir dokumentētas ar pamatmetrikām.',
          'Procesi ir kartēti, mērīti un regulāri pārskatīti.',
        ],
      },
      process_bottlenecks: {
        q: 'Vai zināt, kur operācijās tiek zaudēts laiks vai nauda?',
        a: [
          'Jūtam problēmas, bet nevaram norādīt konkrētus šaurumus.',
          'Zinām dažus sāpju punktus no sūdzībām vai virsstundām.',
          'Esam identificējuši liela apjoma, atkārtotus šaurumus.',
          'Mērām izņēmumu rādītājus un kavējumu izmaksas pa procesiem.',
        ],
      },
      tech_integration: {
        q: 'Vai jūsu pašreizējās sistēmas var savienoties ar jauniem rīkiem caur API vai eksportiem?',
        a: [
          'Galvenokārt slēgtas/legacy sistēmas ar manuālu kopēšanu.',
          'Dažas CSV/eksporta iespējas; ierobežotas tiešsaistes integrācijas.',
          'Galvenajām sistēmām ir API vai pierādīti integrācijas ceļi.',
          'API-pirmais stack ar uzticamām integrācijām jau lietošanā.',
        ],
      },
      tech_stack: {
        q: 'Cik moderns ir jūsu ikdienas tehnoloģiju stack?',
        a: [
          'Spēcīga atkarība no papīra, telefona un nesavienotiem rīkiem.',
          'Vecākas programmatūras un dažu mākoņa rīku maisījums.',
          'Galvenokārt mākoņa/SaaS rīki, kas sedz pamatoperācijas.',
          'Moderns mākoņa stack ar jau darbojošos automatizāciju.',
        ],
      },
      governance_leadership: {
        q: 'Kā vadība pieiet MI ieviešanai?',
        a: [
          'Skeptiski vai nav iesaistīta.',
          'Ziņkārīga, bet vēl nav sponsora vai mandāta.',
          'Vadības sponsors atbalsta pirmo projektu.',
          'Vadība aktīvi vada MI ar budžetu un pārmaiņu plāniem.',
        ],
      },
      governance_risk: {
        q: 'Vai esat apsprieduši datu privātumu, klientu piekrišanu un MI risku?',
        a: [
          'Vispār nav apspriests.',
          'Neformāla izpratne — bez rakstiskiem noteikumiem.',
          'Pamata vadlīnijas, kurš var lietot MI un kādi dati ir atļauti.',
          'Rakstītas politikas par privātumu, piekļuvi un piegādātāju izmantošanu.',
        ],
      },
    },
    resultsTitle: 'Jūsu MI gatavības rezultāts',
    resultsSubtitle:
      'Tūlītēji rezultāti — pēc tam pastāstiet, vai vēlaties pielāgotu MI risinājumu ap vājākajām jomām.',
    dimensionsTitle: 'Rezultāts pa dimensijām',
    gapsTitle: 'Iespējamās neefektivitātes, ko labot vispirms',
    ctaRequest: 'Pieprasīt pielāgotu MI risinājumu',
    ctaCustom: 'Uzzināt par pielāgotiem MI rīkiem',
    ctaRetake: 'Atkārtot novērtējumu',
    band: {
      red: {
        label: 'Vēl nav gatavi',
        desc: 'Pamati ir plāni. Koncentrējieties uz vienu skaidru lietošanas gadījumu, tīrākiem datiem un iekšēju īpašnieku pirms liela MI tēriņa.',
      },
      amber: {
        label: 'Daļēji gatavi',
        desc: 'Jums ir bāze, uz kuras būvēt. Vispirms aizveriet vājākās nepilnības, tad veiciet mērķtiecīgu pilotu ar izmērāmiem mērķiem.',
      },
      green: {
        label: 'Gatavi MI',
        desc: 'Esāt spēcīgā pozīcijā, lai ieviestu vai mērogotu MI. Prioritizējiet ražošanas gadījumus un turiet pārvaldību stingru.',
      },
    },
    rec: {
      strategy:
        'Nosauciet vienu procesa ar lielu ietekmi un definējiet veiksmi skaitļos pirms rīku iegādes.',
      data: 'Konsolidējiet datus galvenajai darbplūsmai — ja MI nav tīru ievadu, projekti apstājas.',
      people:
        'Norīkojiet iekšēju īpašnieku ar nedēļas kapacitāti; tikai piegādātāja projekti reti noturas.',
      process:
        'Dokumentējiet un izmēriet šaurumu, ko MI jālabo — apjomu, laiku un izņēmumu rādītāju.',
      tech: 'Apstipriniet API vai uzticamus eksportus no sistēmām, ar kurām MI jāsavienojas.',
      governance:
        'Iegūstiet vadības sponsorēšanu un pamatnoteikumus datu izmantošanai, privātumam un klientu ietekmei.',
    },
    contactIntro:
      'Es pabeidzu MI gatavības novērtējumu un vēlos apspriest pielāgotu MI risinājumu.',
    contactScoreLine: 'Kopējais rezultāts: {score}/100',
    contactBandLine: 'Josla: {band}',
    contactGapsIntro: 'Vājākās jomas:',
    contactGapLine: '{name} ({score}/100)',
  },

  lt: {
    assessmentLanguage: 'Vertinimo kalba',
    quizTitle: 'Vertinimas',
    quizSubtitle:
      'Pasirinkite atsakymą, kuris šiandien geriausiai atitinka jūsų verslą — sąžiningumas geriau už optimizmą.',
    step: 'Klausimas {current} iš {total}',
    progressAria: 'Eiga: klausimas {current} iš {total}',
    back: 'Atgal',
    next: 'Toliau',
    seeResults: 'Žiūrėti mano rezultatą',
    dim: {
      strategy: 'Strategija ir naudojimo atvejai',
      data: 'Duomenų parengtis',
      people: 'Žmonės ir įgūdžiai',
      process: 'Procesai ir operacijos',
      tech: 'Technologijos ir integracija',
      governance: 'Valdymas ir pokyčiai',
    },
    questions: {
      strategy_use_cases: {
        q: 'Ar nustatėte konkrečias verslo problemas, kuriose DI galėtų padėti?',
        a: [
          'Dar ne — vis dar tyrinėjame DI idėją.',
          'Turime idėjų trumpąjį sąrašą, bet niekas neprioritizuota.',
          'Turime 1–2 aiškius naudojimo atvejus, susijusius su verslo tikslu.',
          'Turime prioritetinį DI naudojimo atvejų planą su savininkais.',
        ],
      },
      strategy_roi: {
        q: 'Kaip galvojate apie DI investicijų grąžą?',
        a: [
          'Dar neapibrėžėme sėkmės metrikų.',
          'Tikimės taupymo, bet be skaičių ar grafikų.',
          'Turime apytikslius kaštų/naudos įvertinimus bandomajam projektui.',
          'Sekame ROI su aiškiais KPI ir stabdyti/tęsti taisykle.',
        ],
      },
      data_location: {
        q: 'Kur šiandien yra jūsų kritiniai verslo duomenys?',
        a: [
          'Daugiausia skaičiuoklėse, el. pašte ir popieriuje — sunku rasti.',
          'Keliose sistemose, kurios nesikalba tarpusavyje.',
          'Centriniai įrankiai dengia daugumą operacijų, su kai kuriomis spragomis.',
          'Duomenys centralizuoti, prieinami ir daugiausia integruoti.',
        ],
      },
      data_quality: {
        q: 'Kiek patikimi duomenys, kuriuos duotumėte DI?',
        a: [
          'Dažnai neišsamūs, dubliuoti ar pasenę.',
          'Tinka žmonėms, bet netvarkingi automatizavimui.',
          'Daugiausia švarūs pagrindiniams darbo srautams; reikia šiek tiek valymo.',
          'Dokumentuoti, patvirtinti ir patikimi sprendimams.',
        ],
      },
      people_ownership: {
        q: 'Kas būtų DI iniciatyvos savininkas jūsų versle?',
        a: [
          'Niekas — visiškai pasikliautume tiekėju.',
          'Kažkas suinteresuotas, bet be skirto laiko.',
          'Paskirtas savininkas, galintis tam skirti dalį savaitės.',
          'Aiški vidinė nuosavybė su pajėgumais ir sprendimų teisėmis.',
        ],
      },
      people_skills: {
        q: 'Kaip gerai jūsų komanda pažįsta DI įrankius?',
        a: [
          'Mažai arba nėra praktinės patirties.',
          'Keli žmonės kartais naudoja ChatGPT/Copilot.',
          'Komandos nariai reguliariai naudoja DI kasdieniame darbe.',
          'Galime patys vertinti, konfigūruoti ir tobulinti DI įrankius.',
        ],
      },
      process_visibility: {
        q: 'Ar jūsų pagrindiniai darbo srautai dokumentuoti ir išmatuojami?',
        a: [
          'Jie gyvena žmonių galvose — mažai užrašyta.',
          'Yra kai kurių SOP, bet jie neišsamūs ar pasenę.',
          'Pagrindiniai darbo srautai dokumentuoti su pagrindinėmis metrikas.',
          'Procesai susieti, išmatuoti ir reguliariai peržiūrimi.',
        ],
      },
      process_bottlenecks: {
        q: 'Ar žinote, kur operacijose prarandamas laikas ar pinigai?',
        a: [
          'Jaučiame problemas, bet negalime nurodyti konkrečių kliūčių.',
          'Žinome kelias skausmo vietas iš skundų ar viršvalandžių.',
          'Nustatėme didelio tūrio, pasikartojančias kliūtis.',
          'Matuojame išimčių rodiklius ir vėlavimų kainą pagal procesą.',
        ],
      },
      tech_integration: {
        q: 'Ar dabartinės sistemos gali jungtis prie naujų įrankių per API ar eksportus?',
        a: [
          'Daugiausia uždaros/senos sistemos su rankiniu kopijavimu.',
          'Kai kurios CSV/eksporto parinktys; ribotos gyvos integracijos.',
          'Pagrindinės sistemos turi API arba įrodytus integracijos kelius.',
          'API-pirmas stack su patikimomis integracijomis jau naudojamas.',
        ],
      },
      tech_stack: {
        q: 'Kiek modernus jūsų kasdienis technologijų stack?',
        a: [
          'Stipri priklausomybė nuo popieriaus, telefono ir atskirtų įrankių.',
          'Senesnės programinės įrangos ir kelių debesų įrankių mišinys.',
          'Daugiausia debesų/SaaS įrankiai, dengiantys pagrindines operacijas.',
          'Modernus debesų stack su jau veikiančia automatizacija.',
        ],
      },
      governance_leadership: {
        q: 'Kaip vadovybė žiūri į DI diegimą?',
        a: [
          'Skeptiškai arba neįsitraukusi.',
          'Smalsi, bet dar nėra rėmėjo ar mandato.',
          'Vadovybės rėmėjas palaiko pirmą projektą.',
          'Vadovybė aktyviai varo DI su biudžetu ir pokyčių planais.',
        ],
      },
      governance_risk: {
        q: 'Ar aptarėte duomenų privatumą, klientų sutikimą ir DI riziką?',
        a: [
          'Visai neaptarta.',
          'Neformalus sąmoningumas — be rašytinių taisyklių.',
          'Pagrindinės gairės, kas gali naudoti DI ir kokie duomenys leidžiami.',
          'Rašytos politikos apie privatumą, prieigą ir tiekėjų naudojimą.',
        ],
      },
    },
    resultsTitle: 'Jūsų DI pasirengimo rezultatas',
    resultsSubtitle:
      'Momentiniai rezultatai — tada pasakykite, ar norite pritaikyto DI sprendimo aplink silpniausias sritis.',
    dimensionsTitle: 'Rezultatas pagal dimensiją',
    gapsTitle: 'Tikėtini neefektyvumai, kuriuos taisyti pirmiausia',
    ctaRequest: 'Prašyti pritaikyto DI sprendimo',
    ctaCustom: 'Sužinoti apie pritaikytus DI įrankius',
    ctaRetake: 'Kartoti vertinimą',
    band: {
      red: {
        label: 'Dar nepasiruošę',
        desc: 'Pagrindai silpni. Susitelkite į vieną aiškų naudojimo atvejį, švaresnius duomenis ir vidinį savininką prieš didelę DI išlaidą.',
      },
      amber: {
        label: 'Iš dalies pasiruošę',
        desc: 'Turite bazę, ant kurios kurti. Pirmiausia uždarykite silpniausias spragas, tada paleiskite tikslinį bandomąjį projektą su išmatuojamais tikslais.',
      },
      green: {
        label: 'Pasiruošę DI',
        desc: 'Esate stiprioje pozicijoje diegti ar plėsti DI. Prioritizuokite gamybos atvejus ir laikykite valdymą griežtą.',
      },
    },
    rec: {
      strategy:
        'Įvardykite vieną didelio poveikio procesą ir apibrėžkite sėkmę skaičiais prieš pirkdami įrankius.',
      data: 'Konsoliduokite duomenis pagrindiniam darbo srautui — jei DI neturi švarių įvestčių, projektai sustoja.',
      people:
        'Paskirkite vidinį savininką su savaitės pajėgumais; tik tiekėjo projektai retai išlieka.',
      process:
        'Dokumentuokite ir išmatuokite kliūtį, kurią DI turi taisyti — apimtį, laiką ir išimčių rodiklį.',
      tech: 'Patvirtinkite API arba patikimus eksportus iš sistemų, prie kurių DI turi jungtis.',
      governance:
        'Gaukite vadovybės rėmimą ir pagrindines taisykles dėl duomenų naudojimo, privatumo ir poveikio klientams.',
    },
    contactIntro:
      'Užbaigiau DI pasirengimo vertinimą ir norėčiau aptarti pritaikytą DI sprendimą.',
    contactScoreLine: 'Bendras rezultatas: {score}/100',
    contactBandLine: 'Juosta: {band}',
    contactGapsIntro: 'Silpniausios sritys:',
    contactGapLine: '{name} ({score}/100)',
  },

  mt: {
    assessmentLanguage: 'Lingwa tal-valutazzjoni',
    quizTitle: 'Valutazzjoni',
    quizSubtitle:
      'Agħżel it-tweġiba li l-aħjar tikkorrispondi man-negozju tiegħek illum — l-onestà hija aħjar mill-ottimiżmu.',
    step: 'Mistoqsija {current} minn {total}',
    progressAria: 'Progress: mistoqsija {current} minn {total}',
    back: 'Lura',
    next: 'Li jmiss',
    seeResults: 'Ara l-punteġġ tiegħi',
    dim: {
      strategy: 'Strateġija u każijiet ta’ użu',
      data: 'Tħejjija tad-data',
      people: 'Nies u ħiliet',
      process: 'Proċessi u operazzjonijiet',
      tech: 'Teknoloġija u integrazzjoni',
      governance: 'Governanza u bidla',
    },
    questions: {
      strategy_use_cases: {
        q: 'Identifikajtu problemi konkreti tan-negozju fejn l-AI tista’ tgħin?',
        a: [
          'Għadhom le — għadna nesploraw l-idea tal-AI.',
          'Għandna lista qasira ta’ ideat, imma xejn mhu prijoritizzat.',
          'Għandna 1–2 każijiet ta’ użu ċari marbuta ma’ objettiv tan-negozju.',
          'Għandna roadmap prijoritizzata ta’ każijiet ta’ użu AI b’sidien.',
        ],
      },
      strategy_roi: {
        q: 'Kif taħsbu dwar ir-ritorn fuq l-investiment fl-AI?',
        a: [
          'Għadna ma ddefinijniex metriċi ta’ suċċess.',
          'Nistennew iffrankar, imma mingħajr numri jew skeda.',
          'Għandna stimi approssimattivi ta’ spejjeż/benefiċċji għal pilot.',
          'Nsegwu r-ROI b’KPI ċari u regola waqqaf/kompli.',
        ],
      },
      data_location: {
        q: 'Fejn tgħix id-data kritika tan-negozju tiegħek illum?',
        a: [
          'Prinċipalment spreadsheets, email u karta — diffiċli li ssibha.',
          'F’xi sistemi, imma ma jitkellmux bejniethom.',
          'Għodod ċentrali jkopru ħafna mill-operazzjonijiet, b’xi lakuni.',
          'Id-data hija ċentralizzata, aċċessibbli u l-aktar integrata.',
        ],
      },
      data_quality: {
        q: 'Kemm hija affidabbli d-data li tagħti lill-AI?',
        a: [
          'Spiss mhux kompluta, duplikata jew skaduta.',
          'Użabbli għan-nies, imma mess għall-awtomazzjoni.',
          'L-aktar nadifa għall-workflows ewlenin; hemm bżonn xi tindif.',
          'Dokumentata, validata u fdata għad-deċiżjonijiet.',
        ],
      },
      people_ownership: {
        q: 'Min ikun is-sid ta’ inizjattiva AI ġewwa n-negozju tiegħek?',
        a: [
          'Ħadd — nippoġġu kompletament fuq fornitur.',
          'Xi ħadd interessat, imma mingħajr ħin iddedikat.',
          'Sid innominat li jista’ jqatta’ parti mill-ġimgħa fuqha.',
          'Sjieda interna ċara b’kapaċità u drittijiet ta’ deċiżjoni.',
        ],
      },
      people_skills: {
        q: 'Kemm t-tim tiegħek huwa familjari ma’ għodod tal-AI?',
        a: [
          'Ftit jew l-ebda esperjenza prattika.',
          'Xi nies jużaw ChatGPT/Copilot okkażjonalment.',
          'Il-membri tat-tim jużaw l-AI regolarment fix-xogħol ta’ kuljum.',
          'Nistgħu nevalwaw, nikkonfiguraw u ntejbu l-għodod tal-AI aħna stess.',
        ],
      },
      process_visibility: {
        q: 'Il-workflows ewlenin tiegħek huma dokumentati u kejlabbli?',
        a: [
          'Jgħixu f’moħħ in-nies — ftit huwa miktub.',
          'Hemm xi SOPs, imma mhumiex kompluti jew skaduti.',
          'Il-workflows ewlenin huma dokumentati b’metriċi bażiċi.',
          'Il-proċessi huma mmappjati, imkejla u riveduti regolarment.',
        ],
      },
      process_bottlenecks: {
        q: 'Taf fejn jintilef ħin jew flus fl-operazzjonijiet?',
        a: [
          'Inħossu problemi, imma ma nistgħux nindikaw bottlenecks speċifiċi.',
          'Nafu xi punti ta’ uġigħ minn ilmenti jew overtime.',
          'Identifikajna bottlenecks ta’ volum għoli u ripetittivi.',
          'Nkejlu r-rati ta’ eċċezzjoni u l-ispiża tad-dewmien għal kull proċess.',
        ],
      },
      tech_integration: {
        q: 'Is-sistemi attwali tiegħek jistgħu jgħaqqdu ma’ għodod ġodda permezz ta’ APIs jew esportazzjonijiet?',
        a: [
          'Prinċipalment sistemi magħluqa/legacy b’kopja-pejst manwali.',
          'Xi għażliet CSV/esportazzjoni; integrazzjonijiet live limitati.',
          'Is-sistemi ewlenin għandhom APIs jew mogħdijiet ta’ integrazzjoni ppruvati.',
          'Stack API-first b’integrazzjonijiet affidabbli diġà fl-użu.',
        ],
      },
      tech_stack: {
        q: 'Kemm huwa modern l-istack teknoloġiku ta’ kuljum tiegħek?',
        a: [
          'Dipendenza qawwija fuq karta, telefon u għodod mhux konnessi.',
          'Taħlita ta’ softwer anzjan u xi għodod cloud.',
          'Prinċipalment għodod cloud/SaaS li jkopru l-operazzjonijiet ewlenin.',
          'Stack cloud modern b’awtomazzjoni diġà għaddejja.',
        ],
      },
      governance_leadership: {
        q: 'Kif il-mexxejja jindirizzaw l-adozzjoni tal-AI?',
        a: [
          'Xettiċi jew mhux involuti.',
          'Kurjużi, imma għadhom mingħajr sponsor jew mandat.',
          'Sponsor eżekuttiv jappoġġja l-ewwel proġett.',
          'Il-mexxejja jmexxu l-AI b’mod attiv b’baġit u pjanijiet ta’ bidla.',
        ],
      },
      governance_risk: {
        q: 'Diskutew il-privatezza tad-data, il-kunsens tal-klijenti u r-riskju tal-AI?',
        a: [
          'Ma ġietx diskussa xejn.',
          'Għarfien informali — l-ebda regoli bil-miktub.',
          'Linji gwida bażiċi dwar min jista’ juża l-AI u liema data hija permessa.',
          'Politiki bil-miktub dwar privatezza, aċċess u użu tal-fornituri.',
        ],
      },
    },
    resultsTitle: 'Il-punteġġ tiegħek ta’ tħejjija għall-AI',
    resultsSubtitle:
      'Riżultati immedjati — imbagħad għidilna jekk tridx soluzzjoni AI personalizzata madwar l-oqsma l-aktar dgħajfa tiegħek.',
    dimensionsTitle: 'Punteġġ skont id-dimensjoni',
    gapsTitle: 'Ineffiċjenzi probabbli li tissewwa l-ewwel',
    ctaRequest: 'Itlob soluzzjoni AI personalizzata',
    ctaCustom: 'Tgħallem dwar għodod AI personalizzati',
    ctaRetake: 'Erġa’ agħmel il-valutazzjoni',
    band: {
      red: {
        label: 'Għadhom mhux lesti',
        desc: 'Il-pedamenti huma irqaq. Iffoka fuq każ ta’ użu wieħed ċar, data aktar nadifa, u sid intern qabel nefqa kbira tal-AI.',
      },
      amber: {
        label: 'Parzjalment lesti',
        desc: 'Għandek bażi biex tibni fuqha. Agħlaq l-ewwel il-lakuni l-aktar dgħajfa, imbagħad mexxi pilot iffukat b’objettivi kejlabbli.',
      },
      green: {
        label: 'Lesti għall-AI',
        desc: 'Inti f’pożizzjoni qawwija biex tadotta jew tiskala l-AI. Ippreżenta każijiet ta’ produzzjoni u żomm il-governanza stretta.',
      },
    },
    rec: {
      strategy:
        'Semmi proċess wieħed ta’ impatt għoli u ddefinixxi x’inhu s-suċċess f’numri qabel tixtri l-għodod.',
      data: 'Ikkonsolida d-data għall-workflow ewlieni tiegħek — jekk l-AI ma jkollhiex inputs nodfa, il-proġetti jieqfu.',
      people:
        'Assenja sid intern b’kapaċità ta’ kull ġimgħa; proġetti biss tal-fornitur rari jibqgħu.',
      process:
        'Iddokumenta u kejjel il-bottleneck li trid li l-AI tissewwa — volum, ħin, u rata ta’ eċċezzjoni.',
      tech: 'Ikkonferma APIs jew esportazzjonijiet affidabbli mis-sistemi li l-AI jkollha bżonn tikkonnettja magħhom.',
      governance:
        'Ikseb sponsorship tal-mexxejja u regoli bażiċi għall-użu tad-data, privatezza, u impatt fuq il-klijenti.',
    },
    contactIntro:
      'Temmejt il-punteġġ ta’ tħejjija għall-AI u nixtieq niddiskuti soluzzjoni AI personalizzata.',
    contactScoreLine: 'Punteġġ ġenerali: {score}/100',
    contactBandLine: 'Faxxa: {band}',
    contactGapsIntro: 'L-oqsma l-aktar dgħajfa:',
    contactGapLine: '{name} ({score}/100)',
  },

  pl: {
    assessmentLanguage: 'Język oceny',
    quizTitle: 'Ocena',
    quizSubtitle:
      'Wybierz odpowiedź, która najlepiej opisuje Twoją firmę dziś — uczciwość jest lepsza niż optymizm.',
    step: 'Pytanie {current} z {total}',
    progressAria: 'Postęp: pytanie {current} z {total}',
    back: 'Wstecz',
    next: 'Dalej',
    seeResults: 'Zobacz mój wynik',
    dim: {
      strategy: 'Strategia i przypadki użycia',
      data: 'Gotowość danych',
      people: 'Ludzie i umiejętności',
      process: 'Procesy i operacje',
      tech: 'Technologia i integracja',
      governance: 'Zarządzanie i zmiana',
    },
    questions: {
      strategy_use_cases: {
        q: 'Czy zidentyfikowaliście konkretne problemy biznesowe, w których AI mogłoby pomóc?',
        a: [
          'Jeszcze nie — wciąż badamy pomysł AI.',
          'Mamy krótką listę pomysłów, ale nic nie jest spriorytetyzowane.',
          'Mamy 1–2 jasne przypadki użycia powiązane z celem biznesowym.',
          'Mamy spriorytetyzowaną mapę drogową przypadków AI z właścicielami.',
        ],
      },
      strategy_roi: {
        q: 'Jak myślicie o zwrocie z inwestycji w AI?',
        a: [
          'Nie zdefiniowaliśmy jeszcze metryk sukcesu.',
          'Oczekujemy oszczędności, ale bez liczb ani harmonogramu.',
          'Mamy przybliżone szacunki kosztów/korzyści dla pilota.',
          'Śledzimy ROI jasnymi KPI i regułą stop/kontynuuj.',
        ],
      },
      data_location: {
        q: 'Gdzie dziś znajdują się Wasze krytyczne dane biznesowe?',
        a: [
          'Głównie arkusze, e-mail i papier — trudne do znalezienia.',
          'W kilku systemach, które ze sobą nie rozmawiają.',
          'Centralne narzędzia pokrywają większość operacji, z pewnymi lukami.',
          'Dane są scentralizowane, dostępne i w dużej mierze zintegrowane.',
        ],
      },
      data_quality: {
        q: 'Jak wiarygodne są dane, które podalibyście AI?',
        a: [
          'Często niekompletne, zduplikowane lub nieaktualne.',
          'Użyteczne dla ludzi, ale nieuporządkowane do automatyzacji.',
          'Głównie czyste dla głównych procesów; potrzebne trochę porządkowania.',
          'Udokumentowane, zwalidowane i wiarygodne do decyzji.',
        ],
      },
      people_ownership: {
        q: 'Kto byłby właścicielem inicjatywy AI w Waszej firmie?',
        a: [
          'Nikt — polegaliśmy całkowicie na dostawcy.',
          'Ktoś zainteresowany, ale bez dedykowanego czasu.',
          'Wyznaczony właściciel, który może poświęcić na to część tygodnia.',
          'Jasna wewnętrzna odpowiedzialność z pojemnością i prawami decyzyjnymi.',
        ],
      },
      people_skills: {
        q: 'Jak dobrze Wasz zespół zna narzędzia AI?',
        a: [
          'Mało lub brak praktycznego doświadczenia.',
          'Kilka osób okazjonalnie używa ChatGPT/Copilot.',
          'Członkowie zespołu regularnie używają AI w codziennej pracy.',
          'Potrafimy sami oceniać, konfigurować i ulepszać narzędzia AI.',
        ],
      },
      process_visibility: {
        q: 'Czy kluczowe procesy są udokumentowane i mierzalne?',
        a: [
          'Żyją w głowach ludzi — mało jest zapisane.',
          'Istnieją jakieś SOP, ale są niekompletne lub nieaktualne.',
          'Główne procesy są udokumentowane z podstawowymi metrykami.',
          'Procesy są zmapowane, mierzone i regularnie przeglądane.',
        ],
      },
      process_bottlenecks: {
        q: 'Czy wiecie, gdzie w operacjach traci się czas lub pieniądze?',
        a: [
          'Czujemy problemy, ale nie umiemy wskazać konkretnych wąskich gardeł.',
          'Znamy kilka punktów bólu ze skarg lub nadgodzin.',
          'Zidentyfikowaliśmy wąskie gardła o dużej objętości i powtarzalne.',
          'Mierzymy wskaźniki wyjątków i koszt opóźnień według procesu.',
        ],
      },
      tech_integration: {
        q: 'Czy obecne systemy mogą łączyć się z nowymi narzędziami przez API lub eksporty?',
        a: [
          'Głównie zamknięte/legacy systemy z ręcznym kopiuj-wklej.',
          'Niektóre opcje CSV/eksportu; ograniczone integracje na żywo.',
          'Kluczowe systemy mają API lub sprawdzone ścieżki integracji.',
          'Stack API-first z niezawodnymi integracjami już w użyciu.',
        ],
      },
      tech_stack: {
        q: 'Jak nowoczesny jest Wasz codzienny stos technologiczny?',
        a: [
          'Silne poleganie na papierze, telefonie i rozłączonych narzędziach.',
          'Mix starszego oprogramowania i kilku narzędzi chmurowych.',
          'Głównie narzędzia cloud/SaaS pokrywające podstawowe operacje.',
          'Nowoczesny stos chmurowy z już działającą automatyzacją.',
        ],
      },
      governance_leadership: {
        q: 'Jak kierownictwo podchodzi do wdrożenia AI?',
        a: [
          'Sceptycznie lub niezaangażowane.',
          'Ciekawi, ale jeszcze bez sponsora ani mandatu.',
          'Sponsor wykonawczy wspiera pierwszy projekt.',
          'Kierownictwo aktywnie prowadzi AI z budżetem i planami zmian.',
        ],
      },
      governance_risk: {
        q: 'Czy omówiliście prywatność danych, zgodę klientów i ryzyko AI?',
        a: [
          'W ogóle nie omówione.',
          'Nieformalna świadomość — bez pisemnych zasad.',
          'Podstawowe wytyczne, kto może używać AI i jakie dane są dozwolone.',
          'Pisemne polityki o prywatności, dostępie i użyciu dostawców.',
        ],
      },
    },
    resultsTitle: 'Wasza ocena gotowości na AI',
    resultsSubtitle:
      'Natychmiastowe wyniki — potem powiedzcie nam, czy chcecie niestandardowe rozwiązanie AI wokół najsłabszych obszarów.',
    dimensionsTitle: 'Wynik według wymiaru',
    gapsTitle: 'Prawdopodobne nieefektywności do naprawienia najpierw',
    ctaRequest: 'Poproś o niestandardowe rozwiązanie AI',
    ctaCustom: 'Dowiedz się o niestandardowych narzędziach AI',
    ctaRetake: 'Powtórz ocenę',
    band: {
      red: {
        label: 'Jeszcze niegotowi',
        desc: 'Podstawy są cienkie. Skupcie się na jednym jasnym przypadku użycia, czystszych danych i wewnętrznym właścicielu przed dużym wydatkiem na AI.',
      },
      amber: {
        label: 'Częściowo gotowi',
        desc: 'Macie bazę, na której można budować. Najpierw zamknijcie najsłabsze luki, potem uruchomcie celowany pilotaż z mierzalnymi celami.',
      },
      green: {
        label: 'Gotowi na AI',
        desc: 'Jesteście w silnej pozycji, by przyjąć lub skalować AI. Priorytetyzujcie przypadki produkcyjne i utrzymujcie ścisłe zarządzanie.',
      },
    },
    rec: {
      strategy:
        'Nazwijcie jeden proces o dużym wpływie i zdefiniujcie sukces w liczbach przed zakupem narzędzi.',
      data: 'Skonsolidujcie dane dla głównego procesu — jeśli AI nie ma czystych wejść, projekty stoją.',
      people:
        'Wyznaczcie wewnętrznego właściciela z tygodniową pojemnością; projekty tylko u dostawcy rzadko się utrzymują.',
      process:
        'Udokumentujcie i zmierzcie wąskie gardło, które AI ma naprawić — wolumen, czas i wskaźnik wyjątków.',
      tech: 'Potwierdźcie API lub niezawodne eksporty z systemów, z którymi AI musi się połączyć.',
      governance:
        'Uzyskajcie sponsoring kierownictwa i podstawowe zasady dotyczące danych, prywatności i wpływu na klientów.',
    },
    contactIntro:
      'Ukończyłem/am ocenę gotowości na AI i chciałbym/chciałabym omówić niestandardowe rozwiązanie AI.',
    contactScoreLine: 'Wynik ogólny: {score}/100',
    contactBandLine: 'Pasmo: {band}',
    contactGapsIntro: 'Najsłabsze obszary:',
    contactGapLine: '{name} ({score}/100)',
  },

  pt: {
    assessmentLanguage: 'Idioma da avaliação',
    quizTitle: 'Avaliação',
    quizSubtitle:
      'Escolha a resposta que melhor corresponde ao seu negócio hoje — honestidade vale mais do que otimismo.',
    step: 'Pergunta {current} de {total}',
    progressAria: 'Progresso: pergunta {current} de {total}',
    back: 'Voltar',
    next: 'Seguinte',
    seeResults: 'Ver a minha pontuação',
    dim: {
      strategy: 'Estratégia e casos de uso',
      data: 'Preparação dos dados',
      people: 'Pessoas e competências',
      process: 'Processos e operações',
      tech: 'Tech e integração',
      governance: 'Governação e mudança',
    },
    questions: {
      strategy_use_cases: {
        q: 'Identificaram problemas de negócio concretos em que a IA poderia ajudar?',
        a: [
          'Ainda não — ainda estamos a explorar a ideia de IA.',
          'Temos uma lista curta de ideias, mas nada priorizado.',
          'Temos 1–2 casos de uso claros ligados a um objetivo de negócio.',
          'Temos um roadmap priorizado de casos de uso de IA com responsáveis.',
        ],
      },
      strategy_roi: {
        q: 'Como pensam no retorno do investimento em IA?',
        a: [
          'Ainda não definimos métricas de sucesso.',
          'Esperamos poupanças, mas sem números nem calendário.',
          'Temos estimativas aproximadas de custo/benefício para um piloto.',
          'Acompanhamos o ROI com KPIs claros e uma regra parar/continuar.',
        ],
      },
      data_location: {
        q: 'Onde vivem hoje os vossos dados de negócio críticos?',
        a: [
          'Sobretudo folhas de cálculo, e-mail e papel — difíceis de encontrar.',
          'Em alguns sistemas que não comunicam entre si.',
          'Ferramentas centrais cobrem a maior parte das operações, com algumas lacunas.',
          'Os dados estão centralizados, acessíveis e em grande parte integrados.',
        ],
      },
      data_quality: {
        q: 'Quão fiáveis são os dados que dariam à IA?',
        a: [
          'Frequentemente incompletos, duplicados ou desatualizados.',
          'Úteis para humanos, mas desorganizados para automação.',
          'Maioritariamente limpos para os fluxos principais; precisa de alguma limpeza.',
          'Documentados, validados e fiáveis para decisões.',
        ],
      },
      people_ownership: {
        q: 'Quem seria o responsável por uma iniciativa de IA na vossa empresa?',
        a: [
          'Ninguém — dependeríamos totalmente de um fornecedor.',
          'Alguém interessado, mas sem tempo dedicado.',
          'Um responsável nomeado que pode dedicar parte da semana.',
          'Ownership interno claro com capacidade e direitos de decisão.',
        ],
      },
      people_skills: {
        q: 'Quão familiarizada está a vossa equipa com ferramentas de IA?',
        a: [
          'Pouca ou nenhuma experiência prática.',
          'Algumas pessoas usam ChatGPT/Copilot ocasionalmente.',
          'Os membros da equipa usam IA regularmente no trabalho diário.',
          'Conseguimos avaliar, configurar e melhorar ferramentas de IA nós mesmos.',
        ],
      },
      process_visibility: {
        q: 'Os vossos fluxos de trabalho principais estão documentados e mensuráveis?',
        a: [
          'Vivem na cabeça das pessoas — pouco está escrito.',
          'Existem alguns SOPs, mas estão incompletos ou desatualizados.',
          'Os fluxos principais estão documentados com métricas básicas.',
          'Os processos estão mapeados, medidos e revistos regularmente.',
        ],
      },
      process_bottlenecks: {
        q: 'Sabem onde se perde tempo ou dinheiro nas operações?',
        a: [
          'Sentimos problemas, mas não conseguimos apontar gargalos específicos.',
          'Conhecemos alguns pontos de dor por reclamações ou horas extra.',
          'Identificámos gargalos de alto volume e repetitivos.',
          'Medimos taxas de exceção e custo de atrasos por processo.',
        ],
      },
      tech_integration: {
        q: 'Os vossos sistemas atuais conseguem ligar-se a novas ferramentas via APIs ou exportações?',
        a: [
          'Sobretudo sistemas fechados/legacy com copiar-colar manual.',
          'Algumas opções CSV/exportação; integrações live limitadas.',
          'Os sistemas-chave têm APIs ou caminhos de integração comprovados.',
          'Stack API-first com integrações fiáveis já em uso.',
        ],
      },
      tech_stack: {
        q: 'Quão moderna é a vossa stack tecnológica do dia a dia?',
        a: [
          'Forte dependência de papel, telefone e ferramentas desligadas.',
          'Mistura de software mais antigo e algumas ferramentas cloud.',
          'Sobretudo ferramentas cloud/SaaS que cobrem as operações principais.',
          'Stack cloud moderna com automação já a correr.',
        ],
      },
      governance_leadership: {
        q: 'Como a liderança aborda a adoção de IA?',
        a: [
          'Cética ou não envolvida.',
          'Curiosa, mas ainda sem sponsor nem mandato.',
          'Um sponsor executivo apoia um primeiro projeto.',
          'A liderança impulsiona ativamente a IA com orçamento e planos de mudança.',
        ],
      },
      governance_risk: {
        q: 'Discutiram privacidade de dados, consentimento do cliente e risco de IA?',
        a: [
          'Não discutido de todo.',
          'Consciência informal — sem regras escritas.',
          'Diretrizes básicas sobre quem pode usar IA e que dados são permitidos.',
          'Políticas escritas sobre privacidade, acesso e uso de fornecedores.',
        ],
      },
    },
    resultsTitle: 'A vossa pontuação de prontidão para IA',
    resultsSubtitle:
      'Resultados instantâneos — depois digam-nos se querem uma solução de IA à medida em torno das áreas mais fracas.',
    dimensionsTitle: 'Pontuação por dimensão',
    gapsTitle: 'Ineficiências prováveis a corrigir primeiro',
    ctaRequest: 'Pedir uma solução de IA à medida',
    ctaCustom: 'Saber mais sobre ferramentas de IA à medida',
    ctaRetake: 'Repetir a avaliação',
    band: {
      red: {
        label: 'Ainda não prontos',
        desc: 'As bases são frágeis. Foquem-se num caso de uso claro, dados mais limpos e um responsável interno antes de um grande gasto em IA.',
      },
      amber: {
        label: 'Parcialmente prontos',
        desc: 'Têm uma base para construir. Fechem primeiro as lacunas mais fracas e depois lancem um piloto focado com objetivos mensuráveis.',
      },
      green: {
        label: 'Prontos para IA',
        desc: 'Estão numa posição forte para adotar ou escalar IA. Priorizem casos de produção e mantenham a governação apertada.',
      },
    },
    rec: {
      strategy:
        'Nomeiem um processo de alto impacto e definam o sucesso em números antes de comprar ferramentas.',
      data: 'Consolidem os dados do fluxo principal — se a IA não tiver inputs limpos, os projetos param.',
      people:
        'Atribuam um responsável interno com capacidade semanal; projetos só no fornecedor raramente ficam.',
      process:
        'Documentem e meçam o gargalo que querem que a IA resolva — volume, tempo e taxa de exceção.',
      tech: 'Confirmem APIs ou exportações fiáveis dos sistemas a que a IA precisaria de se ligar.',
      governance:
        'Obtenham sponsorship da liderança e regras básicas para dados, privacidade e impacto no cliente.',
    },
    contactIntro:
      'Concluí a pontuação de prontidão para IA e gostaria de discutir uma solução de IA à medida.',
    contactScoreLine: 'Pontuação global: {score}/100',
    contactBandLine: 'Faixa: {band}',
    contactGapsIntro: 'Áreas mais fracas:',
    contactGapLine: '{name} ({score}/100)',
  },

  ro: {
    assessmentLanguage: 'Limba evaluării',
    quizTitle: 'Evaluare',
    quizSubtitle:
      'Alegeți răspunsul care se potrivește cel mai bine afacerii voastre azi — onestitatea bate optimismul.',
    step: 'Întrebarea {current} din {total}',
    progressAria: 'Progres: întrebarea {current} din {total}',
    back: 'Înapoi',
    next: 'Înainte',
    seeResults: 'Vezi scorul meu',
    dim: {
      strategy: 'Strategie și cazuri de utilizare',
      data: 'Pregătirea datelor',
      people: 'Oameni și competențe',
      process: 'Procese și operațiuni',
      tech: 'Tehnologie și integrare',
      governance: 'Guvernanță și schimbare',
    },
    questions: {
      strategy_use_cases: {
        q: 'Ați identificat probleme concrete de business unde AI ar putea ajuta?',
        a: [
          'Nu încă — încă explorăm ideea de AI.',
          'Avem o listă scurtă de idei, dar nimic nu e prioritizat.',
          'Avem 1–2 cazuri de utilizare clare legate de un obiectiv de business.',
          'Avem o foaie de parcurs prioritizată de cazuri AI cu responsabili.',
        ],
      },
      strategy_roi: {
        q: 'Cum gândiți returnarea investiției în AI?',
        a: [
          'Nu am definit încă metrici de succes.',
          'Ne așteptăm la economii, dar fără cifre sau calendar.',
          'Avem estimări aproximative cost/beneficiu pentru un pilot.',
          'Urmărim ROI cu KPI clare și o regulă oprește/continuă.',
        ],
      },
      data_location: {
        q: 'Unde trăiesc azi datele critice de business?',
        a: [
          'Mai ales foi de calcul, e-mail și hârtie — greu de găsit.',
          'În câteva sisteme care nu comunică între ele.',
          'Instrumente centrale acoperă majoritatea operațiunilor, cu unele goluri.',
          'Datele sunt centralizate, accesibile și în mare parte integrate.',
        ],
      },
      data_quality: {
        q: 'Cât de fiabile sunt datele pe care le-ați da AI?',
        a: [
          'Adesea incomplete, duplicate sau învechite.',
          'Utilizabile pentru oameni, dar dezordonate pentru automatizare.',
          'În mare parte curate pentru fluxurile principale; e nevoie de ceva curățenie.',
          'Documentate, validate și de încredere pentru decizii.',
        ],
      },
      people_ownership: {
        q: 'Cine ar deține o inițiativă AI în afacerea voastră?',
        a: [
          'Nimeni — ne-am baza complet pe un furnizor.',
          'Cineva interesat, dar fără timp dedicat.',
          'Un responsabil numit care poate dedica o parte din săptămână.',
          'Ownership intern clar cu capacitate și drepturi de decizie.',
        ],
      },
      people_skills: {
        q: 'Cât de familiară este echipa voastră cu instrumentele AI?',
        a: [
          'Puțină sau deloc experiență practică.',
          'Câțiva oameni folosesc ChatGPT/Copilot ocazional.',
          'Membrii echipei folosesc regulat AI în munca zilnică.',
          'Putem evalua, configura și îmbunătăți instrumente AI noi înșine.',
        ],
      },
      process_visibility: {
        q: 'Fluxurile de lucru cheie sunt documentate și măsurabile?',
        a: [
          'Trăiesc în mințile oamenilor — puțin e scris.',
          'Există unele SOP, dar sunt incomplete sau învechite.',
          'Fluxurile principale sunt documentate cu metrici de bază.',
          'Procesele sunt mapate, măsurate și revizuite regulat.',
        ],
      },
      process_bottlenecks: {
        q: 'Știți unde se pierd timp sau bani în operațiuni?',
        a: [
          'Simțim probleme, dar nu putem indica blocaje specifice.',
          'Cunoaștem câteva puncte de durere din reclamații sau ore suplimentare.',
          'Am identificat blocaje de volum mare și repetitive.',
          'Măsurăm ratele de excepție și costul întârzierilor pe proces.',
        ],
      },
      tech_integration: {
        q: 'Sistemele actuale se pot conecta la instrumente noi prin API sau exporturi?',
        a: [
          'Mai ales sisteme închise/legacy cu copiere-lipire manuală.',
          'Unele opțiuni CSV/export; integrări live limitate.',
          'Sistemele cheie au API sau căi de integrare dovedite.',
          'Stack API-first cu integrări fiabile deja în uz.',
        ],
      },
      tech_stack: {
        q: 'Cât de modernă este stack-ul tehnologic zilnic?',
        a: [
          'Dependență puternică de hârtie, telefon și instrumente deconectate.',
          'Mix de software mai vechi și câteva instrumente cloud.',
          'Mai ales instrumente cloud/SaaS care acoperă operațiunile de bază.',
          'Stack cloud modern cu automatizare deja în funcțiune.',
        ],
      },
      governance_leadership: {
        q: 'Cum abordează leadershipul adoptarea AI?',
        a: [
          'Sceptic sau neimplicat.',
          'Curios, dar încă fără sponsor sau mandat.',
          'Un sponsor executiv susține un prim proiect.',
          'Leadershipul conduce activ AI cu buget și planuri de schimbare.',
        ],
      },
      governance_risk: {
        q: 'Ați discutat confidențialitatea datelor, consimțământul clienților și riscul AI?',
        a: [
          'Deloc discutat.',
          'Conștientizare informală — fără reguli scrise.',
          'Ghiduri de bază despre cine poate folosi AI și ce date sunt permise.',
          'Politici scrise despre confidențialitate, acces și utilizarea furnizorilor.',
        ],
      },
    },
    resultsTitle: 'Scorul vostru de pregătire pentru AI',
    resultsSubtitle:
      'Rezultate instantanee — apoi spuneți-ne dacă doriți o soluție AI personalizată în jurul celor mai slabe zone.',
    dimensionsTitle: 'Scor pe dimensiune',
    gapsTitle: 'Ineficiențe probabile de remediat mai întâi',
    ctaRequest: 'Solicitați o soluție AI personalizată',
    ctaCustom: 'Aflați despre instrumente AI personalizate',
    ctaRetake: 'Refaceți evaluarea',
    band: {
      red: {
        label: 'Nu sunteți gata încă',
        desc: 'Bazele sunt subțiri. Concentrați-vă pe un caz de utilizare clar, date mai curate și un responsabil intern înainte de o cheltuială mare pe AI.',
      },
      amber: {
        label: 'Parțial gata',
        desc: 'Aveți o bază pe care să construiți. Închideți mai întâi cele mai slabe goluri, apoi rulați un pilot țintit cu obiective măsurabile.',
      },
      green: {
        label: 'Pregătiți pentru AI',
        desc: 'Sunteți într-o poziție puternică să adoptați sau să scalați AI. Prioritizați cazurile de producție și mențineți guvernanța strânsă.',
      },
    },
    rec: {
      strategy:
        'Numiți un proces cu impact mare și definiți succesul în cifre înainte de a cumpăra instrumente.',
      data: 'Consolidați datele pentru fluxul principal — dacă AI nu are inputuri curate, proiectele se blochează.',
      people:
        'Alocați un responsabil intern cu capacitate săptămânală; proiectele doar la furnizor rar rămân.',
      process:
        'Documentați și măsurați blocajul pe care vreți ca AI să-l rezolve — volum, timp și rata de excepție.',
      tech: 'Confirmați API-uri sau exporturi fiabile din sistemele la care AI ar trebui să se conecteze.',
      governance:
        'Obțineți sponsorizarea leadershipului și reguli de bază pentru date, confidențialitate și impact asupra clienților.',
    },
    contactIntro:
      'Am finalizat scorul de pregătire pentru AI și aș dori să discut o soluție AI personalizată.',
    contactScoreLine: 'Scor general: {score}/100',
    contactBandLine: 'Bandă: {band}',
    contactGapsIntro: 'Cele mai slabe zone:',
    contactGapLine: '{name} ({score}/100)',
  },

  ru: {
    assessmentLanguage: 'Язык оценки',
    quizTitle: 'Оценка',
    quizSubtitle:
      'Выберите ответ, который лучше всего описывает ваш бизнес сегодня — честность важнее оптимизма.',
    step: 'Вопрос {current} из {total}',
    progressAria: 'Прогресс: вопрос {current} из {total}',
    back: 'Назад',
    next: 'Далее',
    seeResults: 'Посмотреть мой результат',
    dim: {
      strategy: 'Стратегия и сценарии применения',
      data: 'Готовность данных',
      people: 'Люди и навыки',
      process: 'Процессы и операции',
      tech: 'Технологии и интеграция',
      governance: 'Управление и изменения',
    },
    questions: {
      strategy_use_cases: {
        q: 'Определили ли вы конкретные бизнес-проблемы, где ИИ мог бы помочь?',
        a: [
          'Ещё нет — мы всё ещё изучаем идею ИИ.',
          'У нас есть короткий список идей, но ничего не приоритизировано.',
          'У нас есть 1–2 чётких сценария, привязанных к бизнес-цели.',
          'У нас есть приоритизированная дорожная карта сценариев ИИ с ответственными.',
        ],
      },
      strategy_roi: {
        q: 'Как вы думаете о возврате инвестиций в ИИ?',
        a: [
          'Мы ещё не определили метрики успеха.',
          'Ожидаем экономию, но без цифр или сроков.',
          'Есть приблизительные оценки затрат/выгод для пилота.',
          'Отслеживаем ROI с чёткими KPI и правилом стоп/продолжить.',
        ],
      },
      data_location: {
        q: 'Где сегодня живут ваши критические бизнес-данные?',
        a: [
          'В основном таблицы, почта и бумага — трудно найти.',
          'В нескольких системах, которые не общаются друг с другом.',
          'Центральные инструменты покрывают большую часть операций, с пробелами.',
          'Данные централизованы, доступны и в значительной степени интегрированы.',
        ],
      },
      data_quality: {
        q: 'Насколько надёжны данные, которые вы бы подали в ИИ?',
        a: [
          'Часто неполные, дублирующиеся или устаревшие.',
          'Пригодны для людей, но хаотичны для автоматизации.',
          'В основном чистые для главных процессов; нужна некоторая очистка.',
          'Документированы, проверены и надёжны для решений.',
        ],
      },
      people_ownership: {
        q: 'Кто был бы владельцем инициативы ИИ в вашем бизнесе?',
        a: [
          'Никто — мы бы полностью полагались на поставщика.',
          'Кто-то заинтересованный, но без выделенного времени.',
          'Назначенный владелец, который может уделять часть недели.',
          'Чёткое внутреннее владение с ресурсами и правами на решения.',
        ],
      },
      people_skills: {
        q: 'Насколько ваша команда знакома с инструментами ИИ?',
        a: [
          'Мало или нет практического опыта.',
          'Несколько человек иногда используют ChatGPT/Copilot.',
          'Члены команды регулярно используют ИИ в повседневной работе.',
          'Мы можем сами оценивать, настраивать и улучшать инструменты ИИ.',
        ],
      },
      process_visibility: {
        q: 'Документированы ли и измеримы ваши ключевые рабочие процессы?',
        a: [
          'Они живут в головах людей — мало что записано.',
          'Есть некоторые SOP, но они неполные или устаревшие.',
          'Основные процессы документированы с базовыми метриками.',
          'Процессы описаны, измеряются и регулярно пересматриваются.',
        ],
      },
      process_bottlenecks: {
        q: 'Знаете ли вы, где в операциях теряется время или деньги?',
        a: [
          'Чувствуем проблемы, но не можем указать конкретные узкие места.',
          'Знаем несколько болевых точек из жалоб или сверхурочных.',
          'Определили узкие места с большим объёмом и повторяемостью.',
          'Измеряем долю исключений и стоимость задержек по процессам.',
        ],
      },
      tech_integration: {
        q: 'Могут ли ваши текущие системы подключаться к новым инструментам через API или экспорт?',
        a: [
          'В основном закрытые/устаревшие системы с ручным копированием.',
          'Есть CSV/экспорт; ограниченные живые интеграции.',
          'Ключевые системы имеют API или проверенные пути интеграции.',
          'Стек с приоритетом API и надёжными интеграциями уже в использовании.',
        ],
      },
      tech_stack: {
        q: 'Насколько современен ваш повседневный технологический стек?',
        a: [
          'Сильная зависимость от бумаги, телефона и разрозненных инструментов.',
          'Смесь старого ПО и нескольких облачных инструментов.',
          'В основном облачные/SaaS инструменты, покрывающие основные операции.',
          'Современный облачный стек с уже работающей автоматизацией.',
        ],
      },
      governance_leadership: {
        q: 'Как руководство относится к внедрению ИИ?',
        a: [
          'Скептично или не вовлечено.',
          'Любопытно, но ещё нет спонсора или мандата.',
          'Исполнительный спонсор поддерживает первый проект.',
          'Руководство активно ведёт ИИ с бюджетом и планами изменений.',
        ],
      },
      governance_risk: {
        q: 'Обсуждали ли вы конфиденциальность данных, согласие клиентов и риски ИИ?',
        a: [
          'Совсем не обсуждалось.',
          'Неформальная осведомлённость — без письменных правил.',
          'Базовые правила, кто может использовать ИИ и какие данные разрешены.',
          'Письменные политики по конфиденциальности, доступу и работе с поставщиками.',
        ],
      },
    },
    resultsTitle: 'Ваш балл готовности к ИИ',
    resultsSubtitle:
      'Мгновенные результаты — затем скажите, хотите ли вы индивидуальное ИИ-решение вокруг самых слабых зон.',
    dimensionsTitle: 'Балл по измерению',
    gapsTitle: 'Вероятные неэффективности, которые стоит исправить в первую очередь',
    ctaRequest: 'Запросить индивидуальное ИИ-решение',
    ctaCustom: 'Узнать об индивидуальных ИИ-инструментах',
    ctaRetake: 'Пройти оценку снова',
    band: {
      red: {
        label: 'Пока не готовы',
        desc: 'Основы слабые. Сосредоточьтесь на одном чётком сценарии, более чистых данных и внутреннем владельце до крупных трат на ИИ.',
      },
      amber: {
        label: 'Частично готовы',
        desc: 'У вас есть база для роста. Сначала закройте самые слабые пробелы, затем запустите целевой пилот с измеримыми целями.',
      },
      green: {
        label: 'Готовы к ИИ',
        desc: 'Вы в сильной позиции для внедрения или масштабирования ИИ. Приоритезируйте производственные сценарии и держите управление жёстким.',
      },
    },
    rec: {
      strategy:
        'Назовите один процесс с высоким эффектом и определите успех в цифрах до покупки инструментов.',
      data: 'Консолидируйте данные для главного процесса — если у ИИ нет чистых входов, проекты встанут.',
      people:
        'Назначьте внутреннего владельца с еженедельным ресурсом; проекты только у поставщика редко приживаются.',
      process:
        'Документируйте и измерьте узкое место, которое должен исправить ИИ — объём, время и долю исключений.',
      tech: 'Подтвердите API или надёжный экспорт из систем, к которым ИИ должен подключиться.',
      governance:
        'Обеспечьте спонсорство руководства и базовые правила по данным, конфиденциальности и влиянию на клиентов.',
    },
    contactIntro:
      'Я прошёл(ла) оценку готовности к ИИ и хотел(а) бы обсудить индивидуальное ИИ-решение.',
    contactScoreLine: 'Общий балл: {score}/100',
    contactBandLine: 'Зона: {band}',
    contactGapsIntro: 'Самые слабые области:',
    contactGapLine: '{name} ({score}/100)',
  },

  sk: {
    assessmentLanguage: 'Jazyk hodnotenia',
    quizTitle: 'Hodnotenie',
    quizSubtitle:
      'Vyberte odpoveď, ktorá dnes najlepšie zodpovedá vášmu podnikaniu — úprimnosť je lepšia ako optimizmus.',
    step: 'Otázka {current} z {total}',
    progressAria: 'Priebeh: otázka {current} z {total}',
    back: 'Späť',
    next: 'Ďalej',
    seeResults: 'Zobraziť moje skóre',
    dim: {
      strategy: 'Stratégia a prípady použitia',
      data: 'Pripravenosť dát',
      people: 'Ľudia a zručnosti',
      process: 'Procesy a prevádzka',
      tech: 'Technológie a integrácia',
      governance: 'Riadenie a zmena',
    },
    questions: {
      strategy_use_cases: {
        q: 'Identifikovali ste konkrétne obchodné problémy, kde by AI mohla pomôcť?',
        a: [
          'Ešte nie — stále skúmame myšlienku AI.',
          'Máme užší zoznam nápadov, ale nič nie je prioritizované.',
          'Máme 1–2 jasné prípady použitia viazané na obchodný cieľ.',
          'Máme prioritizovaný plán AI prípadov s vlastníkmi.',
        ],
      },
      strategy_roi: {
        q: 'Ako uvažujete o návratnosti investície do AI?',
        a: [
          'Ešte sme nedefinovali metriky úspechu.',
          'Očakávame úspory, ale bez čísel alebo časového rámca.',
          'Máme hrubé odhady nákladov/prínosov pre pilot.',
          'Sledujeme ROI jasnými KPI a pravidlom zastaviť/pokračovať.',
        ],
      },
      data_location: {
        q: 'Kde dnes žijú vaše kritické obchodné dáta?',
        a: [
          'Väčšinou tabuľky, e-maily a papier — ťažko sa hľadajú.',
          'V niekoľkých systémoch, ktoré spolu nekomunikujú.',
          'Centrálne nástroje pokrývajú väčšinu prevádzky, s niektorými medzerami.',
          'Dáta sú centralizované, dostupné a vo veľkej miere integrované.',
        ],
      },
      data_quality: {
        q: 'Aké spoľahlivé sú dáta, ktoré by ste AI zadávali?',
        a: [
          'Často neúplné, duplicitné alebo zastarané.',
          'Použiteľné pre ľudí, ale chaotické pre automatizáciu.',
          'Väčšinou čisté pre hlavné pracovné postupy; potrebný čiastočný upratok.',
          'Dokumentované, overené a dôveryhodné pre rozhodnutia.',
        ],
      },
      people_ownership: {
        q: 'Kto by vlastnil AI iniciatívu vo vašom podnikaní?',
        a: [
          'Nikto — spoliehali by sme sa úplne na dodávateľa.',
          'Niekto zainteresovaný, ale bez vyhradeného času.',
          'Menovaný vlastník, ktorý tomu môže venovať časť týždňa.',
          'Jasné interné vlastníctvo s kapacitou a rozhodovacími právami.',
        ],
      },
      people_skills: {
        q: 'Ako dobre váš tím pozná nástroje AI?',
        a: [
          'Málo alebo žiadna praktická skúsenosť.',
          'Niekoľko ľudí príležitostne používa ChatGPT/Copilot.',
          'Členovia tímu pravidelne používajú AI v každodennej práci.',
          'Dokážeme sami hodnotiť, konfigurovať a zlepšovať nástroje AI.',
        ],
      },
      process_visibility: {
        q: 'Sú vaše kľúčové pracovné postupy zdokumentované a merateľné?',
        a: [
          'Žijú v hlavách ľudí — málo je zapísané.',
          'Niektoré SOP existujú, ale sú neúplné alebo zastarané.',
          'Hlavné pracovné postupy sú zdokumentované so základnými metrikami.',
          'Procesy sú zmapované, merané a pravidelne prehodnocované.',
        ],
      },
      process_bottlenecks: {
        q: 'Viete, kde sa v prevádzke stráca čas alebo peniaze?',
        a: [
          'Cítime problémy, ale nevieme ukázať konkrétne úzke miesta.',
          'Poznáme niekoľko bolestivých bodov zo sťažností alebo nadčasov.',
          'Identifikovali sme úzke miesta s vysokým objemom a opakovaním.',
          'Meráme mieru výnimiek a náklady oneskorení podľa procesu.',
        ],
      },
      tech_integration: {
        q: 'Môžu sa vaše súčasné systémy pripojiť k novým nástrojom cez API alebo exporty?',
        a: [
          'Väčšinou uzavreté/legacy systémy s ručným kopírovaním.',
          'Niektoré CSV/export možnosti; obmedzené živé integrácie.',
          'Kľúčové systémy majú API alebo overené cesty integrácie.',
          'Stack zameraný na API so spoľahlivými integráciami už v prevádzke.',
        ],
      },
      tech_stack: {
        q: 'Ako moderný je váš každodenný technologický stack?',
        a: [
          'Silná závislosť od papiera, telefónu a neprepojených nástrojov.',
          'Mix staršieho softvéru a niekoľkých cloudových nástrojov.',
          'Väčšinou cloud/SaaS nástroje pokrývajúce kľúčovú prevádzku.',
          'Moderný cloudový stack s už bežiacou automatizáciou.',
        ],
      },
      governance_leadership: {
        q: 'Ako vedenie pristupuje k prijatiu AI?',
        a: [
          'Skepticky alebo nie je zapojené.',
          'Zvedavo, ale zatiaľ bez sponzora alebo mandátu.',
          'Výkonný sponzor podporuje prvý projekt.',
          'Vedenie aktívne riadi AI s rozpočtom a plánmi zmien.',
        ],
      },
      governance_risk: {
        q: 'Diskutovali ste o ochrane dát, súhlase zákazníkov a riziku AI?',
        a: [
          'Vôbec sa o tom nediskutovalo.',
          'Neformálne povedomie — bez písomných pravidiel.',
          'Základné pokyny, kto môže používať AI a aké dáta sú povolené.',
          'Písomné politiky o súkromí, prístupe a používaní dodávateľov.',
        ],
      },
    },
    resultsTitle: 'Vaše skóre pripravenosti na AI',
    resultsSubtitle:
      'Okamžité výsledky — potom nám povedzte, či chcete vlastné AI riešenie okolo vašich najslabších oblastí.',
    dimensionsTitle: 'Skóre podľa dimenzie',
    gapsTitle: 'Pravdepodobné neefektivity na vyriešenie ako prvé',
    ctaRequest: 'Požiadať o vlastné AI riešenie',
    ctaCustom: 'Zistiť viac o vlastných AI nástrojoch',
    ctaRetake: 'Opakovať hodnotenie',
    band: {
      red: {
        label: 'Zatiaľ nepripravení',
        desc: 'Základy sú slabé. Zamerajte sa na jeden jasný prípad použitia, čistejšie dáta a interného vlastníka pred veľkým výdavkom na AI.',
      },
      amber: {
        label: 'Čiastočne pripravení',
        desc: 'Máte základ, na ktorom stavať. Najprv uzavrite najslabšie medzery, potom spustite cielený pilot s merateľnými cieľmi.',
      },
      green: {
        label: 'Pripravení na AI',
        desc: 'Ste v silnej pozícii prijať alebo škálovať AI. Prioritizujte produkčné prípady a udržujte pevné riadenie.',
      },
    },
    rec: {
      strategy:
        'Pomenujte jeden proces s veľkým dopadom a definujte úspech v číslach pred nákupom nástrojov.',
      data: 'Konsolidujte dáta pre hlavný pracovný postup — ak AI nemá čisté vstupy, projekty sa zastavia.',
      people:
        'Priraďte interného vlastníka s týždennou kapacitou; projekty len s dodávateľom zriedka vydržia.',
      process:
        'Zdokumentujte a zmerajte úzke miesto, ktoré má AI opraviť — objem, čas a mieru výnimiek.',
      tech: 'Potvrďte API alebo spoľahlivé exporty zo systémov, ku ktorým sa AI potrebuje pripojiť.',
      governance:
        'Získajte sponzorstvo vedenia a základné pravidlá pre dáta, súkromie a dopad na zákazníkov.',
    },
    contactIntro:
      'Dokončil/a som hodnotenie pripravenosti na AI a rád/a by som diskutoval/a o vlastnom AI riešení.',
    contactScoreLine: 'Celkové skóre: {score}/100',
    contactBandLine: 'Pásmo: {band}',
    contactGapsIntro: 'Najslabšie oblasti:',
    contactGapLine: '{name} ({score}/100)',
  },

  sl: {
    assessmentLanguage: 'Jezik ocene',
    quizTitle: 'Ocena',
    quizSubtitle:
      'Izberite odgovor, ki danes najbolje ustreza vašemu podjetju — iskrenost je boljša od optimizma.',
    step: 'Vprašanje {current} od {total}',
    progressAria: 'Napredek: vprašanje {current} od {total}',
    back: 'Nazaj',
    next: 'Naprej',
    seeResults: 'Poglej moj rezultat',
    dim: {
      strategy: 'Strategija in primeri uporabe',
      data: 'Pripravljenost podatkov',
      people: 'Ljudje in veščine',
      process: 'Procesi in poslovanje',
      tech: 'Tehnologija in integracija',
      governance: 'Upravljanje in spremembe',
    },
    questions: {
      strategy_use_cases: {
        q: 'Ste identificirali konkretne poslovne težave, kjer bi AI lahko pomagal?',
        a: [
          'Še ne — še raziskujemo idejo o AI.',
          'Imamo kratek seznam idej, a nič ni prioritetizirano.',
          'Imamo 1–2 jasna primera uporabe, vezana na poslovni cilj.',
          'Imamo prioritetizirano mapo poti AI primerov z lastniki.',
        ],
      },
      strategy_roi: {
        q: 'Kako razmišljate o donosu naložbe v AI?',
        a: [
          'Še nismo definirali metrik uspeha.',
          'Pričakujemo prihranke, a brez številk ali časovnice.',
          'Imamo grobe ocene stroškov/koristi za pilot.',
          'Spremljamo ROI z jasnimi KPI in pravilom ustavi/nadaljuj.',
        ],
      },
      data_location: {
        q: 'Kje danes živijo vaši kritični poslovni podatki?',
        a: [
          'Večinoma preglednice, e-pošta in papir — težko jih najti.',
          'V nekaj sistemih, ki med seboj ne komunicirajo.',
          'Centralna orodja pokrivajo večino operacij, z nekaterimi vrzelmi.',
          'Podatki so centralizirani, dostopni in večinoma integrirani.',
        ],
      },
      data_quality: {
        q: 'Kako zanesljivi so podatki, ki bi jih dali AI?',
        a: [
          'Pogosto nepopolni, podvojeni ali zastareli.',
          'Uporabni za ljudi, a neurejeni za avtomatizacijo.',
          'Večinoma čisti za glavne poteke dela; potrebno je nekaj čiščenja.',
          'Dokumentirani, validirani in zanesljivi za odločitve.',
        ],
      },
      people_ownership: {
        q: 'Kdo bi bil lastnik AI pobude v vašem podjetju?',
        a: [
          'Nihče — v celoti bi se zanašali na dobavitelja.',
          'Nekdo zainteresiran, a brez namenskega časa.',
          'Imenovani lastnik, ki lahko temu posveti del tedna.',
          'Jasno interno lastništvo z zmogljivostjo in pravicami odločanja.',
        ],
      },
      people_skills: {
        q: 'Kako dobro vaša ekipa pozna orodja AI?',
        a: [
          'Malo ali nič praktičnih izkušenj.',
          'Nekaj ljudi občasno uporablja ChatGPT/Copilot.',
          'Člani ekipe redno uporabljajo AI pri vsakodnevnem delu.',
          'Lahko sami ocenjujemo, konfiguriramo in izboljšujemo orodja AI.',
        ],
      },
      process_visibility: {
        q: 'Ali so vaši ključni poteki dela dokumentirani in merljivi?',
        a: [
          'Živijo v glavah ljudi — malo je zapisano.',
          'Obstajajo nekateri SOP, a so nepopolni ali zastareli.',
          'Glavni poteki dela so dokumentirani z osnovnimi metrikami.',
          'Procesi so mapirani, merjeni in redno pregledani.',
        ],
      },
      process_bottlenecks: {
        q: 'Ali veste, kje se v poslovanju izgublja čas ali denar?',
        a: [
          'Čutimo težave, a ne moremo pokazati konkretnih ozkih grl.',
          'Poznamo nekaj bolečih točk iz pritožb ali nadur.',
          'Identificirali smo ozka grla z velikim obsegom in ponavljanjem.',
          'Merimo stopnje izjem in stroške zamud po procesu.',
        ],
      },
      tech_integration: {
        q: 'Ali se lahko vaši trenutni sistemi povežejo z novimi orodji prek API-jev ali izvozov?',
        a: [
          'Večinoma zaprti/legacy sistemi z ročnim kopiranjem.',
          'Nekaj možnosti CSV/izvoza; omejene žive integracije.',
          'Ključni sistemi imajo API-je ali preverjene poti integracije.',
          'Sklad, usmerjen v API, z zanesljivimi integracijami že v uporabi.',
        ],
      },
      tech_stack: {
        q: 'Kako sodoben je vaš vsakodnevni tehnološki sklad?',
        a: [
          'Močno zanašanje na papir, telefon in nepovezana orodja.',
          'Mešanica starejše programske opreme in nekaj oblačnih orodij.',
          'Večinoma oblačna/SaaS orodja, ki pokrivajo osnovne operacije.',
          'Sodoben oblačni sklad z že delujočo avtomatizacijo.',
        ],
      },
      governance_leadership: {
        q: 'Kako vodstvo pristopa k sprejemanju AI?',
        a: [
          'Skeptično ali ni vključeno.',
          'Radovedno, a še ni sponzorja ali mandata.',
          'Izvršni sponzor podpira prvi projekt.',
          'Vodstvo aktivno vodi AI z proračunom in načrti sprememb.',
        ],
      },
      governance_risk: {
        q: 'Ste razpravljali o zasebnosti podatkov, soglasju strank in tveganju AI?',
        a: [
          'Sploh ni bilo razpravljano.',
          'Neformalna ozaveščenost — brez pisnih pravil.',
          'Osnovne smernice, kdo lahko uporablja AI in kateri podatki so dovoljeni.',
          'Pisne politike o zasebnosti, dostopu in uporabi dobaviteljev.',
        ],
      },
    },
    resultsTitle: 'Vaša ocena pripravljenosti na AI',
    resultsSubtitle:
      'Takojšnji rezultati — nato nam povejte, ali želite prilagojeno AI rešitev okoli najšibkejših področij.',
    dimensionsTitle: 'Rezultat po dimenziji',
    gapsTitle: 'Verjetne neučinkovitosti, ki jih je treba najprej odpraviti',
    ctaRequest: 'Zahtevajte prilagojeno AI rešitev',
    ctaCustom: 'Izvedite več o prilagojenih AI orodjih',
    ctaRetake: 'Ponovite oceno',
    band: {
      red: {
        label: 'Še niste pripravljeni',
        desc: 'Temelji so tanki. Osredotočite se na en jasen primer uporabe, čistejše podatke in notranjega lastnika pred velikim stroškom za AI.',
      },
      amber: {
        label: 'Delno pripravljeni',
        desc: 'Imate osnovo za gradnjo. Najprej zaprite najšibkejše vrzeli, nato izvedite usmerjen pilot z merljivimi cilji.',
      },
      green: {
        label: 'Pripravljeni na AI',
        desc: 'Ste v močnem položaju za sprejem ali skaliranje AI. Prioritetizirajte produkcijske primere in ohranite trdno upravljanje.',
      },
    },
    rec: {
      strategy:
        'Poimenujte en proces z velikim vplivom in definirajte uspeh v številkah pred nakupom orodij.',
      data: 'Konsolidirajte podatke za glavni potek dela — če AI nima čistih vhodov, se projekti ustavijo.',
      people:
        'Dodelite notranjega lastnika s tedensko zmogljivostjo; projekti samo pri dobavitelju redko obstanejo.',
      process:
        'Dokumentirajte in izmerite ozko grlo, ki naj ga AI odpravi — obseg, čas in stopnjo izjem.',
      tech: 'Potrdite API-je ali zanesljive izvoze iz sistemov, s katerimi se mora AI povezati.',
      governance:
        'Zagotovite sponzorstvo vodstva in osnovna pravila za podatke, zasebnost in vpliv na stranke.',
    },
    contactIntro:
      'Izpolnil/a sem oceno pripravljenosti na AI in bi rad/a razpravljal/a o prilagojeni AI rešitvi.',
    contactScoreLine: 'Skupni rezultat: {score}/100',
    contactBandLine: 'Pas: {band}',
    contactGapsIntro: 'Najšibkejša področja:',
    contactGapLine: '{name} ({score}/100)',
  },

  es: {
    assessmentLanguage: 'Idioma de la evaluación',
    quizTitle: 'Evaluación',
    quizSubtitle:
      'Elija la respuesta que mejor describe su negocio hoy — la honestidad vale más que el optimismo.',
    step: 'Pregunta {current} de {total}',
    progressAria: 'Progreso: pregunta {current} de {total}',
    back: 'Atrás',
    next: 'Siguiente',
    seeResults: 'Ver mi puntuación',
    dim: {
      strategy: 'Estrategia y casos de uso',
      data: 'Preparación de datos',
      people: 'Personas y habilidades',
      process: 'Procesos y operaciones',
      tech: 'Tech e integración',
      governance: 'Gobernanza y cambio',
    },
    questions: {
      strategy_use_cases: {
        q: '¿Han identificado problemas de negocio concretos donde la IA podría ayudar?',
        a: [
          'Aún no — todavía estamos explorando la idea de la IA.',
          'Tenemos una lista corta de ideas, pero nada priorizado.',
          'Tenemos 1–2 casos de uso claros ligados a un objetivo de negocio.',
          'Tenemos una hoja de ruta priorizada de casos de uso de IA con responsables.',
        ],
      },
      strategy_roi: {
        q: '¿Cómo piensan el retorno de la inversión en IA?',
        a: [
          'Aún no hemos definido métricas de éxito.',
          'Esperamos ahorros, pero sin números ni plazos.',
          'Tenemos estimaciones aproximadas de coste/beneficio para un piloto.',
          'Seguimos el ROI con KPI claros y una regla parar/continuar.',
        ],
      },
      data_location: {
        q: '¿Dónde viven hoy sus datos de negocio críticos?',
        a: [
          'Sobre todo hojas de cálculo, correo y papel — difíciles de encontrar.',
          'En unos pocos sistemas que no se comunican entre sí.',
          'Herramientas centrales cubren la mayor parte de las operaciones, con algunos huecos.',
          'Los datos están centralizados, accesibles y en gran medida integrados.',
        ],
      },
      data_quality: {
        q: '¿Qué tan fiables son los datos que darían a la IA?',
        a: [
          'A menudo incompletos, duplicados o desactualizados.',
          'Útiles para personas, pero desordenados para automatización.',
          'Mayormente limpios para los flujos principales; hace falta algo de limpieza.',
          'Documentados, validados y fiables para decisiones.',
        ],
      },
      people_ownership: {
        q: '¿Quién sería el responsable de una iniciativa de IA en su empresa?',
        a: [
          'Nadie — confiaríamos por completo en un proveedor.',
          'Alguien interesado, pero sin tiempo dedicado.',
          'Un responsable nombrado que puede dedicar parte de la semana.',
          'Propiedad interna clara con capacidad y derechos de decisión.',
        ],
      },
      people_skills: {
        q: '¿Qué tan familiarizado está su equipo con las herramientas de IA?',
        a: [
          'Poca o ninguna experiencia práctica.',
          'Algunas personas usan ChatGPT/Copilot de forma ocasional.',
          'Los miembros del equipo usan IA regularmente en el trabajo diario.',
          'Podemos evaluar, configurar y mejorar herramientas de IA nosotros mismos.',
        ],
      },
      process_visibility: {
        q: '¿Sus flujos de trabajo clave están documentados y son medibles?',
        a: [
          'Viven en la cabeza de las personas — poco está escrito.',
          'Existen algunos SOP, pero están incompletos o desactualizados.',
          'Los flujos principales están documentados con métricas básicas.',
          'Los procesos están mapeados, medidos y revisados regularmente.',
        ],
      },
      process_bottlenecks: {
        q: '¿Saben dónde se pierde tiempo o dinero en las operaciones?',
        a: [
          'Sentimos problemas, pero no podemos señalar cuellos de botella concretos.',
          'Conocemos algunos puntos de dolor por quejas u horas extra.',
          'Hemos identificado cuellos de botella de alto volumen y repetitivos.',
          'Medimos tasas de excepción y el coste de retrasos por proceso.',
        ],
      },
      tech_integration: {
        q: '¿Sus sistemas actuales pueden conectarse a nuevas herramientas vía APIs o exportaciones?',
        a: [
          'Sobre todo sistemas cerrados/legacy con copiar-pegar manual.',
          'Algunas opciones CSV/exportación; integraciones en vivo limitadas.',
          'Los sistemas clave tienen APIs o rutas de integración probadas.',
          'Stack API-first con integraciones fiables ya en uso.',
        ],
      },
      tech_stack: {
        q: '¿Qué tan moderna es su stack tecnológica del día a día?',
        a: [
          'Fuerte dependencia del papel, el teléfono y herramientas desconectadas.',
          'Mezcla de software más antiguo y algunas herramientas cloud.',
          'Sobre todo herramientas cloud/SaaS que cubren las operaciones principales.',
          'Stack cloud moderna con automatización ya en marcha.',
        ],
      },
      governance_leadership: {
        q: '¿Cómo aborda el liderazgo la adopción de IA?',
        a: [
          'Escéptico o no involucrado.',
          'Curioso, pero aún sin sponsor ni mandato.',
          'Un sponsor ejecutivo apoya un primer proyecto.',
          'El liderazgo impulsa activamente la IA con presupuesto y planes de cambio.',
        ],
      },
      governance_risk: {
        q: '¿Han debatido la privacidad de datos, el consentimiento del cliente y el riesgo de IA?',
        a: [
          'No se ha debatido en absoluto.',
          'Conciencia informal — sin reglas escritas.',
          'Directrices básicas sobre quién puede usar IA y qué datos están permitidos.',
          'Políticas escritas sobre privacidad, acceso y uso de proveedores.',
        ],
      },
    },
    resultsTitle: 'Su puntuación de preparación para IA',
    resultsSubtitle:
      'Resultados instantáneos — luego diganos si quieren una solución de IA a medida en torno a sus áreas más débiles.',
    dimensionsTitle: 'Puntuación por dimensión',
    gapsTitle: 'Ineficiencias probables a corregir primero',
    ctaRequest: 'Solicitar una solución de IA a medida',
    ctaCustom: 'Más sobre herramientas de IA a medida',
    ctaRetake: 'Repetir la evaluación',
    band: {
      red: {
        label: 'Aún no listos',
        desc: 'Los cimientos son débiles. Enfóquense en un caso de uso claro, datos más limpios y un responsable interno antes de un gran gasto en IA.',
      },
      amber: {
        label: 'Parcialmente listos',
        desc: 'Tienen una base sobre la que construir. Cierren primero las brechas más débiles y luego ejecuten un piloto enfocado con objetivos medibles.',
      },
      green: {
        label: 'Listos para IA',
        desc: 'Están en una posición fuerte para adoptar o escalar IA. Prioricen casos de producción y mantengan una gobernanza estricta.',
      },
    },
    rec: {
      strategy:
        'Nombren un proceso de alto impacto y definan el éxito en cifras antes de comprar herramientas.',
      data: 'Consoliden los datos del flujo principal — si la IA no tiene entradas limpias, los proyectos se estancan.',
      people:
        'Asignen un responsable interno con capacidad semanal; los proyectos solo con proveedor rara vez se mantienen.',
      process:
        'Documenten y midan el cuello de botella que quieren que la IA resuelva — volumen, tiempo y tasa de excepción.',
      tech: 'Confirmen APIs o exportaciones fiables de los sistemas a los que la IA necesitaría conectarse.',
      governance:
        'Consigan el patrocinio del liderazgo y reglas básicas sobre datos, privacidad e impacto en el cliente.',
    },
    contactIntro:
      'He completado la puntuación de preparación para IA y me gustaría hablar de una solución de IA a medida.',
    contactScoreLine: 'Puntuación global: {score}/100',
    contactBandLine: 'Banda: {band}',
    contactGapsIntro: 'Áreas más débiles:',
    contactGapLine: '{name} ({score}/100)',
  },

  sv: {
    assessmentLanguage: 'Bedömningsspråk',
    quizTitle: 'Bedömning',
    quizSubtitle:
      'Välj det svar som bäst passar ert företag idag — ärlighet slår optimism.',
    step: 'Fråga {current} av {total}',
    progressAria: 'Framsteg: fråga {current} av {total}',
    back: 'Tillbaka',
    next: 'Nästa',
    seeResults: 'Se mitt resultat',
    dim: {
      strategy: 'Strategi och användningsfall',
      data: 'Databeredskap',
      people: 'Människor och färdigheter',
      process: 'Processer och drift',
      tech: 'Teknik och integration',
      governance: 'Styrning och förändring',
    },
    questions: {
      strategy_use_cases: {
        q: 'Har ni identifierat konkreta affärsproblem där AI kan hjälpa?',
        a: [
          'Inte än — vi utforskar fortfarande idén om AI.',
          'Vi har en shortlist med idéer, men inget är prioriterat.',
          'Vi har 1–2 tydliga användningsfall kopplade till ett affärsmål.',
          'Vi har en prioriterad färdplan för AI-användningsfall med ägare.',
        ],
      },
      strategy_roi: {
        q: 'Hur tänker ni kring avkastning på AI-investering?',
        a: [
          'Vi har inte definierat framgångsmått ännu.',
          'Vi förväntar oss besparingar, men utan siffror eller tidplan.',
          'Vi har grova kostnads-/nyttoestimat för ett pilotprojekt.',
          'Vi följer ROI med tydliga KPI:er och en stoppa/fortsätt-regel.',
        ],
      },
      data_location: {
        q: 'Var finns era kritiska affärsdata idag?',
        a: [
          'Främst kalkylblad, e-post och papper — svåra att hitta.',
          'I några system som inte pratar med varandra.',
          'Centrala verktyg täcker det mesta av driften, med vissa luckor.',
          'Data är centraliserade, tillgängliga och till stor del integrerade.',
        ],
      },
      data_quality: {
        q: 'Hur tillförlitliga är data som ni skulle ge till AI?',
        a: [
          'Ofta ofullständiga, duplicerade eller föråldrade.',
          'Användbara för människor, men röriga för automatisering.',
          'Mestadels rena för våra huvudflöden; viss städning behövs.',
          'Dokumenterade, validerade och pålitliga för beslut.',
        ],
      },
      people_ownership: {
        q: 'Vem skulle äga ett AI-initiativ i ert företag?',
        a: [
          'Ingen — vi skulle förlita oss helt på en leverantör.',
          'Någon intresserad, men utan avsatt tid.',
          'En utsedd ägare som kan lägga en del av veckan på det.',
          'Tydligt internt ägarskap med kapacitet och beslutanderätt.',
        ],
      },
      people_skills: {
        q: 'Hur bekant är ert team med AI-verktyg?',
        a: [
          'Lite eller ingen praktisk erfarenhet.',
          'Några personer använder ChatGPT/Copilot ibland.',
          'Teammedlemmar använder AI regelbundet i det dagliga arbetet.',
          'Vi kan själva utvärdera, konfigurera och förbättra AI-verktyg.',
        ],
      },
      process_visibility: {
        q: 'Är era viktigaste arbetsflöden dokumenterade och mätbara?',
        a: [
          'De lever i människors huvuden — lite är nedskrivet.',
          'Vissa SOP finns, men de är ofullständiga eller föråldrade.',
          'Huvudflöden är dokumenterade med grundläggande mått.',
          'Processer är kartlagda, mätta och granskas regelbundet.',
        ],
      },
      process_bottlenecks: {
        q: 'Vet ni var tid eller pengar går förlorade i driften?',
        a: [
          'Vi känner av problem, men kan inte peka på specifika flaskhalsar.',
          'Vi känner till några smärtpunkter från klagomål eller övertid.',
          'Vi har identifierat flaskhalsar med hög volym och upprepning.',
          'Vi mäter undantagsfrekvens och kostnad för förseningar per process.',
        ],
      },
      tech_integration: {
        q: 'Kan era nuvarande system ansluta till nya verktyg via API:er eller exporter?',
        a: [
          'Främst slutna/legacy-system med manuell kopiera-klistra.',
          'Vissa CSV/exportalternativ; begränsade live-integrationer.',
          'Nyckelsystem har API:er eller beprövade integrationsvägar.',
          'API-först stack med tillförlitliga integrationer redan i bruk.',
        ],
      },
      tech_stack: {
        q: 'Hur modern är er dagliga teknikstack?',
        a: [
          'Stark beroende av papper, telefon och frånkopplade verktyg.',
          'Blandning av äldre programvara och några molnverktyg.',
          'Främst moln/SaaS-verktyg som täcker kärnverksamheten.',
          'Modern molnbaserad stack med automatisering som redan körs.',
        ],
      },
      governance_leadership: {
        q: 'Hur förhåller sig ledningen till AI-införande?',
        a: [
          'Skeptisk eller inte engagerad.',
          'Nyfiken, men ännu ingen sponsor eller mandat.',
          'En executive sponsor stöder ett första projekt.',
          'Ledningen driver aktivt AI med budget och förändringsplaner.',
        ],
      },
      governance_risk: {
        q: 'Har ni diskuterat dataskydd, kundsamtycke och AI-risk?',
        a: [
          'Inte diskuterat alls.',
          'Informell medvetenhet — inga skrivna regler.',
          'Grundläggande riktlinjer för vem som får använda AI och vilken data som är tillåten.',
          'Skrivna policyer om integritet, åtkomst och leverantörsanvändning.',
        ],
      },
    },
    resultsTitle: 'Ert AI-beredskapsresultat',
    resultsSubtitle:
      'Omedelbara resultat — berätta sedan om ni vill ha en skräddarsydd AI-lösning kring era svagaste områden.',
    dimensionsTitle: 'Resultat per dimension',
    gapsTitle: 'Sannolika ineffektiviteter att åtgärda först',
    ctaRequest: 'Begär en skräddarsydd AI-lösning',
    ctaCustom: 'Läs mer om skräddarsydda AI-verktyg',
    ctaRetake: 'Gör om bedömningen',
    band: {
      red: {
        label: 'Inte redo ännu',
        desc: 'Grunderna är tunna. Fokusera på ett tydligt användningsfall, renare data och en intern ägare innan en stor AI-satsning.',
      },
      amber: {
        label: 'Delvis redo',
        desc: 'Ni har en bas att bygga på. Stäng först de svagaste luckorna, kör sedan en fokuserad pilot med mätbara mål.',
      },
      green: {
        label: 'AI-redo',
        desc: 'Ni är i en stark position att anta eller skala AI. Prioritera produktionsfall och håll styrningen stram.',
      },
    },
    rec: {
      strategy:
        'Namnge en process med hög påverkan och definiera framgång i siffror innan ni köper verktyg.',
      data: 'Konsolidera data för ert viktigaste flöde — om AI saknar rena indata stannar projekt.',
      people:
        'Utsätt en intern ägare med veckokapacitet; projekt endast hos leverantör fastnar sällan.',
      process:
        'Dokumentera och mät flaskhalsen ni vill att AI ska åtgärda — volym, tid och undantagsfrekvens.',
      tech: 'Bekräfta API:er eller tillförlitliga exporter från systemen AI behöver ansluta till.',
      governance:
        'Säkra ledningssponsring och grundregler för dataanvändning, integritet och kundpåverkan.',
    },
    contactIntro:
      'Jag har slutfört AI-beredskapsbedömningen och vill gärna diskutera en skräddarsydd AI-lösning.',
    contactScoreLine: 'Totalt resultat: {score}/100',
    contactBandLine: 'Band: {band}',
    contactGapsIntro: 'Svagaste områden:',
    contactGapLine: '{name} ({score}/100)',
  },
};
