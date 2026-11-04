import { FileCheck, Users, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdmissionsProcessProps {
  onOpenEnquiry: () => void;
}

export function AdmissionsProcess({ onOpenEnquiry }: AdmissionsProcessProps) {
  const steps = [
    {
      step: '01',
      title: 'Enquiry & Campus Visit',
      desc: 'Submit our online admission enquiry form or visit our Kapsoya Estate campus office directly next to Silas Police Station to receive official prospectus materials.',
      icon: FileCheck,
      badge: 'Step One'
    },
    {
      step: '02',
      title: 'Learner Interaction & Documents',
      desc: 'Our educational team holds a friendly, supportive conversation with the prospective learner. Please bring a copy of the birth certificate, previous academic report, assessment number, KEMIS number and parent or guardian contact details.',
      icon: Users,
      badge: 'Step Two'
    },
    {
      step: '03',
      title: 'Admission Offer & Uniform Fitting',
      desc: 'Receive your formal acceptance letter, collect the correct Primary or Junior School uniform from Saiyat School Uniform Supplies (Kapsovya), and join term orientation.',
      icon: GraduationCap,
      badge: 'Step Three'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative overflow-hidden border-t border-[#F2F3F2] dark:border-[#084c31]">
      {/* Plaid subtle background pattern */}
      <div className="absolute inset-0 bg-plaid-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#094d31] border border-emerald-200 dark:border-emerald-600/40 text-[#087A50] dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
            <span>Enrollment Journey</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
            Simple 3-Step Admissions Flow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252B28]/75 dark:text-[#E2E8F0]/75 text-balance">
            Modeled on leading private schools in Kenya, our admissions process is clear, transparent, and welcoming for every parent and guardian.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="p-8 rounded-2xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/50 dark:border-[#0d5538] shadow-xs hover:border-[#087A50] dark:hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-2xl text-[#087A50] dark:text-emerald-300">
                      {s.step}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 dark:bg-[#094d31] text-[#075638] dark:text-emerald-300">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#252B28] dark:text-[#F2F3F2] mb-2.5">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#252B28]/75 dark:text-[#E2E8F0]/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F2F3F2] dark:border-[#084c31]">
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087A50] dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
