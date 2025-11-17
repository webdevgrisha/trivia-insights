import { ResponseCodeEnum } from '../types/enums';
import type { TokenResponse } from '../types/interfaces';
import { openTDBFetcher } from './openTDBFetcher';

async function fetchOpenTDBToken(options?: RequestInit): Promise<string> {
  const params = { command: 'request' };

  const data = await openTDBFetcher<TokenResponse>('api_token.php', params, options);

  if (data.response_code !== ResponseCodeEnum.Success) {
    throw new Error(`OpenTDB token error: ${data.response_message}`);
  }

  return data.token;
}

export { fetchOpenTDBToken };
