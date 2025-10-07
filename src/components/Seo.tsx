import { Helmet } from 'react-helmet-async';
interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}
export function Seo({ title, description, keywords, schema }: SeoProps) {
  const fullTitle = `${title} | Aloha Clean NWI`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}