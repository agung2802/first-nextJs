import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id : 1,
        productName: 'baju baru',
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png"
    },
    {
        id : 2,
        productName: 'baju bekas',
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png"
    },
    {
        id : 2,
        productName: 'baju bekas',
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png"
    },
    {
        id : 2,
        productName: 'baju bekas',
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png"
    }
]

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id");
    console.log(id);
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if(detailProduct){
            return NextResponse.json({status: 200, message: "Success", data: detailProduct});
        } else {
            return NextResponse.json({status: 404, message: "Data Not Found"});
        }
    }
    return NextResponse.json({status: 200, message: "Success", data: data})
}