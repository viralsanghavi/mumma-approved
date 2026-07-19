const fs = require('fs');

async function main() {
  const filePath = 'app/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the array of episodes
  const regex = /\{\s*num:\s*['"](\d+)['"],\s*link:\s*['"](https:\/\/youtu\.be\/[^'"]+)['"]\s*\}/g;
  const matches = [...content.matchAll(regex)];

  for (const match of matches) {
    const fullMatch = match[0];
    const num = match[1];
    const link = match[2];
    
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=${link}&format=json`);
      if (res.ok) {
        const data = await res.json();
        const title = data.title;
        // Escape quotes
        const escapedTitle = title.replace(/"/g, '\\"');
        const replacement = `{ title: "${escapedTitle}", link: "${link}" }`;
        content = content.replace(fullMatch, replacement);
        console.log(`Fetched title for ${num}: ${title}`);
      } else {
        console.error(`Failed to fetch ${link}`);
      }
    } catch (e) {
      console.error(`Error fetching ${link}: ${e}`);
    }
  }

  // Also replace `Episode {ep.num}` with `{ep.title}`
  content = content.replace(/Episode \{ep\.num\}/g, '{ep.title}');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Done updating page.tsx");
}

main();
