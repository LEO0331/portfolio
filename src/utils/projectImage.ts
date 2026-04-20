const projectImageModules = import.meta.glob<string>("../assets/images/projects/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default"
});

export function resolveProjectImage(imagePath: string): string | undefined {
  if (!imagePath) {
    return undefined;
  }

  if (!imagePath.startsWith("/src/assets/images/projects/")) {
    return imagePath;
  }

  const filename = imagePath.split("/").pop();
  if (!filename) {
    return undefined;
  }

  const entry = Object.entries(projectImageModules).find(([modulePath]) =>
    modulePath.endsWith(`/projects/${filename}`)
  );

  return entry?.[1];
}
