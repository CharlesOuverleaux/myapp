export const getCompanyData = (companies, company_id) => {
  return companies.find((company) => company.id === company_id);
};
