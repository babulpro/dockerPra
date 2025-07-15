 
import { NextResponse } from "next/server" 
import { connectToDB } from "../../../../../../lib/db";
import { FoodItem } from "../../../../../../lib/model/AllModel";

export async function GET(req) {
    try{
        await connectToDB();
        const result = await FoodItem.find({})
        return NextResponse.json({status:"ok" ,data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
}