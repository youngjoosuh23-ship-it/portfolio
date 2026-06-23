"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Project } from "@/lib/projects";
import { useLang } from "@/components/LangProvider";

function SandboxViewer({
  project,
  onShowReport,
}: {
  project: Project;
  onShowReport: () => void;
}) {
  const { lang } = useLang();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <button
          onClick={onShowReport}
          className="font-mono text-xs px-3 py-1.5 rounded border border-[#FF6347] text-[#FF6347] bg-[#FF6347]/10 hover:bg-[#FF6347]/20 transition-colors"
        >
          {lang === "ko" ? "보고서 보기" : "View Report"}
        </button>
        <a
          href={project.sandboxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto font-mono text-xs text-[#FF6347] hover:text-[#FF8569] transition-colors"
        >
          {lang === "ko" ? "새 탭에서 열기 ↗" : "Open in new tab ↗"}
        </a>
      </div>

      {/* Frame */}
      <div className="flex justify-center">
        <div className="w-full">
          <div className="relative w-full aspect-video bg-[#0A0A0C] rounded-xl border border-[#232830] overflow-hidden">
            <div className="flex items-center gap-2 px-4 h-9 bg-[#11141A] border-b border-[#232830]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <a
                href={project.sandboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 mx-4 h-5 bg-[#191C21] rounded text-[10px] font-mono text-[#6E7E90] flex items-center px-2 overflow-hidden hover:text-[#E7EEF5] transition-colors"
              >
                {project.sandboxUrl}
              </a>
            </div>
            <iframe
              src={project.sandboxUrl}
              className="w-full h-full border-0"
              title={project.title}
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentViewer({
  project,
  report,
}: {
  project: Project;
  report?: ReactNode;
}) {
  const { document: doc } = project;
  const { lang } = useLang();

  if (report) {
    return <div className="bg-[#14171C] border border-[#232830] rounded-xl p-6 md:p-8">{report}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Overview */}
      <div className="bg-[#14171C] border border-[#232830] rounded-xl p-6">
        <div className="font-mono text-xs text-[#6E7E90] mb-2">OVERVIEW</div>
        <p className="text-[#E7EEF5] leading-relaxed whitespace-pre-line">{doc.overview[lang]}</p>
      </div>

      {/* KPI Cards */}
      <div>
        <div className="font-mono text-xs text-[#6E7E90] mb-4">KEY METRICS</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {doc.kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-[#14171C] border border-[#232830] rounded-xl p-4 flex flex-col gap-2"
            >
              <span className="font-mono text-[11px] text-[#6E7E90]">
                {kpi.label[lang]}
              </span>
              <span className="text-2xl font-bold text-[#E7EEF5] whitespace-pre-line">
                {kpi.value[lang]}
              </span>
              {kpi.delta && (
                <span
                  className={`font-mono text-[11px] whitespace-pre-line ${
                    kpi.positive ? "text-[#10B981]" : "text-[#EF4444]"
                  }`}
                >
                  {kpi.delta[lang]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Core competencies / learnings */}
      {(doc.keywords?.length || doc.learnings) && (
        <div className="bg-[#14171C] border border-[#232830] rounded-xl p-6">
          <div className="font-mono text-xs text-[#6E7E90] mb-4">
            {lang === "ko" ? "핵심 역량 & 배운 점" : "Core Skills & Learnings"}
          </div>
          {doc.keywords && doc.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {doc.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] rounded-sm px-2 py-1 text-[#FF6347] border border-[#FF6347]/30 bg-[#FF6347]/10"
                >
                  {kw[lang]}
                </span>
              ))}
            </div>
          )}
          {doc.learnings && (
            <p className="text-[#E7EEF5] leading-relaxed">{doc.learnings[lang]}</p>
          )}
        </div>
      )}

      {/* Chart */}
      {doc.chartData && doc.chartData.length > 0 && (
        <div className="bg-[#14171C] border border-[#232830] rounded-xl p-6">
          <div className="font-mono text-xs text-[#6E7E90] mb-6">
            {doc.chartLabel?.[lang]} TREND
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart
              data={doc.chartData}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6347" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6347" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="areaGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#4682B4" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4682B4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#232830" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#6E7E90", fontSize: 11, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6E7E90", fontSize: 11, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#191C21",
                  border: "1px solid #232830",
                  borderRadius: "8px",
                  color: "#E7EEF5",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
                cursor={{ stroke: "#FF6347", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FF6347"
                strokeWidth={2}
                fill="url(#areaGradient)"
                dot={false}
              />
              {doc.chartData[0].secondary !== undefined && (
                <Area
                  type="monotone"
                  dataKey="secondary"
                  stroke="#4682B4"
                  strokeWidth={2}
                  fill="url(#areaGradient2)"
                  dot={false}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Attachments */}
      {doc.attachments && doc.attachments.length > 0 && (
        <div className="bg-[#14171C] border border-[#232830] rounded-xl p-6">
          <div className="font-mono text-xs text-[#6E7E90] mb-4">ATTACHMENTS</div>
          <div className="flex flex-wrap gap-4">
            {doc.attachments.map((file) => (
              <a
                key={file.url}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 w-48"
              >
                {file.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={file.thumbnail}
                    alt={file.label}
                    className="w-full rounded-lg border border-[#232830] group-hover:border-[#FF6347]/50 transition-colors"
                  />
                ) : null}
                <span className="font-mono text-xs text-[#FF6347] group-hover:text-[#FF8569] transition-colors">
                  {file.label} ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type Tab = "sandbox" | "document";

export default function ProjectDetail({
  project,
  report,
}: {
  project: Project;
  report?: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<Tab>(
    project.hasLiveDemo === false ? "document" : "sandbox"
  );

  if (project.hasLiveDemo === false) {
    return <DocumentViewer project={project} report={report} />;
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Tab switcher */}
      <div className="flex items-center gap-1 bg-[#14171C] border border-[#232830] rounded-lg p-1 w-fit">
        {(
          [
            { key: "sandbox", label: "Sandbox Viewer" },
            { key: "document", label: "Document" },
          ] as { key: Tab; label: string }[]
        ).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative font-mono text-xs px-4 py-2 rounded transition-colors ${
              activeTab === tab.key
                ? "text-[#E7EEF5]"
                : "text-[#6E7E90] hover:text-[#E7EEF5]"
            }`}
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-[#191C21] border border-[#FF6347]/30 rounded"
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "sandbox" ? (
            <SandboxViewer
              project={project}
              onShowReport={() => setActiveTab("document")}
            />
          ) : (
            <DocumentViewer project={project} report={report} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
