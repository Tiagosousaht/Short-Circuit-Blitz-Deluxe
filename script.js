const SUPABASE_URL = "https://pvrppnzmzbfuksxlyhbs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_LN7ENWind7D2IcnhMES0Jg_QRt2cQqu";

function createSafeSupabaseClient() {
  try {
    const hasLib =
      typeof window !== "undefined" &&
      window.supabase &&
      typeof window.supabase.createClient === "function";

    const hasConfig = !!SUPABASE_URL && !!SUPABASE_ANON_KEY;
    if (!hasLib || !hasConfig) return null;

    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error("Erro Supabase:", error);
    return null;
  }
}

const sb = createSafeSupabaseClient();

const i18n = {
  pt: {
    brandKicker: "Neon Puzzle Grid",
    startTitle: "CURTO-CIRCUITO",
    startSubtitle: "BLITZ",
    startDesc:
      "O sistema está superaquecendo! Gire as peças para ligar a bateria ⚡ até a lâmpada 💡 antes do tempo acabar.",
    pillFast: "⚡ Rápido",
    pillSmart: "🧠 Estratégico",
    pillNeon: "💡 Neon Puzzle",
    btnStartGuest: "Jogar sem login",
    btnStartLogged: "Jogar",
    btnHow: "Como jogar",
    btnLoginOpen: "Entrar",
    btnSignupOpen: "Criar conta",
    best: "Melhor",
    bestLevel: "Recorde",
    mode: "Modo",
    modeValue: "Blitz",
    grid: "Grade",
    level: "Nível",
    time: "Tempo",
    score: "Pontos",
    rotations: "Giros",
    reset: "Reiniciar fase",
    soundOn: "Som: ON",
    soundOff: "Som: OFF",
    win: "SISTEMA ONLINE!",
    winSub: "Ligação concluída. A rede voltou a operar.",
    loss: "CURTO-CIRCUITO!",
    restart: "O tempo acabou. Tente novamente esta fase.",
    next: "Próximo Nível",
    retry: "Tentar de novo",
    helpTitle: "Como jogar",
    helpText:
      "Clique ou toque nas peças para girar. Conecte a bateria ⚡ até a lâmpada 💡 antes do cronômetro zerar.",
    close: "Fechar",
    tip: "Dica: comece montando o caminho principal.",
    waiting: "Sistema aguardando inicialização",
    online: "Fluxo detectado",
    critical: "Tempo crítico",
    running: "Rede energizada",
    loginDisabled: "Login e ranking indisponíveis até configurar o Supabase.",
    loginTitle: "Entrar",
    signupTitle: "Criar conta",
    rankingTitle: "Ranking",
    authEmail: "Email",
    authPassword: "Senha",
    authNickname: "Apelido",
    loginSuccess: "Login realizado com sucesso.",
    signupSuccess: "Conta criada e login realizado com sucesso.",
    fillLogin: "Preencha email e senha.",
    fillSignup: "Preencha apelido, email e senha.",
    guest: "Visitante",
    loggedAs: "Logado:",
    home: "Início",
    logout: "Sair",
    refresh: "Atualizar",
    loading: "Carregando...",
    noPlayers: "Nenhum jogador no ranking ainda.",
    pts: "Pts",
    lvl: "Nv",
    nicknameTooLong: "O apelido deve ter no máximo 6 caracteres.",
    nicknameInvalid: "Use só letras e números no apelido, sem espaços.",
    emailNotConfirmed:
      "A conta foi criada, mas a confirmação de email ainda está ativa no Supabase.",
    loginError: "Não foi possível entrar agora. Tente novamente.",
    signupError: "Não foi possível criar a conta agora.",
    logoutLoading: "Saindo..."
  },
  en: {
    brandKicker: "Neon Puzzle Grid",
    startTitle: "SHORT-CIRCUIT",
    startSubtitle: "BLITZ",
    startDesc:
      "The system is overheating! Rotate the pieces to connect the battery ⚡ to the bulb 💡 before time runs out.",
    pillFast: "⚡ Fast",
    pillSmart: "🧠 Strategic",
    pillNeon: "💡 Neon Puzzle",
    btnStartGuest: "Play as guest",
    btnStartLogged: "Play",
    btnHow: "How to play",
    btnLoginOpen: "Login",
    btnSignupOpen: "Create account",
    best: "Best",
    bestLevel: "Record",
    mode: "Mode",
    modeValue: "Blitz",
    grid: "Grid",
    level: "Level",
    time: "Time",
    score: "Score",
    rotations: "Rotations",
    reset: "Restart stage",
    soundOn: "Sound: ON",
    soundOff: "Sound: OFF",
    win: "SYSTEM ONLINE!",
    winSub: "Connection completed. Power has been restored.",
    loss: "SHORT-CIRCUIT!",
    restart: "Time is up. Try this stage again.",
    next: "Next Level",
    retry: "Try Again",
    helpTitle: "How to play",
    helpText:
      "Click or tap pieces to rotate them. Connect the battery ⚡ to the bulb 💡 before the timer reaches zero.",
    close: "Close",
    tip: "Tip: build the main path first.",
    waiting: "System waiting for initialization",
    online: "Flow detected",
    critical: "Critical time",
    running: "Grid energized",
    loginDisabled: "Login and ranking are unavailable until Supabase is configured.",
    loginTitle: "Login",
    signupTitle: "Create account",
    rankingTitle: "Ranking",
    authEmail: "Email",
    authPassword: "Password",
    authNickname: "Nickname",
    loginSuccess: "Login successful.",
    signupSuccess: "Account created and logged in successfully.",
    fillLogin: "Fill in email and password.",
    fillSignup: "Fill in nickname, email and password.",
    guest: "Guest",
    loggedAs: "Logged in:",
    home: "Home",
    logout: "Logout",
    refresh: "Refresh",
    loading: "Loading...",
    noPlayers: "No players on the leaderboard yet.",
    pts: "Pts",
    lvl: "Lv",
    nicknameTooLong: "Nickname must have at most 6 characters.",
    nicknameInvalid: "Use only letters and numbers in the nickname.",
    emailNotConfirmed:
      "The account was created, but email confirmation is still enabled in Supabase.",
    loginError: "Could not log in right now. Please try again.",
    signupError: "Could not create the account right now.",
    logoutLoading: "Logging out..."
  },
  es: {
    brandKicker: "Neon Puzzle Grid",
    startTitle: "CORTOCIRCUITO",
    startSubtitle: "BLITZ",
    startDesc:
      "¡El sistema se está sobrecalentando! Gira las piezas para conectar la batería ⚡ a la bombilla 💡 antes de que se acabe el tiempo.",
    pillFast: "⚡ Rápido",
    pillSmart: "🧠 Estratégico",
    pillNeon: "💡 Neon Puzzle",
    btnStartGuest: "Jugar sin login",
    btnStartLogged: "Jugar",
    btnHow: "Cómo jugar",
    btnLoginOpen: "Entrar",
    btnSignupOpen: "Crear cuenta",
    best: "Mejor",
    bestLevel: "Récord",
    mode: "Modo",
    modeValue: "Blitz",
    grid: "Cuadrícula",
    level: "Nivel",
    time: "Tiempo",
    score: "Puntos",
    rotations: "Giros",
    reset: "Reiniciar fase",
    soundOn: "Sonido: ON",
    soundOff: "Sonido: OFF",
    win: "¡SISTEMA ONLINE!",
    winSub: "Conexión completada. La red vuelve a funcionar.",
    loss: "¡CORTOCIRCUITO!",
    restart: "Se acabó el tiempo. Intenta esta fase otra vez.",
    next: "Siguiente nivel",
    retry: "Reintentar",
    helpTitle: "Cómo jugar",
    helpText:
      "Haz clic o toca las piezas para girarlas. Conecta la batería ⚡ con la bombilla 💡 antes de que termine el tiempo.",
    close: "Cerrar",
    tip: "Consejo: arma primero el camino principal.",
    waiting: "Sistema esperando inicialización",
    online: "Flujo detectado",
    critical: "Tiempo crítico",
    running: "Red energizada",
    loginDisabled: "El login y el ranking no están disponibles hasta configurar Supabase.",
    loginTitle: "Entrar",
    signupTitle: "Crear cuenta",
    rankingTitle: "Ranking",
    authEmail: "Email",
    authPassword: "Contraseña",
    authNickname: "Apodo",
    loginSuccess: "Inicio de sesión realizado con éxito.",
    signupSuccess: "Cuenta creada e inicio de sesión realizado con éxito.",
    fillLogin: "Completa email y contraseña.",
    fillSignup: "Completa apodo, email y contraseña.",
    guest: "Invitado",
    loggedAs: "Conectado:",
    home: "Inicio",
    logout: "Salir",
    refresh: "Actualizar",
    loading: "Cargando...",
    noPlayers: "Todavía no hay jugadores en el ranking.",
    pts: "Pts",
    lvl: "Nv",
    nicknameTooLong: "El apodo debe tener como máximo 6 caracteres.",
    nicknameInvalid: "Usa solo letras y números en el apodo.",
    emailNotConfirmed:
      "La cuenta fue creada, pero la confirmación por email sigue activa en Supabase.",
    loginError: "No se pudo iniciar sesión ahora. Inténtalo otra vez.",
    signupError: "No se pudo crear la cuenta ahora.",
    logoutLoading: "Saliendo..."
  }
};

