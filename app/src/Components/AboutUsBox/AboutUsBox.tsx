import React from "react";

type AboutUsBoxProps = {
    title: string;
    desc: string;
    icon: React.ComponentType;
}

export default function AboutUsBox({ title, desc, icon: Icon }: AboutUsBoxProps) {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-500/20">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 text-white rounded-lg text-2xl">
                    <Icon />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-500 mb-2">
                        {title}
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400 text-sm leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
