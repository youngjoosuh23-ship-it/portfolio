"use client";

import { useState } from "react";
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

type DeviceMode = "desktop" | "tablet" | "mobile";

const deviceConfig: Record<
  DeviceMode,
  { label: string; width: string; aspect: string }
> = {
  desktop: { label: "Desktop", width: "100%", aspect: "aspect-video" },
  tablet: {
    label: "Tablet",
    width: "max-w-[640px]",
    aspect: "aspect-[3/4]",
  },
  mobile: {
    label: "Mobile",
    width: "max-w-[375px]",
    aspect: "aspect-[9/19]",
  },
};

function SandboxViewer({ project }: { project: Project }) {
  const [device, setDevice] = useState<DeviceMode>("desktop");

  return (
    <div className="flex flex-col gap-6">
      {/* Device switcher */}
      <div className="flex items-center gap-2">
        {(Object.keys(deviceConfig) as DeviceMode[]).map((d) => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
              device === d
                ? "border-[#3B82F6] text-[#3B82F6] bg-[#3B82F6]/10"
                : "border-[#333336] text-[#88888E] hover:border-[#555558] hover:text-[#F0F0F0]"
            }`}
          >
            {deviceConfig[d].label.toUpperCase()}
          </button>
        ))}
        <a
          href={project.sandboxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto font-mono text-xs text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
        >
          새 탭에서 열기 ↗
        </a>
      </div>

      {/* Frame */}
      <div className="flex justify-center">
        <motion.div
          key={device}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className={`w-full ${deviceConfig[device].width}`}
        >
          <div
            className={`relative w-full ${deviceConfig[device].aspect} bg-[#111112] rounded-xl border border-[#333336] overflow-hidden`}
          >
            {/* Browser chrome (desktop only) */}
            {device === "desktop" && (
              <div className="flex items-center gap-2 px-4 h-9 bg-[#1E1E20] border-b border-[#333336]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <a
                  href={project.sandboxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 mx-4 h-5 bg-[#2A2A2D] rounded text-[10px] font-mono text-[#88888E] flex items-center px-2 overflow-hidden hover:text-[#F0F0F0] transition-colors"
                >
                  {project.sandboxUrl}
                </a>
              </div>
            )}
            <iframe
              src={project.sandboxUrl}
              className="w-full h-full border-0"
              title={project.title}
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DocumentViewer({ project }: { project: Project }) {
  const { document: doc } = project;

  return (
    <div className="flex flex-col gap-8">
      {/* Overview */}
      <div className="bg-[#222224] border border-[#333336] rounded-xl p-6">
        <div className="font-mono text-xs text-[#88888E] mb-2">OVERVIEW</div>
        <p className="text-[#F0F0F0] leading-relaxed">{doc.overview}</p>
      </div>

      {/* KPI Cards */}
      <div>
        <div className="font-mono text-xs text-[#88888E] mb-4">KEY METRICS</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {doc.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-[#222224] border border-[#333336] rounded-xl p-4 flex flex-col gap-2"
            >
              <span className="font-mono text-[11px] text-[#88888E]">
                {kpi.label}
              </span>
              <span className="text-2xl font-bold text-[#F0F0F0]">
                {kpi.value}
              </span>
              {kpi.delta && (
                <span
                  className={`font-mono text-[11px] ${
                    kpi.positive ? "text-[#10B981]" : "text-[#EF4444]"
                  }`}
                >
                  {kpi.delta}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      {doc.chartData && doc.chartData.length > 0 && (
        <div className="bg-[#222224] border border-[#333336] rounded-xl p-6">
          <div className="font-mono text-xs text-[#88888E] mb-6">
            {doc.chartLabel} TREND
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart
              data={doc.chartData}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="areaGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333336" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#88888E", fontSize: 11, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#88888E", fontSize: 11, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2A2D",
                  border: "1px solid #333336",
                  borderRadius: "8px",
                  color: "#F0F0F0",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
                cursor={{ stroke: "#3B82F6", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#areaGradient)"
                dot={false}
              />
              {doc.chartData[0].secondary !== undefined && (
                <Area
                  type="monotone"
                  dataKey="secondary"
                  stroke="#F59E0B"
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
        <div className="bg-[#222224] border border-[#333336] rounded-xl p-6">
          <div className="font-mono text-xs text-[#88888E] mb-4">ATTACHMENTS</div>
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
                    className="w-full rounded-lg border border-[#333336] group-hover:border-[#3B82F6]/50 transition-colors"
                  />
                ) : null}
                <span className="font-mono text-xs text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors">
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

export default function ProjectDetail({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<Tab>(
    project.hasLiveDemo === false ? "document" : "sandbox"
  );

  if (project.hasLiveDemo === false) {
    return <DocumentViewer project={project} />;
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Tab switcher */}
      <div className="flex items-center gap-1 bg-[#222224] border border-[#333336] rounded-lg p-1 w-fit">
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
                ? "text-[#F0F0F0]"
                : "text-[#88888E] hover:text-[#F0F0F0]"
            }`}
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-[#2A2A2D] border border-[#3B82F6]/30 rounded"
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
            <SandboxViewer project={project} />
          ) : (
            <DocumentViewer project={project} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
