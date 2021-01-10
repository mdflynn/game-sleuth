export const fetchSearchResults = async (searchCriteria?: string) => {
  const response = await fetch(
    `https://api.boardgameatlas.com/api/search?${searchCriteria}&fuzzy_match=true&client_id=U4cPDqoedb`
  );
  return await response.json();
};

export const fetchSoloGameDetails = async (subDetail?: string) => {
  const response = await fetch(
    `https://api.boardgameatlas.com/api/game/${subDetail}?client_id=U4cPDqoedb`
  );
  return await response.json();
};
