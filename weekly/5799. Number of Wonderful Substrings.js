/**
 * @param {string} word
 * @return {number}
 */
 var wonderfulSubstrings = function(word) {
    let n = word.length;
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        let cache = new Set();
        for (let j = i; j < n; ++j) {
            let right = word.charAt(j);
            if (cache.has(right)) {
                cache.delete(right);
            } else {
                cache.add(right);
            }
            if (cache.size <= 1) {
                ++ans;
            }
        }
    }
    return ans;
};

console.log(wonderfulSubstrings("aba"));
console.log(wonderfulSubstrings("aabb"));
console.log(wonderfulSubstrings("he"));
console.log(wonderfulSubstrings("bfadfiiiabjbigjgfiiaffihghjhdegjdeegfacifacjahdcjeicacajijciggfghhjfefaadaibfcbabagehhicgddghjaijdigacdhjbabiacddajeffjcgiigefdahjbcdgbahjcdeahehaedibdejdfgijbjdjibcfijjjfdgdjjegbbbijcgijejjfcibacbjaiaceeajicaahigdafjabjfcijefdfehajjbffbbgggdibbcghbebaajbidiaiihbeacaajhjgdjhacgjbeajccigdfdbiabagibhjdeeaghcibeicbeajfbaaafcdfgbeahbcedgbdidbdfehjafcegigbdjghghcdaigjhefdgbcfggiaaegicjbgccffhjgicghjfgchggcaaieiacbjibifbifbjacaaiiadeeaecghfjhhggdhihiehijaedaiffcgjbijicfbdhgfdjbeahicfjfjhjjicifbiggjbfhgajheaihadceiiehehjiedaaebcdhafafdahjigcfjaegibdcabbafbehjbffehdhfhbefgffbieddeeciffaeeiiibeafjgcbdggfdhheejacjahidiabjfhjggffhjjbabjbaabdieaffiiccjgggehhiaaabhhabjjbgifhdjcebifbfgiaijfcddjchhagihabcghbedafjajacgaeghbeafccbhedeahaggaaaeebfcdgfjjagiiffjhdagehjabgdegibfchejjidafiiffejcahaafbciadfebehgagffiddiciffafchffbjjgjadjdebcefbccgcbhdahedgcibijhhachhddjjfagaihaahjjhchdiabdjcgagccedbjhchgcbbfhfejeicbaeebdgbehafcjjhchcedhhhghgefefeegeafgdigjhedcbacbbfdijacighjfiabbffhhbgejeegccfhcbgbehjjiiijaecaigediafhifebfafhfcdbfebgffaebiggicbchfcedbagcfdjdadgaagfdeaecgheiehehccjdjbcbegdhaehefcfafajbbefaccccigjegdjhibfifgfaeiegdaaaagcfbidfdfcebhhfiicbeibajeehjebigaiegeiicjhacjcjdccfjacgcgddihhffgbbiiahcjidejfhfhjjcgaghadhbaebbijbidjeacdgbgjibbebcbjffcabedaibgegcefjecfdiegccfdejjifegibfdfadfghhjfidajijagbchghgiadihicjchdgjeedagcaedefdgigefiaagcebefegajjfbedfdcdfcdcgbbadcfeaaadagfhigbdgjbffddffahajgjedeeggbccgacjfbcjedggghbbidhgjjehbchdcbfcebhfbbehdjibbhafecjidbbijbacgacdgaehddcjbjcgegffbhcfieaagdaihhihdcjadiifffedhhfgfjjgjfhjbjfcjefdcfagcjdjgijbiehiigddhadcjdaaceccjcghjgfhjjhjjfgbcjhjcbhejgihbfeehehhigicifaidbhiebjjddfdejaaebgegdaahaadiciiedebbahdjbiceggjbidicdbdjefjdffgjidffdffiidcachhaeadjieijaacdeacbacaihcbjgiagiiehhedehgcfhhadbadfibhcdafheabbedcfdicdaihjbhfahhhdhbhfafidiheabbdhgdeaeeaifieddegeiggcbgaefjhhfjjhgjebeifehahgfgijjhfbcjgfacjfddehihegaehchgfjijbjjbcibhfeefgibjaehjhaiahaadhechejfeejecagfijbjgdfbcjbdfffjiigihbbgjihhbiedcfbgaadbcgcfcfcgchfaeidedbeibahgagacidgbgheihchgjiafdjffcbaagghdfjdeaihjddbahibjiahaajjicigahigcafccicffgijcefiacfcceiffehgbdbfhajceccefaidfjhgbiddiijigbfchgdjhidbgefifibfcbbbfjhbbfhigiccccacdcceifdggdecajhhfbhbadcdbiceehcbiddechebbgbgcfbddgfdefecbgjcghcgdjihahhhdhhfiabfhaebjafjcceciaeddgibciadbefcjfbccdeijffghfajidgjgidggadebhbijgabihehghjcfcdhacfadbcebiajdbjhafiebgchfhdghfgddabchbcajhfedhacdafgeiecdjeehigdcchhafeifhageabdigeeccdjggehcieaeigffccehijgaiabjfdjahcijhhibeebefeddfhjegjbicajbddhgjbjaaggfacddfjeijbfhgbegaebgaadghjgiecacifbjgbbfggfbafjgihecffiejdjgejeccbeefbbbhfjhghaigddidcdgjibfjhafbdbhidbjhgbdgeibiachjbieaeejaicjfcgdhbacaeccjcdjehbfaagdiiachidhcjcjijabeecgjdfgafaidgjaejdejdedfcfagfedbehjgjhfadajjjjdgjfidbjhidjcfiedheeddafficjbiedgefaadcigdhfacjigegdjjifaeecffhbbaaghjhhfgghgeeihjbfedjgjgdggjcjchhfeeedgabiaggbcdgefdjjhcecgcgjgghcdcafhfgbiffihjhabhcjegefbjgffbjbdfjhdfjjbifeicdbgjgfegahihfcjdgbcigadidiagjdggaggbehhdeicfhdfhjafbbiidfdgdgahfcdidbhbhebdefiaabaffjehaajajdbjhgahaijfjbdebjabbediijcecjabfigffachefbbidcjeejbdcifhjhbbjhbjfhbddcgehcbgbjchdcjjcbbbjabjdddgabcdbfhaeibccjefbabahehjcggdciefijdejaaheefibcddjhchagaggjadggegadijjghbajdgdigbiddbbfgfcaehgcficbcdgjhjcjffeejdggdefchgaehcefijfdiicfhhceibaibaijheehgigdhdibhhecgcebddbadieebghebehfjfdadbdbhbghbfehdgcgeiedejahafbhhiccadhbibjhggdhcchgejjbagebgeiddbdjfhdjbbbhdhaggfcjbbiagjeihcahjjcfdggjejagbdgiabeidfaaefhiaihibicdjiggbgaiefchhcfhbefjcfcjajacjhacfajhhbjiggdbedacfgfgaedbahibcdajabaefcbfhbccgjcigfjdjcgfbiddjbhafchihigicbbacecgajhbdcgceegcdcggjhjfgdigedagghdifhfiffecbbiegbcfdaehbhejjdhchgicabghfdjghjaibedaeedgbbhahgfhafaadifjfhicbeahdgabhajcgfjhgadjhefggahdaijaadjfiiiaagdgfcgaiiacjeddbgcbbhjdfgbibdcjijbbdejejdicefhbcdghefiijbgdafiieaiaehgaaejgbfdeaigciebcggajggchbbdcfeccghbbhfdjdeafdfffdhjhajcfjaaajbhbgegjjiaeibdibggagggffhcadigfegdifahibcdcagcdadiihdfgfcbgdigaejggjjdjgihjijjjchcjgdjiifjgahiiifhifbicgfdcbjajehhjdfgdaefddfbbjgdececijbgddiffahieccffadeijdfjijgdgcgdhhahahjbgejgagfieegafddbjbabdhaihadgcjajchdceicegedcbgdddbbcdhdijbicaebcjddeggjfajjejeeccfjbgediehgjdeabacfchchhiaahcbigdiihdecjddjbdeghjhjjecighddhjcabgehgcjfgacbbhaadfgdifagehgjedaajjdbchjeffbhbcehgjcdgbjdgcifieihiffbffgihdfhcbhidhafdbafcjfhdbfhababdjfffjajeehjedadihcigdceiidibhcddgiceiihicdjahcidbgjidhgafaefijgigibfciadaidifjffdfebdcagjbchjicdbfagajbgghijjddjdcebihhjecdjefacgghfefacccehjgdfecidfbhecifbajjabdjghjcibjggjdbigijfieahcjcfaaefhhbefcjefcdjijhhghgfjhhbcbdacbdihecdejjeifhfgbjfibbbeaafaafihcecadjhdacdbccjjbdbhgjebeaafeccfhibfefibhhdfhhijidgijceaeghiiaahhdhgiacdegfjbaheigiciaeajhhbibaafhcicfagaegjciedgaeabcjijadbigddbbjhjhiiceadgfgeiigfdjhiecicbicbbgjbhfifejbihaicheegbjgbjjfcfaigcjchfbhbabebigahabfegchcjdiccdhdiagfbeddbaiggcegggaagbbdhfffjaecdgfcbahjfhbdfjaehhhjdbfdhcfgifacdfahahdfhgffjciihfefbcighhdafbhfbdggieceaibgehajiabfjjgjfjjfdicjcgjgffjfiijacdadghcfidchibijiadchbgbgjchfgihddfhhihdjgfbjcchgiahaadbfehaifgbgaieaidgdbdifbjjcbgfggicajjcjbcijddjaaefiacbidfbfhcaeddefghgbihgdifeeeicdbjahdjhghjgccccaebefihdagjgajffjejejfhhdbfjgcdahicfaebbdejeejeeaifebhibgjajebhedhhjjbcgeibcfdbcaggfahbigbgcbcbgcjdicgdjgfeefaedcigcifhicfghffagfhbhcjagadciadjhjdeibibdghjggjddifdfghhcecdhjjffbbaghcdfbehaggciehibiigdfbfbegjchfidgafgdibgfahgiaagaijbccdbabgecbjddhejehidicfeihabgadhicfcicafjhbgfdddfebjbdaacedbaefiafabchaaichacgcceidccefhfjfgjaaaifcgifcihgbhhehidfhbiaejfghfhigeigdejadhehifabiddjhaijdgedfifebegbhjgddbiajegiigcbhfjcadcgfedidcfdhidghejcdcgfafafffecheeghabicjajijfcbagejcjgifabibieigafbdechbbcdhdfacaccceaiagjhbacegggdijejjbhdgdcfeiafeiccicjfjidbcdeeeajdahefaegbcabfhbejiibifdjhjjgdbdgcijdhabdgbbdadebdcebffegdheahedbjbabdjbbffadcfhiadhababdeeijcggcgfjidabebefijagdhhajjehcjegdbhdchgjgdjfhbihcgfbhgjbcgcbchbbgjfdadccggggffgihdbhcdbdhjgigjjahcbhfjibdgcgbcceaiiajedhaibdadiehhhjcdgefcgiahchaaffbabggbadaghigjiajefecjhgcbiafighfggcbficchiieffdaeabadbcjibhibeaagifefddejiciadjajhebahjiffbabhbjeddagdegidjgbifhehbifdjfieghjbdejjaihgdcjagadbfcfjbddgajfeeaiicgfhijejegjfhiabgiajhgjdjabdebfdfabedecibcebbejfgdgghcfbegijfagdiihjjchbjhjbcdcggfhjccghbdfafehjccbgfecbhjegfhdbhbbaeeecdacedfjeccbdaeebejjecgjbbchcjhigbhiaadiaihhfaagaicfiajcchfgibcfibcafgefahgdahgcfdjggcgiicjhfidiajbadajebcdaihddeebahcaaefiidcfeeadhafhggdgdgiaiabbaegbcdjhjdafjegaeiiaajiiahggecbhgcdidgbbafedfjjacbcfcfdeeeghaijgieheadjbfigibbedjeigfdgbfeijihccaifceaihgahfahhibeiceedihegdcddfbgccebhihbgeddeeedafacdacceheeiegffigiiijgcffbhijihiccdfcbhhjhejeifgehjihjeaiiicbchfjdegibaahchgjhgbhdjdbiehhccfhbjchajgcabgdiidifajcdeegddbhicghhjecdbhdhiichaiahgaggfaiciagehigajbdidbfecgaccabhigfgjgdggceffeadcecejbcgidjiefidahjijfefjfdadhiabdacideeidbabfjbihcaidjheigddbibeediheieefdfdgbeibgddadchcbfhidfjbgbijfeghdhdbbhiadhcdefihafjeeadcecdfecgbigdgagbjefcfggighdajahehfiaeeiabfgeahejcegbbdacfdcafgjabeifdgigafcgigjdbbjjcggjhfggdccggdgccciafecgehdfhaabdfafcfajebhcigedgeibejbcgeejfadeiiccgbghfiigchjfbfjichadgahdeeadidfahgabgaddgaahgjbfeggheaffehgbhgjdgffidajjaddbdjcgcfabieadchcaffabiibgigdbejcfgfjiedhihjedhababfifgjjjibifceejacjjiebijdicchheibbicbcehagagfjaafhhhdfgbihgjcbhjgcfadfdjjibaifeghjcdjiagbdgddajgbigebdagcjidbbifeibhdafhhfgjhcihhdhdcddjbbajdgijbbabcbdddafhhddcbaggdcabjbaiiacdabhegbhjahbbbfiaajbfbjgcgegdcbeghhjebdjiedaeddfgjihgibgiidfejgefiajhdddicefbfgfcaggibgeijdfghjeagcicebhgcghjedefagajiidhaiacbhbdagecgjcceebfeejfjgifhjadgggahjcjhihijhdfaahbjgcbadfdhgjdjfihgajcgbifihcdcghfgaahegficghdcbchfjaajbcgdjadgeggfddajbegcegddhjafeigacgjcabaiahjfafhjbbejedffeadchecahhijgcibcbdgibhbehjiiaeafabheehejbifjdgaeegedbbefhcgehdaaebadcbbjeeabbidfbjifihajfhbecafhdbbgbjaighbbjiddibfdifgjgcfccehdbcbahjiafebjfiacdagjjfddiehegdhbejfgiajjdgcgfaechhibabdgjidaghedbfaedjbddbbbfjcefhcbibgdaiahcecbecfiijcifgibjecbjbiceabihhaaghdh"));
// 超时