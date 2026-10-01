export interface Affiliation {
  name: string;        // displayed link text
  sub: string;         // muted subtitle line under the name
  href: string;
}

export const affiliations: Affiliation[] = [
  {
    name: 'Michigan Institute for Data & AI in Society',
    sub: 'MIDAS',
    href: 'https://midas.umich.edu/directory/tina-lasisi/',
  },
  {
    name: 'Genome Science Training Program',
    sub: 'Center for Statistical Genetics',
    href: 'https://sph.umich.edu/csg/gstp_pages/gstpfaculty.html',
  },
  {
    name: 'Center for Computational Medicine & Bioinformatics',
    sub: 'CCMB',
    href: 'https://medschool.umich.edu/departments/computational-medicine-bioinformatics/ccmb',
  },
  {
    name: 'African Studies Center',
    sub: 'International Institute',
    href: 'https://ii.umich.edu/ii/people/all/t/tlasisi.html',
  },
  {
    name: 'Center for Global Health Equity',
    sub: 'CGHE',
    href: 'https://globalhealthequity.umich.edu/membership/members/tlasisi',
  },
  {
    name: 'Center for Ethics, Society, & Computing',
    sub: 'ESC',
    href: 'https://esc.umich.edu/faculty/',
  },
  {
    name: 'Center for History, Humanities, Arts, Social Sciences & Ethics in Medicine',
    sub: 'CHHASSEM',
    href: 'https://medresearch.umich.edu/labs-departments/centers/chhassem',
  },
];
