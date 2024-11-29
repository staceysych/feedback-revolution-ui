export const sendRequest = async (
  url: string,
  { arg }: { arg: { [key: string]: any } }
) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
  return response.json();
};
