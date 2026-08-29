import Link from "next/link";

export default function Breadcrumbs({ items }) {
  // items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Current Page" }]
  const schemaList = items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.label,
    item: item.href ? `https://aiprintstudio.com${item.href}` : undefined,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
        <ol className="breadcrumbs-list">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className={`breadcrumbs-item ${isLast ? "active" : ""}`}>
                {item.href && !isLast ? (
                  <Link href={item.href} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumbs-current">{item.label}</span>
                )}
                {!isLast && <span className="breadcrumbs-separator" aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaList,
          }),
        }}
      />
    </>
  );
}
