import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <div className="relative py-6">
            <nav className="wrapper">
                <div className="flex justify-between align-middle ">
                    <div className="flex align-middle gap-7">
                        <Link href="/">Logo</Link>
                        <ul className="flex align-middle gap-7 [&_a]:flex [&_a]:items-center [&_a]:gap-1">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/solution">Solution <BsChevronDown className="text-sm" /></Link></li>
                            <li><Link href="/library">Library <BsChevronDown className="text-sm" /></Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-9">
                        <LocaleSwitcherSelect />
                        <Link href="/">Log in</Link>
                        <Link href="/" className="btn">Try it now</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
