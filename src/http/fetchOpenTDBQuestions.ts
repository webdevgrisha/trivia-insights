import { ResponseCodeEnum } from '../types/enums';
import type { Question, QuestionResponse } from '../types/interfaces';
import type { HttpParams } from './fetcher';
import { openTDBFetcher } from './openTDBFetcher';

async function fetchOpenTDBQuestions(
  params: HttpParams,
  options?: RequestInit
): Promise<Question[]> {
  const data = await openTDBFetcher<QuestionResponse>('api.php', params, options);

  switch (data.response_code) {
    case ResponseCodeEnum.Success:
      return data.results;
    case ResponseCodeEnum.NoResult:
      return data.results;
    case ResponseCodeEnum.InvalidParameter:
      throw new Error('OpenTDB: invalid parameter');
    case ResponseCodeEnum.TokenNotFound:
      throw new Error('OpenTDB: token not found');
    case ResponseCodeEnum.TokenEmpty:
      throw new Error('OpenTDB: token empty (no more unique questions)');
    case ResponseCodeEnum.RateLimit:
      throw new Error('OpenTDB: rate limit exceeded');
    default:
      throw new Error(`OpenTDB: unknown response code ${data.response_code}`);
  }
}

export { fetchOpenTDBQuestions };
