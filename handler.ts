import { Handler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: Handler = async (_event, _context) => {
  return {
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
  };
}