function getLocalBestScore() {
  return Number(localStorage.getItem("scb_best_score") || 0);
}

function getLocalBestLevel() {
  return Number(localStorage.getItem("scb_best_level") || 1);
}

function setLocalBests(score, level) {
  localStorage.setItem("scb_best_score", String(score));
  localStorage.setItem("scb_best_level", String(level));
}

const state = {
  currentLang: "pt",
  currentLevel: 1,
  score: 0,
  bestScore: getLocalBestScore(),
  bestLevel: getLocalBestLevel(),
  timeLeft: 0,
  maxTime: 0,
  timerId: null,
  isGameOver: false,
  isGameStarted: false,
  soundEnabled: true,
  rotations: 0,
  gridSize: 3,
  cellSize: 0,
  board: [],
  currentSeedPath: [],
  user: null,
  isGuest: true,
  authBusy: false,
  logoutBusy: false
};

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const particlesCanvas = document.getElementById("particles");
const pctx = particlesCanvas.getContext("2d");

const ui = {
  startOverlay: document.getElementById("start-overlay"),
  gameGroup: document.getElementById("game-ui-group"),
  winOverlay: document.getElementById("win-overlay"),
  lossOverlay: document.getElementById("loss-overlay"),
  helpOverlay: document.getElementById("help-overlay"),
  loginOverlay: document.getElementById("login-overlay"),
  signupOverlay: document.getElementById("signup-overlay"),
  timerBar: document.getElementById("timer-bar"),
  labelLevel: document.getElementById("label-level"),
  labelTime: document.getElementById("label-time"),
  labelScore: document.getElementById("label-score"),
  labelRotations: document.getElementById("label-rotations"),
  bestScore: document.getElementById("best-score"),
  bestLevel: document.getElementById("best-level"),
  gridPreview: document.getElementById("grid-preview"),
  status: document.getElementById("status-text"),
  userChip: document.getElementById("user-chip"),
  loginStatus: document.getElementById("login-status"),
  signupStatus: document.getElementById("signup-status"),
  rankingList: document.getElementById("ranking-list-sidebar"),
  btnLogout: document.getElementById("btn-logout"),
  btnStart: document.getElementById("btn-start"),
  btnOpenLogin: document.getElementById("btn-open-login"),
  btnOpenSignup: document.getElementById("btn-open-signup"),
  btnRefreshRankingSidebar: document.getElementById("btn-refresh-ranking-sidebar"),
  btnLogin: document.getElementById("btn-login"),
  btnSignup: document.getElementById("btn-signup")
};

