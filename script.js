const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const levelEl = document.getElementById('level');
const generateBtn = document.getElementById('generate');
const strengthBar = document.getElementById('strengthBar');
const historyList = document.getElementById('passwordHistory');
const securityTip = document.getElementById('security-tip');

const tips = [
    "Senhas com mais de 12 caracteres são muito mais difíceis de quebrar.",
    "Evite usar sequências como '123456' ou 'qwerty'.",
    "Misturar símbolos raros confunde algoritmos de força bruta.",
    "Troque suas senhas principais a cada 90 dias.",
    "Nunca use a mesma senha para o e-mail e para redes sociais."
];

lengthEl.addEventListener('input', () => {
    lengthValue.textContent = lengthEl.value;
});

function generatePassword() {
    const len = parseInt(lengthEl.value);
    const level = levelEl.value;
    
    const sets = {
        basic: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        medium: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        strong: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()',
        extreme: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,.<>?/~`£€'
    };

    const chars = sets[level];
    let password = '';
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < len; i++) {
        password += chars[array[i] % chars.length];
    }

    // Efeito de Embaralhar
    let iterations = 0;
    const interval = setInterval(() => {
        passwordEl.textContent = password.split("").map((char, index) => {
            if(index < iterations) return password[index];
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
        }).join("");
      
        if(iterations >= len) {
            clearInterval(interval);
            saveToHistory(password);
        }
        iterations += 1;
    }, 30);

    // Barra de Força e Dicas
    updateStrength(len, level);
    securityTip.textContent = tips[Math.floor(Math.random() * tips.length)];
}

function updateStrength(len, level) {
    let score = (len / 32) * 60;
    if (level === 'extreme') score += 40;
    else if (level === 'strong') score += 25;
    
    strengthBar.style.width = Math.min(score, 100) + '%';
    strengthBar.style.background = score > 80 ? 'var(--success)' : score > 50 ? '#ffaa00' : 'var(--danger)';
}

function saveToHistory(pwd) {
    let history = JSON.parse(localStorage.getItem('pwdHistory_Ronald')) || [];
    if(history[0] === pwd) return;
    history.unshift(pwd);
    history = history.slice(0, 5);
    localStorage.setItem('pwdHistory_Ronald', JSON.stringify(history));
    renderHistory(history);
}

function renderHistory(history) {
    historyList.innerHTML = history.map(pwd => `
        <li class="history-item">
            <span>${pwd.substring(0, 12)}...</span>
            <strong style="color:var(--accent); cursor:pointer" onclick="copyText('${pwd}')">Copiar</strong>
        </li>
    `).join('');
}

function copyText(text) {
    if (!text || text.includes('Clique')) return;
    navigator.clipboard.writeText(text);
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'OK!';
    setTimeout(() => btn.textContent = 'Copiar', 2000);
}

document.getElementById('clearHistory').addEventListener('click', () => {
    localStorage.removeItem('pwdHistory_Ronald');
    renderHistory([]);
});

document.getElementById('copyBtn').addEventListener('click', () => copyText(passwordEl.textContent));
generateBtn.addEventListener('click', generatePassword);

window.onload = () => {
    const history = JSON.parse(localStorage.getItem('pwdHistory_Ronald')) || [];
    renderHistory(history);
    securityTip.textContent = tips[0];
};