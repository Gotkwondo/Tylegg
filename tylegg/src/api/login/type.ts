export interface requestLoginApiType {
  state: string;
  code: string;
  scope: string;
  prompt: string;
  nonce: string;
  returnState: string;
}
