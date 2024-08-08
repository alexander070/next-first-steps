import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Princing Page',
 description: 'Precios de mis productos',
};

export default function PricingPage (){
    return(
        <>
            <span className="text-7xl">Princing Page</span>
        </>
    )
}