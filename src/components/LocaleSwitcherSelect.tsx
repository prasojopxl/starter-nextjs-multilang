'use client';

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from '../navigation';
import { useLocale } from 'next-intl';
import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

export default function LocaleSwitcherSelect() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const lang = useLocale()
    const pathname = usePathname();
    const [show, setShow] = useState(false);
    function onSelectChange(lang: string) {
        startTransition(() => {
            router.replace(pathname, { locale: lang });
        });
    }
    return (
        <div className="relative w-[80px]">
            <div className="relative cursor-pointer flex gap-2 items-center shadow-cs px-3 py-[10px] rounded-[7px]" onClick={() => setShow(!show)}>
                {
                    lang == "en" ? "EN" : "FR"
                }
                <LuChevronDown className="text-2xl text-[#000]" />
            </div>
            {
                show ? <div className="absolute mt-0  shadow-cs w-[100px] rounded-[7px] overflow-hidden">
                    <div onClick={() => onSelectChange("fr")} className="px-3 py-[10px] cursor-pointer flex items-center gap-2 text-sm mb-2 hover:bg-[rgba(247,196,247,0.14)]">
                        FR
                    </div>
                    <div onClick={() => onSelectChange("en")} className="px-3 py-[10px] cursor-pointer flex items-center gap-2 text-sm  hover:bg-[rgba(247,196,247,0.14)]">
                        EN
                    </div>
                </div> : null
            }
        </div>
    );
}
