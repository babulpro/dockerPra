 
import { NextResponse } from "next/server" 
import { connectToDB } from "../../../../../../lib/db";
import { FoodItem } from "../../../../../../lib/model/AllModel";

export async function GET(req) {
    let {searchParams} = new URL(req.url);
    let id = searchParams.get('id');
    try{
        await connectToDB();
        const result = await FoodItem.findById({_id:id})
        return NextResponse.json({status:"ok" ,data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
}