document.getElementById("input").addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    const cmd = e.target.value.trim();
    const output = document.getElementById("output");
    output.innerText += `$ ${cmd}\n`;
    e.target.value = "";

    if (cmd.startsWith("cd ")) {
      const path = cmd.replace("cd ", "").replace(/^\//, "");
      const url = `commands/${path}.md`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("404 Not Found");
        const md = await res.text();
        const html = marked(md);
        document.getElementById("result").innerHTML = html;
      } catch {
        output.innerText += `No such file or directory: ${cmd}\n`;
      }
    } else if (cmd === "clear") {
      output.innerText = "";
      document.getElementById("result").innerHTML = "";
    } else {
      output.innerText += `Command not found: ${cmd}\n`;
    }
  }
});
