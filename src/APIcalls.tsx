export const fetchSearchResults = async () => {
    const response = await fetch('https://api.boardgameatlas.com/api/search?name=Catan&client_id=U4cPDqoedb')
    return await response.json()
}

