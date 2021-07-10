import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
//will automatically parse our stringified event body so we don't have to do that every time
import httpEventNormalizer from '@middy/http-event-normalizer';
/*will automatically adjust API gateway event objects to prevent us from having a nonexisting object when
trying to access path parameters or query parameters, so it reduce room for errors and if statements*/
import httpErrorHandler from '@middy/http-error-handler';
//help us make our handling error process smooth
import cors from '@middy/http-cors';

export default handler => middy(handler)
  .use([
    httpJsonBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
    cors(),
  ]);