export function linkifyEmail(text: string): string {
  return text.replace(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
    '<a href="mailto:$1" class="text-car underline hover:opacity-80">$1</a>'
  );
}
