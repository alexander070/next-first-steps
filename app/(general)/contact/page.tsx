import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Princing Page',
 description: 'Mis servicios',
};

export default function ContactPage (){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}