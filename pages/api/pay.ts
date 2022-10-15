import {Client} from 'square'
import {randomUUID} from 'crypto'
import {NextRequest, NextResponse} from "next/server";
// BigInt.prototype.toJSON() = function (){return this.toString()}


const {paymentsApi} = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
})
export default function handler (req: NextRequest, res: NextResponse){

}
