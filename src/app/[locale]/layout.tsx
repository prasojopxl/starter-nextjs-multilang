import clsx from 'clsx';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import Header from '../../components/Header';
import { locales } from '../../config';

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
    return {
        title: t('title')
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body suppressHydrationWarning={true} >
                <Header />
                {children}
            </body>
        </html>
    );
}
