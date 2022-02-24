export const fetchRemoteData = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) return response.json();
  throw new Error(
    response.statusText ||
      `Request returned a status code of ${response.status}`
  );
};