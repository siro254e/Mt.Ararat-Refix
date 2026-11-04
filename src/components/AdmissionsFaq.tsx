import { useState } from 'react';
import { ChevronDown, HelpCircle, Clock, MapPin, Shirt, FileText, CalendarCheck, ShieldCheck, ArrowRight, Bus } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: typeof HelpCircle;
}

interface AdmissionsFaqProps {
  onOpenEnquiry?: () => void;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What are the official school operating and administration office hours?',
    answer: `Our instructional and administration offices operate Monday through Friday from 7:30 AM to 4:30 PM. Prospective parents wishing to meet the headteacher or admissions team on Saturdays can schedule an appointment in advance.`,
    category: 'Hours & Operations',
    icon: Clock
  },
  {
    id: 'faq-2',
    question: 'Where is Mt. Ararat Shinners School located in Eldoret?',
    answer: `The school is located in Kapsoya Estate, Eldoret, Kenya, directly next to Silas Police Station. The campus is readily accessible from Eldoret town centre via the Kapsoya Estate access corridor.`,
    category: 'Location',
    icon: MapPin
  },
  {
    id: 'faq-3',
    question: 'What documents are required when submitting an admission application?',
    answer: `Please provide a copy of the learner's birth certificate, the previous academic report, the assessment number, the KEMIS number, and the parent or guardian's contact details. Copies are received at the school office during your campus visit.`,
    category: 'Requirements',
    icon: FileText
  },
  {
    id: 'faq-4',
    question: 'What is the official school uniform for Mt. Ararat Shinners learners?',
    answer: `Primary learners wear a checked green shirt or a checked green dress with red stripes, a dark green sweater with two white stripes, grey striped socks and black shoes. Junior School learners wear dark green trousers or a pleated skirt, a white shirt with the school logo, a dark green sweater, windbreaker and blazer, with a tie for boys. The P.E. kit is a red shirt for boys, a yellow shirt for girls, navy blue shorts and a dark green tracksuit. All items are purchased at Saiyat School Uniform Supplies (Kapsovya). Full lists appear in our Uniform Guide above.`,
    category: 'Uniform Identity',
    icon: Shirt
  },
  {
    id: 'faq-5',
    question: 'What grade levels are accepted for new admissions?',
    answer: `We welcome learners into Early Years (Playgroup, PP1, PP2) and Primary grades, and we also receive Junior School enquiries. Each applicant undergoes a friendly, age-appropriate interaction to ensure tailored educational placement and support.`,
    category: 'Enrollment',
    icon: CalendarCheck
  },
  {
    id: 'faq-6',
    question: 'How do parents receive the official fee schedule and payment terms?',
    answer: `To maintain absolute clarity and accuracy, official fee structures and term schedules are provided directly by our school administration office upon submitting an enquiry or during an in-person campus visit.`,
    category: 'Tuition & Fees',
    icon: ShieldCheck
  },
  {
    id: 'faq-7',
    question: 'Does the school provide transport for learners?',
    answer: `Yes. The school operates buses and vans for learners across Eldoret and the surrounding estates, with supervised pick-up and drop-off. Route coverage and term transport charges are confirmed by the school office.`,
    category: 'Transport',
    icon: Bus
  }
];

export function AdmissionsFaq({ onOpenEnquiry }: AdmissionsFaqProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative overflow-hidden border-t border-[#F2F3F2] dark:border-[#084c31]">
      {/* Plaid subtle background pattern */}
      <div className="absolute inset-0 bg-plaid-subtle opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#094d31] border border-emerald-200 dark:border-emerald-600/40 text-[#087A50] dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
            <span>Admissions Guidance</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252B28]/75 dark:text-[#E2E8F0]/75 text-balance">
            Everything you need to know about joining Mt. Ararat Shinners School, our campus routine, and admission procedures.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#073824] border-[#087A50] dark:border-emerald-500 shadow-md ring-1 ring-[#087A50]/20'
                    : 'bg-white/90 dark:bg-[#062c1d] border-[#C6C9C7]/50 dark:border-[#0d5538] hover:border-[#087A50]/60 dark:hover:border-emerald-500/60 hover:bg-white dark:hover:bg-[#073824] shadow-xs'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#087A50] text-white shadow-xs'
                          : 'bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-heading font-bold text-sm sm:text-base tracking-tight leading-snug transition-colors ${
                        isOpen ? 'text-[#075638] dark:text-emerald-200' : 'text-[#252B28] dark:text-[#F2F3F2]'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#F2F3F2] dark:border-[#0d5538] text-xs sm:text-sm text-[#252B28]/80 dark:text-[#E2E8F0]/85 leading-relaxed">
                      <p className="mt-2 text-balance">{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-[12px] font-semibold text-[#087A50] dark:text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087A50] dark:bg-emerald-400" />
                        <span>Category: {faq.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/50 dark:border-[#0d5538] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-sm text-[#252B28] dark:text-[#F2F3F2]">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs text-[#252B28]/70 dark:text-[#E2E8F0]/70 mt-0.5">
              Our administration team is ready to assist with fee schedules, transfers, and visits.
            </p>
          </div>
          {onOpenEnquiry && (
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#087A50] hover:bg-[#075638] text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Submit Admission Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
