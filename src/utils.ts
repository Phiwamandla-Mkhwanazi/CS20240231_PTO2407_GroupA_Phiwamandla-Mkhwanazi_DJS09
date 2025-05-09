const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1) {
        return 's'
    } else return ''
}

const reviews: { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string; 
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
]


// Broken code
export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}

