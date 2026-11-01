export const updatePageMeta = (title, description) => {
  document.title = title
    ? (title.includes('ChemSeva') ? title : `${title} | ChemSeva Chemicals Pvt. Ltd.`)
    : 'ChemSeva Chemicals Pvt. Ltd. | Industrial Chemical Solutions';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'ChemSeva Chemicals provides dependable defoamer and specialty chemical solutions for industrial customers.');
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', document.title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description || 'ChemSeva Chemicals provides dependable defoamer and specialty chemical solutions for industrial customers.');
  }
};

export const updateMetaTags = updatePageMeta;