function t(key) {
  return i18n[state.currentLang]?.[key] || i18n.pt[key] || key;
}

function setLanguage(lang) {
  state.currentLang = i18n[lang] ? lang : "pt";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.currentLang);
  });

  updateTexts();
  updateUserUI();
  loadRanking();
}

function normalizeNickname(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 6);
}

function validateNickname(value) {
  const nickname = normalizeNickname(value);
  if (!nickname) return { ok: false, message: t("fillSignup"), value: "" };
  if (!/^[a-zA-Z0-9]{1,6}$/.test(nickname)) {
    return { ok: false, message: t("nicknameInvalid"), value: nickname };
  }
  return { ok: true, message: "", value: nickname };
}

function showOverlay(el) {
  if (el) el.style.display = "flex";
}

function hideOverlay(el) {
  if (el) el.style.display = "none";
}

function clearAuthMessages() {
  ui.loginStatus.textContent = "";
  ui.signupStatus.textContent = "";
}

function setAuthBusy(isBusy, mode = "login") {
  state.authBusy = isBusy;
  ui.btnLogin.disabled = isBusy;
  ui.btnSignup.disabled = isBusy;
  ui.btnLogin.style.opacity = isBusy ? "0.7" : "1";
  ui.btnSignup.style.opacity = isBusy ? "0.7" : "1";

  if (mode === "login" && isBusy) ui.loginStatus.textContent = t("loading");
  if (mode === "signup" && isBusy) ui.signupStatus.textContent = t("loading");
}

function setLogoutBusy(isBusy) {
  state.logoutBusy = isBusy;
  ui.btnLogout.disabled = isBusy;
  ui.btnLogout.style.opacity = isBusy ? "0.7" : "1";
  ui.btnLogout.textContent = isBusy ? t("logoutLoading") : t("logout");
}

function finishAuthUI() {
  clearAuthMessages();
  hideOverlay(ui.loginOverlay);
  hideOverlay(ui.signupOverlay);
  setAuthBusy(false, "login");
  setAuthBusy(false, "signup");
}

function resetAuthUIAfterError() {
  setAuthBusy(false, "login");
  setAuthBusy(false, "signup");
}

function openLogin() {
  clearAuthMessages();
  showOverlay(ui.loginOverlay);
}

function closeLogin() {
  hideOverlay(ui.loginOverlay);
  clearAuthMessages();
  resetAuthUIAfterError();
}

function openSignup() {
  clearAuthMessages();
  showOverlay(ui.signupOverlay);
}

function closeSignup() {
  hideOverlay(ui.signupOverlay);
  clearAuthMessages();
  resetAuthUIAfterError();
}

function updateUserUI() {
  if (state.user) {
    const nickname =
      state.user.user_metadata?.nickname || state.user.email || "Jogador";
    ui.userChip.textContent = `${t("loggedAs")} ${nickname}`;
    ui.btnLogout.style.display = "inline-flex";
    ui.btnOpenSignup.classList.add("hidden-auth-btn");
    ui.btnStart.textContent = t("btnStartLogged");
  } else {
    ui.userChip.textContent = t("guest");
    ui.btnLogout.style.display = "none";
    ui.btnOpenSignup.classList.remove("hidden-auth-btn");
    ui.btnStart.textContent = t("btnStartGuest");
  }
}

function updateTexts() {
  document.getElementById("brand-kicker").textContent = t("brandKicker");
  document.getElementById("start-title").textContent = t("startTitle");
  document.getElementById("start-subtitle").textContent = t("startSubtitle");
  document.getElementById("start-desc").textContent = t("startDesc");
  document.getElementById("pill-fast").textContent = t("pillFast");
  document.getElementById("pill-smart").textContent = t("pillSmart");
  document.getElementById("pill-neon").textContent = t("pillNeon");
  document.getElementById("btn-how").textContent = t("btnHow");
  ui.btnStart.textContent = state.user ? t("btnStartLogged") : t("btnStartGuest");
  ui.btnOpenLogin.textContent = t("btnLoginOpen");
  ui.btnOpenSignup.textContent = t("btnSignupOpen");
  document.getElementById("label-best").textContent = t("best");
  document.getElementById("label-max-level").textContent = t("bestLevel");
  document.getElementById("label-mode").textContent = t("mode");
  document.getElementById("mode-label").textContent = t("modeValue");
  document.getElementById("label-grid").textContent = t("grid");
  document.getElementById("hud-level-title").textContent = t("level");
  document.getElementById("hud-time-title").textContent = t("time");
  document.getElementById("hud-score-title").textContent = t("score");
  document.getElementById("hud-rotations-title").textContent = t("rotations");
  document.getElementById("btn-reset").textContent = t("reset");
  document.getElementById("btn-sound").textContent = state.soundEnabled ? t("soundOn") : t("soundOff");
  document.getElementById("btn-back-home").textContent = t("home");
  ui.btnLogout.textContent = state.logoutBusy ? t("logoutLoading") : t("logout");
  document.getElementById("msg-win").textContent = t("win");
  document.getElementById("msg-win-sub").textContent = t("winSub");
  document.getElementById("msg-loss").textContent = t("loss");
  document.getElementById("msg-restart").textContent = t("restart");
  document.getElementById("btn-next").textContent = t("next");
  document.getElementById("btn-retry").textContent = t("retry");
  document.getElementById("msg-help-title").textContent = t("helpTitle");
  document.getElementById("msg-help-text").textContent = t("helpText");
  document.getElementById("btn-close-help").textContent = t("close");
  document.getElementById("tip-text").textContent = t("tip");
  document.getElementById("login-title").textContent = t("loginTitle");
  document.getElementById("signup-title").textContent = t("signupTitle");
  document.getElementById("sidebar-ranking-title").textContent = `🏆 ${t("rankingTitle")}`;

  if (ui.btnRefreshRankingSidebar) {
    ui.btnRefreshRankingSidebar.textContent = t("refresh");
  }

  document.getElementById("btn-close-login").textContent = t("close");
  document.getElementById("btn-close-signup").textContent = t("close");
  ui.btnLogin.textContent = t("loginTitle");
  ui.btnSignup.textContent = t("signupTitle");

  document.getElementById("login-email").placeholder = t("authEmail");
  document.getElementById("login-password").placeholder = t("authPassword");
  document.getElementById("signup-nickname").placeholder = t("authNickname");
  document.getElementById("signup-email").placeholder = t("authEmail");
  document.getElementById("signup-password").placeholder = t("authPassword");

  if (!state.isGameStarted) {
    ui.status.textContent = t("waiting");
  }

  ui.bestScore.textContent = state.bestScore;
  ui.bestLevel.textContent = state.bestLevel;
  ui.gridPreview.textContent = `${computeGrid(state.currentLevel)}x${computeGrid(state.currentLevel)}`;
  ui.labelLevel.textContent = state.currentLevel;
  ui.labelScore.textContent = state.score;
  ui.labelRotations.textContent = state.rotations;
  ui.labelTime.textContent = `${Math.max(0, state.timeLeft).toFixed(1)}s`;
}

