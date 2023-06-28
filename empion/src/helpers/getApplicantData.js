export const getApplicantData = (applicants, applicant_id) => {
  return applicants.find((applicant) => applicant.id === applicant_id);
};
