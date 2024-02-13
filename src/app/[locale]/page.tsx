import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import PageLayout from '../../components/PageLayout';

type Props = {
    params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const t = useTranslations('IndexPage');

    return (
        <PageLayout title={t('title')}>
            <div>{t('description')}</div>
        </PageLayout>
    );
}
