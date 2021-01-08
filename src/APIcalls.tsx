export const fetchSearchResults = async (searchCriteria?:string) => {
    console.log(searchCriteria)
    const response = await fetch(`https://api.boardgameatlas.com/api/search?${searchCriteria}&fuzzy_match=true&client_id=U4cPDqoedb`)
    return await response.json()
}