let data =
`APADEMAQUIAVELSOTAFT
NEMADAIGOLOEDILOCKES
TNOHLABARTEDOSSECORP
RSSSUARTSÁVOLTAIRENO
OAINADADICRARCAIEMHO
PRISORREFSIIISAARTTÃ
OIRLBHUAOCETOSGRIIOS
CEOEIOLTOTILSSEMESÃN
ENLGEMNSLRNOELSRREÇE
NUYNXEAJCUCEITIJFRUE
TMAEMMTFRICGMDÓAYDLR
ROTISIAMOIIOWIHTEAOP
ICVOSECLOÃTALPGSSPVM
SOTTOIÓOOCÇUAEIRRIEO
MSURCGLANMAIAGTOUYRC
ONOHILIAOTMSUISIUSÃA
MEDÇAOTRTCRAITSEVOSN
RSAPIBGDHILIXÃILHOTT
ASNESAUAUDPABWOTIJER
LEENNLUOARIARUEGSWOO
OTISAIXDOMKXCEIBYNRP
CNLACZEDONTHRLLÇESIO
SEADHAUNIXANEAELÃRAL
ESYOÃÇAIRCSRAIMOOOSO
OEERÃÃAMÉTODOKMLIKAG
ÃRWOZORIOÃÇAIRPORPAI
ÇPEETEOÃÇULOVERMFAEC
INDÚSTRIACULTURALOKA
UOMSITULOSBAILÍMAFRU
TLARUTLUCEDADISREVID
IRELIMÉPOMSINIMULIMA
TESTADOMODERNODORCUL
SESSODUEFLITNADUTSEO
NNORELCACITÍLOPYRNEH
ISARGERUNOCABSICNARF`
.split('\n').map(l => l.split(''))

const palavras =
`teorias sociológicas, compreensão, presente, produção, instituição escolar, culturas, instituição religiosa, instituição familiar, contribuição, antropológica,
estado moderno, diversidade cultural, criação, apropriação, processo de trabalho, desigualdade, prost, globalização, ideologia, movimento, sociais, agrários,
estudantil, surgimento, poder, política, direito, cidadania, indústria cultural, alienado, senso comum, aristóteles, platão, pensador, maquiavel,
antropocentrismo, francis bacon, iluminismo, absolutismo, voltaire, capitalista, feudal, comte, durkheim, max weber, karl marx, religião, homem, anomia,
coletivo, revolução, engels, chaui, evolução, crítica, freire, rituais, pensar, família, morgan, koller, strauss, método, teorias, união, regras, social,
fatos, dewey, louis, henry, ford, taylor, clero, émile, clero, feudos, locke, padres, lucro, smith, adam, ferro`
.replaceAll('\n', ' ').split(', ')

const procurarPalavras = palavras.map(e => e.replaceAll(' ', ''))