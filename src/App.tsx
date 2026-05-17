import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ─── motion presets ─── */
const ease = [0.25, 0.1, 0.25, 1] as const;

const scene = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.1, ease },
};

const lineItem = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const lineContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.45, delayChildren: 0.2 } },
};

const INTRO_LINES = [
  "أسماء...",
  "مش عارف أبدأ أقولها إزاي...",
  "بس انتي من أول لحظة",
  "في حاجة فيكي شدتني من غير سبب واضح.",
  "ومع الوقت...",
  "لقيت نفسي بفكر فيكي أكتر من الطبيعي.",
  "كأنك أحلى بنت شافتها عيني بصدق.",
];

const WARM_LINES = [
  "في ناس بتعدي في حياتنا عادي...",
  "وفي ناس وجودهم بيغيّر شكل الأيام.",
  "وانتي من النوع التاني...",
  "بهدوء من غير ما تحاولي.",
  "أجمل بنت في الدنيا في نظري...",
  "مش بس شكل،",
  "بس إحساس وراحة بيها الدنيا بتبقى أهدى.",
];

const REVEAL_LINES = [
  "فيكي هدوء مريح جدًا لأي حد حواليكي",
  "وفيكي لطف يخلي الكلام معاكي أسهل",
  "وابتسامتك بسيطة بس بتفرق جدًا",
  "والحقيقة؟ أنا بحب أشوفك مبسوطة أكتر من أي حاجة",
];

const PEAK_LINES = [
  "ولما بشوفك مبسوطة...",
  "بحس إن الدنيا كلها أخف وأبسط بكتير",
];

const FINAL_LINES = [
  "أسماء...",
  "مش كل الناس بتدخل القلب بسهولة",
  "بس انتي دخلتيه بهدوء",
  "ومن غير ما أحس...",
  "بقيتي من أجمل الحاجات اللي في يومي",
  "ونفسي أشوفك مبسوطة دايمًا...",
  "حتى لو من بعيد",
];

/* ─── shell ─── */
function SceneShell({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <motion.div
      {...scene}
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-7 py-16 text-center"
      style={{ background: bg }}
      dir="rtl"
    >
      {children}
    </motion.div>
  );
}

/* ─── button ─── */
function SoftButton({ onClick, children }: any) {
  return (
    <motion.button
      onClick={onClick}
      className="mt-10 rounded-full border border-[#c9954a]/30 px-10 py-3 text-[#e8b98a] transition"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── app ─── */
export default function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const restart = () => setStep(0);

  return (
    <main className="min-h-dvh overflow-hidden" dir="rtl">

      <AnimatePresence mode="wait">

        {/* STEP 1 */}
        {step === 0 && (
          <SceneShell
            key="s1"
            bg="linear-gradient(165deg, #1a0f08, #2d1b0e, #3d2418)"
          >
            <motion.div
              className="max-w-2xl space-y-4 text-xl text-[#f0e0cc]"
              variants={lineContainer}
              initial="initial"
              animate="animate"
            >
              {INTRO_LINES.map((t) => (
                <motion.div key={t} variants={lineItem}>
                  {t}
                </motion.div>
              ))}
            </motion.div>

            <SoftButton onClick={next}>↓ نكمل بهدوء</SoftButton>
          </SceneShell>
        )}

        {/* STEP 2 */}
        {step === 1 && (
          <SceneShell
            key="s2"
            bg="linear-gradient(#fdf6ee,#f0e0cc,#e8d4bc)"
          >
            <motion.div
              className="max-w-2xl space-y-4 text-lg text-[#2d1b0e]"
              variants={lineContainer}
              initial="initial"
              animate="animate"
            >
              {WARM_LINES.map((t) => (
                <motion.div key={t} variants={lineItem}>
                  {t}
                </motion.div>
              ))}
            </motion.div>

            <SoftButton onClick={next}>نكمل</SoftButton>
          </SceneShell>
        )}

        {/* STEP 3 */}
        {step === 2 && (
          <SceneShell
            key="s3"
            bg="linear-gradient(#f7ede2,#fdf6ee,#f0e0cc)"
          >
            <motion.div
              className="max-w-xl space-y-4 text-[#2d1b0e]"
              variants={lineContainer}
              initial="initial"
              animate="animate"
            >
              {REVEAL_LINES.map((t) => (
                <motion.div key={t} variants={lineItem}>
                  {t}
                </motion.div>
              ))}
            </motion.div>

            <SoftButton onClick={next}>نكمل</SoftButton>
          </SceneShell>
        )}

        {/* STEP 4 */}
        {step === 3 && (
          <SceneShell
            key="s4"
            bg="linear-gradient(#1a0f08,#2d1b0e,#000)"
          >
            <motion.div
              className="max-w-2xl space-y-4 text-xl text-[#fdf6ee]"
              variants={lineContainer}
              initial="initial"
              animate="animate"
            >
              {PEAK_LINES.map((t) => (
                <motion.div key={t} variants={lineItem}>
                  {t}
                </motion.div>
              ))}
            </motion.div>

            <SoftButton onClick={next}>نكمل</SoftButton>
          </SceneShell>
        )}

        {/* STEP 5 */}
        {step === 4 && (
          <SceneShell
            key="s5"
            bg="linear-gradient(#f7ede2,#fdf6ee,#e8d5c0)"
          >
            <motion.div
              className="max-w-2xl space-y-4 text-[#2d1b0e]"
              variants={lineContainer}
              initial="initial"
              animate="animate"
            >
              {FINAL_LINES.map((t) => (
                <motion.div key={t} variants={lineItem}>
                  {t}
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-[#c9954a]">✦ ✦ ✦</div>

            <SoftButton onClick={restart}>إعادة</SoftButton>
          </SceneShell>
        )}

      </AnimatePresence>
    </main>
  );
}