function applyCloudProgress(bestScore, bestLevel) {
  state.bestScore = Number(bestScore || 0);
  state.bestLevel = Number(bestLevel || 1);
  setLocalBests(state.bestScore, state.bestLevel);
}

async function syncBestFromCloud() {
  if (!sb || !state.user) return;

  const { data, error } = await sb
    .from("leaderboard")
    .select("best_score, best_level")
    .eq("user_id", state.user.id)
    .single();

  if (error || !data) {
    applyCloudProgress(0, 1);
    return;
  }

  applyCloudProgress(data.best_score, data.best_level);
}

function saveBest() {
  let changed = false;

  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    changed = true;
  }

  if (state.currentLevel > state.bestLevel) {
    state.bestLevel = state.currentLevel;
    changed = true;
  }

  if (changed) {
    setLocalBests(state.bestScore, state.bestLevel);
    ui.bestScore.textContent = state.bestScore;
    ui.bestLevel.textContent = state.bestLevel;
  }

  return changed;
}

function resizeCanvas() {
  const parent = canvas.parentElement;
  const parentWidth = parent ? parent.clientWidth : 560;
  const size = Math.max(260, Math.min(parentWidth || 560, 560));
  const ratio = window.devicePixelRatio || 1;

  canvas.width = size * ratio;
  canvas.height = size * ratio;
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(ratio, ratio);

  state.cellSize = size / state.gridSize;
}

function resizeParticles() {
  const ratio = window.devicePixelRatio || 1;
  particlesCanvas.width = window.innerWidth * ratio;
  particlesCanvas.height = window.innerHeight * ratio;
  particlesCanvas.style.width = window.innerWidth + "px";
  particlesCanvas.style.height = window.innerHeight + "px";
  pctx.setTransform(1, 0, 0, 1, 0, 0);
  pctx.scale(ratio, ratio);
}

const particles = Array.from({ length: 50 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 2.8 + 0.8,
  dx: (Math.random() - 0.5) * 0.45,
  dy: Math.random() * -0.32 - 0.08,
  a: Math.random() * 0.55 + 0.18
}));

function drawParticles() {
  pctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const p of particles) {
    p.x += p.dx;
    p.y += p.dy;

    if (p.a > 0.02) p.a *= 0.998;

    if (p.y < -20) {
      p.y = window.innerHeight + 20;
      p.x = Math.random() * window.innerWidth;
      p.a = Math.random() * 0.55 + 0.18;
      p.r = Math.random() * 2.8 + 0.8;
      p.dx = (Math.random() - 0.5) * 0.45;
      p.dy = Math.random() * -0.32 - 0.08;
    }

    if (p.x < -20) p.x = window.innerWidth + 20;
    if (p.x > window.innerWidth + 20) p.x = -20;

    const hue = (Date.now() * 0.05 + p.x) % 360;
    pctx.beginPath();
    pctx.fillStyle = `hsla(${hue}, 100%, 60%, ${p.a})`;
    pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pctx.fill();
  }

  requestAnimationFrame(drawParticles);
}

function createExplosion() {
  for (let i = 0; i < 28; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 220,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 160,
      r: Math.random() * 4 + 2,
      dx: (Math.random() - 0.5) * 5.5,
      dy: (Math.random() - 0.5) * 5.5,
      a: 0.95
    });
  }
}

const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const audioCtx = AudioContextClass ? new AudioContextClass() : null;

function playSfx(freq, type = "sine", duration = 0.12, gainValue = 0.08) {
  if (!state.soundEnabled || !audioCtx) return;

  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {}
}

function playWinSfx() {
  playSfx(880, "square", 0.15, 0.1);
  setTimeout(() => playSfx(1040, "square", 0.15, 0.1), 120);
  setTimeout(() => playSfx(1320, "square", 0.2, 0.12), 240);
}

function computeGrid(level) {
  if (level <= 2) return 3;
  if (level <= 5) return 4;
  if (level <= 9) return 5;
  if (level <= 14) return 6;
  return 7;
}

function computeMaxTime(level, grid) {
  if (level <= 2) return 32;
  if (level <= 4) return 29;
  if (level <= 6) return 27;
  if (level <= 9) return 24;
  if (level <= 12) return 21;
  if (level <= 16) return 18;

  return Math.max(15, 17 - Math.floor((level - 16) / 2)) + Math.max(0, 7 - grid);
}

