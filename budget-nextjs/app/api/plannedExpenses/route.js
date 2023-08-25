import plannedExpenses from '@/data/plannedExpenses.json'
import { NextResponse } from 'next/server'

//Retrieve plannedExpenses to use in the application
export async function GET() {
    return NextResponse.json({ plannedExpenses: plannedExpenses.data })
}