export const site = {
  name: 'Sanjeevni Dental and Endodontic Clinic', wordmark: 'Sanjeevni Dental & Endodontic Clinic', doctor: 'Dr. D. Raghunandana', credentials: 'BDS · Mysore University, 1988',
  phone: '080-23390559', mobile: '+91 94494 44544', email: 'raghu42k@indiatimes.com',
  whatsapp: 'https://wa.me/919449444544?text=Hello%20Dr.%20Raghunandana%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  address: 'Near Chandra Layout Water Tank, 1st Stage, 2nd Phase, Chandra Layout, Bangalore - 560 040',
  map: 'https://maps.google.com/maps?q=Chandra%20Layout%2C%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed',
  hours: 'By appointment', practiceSince: 1991, yearsExperience: new Date().getFullYear() - 1991,
  social: { instagram:'#', facebook:'#', youtube:'#', linkedin:'#', googleBusiness:'#' },
  counters: [ {label:'Patients served',value:82}, {label:'Smiles cared for',value:160}, {label:'Years in practice',value:new Date().getFullYear()-1991}, {label:'Root canals completed',value:69}, {label:'School camps conducted',value:92} ],
  affiliations: ['Indian Dental Association','Lions Club, Vijayanagar','Empanelled with BHEL'],
  services: [
    {slug:'endodontics', title:'Endodontics', short:'Root canal care', description:'Care focused on the inside of the tooth, with magnification and modern instruments supporting a considered treatment plan.', icon:'tooth'},
    {slug:'orthodontia', title:'Orthodontia', short:'Braces and aligners', description:'A personalized approach to improving tooth alignment and bite, with options discussed around your needs.', icon:'smile'},
    {slug:'periodontia', title:'Periodontia', short:'Gum care', description:'Preventive and restorative care for gum health, including scaling, polishing and ongoing guidance.', icon:'sparkles'},
    {slug:'implants-oral-surgery', title:'Implants & oral surgery', short:'Surgical dental care', description:'Assessment and treatment planning for implants and oral and maxillofacial surgery.', icon:'scan'},
    {slug:'cosmetic-dentistry', title:'Cosmetic dentistry', short:'Natural-looking restorations', description:'Aesthetic dentistry, tooth-coloured fillings, ceramic crowns and veneers, planned to suit your smile.', icon:'sun'},
    {slug:'preventive-childrens-dentistry', title:'Preventive & children’s dentistry', short:'Healthy habits from the start', description:'Gentle check-ups, early prevention and practical oral hygiene guidance for children and families.', icon:'heart'}
  ],
  faqs: [
    {q:'How do I book an appointment?',a:'Call the clinic or message us on WhatsApp. We will help find a suitable appointment time.'},
    {q:'What should I bring to my first visit?',a:'Bring any recent dental records or X-rays, a list of current medicines and your questions.'},
    {q:'Do you provide root canal treatment?',a:'Yes. Endodontic care is a key area of practice. Your dentist will explain the diagnosis and options after examination.'},
    {q:'Is the clinic suitable for children?',a:'Yes. The clinic provides preventive and children’s dental care and conducts school dental awareness camps.'},
    {q:'Where is the clinic located?',a:'We are near Chandra Layout Water Tank, 1st Stage, 2nd Phase, Chandra Layout, Bangalore - 560 040.'},
    {q:'What payment or insurance options are available?',a:'Please contact the clinic before your visit to confirm current payment arrangements. The clinic is empanelled with BHEL.'}
  ],
  courses: [
    {title:'Aesthetic Dentistry',detail:'48th Indian Dental Conference, Nagpur · 1994'},
    {title:'Use of Ceramics in Dentistry',detail:'48th Indian Dental Conference, Nagpur · 1994'},
    {title:'Restorative Materials and Technique Update',detail:'18th Asian Pacific Dental Congress, Mumbai · 1996'},
    {title:'New Techniques and Instruments in Endodontics',detail:'18th Asian Pacific Dental Congress, Mumbai · 1996'},
    {title:'Modern Dental Ceramics',detail:'18th Asian Pacific Dental Congress, Mumbai · 1996'},
    {title:'Basic Course on Endodontics · Dr. P.D. Joshi',detail:'Mumbai · 2002'},
    {title:'Multi-System Implant Workshop',detail:'SDM College of Dental Sciences and Hospital · 2006'}
  ],
  equipment: [
    {name:'Carl Zeiss surgical microscope',benefit:'Magnification helps the clinician examine fine details during endodontic procedures.'},
    {name:'Digital X-ray · Trophy, France',benefit:'In-chair imaging supports diagnostic conversations and treatment planning.'},
    {name:'J. Morita rotary endodontic system',benefit:'A modern instrument system used during root canal procedures.'},
    {name:'Root ZX electronic apex locator',benefit:'Provides an additional measurement tool during endodontic treatment.'},
    {name:'Intra-oral camera & Heine loupes',benefit:'Magnified views help explain what the dentist sees during your visit.'}
  ]
} as const;
