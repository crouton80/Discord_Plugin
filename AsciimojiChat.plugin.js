/**
 * @name AsciimojiChat
 * @author Bo$$
 * @version 0.2.4
 * @description Adds an ASCIImoji button to the chat bar and replaces tokens like (shrug) or (bear) in outgoing messages.
 */

module.exports = (() => {
  const config = {
    info: {
      name: "AsciimojiChat",
      authors: [{name: "Boss"}],
      version: "0.2.4",
      description: "Adds an ASCIImoji button to the chat bar and replaces tokens like (shrug) or (bear) in outgoing messages."
    }
  };

  const DEFAULT_REPLACEMENTS = {
    shrug: "¯\\_(ツ)_/¯",
    tableflip: "(╯°□°）╯︵ ┻━┻",
    unflip: "┬─┬ ノ( ゜-゜ノ)",
    bear: "ʕ·͡ᴥ·ʔ",
    lenny: "( ͡° ͜ʖ ͡°)",
    happy: "٩( ᐛ )و",
    excited: "Ｏ(≧▽≦)Ｏ",
    cry: "(╥﹏╥)",
    sad: "(；＿；)",
    angry: "(╬ಠ益ಠ)",
    confused: "(・_・ヾ",
    disapprove: "ಠ_ಠ",
    sparkle: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    magic: "ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ,",
    party: "┏(＾0＾)┛┗(＾0＾) ┓",
    dance: "┌(ㆆ㉨ㆆ)ʃ",
    spider: "/╲/\\╭(ఠఠ益ఠఠ)╮/\\╱\\",
    cat: "=^.^=",
    dog: "∪･ω･∪",
    fish: "<" + "))><",
    owl: "(⊙∨⊙)",
    hello: "(｡◕‿◕｡)",
    wave: "( ^_^)／",
    hug: "(づ｡◕‿‿◕｡)づ",
    kiss: "(づ ￣ ³￣)づ",
    love: "♥‿♥",
    heart: "❤",
    meh: "¯\\(°_o)/¯",
    no: "╰(⇀‸↼)╯",
    yes: "(•̀ᴗ•́)و ̑̑",
    strong: "ᕦ(ò_óˇ)ᕤ",
    run: "ε=ε=ε=┌(;*´Д`)ﾉ",
    yay: "\\( ﾟヮﾟ)/",
    worried: "(;;;*_*)",
    wink: "(^_~)",
    surprised: "(O_O)",
    cool: "(•_•)\n( •_•)>⌐■-■\n(⌐■_■)",
    rage: "༼ つ ◕_◕ ༽つ",
    flex: "ᕙ(⇀‸↼‶)ᕗ",
    sleepy: "(-_-) zzz",
    cheers: "（ ^_^）o自自o（^_^ ）",
    bunny: "／(≧ x ≦)＼",
    dongers: "ヽ༼ຈل͜ຈ༽ﾉ",
    facepalm: "(－‸ლ)",
    zen: "╰(˵ヘωヘ✿)╯",
    star: "★~(◡‿◕✿)",
    note: "♪┏(・o･)┛♪┗ ( ･o･) ┓♪",
    "--": "–",
    "->": "→",
    "...": "…",
    "<-": "←",
    "<<": "«",
    ">>": "»",
    "$": "[̲̅$̲̅(̲̅ιο̲̅̅)̲̅$̲̅]",
    "007": "┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/'̿'̿ ̿",
    "1/2": "½",
    "1/3": "⅓",
    "1/4": "¼",
    "1/8": "⅛",
    "2/3": "⅔",
    "3/8": "⅜",
    "5": "卌",
    "5/8": "⅝",
    "7/8": "⅞",
    acid: "⊂(◉‿◉)つ",
    afraid: "(ㆆ _ ㆆ)",
    alpha: "α",
    angel: "☜(⌒▽⌒)☞",
    apple: "",
    arrowhead: "⤜(ⱺ ʖ̯ⱺ)⤏",
    ass: "(‿|‿)",
    awkward: "•͡˘㇁•͡˘",
    bat: "/|\\ ^._.^ /|\\",
    bearflip: "ʕノ•ᴥ•ʔノ ︵ ┻━┻",
    bearhug: "ʕっ•ᴥ•ʔっ",
    because: "∵",
    bemolle: "♭",
    beta: "β",
    bigheart: "❤",
    bitcoin: "₿",
    blackeye: "0__#",
    blubby: "( 0 _ 0 )",
    blush: "(˵ ͡° ͜ʖ ͡°˵)",
    bond: "┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/'̿'̿ ̿",
    boobs: "( . Y . )",
    bored: "(-_-)",
    bribe: "( •͡˘ _•͡˘)ノð",
    bubbles: "( ˘ ³˘)ノ°ﾟº❍｡",
    butt: "(‿|‿)",
    butterfly: "ƸӜƷ",
    bye: "(ʘ‿ʘ)╯",
    c: "©",
    catlenny: "( ͡° ᴥ ͡°)",
    check: "✔",
    cheer: "※\\(^o^)/※",
    chubby: "╭(ʘ̆~◞౪◟~ʘ̆)╮",
    claro: "(͡ ° ͜ʖ ͡ °)",
    clique: "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    cloud: "☁",
    club: "♣",
    cmd: "⌘",
    coffee: "c[_]",
    command: "⌘",
    copy: "©",
    creep: "ԅ(≖‿≖ԅ)",
    creepcute: "ƪ(ړײ)‎ƪ​​",
    crim3s: "( ✜︵✜ )",
    cross: "†",
    crywave: "( ╥﹏╥) ノシ",
    csi: "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
    cuppa: "c[_]",
    cute: "(｡◕‿‿◕｡)",
    d1: "⚀",
    d2: "⚁",
    d3: "⚂",
    d4: "⚃",
    d5: "⚄",
    d6: "⚅",
    dab: "ヽ( •_)ᕗ",
    damnyou: "(ᕗ ͠° ਊ ͠° )ᕗ",
    dead: "x⸑x",
    dealwithit: "(⌐■_■)",
    delicious: "(っˆڡˆς)",
    delta: "Δ",
    depressed: "(︶︹︶)",
    derp: "☉ ‿ ⚆",
    diamond: "♦",
    diesis: "♯",
    dj: "d[-_-]b",
    "do not want": "ヽ(｀Д´)ﾉ",
    dollar: "$",
    dollarbill: "[̲̅$̲̅(̲̅ιο̲̅̅)̲̅$̲̅]",
    dong: "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄",
    donger: "ヽ༼ຈل͜ຈ༽ﾉ",
    dontcare: "(- ʖ̯-)",
    dontwant: "ヽ(｀Д´)ﾉ",
    dope: "<(^_^)>",
    doubleflat: "𝄫",
    doublesharp: "𝄪",
    doubletableflip: "┻━┻ ︵ヽ(\\`Д´)ﾉ︵ ┻━┻",
    down: "↓",
    duckface: "(・3・)",
    duel: "ᕕ(╭ರ╭ ͟ʖ╮•́)⊃¤=(————-",
    duh: "(≧︿≦)",
    dunno: "¯\\\\(°_o)/¯",
    dwi: "(⌐■_■)",
    ebola: "ᴇʙᴏʟᴀ",
    eeriemob: "(-(-_-(-_(-_(-_-)_-)-_-)_-)_-)-)",
    ellipsis: "…",
    emdash: "–",
    emptystar: "☆",
    emptytriangle: "△",
    endure: "(҂◡_◡) ᕤ",
    envelope: "✉︎",
    epsilon: "ɛ",
    euro: "€",
    evil: "ψ(｀∇´)ψ",
    evillenny: "(͠≖ ͜ʖ͠≖)",
    execution: "(⌐■_■)︻╦╤─ (╥﹏╥)",
    f: "✿",
    facebook: "(╯°□°)╯︵ ʞooqǝɔɐɟ",
    fancytext: "вєωαяє, ι αм ƒαη¢у!",
    fart: "(ˆ⺫ˆ๑)<3",
    fight: "(ง •̀_•́)ง",
    finn: "| (• ◡•)|",
    five: "卌",
    flat: "♭",
    flexing: "ᕙ(\\`▽´)ᕗ",
    flipped: "┬─┬﻿ ︵ /(.□. \\）",
    fliptext: "ǝןqɐʇ ɐ ǝʞıן ǝɯ dıןɟ",
    fliptexttable: "(ノ ゜Д゜)ノ ︵ ǝןqɐʇ ɐ ǝʞıן ʇxǝʇ dıןɟ",
    flor: "(✿◠‿◠)",
    flower: "(✿◠‿◠)",
    fly: "─=≡Σ((( つ◕ل͜◕)つ",
    friendflip: "(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)",
    frown: "(ღ˘⌣˘ღ)",
    fu: "┌П┐(ಠ_ಠ)",
    fuckoff: "୧༼ಠ益ಠ╭∩╮༽",
    fuckyou: "┌П┐(ಠ_ಠ)",
    gang: "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    gentleman: "ಠ_ರೃ",
    ghast: "= _ =",
    ghost: "༼ つ ╹ ╹ ༽つ",
    gift: "(´・ω・)っ由",
    gimme: "༼ つ ◕_◕ ༽つ",
    givemeyourmoney: "(•-•)⌐",
    glasses: "(⌐ ͡■ ͜ʖ ͡■)",
    glassesoff: "( ͡° ͜ʖ ͡°)ﾉ⌐■-■",
    glitter: "(*・‿・)ノ⌒*:･ﾟ✧",
    glitterderp: "(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧",
    gloomy: "(_゜_゜_)",
    goatse: "(з๏ε)",
    gotit: "(☞ﾟ∀ﾟ)☞",
    greet: "( ´◔ ω◔\\`) ノシ",
    greetings: "( ´◔ ω◔\\`) ノシ",
    gtfo: "୧༼ಠ益ಠ╭∩╮༽",
    gun: "︻╦╤─",
    h: "♥",
    hadouken: "༼つಠ益ಠ༽つ ─=≡ΣO))",
    haha: "٩(^‿^)۶",
    hammerandsickle: "☭",
    handleft: "☜",
    handright: "☞",
    happygarry: "ᕕ( ᐛ )ᕗ",
    heavytable: "┬─┬﻿ ︵ /(.□. \\）",
    help: "\\\\(°Ω°)/",
    highfive: "._.)/\\\\(._.",
    hitting: "( ｀皿´)｡ﾐ/",
    hl: "☜",
    hr: "☞",
    hs: "☭",
    hugs: "(づ｡◕‿‿◕｡)づ",
    idc: "(- ʖ̯-)",
    // Discord fonts often lack ｜･ิ (fullwidth bar, katakana dot, Thai vowel) — use | and · instead.
    iknowright: "┐|·ω·#|┌",
    ikr: "┐|·ω·#|┌",
    illuminati: "୧(▲ᴗ▲)ノ",
    inf: "∞",
    infinity: "∞",
    inject: "┌(◉ ͜ʖ◉)つ┣▇▇▇═──",
    inlove: "(っ´ω\\`c)♡",
    int: "∫",
    internet: "ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛ",
    interrobang: "‽",
    jake: "(❍ᴥ❍ʋ)",
    kappa: "(¬,‿,¬)",
    kawaii: "≧◡≦",
    keen: "┬┴┬┴┤Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    kiahh: "~\\\\(≧▽≦)/~",
    koala: "ʕ·͡ᴥ·ʔ",
    kyubey: "／人◕ ‿‿ ◕人＼",
    lambda: "λ",
    lazy: "_(:3」∠)_",
    left: "←",
    lennybill: "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
    lennyfight: "(ง ͠° ͟ʖ ͡°)ง",
    lennyflip: "(ノ ͡° ͜ʖ ͡°ノ) ︵ ( ͜。 ͡ʖ ͜。)",
    lennygang: "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
    lennyshrug: "¯\\\\_( ͡° ͜ʖ ͡°)_/¯",
    lennysir: "( ಠ ͜ʖ ರೃ)",
    lennystalker: "┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴",
    lennystrong: "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
    lennywizard: "╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ",
    letter: "✉︎",
    loading: "███▒▒▒▒▒▒▒",
    lol: "L(° O °L)",
    look: "(ಡ_ಡ)☞",
    loud: "ᕦ(⩾﹏⩽)ᕥ",
    lovebear: "ʕ♥ᴥ♥ʔ",
    lumpy: "꒰ ꒡⌓꒡꒱",
    luv: "-\\`ღ´-",
    mad: "t(ಠ益ಠt)",
    magicflip: "(/¯◡ ‿ ◡)/¯ ~ ┻━┻",
    meditation: "⊹╰(⌣ʟ⌣)╯⊹",
    meep: "\\\\(°^°)/",
    metal: "\\\\m/,(> . <)_\\\\m/",
    mg: "︻╦╤─",
    mistyeyes: "ಡ_ಡ",
    monocle: "ಠ_ರೃ",
    monster: "༼ ༎ຶ ෴ ༎ຶ༽",
    natural: "♮",
    needle: "┌(◉ ͜ʖ◉)つ┣▇▇▇═──",
    nerd: "(⌐⊙_⊙)",
    nice: "( ͡° ͜ °)",
    noclue: "／人◕ __ ◕人＼",
    noise: "ᕦ(⩾﹏⩽)ᕥ",
    nom: "(っˆڡˆς)",
    nuclear: "☢",
    nukular: "☢",
    nyan: "~=[,,_,,]:3",
    nyeh: "@^@",
    ohai: "(ʘ‿ʘ)╯",
    ohshit: "( º﹃º )",
    ohyou: "(◞థ౪థ)ᴖ",
    omega: "Ω",
    omg: "◕_◕",
    omm: "⊹╰(⌣ʟ⌣)╯⊹",
    opt: "⌥",
    option: "⌥",
    orly: "(눈_눈)",
    ou: "(◞థ౪థ)ᴖ",
    peace: "✌(-‿-)✌",
    pear: "(__>-",
    pi: "π",
    pingpong: "( •_•)O*¯\\`·.¸.·´¯\\`°Q(•_• )",
    plain: "._.",
    pleased: "(˶‾᷄ ⁻̫ ‾᷅˵)",
    point: "(☞ﾟヮﾟ)☞",
    pooh: "ʕ •́؈•̀)",
    porcupine: "(•ᴥ• )́\\`́'́\\`́'́⻍",
    pound: "£",
    praise: "(☝ ՞ਊ ՞)☝",
    present: "(´・ω・)っ由",
    punch: "O=('-'Q)",
    r: "®",
    radioactive: "☢",
    rageflip: "(ノಠ益ಠ)ノ彡┻━┻",
    rainbowcat: "(=^･ｪ･^=))ﾉ彡☆",
    really: "ò_ô",
    right: "→",
    riot: "୧༼ಠ益ಠ༽୨",
    rock: "\\\\m/,(> . <)_\\\\m/",
    rolldice: "⚁",
    rolleyes: "(◔_◔)",
    rose: "✿ڿڰۣ—",
    saddonger: "ヽ༼ຈʖ̯ຈ༽ﾉ",
    sadlenny: "( ͡° ʖ̯ ͡°)",
    sharp: "♯",
    shout: "╚(•⌂•)╝",
    shy: "=^_^=",
    sigma: "Σ",
    since: "∵",
    sing: "♫",
    sir: "ಠ_ರೃ",
    skull: "☠",
    smile: "ツ",
    smiley: "☺︎",
    smirk: "¬‿¬",
    snowman: "☃",
    so: "⸫",
    sob: "(;´༎ຶД༎ຶ\\`)",
    soviettableflip: "ノ┬─┬ノ ︵ ( \\o°o)",
    spade: "♠",
    sqrt: "√",
    squad: "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    squid: "<コ:彡",
    stalker: "┬┴┬┴┤(･_├┬┴┬┴",
    suicide: "ε/̵͇̿̿/'̿'̿ ̿(◡︵◡)",
    sum: "∑",
    sun: "☀",
    surrender: "\\\\_(-_-)_/",
    swag: "(̿▀̿‿ ̿▀̿ ̿)",
    sword: "o()xxxx[{::::::::::::::::::>",
    t: "▲",
    t2: "△",
    tabledown: "┬─┬﻿ ノ( ゜-゜ノ)",
    tau: "τ",
    tears: "(ಥ﹏ಥ)",
    terrorist: "୧༼ಠ益ಠ༽︻╦╤─",
    thanks: "\\\\(^-^)/",
    thankyou: "\\\\(^-^)/",
    therefore: "⸫",
    this: "( ͡° ͜ʖ ͡°)_/¯",
    tiefighter: "|=-(¤)-=|",
    tired: "(=____=)",
    tm: "™",
    toldyou: "☜(꒡⌓꒡)",
    toldyouso: "☜(꒡⌓꒡)",
    toogood: "ᕦ(òᴥó)ᕥ",
    triangle: "▲",
    ty: "\\\\(^-^)/",
    ukids: "ლ༼>╭ ͟ʖ╮<༽ლ",
    up: "↑",
    victory: "(๑•̀ㅂ•́)ง✧",
    wat: "(ÒДÓױ)",
    whaa: "Ö",
    whistle: "(っ^з^)♪♬",
    whoa: "(°o•)",
    why: "ლ(\\`◉◞౪◟◉‵ლ)",
    witchtext: "WHΣИ $HΛLL WΣ †HЯΣΣ MΣΣ† ΛGΛ|И?",
    woo: "＼(＾O＾)／",
    wtf: "(⊙＿⊙')",
    wut: "⊙ω⊙",
    "y u no": "(屮ﾟДﾟ)屮 Y U NO",
    yeah: "(•̀ᴗ•́)و ̑̑",
    yen: "¥",
    yinyang: "☯",
    yolo: "Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ",
    youkids: "ლ༼>╭ ͟ʖ╮<༽ლ",
    yummy: "(っˆڡˆς)",
    yuno: "(屮ﾟДﾟ)屮 Y U NO",
    yy: "☯",
    zoidberg: "(V) (°,,,,°) (V)",
    zombie: "[¬º-°]¬",
    Nigger: "Ni༼ つ ◕_◕ ༽つgger"
  };

  return class AsciimojiChat {
    constructor(meta) {
      this.meta = meta ?? config.info;
      this.api = new BdApi(this.meta.name || config.info.name);
      this.React = BdApi.React;
      this.settings = this.loadSettings();
      this.unpatches = [];
      this.styleId = `${this.meta.name}-styles`;
      this.boundDocClick = null;
      this.activePicker = null;
      this.insertDispatcher = null;
    }

    start() {
      this.injectStyles();
      this.patchMessaging();
      this.patchChatBarButtons();
      this.observeDocumentClicks();
      BdApi.UI.showToast(`${this.meta.name} ${this.meta.version} started`, {type: "success"});
    }

    stop() {
      for (const unpatch of this.unpatches.splice(0)) {
        try { unpatch(); } catch (_) {}
      }
      if (this.boundDocClick) {
        this.closePicker();
        this.removeOutsideClickListeners(document);
        this.boundDocClick = null;
      }
      else {
        this.closePicker();
      }
      BdApi.DOM.removeStyle(this.styleId);
      BdApi.UI.showToast(`${this.meta.name} ${this.meta.version} stopped`, {type: "info"});
    }

    loadSettings() {
      const saved = BdApi.Data.load(this.meta.name, "settings") ?? {};
      return {
        prefix: typeof saved.prefix === "string" ? saved.prefix : "(",
        suffix: typeof saved.suffix === "string" ? saved.suffix : ")",
        caseInsensitive: saved.caseInsensitive !== false,
        enableSendPatch: saved.enableSendPatch !== false,
        enableEditPatch: saved.enableEditPatch !== false,
        insertMode: saved.insertMode === "token" ? "token" : "ascii",
        customReplacements: this.normalizeMap(saved.customReplacements ?? {})
      };
    }

    saveSettings() {
      BdApi.Data.save(this.meta.name, "settings", this.settings);
    }

    normalizeMap(input) {
      if (!input || typeof input !== "object") return {};
      const normalized = {};
      for (const [rawKey, rawValue] of Object.entries(input)) {
        const key = String(rawKey ?? "").trim();
        const value = String(rawValue ?? "");
        if (key && value) normalized[key] = value;
      }
      return normalized;
    }

    escapeRegExp(text) {
      return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    escapeHtml(text) {
      return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    /** Discord treats _ as italics; prefix unescaped underscores so they render literally. */
    escapeDiscordUnderscores(text) {
      const s = String(text ?? "");
      let out = "";
      for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "_") {
          const prev = out.length ? out[out.length - 1] : "";
          if (prev !== "\\") out += "\\";
        }
        out += c;
      }
      return out;
    }

    getReplacementMap() {
      return {...DEFAULT_REPLACEMENTS, ...this.settings.customReplacements};
    }

    getEntries() {
      return Object.entries(this.getReplacementMap()).sort(([a], [b]) => a.localeCompare(b));
    }

    getTokenForKey(key) {
      return `${this.settings.prefix}${key}${this.settings.suffix}`;
    }

    transformText(text) {
      if (typeof text !== "string" || !text.length) return text;
      const map = this.getReplacementMap();
      const keys = Object.keys(map);
      if (!keys.length) return text;

      const prefix = this.escapeRegExp(this.settings.prefix);
      const suffix = this.escapeRegExp(this.settings.suffix);
      const keyAlternation = keys
        .sort((a, b) => b.length - a.length)
        .map((key) => this.escapeRegExp(key))
        .join("|");
      if (!keyAlternation) return text;

      const flags = this.settings.caseInsensitive ? "gi" : "g";
      const matcher = new RegExp(`${prefix}(${keyAlternation})${suffix}`, flags);
      const lookup = this.settings.caseInsensitive
        ? Object.fromEntries(Object.entries(map).map(([k, v]) => [k.toLowerCase(), v]))
        : map;

      return text.replace(matcher, (_, rawKey) => {
        const key = this.settings.caseInsensitive ? String(rawKey).toLowerCase() : String(rawKey);
        const value = lookup[key];
        if (value !== undefined) return this.escapeDiscordUnderscores(value);
        return this.getTokenForKey(rawKey);
      });
    }

    patchMessaging() {
      const candidates = BdApi.Webpack.getModules((mod) => {
        if (!mod) return false;
        const target = mod.default && typeof mod.default === "object" ? mod.default : mod;
        return typeof target.sendMessage === "function" || typeof target.editMessage === "function";
      });

      let patched = false;
      for (const mod of candidates) {
        const target = mod.default && typeof mod.default === "object" ? mod.default : mod;

        if (this.settings.enableSendPatch && typeof target.sendMessage === "function") {
          const unpatch = BdApi.Patcher.before(this.meta.name, target, "sendMessage", (_, args) => {
            const message = args?.[1];
            if (message && typeof message.content === "string") message.content = this.transformText(message.content);
          });
          this.unpatches.push(unpatch);
          patched = true;
        }

        if (this.settings.enableEditPatch && typeof target.editMessage === "function") {
          const unpatch = BdApi.Patcher.before(this.meta.name, target, "editMessage", (_, args) => {
            const message = args?.[2];
            if (message && typeof message.content === "string") message.content = this.transformText(message.content);
          });
          this.unpatches.push(unpatch);
          patched = true;
        }
      }

      if (!patched) BdApi.UI.showToast(`${this.meta.name}: message module not found`, {type: "error"});
    }

    observeDocumentClicks() {
      this.boundDocClick = (event) => {
        if (!this.activePicker) return;
        const button = this.activePicker.button;
        const panel = this.activePicker.panel;
        const path = event.composedPath?.() || [];
        if (
          button?.contains(event.target) ||
          panel?.contains(event.target) ||
          path.includes(button) ||
          path.includes(panel)
        ) return;
        this.closePicker();
      };
      this.addOutsideClickListeners(document);
    }

    addOutsideClickListeners(doc) {
      doc.addEventListener("pointerdown", this.boundDocClick, true);
      doc.addEventListener("click", this.boundDocClick, true);
    }

    removeOutsideClickListeners(doc) {
      doc.removeEventListener("pointerdown", this.boundDocClick, true);
      doc.removeEventListener("click", this.boundDocClick, true);
    }

    patchChatBarButtons() {
      const chatBarModule = BdApi.Webpack.getModule((m) => m.type?.toString?.().includes('"sticker")'));
      if (!chatBarModule) {
        BdApi.UI.showToast(`${this.meta.name}: chat bar module not found`, {type: "error"});
        return;
      }

      const unpatch = BdApi.Patcher.after(this.meta.name, chatBarModule, "type", (_, [{disabled}], res) => {
        if (disabled) return;
        const buttons = this.findButtonsArray(res);
        if (!buttons) return;
        if (buttons.some((child) => child?.key === "asciimoji-button")) return;
        buttons.unshift(this.renderChatBarButton());
      });
      this.unpatches.push(unpatch);
    }

    findButtonsArray(root) {
      return BdApi.Utils.findInTree(root, (node) => {
        return Array.isArray(node) && node.some((child) => child?.key === "emoji");
      }, {walkable: ["children", "props"]});
    }

    renderChatBarButton() {
      const React = BdApi.React;
      const { Tooltip } = BdApi.Components;
      const theme = this.getThemeColors();

      return React.createElement(
        Tooltip,
        {text: "ASCIImoji", key: "asciimoji-button"},
        ({onMouseEnter, onMouseLeave}) => React.createElement(
          "div",
          {
            key: "asciimoji-button",
            role: "button",
            tabIndex: 0,
            className: "asciimoji-trigger",
            "aria-label": "ASCIImoji picker",
            style: {
              width: "32px",
              height: "32px",
              minWidth: "32px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              background: "transparent",
              color: theme.text,
              cursor: "pointer",
              userSelect: "none",
              WebkitUserSelect: "none"
            },
            onMouseEnter: (event) => {
              onMouseEnter?.(event);
              event.currentTarget.style.background = theme.hoverBg;
            },
            onMouseLeave: (event) => {
              onMouseLeave?.(event);
              event.currentTarget.style.background = "transparent";
            },
            onClick: (event) => {
              event.preventDefault();
              event.stopPropagation();
              this.togglePicker(event.currentTarget);
            },
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.stopPropagation();
                this.togglePicker(event.currentTarget);
              }
            }
          },
          React.createElement(
            "span",
            {
              className: "asciimoji-chat-button-icon",
              style: {
                color: theme.text,
                fontSize: "13px",
                lineHeight: "1",
                letterSpacing: "-1px",
                display: "block",
                transform: "translateY(-1px)"
              }
            },
            "ಠ‿ಠ"
          )
        )
      );
    }

    getThemeColors() {
      const isDark = this.isDarkTheme();
      return {
        text: this.discordVar("--text-default", this.discordVar("--text-normal", isDark ? "#ffffff" : "#000000")),
        muted: this.discordVar("--text-muted", isDark ? "rgba(255, 255, 255, 0.68)" : "rgba(0, 0, 0, 0.62)"),
        panelBg: this.discordVar("--background-secondary-alt", this.discordVar("--background-floating", isDark ? "#1f232b" : "#ffffff")),
        headerBg: this.discordVar("--background-secondary", isDark ? "#343944" : "#f2f3f5"),
        itemBg: this.discordVar("--background-base-low", this.discordVar("--background-secondary", isDark ? "#2a2f39" : "#f7f8fa")),
        inputBg: this.discordVar("--input-background-default", this.discordVar("--input-background", isDark ? "#2a2f39" : "#f7f8fa")),
        hoverBg: this.discordVar("--background-modifier-hover", isDark ? "#3a404c" : "#e9ebef"),
        border: this.discordVar("--input-border-default", this.discordVar("--background-modifier-accent", isDark ? "#4a5160" : "#cfd4dc")),
        shadow: this.discordVar("--elevation-high", isDark ? "0 18px 50px rgba(0, 0, 0, 0.45)" : "0 18px 50px rgba(0, 0, 0, 0.16)")
      };
    }

    discordVar(name, fallback) {
      return `var(${name}, ${fallback})`;
    }

    isDarkTheme() {
      const root = document.documentElement;
      if (root?.classList.contains("theme-dark")) return true;
      if (root?.classList.contains("theme-light")) return false;
      const body = document.body;
      if (body?.classList.contains("theme-dark")) return true;
      if (body?.classList.contains("theme-light")) return false;
      const bg = getComputedStyle(body || root).backgroundColor;
      return this.isColorDark(bg);
    }

    isColorDark(color) {
      const match = String(color || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!match) return true;
      const r = Number(match[1]);
      const g = Number(match[2]);
      const b = Number(match[3]);
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return luminance < 0.5;
    }

    togglePicker(button) {
      if (this.activePicker?.button === button) {
        this.closePicker();
        return;
      }
      this.openPicker(button);
    }

    getInsertDispatcher() {
      if (this.insertDispatcher) return this.insertDispatcher;
      this.insertDispatcher = BdApi.Webpack.getModule((m) => m.emitter?._events?.INSERT_TEXT, {searchExports: true});
      return this.insertDispatcher;
    }

    insertText(text) {
      const dispatcher = this.getInsertDispatcher();
      if (!dispatcher?.dispatchToLastSubscribed) {
        BdApi.UI.showToast(`${this.meta.name}: insert dispatcher not found`, {type: "error"});
        return;
      }
      dispatcher.dispatchToLastSubscribed("INSERT_TEXT", {rawText: text, plainText: text});
    }

    openPicker(button) {
      this.closePicker();
      const theme = this.getThemeColors();
      const doc = button.ownerDocument || document;
      const view = doc.defaultView || window;
      const panel = doc.createElement("div");
      panel.className = "asciimoji-chat-picker";
      panel.style.position = "fixed";
      panel.style.zIndex = "10000";
      panel.style.width = "360px";
      panel.style.height = "420px";
      panel.style.overflow = "hidden";
      panel.style.borderRadius = "14px";
      panel.style.border = `1px solid ${theme.border}`;
      panel.style.background = theme.panelBg;
      panel.style.boxShadow = theme.shadow;
      panel.innerHTML = `
        <div class="asciimoji-picker-header">
          <input type="text" class="asciimoji-picker-search" placeholder="Search asciimoji..." />
        </div>
        <div class="asciimoji-picker-list"></div>
      `;

      const header = panel.querySelector(".asciimoji-picker-header");
      const search = panel.querySelector(".asciimoji-picker-search");
      const list = panel.querySelector(".asciimoji-picker-list");
      const entries = this.getEntries();

      header.style.padding = "12px";
      header.style.background = theme.headerBg;
      header.style.borderBottom = `1px solid ${theme.border}`;

      search.style.width = "100%";
      search.style.boxSizing = "border-box";
      search.style.border = `1px solid ${theme.border}`;
      search.style.borderRadius = "10px";
      search.style.padding = "11px 12px";
      search.style.background = theme.inputBg;
      search.style.color = theme.text;
      search.style.fontSize = "14px";
      search.style.outline = "none";
      search.style.caretColor = theme.text;

      list.style.height = "calc(100% - 67px)";
      list.style.overflow = "auto";
      list.style.padding = "10px";
      list.style.display = "flex";
      list.style.flexDirection = "column";
      list.style.gap = "6px";
      list.style.background = theme.panelBg;

      const render = (filter = "") => {
        const needle = filter.trim().toLowerCase();
        list.innerHTML = "";

        const filtered = entries.filter(([key, value]) => {
          if (!needle) return true;
          return key.toLowerCase().includes(needle) || value.toLowerCase().includes(needle);
        }).slice(0, 200);

        if (!filtered.length) {
          const empty = document.createElement("div");
          empty.textContent = "No matches";
          empty.style.padding = "16px";
          empty.style.textAlign = "center";
          empty.style.color = theme.muted;
          list.appendChild(empty);
          return;
        }

        for (const [key, value] of filtered) {
          const item = document.createElement("button");
          item.type = "button";
          item.style.width = "100%";
          item.style.display = "grid";
          item.style.gridTemplateColumns = "82px 96px 1fr";
          item.style.gap = "10px";
          item.style.alignItems = "center";
          item.style.textAlign = "left";
          item.style.padding = "10px 12px";
          item.style.borderRadius = "10px";
          item.style.border = "1px solid transparent";
          item.style.background = theme.itemBg;
          item.style.color = theme.text;
          item.style.cursor = "pointer";
          item.style.fontFamily = "inherit";
          item.style.boxSizing = "border-box";
          item.innerHTML = `
            <span class="asciimoji-picker-key">${this.escapeHtml(key)}</span>
            <span class="asciimoji-picker-token">${this.escapeHtml(this.getTokenForKey(key))}</span>
            <span class="asciimoji-picker-value">${this.escapeHtml(value)}</span>
          `;

          const keySpan = item.querySelector(".asciimoji-picker-key");
          const tokenSpan = item.querySelector(".asciimoji-picker-token");
          const valueSpan = item.querySelector(".asciimoji-picker-value");

          keySpan.style.color = theme.text;
          keySpan.style.fontWeight = "700";

          tokenSpan.style.color = theme.muted;
          tokenSpan.style.fontFamily = "Consolas, monospace";
          tokenSpan.style.fontSize = "12px";

          valueSpan.style.color = theme.text;
          valueSpan.style.fontFamily = "Consolas, monospace";
          valueSpan.style.whiteSpace = "nowrap";
          valueSpan.style.overflow = "hidden";
          valueSpan.style.textOverflow = "ellipsis";

          item.addEventListener("mouseenter", () => {
            item.style.background = theme.hoverBg;
            item.style.borderColor = theme.border;
          });
          item.addEventListener("mouseleave", () => {
            item.style.background = theme.itemBg;
            item.style.borderColor = "transparent";
          });
          item.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            const insertText =
              this.settings.insertMode === "token"
                ? this.getTokenForKey(key)
                : this.escapeDiscordUnderscores(value);
            this.insertText(insertText);
            this.closePicker();
          });

          list.appendChild(item);
        }
      };

      search.addEventListener("input", () => render(search.value));
      render();

      panel.addEventListener("mousedown", (event) => event.preventDefault());
      doc.body.appendChild(panel);
      const rect = button.getBoundingClientRect();
      const panelWidth = 360;
      const panelHeight = 420;
      const left = Math.min(view.innerWidth - panelWidth - 12, Math.max(12, rect.right - panelWidth));
      const top = Math.max(12, rect.top - panelHeight - 8);
      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;

      this.activePicker = {button, panel, doc};
      if (doc !== document && this.boundDocClick) {
        this.addOutsideClickListeners(doc);
      }
      view.setTimeout(() => search.focus(), 0);
    }

    closePicker() {
      if (!this.activePicker) return;
      if (this.activePicker.doc !== document && this.boundDocClick) {
        this.removeOutsideClickListeners(this.activePicker.doc);
      }
      this.activePicker.panel?.remove();
      this.activePicker = null;
    }

    parseMap(text) {
      const map = {};
      for (const line of String(text ?? "").split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const idx = trimmed.indexOf("=");
        if (idx === -1) continue;
        const key = trimmed.slice(0, idx).trim();
        const value = trimmed.slice(idx + 1).trim();
        if (key && value) map[key] = value;
      }
      return map;
    }

    serializeMap(map) {
      return Object.entries(this.normalizeMap(map))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key} = ${value}`)
        .join("\n");
    }

    getSettingsPanel() {
      const panel = document.createElement("div");
      panel.className = "asciimoji-settings";
      panel.innerHTML = `
        <div class="section">
          <h3>Delimiters</h3>
          <label>Prefix</label>
          <input class="bd-input" data-key="prefix" type="text" value="${this.escapeHtml(this.settings.prefix)}" />
          <label>Suffix</label>
          <input class="bd-input" data-key="suffix" type="text" value="${this.escapeHtml(this.settings.suffix)}" />
        </div>
        <div class="section">
          <h3>Composer Button</h3>
          <label>Insert mode</label>
          <select class="bd-input" data-key="insertMode">
            <option value="ascii" ${this.settings.insertMode === "ascii" ? "selected" : ""}>Insert final asciimoji</option>
            <option value="token" ${this.settings.insertMode === "token" ? "selected" : ""}>Insert token like (shrug)</option>
          </select>
        </div>
        <div class="section">
          <h3>Message Processing</h3>
          <label><input data-key="caseInsensitive" type="checkbox" ${this.settings.caseInsensitive ? "checked" : ""}/> Match keys case-insensitively</label>
          <label><input data-key="enableSendPatch" type="checkbox" ${this.settings.enableSendPatch ? "checked" : ""}/> Replace tokens on send</label>
          <label><input data-key="enableEditPatch" type="checkbox" ${this.settings.enableEditPatch ? "checked" : ""}/> Replace tokens on edit</label>
        </div>
        <div class="section">
          <h3>Custom Replacements</h3>
          <p>One per line: <code>key = value</code></p>
          <textarea class="bd-input" data-key="customReplacements" rows="12">${this.escapeHtml(this.serializeMap(this.settings.customReplacements))}</textarea>
        </div>
        <div class="section">
          <button class="bd-button bd-button-filled bd-button-color-brand" data-action="save">Save</button>
          <span class="status" data-role="status"></span>
        </div>
      `;

      const status = panel.querySelector('[data-role="status"]');
      const setStatus = (message) => { status.textContent = message; };

      panel.querySelector('[data-action="save"]').addEventListener("click", () => {
        this.settings = {
          ...this.settings,
          prefix: panel.querySelector('[data-key="prefix"]').value,
          suffix: panel.querySelector('[data-key="suffix"]').value,
          insertMode: panel.querySelector('[data-key="insertMode"]').value === "token" ? "token" : "ascii",
          caseInsensitive: panel.querySelector('[data-key="caseInsensitive"]').checked,
          enableSendPatch: panel.querySelector('[data-key="enableSendPatch"]').checked,
          enableEditPatch: panel.querySelector('[data-key="enableEditPatch"]').checked,
          customReplacements: this.parseMap(panel.querySelector('[data-key="customReplacements"]').value)
        };
        this.saveSettings();
        this.stop();
        this.start();
        setStatus("Saved.");
      });

      return panel;
    }

    injectStyles() {
      BdApi.DOM.addStyle(this.styleId, `
        .asciimoji-trigger { margin-right: 4px; }
        .asciimoji-chat-button-icon { font-family: var(--font-primary), sans-serif; pointer-events: none; }
        .asciimoji-picker-list {
          scrollbar-width: thin;
          scrollbar-color:
            var(--scrollbar-thin-thumb, var(--scrollbar-auto-thumb, var(--background-modifier-accent)))
            var(--scrollbar-thin-track, var(--scrollbar-auto-track, transparent));
        }
        .asciimoji-picker-list::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .asciimoji-picker-list::-webkit-scrollbar-thumb {
          background-color: var(--scrollbar-thin-thumb, var(--scrollbar-auto-thumb, var(--background-modifier-accent)));
          border: 2px solid transparent;
          border-radius: 999px;
          background-clip: padding-box;
        }
        .asciimoji-picker-list::-webkit-scrollbar-track {
          background-color: var(--scrollbar-thin-track, var(--scrollbar-auto-track, transparent));
        }
        .asciimoji-settings { padding: 16px; color: var(--header-primary); }
        .asciimoji-settings .section { margin-bottom: 20px; }
        .asciimoji-settings h3 { margin-bottom: 8px; }
        .asciimoji-settings label { display: block; margin: 8px 0 6px; font-weight: 600; }
        .asciimoji-settings input[type="text"],
        .asciimoji-settings textarea,
        .asciimoji-settings select {
          width: 100%;
          box-sizing: border-box;
          padding: 8px;
          border-radius: 8px;
          background: var(--background-secondary);
          color: var(--text-normal);
          border: 1px solid var(--background-modifier-accent);
        }
        .asciimoji-settings input[type="checkbox"] { margin-right: 8px; }
        .asciimoji-settings .status { margin-left: 10px; color: var(--text-muted); }
      `);
    }
  };
})();
