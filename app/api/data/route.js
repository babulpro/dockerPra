import { NextResponse } from 'next/server';
import { connectToDB } from '../../../lib/db';
import { User } from '../../../lib/model/AllModel';
 



export async function GET() {
  try {
    await connectToDB();
    const users = await User.find({});
    return NextResponse.json(users);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Database query failed' },
      { status: 500 }
    );
  }
}


export async function POST(req,res) {
  try {
    await connectToDB();
    const data = await req.json();
    data.password ="1234";
    data.role="user"
    

    console.log(data)
    const newUser = new User(data);
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}