import { useState } from 'react';
import { GRADE_LEVELS, SCHOOL_INFO, ADMISSION_REQUIREMENTS } from '../data/schoolData';
import { AdmissionEnquiry } from '../types';
import { CheckCircle2, AlertCircle, Info, Clock, MessageCircle, ClipboardList } from 'lucide-react';

interface AdmissionsProps {
  onSuccessSubmission?: (enquiry: AdmissionEnquiry) => void;
}

export function Admissions({ onSuccessSubmission }: AdmissionsProps) {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [learnerName, setLearnerName] = useState('');
  const [gradeLevel, setGradeLevel] = useState(GRADE_LEVELS[1]);
  const [preferredContact, setPreferredContact] = useState<'phone' | 'email' | 'whatsapp' | 'in-person'>('phone');
  const [additionalEnquiry, setAdditionalEnquiry] = useState('');

  const [errors, setErrors] = useState<{ parentName?: string; phoneNumber?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { parentName?: string; phoneNumber?: string } = {};

    if (!parentName.trim()) {
      newErrors.parentName = 'Please provide the parent or guardian name.';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please provide a valid phone number for follow-up.';
    } else if (phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g., 0712 345 678).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const enquiryRecord: AdmissionEnquiry = {
      id: `MAS-${Date.now().toString().slice(-6)}`,
      parentName: parentName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim() || undefined,
      learnerName: learnerName.trim() || undefined,
      gradeLevel,
      preferredContact,
      additionalEnquiry: additionalEnquiry.trim() || undefined,
      submittedAt: new Date().toLocaleString('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      status: 'Pending Review',
    };

    // Deliver the enquiry through WhatsApp — the message is pre-filled and the
    // parent only has to tap "send" in WhatsApp.
    const lines = [
      `Admission enquiry — ${SCHOOL_INFO.name}`,
      `Reference: ${enquiryRecord.id}`,
      `Parent / Guardian: ${enquiryRecord.parentName}`,
      `Phone: ${enquiryRecord.phoneNumber}`,
      enquiryRecord.email ? `Email: ${enquiryRecord.email}` : '',
      enquiryRecord.learnerName ? `Learner: ${enquiryRecord.learnerName}` : '',
      `Level of interest: ${enquiryRecord.gradeLevel}`,
      `Preferred contact: ${enquiryRecord.preferredContact}`,
      enquiryRecord.additionalEnquiry ? `Notes: ${enquiryRecord.additionalEnquiry}` : '',
    ].filter(Boolean);

    const waUrl = `https://wa.me/${SCHOOL_INFO.contactPlaceholders.whatsappClean}?text=${encodeURIComponent(lines.join('\n'))}`;

    setWhatsAppUrl(waUrl);
    setIsSubmitting(false);
    setSubmittedEnquiry(enquiryRecord);

    if (onSuccessSubmission) {
      onSuccessSubmission(enquiryRecord);
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmittedEnquiry(null);
    setParentName('');
    setPhoneNumber('');
    setEmail('');
    setLearnerName('');
    setGradeLevel(GRADE_LEVELS[1]);
    setPreferredContact('phone');
    setAdditionalEnquiry('');
    setErrors({});
  };

  return (
    <section id="admissions" className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Admissions Guidance & Transparency */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
                Admissions & Enrollment
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
                Your Child&apos;s Journey Starts Here.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#252B28]/80 dark:text-[#E2E8F0]/80 leading-relaxed text-balance">
                Take the next step towards a learning environment where your child can grow, discover, and shine. Complete the enquiry below and send it straight to our admissions team on WhatsApp — we reply within 24 hours on school days.
              </p>

              {/* Informational Guidelines with Content Integrity */}
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-[#F8F9F8] dark:bg-[#073322] border border-[#C6C9C7]/40 dark:border-[#0d5538]">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2]">
                        Prompt Enquiry Response
                      </div>
                      <p className="text-xs text-[#252B28]/70 dark:text-[#E2E8F0]/70 mt-0.5 leading-relaxed">
                        Enquiries are acknowledged within 24 hours during official school days (Monday to Friday, 7:30 AM – 4:30 PM).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9F8] dark:bg-[#073322] border border-[#C6C9C7]/40 dark:border-[#0d5538]">
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2]">
                        Admissions Guidance & Fee Structure
                      </div>
                      <p className="text-xs text-[#252B28]/70 dark:text-[#E2E8F0]/70 mt-0.5 leading-relaxed">
                        Official fee schedules and term calendars are shared directly by the school administration during initial consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white dark:bg-[#073322] border border-[#087A50]/30 dark:border-emerald-500/35 shadow-xs">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0" />
                    <h3 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2]">
                      Documents & Details Required
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {ADMISSION_REQUIREMENTS.map((requirement, index) => (
                      <li
                        key={requirement}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-[#094d31] text-[10px] font-bold text-[#087A50] dark:text-emerald-300">
                          {index + 1}
                        </span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                    Please bring copies to the school office during your campus visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Admissions Form or Success State */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-[#F8F9F8] dark:bg-[#073322] p-6 sm:p-10 shadow-sm relative overflow-hidden transition-colors">
              {/* Plaid Subtle Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-plaid-subtle opacity-60 pointer-events-none rounded-bl-3xl" />

              {submittedEnquiry ? (
                /* Success Confirmation State */
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight">
                    Your Enquiry Is Ready to Send
                  </h3>
                  <div className="mt-1 text-xs font-mono font-medium text-slate-500 dark:text-emerald-300/80">
                    Reference ID: {submittedEnquiry.id}
                  </div>
                  <p className="mt-3 text-sm text-[#252B28]/80 dark:text-[#E2E8F0]/85 max-w-md leading-relaxed">
                    Thank you, <span className="font-semibold text-[#075638] dark:text-emerald-300">{submittedEnquiry.parentName}</span>. Your details for{' '}
                    <span className="font-semibold text-[#075638] dark:text-emerald-300">{submittedEnquiry.gradeLevel}</span> are ready. Tap <span className="font-semibold">Open WhatsApp to Send</span> below, then press send in WhatsApp to deliver the enquiry to the school office.
                  </p>

                  <div className="mt-6 w-full max-w-md p-4 rounded-xl bg-white dark:bg-[#052618] border border-[#C6C9C7]/40 dark:border-[#0d5538] text-left text-xs space-y-2">
                    <div className="flex justify-between border-b border-[#F2F3F2] dark:border-[#084c31] pb-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Parent / Guardian:</span>
                      <span className="font-semibold text-[#252B28] dark:text-white">{submittedEnquiry.parentName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#F2F3F2] dark:border-[#084c31] pb-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Contact Number:</span>
                      <span className="font-semibold text-[#252B28] dark:text-white">{submittedEnquiry.phoneNumber}</span>
                    </div>
                    {submittedEnquiry.learnerName && (
                      <div className="flex justify-between border-b border-[#F2F3F2] dark:border-[#084c31] pb-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Learner:</span>
                        <span className="font-semibold text-[#252B28] dark:text-white">{submittedEnquiry.learnerName}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-[#F2F3F2] dark:border-[#084c31] pb-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Level of Interest:</span>
                      <span className="font-semibold text-[#087A50] dark:text-emerald-400">{submittedEnquiry.gradeLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">School Location:</span>
                      <span className="font-medium text-[#252B28] dark:text-[#E2E8F0]">{SCHOOL_INFO.location.fullAddress}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    {whatsAppUrl && (
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#075E54] text-white hover:bg-[#054d45] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp to Send</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#073322] border border-[#C6C9C7] dark:border-[#0d5538] text-[#252B28] dark:text-white hover:bg-slate-50 dark:hover:bg-[#084c31] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-[#F2F3F2] dark:border-[#084c31] pb-4">
                    <h3 className="font-heading font-bold text-lg text-[#252B28] dark:text-[#F2F3F2]">
                      Admission Enquiry Form
                    </h3>
                    <p className="text-xs text-[#252B28]/60 dark:text-[#E2E8F0]/65 mt-0.5">
                      Please provide your contact details and preferred class level.
                    </p>
                  </div>

                  {/* Parent Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentName" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Parent or Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        value={parentName}
                        onChange={(e) => {
                          setParentName(e.target.value);
                          if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                        }}
                        placeholder="e.g. Mary Wanjiku"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border ${
                          errors.parentName ? 'border-red-400 focus:ring-red-200' : 'border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50]'
                        } focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all`}
                      />
                      {errors.parentName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.parentName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        placeholder="e.g. 0712 345 678"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border ${
                          errors.phoneNumber ? 'border-red-400 focus:ring-red-200' : 'border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50]'
                        } focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Learner Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Email Address <span className="text-slate-400 dark:text-emerald-200/70 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. parent@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="learnerName" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Learner&apos;s Name <span className="text-slate-400 dark:text-emerald-200/70 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="learnerName"
                        type="text"
                        value={learnerName}
                        onChange={(e) => setLearnerName(e.target.value)}
                        placeholder="e.g. Brian Kiprop"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Grade / Class of Interest & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gradeLevel" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Class or Level of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="gradeLevel"
                        value={gradeLevel}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all"
                      >
                        {GRADE_LEVELS.map((grade) => (
                          <option key={grade} value={grade} className="dark:bg-[#041c12] dark:text-white">
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredContact" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        value={preferredContact}
                        onChange={(e) => setPreferredContact(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all"
                      >
                        <option value="phone" className="dark:bg-[#041c12] dark:text-white">Phone Call</option>
                        <option value="whatsapp" className="dark:bg-[#041c12] dark:text-white">WhatsApp Message</option>
                        <option value="email" className="dark:bg-[#041c12] dark:text-white">Email</option>
                        <option value="in-person" className="dark:bg-[#041c12] dark:text-white">In-Person School Visit</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Enquiry */}
                  <div>
                    <label htmlFor="additionalEnquiry" className="block text-xs font-semibold text-[#252B28] dark:text-[#F2F3F2] mb-1">
                      Additional Enquiry or Note <span className="text-slate-400 dark:text-emerald-200/70 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalEnquiry"
                      rows={3}
                      value={additionalEnquiry}
                      onChange={(e) => setAdditionalEnquiry(e.target.value)}
                      placeholder="Share any questions regarding admission requirements, visiting hours, or specific learner interests..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7] dark:border-[#0d5538] focus:border-[#087A50] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-[#087A50] hover:bg-[#075638] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry on WhatsApp</span>
                          <MessageCircle className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="mt-3 text-center">
                      <span className="text-xs text-slate-500 dark:text-emerald-300/70">Or chat directly on WhatsApp: </span>
                      <a
                        href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#087A50] dark:text-emerald-300 hover:underline inline-flex items-center gap-1 font-mono"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>{SCHOOL_INFO.contactPlaceholders.whatsapp}</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
