import React from "react";

interface FooterItemProps {
    title: string;
    children: React.ReactNode;
    titleClass: string;
}

export default function FooterItem({ title, children, titleClass }: FooterItemProps) {
    return (
        <div className="w-1/3 ">
            <div className={`${titleClass} `}>
                <span className={`${titleClass}`}>
                    {title}
                </span>
                {children}
            </div>
        </div>
    );
}
