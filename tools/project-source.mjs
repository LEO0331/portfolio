export function extractProjectsArrayContent(source) {
  const marker = "export const projects";
  const markerIndex = source.indexOf(marker);
  const equalsIndex = markerIndex === -1 ? -1 : source.indexOf("=", markerIndex);
  const arrayStart = equalsIndex === -1 ? -1 : source.indexOf("[", equalsIndex);
  if (arrayStart === -1) return undefined;

  let depth = 0;
  let quote = "";
  let escaping = false;

  for (let index = arrayStart; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaping) {
        escaping = false;
      } else if (character === "\\") {
        escaping = true;
      } else if (character === quote) {
        quote = "";
      }
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
    } else if (character === "[") {
      depth += 1;
    } else if (character === "]") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(arrayStart + 1, index);
      }
    }
  }

  return undefined;
}

export function requireProjectsArrayContent(source, errorMessage) {
  const arrayContent = extractProjectsArrayContent(source);
  if (arrayContent === undefined) throw new Error(errorMessage);
  return arrayContent;
}

export function extractObjectBlocks(arrayContent) {
  const blocks = [];
  let depth = 0;
  let start = -1;
  let quote = "";
  let escaping = false;

  for (let index = 0; index < arrayContent.length; index += 1) {
    const character = arrayContent[index];
    if (quote) {
      if (escaping) {
        escaping = false;
      } else if (character === "\\") {
        escaping = true;
      } else if (character === quote) {
        quote = "";
      }
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
    } else if (character === "{") {
      if (depth === 0) start = index;
      depth += 1;
    } else if (character === "}") {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        blocks.push(arrayContent.slice(start, index + 1));
        start = -1;
      }
    }
  }

  return blocks;
}
