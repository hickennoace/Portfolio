"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Status = "idle" | "sending" | "success" | "error";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.1] dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-[14px] outline-none focus:border-blue-500/60 focus:bg-blue-500/[0.03] dark:focus:bg-blue-500/[0.06] transition-all duration-200";

export default function ContactModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const { t } = useLang();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setName(""); setEmail(""); setMessage("");
        setStatus("idle"); setErrorMsg("");
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const reset = () => {
    setName(""); setEmail(""); setMessage("");
    setStatus("idle"); setErrorMsg("");
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.contactModal.genericError);
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : t.contactModal.sendError);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.36, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg pointer-events-auto bg-white dark:bg-[#0f0f0f] rounded-2xl border border-black/[0.1] dark:border-white/[0.1] shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-black/[0.07] dark:border-white/[0.06]">
                <div>
                  <p className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.22em] uppercase mb-1">
                    {t.contactModal.eyebrow}
                  </p>
                  <h2
                    id="contact-modal-title"
                    className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight"
                  >
                    {t.contactModal.title}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  aria-label={t.contactModal.closeAria}
                  className="w-9 h-9 rounded-xl border border-black/[0.1] dark:border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:border-blue-500/30 hover:bg-blue-500/[0.06] transition-all duration-200"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <CheckCircle size={26} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-slate-900 dark:text-white mb-1.5">
                        {t.contactModal.successTitle}
                      </p>
                      <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {t.contactModal.successBody}
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="mt-1 px-7 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold transition-colors duration-200"
                    >
                      {t.contactModal.close}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.14em] uppercase">
                          {t.contactModal.nameLabel}
                        </label>
                        <input
                          ref={firstFieldRef}
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder={t.contactModal.namePlaceholder}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.14em] uppercase">
                          {t.contactModal.emailLabel}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder={t.contactModal.emailPlaceholder}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.14em] uppercase">
                        {t.contactModal.messageLabel}
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        placeholder={t.contactModal.messagePlaceholder}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-red-600 dark:text-red-400 text-[13px]"
                      >
                        <AlertCircle size={15} strokeWidth={1.8} className="shrink-0" />
                        {errorMsg}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold transition-colors duration-200 mt-1"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          {t.contactModal.sending}
                        </>
                      ) : (
                        <>
                          <Send size={14} strokeWidth={2} />
                          {t.contactModal.send}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
