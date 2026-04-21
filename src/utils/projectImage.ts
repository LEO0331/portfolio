const projectImageModules = import.meta.glob<string>("../assets/images/projects/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default"
});

function getModuleByFilename(filename: string): string | undefined {
  const entry = Object.entries(projectImageModules).find(([modulePath]) =>
    modulePath.endsWith(`/projects/${filename}`)
  );

  return entry?.[1];
}

function toProjectFilename(imagePath: string): string | undefined {
  const filename = imagePath.split("/").pop();
  return filename || undefined;
}

export function resolveProjectImage(imagePath: string): string | undefined {
  if (!imagePath) {
    return undefined;
  }

  if (!imagePath.startsWith("/src/assets/images/projects/")) {
    return imagePath;
  }

  const filename = toProjectFilename(imagePath);
  if (!filename) {
    return undefined;
  }

  return getModuleByFilename(filename);
}

export function resolveProjectImageSources(imagePath: string): { primary?: string; fallback?: string } {
  const filename = toProjectFilename(imagePath);
  if (!filename) {
    const resolved = resolveProjectImage(imagePath);
    return { primary: resolved, fallback: resolved };
  }

  const dotIndex = filename.lastIndexOf(".");
  const basename = dotIndex > 0 ? filename.slice(0, dotIndex) : filename;
  const ext = dotIndex > 0 ? filename.slice(dotIndex + 1).toLowerCase() : "";

  const requested = getModuleByFilename(filename);
  const webp = getModuleByFilename(`${basename}.webp`);
  const png = getModuleByFilename(`${basename}.png`);

  if (ext === "webp") {
    return { primary: webp ?? requested, fallback: png ?? requested };
  }
  if (ext === "png" || ext === "jpg" || ext === "jpeg") {
    return { primary: webp ?? requested, fallback: requested ?? png };
  }

  return { primary: requested, fallback: requested };
}