function getDifficultyProfile(level) {
  if (level <= 2) {
    return {
      extraTurnsMin: 1,
      extraTurnsMax: 1,
      randomTiles: 1,
      fakeTilesChance: 0.05,
      extraRandomRotations: 1
    };
  }

  if (level <= 4) {
    return {
      extraTurnsMin: 1,
      extraTurnsMax: 2,
      randomTiles: 2,
      fakeTilesChance: 0.10,
      extraRandomRotations: 2
    };
  }

  if (level <= 6) {
    return {
      extraTurnsMin: 1,
      extraTurnsMax: 3,
      randomTiles: 4,
      fakeTilesChance: 0.14,
      extraRandomRotations: 3
    };
  }

  if (level <= 9) {
    return {
      extraTurnsMin: 2,
      extraTurnsMax: 3,
      randomTiles: 6,
      fakeTilesChance: 0.18,
      extraRandomRotations: 4
    };
  }

  if (level <= 12) {
    return {
      extraTurnsMin: 2,
      extraTurnsMax: 3,
      randomTiles: 8,
      fakeTilesChance: 0.22,
      extraRandomRotations: 5
    };
  }

  if (level <= 16) {
    return {
      extraTurnsMin: 2,
      extraTurnsMax: 4,
      randomTiles: 10,
      fakeTilesChance: 0.28,
      extraRandomRotations: 6
    };
  }

  return {
    extraTurnsMin: 2,
    extraTurnsMax: 4,
    randomTiles: 12,
    fakeTilesChance: 0.34,
    extraRandomRotations: 7
  };
}

function getConns(type) {
  if (type === "S") return [true, false, true, false];
  if (type === "C") return [true, true, false, false];
  return [true, true, false, true];
}

function rotateConns(conns, times = 1) {
  const copy = [...conns];
  for (let i = 0; i < times; i++) copy.unshift(copy.pop());
  return copy;
}

function cloneConns(conns) {
  return [...conns];
}

function buildPath() {
  const path = [{ r: 0, c: 0 }];
  let r = 0;
  let c = 0;

  while (r < state.gridSize - 1 || c < state.gridSize - 1) {
    const canGoRight = c < state.gridSize - 1;
    const canGoDown = r < state.gridSize - 1;

    let goRight;
    if (!canGoDown) goRight = true;
    else if (!canGoRight) goRight = false;
    else goRight = Math.random() > 0.45;

    if (goRight) c++;
    else r++;

    path.push({ r, c });
  }

  return path;
}

function directionBetween(a, b) {
  if (b.r < a.r) return 0;
  if (b.c > a.c) return 1;
  if (b.r > a.r) return 2;
  return 3;
}

function connsFromDirections(dirs) {
  const arr = [false, false, false, false];
  dirs.forEach((d) => {
    arr[d] = true;
  });
  return arr;
}

function classifyTile(conns) {
  const count = conns.filter(Boolean).length;
  if (count === 2) {
    if ((conns[0] && conns[2]) || (conns[1] && conns[3])) return "S";
    return "C";
  }
  return "T";
}

function randomType() {
  const types = ["S", "C", "T"];
  return types[Math.floor(Math.random() * types.length)];
}

function setSolvedBoardFromPath(path) {
  const pathMap = new Map(path.map((p, idx) => [`${p.r}-${p.c}`, idx]));
  state.board = [];

  for (let r = 0; r < state.gridSize; r++) {
    state.board[r] = [];
    for (let c = 0; c < state.gridSize; c++) {
      const key = `${r}-${c}`;
      const isStart = r === 0 && c === 0;
      const isEnd = r === state.gridSize - 1 && c === state.gridSize - 1;

      let conns;
      let type;

      if (pathMap.has(key)) {
        const idx = pathMap.get(key);
        const dirs = [];

        if (idx > 0) dirs.push(directionBetween(path[idx], path[idx - 1]));
        if (idx < path.length - 1) dirs.push(directionBetween(path[idx], path[idx + 1]));

        conns = connsFromDirections(dirs);
        type = classifyTile(conns);
      } else {
        type = randomType();
        conns = getConns(type);
      }

      state.board[r][c] = {
        type,
        conns: cloneConns(conns),
        solvedConns: cloneConns(conns),
        isStart,
        isEnd,
        active: false,
        justRotated: false
      };
    }
  }
}

function scrambleBoard() {
  const profile = getDifficultyProfile(state.currentLevel);
  const pathSet = new Set(state.currentSeedPath.map((p) => `${p.r}-${p.c}`));

  for (let r = 0; r < state.gridSize; r++) {
    for (let c = 0; c < state.gridSize; c++) {
      const piece = state.board[r][c];
      if (piece.isStart || piece.isEnd) continue;

      const isPathTile = pathSet.has(`${r}-${c}`);

      if (isPathTile) {
        const range = profile.extraTurnsMax - profile.extraTurnsMin + 1;
        const turns =
          profile.extraTurnsMin + Math.floor(Math.random() * range);

        piece.conns = rotateConns(piece.solvedConns, turns);
      } else {
        if (Math.random() < profile.fakeTilesChance) {
          piece.type = randomType();
          piece.solvedConns = getConns(piece.type);
        }

        const turns = Math.floor(Math.random() * 4);
        piece.conns = rotateConns(piece.solvedConns, turns);
      }
    }
  }

  for (let i = 0; i < profile.randomTiles; i++) {
    const rr = Math.floor(Math.random() * state.gridSize);
    const cc = Math.floor(Math.random() * state.gridSize);
    const piece = state.board[rr][cc];

    if (!piece || piece.isStart || piece.isEnd) continue;

    const extra = 1 + Math.floor(Math.random() * profile.extraRandomRotations);
    piece.conns = rotateConns(piece.conns, extra);
  }
}

function generateBoard() {
  let solved = true;
  let tries = 0;

  while (solved && tries < 12) {
    state.currentSeedPath = buildPath();
    setSolvedBoardFromPath(state.currentSeedPath);
    scrambleBoard();

    solved = false;

    state.board.forEach((row) => {
      row.forEach((piece) => {
        if (piece.isStart || piece.isEnd) return;

        const same =
          JSON.stringify(piece.conns) === JSON.stringify(piece.solvedConns);

        if (same) solved = true;
      });
    });

    tries++;
  }

  checkFlow();
}

