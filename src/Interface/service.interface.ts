export interface WorldSummaryData {
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

export interface CountryCasesData {
    Country: string
    CountryCode: string
    Date: Date
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    Premium: object
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
} 