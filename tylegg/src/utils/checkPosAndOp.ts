export const checkPosAndOp = (imgUrl: string): string[] => {
  const posAndOp = (imgUrl.split('/')).slice(-2);
  posAndOp[1] = posAndOp[1].split('.')[0];
  return posAndOp;
}