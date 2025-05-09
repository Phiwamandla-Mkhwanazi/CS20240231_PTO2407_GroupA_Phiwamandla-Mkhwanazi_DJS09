import { Review } from './interfaces'

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

//Safe DOM getter
export function getElement<T extends Element>(selector: string): T {
    const el = document.querySelector(selector)
    if (!el) throw new Error(`Element not found: ${selector}`)
    return el as T
}

//Use inside functions
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const reviewTotalDisplay = getElement<HTMLElement>('#reviews')
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning: boolean, userName: string) {
    const returningUserDisplay = getElement<HTMLElement>('#returning-user')
    const userNameDisplay = getElement<HTMLElement>('#user')

    if (isReturning) {
        returningUserDisplay.textContent = 'back'
    }

    userNameDisplay.textContent = userName
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value === true || value === Permissions.ADMIN) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = `${price}/night`
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number): string {
    return value !== 1 ? 's' : ''
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
    return [...reviews].sort((a, b) => b.stars - a.stars).slice(0, 2)
}
