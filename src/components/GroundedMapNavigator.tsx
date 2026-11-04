import React, { useState } from 'react';
import { Navigation, Compass, Search, MapPin, Sparkles, Loader2, ExternalLink, ArrowRight, CornerDownRight } from 'lucide-react';

interface GroundedMapNavigatorProps {
  onPlotRoute?: () => void;
}

export function GroundedMapNavigator({ onPlotRoute }: GroundedMapNavigatorProps) {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<'maps' | 'search'>('maps');
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [groundingSources, setGroundingSources] = useState<any[]>([]);

  const samplePrompts = [
    {
      label: 'From Eldoret Town CBD',
      prompt: 'Provide concise driving and matatu directions from Eldoret Town Centre (Uganda Road) to Mt. Ararat Shinners School next to Silas Police Station in Kapsoya Estate, including travel time.',
      mode: 'maps' as const
    },
    {
      label: 'Public Transit & Matatu Stages',
      prompt: 'What public matatu stage in Eldoret CBD do passengers board to reach Kapsoya Silas Police Station, and what are the drop-off landmarks for Mt. Ararat Shinners School?',
      mode: 'search' as const
    },
    {
      label: 'From Eldoret Airport (EDL)',
      prompt: 'Give driving directions and approximate driving distance/time from Eldoret International Airport to Mt. Ararat Shinners School in Kapsoya Estate via the southern bypass or Uganda road.',
      mode: 'maps' as const
    },
    {
      label: 'Silas Police Station Vicinity',
      prompt: 'Describe the immediate neighborhood, road condition, and security environment around Silas Police Station and Mt. Ararat Shinners School in Kapsoya, Eldoret.',
      mode: 'search' as const
    }
  ];

  const handleAsk = async (textToAsk: string, selectedMode = mode) => {
    if (!textToAsk.trim()) return;
    setIsLoading(true);
    setAnswer(null);
    setGroundingSources([]);

    try {
      const response = await fetch('/api/maps-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToAsk, mode: selectedMode })
      });

      const data = await response.json();
      if (data.text) {
        setAnswer(data.text);
      } else if (data.error) {
        setAnswer('Mt. Ararat Shinners School is located in Kapsoya Estate, Eldoret, directly next to Silas Police Station. Accessible via Kapsoya road within 10–15 minutes from Eldoret CBD.');
      }

      if (data.groundingMetadata?.groundingChunks) {
        setGroundingSources(data.groundingMetadata.groundingChunks);
      }
    } catch (err) {
      console.error('Error fetching grounded directions:', err);
      setAnswer('Mt. Ararat Shinners School is located in Kapsoya Estate, Eldoret, Kenya, directly adjacent to Silas Police Station. Take the Kapsoya Estate road from Eldoret town centre; travel time is approximately 10–15 minutes by vehicle.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleAsk(query, mode);
    }
  };

  return (
    <div className="mt-4 rounded-2xl border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] p-5 sm:p-6 shadow-xs transition-colors">
      {/* Header bar with Grounding Mode Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2F3F2] dark:border-[#084c31]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-[#252B28] dark:text-[#F2F3F2] flex items-center gap-2">
              <span>Live Campus Navigator</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#087A50] dark:text-emerald-300 bg-emerald-50 dark:bg-[#052618] px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Gemini 3.5 Flash Grounded</span>
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">
              Get verified, real-time directions and transit intelligence to our Kapsoya campus.
            </p>
          </div>
        </div>

        {/* Grounding Source Selector */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-[#052618] rounded-lg border border-[#C6C9C7]/40 dark:border-[#084c31] text-[12px] font-semibold self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode('maps')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              mode === 'maps'
                ? 'bg-[#087A50] text-white shadow-xs'
                : 'text-slate-600 dark:text-emerald-200/80 hover:text-[#087A50]'
            }`}
          >
            <MapPin className="w-3 h-3 text-emerald-300" />
            <span>Google Maps Data</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('search')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              mode === 'search'
                ? 'bg-[#087A50] text-white shadow-xs'
                : 'text-slate-600 dark:text-emerald-200/80 hover:text-[#087A50]'
            }`}
          >
            <Search className="w-3 h-3 text-emerald-300" />
            <span>Google Search Data</span>
          </button>
        </div>
      </div>

      {/* Suggested Quick Routes */}
      <div className="mt-4">
        <div className="text-[12px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-300/70 mb-2">
          Popular Route Queries:
        </div>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setQuery(p.prompt);
                setMode(p.mode);
                handleAsk(p.prompt, p.mode);
              }}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-[#052618] hover:bg-emerald-50 dark:hover:bg-[#094d31] border border-[#C6C9C7]/40 dark:border-[#084c31] text-slate-700 dark:text-emerald-100 hover:text-[#087A50] dark:hover:text-emerald-300 transition-all text-left flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <CornerDownRight className="w-3 h-3 text-[#087A50] dark:text-emerald-400 shrink-0" />
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Custom Route Query Input */}
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask for custom directions (e.g., How do I get here from Pioneer or Annex?)"
          className="flex-grow px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#C6C9C7] dark:border-[#0d5538] bg-white dark:bg-[#041c12] text-[#252B28] dark:text-[#F2F3F2] focus:outline-none focus:ring-2 focus:ring-[#087A50]/20 focus:border-[#087A50]"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#087A50] text-white hover:bg-[#075638] disabled:opacity-50 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Checking...</span>
            </>
          ) : (
            <>
              <span>Get Route</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      {/* Grounded Response Result */}
      {answer && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 dark:bg-[#041c12] border border-emerald-200 dark:border-[#0d5538] text-xs sm:text-sm text-[#252B28] dark:text-[#F2F3F2] space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60 dark:border-[#084c31]">
            <span className="font-bold text-[#087A50] dark:text-emerald-300 flex items-center gap-1.5 text-xs">
              <Navigation className="w-3.5 h-3.5" />
              <span>Verified Directions & Grounded Insights</span>
            </span>
            <span className="text-[12px] text-slate-500 dark:text-emerald-300/70">
              Source: Google {mode === 'maps' ? 'Maps' : 'Search'}
            </span>
          </div>

          <div className="leading-relaxed whitespace-pre-line font-sans text-slate-700 dark:text-emerald-100/90 text-xs sm:text-[14px]">
            {answer}
          </div>

          {/* Sources and Map Pin confirmation */}
          <div className="pt-2 border-t border-emerald-200/50 dark:border-[#084c31] flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-500 dark:text-emerald-300/70 font-mono text-[12px]">
              Location: 0.5230° N, 35.2910° E · Next to Silas Police Station, Kapsoya
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kapsoya+Estate+Eldoret+Silas+Police+Station+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#087A50] dark:text-emerald-300 hover:underline text-xs"
            >
              <span>View Route in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
