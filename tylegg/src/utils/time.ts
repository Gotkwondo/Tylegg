export function waitSecond(second: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
}
