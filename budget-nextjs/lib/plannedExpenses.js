//uses "fetch" to make asynchronous HTTP request to API request
//The response is stored in "data" variable
import {endpoint} from "@/utils/endpoint";

export async function getAllPlannedExpenses() {
    const data = await fetch(`${endpoint}/plannedExpenses`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}