function startGame() {
  state.isGameStarted = true;
  state.currentLevel = 1;
  state.gridSize = computeGrid(1);
  state.score = 0;
  state.rotations = 0;

  hideOverlay(ui.helpOverlay);
  hideOverlay(ui.loginOverlay);
  hideOverlay(ui.signupOverlay);
  hideOverlay(ui.winOverlay);
  hideOverlay(ui.lossOverlay);

  ui.startOverlay.classList.add("hidden");
  ui.gameGroup.style.display = "block";
  ui.gameGroup.classList.add("fade-in");

  requestAnimationFrame(() => {
    initLevel();
    drawBoard();
  });

  playSfx(520, "sine", 0.2, 0.14);
}

function initLevel() {
  clearInterval(state.timerId);
  state.isGameOver = false;
  state.rotations = 0;

  hideOverlay(ui.winOverlay);
  hideOverlay(ui.lossOverlay);
  hideOverlay(ui.helpOverlay);

  state.gridSize = computeGrid(state.currentLevel);
  resizeCanvas();

  state.maxTime = computeMaxTime(state.currentLevel, state.gridSize);
  state.timeLeft = state.maxTime;

  generateBoard();
  updateTexts();

  ui.status.textContent = `${t("running")} • Lv ${state.currentLevel}`;
  ui.timerBar.style.width = "100%";
  drawBoard();
  startTimer();
}

function restartCurrentLevel() {
  clearInterval(state.timerId);
  state.isGameOver = false;
  state.rotations = 0;

  hideOverlay(ui.winOverlay);
  hideOverlay(ui.lossOverlay);
  hideOverlay(ui.helpOverlay);

  state.maxTime = computeMaxTime(state.currentLevel, state.gridSize);
  state.timeLeft = state.maxTime;

  generateBoard();
  updateTexts();
  ui.status.textContent = `${t("running")} • Lv ${state.currentLevel}`;
  ui.timerBar.style.width = "100%";
  drawBoard();
  startTimer();
}

function goHome() {
  clearInterval(state.timerId);
  state.isGameStarted = false;
  state.isGameOver = false;
  hideOverlay(ui.winOverlay);
  hideOverlay(ui.lossOverlay);
  ui.gameGroup.style.display = "none";
  ui.startOverlay.classList.remove("hidden");
  ui.status.textContent = t("waiting");
  updateTexts();
}

function startTimer() {
  state.timerId = setInterval(() => {
    state.timeLeft -= 0.1;

    const pct = Math.max(0, (state.timeLeft / state.maxTime) * 100);
    ui.timerBar.style.width = pct + "%";
    ui.labelTime.textContent = `${Math.max(0, state.timeLeft).toFixed(1)}s`;

    if (state.currentLevel >= 8 && pct < 35) {
      ui.timerBar.style.filter = "brightness(1.15)";
    } else {
      ui.timerBar.style.filter = "brightness(1)";
    }

    if (pct < 20) ui.status.textContent = t("critical");

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      state.isGameOver = true;
      ui.status.textContent = t("loss");
      showOverlay(ui.lossOverlay);
      playSfx(120, "sawtooth", 0.5, 0.12);
    }
  }, 100);
}

async function persistProgressToCloud() {
  if (!sb || !state.user) return false;

  const nickname =
    state.user.user_metadata?.nickname ||
    state.user.email?.split("@")[0] ||
    "Jogador";

  const payload = {
    user_id: state.user.id,
    nickname,
    best_score: state.bestScore,
    best_level: state.bestLevel
  };

  const { error } = await sb
    .from("leaderboard")
    .upsert(payload, { onConflict: "user_id" });

  if (error) {
    console.error("Erro ao salvar ranking:", error.message);
    return false;
  }

  return true;
}

async function checkFlow() {
  if (!state.board.length) return;

  state.board.forEach((row) => row.forEach((p) => (p.active = false)));

  const queue = [{ r: 0, c: 0 }];
  state.board[0][0].active = true;
  let foundEnd = false;

  while (queue.length) {
    const { r, c } = queue.shift();

    if (state.board[r][c].isEnd) foundEnd = true;

    const neighbors = [
      { dr: -1, dc: 0, s: 0, o: 2 },
      { dr: 0, dc: 1, s: 1, o: 3 },
      { dr: 1, dc: 0, s: 2, o: 0 },
      { dr: 0, dc: -1, s: 3, o: 1 }
    ];

    neighbors.forEach((n) => {
      const nr = r + n.dr;
      const nc = c + n.dc;

      if (nr >= 0 && nr < state.gridSize && nc >= 0 && nc < state.gridSize) {
        if (
          state.board[r][c].conns[n.s] &&
          state.board[nr][nc].conns[n.o] &&
          !state.board[nr][nc].active
        ) {
          state.board[nr][nc].active = true;
          queue.push({ r: nr, c: nc });
        }
      }
    });
  }

  if (foundEnd && !state.isGameOver && state.isGameStarted) {
    clearInterval(state.timerId);

    const bonus =
      Math.max(40, Math.floor(state.timeLeft * 10)) +
      Math.max(0, 120 - state.rotations * 2);

    state.score += bonus;
    const changed = saveBest();

    ui.labelScore.textContent = state.score;
    updateTexts();
    ui.status.textContent = t("online");
    drawBoard();
    createExplosion();

    if (changed && state.user) {
      const ok = await persistProgressToCloud();
      if (ok) await loadRanking();
    }

    setTimeout(() => {
      showOverlay(ui.winOverlay);
      playWinSfx();
    }, 220);
  }
}

function nextLevel() {
  state.currentLevel += 1;

  if (state.currentLevel % 3 === 0) {
    playSfx(980, "square", 0.12, 0.10);
  } else {
    playSfx(760, "square", 0.10, 0.08);
  }

  initLevel();
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  document.getElementById("btn-sound").textContent = state.soundEnabled ? t("soundOn") : t("soundOff");
  playSfx(620, "sine", 0.06, 0.04);
}

