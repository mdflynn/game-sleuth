export interface MyBoardGame { 
    id: string,
    name: string,
    min_players: number,
    max_players: number,
    min_age: number,
    image_url: string,
    description: string,
    price: string,
    url: string,
    primary_publisher: {name: string},
    mechanics: {id: string}[],
    average_user_rating: number,
    num_user_ratings: number,
    rank: number,
    trending_rank: number,
    rules_url: string
   }

