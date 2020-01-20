export const hello: any = async (_event, _context) => {
  const response = 
    JSON.stringify('Hello from Lambda!');
  return response;
}