function rotatePieceAt(clientX, clientY) {
  if (
    !state.isGameStarted ||
    state.isGameOver ||
    ui.winOverlay.style.display === "flex" ||
    ui.lossOverlay.style.display === "flex" ||
    ui.helpOverlay.style.display === "flex" ||
    ui.loginOverlay.style.display === "flex" ||
    ui.signupOverlay.style.display === "flex"
  ) return;

  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const col = Math.floor(x / state.cellSize);
  const row = Math.floor(y / state.cellSize);

  if (row < 0 || row >= state.gridSize || col < 0 || col >= state.gridSize) return;

  const piece = state.board[row]?.[col];
  if (!piece || piece.isStart || piece.isEnd) return;

  piece.conns = rotateConns(piece.conns, 1);
  piece.justRotated = true;
  state.rotations += 1;
  ui.labelRotations.textContent = state.rotations;

  navigator.vibrate?.(10);
  playSfx(380 + Math.random() * 200, "triangle", 0.07, 0.05);
  checkFlow();
  drawBoard();
}

function drawBoard() {
  if (!state.board.length) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const boardSize = state.gridSize * state.cellSize;
  ctx.clearRect(0, 0, boardSize, boardSize);

  for (let r = 0; r < state.gridSize; r++) {
    for (let c = 0; c < state.gridSize; c++) {
      drawPiece(r, c, state.board[r][c]);
    }
  }
}

function drawPiece(row, col, piece) {
  const x = col * state.cellSize;
  const y = row * state.cellSize;
  const pad = state.cellSize * 0.18;
  const mid = state.cellSize / 2;

  ctx.save();
  ctx.translate(x, y);

  ctx.fillStyle = piece.active ? "rgba(40, 224, 255, 0.18)" : "rgba(255,255,255,0.06)";
  ctx.strokeStyle = "rgba(255,255,255,0.09)";
  roundRect(ctx, 4, 4, state.cellSize - 8, state.cellSize - 8, 16, true, true);

  const cx = mid;
  const cy = mid;
  ctx.lineWidth = Math.max(8, state.cellSize * 0.11);
  ctx.lineCap = "round";

  const time = Date.now() * 0.005;
  const pulse = 0.5 + Math.sin(time + row + col) * 0.5;

  ctx.strokeStyle = piece.active
    ? `rgba(40, 224, 255, ${0.6 + pulse * 0.4})`
    : "rgba(148,163,184,0.65)";
  ctx.shadowBlur = piece.active ? 18 : 0;
  ctx.shadowColor = piece.active ? "#28e0ff" : "transparent";

  if (piece.justRotated) {
    ctx.shadowBlur = 30;
    ctx.shadowColor = "#28e0ff";
    piece.justRotated = false;
  }

  const dirs = [
    [cx, pad],
    [state.cellSize - pad, cy],
    [cx, state.cellSize - pad],
    [pad, cy]
  ];

  piece.conns.forEach((connected, i) => {
    if (!connected) return;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(dirs[i][0], dirs[i][1]);
    ctx.stroke();
  });

  ctx.shadowBlur = piece.active ? 24 : 0;
  ctx.fillStyle = piece.active ? "#67f0ff" : "rgba(255,255,255,0.18)";
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(6, state.cellSize * 0.09), 0, Math.PI * 2);
  ctx.fill();

  if (piece.isStart) {
    ctx.shadowBlur = 22;
    ctx.fillStyle = "#ffdd57";
    ctx.font = `900 ${Math.max(20, state.cellSize * 0.26)}px Inter, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⚡", cx, cy);
  }

  if (piece.isEnd) {
    ctx.shadowBlur = 22;
    ctx.fillStyle = "#ffffff";
    ctx.font = `900 ${Math.max(20, state.cellSize * 0.26)}px Inter, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("💡", cx, cy);
  }

  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

async function loginWithCredentials(email, password) {
  return await sb.auth.signInWithPassword({ email, password });
}

async function signup() {
  if (!sb) {
    ui.signupStatus.textContent = t("loginDisabled");
    return;
  }
  if (state.authBusy) return;

  const nicknameInput = document.getElementById("signup-nickname");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");

  const rawNickname = nicknameInput.value;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const nicknameCheck = validateNickname(rawNickname);
  nicknameInput.value = nicknameCheck.value;

  if (!nicknameCheck.ok) {
    ui.signupStatus.textContent = nicknameCheck.message;
    return;
  }
  if (!email || !password) {
    ui.signupStatus.textContent = t("fillSignup");
    return;
  }

  setAuthBusy(true, "signup");

  try {
    const nickname = nicknameCheck.value;

    const { error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { nickname } }
    });

    if (error) {
      ui.signupStatus.textContent = error.message || t("signupError");
      resetAuthUIAfterError();
      return;
    }

    const autoLogin = await loginWithCredentials(email, password);
    if (autoLogin.error) {
      ui.signupStatus.textContent = autoLogin.error.message || t("emailNotConfirmed");
      resetAuthUIAfterError();
      return;
    }

    if (!autoLogin.data?.user) {
      ui.signupStatus.textContent = t("emailNotConfirmed");
      resetAuthUIAfterError();
      return;
    }

    state.user = autoLogin.data.user;
    state.isGuest = false;
    state.score = 0;
    state.currentLevel = 1;
    applyCloudProgress(0, 1);

    await persistProgressToCloud();
    await loadRanking();
    updateUserUI();
    finishAuthUI();
    updateTexts();
  } catch (error) {
    ui.signupStatus.textContent = error?.message || t("signupError");
    resetAuthUIAfterError();
  }
}

async function login() {
  if (!sb) {
    ui.loginStatus.textContent = t("loginDisabled");
    return;
  }
  if (state.authBusy) return;

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    ui.loginStatus.textContent = t("fillLogin");
    return;
  }

  setAuthBusy(true, "login");

  try {
    const { data, error } = await loginWithCredentials(email, password);

    if (error) {
      ui.loginStatus.textContent = error.message || t("loginError");
      resetAuthUIAfterError();
      return;
    }

    if (!data?.user) {
      ui.loginStatus.textContent = t("loginError");
      resetAuthUIAfterError();
      return;
    }

    state.user = data.user;
    state.isGuest = false;
    state.score = 0;
    state.currentLevel = 1;

    await syncBestFromCloud();
    await loadRanking();
    updateUserUI();
    finishAuthUI();
    updateTexts();
  } catch (error) {
    ui.loginStatus.textContent = error?.message || t("loginError");
    resetAuthUIAfterError();
  }
}

