let currentPath = "/M0S-quito_shell";
const virtualFS = {
  "/M0S-quito_shell": ["Blog","AI_gorithm"]
};

const commands = {
  cd: async (args, outputEl, resultEl) => {
    const path = args[0];
    const cleanPath = path.replace(/^\//, ""); // /Blog -> Blog
    const url = `commands/${cleanPath}.md`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("404 Not Found");
      const md = await res.text();
      const html = marked(md);
      resultEl.innerHTML = html;
      currentPath = `/${cleanPath}`;
      return `경로 변경됨: /${cleanPath}`;
    } catch {
      return `No such file or directory: ${path}`;
    }
  },

  ls: () => {
    return virtualFS[currentPath]
      ? virtualFS[currentPath].join("  ")
      : "디렉토리 없음";
  },

  pwd: () => currentPath,

  clear: (args, outputEl, resultEl) => {
    outputEl.innerText = "";
    resultEl.innerHTML = "";
    return "";
  },

  help: () => `사용 가능한 명령어: cd, ls, pwd, clear, help`,
};

document.getElementById("input").addEventListener("keydown", async function (e) {
  if (e.key !== "Enter") return;

  const input = e.target.value.trim();
  const outputEl = document.getElementById("output");
  const resultEl = document.getElementById("result");

  outputEl.innerText += `$ ${input}\n`;
  e.target.value = "";

  const [cmd, ...args] = input.split(" ");
  const handler = commands[cmd];

  if (handler) {
    const result = await handler(args, outputEl, resultEl);
    if (result) outputEl.innerText += result + "\n";
  } else {
    outputEl.innerText += `Command not found: ${cmd}\n`;
  }
});