async function logout() {
  if (state.logoutBusy) return;

  setLogoutBusy(true);

  try {
    if (sb) {
      const { error } = await sb.auth.signOut();
      if (error) console.error("Erro ao sair:", error);
    }

    state.user = null;
    state.isGuest = true;
    state.score = 0;
    state.currentLevel = 1;
    state.bestScore = getLocalBestScore();
    state.bestLevel = getLocalBestLevel();

    finishAuthUI();
    updateUserUI();
    updateTexts();
    await loadRanking();
  } catch (error) {
    console.error("Erro inesperado ao sair:", error);
  } finally {
    setLogoutBusy(false);
    updateTexts();
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadRanking() {
  if (!sb) {
    ui.rankingList.innerHTML = `<div class="overlay-note">${t("loginDisabled")}</div>`;
    return;
  }

  ui.rankingList.innerHTML = `<div class="overlay-note">${t("loading")}</div>`;

  const { data, error } = await sb
    .from("leaderboard")
    .select("nickname, best_score, best_level")
    .order("best_score", { ascending: false })
    .order("best_level", { ascending: false })
    .limit(20);

  if (error) {
    console.error("Erro ao carregar ranking:", error.message);
    ui.rankingList.innerHTML = `<div class="overlay-note">Erro: ${escapeHtml(error.message)}</div>`;
    return;
  }

  if (!data || data.length === 0) {
    ui.rankingList.innerHTML = `<div class="overlay-note">${t("noPlayers")}</div>`;
    return;
  }

  ui.rankingList.innerHTML = data
    .map((item, index) => {
      const topClass =
        index === 0 ? "top-1" :
        index === 1 ? "top-2" :
        index === 2 ? "top-3" : "";

      return `
        <div class="ranking-item ${topClass}">
          <div class="ranking-pos">#${index + 1}</div>
          <div class="ranking-name">${escapeHtml(item.nickname || "Jogador")}</div>
          <div class="ranking-score">${t("pts")}: ${Number(item.best_score || 0)}</div>
          <div class="ranking-level">${t("lvl")}: ${Number(item.best_level || 1)}</div>
        </div>
      `;
    })
    .join("");
}

function bindEvents() {
  ui.btnStart.addEventListener("click", startGame);
  document.getElementById("btn-how").addEventListener("click", () => showOverlay(ui.helpOverlay));
  document.getElementById("btn-close-help").addEventListener("click", () => hideOverlay(ui.helpOverlay));
  document.getElementById("btn-next").addEventListener("click", nextLevel);
  document.getElementById("btn-retry").addEventListener("click", restartCurrentLevel);
  document.getElementById("btn-reset").addEventListener("click", restartCurrentLevel);
  document.getElementById("btn-sound").addEventListener("click", toggleSound);
  document.getElementById("btn-back-home").addEventListener("click", goHome);

  ui.btnOpenLogin.addEventListener("click", openLogin);
  document.getElementById("btn-close-login").addEventListener("click", closeLogin);
  ui.btnOpenSignup.addEventListener("click", openSignup);
  document.getElementById("btn-close-signup").addEventListener("click", closeSignup);

  ui.btnLogin.addEventListener("click", login);
  ui.btnSignup.addEventListener("click", signup);
  ui.btnLogout.addEventListener("click", logout);

  document.getElementById("signup-nickname").addEventListener("input", (e) => {
    e.target.value = normalizeNickname(e.target.value);
  });

  if (ui.btnRefreshRankingSidebar) {
    ui.btnRefreshRankingSidebar.addEventListener("click", loadRanking);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  let lastTouchTime = 0;

  function handleCanvasInput(clientX, clientY) {
    rotatePieceAt(clientX, clientY);
  }

  canvas.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();

      const touch = e.changedTouches && e.changedTouches[0];
      if (!touch) return;

      lastTouchTime = Date.now();
      handleCanvasInput(touch.clientX, touch.clientY);
    },
    { passive: false }
  );

  canvas.addEventListener("click", (e) => {
    if (Date.now() - lastTouchTime < 500) return;
    handleCanvasInput(e.clientX, e.clientY);
  });

  window.addEventListener("resize", () => {
    if (state.isGameStarted) {
      resizeCanvas();
      drawBoard();
    }
    resizeParticles();
  });
}

async function restoreSession() {
  if (!sb) return;

  const { data: { session } } = await sb.auth.getSession();

  if (session?.user) {
    state.user = session.user;
    state.isGuest = false;
    state.score = 0;
    state.currentLevel = 1;
    await syncBestFromCloud();
    updateUserUI();
    finishAuthUI();
  } else {
    state.user = null;
    state.isGuest = true;
    state.score = 0;
    state.currentLevel = 1;
    state.bestScore = getLocalBestScore();
    state.bestLevel = getLocalBestLevel();
    updateUserUI();
  }

  sb.auth.onAuthStateChange(async (_event, sessionNow) => {
    state.user = sessionNow?.user || null;
    state.isGuest = !sessionNow?.user;
    state.score = 0;
    state.currentLevel = 1;

    if (sessionNow?.user) {
      await syncBestFromCloud();
      finishAuthUI();
    } else {
      state.bestScore = getLocalBestScore();
      state.bestLevel = getLocalBestLevel();
      clearAuthMessages();
      hideOverlay(ui.loginOverlay);
      hideOverlay(ui.signupOverlay);
      resetAuthUIAfterError();
    }

    updateUserUI();
    updateTexts();
    await loadRanking();
  });
}

async function init() {
  state.gridSize = computeGrid(state.currentLevel);
  resizeParticles();
  bindEvents();
  updateTexts();
  updateUserUI();
  drawParticles();
  await restoreSession();
  await loadRanking();
}

init();
